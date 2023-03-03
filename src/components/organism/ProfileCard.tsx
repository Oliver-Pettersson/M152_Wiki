import React from "react";

export default function ProfileCard(props: any) {
  return (
    <div className="py-4">
      <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
        <div className="w-60 h-80">
          <div className="">
            <img src={props.source}></img>
          </div>
          <div className="flex items-center justify-center p-auto h-1/5 px-4 bg-white rounded-b-md fd-cl">
            <span className="block text-lg text-gray-800 font-bold tracking-wide">
              {props.name}
            </span>
          </div>
        </div>

        <div className="absolute opacity-0 fd-sh">
        <div className="w-full h-80">
          <div className="w-full h-3/5 image-cover rounded-t-md"></div>
          <div className=" flex items-center justify-center p-auto h-2/5 px-4 bg-white rounded-b-md fd-cl group-hover:opacity-25">
            <span className="block text-lg text-gray-800 font-bold tracking-wide">
              {props.name}
            </span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
