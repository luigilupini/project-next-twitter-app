import { GetServerSideProps } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import Widgets from "../components/Widgets";
import { Tweet } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";

interface Props {
  tweets: Tweet[];
}

// `NextPage` is a page type used to guide the creation of pages.
const Home = ({ tweets }: Props) => {
  console.log(tweets);
  return (
    // <div className="bg-[#15202B] text-[#F8F9F9]">
    <div className="max-h-screen mx-auto overflow-hidden lg:max-w-7xl text-[#0F1419]">
      <Head>
        <title>Home | Twitter</title>
      </Head>

      <main className="grid grid-cols-9">
        <SideBar />
        <Feed tweets={tweets} />
        <Widgets />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  return {
    props: {
      tweets: tweets,
    },
  };
};
