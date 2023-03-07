import React from "react";
import "./CardStyle.css";

interface PropsType {
    title: string;
    image: string;
}

export default function ProfileCard({title, image}: PropsType) {
    return (
        <div className="py-4 w-60">
            <div
                className={"shadow-lg rounded-md dark:bg-custom-dark-1 bg-white max-w-sm flex justify-center items-center mx-auto content-div"}>
                <div className="w-full">
                    <img className="w-full h-full rounded-t-md" style={{boxShadow: 'none'}} src={image} alt="image"/>
                    {/*<div className="rounded-t-md">*/}
                    {/*</div>*/}
                    <div
                        className="h-12 my-3 flex items-center justify-center p-auto h-1/5 px-4 dark:bg-custom-dark-1 bg-white rounded-b-md">
                        <span className="block text-lg dark:text-white text-gray-800 font-bold tracking-wide">
                          {title}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
