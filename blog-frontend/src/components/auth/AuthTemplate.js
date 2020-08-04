import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
const AuthTemplateBlock = styled.div`
  position: absolute;
  /* 모든 것을 0으로 해야 모든 화면을 잡음 */
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  /* 플렉스로 내부 내용 중앙 정렬 ? */
  display: flex;
  flex-direction: column;
  /* 상하의 중심 */
  justify-content: center;
  /* 좌우의 중심 */
  align-items: center;
`;
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    /* 좌우 간격 중심 */
    text-align: center;
    font-weight: bold;
    /* 글자 간격 */
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0.025);
  /* 내부에서으로부터 패딩 */
  padding: 2rem;
  width: 360px;
  background: white;
  /* 필렛 */
  border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">REACTERS</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
