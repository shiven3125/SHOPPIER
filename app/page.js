"use client";
import Image from "next/image";
import React, { Component, useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import ReactPlayer from "react-player";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
  Keyboard,
  EffectCoverflow,
  EffectFade,
} from "swiper/modules";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./page.css";

export default function Home() {
  library.add(fas);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="full">
      <div className="slid">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectCreative,
            Keyboard,
          ]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop="true"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          effect={"creative"}
          keyboard={{
            enabled: true,
          }}
        >
          <SwiperSlide>
            <img src="/1.webp" width={"100%"} />
            <div className="title">
              <span className="little">FOURTH OF JULY SALE</span> <br /> Find
              hot summer deals for
              <br /> every corner, inside and out <br />
              <button className="button1">SHOP THE SALE</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/2.webp" width={"100%"} />
            <div className="title">
              <span className="little">FOURTH OF JULY SALE</span> <br /> Take
              20% off Nomad, our most <br />
              popular seating design <br />
              <button className="button2">SHOP NOMAD</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/3.webp" width={"100%"} />
            <div className="title">
              <span className="little">FOURTH OF JULY SALE</span> <br /> Enjoy
              the weather with 35% off <br />
              select outdoor sets<button className="button2">SHOP RELAY</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/4.webp" width={"100%"} />
            <div className="title">
              <span className="little">FOURTH OF JULY SALE</span> <br /> Modern,
              modular seating like <br />
              Range is 20% off <br />
              <button className="button2">SHOP RANGE</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/5.webp" width={"100%"} />
            <div className="title">
              <span className="little">FOURTH OF JULY SALE</span> <br /> Relax
              in style with up to 30% <br />
              off leather sofas and sectionals <br />
              <button className="button2">SHOP LEATHER</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="text">Design deals, delivered free</div>

      <div className="midimg">
        <img src="/6.webp" width={"30%"} className="mid" div data-aos="zoom-in"/>
        <img src="/7.webp" width={"30%"} className="mid" div data-aos="zoom-in"/>
        <img src="/8.webp" width={"30%"} className="mid" div data-aos="zoom-in"/>
        <img src="/9.webp" width={"30%"} className="mid" div data-aos="zoom-in"/>
        <img src="/10.webp" width={"30%"} className="mid" div data-aos="zoom-in"/>
        <img src="/11.webp" width={"30%"} className="mid" div data-aos="zoom-in"/>
      </div>
      <div className="midtxt"  data-aos="fade-right">
        <div className="flexu">
          <div className="midtxtup">
            We’re solving the biggest problems in furniture
          </div>
        </div>
        <div></div>
        <div className="flexd">
          <div>
            <AirportShuttleIcon className="icon" fontSize="20px" />
          </div>
          <div className="midtxtdw">
            <div>
              <span style={{ fontWeight: "bold" }}>Fast & free shipping </span>
              <br />
              Every single order ships for
              <br /> free. No minimums, no tiers,
              <br /> no fine print whatsoever.
            </div>
          </div>
          <div>
            <CardGiftcardOutlinedIcon className="icon" fontSize="20px" />
          </div>
          <div className="midtxtdw">
            <div>
              <span style={{ fontWeight: "bold" }}>
                Modular, easy-to-move design{" "}
              </span>
              <br />
              Our innovative modular design is driven by <br />
              the belief that furniture should fit this <br />
              home, and the next one.
            </div>
          </div>
          <div>
            <ForestOutlinedIcon className="icon" fontSize="20px" />
          </div>
          <div className="midtxtdw">
            <div>
              <span style={{ fontWeight: "bold" }}>
                Durable, premium materials
              </span>
              <br />
              We use materials like sustainably-forested <br />
              wood, strengthened steel hardware, and <br />
              top-grain Italian leather.
            </div>
          </div>
        </div>
      </div>
      <div className="text" data-aos="zoom-in">Explore each unique collection</div>
      <div className="midimg">
        <img src="/12.webp" width={"20%"} className="mid" data-aos="fade-right"/>
        <img src="/13.webp" width={"20%"} className="mid" data-aos="fade-right"/>
        <img src="/14.webp" width={"20%"} className="mid" data-aos="fade-right"/>
        <img src="/15.webp" width={"20%"} className="mid" data-aos="fade-right"/>
      </div>
      <div className="bdakam">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectCreative,
            Keyboard,
            EffectCoverflow,
          ]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
          }}
          className="mySwiper"
          effect={"coverflow"}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop="true"
          keyboard={{
            enabled: true,
          }}
          data-aos="zoom-in">
          <SwiperSlide>
            <div className="miidi">
              <div className="middiv">
                <div className="chota">NOMAD SOFA</div>
                <br />
                <div className="beech">
                  "The Burrow system <br /> works beautifully.
                  <br /> It's comfortable,
                  <br />
                  absolutely solid, and
                  <br /> looks great."
                </div>
                <br />
                <div className="chota">Shop Now →</div>
              </div>

              <img src="/16.webp" height={"40%"} width={"40%"} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="miidi">
              <div className="middiv">
                <div className="chota">NOMAD SOFA</div>
                <br />
                <div className="beech">
                Not a just superficial beauty, the <br/>table is well-made and <br/>substantial, a nascent heirloom.
                </div>
                <br />
                <div className="chota">Shop Now →</div>
              </div>

              <img src="/17.webp" height={"40%"} width={"40%"} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="miidi">
              <div className="middiv">
                <div className="chota">NOMAD SOFA</div>
                <br />
                <div className="beech">
                The bookshelves are amazing...<br/> Everyone is asking where we got <br/>them.
                </div>
                <br />
                <div className="chota">Shop Now →</div>
              </div>

              <img src="/18.webp" height={"40%"} width={"40%"} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="text" data-aos="zoom-in">Shop these real-life spaces</div>
      <div className="horbdakam">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectCreative,
            Keyboard,
            EffectCoverflow,
          ]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          centeredSlides={true}
          className="mySwiper"
          effect={"coverflow"}
          loop="true"
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          data-aos="zoom-in">
          <SwiperSlide>
            <img src="/19.webp" width={"100%"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/20.webp" width={"100%"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/21.webp" width={"100%"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/22.webp" width={"100%"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/23.webp" width={"100%"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/24.webp" width={"100%"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/25.webp" width={"100%"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/26.webp" width={"100%"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/27.webp" width={"100%"} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="videos" data-aos="zoom-in">
        <ReactPlayer
          url={"/video.mp4"}
          playing={true}
          loop={true}
          controls={false}
          playIcon={"/play.png"}
          width={"100%"}
          height={"100%"}
          autoPlay
          muted
        />
      </div>
      <div className="buttt">
        <button className="button3">SHOP SEATING</button>
      </div>
      <div className="text">Start with these curated spaces</div>
      <div className="niche">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectCreative,
            Keyboard,
            EffectFade,
          ]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          effect={"fade"}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop="true"
          keyboard={{
            enabled: true,
          }}
          data-aos="zoom-in">
          <SwiperSlide>
            <div className="miidi">
              <img src="/28.webp" height={"40%"} width={"40%"} />
              <div className="middiv1">
                <div className="beech">
                  "It's helped me be a little more <br /> organised, and is just
                  so beautiful to <br /> stare at."
                </div>
                <br />
                <div className="chota">AD Cleverst Awards</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="miidi">
              <img src="/29.webp" height={"40%"} width={"40%"} />
              <div className="middiv1">
                <div className="beech">
                  "A convention-busting enticing,
                  <br /> extremely nappable softness"
                </div>
                <br />
                <div className="chota">GQ Home Awards</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      
      
    </div>
  );
}
