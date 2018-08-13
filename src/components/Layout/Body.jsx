import React from 'react';
import styled from 'styled-components';

import CtaButton from '../CtaButton';

class Body extends React.Component {
  render() {
    return (
      <BodyContainer>
        <MainDescription>
          See it in a demo, or how to quickly add it to your project.
        </MainDescription>
        <CtaButton to={'/start'}>BlueBook</CtaButton>
        <CtaButton to={'/contact'}>Contact</CtaButton>
      </BodyContainer>
    );
  }
}

export default Body;

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;
  text-align: center;
`;

const MainDescription = styled.p`
  text-align: center;
`;
