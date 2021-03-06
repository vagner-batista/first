import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';

import createEmotionCache from '../style/createEmotionCache';
import '../style/globals.css';
import theme from '../style/theme';

const clientSideEmotionCache = createEmotionCache();

export default function App(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    title,
  } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{title || 'Título'}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
