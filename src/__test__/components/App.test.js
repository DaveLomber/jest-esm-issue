import React from "react";
import { shallow } from "enzyme";
import { App } from "../../App";
import { Slider } from "../../Slider";

describe("App page", () => {
  it("render: learn react link", () => {
    const component = shallow(<App />);
    const buttons = component.find(Slider);

    expect(buttons.length).toBe(1);
  });
});
