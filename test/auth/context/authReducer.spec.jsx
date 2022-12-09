import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth";

describe("authReducer tests", () => {
  it("Should return default state", () => {
    const defaultState = {
      logged: false,
      user: null,
    };
    const state = authReducer(defaultState, { type: "", payload: {} });
    expect(state).toBe(defaultState);
  });
  it("Should execute login action", () => {
    const defaultState = {
      logged: false,
      user: null,
    };
    const user = {
      id: "hola",
      name: "lio",
    };
    const state = authReducer(defaultState, {
      type: types.login,
      payload: user,
    });
    expect(state?.logged).toBeTruthy();
    expect(state?.user).toBe(user);
  });
  it("Should execute logout action", () => {
    const defaultState = {
      logged: false,
      user: null,
    };
    const state = authReducer(defaultState, {
      type: types.logout,
      payload: {},
    });
    expect(state?.logged).toBeFalsy();
    expect(state?.user).toBe(null);
  });
});
