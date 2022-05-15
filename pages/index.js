import { useRef } from "react";
import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function Home() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Noodle</title>
        <meta name="description" content="Noodle Search" />
        <link rel="icon" href="/logo-s.png" />
      </Head>

      {/*Header*/}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Nmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar
            url={
              "https://d.newsweek.com/en/full/2005012/langur-monkey.jpg?w=1600&h=1600&q=88&f=c2fbc217dff9cc8e20a8c87fb4edeaa0"
            }
          />
        </div>
      </header>

      {/*Body*/}
      <form className="flex flex-col items-center mt-20 flex-grow w-4/5">
        <Image src="/logo.png" height={100} width={300} />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-xxl">
          <SearchIcon className="h-5 mr-3 text-grey-500" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/3 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 sm:w-1/2">
          <button onClick={search} className="btn">
            Noodle Search
          </button>
          <button onClick={search} className="btn">
            I'm feeling lucky
          </button>
        </div>
      </form>
      {/*Footer*/}
      <Footer />
    </div>
  );
}
