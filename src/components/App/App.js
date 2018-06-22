import React from 'react';
import styled from 'styled-components';

import Main from '../../containers/Main';

const Wrapper = styled.div`
  max-width: 100%;
  min-height: 100vh;
  display: flex;
`;

const Aside = styled.aside`
  flex-basis: 240px;
  background-color: #2c0515;
  min-height: 100%;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Aside/>
        <Main/>
      </Wrapper>
    );
  }
}

export default App;
