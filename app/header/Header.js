import Link from "next/link";
export default function Header() {
  return (
    <div className="text-[50px] bg-purple-900 text-white p-5 flex gap-50 justify-center">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
