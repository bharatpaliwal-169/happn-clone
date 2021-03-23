import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: './assets/map.png',
    key: '1'
  },
  {
    
    src: './assets/happn.svg',
    key: '2'
  },
  {
    src: './assets/map.png',

    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;