import React from "react";

export const IntroInfo = () => {
  return (
    <>
      <p>
        I'm Youssef Yasser , A Software Engineer Graduated from Arab Academy for Science, Technology and Maritime Transport with GPA : 3.82 .  <br />
        "I write code, love code, live code."
      </p>
    </>
  );
};
export const AboutInfo = () => {
  const style = {
    textDecoration: "underline",
    fontWeight: "800",
    color: "rgb(255, 245, 232)",
  };
  return (
    <>
      <p>
        I am Software Engineer and a Front-end developer.
        <br />
        <br />
        Currently , working as a Senior Information Security Officer at First Abu Dhabi Bank 'FAB' 😅.
        {/*. */}
        <br />
        <br />I love exploring different kind of fields and Being up-to-date with new Technologies
        too.
        <br />
        <br />
        At last, Feel free to{" "}
         <a href="/contact" style={style}>
          Contact ME.
         </a>{" "}
       
      </p>
    </>
  );
};
