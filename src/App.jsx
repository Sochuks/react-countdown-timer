import { useState, useEffect } from 'react'

import Countdown from './Components/CountdownTimer/Countdown'

function App() {
// Create state for components of timer
const [timerDays, setTimerDays] = useState();
const [timerHours, setTimerHours] = useState();
const [timerMinutes, setTimerMinutes] = useState();
const [timerSeconds, setTimerSeconds] = useState();

let interval;

// Get Time!
const startTime = ()=>{
    const countDownDate = new Date("").getTime();

    interval = setInterval(()=>{
        // Current Time
        const now = new Date().getTime();
        
        // Difference from countdown date to Now
        const difference = countDownDate - now;
        
        // Remaining Days
        const days = Math.floor(difference / (24 * 60 * 60 * 1000));
        // Remaining Hours
        const hours = Math.floor(difference % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
        // Remaining Minutes
        const minutes = Math.floor(difference % (24 * 60 * 60 * 1000) / (60 * 1000));
        // Remaining Seconds
        const seconds = Math.floor(difference % (24 * 60 * 60 * 1000) / 1000); 

        // Stop Timer using clearInterval
        if (difference < 0){
            clearInterval(interval.current);
        }else{
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);
        }

    });
};


  return (
    <>
      <Countdown timerDays={timerDays} 
      timerHours={timerHours} 
      timerMinutes={timerMinutes} 
      timerSeconds={timerSeconds} />
    </>
  )
}

export default App
