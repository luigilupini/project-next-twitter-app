/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import { useRef, useState } from "react";
import Image from "next/image";
import {
  CalendarIcon,
  FaceSmileIcon,
  MagnifyingGlassCircleIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { fetchTweets } from "../utils/fetchTweets";
import { toast } from "react-hot-toast";

function TweetBox({ setTweets }) {
  const [image, setImage] = useState("");
  const imageInputRef = useRef(null);
  const [imageBoxOpen, setImageBoxOpen] = useState(false);
  const [input, setInput] = useState("");

  const { data: session } = useSession();

  const addImageToTweet = (e) => {
    e.preventDefault();
    if (!imageInputRef.current.value) return;
    setImage(imageInputRef.current.value);
    imageInputRef.current.value = "";
    setImageBoxOpen(false);
  };

  const postTweet = async () => {
    const tweetBody = {
      text: input,
      username: session?.user?.name || "Unknown user",
      profileImg: session?.user?.image || "/plain-avatar.jpeg",
      image: image,
    };
    const result = await fetch(`/api/addTweet`, {
      body: JSON.stringify(tweetBody), // stringify toward backend!
      method: "POST",
    });
    const json = await result.json();
    const newTweets = await fetchTweets();
    setTweets(newTweets);
    toast("Tweet Posted", {
      icon: "🕊️",
    });
    return json;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postTweet();
    setInput("");
    setImage("");
    setImageBoxOpen(false);
  };

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
              <PhotoIcon
                onClick={() => setImageBoxOpen(!imageBoxOpen)}
                className="btn-tweetbox"
              />
              <MagnifyingGlassCircleIcon className="btn-tweetbox" />
              <FaceSmileIcon className="btn-tweetbox" />
              <CalendarIcon className="btn-tweetbox" />
              <MapPinIcon className="btn-tweetbox" />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!input || !session}
              className="px-5 py-2 text-sm font-bold text-white rounded-full bg-twitter disabled:opacity-50"
            >
              Tweet
            </button>
          </div>

          {imageBoxOpen && (
            <div>
              <form className="flex px-4 py-2 mt-5 mb-2 text-xs text-white rounded-lg bg-twitter/80">
                <input
                  ref={imageInputRef}
                  type="text"
                  placeholder="Provide image url..."
                  className="flex-1 text-white bg-transparent outline-none placeholder:text-white placeholder:mx-2 placeholder:px-2"
                />
                <button
                  type="submit"
                  onClick={addImageToTweet}
                  className="font-bold text-white"
                >
                  Add Image
                </button>
              </form>
            </div>
          )}
          {image && (
            <img
              src={image}
              alt=""
              className="object-contain w-full h-40 mt-10 rounded-xl"
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
