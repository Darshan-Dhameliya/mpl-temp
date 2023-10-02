import "@/styles/globals.css";
import Layout from "../components/layout";
import { ContextProvider } from "@/context/index";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}
