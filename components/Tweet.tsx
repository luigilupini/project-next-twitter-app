/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import {
  ArrowPathRoundedSquareIcon,
  ArrowUpTrayIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import TimeAgo from "react-timeago";
import { fetchComments } from "../utils/fetchComments";
import Comment from "./Comment";

function Tweet({ tweet }) {
  const [comments, setComments] = useState([]);
  const [commentsBox, setCommentsBox] = useState(false);
  const [input, setInput] = useState("");
  const { data: session } = useSession();

  const refreshComments = async () => {
    const comments = await fetchComments(tweet._id);
    setComments(comments);
  };
  useEffect(() => {
    refreshComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const postComment = async () => {
    const commentBody = {
      comment: input,
      username: session?.user?.name || "Unknown user",
      profileImg: session?.user?.image || "/plain-avatar.jpeg",
      tweet: {
        _type: "reference",
        _ref: tweet._id,
      },
    };
    const result = await fetch(`/api/addComment`, {
      body: JSON.stringify(commentBody), // stringify toward backend!
      method: "POST",
    });
    const json = await result.json();

    const newComments = await fetchComments(tweet._id);
    setComments(newComments);

    toast("Comment Posted", {
      icon: "🕊️",
    });
    return json;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment();
    setInput("");
    setCommentsBox(false);
  };
  return (
    <div className="flex flex-col p-5 space-x-3 border-b border-gray-200 hover:bg-slate-50">
      {/* top */}
      <div className="flex space-x-3">
        <img
          width={100}
          height={100}
          src={tweet.profileImg}
          alt="profile"
          className="object-cover w-10 h-10 rounded-full"
        />
        <div>
          <div className="flex items-baseline space-x-1">
            <p className="mr-1 text-[13px] font-bold">{tweet.username}</p>
            <p className="hidden text-[13px] text-gray-500 sm:inline">
              @{tweet.username.replace(/\s+/g, "").toLowerCase()} ·
            </p>
            <TimeAgo
              date={tweet._createdAt}
              className="text-[13px] text-gray-500"
            />
          </div>
          <p className="pt-1 text-[13px]">{tweet.text}</p>
          {/* middle */}
          {tweet.image && (
            <img
              src={tweet.image}
              alt="tweetImg"
              className="object-cover my-4 mb-1 ml-0 shadow-sm rounded-2xl max-h-72"
            />
          )}
        </div>
      </div>
      {/* bottom */}
      <div className="flex justify-around mt-2">
        <div
          onClick={() => session && setCommentsBox(!commentsBox)}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <ChatBubbleOvalLeftIcon className="p-2 text-gray-400 rounded-full w-9 h-9 hover:text-sky-500 hover:bg-sky-100" />
          <p className="text-xs text-gray-400">{comments.length}</p>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer">
          <ArrowPathRoundedSquareIcon className="p-2 text-gray-400 rounded-full w-9 h-9 hover:bg-green-100 hover:text-green-600" />
        </div>
        <div className="flex items-center space-x-3 cursor-pointer">
          <HeartIcon className="p-2 text-gray-400 rounded-full w-9 h-9 hover:bg-pink-100 hover:text-pink-400" />
        </div>
        <div className="flex items-center space-x-3 cursor-pointer">
          <ArrowUpTrayIcon className="p-2 text-gray-400 rounded-full w-9 h-9 hover:bg-sky-100 hover:text-sky-500" />
        </div>
      </div>
      {/* comment input box */}
      {commentsBox && (
        <form
          onSubmit={handleSubmit}
          className="flex px-4 py-2 mt-3 space-x-3 text-xs"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 bg-gray-100 rounded-lg outline-none placeholder:mx-2 placeholder:px-2"
            type="text"
            placeholder="Write a comment..."
          />
          <button
            type="submit"
            disabled={!input}
            className="text-twitter disabled:text-gray-200"
          >
            Post
          </button>
        </form>
      )}

      {/* comments */}
      {comments?.length > 0 && (
        <div className="p-5 my-2 mt-5 space-y-5 overflow-y-scroll border-t border-gray-100 max-h-44 scrollbar-hide">
          {comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Tweet;
