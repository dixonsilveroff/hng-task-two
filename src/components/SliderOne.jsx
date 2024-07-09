import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../data.js'


function SliderOne() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    
  };
  return (
    <div className="slick">
      <Slider {...settings}>
         {data.map( (d) => (
          <a href="/" key={d.id} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "446px", maxWidth: "466px", background: "#fff", gap: "10px" }}>
            <img src={d.image} alt={d.name} width="466px" height="446px" style={{borderRadius: "24px"}}/>
            <div style={{textAlign: "left", alignSelf: "flex-start", fontFamily: "Satoshi", paddingInline: '10px', gap: "0"}}>
               <p style={{color: "#141414", lineHeight: "20px", fontSize: "24px", fontWeight: "500"}}>{d.name}</p>
               <p style={{color: "rgba(20, 20, 20, 0.80)", fontWeight: "400"}}>{d.gender}&#39;s Shoes</p>
               <p style={{color: "rgba(20, 20, 20, 0.80)", fontWeight: "400"}}>{d.colornum}</p>
               <p style={{color: "#141414", fontWeight: "500"}} >N {d.price}</p>
            </div>
          </a>
         )

         )}
      </Slider>
    </div>
  );
}

export default SliderOne;
