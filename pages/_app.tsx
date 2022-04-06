import type {AppProps} from 'next/app'

import '../styles/globals.css'

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
