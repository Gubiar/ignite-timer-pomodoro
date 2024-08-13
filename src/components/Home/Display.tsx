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
    <div className="flex items-center justify-center font-rubik gap-6 max-sm:gap-4 max-sm:flex-col">
      <div className="flex gap-6 max-sm:gap-4">
        <Digito value={Math.floor(minutes / 10)} />
        <Digito value={minutes % 10} />
      </div>
      <span className="font-bold max-sm:hidden text-9xl max-[965px]:text-4xl text-green-500">:</span>
      <div className="flex gap-6 max-sm:gap-4">
        <Digito value={Math.floor(seconds / 10)} />
        <Digito value={seconds % 10} />
      </div>
    </div>
  );
}
