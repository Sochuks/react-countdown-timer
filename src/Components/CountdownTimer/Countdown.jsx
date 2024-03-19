import {useState} from 'react'

const Countdown = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
    
  return (
    <div className='flex justify-center items-center mx-auto w-screen h-screen p-8'>
        {/* App Container */}
        <div className="flex justify-around p-8 bg-lime-200 gap-4">
            {/* DAYS */}
            <span>{timerDays}</span>
            {/* HOURS */}
            <span>{timerHours}</span>
            {/* MINUTES */}
            <span>{timerMinutes}</span>
            {/* SECONDS */}
            <span>{timerSeconds}</span>
        </div>
        
        
    </div>
  )
};

Countdown.defaultProps = {
    timerDays: '--',
    timerHours: "--",
    timerMinutes: "--",
    timerSeconds: "--",
};

export default Countdown