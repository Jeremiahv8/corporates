import { Fragment } from "react";
import App from "next/app";
import Head from "next/head";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { fetchProducts } from "../redux/actions/productActions";
import products from "../data/products.json";
import "../assets/scss/styles.scss";

//  General info
import metadata from "../data/general/meta-data.json";
import branding from "../data/general/branding.json";



class MyApp extends App {
  constructor(props) {
    super(props);
    this.persistor = persistStore(props.reduxStore);
    props.reduxStore.dispatch(fetchProducts(products));
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Fragment>
        <Head>
          <title>{metadata.title} | {metadata.description} </title>
          <link rel="icon" href={branding.favico} />
          <link
            href={branding.font}
            rel="stylesheet"
          ></link>

          <meta charset="utf-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
          <meta name="description" content="corp."/>
          <meta name="keywords" content="mystic, lights, corporates, corp"/>

          <meta name="theme-color" content="rgb(50,50,50)"/>
          <meta name="mobile-web-app-capable" content="yes"/>

          <meta name="apple-mobile-web-app-title" content="Mystic Lights"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="default"/>

          <meta name="msapplication-navbutton-color" content="#FECD03"/>
          <meta name="msapplication-TileColor" content="#FECD03"/>
          <meta name="msapplication-TileImage" content="ms-icon-144x144.png"/>
          <meta name="msapplication-config" content="browserconfig.xml"/>

          <meta name="application-name" content="Mystic Lights"/>
          <meta name="msapplication-tooltip" content="Tooltip Text"/>

          <meta name="msapplication-tap-highlight" content="no"/>

          <meta name="full-screen" content="yes"/>
          <meta name="browsermode" content="application"/>

          <meta name="nightmode" content="enable/disable"/>

          <meta name="layoutmode" content="fitscreen/standard"/>

          <meta name="imagemode" content="force"/>

          <meta name="screen-orientation" content="portrait"/>

          <link rel="manifest" href="/manifest.json" />


        </Head>
        <ToastProvider placement="bottom-left">
          <Provider store={reduxStore}>
            <PersistGate
              loading={<Component {...pageProps} />}
              persistor={this.persistor}
            >
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
        </ToastProvider>
      </Fragment>
    );
  }
}

export default withReduxStore(MyApp);
