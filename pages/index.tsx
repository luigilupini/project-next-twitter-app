import { NextPage } from "next";
import Head from "next/head";
import SideBar from "../components/SideBar";

// `NextPage` is a page type used to guide the creation of pages.
const Home: NextPage = () => {
  return (
    <div className="bg-[#15202B] text-[#F8F9F9]">
      <Head>
        <title>Home | Twitter</title>
      </Head>
      {/* Header */}
      <SideBar />
      {/* CentreFeed */}
      {/* Widgets */}
    </div>
  );
};

export default Home;
