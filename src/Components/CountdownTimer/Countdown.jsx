import {useState} from 'react'

const Countdown = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
    
  return (
    <div className='flex justify-center items-center mx-auto w-screen h-screen p-8'>
        {/* App Container */}
        <div className="flex justify-around p-8 bg-lime-200 gap-4">
            {/* DAYS */}
            <div>
                {timerDays}
                <span>DAYS</span>
            </div>
            
            {/* HOURS */}
            <div>
                {timerHours}
                <span>HOURS</span>
            </div>

            {/* MINUTES */}
            <div>
                {timerMinutes}
                <span>MINUTES</span>
            </div>

            {/* SECONDS */}
            <div>
                {timerSeconds}
                <span>SECONDS</span>
            </div>
        </div>
        
        
    </div>
  )
};

Countdown.defaultProps = {
    timerDays: "--",
    timerHours: "--",
    timerMinutes: "--",
    timerSeconds: "--",
};

export default Countdown