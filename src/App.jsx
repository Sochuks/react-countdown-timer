import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const intv = setInterval(()=>{
      setCount(count + 1)
    }, 1000)

    // clearInterval
    return () => clearInterval(intv)
  }, [count]);

  return (
    <>
      <h1 className='flex justify-center items-center mx-auto'>{count}</h1>
    </>
  )
}

export default App
