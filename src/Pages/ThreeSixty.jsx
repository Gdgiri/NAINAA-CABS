// import React from "react";
// import React360Viewer from "react-360-view";

// const Car360Viewer = () => {
//   return (
//     // <div className="flex justify-center overflow-hidden touch-none mx-auto">
//     //   <React360Viewer
//     //     amount={72}
//     //     imagePath="https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1290/closed-door/efefef/"
//     //     fileName="{index}.jpg?wm=1&q=80&v=20230814031816"
//     //     autoplay
//     //     loop
//     //     spinForward
//     //     buttonClass="hidden"
//     //     style={{ width: "100%", height: "100%" }}
//     //   />
//     // </div>

//     <div
//       className="flex justify-center overflow-hidden touch-none mx-auto w-100 h-100"
//       onWheel={(e) => {
//         e.stopPropagation(); // Prevent it from reaching viewer
//         e.preventDefault(); // Optional: stop page scroll too
//       }}
//     >
//       <React360Viewer
//         className="w-100"
//         amount={72}
//         imagePath="https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1290/closed-door/efefef/"
//         fileName="{index}.jpg?wm=1&q=80&v=20230814031816"
//         autoplay
//         loop
//         spinForward
//         buttonClass="hidden"
//         style={{ width: "50%", height: "50%" }}
//       />
//     </div>
//   );
// };

// export default Car360Viewer;

// import React from "react";
// import React360Viewer from "react-360-view";

// const Car360Viewer = () => {
//   return (
//     <div className="flex justify-center">
//       <React360Viewer
//         amount={72}
//         imagePath="https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1290/closed-door/efefef/"
//         fileName="{index}.jpg?wm=1&q=80&v=20230814031816"
//         loop
//         spinReverse
//         buttonClass="hidden" // optional: hides left/right arrows
//       />
//     </div>
//   );
// };

// export default Car360Viewer;

import React from "react";
import React360Viewer from "react-360-view";

const Car360Viewer = () => {
  return (
    <div
      className="flex justify-center overflow-hidden touch-none mx-auto w-100 h-100"
      onWheel={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <React360Viewer
        amount={72}
        imagePath="/"
        fileName="{index}.jpg"
        autoplay
        loop
        spinForward
        style={{ width: "50%", height: "50%" }}
      />

    
    </div>
  );
};

export default Car360Viewer;
