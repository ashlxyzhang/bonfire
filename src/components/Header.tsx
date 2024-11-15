import localFont from "next/font/local";

const amhiney = localFont({
  src: "NCL-Amhiney.otf",
});

export default function Header() {
  return (
    <>
      <div className={`${amhiney.className} text-red-400 text-4xl font-bold`}>
        <h1>Bonfire</h1>
      </div>
    </>
  );
}
