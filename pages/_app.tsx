import type {AppProps} from 'next/app'

import '../styles/globals.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {ThemeProvider} from "../app/context/ThemeContext";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <ThemeProvider initialTheme={"dark"}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
