import React, { useState, useEffect } from "react";
import { usePrevious } from "../../hooks/usePrevious";

export default function Score({ state, machineState }) {
  const [score, setScore] = useState(0);
  const prev = usePrevious(machineState);

  useEffect(() => {
    if (
      machineState.started &&
      !machineState.running &&
      prev !== machineState
    ) {
      if (state.wheel1 === state.wheel2 && state.wheel1 === state.wheel3) {
        return setScore(s => s + 100);
      }
      if (state.wheel1 === state.wheel3) {
        return setScore(s => s + 10);
      }
      if (state.wheel1 === state.wheel2) {
        return setScore(s => s + 20);
      }
      if (state.wheel2 === state.wheel3) {
        return setScore(s => s + 20);
      }
    }
  }, [prev, machineState, state]);

  return <div className="score">{score}</div>;
}
