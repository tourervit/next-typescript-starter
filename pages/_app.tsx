import React from "react";
import App from "next/app";
import { Provider } from "../theme/Provider";
import "../styles/tailwind.scss";

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<Provider>
				<Component {...pageProps} />
			</Provider>
		);
	}
}

export default MyApp;
