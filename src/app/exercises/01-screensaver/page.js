import ScreenSaver from "../../../components/ScreenSaver";
import Link from "next/link";

function ScreenSaverExerciseRout() {
  return (
    <ul>
      <li>
        <Link href="01-screensaver/red">red</Link>
      </li>
      <li>
        <Link href="01-screensaver/blue">blue</Link>
      </li>
      <li>
        <Link href="01-screensaver/hotpink">HotPink</Link>
      </li>
    </ul>
  );
}

export default ScreenSaverExerciseRout;
