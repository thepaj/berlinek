import Countdown from './Countdown';
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
    <div className="App">
      <p>
        <span>{timeLeft.days}</span>
        <span>:</span>
        <span>{timeLeft.hours}</span>
        <span>:</span>
        <span>{timeLeft.minutes}</span>
        <span>:</span>
        <span>{timeLeft.seconds}</span>
      </p>
    </div>
  );
}

export default App;
