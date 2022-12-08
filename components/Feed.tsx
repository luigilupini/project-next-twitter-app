import { ArrowPathIcon } from "@heroicons/react/24/outline";
import TweetBox from "./TweetBox";

function Feed() {
  return (
    <div className="col-span-7 border-x lg:col-span-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <ArrowPathIcon className="mt-5 mr-5 transition-all duration-500 ease-out cursor-pointer w-7 h-7 text-twitter hover:rotate-180 active:scale-125" />
      </div>
      {/* Middle Input */}
      <div>
        <TweetBox />
      </div>
    </div>
  );
}

export default Feed;
