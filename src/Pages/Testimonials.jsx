import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa"; // More accurate for the quote style
import "./Testimonials.css";
const testimonials = [
  {
    text: "Impressive selection of vehicles and top-notch customer service! I've rented from numerous car rental companies, but this one stands out.",
    name: "D. Devine",
    company: "mycompany.co",
    initial: "D",
  },
  {
    text: "From the moment I made my reservation to the time I returned the car, everything was smooth and efficient.",
    name: "J. Garcia",
    company: "mycompany.co",
    initial: "G",
  },
  {
    text: "As a frequent traveler, I rely on reliable car rental services, and this one never disappoints.",
    name: "D. Garcia",
    company: "mycompany.co",
    initial: "G",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="py-12 px-4 bg-white text-center test-data mt-10">
      <h2 className="text-3xl md:text-5xl font-bold text-[#2E709E] mb-10">
        Reviews from our beloved clients
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative bg-[#2E709E] text-white rounded-2xl rounded-br-[100px] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] text-left"
          >
            {/* Quote icon */}
            <FaQuoteLeft className="absolute -top-3 -left-3 text-[#E6A43B] text-3xl" />

            {/* Testimonial */}
            <p className="mb-6 text-sm leading-relaxed">{t.text}</p>

            {/* Profile */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full ring-2 ring-white bg-red-500">
                <h1 className="text-center mt-2">{t.initial}</h1>
              </div>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-white/80">{t.company}</p>
                <div className="flex text-yellow-400 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 bg-[#E6A45B] text-white px-6 py-2 rounded-md shadow-md hover:bg-yellow-600 transition">
        See more reviews
      </button>
    </div>
  );
}
