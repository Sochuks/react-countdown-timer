import { useState, useEffect, useRef } from 'react'

import Countdown from './Components/CountdownTimer/Countdown'

function App() {
// Create state for components of timer
const [timerDays, setTimerDays] = useState();
const [timerHours, setTimerHours] = useState();
const [timerMinutes, setTimerMinutes] = useState();
const [timerSeconds, setTimerSeconds] = useState();

// UseREf
let interval = useRef();

// Get Time!
const startTime = ()=>{
  // Get Countdown date
    const countDownDate = new Date("April 20, 2024 14:00:00").getTime();

    interval = setInterval(()=>{
        // Current Time
        const now = new Date().getTime();
        
        // Difference from countdown date to Now
        const difference = countDownDate - now;
        
        // Remaining Days
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        // Remaining Hours
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        // Remaining Minutes
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        // Remaining Seconds
        const seconds = Math.floor((difference % (1000 * 60)) / 1000); 

        // Stop Timer using clearInterval
        if (difference < 0){
            clearInterval(interval);
        }else{
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);
        }

    }, 1000);
};

useEffect(()=>{
  startTime();

  return ()=> {
    clearInterval(interval)
  };
}, []);


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
