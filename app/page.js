import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-white">
      <div className="flex left-0 top-0 h-32 w-screen bg-red-800 justify-center items-center">
        <h1 className="text-center text-white text-4xl">Title</h1>
      </div>
    </div>
  );
}
