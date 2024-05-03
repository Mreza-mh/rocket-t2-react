import React from "react";

function CustomCard({ image, p1, inerp, click }) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-inner bg-white hover:shadow-inner transition duration-300 p-1 shadow-black">
        <img
          className="w-full h-64 object-cover rounded-lg"
          src={image}
          alt="Post"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{p1}</div>
        </div>
        <div className="px-6 py-4">
          <button
            onClick={click}
            className="w-full h-12 bg-green-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            {inerp}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
