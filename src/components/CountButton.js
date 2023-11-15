import React, { useState } from 'react'

export const CountButton = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            Clicked: {count}
            <button onClick={() => setCount(count + 1)} >click</button>
        </div>
    )
}
