import React, { useState } from 'react';
import { Container, Tab, Content } from './index.styled';

const CollapsableTab = ({ title, content }) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <Container>
      <Tab type="submit" onClick={() => setVisible(!isVisible)}>
        {title}
      </Tab>
      {isVisible && (
      <Content>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </Content>
      )}
    </Container>
  );
};

export default CollapsableTab;
