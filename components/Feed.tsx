/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import { ArrowPathIcon } from "@heroicons/react/24/outline";

import Tweet from "./Tweet";
import TweetBox from "./TweetBox";

function Feed({ tweets }) {
  // console.log(tweets);
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
          <Tweet key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
