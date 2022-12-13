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
import { signIn, signOut, useSession } from "next-auth/react";

function Row({ Icon, title, onClick }) {
  return (
    <div
      onClick={() => onClick?.()}
      className="flex items-center px-4 py-2 my-2 space-x-2 transition-all duration-150 rounded-full cursor-pointer max-w-fit hover:bg-gray-200 group"
    >
      <Icon className="w-7 h-7" />
      <p className="hidden text-sm font-medium md:inline-flex lg:text-base">
        {title}
      </p>
    </div>
  );
}

function SideBar() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col items-center col-span-2 px-4 mt-1 md:items-start">
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
      <Row
        onClick={session ? signOut : signIn}
        Icon={UserIcon}
        title={session ? "Sign Out" : "Sign In"}
      />
      <Row Icon={EllipsisHorizontalCircleIcon} title="More" />
    </div>
  );
}

export default SideBar;
