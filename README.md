<h1 align="center">Shop</h1>
<p align="center">Simple shirt sales website example!</p>

<h3 align="center">

  <a href="./LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/license%20-MIT-1C1E26?style=for-the-badge&labelColor=1C1E26&color=70ee63">
  </a>

</h3>

<br />

<p align="center">
    <img height="200rem" src="./.github/image1.png">
    <img height="200rem" src="./.github/image2.png">
</p>
<p align="center">
    <img height="200rem" src="./.github/image3.png">
    <img height="200rem" src="./.github/image4.png">
</p>

<br />

# Techs

-  Next
-  Axios
-  React
-  Stripe
-  Stitches
-  Typescript
-  Keen Slider
-  Styled Components



## Installation of dependencies and local use

>> Don't forget to create some environment variables in the `.env.local` file, containing the api route of the "localhost" site, the [stripe](https://stripe.com/) public key and the private key! Like the ones below: 

>> ### [Documentation Stripe](https://stripe.com/docs)

```.env
#APP
NEXT_URL=http://localhost:3000/

#stripe
STRIPE_PUBLIC_KEY=
STRIPE_SECRETE_KEY=
```
> Create somewhere on your pc, a folder to create a copy of the repository, inside it open command terminal and type the commands below:


```
git clone https://github.com/AlanWehrliLC/shop.git
cd shop
npm install
npm run dev
```