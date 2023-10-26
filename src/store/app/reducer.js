const initialState = {
  showLiveChat: false,
  showDeposit: false,
  showWithdraw: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};
