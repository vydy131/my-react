// export function IntroSection() {
//   return (
//     <section>
//       <h1 className="centered">NAME</h1>
//       <h3 className="centered" style={{ color: "#666" }}>
//         ABOUT US
//       </h3>
//     </section>
//   );
// }

import React from "react";

export function IntroSection() {
  return React.createElement("section", null, [
    React.createElement("h1", { className: "centered" }, "NAME"),
    React.createElement(
      "h3",
      { className: "centered", style: { color: "#666" } },
      "ABOUT US"
    ),
  ]);
}
