/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import {
  ArrowPathIcon,
  ArrowPathRoundedSquareIcon,
  ArrowUpTrayIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import TimeAgo from "react-timeago";
import TweetBox from "./TweetBox";

function Message({ tweet }) {
  return (
    <div className="flex flex-col p-5 space-x-3 border-cyan-50 border-y hover:bg-slate-50">
      {/* top */}
      <div className="flex space-x-3">
        <img
          width={100}
          height={100}
          src={tweet.profileImg}
          alt="profile"
          className="object-cover w-10 h-10 border rounded-full"
        />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 text-[13px] font-bold">{tweet.username}</p>
            <p className="hidden text-[13px] text-gray-500 sm:inline">
              @{tweet.username.replace(/\s+/g, "").toLowerCase()} ·
            </p>
            <TimeAgo
              date={tweet._createdAt}
              className="text-[12px] text-gray-500"
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
      <div className="flex justify-around mt-5">
        <div className="flex items-center space-x-3 cursor-pointer">
          <ChatBubbleOvalLeftIcon className="p-2 text-gray-400 rounded-full w-9 h-9 hover:text-sky-500 hover:bg-sky-100" />
          <p className="text-xs text-gray-400">5</p>
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
    </div>
  );
}

function Feed({ tweets }) {
  return (
    <div className="col-span-7 border-x lg:col-span-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <ArrowPathIcon className="mt-5 mr-5 transition-all duration-500 ease-out cursor-pointer w-7 h-7 text-twitter hover:rotate-180 active:scale-125" />
      </div>
      {/* Middle (Input) */}
      <div>
        <TweetBox />
      </div>
      {/* Bottom (All Tweets) */}
      <div>
        {tweets.map((tweet) => (
          <Message key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
