import React from "react";
import "./CarCard.css";

// Import all images manually
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import img10 from "../assets/10.png";
import img11 from "../assets/11.png";
import img12 from "../assets/12.png";
import img13 from "../assets/13.png";
import img14 from "../assets/14.png";
import img15 from "../assets/15.png";
import img16 from "../assets/16.png";
import img17 from "../assets/17.png";
import img18 from "../assets/18.png";
import img19 from "../assets/19.png";
import img20 from "../assets/20.png";
import img21 from "../assets/21.png";
import img22 from "../assets/22.png";
import img23 from "../assets/23.png";
import img24 from "../assets/24.png";
import img25 from "../assets/25.png";
import img26 from "../assets/26.png";
import img27 from "../assets/27.png";
import img28 from "../assets/28.png";
import img29 from "../assets/29.png";
import img30 from "../assets/30.png";
import img31 from "../assets/31.png";
import img32 from "../assets/32.png";
import img33 from "../assets/33.png";
import img34 from "../assets/34.png";
import img35 from "../assets/35.png";
import img36 from "../assets/36.png";
import img37 from "../assets/37.png";
import img38 from "../assets/38.png";
import img39 from "../assets/39.png";
import img40 from "../assets/40.png";
import img41 from "../assets/41.png";
import img42 from "../assets/42.png";
import img43 from "../assets/43.png";
import img44 from "../assets/44.png";
import img45 from "../assets/45.png";
import img46 from "../assets/46.png";
import img47 from "../assets/47.png";
import img48 from "../assets/48.png";
import img49 from "../assets/49.png";
import img50 from "../assets/50.png";
import img51 from "../assets/51.png";
import img52 from "../assets/52.png";
import img53 from "../assets/53.png";
import img54 from "../assets/54.png";
import img55 from "../assets/55.png";
import img56 from "../assets/56.png";
import img57 from "../assets/57.png";
import img58 from "../assets/58.png";
import img59 from "../assets/59.png";
import img60 from "../assets/60.png";
import img61 from "../assets/61.png";
import img62 from "../assets/62.png";
import img63 from "../assets/63.png";
import img64 from "../assets/64.png";
import img65 from "../assets/65.png";
import img66 from "../assets/66.png";
import img67 from "../assets/67.png";
import img68 from "../assets/68.png";
import img69 from "../assets/69.png";
import img70 from "../assets/70.png";
import img71 from "../assets/71.png";
import img72 from "../assets/72.png";
import mycar from "../assets/mycar.png";
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
  img50,
  img51,
  img52,
  img53,
  img54,
  img55,
  img56,
  img57,
  img58,
  img59,
  img60,
  img61,
  img62,
  img63,
  img64,
  img65,
  img66,
  img67,
  img68,
  img68,
  img69,
  img70,
  img71,
  img72,
];

export default function CarCard() {
  const [index, setIndex] = React.useState(0);
  const touchStartX = React.useRef(null);

  const nextFrame = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevFrame = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  React.useEffect(() => {
    const interval = setInterval(nextFrame, 150);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - touchStartX.current;

    if (Math.abs(diff) > 10) {
      diff > 0 ? prevFrame() : nextFrame();
      touchStartX.current = null;
    }
  };

  return (
    <section id="cars" className="relative">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 md:py-16 lg:py-24 bg-white">
        {/* Title */}
        <div className="text-center mb-10 mt-10 md:mt-20">
          <h2 className="text-[#2E709E] text-4xl md:text-5xl lg:text-5xl font-bold">
            Our Cars
          </h2>
          <div className="h-1 w-52 bg-[#E6A43B] mx-auto my-4 rounded"></div>
        </div>
        <div className="w-1 h-20 bg-[#E6A43B] rounded vertical-line"></div>
        {/* Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-8 md:gap-12 px-4">
          <div></div>
          {/* Left Text Content */}
          <div className="flex flex-col text-center lg:text-left items-center lg:items-start space-y-4 lg:w-1/2 car-headings">
            <p className="text-sm uppercase tracking-wide text-gray-600">
              Experience the Freedom, Embrace the Exceptional
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E709E]">
              Mahindra XUV700 AX7L
            </h1>

            <ul className="list-disc list-inside text-base md:text-lg text-[#2E709E] space-y-2 cars">
              <li className="first">ADAS Control-To prevent accidents</li>
              <li className="second">Sunroof</li>
              <li className="third">Ventilated Seats</li>
              <li className="fourth">Alexa Integration</li>
              <li className="fifth">In-Car TVs</li>
              <li className="sixth">6+1 seater Options</li>
            </ul>
          </div>

          {/* Right: Image Display */}
          <div
            className="relative w-full max-w-md lg:max-w-xl xl:max-w-2xl h-auto overflow-hidden flex justify-center items-center car-size hidden md:block"
            onWheel={(e) => {
              e.preventDefault();
              e.deltaY > 0 ? nextFrame() : prevFrame();
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <img
              src={images[index]}
              alt={`360 view ${index}`}
              className="w-full object-contain"
            />
            {/* <img
            src={images[index]}
            alt={`360 view ${index}`}
            className="w-full object-contain"
          /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
