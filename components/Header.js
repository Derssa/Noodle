import Image from "next/image";
import React, { useRef } from "react";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top*0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form
          className="flex flex-grow px-6 py-3 ml-10 mr-5 border
      border-gray-200 rounded-full shadow-lg max-w-3xl items-center"
          onSubmit={search}
        >
          <input
            type="text"
            ref={searchInputRef}
            placeholder="Search"
            defaultValue={router.query.term}
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-700 cursor-pointer transition 
        duration-100 transform hover:scale-125"
            onClick={() => {
              searchInputRef.current.value = "";
            }}
          />
          <MicrophoneIcon
            className="h-6 mr-3 hidden sm:inline-flex
         text-blue-500 border-l-2 pl-2 border-gray-300"
          />
          <SearchIcon
            className="h-6 text-blue-500 hidden cursor-pointer hover:scale-125 sm:inline-flex"
            onClick={search}
          />
          <button hidden type="submit">
            Search
          </button>
        </form>
        <Avatar
          className={"ml-auto"}
          url={
            "https://d.newsweek.com/en/full/2005012/langur-monkey.jpg?w=1600&h=1600&q=88&f=c2fbc217dff9cc8e20a8c87fb4edeaa0"
          }
        />
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
