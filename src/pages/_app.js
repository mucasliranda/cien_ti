import "../styles/globals.css"
import Layout from "../components/Layout"
import Providers from "../provider"



function MyApp({ Component, pageProps }) {
  return(
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  )
}

export default MyApp