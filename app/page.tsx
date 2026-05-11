import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center bg-white text-black font-sans">
        <main>
          <h1 className="text-4xl font-bold">The Zoo</h1>
          <p>Välkommna till vårt zoo</p>
          <br></br>
          <p>Klicka <Link className="font-bold text-blue-800" href={"/animals"}>här</Link> för att se våra djur</p>
        </main>
      </div>
    </>
  );
}
