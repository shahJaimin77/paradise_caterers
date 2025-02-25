'use client'
import Image from "next/image";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Link from "next/link";
import Testimonials from "./component/Testimonials";
import ImageGrid from "./component/ImageGrid";
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';
import axios from "axios";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: .3,  // Scroll duration
      easing: (t) => t * (2 - t), // Easing function (ease-in-out)
      smoothWheel: true, // Enable smooth scrolling
      smoothTouch: false, // Disable touch scroll smoothing (can be enabled if needed)
    });

    function animate(time) {
      lenis.raf(time);
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    return () => {
      lenis.destroy(); // Cleanup on component unmount
    };
  }, []);

  useEffect(() => {
    let data = {
      names: 'sunny'
    }
    axios.post('/api/upload', data = { data }).then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <>
      <Navbar fixed={true} />
      <div className="heroSection relative">
        <Image src={'/images/hero.webp'} alt="Hero Image" width={1120} height={868} className="img heroImage" />
        <Image src={'/images/overlay.png'} alt="Hero Image" width={250} height={450} className="img heroOverlay" />
        <div className="hero-content">
          <Image src={'/images/paradise-text.svg'} alt="paradise text Image" width={500} height={112} className="img" />
          <p>Welcome to the lip smacking abode of Paradise Caterers. Where we cater to your culinary needs and tickle your taste-buds with our enormous spread comprising over 1000 different food items. From Desi to Videsi, our menu boasts of a wide array of dishes that suit any and every occasion.</p>
        </div>
      </div>

      <div className="aboutUsNaub grid grid-cols-2 align-center gap-x-[70px] gap-y-[34px]">
        <div className="aboutUsNaubL">
          <h2 className="title">About Us</h2>
          <div className="paraGroup">
            <p>Founded by Mr. Rajesh Goradia, Paradise Caterers have been serving happiness on plate since 1995. The vast menu is regularly updated and has been curated keeping in mind the most preferred and sought after dishes by Indians. As Mr. Goradia says, “You name it, we've got it”.</p>
            <p>Our expertise is in Vegetarian catering and every single item on our menu is prepared keeping in mind superior quality and phenomenal taste. Purity, hygiene, premium service and presentation are by words for us</p>
            <p>We facilitate open Ground, Banquet Hall and outstation service. Our well-trained and courteous staff assures a warm and welcoming experience for your guests.
              Your function may last for a while but the memory of the food we serve, will last forever!</p>
          </div>
        </div>
        <div className="aboutUsNaubR">
          <Image src={'/images/about.webp'} alt="About Image" width={603} height={589} className="img" />
        </div>
        <div className="inageGrid col-span-2">
          {/* <picture>
            <source srcSet={'/images/grid-m.webp'} media="(max-width: 768px)" />
            <Image src={'/images/grid.webp'} alt="Inage Image" width={1302} height={447} className="img w-full" />
          </picture> */}
          <ImageGrid />
          <div className="text-center">
            <Link href={'/gallery'} className="button btn-maroon">View Gallery</Link>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  );
}
