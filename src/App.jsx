import React, { Component } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SliderOne from './components/SliderOne.jsx'
// import SliderTwo from './components/SliderTwo.jsx'
import styled from '@emotion/styled'
import HeroSneaker from '../public/images/hero-sneaker.jpg'


const Main = styled.main`
  min-height: 80vh;
  background-color: transparent;

`
const HeroSection = styled.section`
  padding: 3rem 4rem;
  max-height: 50rem;
  display: flex;
  gap: 10rem;
`
const NewCollectionsSection = styled.section`
  padding: 3rem 4rem;
  max-height: 51rem;
  background-color: #fff;
`
const BestSellerSection = styled.section`
  padding: 3rem 4rem;
  max-height: 44rem;
  background-color: #fff;
`

function App() {

  return (
    <>
      <Header></Header>
      <Main>
        <HeroSection>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", maxWidth: "44rem"}}>
            <p style={{ fontFamily: "Archivo", fontSize: "5rem", fontWeight: "500", lineHeight: "6rem", textAlign: "left", textTransform: "uppercase", color: "#fff" }}>Crafted for Champions. made for you!!!</p>
            <a href="./src/ProductList.jsx" style={{ padding: "1rem 4rem", textAlign: "center", fontFamily: "Satoshi", fontSize: "1.5rem", fontWeight: "400", lineHeight: "2rem", backgroundColor: "transparent", color: "#fff", textDecoration: "none", border: "2px solid #fff", borderRadius: "10rem" }}>Our Collections</a>
          </div>
          <div>
            <img src={HeroSneaker} alt="Hero Sneaker" />
          </div>
        </HeroSection>
        <NewCollectionsSection>
          <p style={{fontFamily: "Archivo", fontSize: "3rem", fontWeight: "500", lineHeight: "3rem", textTransform: "uppercase", color: "#2e2e2e" }}>NEW COLLECTIONS</p>
          <SliderOne></SliderOne>
          
        </NewCollectionsSection>
        <BestSellerSection>
          <p style={{fontFamily: "Archivo", color: "#2e2e2e", fontSize: "3rem", lineHeight: "3rem", textTransform: "uppercase" }}>BEST SELLERS</p>
          {/* <SliderTwo></SliderTwo> */}
          
         </BestSellerSection>
      </Main>
      <Footer></Footer>
    </>
  )
}

export default App
