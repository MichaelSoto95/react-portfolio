import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const Type = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Hi my name is Michael and im a jr front-end developer.',
                1000,
                'Hi my name is Michael and im a jr front-end developer.' // wait 1s before replacing "Mice" with "Hamsters"
            ]}
            wrapper="span"
            speed={25}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
        />
    )
}

export default Type
