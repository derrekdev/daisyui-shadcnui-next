import ButtonContainer from "@/components/ButtonContainer/ButtonContainer";
import { Github } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const imageClass =
    "relative drop-shadow-[0_0_0.2rem_#ffffff70] hover:drop-shadow-[0_0_0.8rem_#ffffff70] transition-all";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-52 max-md:px-6">
      <div className="flex flex-col items-center">
        <a href="https://nextjs.org/" target="_blank">
          <Image
            className={imageClass}
            src="/next.svg"
            alt="Next.js Logo"
            width={380}
            height={100}
            priority
          />
        </a>
        <div className="pt-10 text-neutral-300">with</div>
      </div>
      <div className="flex max-md:flex-col lg:flex-row justify-between items-center max-w-[800px] w-full">
        <div className=" ">
          <a href="https://daisyui.com" target="_blank">
            <Image
              className={imageClass}
              src="/daisyui.png"
              alt="Daisy UI Logo"
              width={380}
              height={100}
              priority
            />
          </a>
        </div>
        <div className="text-6xl text-neutral-300">+</div>
        <div>
          <a href="https://ui.shadcn.com" target="_blank">
            <Image
              className={imageClass}
              src="/shadcnui.png"
              alt="Shadcn UI Logo"
              width={380}
              height={100}
              priority
            />
          </a>
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
            className="btn btn-xs btn-ghost p-0 hover:scale-125 hover:bg-transparent ml-2"
            href="https://github.com/derrekdev/daisyui-shadcnui-next"
            target="_blank"
          >
            <Github />
          </a>
        </p>
      </footer>
    </main>
  );
}
