import React from 'react'

export interface StoryBoardItemProps {
    isOnLeftSide: boolean,
    imageSrc: string,
    text: string
}

function StoryBoardItem({
                            isOnLeftSide = false,
                            imageSrc,
                            text
                        }: StoryBoardItemProps) {
    return (
        <>
            <div className="flex-1 flex-row">
                {/* Left side */}
                {isOnLeftSide &&
                    <>
                        <div className="flex-row flex">
                            <img className="mr-auto" width="500" height="300"
                                 src={imageSrc}/>
                            <div className="m-4">
                                {text}
                            </div>
                        </div>
                    </>
                }

                {/* Right side */}
                {!isOnLeftSide &&
                    <>
                        <div className="flex-row flex">
                            <div className="m-4">
                                {text}
                            </div>
                            <img className="ml-auto" width="500" height="300"
                                 src={imageSrc}/>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default StoryBoardItem
