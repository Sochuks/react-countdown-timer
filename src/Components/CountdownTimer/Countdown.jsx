import {useState} from 'react'
import timer_icn from './img/ios7-timer-outline.png'

const Countdown = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
    
  return (
    <div className='overlay absolute h-full w-full'>
        <div className="head-text flex-col justify-center mx-auto text-base text-center p-6 my-6">
            
            <div className='flex justify-center mt-20'>
                <img src={timer_icn} alt="" />
            </div>
            <h2 className='text-5xl font-medium py-2'>React Countdown Timer</h2>
            <p className='text-xl font-normal py-2'> Animi at laudantium amet, architecto officiis eveniet odio obcaecati nostrum adipisci dolorem.</p>
        </div>
        {/* App Container */}
        <div className="timer flex justify-around max-w-4xl mx-auto p-8 bg-lime-800 gap-4 text-white rounded-md shadow-md">
            {/* DAYS */}
            <div className='flex flex-col justify-around items-center'>
                <span>{timerDays < 9 ? '0'+ timerDays : timerDays}</span>
                <span>DAYS</span>
            </div>
            
            {/* HOURS */}
            <div className='flex flex-col justify-around items-center' >
                <span>{timerHours < 9 ? '0'+timerHours : timerHours}</span>
                <span>HOURS</span>
            </div>

            {/* MINUTES */}
            <div className='flex flex-col justify-around items-center'>
                <span>{timerMinutes < 9 ? '0'+timerMinutes : timerMinutes}</span>
                <span>MINUTES</span>
            </div>

            {/* SECONDS */}
            <div className='flex flex-col justify-around items-center'>
                <span>{timerSeconds < 9 ? '0'+timerSeconds : timerSeconds}</span>
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