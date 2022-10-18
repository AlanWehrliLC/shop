import {useRouter} from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product(){
    const {query} = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>T-Shirt</h1>
                <span>$29.90</span>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur laborum architecto et voluptate vel. Id, reiciendis. Voluptatem ratione aspernatur facilis, esse unde ullam delectus alias praesentium laboriosam a eum numquam?</p>

                <button>
                    Buy now
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}