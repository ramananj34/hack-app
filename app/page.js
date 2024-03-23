import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-yellow-100 text-gray">
      <div className="absolute left-0 top-0 h-16 w-16 bg-red">
        Hello
      </div>
    </div>
  );
}
