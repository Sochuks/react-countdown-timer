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
            const difference = countDownDate - now

            
        });
    };

  return (
    <div className='flex justify-center items-center mx-auto w-screen h-screen p-8'>
        {/* App Container */}
        <div className="flex justify-around p-8 bg-lime-200 gap-4">
            {/* DAYS */}
            <span>{}</span>
            {/* HOURS */}
            <span>{}</span>
            {/* MINUTES */}
            <span>{}</span>
            {/* SECONDS */}
            <span>{}</span>
        </div>
        
        
    </div>
  )
};

Countdown.defaultProps = {
    timerDays: 00,
    timerHours: 00,
    timerMinutes: 00,
    timerSeconds: 00,
};

export default Countdown