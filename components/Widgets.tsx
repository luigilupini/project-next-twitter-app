import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { TwitterTimelineEmbed } from "react-twitter-embed";
/* # https://www.npmjs.com/package/react-twitter-embed
React Twitter Embed Component is a simple way to add Twitter Widgets. */
function Widgets() {
  return (
    <div className="hidden min-h-screen col-span-2 px-2 mt-5 lg:inline">
      {/* Search Container*/}
      <div className="flex items-center p-3 space-x-2 bg-gray-100 rounded-full">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
        <input
          className="flex-1 bg-transparent outline-none text"
          type="text"
          placeholder="Search Twitter"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="hastytoro"
        options={{ height: 1000 }}
      />
    </div>
  );
}

export default Widgets;
