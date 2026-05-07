import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center bg-white text-black font-sans">
        <main>
          <h1>The Zoo</h1>
          <p>Välkommna till vårt zoo</p>
          <Link href={"/animals"}>Se vår djur</Link>
        </main>
      </div>
    </>
  );
}
