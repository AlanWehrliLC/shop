import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Success() {
    return (
        <SuccessContainer>
          <h1>Purchase made</h1>
    
          <ImageContainer>
    
          </ImageContainer>
    
          <p>
            Uhuul <strong>Alan Wehrli</strong>, your <strong>Astronaut t-shirt</strong> is already on its way to your house.
          </p>
    
          <Link href="/">
            Back to catalog
          </Link>
        </SuccessContainer>
    )
}