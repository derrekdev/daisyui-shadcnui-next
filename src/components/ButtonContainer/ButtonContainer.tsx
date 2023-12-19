"use client";

import DaisyModal from "../DaisyModal/DaisyModal";
import ShadcnDialog from "../ShadcnDialog/ShadcnDialog";

function ButtonContainer() {
  const shadcnUILink = "https://ui.shadcn.com/docs";
  const daisyUILink = "https://daisyui.com/components/";

  const handleCopy = (link: string) => {
    navigator.clipboard.writeText(link);
  };

  return (
    <div className="flex max-sm:flex-col md:flex-row items-center max-md:gap-4 md:gap-20 max-sm:w-full">
      <DaisyModal
        buttonTitle="Button on DaisyUi"
        link={daisyUILink}
        handleCopy={handleCopy}
      />
      <ShadcnDialog
        buttonTitle="Button on Shadcn/ui"
        link={shadcnUILink}
        handleCopy={handleCopy}
      />
    </div>
  );
}

export default ButtonContainer;
