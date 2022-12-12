/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import TimeAgo from "react-timeago";

function Comment({ comment }) {
  return (
    <div key={comment._id} className="relative flex space-x-2">
      <hr className="absolute h-8 border-gray-200 left-[21px] top-10 border-x" />
      <img
        src={comment.profileImg}
        alt="profile"
        width={100}
        height={100}
        className="z-10 object-cover mt-2 rounded-full w-7 h-7"
      />
      <div>
        <div className="flex items-center space-x-1">
          <p className="mr-1 text-[12px] font-bold">{comment.username}</p>
          <p className="hidden text-[12px] text-gray-500 lg:inline">
            @{comment.username.replace(/\s+/g, "").toLowerCase()} ·
          </p>
          <TimeAgo
            date={comment._createdAt}
            className="text-[12px] text-gray-500"
          />
        </div>
        <p className="pt-1 text-[12px]">{comment.comment}</p>
      </div>
    </div>
  );
}

export default Comment;
