import React from 'react'
// Without State
// const Counter = () => {
//     let number = 0
//     const increment = () => {
//         number += 1
//         console.log(number)
//     }
    
//     return <div>
//         <h1>Counter App</h1>
//         <p>Nilai counter saat ini: {number}</p>
//         <button onClick={increment}>+</button>
//     </div>
// }

// Structure state
// const [namaState, setterState] = React.useState(initialValue)

const Counter = () => {
    const [number, increment] = React.useState(0)
    return <div>
        <h1>Counter App</h1>
        <p>Nilai Counter saat ini: {number}</p>
        <button onClick={() => increment(number+1)}>+</button>
    </div>

}

export default Counter;