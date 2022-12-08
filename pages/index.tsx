import { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import Widgets from "../components/Widgets";

// `NextPage` is a page type used to guide the creation of pages.
const Home: NextPage = () => {
  return (
    // <div className="bg-[#15202B] text-[#F8F9F9]">
    <div className="max-h-screen mx-auto overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Home | Twitter</title>
      </Head>

      <main className="grid grid-cols-9">
        <SideBar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
};

export default Home;
