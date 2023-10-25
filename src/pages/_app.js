import "@/styles/globals.css";
import Layout from "../components/layout";
import { reduxWrapper, store } from "@/store";
import { Provider } from "react-redux";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default reduxWrapper.withRedux(App);
