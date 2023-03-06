import { useState, useEffect } from 'react';

function App() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-04-07T14:42:00+00:00") - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / ((1000 * 60 * 60) * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60) % 24)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className="app">
      <h1>Za jak dlouho ze se jede do toho Berlinku??</h1>
      <div className='countdown'>
        <div className='timediv'>{timeLeft.days} dni</div>
        <div className='timediv'>{timeLeft.hours} hodin</div>
        <div className='timediv'>{timeLeft.minutes} minut</div>
        <div className='timediv'>{timeLeft.seconds} vterin</div>
      </div>
    </div>
  );
}

export default App;
