import React, { Component } from 'react';
import {
  Container,
  StyledButton,
  StyledInput,
  StyledSearch,
  StyledSearchCont,
} from './index.styled';

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }

  triggerVisibility() {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible });
  }

  render() {
    const { isVisible } = this.state;
    return (
      <Container isVisible={isVisible}>
        <StyledSearchCont>
          <StyledSearch />
        </StyledSearchCont>

        <StyledInput />
        <StyledButton>Buscar</StyledButton>
      </Container>
    );
  }
}

export default SearchBox;
