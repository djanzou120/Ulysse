import type {AppProps} from 'next/app'

import '../styles/globals.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {ThemeProvider} from "../app/context/ThemeContext";
import {ScrollPageProvider} from "../app/context/ScrollPageContext";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <ThemeProvider initialTheme={"dark"}>
                <ScrollPageProvider>
                    <Component {...pageProps} />
                </ScrollPageProvider>
            </ThemeProvider>
        </>
    )
}

export default MyApp
