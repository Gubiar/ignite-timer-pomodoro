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
    <div className="flex items-center justify-center gap-6 font-rubik max-sm:flex-col max-sm:gap-4">
      <div className="flex gap-6 max-sm:gap-4">
        <Digito value={Math.floor(minutes / 10)} />
        <Digito value={minutes % 10} />
      </div>
      <span className="text-9xl font-bold text-green-500 max-[965px]:text-4xl max-sm:hidden">
        :
      </span>
      <div className="flex gap-6 max-sm:gap-4">
        <Digito value={Math.floor(seconds / 10)} />
        <Digito value={seconds % 10} />
      </div>
    </div>
  );
}
