"use client";

import { Button } from "../ui/button";

function ButtonClick() {
  const handleClick = (text: string) => {
    console.log(`trigger click ${text}`);
  };
  return (
    <div>
      <button className="btn btn-primary " onClick={() => handleClick("test1")}>
        TEst
      </button>
      <br />
      <Button variant="default" onClick={() => handleClick("test2")}>
        Test 2
      </Button>
    </div>
  );
}

export default ButtonClick;
