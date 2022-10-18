import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"

import {useKeenSlider} from "keen-slider/react"

import tShirt1 from "../assets/t-shirt/1.png"
import tShirt2 from "../assets/t-shirt/2.png"
import tShirt3 from "../assets/t-shirt/3.png"

import "keen-slider/keen-slider.min.css"
import { stripe } from "../lib/stripe"
import { GetServerSideProps } from "next"
import Stripe from "stripe"

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    url: string
    price: number
  }[]
}

export default function Home({products}: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48
    }
  })

    return (
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Image src={product.imageUrl}  width={520} height={480} alt=""/>

              <footer>
                <strong>{product.name}</strong>
                <span>${product.price}</span>
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    )
  }

export const getServerSideProps: GetServerSideProps = async ()=>{
  const response = await stripe.products.list({
    expand: ["data.default_price"]
  })

  
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      url: product.url,
      price: price.unit_amount / 100
    }
  })

  console.log(response.data)

  return {
    props: {
      products
    }
  }
}