import {useState, useEffect} from 'react'

const Countdown = () => {
    // create state
    const [time_left, setTime_left] = useState(default_time)
  return (
    <div className='flex justify-center items-center mx-auto w-screen h-screen p-8'>
        {/* App Container */}
        <div className="flex justify-center p-8 bg-lime-200">
            HELLO COUNTDOWN TIMER
        </div>
        
        
    </div>
  )
}

export default Countdown