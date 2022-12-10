import { useState } from "react";
import Image from "next/image";
import {
  CalendarIcon,
  FaceSmileIcon,
  MagnifyingGlassCircleIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

function TweetBox() {
  const [input, setInput] = useState("");
  return (
    <div className="flex p-5 space-x-2">
      <Image
        className="object-cover mt-5 rounded-full h-14 w-14"
        src="/plain-avatar.jpeg"
        width={200}
        height={200}
        alt="avatar"
      />

      <div className="flex-1 pl-2">
        <form className="flex flex-col flex-1">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="What's happening?"
            className="w-full h-24 text-sm placeholder-gray-900 outline-none"
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-3 text-twitter">
              <PhotoIcon className="btn-tweetbox" />
              <MagnifyingGlassCircleIcon className="btn-tweetbox" />
              <FaceSmileIcon className="btn-tweetbox" />
              <CalendarIcon className="btn-tweetbox" />
              <MapPinIcon className="btn-tweetbox" />
            </div>
            <button
              disabled={!input}
              className="px-5 py-2 text-sm font-bold text-white rounded-full bg-twitter disabled:opacity-50"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
