import ButtonContainer from "@/components/ButtonContainer/ButtonContainer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-60">
      <Image
        className="relative drop-shadow-[0_0_0.2rem_#ffffff70]"
        src="/next.svg"
        alt="Next.js Logo"
        width={380}
        height={100}
        priority
      />
      <div className="flex flex-row justify-between items-center w-[800px]">
        <div className=" ">
          <Image
            className="relative drop-shadow-[0_0_0.2rem_#ffffff70] "
            src="/daisyui.png"
            alt="Daisy UI Logo"
            width={380}
            height={100}
            priority
          />
        </div>
        <div className="text-6xl">+</div>
        <div>
          <Image
            className="relative drop-shadow-[0_0_0.2rem_#ffffff70]"
            src="/shadcnui.png"
            alt="Shadcn UI Logo"
            width={380}
            height={100}
            priority
          />
        </div>
      </div>

      <ButtonContainer />
    </main>
  );
}
