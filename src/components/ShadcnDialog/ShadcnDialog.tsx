import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function ShadcnDialog({
  link,
  handleCopy,
}: {
  link: string;
  handleCopy: (link: string) => void;
}) {
  const shadcnuiLink = "https://ui.shadcn.com/docs";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Button on Shadcn/ui</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="pb-10">About shadcn/ui</DialogTitle>
          <DialogDescription>
            Click the link or copy the link below to see the documentation.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Button asChild variant="secondary">
            <a href={shadcnuiLink} target="_blank">
              Docs
            </a>
          </Button>
          <div className="flex items-center space-x-2 basis-full">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input id="link" defaultValue={shadcnuiLink} readOnly />
            </div>
            <Button
              type="submit"
              size="sm"
              className="px-3"
              onClick={() => handleCopy(link)}
            >
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <DialogFooter className="sm:justify-end pt-10">
          <DialogClose asChild className="text-right">
            <Button type="button" variant="destructive">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ShadcnDialog;
