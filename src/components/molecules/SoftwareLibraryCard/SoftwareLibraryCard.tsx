import React from "react";
import {Typography, useTheme} from "@mui/material";
import "./SoftwareLibraryCard.css"

interface SoftwareLibraryCardProps {
    text: string;
    image: string;
    title: string;
    imageDirection: "left" | "right";
}

export default function SoftwareLibraryCard({
                                                title,
                                                text,
                                                image,
                                                imageDirection = "left",
                                            }: SoftwareLibraryCardProps) {
    const theme = useTheme();
    const darkmode = theme.palette.mode === "dark";

    let marginImage = "ml-[2rem]";
    let paddingText = "pl-64";
    let borderRadiusImageRadius = "rounded-bl-3xl";
    if (imageDirection === "right") {
        marginImage = "mr-[2rem]";
        paddingText = "pr-64";
        borderRadiusImageRadius = "rounded-br-3xl";
    } else if (imageDirection === "left") {
        marginImage = "ml-[2rem]";
        paddingText = "pl-64";
        borderRadiusImageRadius = "rounded-bl-3xl";
    }
    return (
        <>

            <div
                className="individual-card hidden lg:block w-full rounded-l-full rounded-r-full"
                style={{background: darkmode ? "#1B221C" : "#9CD08F"}}
            >
                <div className="flex flex-row">
                    {imageDirection === "left" ? (
                        <div className={`p-12`} style={{textAlign: "justify"}}><Typography variant="h5"
                                                                                           style={{textAlign: "center"}}>{title}</Typography>{text}
                        </div>
                    ) : null}
                    <img
                        style={{maxWidth: "none", objectFit: "cover"}}
                        className={`${marginImage} h-[22rem] w-82 rounded-3xl z-20`}
                        src={image}
                    />

                    {imageDirection === "right" ? (
                        <div className={`p-12`} style={{textAlign: "justify"}}><Typography variant="h5"
                                                                                           style={{textAlign: "center"}}>{title}</Typography>{text}
                        </div>
                    ) : null}
                </div>
            </div>
            {/*    make 2 columns*/}
            <div
                className="block lg:hidden w-full rounded-3xl"
                style={{background: darkmode ? "#788AA3" : "#9CD08F"}}
            >
                <div className="flex flex-col justify-center items-center">
                    {imageDirection === "right" ? (
                        <div className={`p-12`} style={{textAlign: "justify"}}><Typography variant="h5"
                                                                                           style={{textAlign: "center"}}>{title}</Typography>{text}
                        </div>
                    ) : null}
                    {/*<div*/}
                    {/*    className={`bg-white dark:bg-custom-dark-1 h-fit w-full m-12`}>*/}
                    {/*</div>*/}
                    <img
                        style={{maxWidth: "none", objectFit: "cover"}}
                        className={`m-12 w-[90%] h-full rounded-3xl`}
                        src={image}
                    />
                    {imageDirection === "left" ? (
                        <div className={`p-12`} style={{textAlign: "justify"}}><Typography variant="h5"
                                                                                           style={{textAlign: "center"}}>{title}</Typography>{text}
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
}
