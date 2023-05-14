import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2x1 font-bold text-center">
        Welcome to Learning Tailwind
      </h1>
      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div>
        <a href="./typography">Typography</a>
      </div>
      <div>
        <a href="./vercel">Vercel</a>
      </div>
      <div>
        <a href="./unvisited">Unvisited</a>
      </div>
    </div>
  );
}
