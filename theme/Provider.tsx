import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

interface IProps {
	children: React.ReactChild;
}

export const Provider: React.FC<IProps> = ({ children }) => {
	const [mounted, setMounted] = React.useState(false);
	const body = <div>{children}</div>;

	React.useEffect(() => {
		let theme = "light";
		const themeFromLs = localStorage.getItem("theme");
		theme = themeFromLs ? themeFromLs : theme;
		document.documentElement.classList.add(`theme-${theme}`);
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div style={{ visibility: "hidden" }}>{body}</div>;
	}

	return body;
};
