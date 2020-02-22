import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  /* 1024px이상이면 1024px를 줘라 */
  width: 1024px;
  margin: 0 auto; /* 중앙정렬 */
  /* 1024px이하 768아상은 768px */
  @media (max-width: 1024px) {
    width: 768px;
  }
  /* 768px이하 width= 100%주어라 */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => {
  // style,className,onClick,onMouseMove 등의 props을 사용할 수 있도록
  // ...rest를 이용해서  ResponsiveBlock에게 전달
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
