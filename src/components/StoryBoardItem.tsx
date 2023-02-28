import { Toolbar, Typography } from '@mui/material'
import React from 'react'

function StoryBoardItem(props: any) {
    return (
        <>
            <div className="flex-1">
            {/* Left side */}
            {props.left &&
                <>
                    <div className="flex-row">
                        <img width="400" height="200" src="https://www.wikihow.com/images/thumb/7/76/Draw-Comic-Book-Action-Step-9.jpg/aid1354781-v4-1200px-Draw-Comic-Book-Action-Step-9.jpg"/>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint qui animi culpa tempore distinctio nihil obcaecati quos pariatur! Earum nemo expedita excepturi provident aspernatur commodi quos eos tempore dolores vel.
                        </Typography>
                    </div>
                </>
            }

            {/* Right side */}
            {!props.left &&
                <>
                    <div className="flex-row">
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint qui animi culpa tempore distinctio nihil obcaecati quos pariatur! Earum nemo expedita excepturi provident aspernatur commodi quos eos tempore dolores vel.
                        </Typography>
                        <img width="400" height="200" src="https://www.wikihow.com/images/thumb/7/76/Draw-Comic-Book-Action-Step-9.jpg/aid1354781-v4-1200px-Draw-Comic-Book-Action-Step-9.jpg"/>
                    </div>
                </>
            }
            </div>
        </>
    )
}

export default StoryBoardItem
