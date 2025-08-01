import React from "react";

import ScreenSaver from "../../../../components/ScreenSaver";
import Link from "next/link";

function ScreenSaverExercise({ params }) {
  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={params.color} />
    </main>
  );
}

export default ScreenSaverExercise;
