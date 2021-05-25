import { useSpring, animated  } from "react-spring";
import useMeasure from "react-use-measure";
import styled from "styled-components";
import { useState } from "react";

const Exps1 = styled.div`
  width: 200px;
  height: 50px;
  border: 2px solid blue;
  background-color: aquamarine;
  overflow:hidden;
`; // 버튼 1 전체 관련

const Exps2 = styled(animated.div)`
  width: 2%;
  height: 100%;

  background-color: red;
`; // 버튼 1 관련



const Circ1 = styled.div`
  width: 300px;
  height: 300px;

`;

const Donut = (percent) =>
{
  return (   
  <animated.svg
    viewBox="0 0 51 51" // 크기
    strokeWidth="2" // 테두리 두께
    fill="blue"  // 원 색
    stroke="rgb(36, 144, 255)" // 테두리 색
    strokeLinecap="round" // 테두리 선 끝 모양
    strokeLinejoin="round"
    strokeDasharray="156" // 테두리 길이 범위
    strokeDashoffset={percent} // 테두리 현재 길이
    //class="donut" // 클래스 이름
  >
    <circle
      transform="translate(25.500000, 25.500000) rotate(-270.000000) translate(-25.500000, -25.500000)"
      cx="25"
      cy="25"
      r="10"
    ></circle>
  </animated.svg>);
}


/*
export default function App() {
  

  return (
    <div className="App">
      <AnimatedDonut percent={props.value} />
      <div>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
      </div>
    </div>
  );
}
*/
const Template = () => {
  ////////////////////////////////////////////////////
  const [open, toggle] = useState(false);
  const [ref, res] = useMeasure();
  const expp1 = useSpring({
    width: open ? res.width : 0,
    config: {duration: 800}
  });
  // 버튼 1 관련

  ////////////////////////////////////////////////////
  const AnimatedDonut = animated(Donut);
  const [ratio, setRatio] = useState(true);
  const circleprops = useSpring({
    value: ratio ? 156 : 0,
    from: { value: ratio ? 0 : 156 }
  });
  // 원 관련

  return (
    <div>
      hello template
      <Exps1 ref={ref} onClick={() => toggle(!open)}>
        <Exps2 style={expp1} />
      </Exps1>
      {/* 바 관련 */}

      <Circ1 onClick={ ()=> setRatio(!ratio)} >
        <Donut percent={circleprops.value} />
      </Circ1>
      {/* 원 관련 */}
    </div>
  );
};

export default Template;
