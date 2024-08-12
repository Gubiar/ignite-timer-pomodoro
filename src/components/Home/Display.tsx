import { useCountdown } from "../../context/CountdownContext";
import Digito from "./Digito";

export default function Display() {
  const { time } = useCountdown();

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  if (time > 0) {
    document.title = `${minutes}:${seconds}`;
  } else {
    document.title = "Ignite Pomodoro - Rockeatseat";
  }

  return (
    <div className="flex items-center justify-center font-rubik gap-6">
      <Digito value={Math.floor(minutes / 10)} />
      <Digito value={minutes % 10} />
      <span className="font-bold text-9xl text-green-500">:</span>
      <Digito value={Math.floor(seconds / 10)} />
      <Digito value={seconds % 10} />
    </div>
  );
}
