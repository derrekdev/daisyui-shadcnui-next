import ButtonContainer from "@/components/ButtonContainer/ButtonContainer";
import { Github } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-60">
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
      <footer className="pb-2 text-neutral-500 text-sm text-center">
        <p className="text-center">
          This is only a template for using both daisyUI and shadcn/ui libaries
          combined.
        </p>
        <p className="flex flex-row justify-center ">
          Check the github repo for this template
          <a
            className="btn btn-xs btn-ghost p-0 hover:scale-125 ml-2"
            href="https://github.com/derrekdev/daisyui-shadcnui-next"
            target="_blank"
          >
            <Github size="xs" />
          </a>
        </p>
      </footer>
    </main>
  );
}
