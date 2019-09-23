import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Score from "./index";

let container = null;
let state = null;
let machineState = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders without crashing", () => {
  act(() => {
    state = {
      wheel1: 0,
      wheel2: 1,
      wheel3: 0
    };
    machineState = {
      running: false,
      started: true
    };
    render(<Score state={state} machineState={machineState} />, container);
  });

  act(() => {
    state = {
      wheel1: 1,
      wheel2: 1,
      wheel3: 1
    };
    machineState = {
      running: false,
      started: true
    };
    render(<Score state={state} machineState={machineState} />, container);
  });

  act(() => {
    state = {
      wheel1: 1,
      wheel2: 1,
      wheel3: 2
    };
    machineState = {
      running: false,
      started: true
    };
    render(<Score state={state} machineState={machineState} />, container);
  });

  act(() => {
    state = {
      wheel1: 1,
      wheel2: 2,
      wheel3: 2
    };
    machineState = {
      running: false,
      started: true
    };
    render(<Score state={state} machineState={machineState} />, container);
  });

  act(() => {
    state = {
      wheel1: 1,
      wheel2: 2,
      wheel3: 3
    };
    machineState = {
      running: false,
      started: true
    };
    render(<Score state={state} machineState={machineState} />, container);
  });
});
