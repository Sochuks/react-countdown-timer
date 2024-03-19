import {useState} from 'react'

const Countdown = () => {
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
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
};

export default Countdown