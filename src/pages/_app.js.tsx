import * as React from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider, EmotionCache} from '@emotion/react';
import theme from '../theme';
import createEmotionCache from '../createEmotionCache';
import {AppBar} from "../components/AppBar";
import {Topics} from "../components/Topics";
import Grid2 from "@mui/material/Unstable_Grid2";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <AppBar/>
                <Grid2 container sx={{
                    marginTop: "64px", minHeight: "calc(100vh - 65px)",
                    backgroundColor: "#f4f6f4"
                }}>
                    <Topics/>
                    <Grid2 xs={10}>
                        <Component {...pageProps} />
                    </Grid2>
                </Grid2>
            </ThemeProvider>
        </CacheProvider>
    );
}
