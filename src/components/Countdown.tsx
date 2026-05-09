import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { WEDDING_TIMESTAMP_MS } from '../constants/wedding';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function computeTimeLeft(): TimeLeft {
  const difference = WEDDING_TIMESTAMP_MS - Date.now();
  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

const pad = (n: number) => String(n).padStart(2, '0');

type UnitProps = {
  value: number;
  label: string;
};

function CountdownUnit({ value, label }: UnitProps) {
  const display = label === 'Days' ? String(value) : pad(value);
  const prevRef = useRef<number | null>(null);
  const [tick, setTick] = useState(false);

  useEffect(() => {
    if (prevRef.current === null) {
      prevRef.current = value;
      return;
    }
    if (prevRef.current !== value) {
      setTick(true);
      const id = window.setTimeout(() => setTick(false), 650);
      prevRef.current = value;
      return () => window.clearTimeout(id);
    }
  }, [value]);

  return (
    <div className="cd-cell">
      <span className={`cd-num ${tick ? 'cd-num--tick' : ''}`}>{display}</span>
      <span className="cd-lab">{label}</span>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useLayoutEffect(() => {
    const tick = () => setTimeLeft(computeTimeLeft());
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-block">
      <div className="cd-panel">
        <div className="cd-grid" role="timer" aria-live="polite">
          <CountdownUnit value={timeLeft.days} label="Days" />
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <CountdownUnit value={timeLeft.minutes} label="Minutes" />
          <CountdownUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
}
