import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

class ctaButton extends Component {
  render() {
    const { children } = this.props;
    return (
      <Link style={{ border: 'none' }} to={this.props.to}>
        <ButtonContainer>{children}</ButtonContainer>
      </Link>
    );
  }
}

export default ctaButton;

// Styled assuming two buttons on front.  Changes necessary if not two buttons.

const ButtonContainer = styled.div`
  border: 1px solid ${props => props.theme.brand};
  border-radius: 3px;
  padding: 25px;
  font-size: 2rem;
  color: ${props => props.theme.brand};
  display: inline-block;
  transition: all 0.3s ease;
  width: 40%;
  text-align: center;
  margin-right: 5%;

  &:hover {
    color: white;
    background: ${props => props.theme.brand};
  }
`;
