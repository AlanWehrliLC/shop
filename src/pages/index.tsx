import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"

import {useKeenSlider} from "keen-slider/react"

import tShirt1 from "../assets/t-shirt/1.png"
import tShirt2 from "../assets/t-shirt/2.png"
import tShirt3 from "../assets/t-shirt/3.png"

import "keen-slider/keen-slider.min.css"

function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

    return (
      <HomeContainer ref={sliderRef} className="keen-slider">
        <Product className="keen-slider__slide">
          <Image src={tShirt1}  width={520} height={480} alt=""/>

          <footer>
            <strong>Camiseta Beyond the Limits</strong>
            <span>$59.90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={tShirt2}  width={520} height={480} alt=""/>

          <footer>
            <strong>Camiseta Beyond the Limits</strong>
            <span>$59.90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={tShirt3}  width={520} height={480} alt=""/>

          <footer>
            <strong>Camiseta Beyond the Limits</strong>
            <span>$59.90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={tShirt1}  width={520} height={480} alt=""/>

          <footer>
            <strong>Camiseta Beyond the Limits</strong>
            <span>$59.90</span>
          </footer>
        </Product>
      </HomeContainer>
    )
  }
  
export default Home