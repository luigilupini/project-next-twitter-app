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

function SideBarRow({ Icon, title }) {
  return (
    <div
      className="flex items-center px-4 py-3 space-x-2 transition-all duration-150 rounded-full cursor-pointer max-w-fit hover:bg-slate-100 group" /* hover:bg-gray-800 */
    >
      <Icon className="w-6 h-6" />
      <p className="group-hover:text-twitter">{title}</p>
    </div>
  );
}

function SideBar() {
  return (
    <div className="flex flex-col">
      <Image
        src={"/logo.png"}
        width={200}
        height={200}
        alt="logo"
        className="w-10 h-10"
      />
      <SideBarRow Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={HashtagIcon} title="Explore" />
      <SideBarRow Icon={BellIcon} title="Notifications" />
      <SideBarRow Icon={EnvelopeIcon} title="Messages" />
      <SideBarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SideBarRow Icon={ClipboardDocumentListIcon} title="Lists" />
      <SideBarRow Icon={UserIcon} title="Profile" />
      <SideBarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
    </div>
  );
}

export default SideBar;
