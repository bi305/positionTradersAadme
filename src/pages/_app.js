import React from "react";
import PropTypes from "prop-types";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "../utility/createEmotionCache";
import { Layout } from "../Layout";
import lightTheme from "../styles/theme/lightTheme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
	const queryClient = new QueryClient();
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	return (
		<QueryClientProvider client={queryClient}>
			<CacheProvider value={emotionCache}>
				<ThemeProvider theme={lightTheme}>
					<CssBaseline />
					<Component {...pageProps} />
					<ReactQueryDevtools initialIsOpen={false} />
				</ThemeProvider>
			</CacheProvider>
		</QueryClientProvider>
	);
};

export default MyApp;

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};
