/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import {
  ArrowPathRoundedSquareIcon,
  ArrowUpTrayIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import TimeAgo from "react-timeago";
import { fetchComments } from "../utils/fetchComments";
import Comment from "./Comment";

function Tweet({ tweet }) {
  const [comments, setComments] = useState([]);

  const refreshComments = async () => {
    const comments = await fetchComments(tweet._id);
    setComments(comments);
  };
  useEffect(() => {
    refreshComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              className="object-cover m-2 mb-1 ml-0 shadow-sm rounded-2xl max-h-72"
            />
          )}
        </div>
      </div>
      {/* bottom */}
      <div className="flex justify-around mt-1">
        <div className="flex items-center space-x-3 cursor-pointer">
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
      {/* comments */}
      {comments?.length > 0 && (
        <div className="p-5 my-2 mt-5 space-y-5 overflow-y-scroll border-t border-gray-100 max-h-44">
          {comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Tweet;
