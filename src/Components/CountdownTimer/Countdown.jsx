import {useState, useEffect} from 'react'

    //Objects for Default Tme
    const default_time = {
        days: "--",
        hours: "--",
        minutes: "--",
        seconds: "--"
    }

const Countdown = () => {
    // create state
    const [time_left, setTime_left] = useState(default_time)


    // Create state
    useEffect(()=>{
       const interval = setInterval(()=>{
            updateTime_left();
        }, 1000);

        return clearInterval(interval)
    }, []);

    // Update remaining time
    const updateTime_left = () => {

    };

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