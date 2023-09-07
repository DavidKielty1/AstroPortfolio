// const annotation1 = annotate(developer, {
//   type: "highlight",
//   color: "#99f6e4",
//   animationDuration: 1500,
// });
// const annotation2 = annotate(devoted, {
//   type: "highlight",
//   color: "#fed7aa",
//   animationDuration: 500,
//   iterations: 1,
// });
// const annotation3 = annotate(learning, {
//   type: "highlight",
//   color: "#fde68a",
//   animationDuration: 500,
//   iterations: 1,
// });
// const annotation4 = annotate(fullStack, {
//   type: "highlight",
//   color: "#bbf7d0",
//   animationDuration: 500,
//   rtl: true,
// });
// const annotation5 = annotate(collaborativeProjects, {
//   type: "highlight",
//   color: "#fecaca",
//   animationDuration: 500,
//   iterations: 3,
//   rtl: true,
// });
// const annotation6 = annotate(solutions, {
//   type: "highlight",
//   color: "#a5f3fc",
//   animationDuration: 500,
//   iterations: 1,
// });
// const annotation7 = annotate(together, {
//   type: "highlight",
//   color: "#bfdbfe",
//   animationDuration: 500,
//   iterations: 1,
// });
// const annotation8 = annotate(embark, {
//   type: "highlight",
//   color: "#e9d5ff",
//   animationDuration: 500,
//   iterations: 1,
//   rtl: true,
// });
// const annotation9 = annotate(everEvolving, {
//   type: "highlight",
//   color: "#fbcfe8",
//   animationDuration: 500,
//   iterations: 1,
// });
// const annotation10 = annotate(hireme, {
//   type: "bracket",
//   color: "#be123c",
//   brackets: ["left", "right"],
//   padding: 10,
//   strokeWidth: 6,
//   animationDuration: 1500,
// });
// const annotation11 = annotate(hireme, {
//   type: "highlight",
//   color: "#fcd34d",
//   animationDuration: 1500,
// });
// const ag = annotationGroup([
//   annotation1,
//   annotation2,
//   annotation3,
//   annotation4,
//   annotation5,
//   annotation6,
//   annotation7,
//   annotation8,
//   annotation9,
//   annotation10,
//   annotation11,
// ]);
// ag();
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import React, { useState } from "react";

export default function RoughAnnotation() {
  // <RoughNotationGroup show={state}>
  //   <RoughNotation type="underline">Hello,</RoughNotation>
  //   <RoughNotation type="underline">This is</RoughNotation>
  //   <RoughNotation type="underline">a Test</RoughNotation>
  // </RoughNotationGroup>;

  const [show, setShow] = useState(true);

  return (
    <RoughNotationGroup show={show}>
      <h2>
        Hello! I'm David, a{" "}
        <RoughNotation
          type="underline"
          color="#99f6e4"
          animationDuration={1500}
          show={show}
        >
          developer
        </RoughNotation>{" "}
        based in the United Kingdom
      </h2>

      <p className="font-montserrat text-2xl text-justify">
        <span>
          As a <RoughNotation type="underline">devoted</RoughNotation>{" "}
          enthusiast of
          <RoughNotation type="underline">learning</RoughNotation> and an
          aspiring
          <RoughNotation type="underline">full-stack</RoughNotation> technician,
          I am eager to contribute to the exciting world of software
          development. My commitment to constant growth and inventive thinking
          drives me to seek
          <RoughNotation type="underline">collaborative projects</RoughNotation>
          that push beyond the ordinary, yielding exceptional and ingenious
          <RoughNotation type="underline"> solutions</RoughNotation>.
        </span>
        <span className="hidden 3xl:block ">
          <RoughNotation type="underline">Together</RoughNotation>, we can
          <RoughNotation type="underline">embark</RoughNotation> on a journey to
          create outstanding software that not only meets but exceeds
          expectations, leaving a lasting mark on the{" "}
          <RoughNotation type="underline">ever-evolving</RoughNotation> tech
          landscape. Let's debug your team
          <RoughNotation type="underline">Hire me</RoughNotation> !
        </span>
      </p>
    </RoughNotationGroup>
  );
}
