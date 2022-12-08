import { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";

// `NextPage` is a page type used to guide the creation of pages.
const Home: NextPage = () => {
  return (
    // <div className="bg-[#15202B] text-[#F8F9F9]">
    <div>
      <Head>
        <title>Home | Twitter</title>
      </Head>
      {/* Header */}
      <SideBar />
      <Feed />
      {/* Widgets */}
    </div>
  );
};

export default Home;
