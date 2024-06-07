"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handelSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handelSubmit}
    >
      <input
        type="text"
        className="w-full h-14 rounded-md bg-transparent placeholder-gray-500 outline-none flex-1"
        placeholder="Search keywords"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-400 border-2 border-gray-200 dark:border-gray-600 rounded-lg py-1 px-4 mt-4 transition duration-500 hover:border-gray-400 dark:hover:border-gray-400 cursor-pointer"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
