import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from "../assets/logo.svg"
import { Container, Header } from "../styles/pages/app"
import Image from "next/image"
import Head from "next/head"


globalStyles()

function MyApp({Component, pageProps}: AppProps){
    
    return (
        <Container>
            <Head>
                <link rel="icon" href="/shop-logo.svg" sizes="any" type="image/svg+xml" />
            </Head>
            <Header>
                <Image src={logoImg} alt="" />
            </Header>
            <Component {...pageProps} />
        </Container>
    )
}

export default MyApp