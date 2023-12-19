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
    <div className="flex flex-row items-center gap-20">
      <DaisyModal link={daisyUILink} handleCopy={handleCopy} />
      <ShadcnDialog link={shadcnUILink} handleCopy={handleCopy} />
    </div>
  );
}

export default ButtonContainer;
