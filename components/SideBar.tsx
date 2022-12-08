// @ts-nocheck
import Image from "next/image";

import {
  BellIcon,
  BookmarkIcon,
  EnvelopeIcon,
  HashtagIcon,
  HomeIcon,
  ClipboardDocumentListIcon,
  EllipsisHorizontalCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function Row({ Icon, title }) {
  return (
    <div
      className="flex items-center px-4 py-3 space-x-2 transition-all duration-150 rounded-full cursor-pointer max-w-fit hover:bg-slate-100 group" /* hover:bg-gray-800 */
    >
      <Icon className="w-6 h-6" />
      <p className="hidden text-sm md:inline-flex group-hover:text-twitter lg:text-base">
        {title}
      </p>
    </div>
  );
}

function SideBar() {
  return (
    <div className="flex flex-col items-center col-span-2 px-4 md:items-start">
      <Image
        src={"/logo.png"}
        width={200}
        height={200}
        alt="logo"
        className="w-10 h-10 m-5"
      />

      <Row Icon={HomeIcon} title="Home" />
      <Row Icon={HashtagIcon} title="Explore" />
      <Row Icon={BellIcon} title="Notifications" />
      <Row Icon={EnvelopeIcon} title="Messages" />
      <Row Icon={BookmarkIcon} title="Bookmarks" />
      <Row Icon={ClipboardDocumentListIcon} title="Lists" />
      <Row Icon={UserIcon} title="Profile" />
      <Row Icon={EllipsisHorizontalCircleIcon} title="More" />
    </div>
  );
}

export default SideBar;
