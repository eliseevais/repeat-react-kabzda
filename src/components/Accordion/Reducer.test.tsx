import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test("reducer should change value to opposite", () => {
  // data
  const state: StateType = {
    collapsed: false,
  }

  // action
  let result = reducer(state, {type: TOGGLE_COLLAPSED})

  // expect
  expect(result.collapsed).toBe(true);
})

test("wrong action type, expect error", () => {
  // data
  const state: StateType = {
    collapsed: false,
  }

  // action

  // expect
  expect(() => {
    reducer(state, {type: "FAKE_TYPE"})
  }).toThrowError();
})
