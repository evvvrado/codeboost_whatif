import Footer from "../components/footer";
import Header from "../components/Header";
import { globalStyles } from "../styles/global"

globalStyles();

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}

export default MyApp
