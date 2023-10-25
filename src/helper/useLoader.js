import { useState } from "react";

function useLoader(initialValue = false) {
  const [isloading, setLoading] = useState(initialValue);

  const enableLoading = () => {
    setLoading(() => true);
  };
  const disableLoading = () => {
    setLoading(() => false);
  };

  return { isloading, enableLoading, disableLoading };
}

export default useLoader;
