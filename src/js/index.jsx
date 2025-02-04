// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
import React from "react";
import ReactDOM from "react-dom/client";
import "../css/style.css";

const App = () => {
  const testimonial = {
    fullName: "Sarah Dole",
    handle: "@sarahdole",
    profilePicSrc: "../../img/profile-thumbnail.png",
    blurb:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  };

  return (
    <div className="flex flex-col min-h-screen w-full p-0 items-center justify-center bg-gradient-to-br from-gray-50 to-[#d2d6db]">
      <TestimonialCard testimonial={testimonial} />
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const { fullName, handle, profilePicSrc, blurb } = testimonial;
  return (
    <div className="w-[340px] flex flex-col gap-4 bg-white p-6 rounded-lg">
      <div className="flex gap-4">
        <img
          src={profilePicSrc}
          alt="profile picture"
          className="w-12 h-12 object-cover"
        />
        <div className="flex flex-col gap-px grow">
          <span className="font-semibold text-lg text-neutral-900">
            {fullName}
          </span>
          <span className="font-normal text-sm text-neutral-600">{handle}</span>
        </div>
      </div>

      <span className="font-normal text-base text-neutral-600">{blurb}</span>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
