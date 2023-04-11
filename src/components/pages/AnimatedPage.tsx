import {motion} from 'framer-motion'
import React from 'react'

const animations = {
    initial: {opacity: 0, y: 50},
    animate: {opacity: 1, y: 0},
    exit: {opacity: 0, y: 50},
}

const AnimatedPage = ({children}: any) => {
    return (
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit" transition={{duration: 0.5}}>
            {children}
        </motion.div>
    )
}

export default AnimatedPage
