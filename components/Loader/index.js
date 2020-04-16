import React from 'react';
import {
  FullWidth,
  FetchingProgress,
} from './index.styled';

const Loader = ({ isLoading = true }) => {
  return isLoading ? (
    <FullWidth>
      <FetchingProgress color="secondary" />
    </FullWidth>
  ) : null;
};


export default Loader;
