import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-white justify-center items-center">
      <div className="flex left-0 top-0 h-32 w-screen bg-red-800 justify-center items-center">
        <h1 className="text-center text-white text-4xl">Title</h1>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="bg-slate-300 w-11/12 p-4 rounded-lg shadow cursor-pointer mx-auto">
        <h2 class="text-lg font-bold mb-2">Click to Expand</h2>
        <div class="content">
          <p class="text-gray-600">This is the content that will expand when the div is clicked</p>
        </div>
      </div>

    </div>
  );
}
