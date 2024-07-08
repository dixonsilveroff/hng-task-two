import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import styled from '@emotion/styled'

const Main = styled.main`
  min-height: 80vh;
  background-color: transparent;

`
const HeroSection = styled.section`
  padding: 3rem 4rem;
  max-height: 50rem;
`

function App() {

  return (
    <>
      <Header></Header>
      <Main>
        <HeroSection>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "flex-start", maxWidth: "44rem"}}>
            <p style={{ fontFamily: "Archivo", fontSize: "5rem", fontWeight: "500", lineHeight: "6rem", textAlign: "left", textTransform: "uppercase", color: "#fff" }}>Crafted for Champions. made for you!!!</p>
            <a href="" style={{ padding: "1rem 4rem", textAlign: "center", fontFamily: "Satoshi", fontSize: "1.5rem", fontWeight: "400", lineHeight: "2rem", backgroundColor: "transparent", color: "#fff", textDecoration: "none", border: "2px solid #fff", borderRadius: "10rem" }}>Our Collections</a>
          </div>
          <div></div>
        </HeroSection>
      </Main>
      <Footer></Footer>
    </>
  )
}

export default App
