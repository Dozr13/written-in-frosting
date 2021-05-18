
/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const SliderContent = props => (
  <div
    css={css`
      transform: translateX(-${props.translate}px);
      transition: transform ease-out ${props.transition}s;
      height: 100%;
      width: ${props.width}px;
      display: flex;
    `}
  >
    {props.children}
  </div>
)

export default SliderContent;



// import React from 'react';
// import styled from 'styled-components';
// // import styled from '@emotion/styled';

// const SliderContent = styled.div`
//   transform: translateX(-${props => props.translate}px);
//   transition: transform ease-out ${props => props.transition}s;
//   height: 100%auto;
//   width: ${props => props.width}px;
//   display: flex;
// `;

// export default SliderContent;