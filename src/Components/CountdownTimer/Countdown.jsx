import {useState} from 'react'

const Countdown = () => {
    
  return (
    <div className='flex justify-center items-center mx-auto w-screen h-screen p-8'>
        {/* App Container */}
        <div className="flex justify-around p-8 bg-lime-200 gap-4">
            {/* DAYS */}
            <span>{time_left.days}</span>
            {/* HOURS */}
            <span>{time_left.hours}</span>
            {/* MINUTES */}
            <span>{time_left.minutes}</span>
            {/* SECONDS */}
            <span>{time_left.seconds}</span>
        </div>
        
        
    </div>
  )
}

export default Countdown