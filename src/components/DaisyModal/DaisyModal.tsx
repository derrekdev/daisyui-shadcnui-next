import { Copy } from "lucide-react";

function DaisyModal({
  link,
  handleCopy,
}: {
  link: string;
  handleCopy: (link: string) => void;
}) {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          if (document)
            (
              document.getElementById("my_modal") as HTMLFormElement
            ).showModal();
        }}
      >
        Button on DaisyUi
      </button>
      <dialog className="modal" id="my_modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-lg font-bold">About DaisyUi</h3>
          <p className="py-4">
            Click the link or copy the link below to see the documentation.
          </p>
          <div className="flex items-center space-x-2">
            <a role="button" className="btn" target="_blank" href={link}>
              Docs
            </a>
            <div className="flex items-center space-x-2 basis-full">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                readOnly
                value={link}
              />
              <button
                type="submit"
                className="btn btn-sm px-3"
                onClick={() => handleCopy(link)}
              >
                <span className="sr-only">Copy</span>
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-error">Close</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default DaisyModal;
