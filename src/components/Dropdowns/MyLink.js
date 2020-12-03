import React from "react";
import { Link } from "react-router-dom";
const MyLink = () => {
  return (
    <>
      <Link
        to="/profile"
        className={
          "lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        }>
        Learn More
      </Link>
    </>
  );
};
export default MyLink;
