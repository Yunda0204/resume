import React from "react";
import styled from "styled-components";

const ProfileImage = ({ className }) => {
  return (
    <div className={className}>
      <div className="layout-width">
        <div className="tit">
          <span>RESUME</span>
          이이름
        </div>
      </div>
    </div>
  );
};

const StyledProfileImage = styled(ProfileImage)`
  background: #bcbcbc url("/images/profile.png") no-repeat calc(50% + 318px)
    bottom;
  height: 450px;
  padding: 50px 30px 10px;
  position: relative;

  .tit {
    position: absolute;
    bottom: 10px;
    font-size: 1.35rem;

    span {
      font-size: 2rem;
      margin-right: 10px;
      letter-spacing: -1px;
    }
  }
`;

export default React.memo(StyledProfileImage);
