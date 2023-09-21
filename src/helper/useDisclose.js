import { useState } from "react";

function useDisclose(initialValue = false) {
  const [state, setState] = useState(initialValue);

  const open = () => {
    setState(() => true);
  };
  const close = () => {
    setState(() => false);
  };
  const toggle = () => {
    setState((prevState) => !prevState);
  };

  return { isOpen: state, open, close, toggle };
}

export default useDisclose;
