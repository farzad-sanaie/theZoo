"use client";

import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header>
        <nav className="w-full p-5 bg-amber-300">
          <ul className="flex justify-end gap-2">
            <li>
              <Link href={"/"}>Hem -</Link>
            </li>
            <li>
              <Link href={"/animals"}>Våra djur</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
