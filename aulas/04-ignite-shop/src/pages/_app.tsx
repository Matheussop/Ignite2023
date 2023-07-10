import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from "../assets/logo.svg"


globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

export default App