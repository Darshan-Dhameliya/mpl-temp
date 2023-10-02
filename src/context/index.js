import React, { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  count: 0,
  user: null,
  isloggedin: false,
  showLiveChat: false,
  showDeposit: false,
  showWithdraw: false,
};

const UserContext = createContext();

// Define your reducer function
const reducer = (state, action) => {
  switch (action.type) {
    // Define your action types and corresponding logic here
    // Example:
    case "USER_LOGIN":
      localStorage.setItem("userlogged", true);
      return { ...state, isloggedin: true };

    case "SHOWLIVECHAT":
      return { ...state, showLiveChat: true };
    case "HIDELIVECHAT":
      return { ...state, showLiveChat: false };

    case "SHOWDEPOSIT":
      return { ...state, showDeposit: true };
    case "HIDEDEPOSIT":
      return { ...state, showDeposit: false };

    case "SHOWWITHDRAW":
      return { ...state, showWithdraw: true };
    case "HIDEWITHDRAW":
      return { ...state, showWithdraw: false };

    case "USER_LOGOUT":
      localStorage.removeItem("userlogged");
      return { ...state, isloggedin: false };
    default:
      return state;
  }
};

// Create a custom provider component
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const data = localStorage.getItem("userlogged");
    if (data) {
      dispatch({
        type: "USER_LOGIN",
      });
    }
    return () => {};
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// Create custom hooks for accessing context
export const useStore = () => {
  const { state } = useContext(UserContext);
  if (!state) {
    throw new Error("useUserContext must be used within a MyProvider");
  }
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(UserContext);
  if (!dispatch) {
    throw new Error("useUserContext must be used within a MyProvider");
  }
  return dispatch;
};
