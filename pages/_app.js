import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { ThemeProvider } from 'styled-components';
import Store from '../services/store';
import ActualTheme from '../utils/theme';

export default withRedux(Store, { debug: true })(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {}),
        },
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      let mainTheme;
      switch (process.env.theme) {
        case 'studio':
          mainTheme = ActualTheme.studio;
          break;
        case 'home':
          mainTheme = ActualTheme.home;
          break;
        case 'kids':
          mainTheme = ActualTheme.kids;
          break;
        default:
          mainTheme = ActualTheme.studio;
      }
      return (
        <Provider store={store}>
          <ThemeProvider theme={mainTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      );
    }
  },
);
