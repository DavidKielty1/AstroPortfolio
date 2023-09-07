import React, { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const RoughNotationText = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <RoughNotation type="highlight" show={show} color="#99f6e4">
        Lorem ipsum dolor
      </RoughNotation>
      sit amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum
    </div>
  );
};

export default RoughNotationText;
