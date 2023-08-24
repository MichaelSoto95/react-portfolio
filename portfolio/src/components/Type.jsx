import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const Type = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Hi my name is Michael and im a jr front-end developer.',
                1000,
            ]}
            wrapper="span"
            speed={30}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
        />
    )
}

export default Type
