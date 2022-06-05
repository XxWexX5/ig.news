import "../../styles/global.scss";
import { Header } from "../components/Header/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
