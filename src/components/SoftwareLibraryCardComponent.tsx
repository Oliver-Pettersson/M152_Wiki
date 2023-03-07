import React from "react";

interface SoftwareLibraryCardComponentProps {
    text: string;
    image: string;
    imageDirection: "left" | "right";
}

export default function SoftwareLibraryCardComponent({
                                                         text,
                                                         image,
                                                         imageDirection = "left"
                                                     }: SoftwareLibraryCardComponentProps) {

    let marginImage = "ml-[2rem]";
    let paddingText = "pl-64";
    if (imageDirection === "right") {
        marginImage = "mr-[2rem]";
        paddingText = "pr-64";
    } else if (imageDirection === "left") {
        marginImage = "ml-[2rem]";
        paddingText = "pl-64";
    }

    return (
        <div className='w-full rounded-l-full rounded-r-full' style={{backgroundColor: '#EBB5B5'}}>
            <div className='flex flex-row'>
                {imageDirection === 'left' ? <div className={`p-12 ${paddingText}`}>
                    {text}
                </div> : null}
                <div
                    className='bg-white dark:bg-custom-dark-1 h-96 w-96 z-10 flex flex-col items-center'>
                    <img style={{maxWidth: 'none', objectFit: 'fill'}}
                         className={`${marginImage} h-[22rem] w-80 rounded-3xl z-20`}
                         src={image}/>
                </div>
                {imageDirection === 'right' ? <div className={`p-12 ${paddingText}`}>
                    {text}
                </div> : null}
            </div>
        </div>
    );
}
