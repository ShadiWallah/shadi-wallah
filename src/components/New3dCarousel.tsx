import React, { useEffect, useRef } from "react";
import "../../src/css/new3dCarousel.css";

const style1 = {
  backgroundImage:
    "url('https://images.unsplash.com/photo-1616165415772-f5b95c3ae135?fm=jpg&q=60&w=3000')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: 'no-repeat'
};

const style2 = {
  backgroundImage:
    "url('https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: 'no-repeat'
};

const style3 = {
  backgroundImage:
    "url('https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: 'no-repeat'
};

const style4 = {
  backgroundImage:
    "url('https://i.pinimg.com/1200x/e5/fc/5c/e5fc5c681f7a191f26f8f9babd6c1caa.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: 'no-repeat'
};

const style5 = {
  backgroundImage:
    "url('https://img.freepik.com/premium-photo/indian-wedding-pooja_96696-144.jpg')",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat:'no-repeat'

};

function New3dCarousel() {
    const sectionRef = useRef(null)
    const [activeIndex, setActiveIndex] = React.useState(0);
    const currentInterevalRef = useRef(0)
    useEffect(()=>{
        const section = sectionRef.current
        currentInterevalRef.current = setInterval(()=>{
         setActiveIndex((prevIndex)=>{
            const totalSlides = [...section.children].filter(element => element.tagName === 'INPUT').length
            // const nextIndex = (prevIndex + 1) % 5;
            const nextIndex = prevIndex === totalSlides - 1 ? 0 : prevIndex + 1;
            [...section.children].filter(element => element.tagName === 'INPUT').forEach((element , index)=>{
                const slide = document.getElementById(`slide${index+1}`)
                if(index===nextIndex){
                    element.checked = true
                    // slide.classList.remove("opacity-0");
                }else{
                    element.checked = false
                    // slide.classList.add("opacity-0")
                }
                
            })
            return nextIndex;
         })
        },2500)
        return ()=>clearInterval(currentInterevalRef.current)
    },[])
  return (
    <div className="">
      <section id="slider" ref={sectionRef}>
        <input type="radio" name="slider" id="s1" />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" />
        <input type="radio" name="slider" id="s4" />
        <input type="radio" name="slider" id="s5" />
        <label htmlFor="s1" id="slide1" style={style1} >The best marriage Site</label>
        <label htmlFor="s2" id="slide2" style={style2} >The best marriage Site</label>
        <label htmlFor="s3" id="slide3" style={style3} >The best marriage Site</label>
        <label htmlFor="s4" id="slide4" style={style4} >The best marriage Site</label>
        <label htmlFor="s5" id="slide5" style={style5} >The best marriage Site</label>
      </section>
    </div>
  );
}
export default New3dCarousel;
