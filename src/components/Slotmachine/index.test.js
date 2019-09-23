import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Slotmachine from "./index";

Enzyme.configure({ adapter: new Adapter() });

describe("<Slotmachine />", () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation(init => [init, setState]);

  beforeEach(() => {
    wrapper = Enzyme.shallow(<Slotmachine />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls setCount with count + 1", () => {
    wrapper
      .find("#start-btn")
      .props()
      .onClick();
    expect(setState).toHaveBeenCalled();
  });
});
