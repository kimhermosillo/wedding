import Image from "next/image";


export default function Home() {
  return (
    <>
      <Image
        src="/patagonia.jpeg"
        alt="Torres Del Paine"
        width={180}
        height={38}
        priority
      />
      <ol className="list-inside list-decimal  text-center">
        We are getting married!

      </ol>
    </>
  );
}
