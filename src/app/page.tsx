import Image from "next/image";


export default function Home() {
  return (
    <>
      <p className="text-7xl font-[family-name:var(--font-homemade-apple)]">Kim & Sal</p>
      <Image
        src="/patagonia.jpeg"
        alt="Torres Del Paine"
        width={180}
        height={38}
        priority
      />
      <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        We are getting married!

      </ol>
    </>
  );
}
