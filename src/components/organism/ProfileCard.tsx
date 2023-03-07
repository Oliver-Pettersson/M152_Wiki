import React from "react";
import "./CardStyle.css";

interface PropsType {
  title: string;
  image: string;
}

export default function Card({title, image}: PropsType) {
  return (
    <div className="py-4 w-60">
      <div className={"shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div bg-[url('https://web.archive.org/web/20230228150808im_/https://noseryoung.ch/wp-content/uploads/2020/09/peto-1.jpg')]"}>
        <div className="w-full h-80">
          <div className="w-full h-4/5 image-cover rounded-t-md"></div>
          <div className=" flex items-center justify-center p-auto h-1/5 px-4 bg-white rounded-b-md">
            <span className="block text-lg text-gray-800 font-bold tracking-wide">
              {title}
            </span>
          </div>
        </div>
        </div>
    </div>
  );
}