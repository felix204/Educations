import React, { useEffect, useState } from 'react'

function counter() {
    
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("Component Mount Edildi.")

        const interval = setInterval (() => {
            setInterval((n) => n + 1 );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log("number state güncellendi")
    }, [number]);

    
  return (
    <div>
      <h1>{ number }</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      

    </div>
  )
}

export default counter; 
