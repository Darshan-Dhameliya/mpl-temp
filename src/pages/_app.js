import "@/styles/globals.css";
import Layout from "../components/layout";
import { reduxWrapper, store } from "@/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import * as Api from "@/services/API";
import { setUserData } from "@/store/user/actions";
import { Suspense, useEffect } from "react";
import useLoader from "@/helper/useLoader";
import { setGamesData } from "@/store/app/actions";
import { setBannerData } from "@/store/app/actions";

function App({ Component, pageProps }) {
  const { isloading, enableLoading, disableLoading } = useLoader();

  const getIntialData = async () => {
    enableLoading();
    const token = localStorage.getItem("AuthToken");
    if (token) {
      const { data: userData } = await Api.auth.me();
      store.dispatch(setUserData(userData));
    }
    const { data: gamesData } = await Api.games.FetchAll();
    store.dispatch(setGamesData(gamesData || []));
    const { data: bannersData } = await Api.miscellaneous.FetchBanners();
    store.dispatch(setBannerData(bannersData || []));
    disableLoading();
  };

  useEffect(() => {
    if (store) {
      getIntialData();
    }
    return () => {};
  }, [store]);

  if (isloading) {
    return <p>Loading feed...</p>;
  }

  return (
    <Provider store={store}>
      <Suspense fallback={<p>Loading feed...</p>}>
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
      </Suspense>
    </Provider>
  );
}

export default reduxWrapper.withRedux(App);
