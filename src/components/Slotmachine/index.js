import React, { useEffect, useRef, useState } from "react";
import Score from "../Score";
import Wheel from "../Wheel";
import "./index.css";

export default function Slotmachine() {
  const [machineState, setMachineState] = useState({
    running: false,
    started: false
  });

  const [state, setState] = useState({
    wheel1: Math.floor(Math.random() * 4),
    wheel2: Math.floor(Math.random() * 4),
    wheel3: Math.floor(Math.random() * 4)
  });

  let interval = useRef();
  let timeout = useRef();

  useEffect(() => {
    if (machineState.running) {
      interval.current = setInterval(() => {
        setState(s => ({
          wheel1: (s.wheel1 + 1) % 4,
          wheel2: (s.wheel2 + 1) % 4,
          wheel3: (s.wheel3 + 1) % 4
        }));
      }, 50);
    }
  }, [machineState]);

  useEffect(() => {
    if (!machineState.running) {
      timeout.current = setTimeout(() => {
        start();
      }, 5000);
    }
  }, [machineState]);

  useEffect(() => {
    if (machineState.running) {
      timeout.current = setTimeout(() => {
        stop();
      }, 10000);
    }
  }, [machineState]);

  const stop = () => {
    clearInterval(interval.current);
    clearTimeout(timeout.current);
    setMachineState(s => ({ ...s, running: false }));
  };

  const start = () => {
    clearInterval(interval.current);
    clearTimeout(timeout.current);
    setMachineState({ running: true, started: true });
  };

  return (
    <div className="container">
      <div className="wheel-container">
        <Wheel position={state.wheel1} />
        <Wheel position={state.wheel2} />
        <Wheel position={state.wheel3} />
        <div className="buttons">
          <button
            onClick={stop}
            disabled={!machineState.running}
            className="stop"
          >
            STOP
          </button>
          <button
            onClick={start}
            disabled={machineState.running}
            className="start"
            id="start-btn"
          >
            START
          </button>
        </div>
      </div>
      <Score state={state} machineState={machineState} />
    </div>
  );
}
