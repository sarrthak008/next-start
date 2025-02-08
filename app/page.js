import Link from "next/link";

export default function page() {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col bg-gray-600">
      <div className="block">hello world</div>
      <div className="text-blue-400">
        <Link href='/about'>go to about....</Link>
      </div>
    </div>
  )
}
