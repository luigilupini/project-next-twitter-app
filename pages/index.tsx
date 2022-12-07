import { NextPage } from "next";
import Head from "next/head";

// `NextPage` is a page type used to guide the creation of pages.
const Home: NextPage = () => {
  return (
    <div className="bg-[#15202B] min-h-screen text-[#F8F9F9]">
      <Head>
        <title>Home | Twitter</title>
      </Head>
      Ready to continue with the build!
      {/* Header */}
      {/* CentreFeed */}
      {/* Widgets */}
    </div>
  );
};

export default Home;
