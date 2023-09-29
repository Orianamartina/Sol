"use client";
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Reducers from "./redux/redux.js"

const store = configureStore({
  reducer: {
    redux: Reducers,
  },
});


export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </Provider>
  )
}
