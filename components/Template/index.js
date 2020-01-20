import React from 'react';
import Header from '../Header';

const Template = ({ children }) => (
  <div>
    <Header />
    {children}
    <style global jsx>
      {`
        @import url('https://fonts.googleapis.com/css?family=Raleway:900&display=swap');
        body{
          margin:0;
          background-color:#f9fbf7 !important
        }
      `}
    </style>
  </div>
);

export default Template;
