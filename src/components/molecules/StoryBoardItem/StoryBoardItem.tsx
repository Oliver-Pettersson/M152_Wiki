import {Typography} from '@mui/material'
import React from 'react'

function StoryBoardItem(props: any) {
    return (
        <>
            <div className="flex-1">
                {/* Left side */}
                {props.isOnLeftSide &&
                    <>
                        <div className="flex-row grid grid-rows-2 grid-flow-col">
                            <img className="row-span-2 col-span-2" width="500" height="300"
                                 src="https://www.wikihow.com/images/thumb/7/76/Draw-Comic-Book-Action-Step-9.jpg/aid1354781-v4-1200px-Draw-Comic-Book-Action-Step-9.jpg"/>
                            <Typography className="row-span-2 col-span-1">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint qui animi culpa tempore
                                distinctio nihil obcaecati quos pariatur! Earum nemo expedita excepturi provident
                                aspernatur commodi quos eos tempore dolores vel.
                            </Typography>
                        </div>
                    </>
                }

                {/* Right side */}
                {!props.isOnLeftSide &&
                    <>
                        <div className="flex-row grid grid-rows-2 grid-flow-col">
                            <Typography className="row-span-2 col-span-1">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint qui animi culpa tempore
                                distinctio nihil obcaecati quos pariatur! Earum nemo expedita excepturi provident
                                aspernatur commodi quos eos tempore dolores vel.
                            </Typography>
                            <img className="row-span-2 col-span-2" width="500" height="300"
                                 src="https://www.wikihow.com/images/thumb/7/76/Draw-Comic-Book-Action-Step-9.jpg/aid1354781-v4-1200px-Draw-Comic-Book-Action-Step-9.jpg"/>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default StoryBoardItem
