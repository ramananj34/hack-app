import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-white justify-center items-center">
      <div className="flex left-0 top-0 h-32 w-screen bg-red-800 justify-center items-center">
        <h1 className="text-center text-white text-4xl">Colgate Surveys</h1>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="bg-slate-300 w-11/12 p-4 rounded-lg shadow cursor-pointer mx-auto">
        <h2 class="text-black font-bold mb-2">What do you feel about cutting down the trees in the middle campus?</h2>
        <div class="content">
        </div>
      </div>
      <br/>
      <div className="bg-slate-300 w-11/12 p-4 rounded-lg shadow cursor-pointer mx-auto">
        <h2 class="text-black font-bold mb-2">Another question I can't think of?</h2>
        <div class="content">
        </div>
      </div>

    </div>
  );
}
