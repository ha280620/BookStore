import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://cdn0.fahasa.com/media/magentothem/banner7/KimDong65_mainbanner__840x320_1.1.jpg',
  },
  {
    src: 'https://cdn0.fahasa.com/media/magentothem/banner7/bigsale02_062022_840x320.png',
  },
  {
    src: 'https://cdn0.fahasa.com/media/magentothem/banner7/disney-resize-t6.jpg',
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;