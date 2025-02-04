// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
import React from "react";
import ReactDOM from "react-dom/client";
import "../css/style.css";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen w-full m-0 p-0 bg-gradient-to-br from-gray-50 to-[#d2d6db]">
      <h1>Hello, React!</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
