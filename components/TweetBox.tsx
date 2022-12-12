import { useState } from "react";
import Image from "next/image";
import {
  CalendarIcon,
  FaceSmileIcon,
  MagnifyingGlassCircleIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

function TweetBox() {
  const [input, setInput] = useState("");
  const { data: session } = useSession();
  // console.log(session);
  return (
    <div className="flex p-5 space-x-2 border-b border-gray-200">
      <Image
        className="object-cover mt-5 rounded-full h-14 w-14"
        src={session?.user?.image || "/plain-avatar.jpeg"}
        width={500}
        height={500}
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
              disabled={!input || !session}
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
