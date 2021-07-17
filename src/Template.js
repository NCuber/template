import {useSpringRef, useChain, useSpring, useTrail, animated, config } from "react-spring";
import useMeasure from "react-use-measure";
import styled from "styled-components";
import React, { useState } from "react";
import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"
import img4 from "./img/4.jpg"
import img5 from "./img/5.jpg"
import img6 from "./img/6.jpg"

const Exps1 = styled.div`
  width: 200px;
  height: 50px;
  border: 2px solid blue;
  background-color: aquamarine;
  overflow: hidden;
`; // 버튼 1 전체 관련

const Exps2 = styled(animated.div)`
  width: 30%;
  height: 100%;

  background-color: red;
`; // 버튼 1 관련



const Donut1 = styled(animated.svg)`
  width: 300px;
  height: 300px;

  stroke: rgb(36, 144, 255);
  stroke-width: 3;
  stroke-dasharray: 100;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  stroke-linejoin: round;

`; // 원 관련



const Donuto = styled(animated.div)`

  position: relative;
  display: inline-block;
  width: 300px;
  height:300px;
  border-radius: 50%;
  

`;
const Trail1 = styled.div`
  width: 300px;

  border: 2px solid blue;
  background-color: greenyellow;
  
`; // 트레일 관련


const Thumb = styled.div`
  width: 500px;
  height: 500px;
  background-color: skyblue;
  position:relative;
  
`;

const Absol = styled(animated.div)`
  position:absolute;
  transform: translate(-50%, 0%);
`;

///////////////////////////////////////////////


const Trails = (props) =>{
  const opent = props.opent
  const items = props.children
  const number = React.Children.count(props.children)

  const trail = useTrail(number, {
    config: { mass: 5, tension: 2000, friction: 200},
    opacity: opent ? 1 : 0,
    x: opent ? 0 : 20,
    height: opent ? 50 : 0,
    from: {opacity: 0, x: 20, height: 0},
  }); 

  return(
    <div>
      메뉴
      {trail.map(({ height, ...style}, index) =>
      (
        <animated.div key={index} style={style}>
          <animated.div style={{height}}>{items[index]}</animated.div>
        </animated.div>
      )
      )}
    </div>
  )
} // 트레일 관련

//////////////////////////////////////////////////////

const Img = styled.img`
  width:100%;



`;
const Titlediv = styled.div`
width: 100%;
height: 50vw;
line-height: 50vw;
font-size: 7vw;
margin: 0 auto;
background-color: aquamarine;
text-align: center;
vertical-align: middle;
position:relative;
`
const Img2 = styled(animated.img)`
  width:50%;
  height:50%;

  position:absolute;
`;

const Template = () => {
  ////////////////////////////////////////////////////
  const [open, toggle] = useState(false);
  const [ref, res] = useMeasure();
  const expp1 = useSpring({
    width: open ? res.width : 0,
    config: { duration: 800 },
  });
  // 버튼 1 관련

  ////////////////////////////////////////////////////

  const [ratio, setRatio] = useState(false);
  const circleprops = useSpring({
    strokeDashoffset: ratio ? 100 : 30,
    config: { duration: 500 },
  });
  const [opent, setOpent] = useState(false);
  // 원 관련v

  const [opens, setOpens] = useState(false);
  const expi1 = useSpring({
    x: opens ? -400 : 0,
    config: config.molasses,
    from:  {x : -400},
    onRest: () => setOpens(!opens)
  });
  const expi2 = useSpring({
    left: opens ? 0 : 400,
    config: 	{ mass: 1, tension: 280, friction: 80 },
    delay: 500,
    from:  {left : 0},
  });


  const expi4 = useSpring({
    opacity: opens ? 1 : 0,
    config: config.molasses, duration: 3000,
    delay: 300,
    from:  {opacity: 0},
  });
  const expi5 = useSpring({
    opacity: opens ? 0 : 1,
    config: config.molasses, duration: 3000,
    delay: 300,
    from:  {opacity: 1},
  });

  const {dono} = useSpring({
    dono: 100,
    from: { dono:0 },
    config: 	{ mass: 1, tension: 120, friction: 70 },
  });


  const expr1ref = useSpringRef();
  const expr2ref = useSpringRef();
  const expr1 = useSpring({
    ref: expr1ref,
    delay:500,
    config: { mass: 2, tension: 150, friction: 20 },
    from: { opacity: 0.2, y: 50 },
    to: {opacity: 0.7, y: 0},

  });
  const expr2 = useSpring({
    ref: expr2ref,
    opacity: 0.7,
    x: 0,
    rotateZ: 0,
    config: { mass: 2, tension: 150, friction: 20 },
    from: { x: 100, rotateZ:720, opacity: 0.5},

  });

  useChain([expr2ref, expr1ref], [0, 0.5])
  return (
    <div>
      hello template
     {/* <Exps1 ref={ref} onClick={() => toggle(!open)}>
        <Exps2 style={expp1} />
      </Exps1>
      {/* 바 관련 *

      
      <Donut1 viewBox="0 0 51 51" onClick={() => setRatio(!ratio)} style={circleprops}>
        <circle
          transform="translate(25.500000, 25.500000) rotate(-270.000000) translate(-25.500000, -25.500000)"
          cx="25"
          cy="25"
          r="10"
        >
          
        </circle>
   
      </Donut1>*/} 
      
      <Donuto style={{background: dono.to(dono => `conic-gradient(red ${dono}% , white ${dono}%)`)}}></Donuto>
       원 관련 
      <Titlediv >
      <Absol style={expr1}>
        <Absol style={expr2}> ㅁㅁㅁ </Absol>
        ㄱ
      </Absol>
      </Titlediv>
       
{/*

  
      <Trail1 onClick={() => setOpent(!opent)}>
        <Trails opent={opent}>
            
            <Img src={img2}/>
            <Img src={img3}/>
            <Img src={img4}/>
            <Img src={img5}/>
        </Trails>
      </Trail1>
       트레일 관련 

       <Thumb onClick={ () => {setOpens(!opens)}}>
         <Img2 src={img6} style={{left:expi1.left}}/>
         <Img2 src={img6} style={{left:expi2.left}}/>
         <Img2 src={img6} style={{opacity:expi4.opacity, top:'300px'}}/>
         <Img2 src={img2} style={{opacity:expi5.opacity, top:'300px'}}/>
       </Thumb>
*/}
    </div>
  );
};

export default Template;
