const INITIAL_GLOBAL_STORE = {
  AppToken: "",
  UserToken: "",
  userInfo: {},
};
export function global(state = INITIAL_GLOBAL_STORE, action) {
  switch (action.type) {
    case "global/UPDATE_STATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
