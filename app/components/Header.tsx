"use client";

import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href={"/"}>Hem</Link>
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
