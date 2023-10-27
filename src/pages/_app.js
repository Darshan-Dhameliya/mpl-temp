import "@/styles/globals.css";
import Layout from "../components/layout";
import { reduxWrapper, store } from "@/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import * as Api from "@/services/API";
import { setUserData } from "@/store/user/actions";
import { useEffect } from "react";
import useLoader from "@/helper/useLoader";

function App({ Component, pageProps }) {
  const { isloading, enableLoading, disableLoading } = useLoader();

  const getDtaUsingToken = async () => {
    enableLoading();
    const { data } = await Api.auth.me();
    console.log(data);
    store.dispatch(setUserData(data));
    disableLoading();
  };

  useEffect(() => {
    if (store) {
      getDtaUsingToken();
    }
    return () => {};
  }, []);

  if (isloading) {
    return null;
  }

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        style={{
          zIndex: 120,
        }}
        pauseOnHover
        theme="dark"
      />
    </Provider>
  );
}

export default reduxWrapper.withRedux(App);
