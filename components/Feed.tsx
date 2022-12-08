import { ArrowPathIcon } from "@heroicons/react/24/outline";

function Feed() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <ArrowPathIcon className="w-8 h-8 mt-5 mr-5 transition-all duration-500 ease-out cursor-pointer text-twitter hover:rotate-180 active:scale-125" />
      </div>
    </div>
  );
}

export default Feed;
