// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
import React from "react";
import ReactDOM from "react-dom/client";
import "../css/style.css";

const App = () => {
  const testimonial = {
    fullName: "Sarah Dole",
    handle: "@sarahdole",
    profilePicSrc: "/gfe-testimonial-card/img/profile-thumbnail.png",
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
      <div className="flex gap-4 max-w-[340px]">
        <img
          src={profilePicSrc}
          alt="profile picture"
          className="w-12 h-12 object-cover"
        />
        <div className="flex flex-col gap-px grow min-w-0">
          <h1 className="font-semibold text-lg text-neutral-900 truncate min-w-0">
            {fullName}
          </h1>
          <p className="font-normal text-sm text-neutral-600 truncate min-w-0">
            {handle}
          </p>
        </div>
      </div>

      <p className="font-normal text-base text-neutral-600 line-clamp-5">
        {blurb}
      </p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
