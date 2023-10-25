import "@/styles/globals.css";
import Layout from "../components/layout";
import { reduxWrapper, store } from "@/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        closeButton={false}
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
