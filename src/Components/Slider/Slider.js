import React, {useState} from 'react';
// import {css, jsx} from '@emotion/core';
import styled from 'styled-components';
import SliderContent from './SliderContent';
import Slide from './Slide'



// ************* \\
  // * @function Slider;  the Slider parent component * \\
// ************* \\

const Slider = (props) => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
  })

  const {translate, transition} = state

  return (
    <SlicerCSS>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * props.slides.length}
      >
        {
          props.slides.map((s, i) => {
            return(
              <Slide key={s + i} content={s} />
            );
          })
        }
      </SliderContent>
    </SlicerCSS>
  )
}

const SlicerCSS = styled.div`
  position: relative;
  height: 50vh;
  width: 70vw;
  margin: 0 auto;
  overflow: hidden;
`;

export default Slider;