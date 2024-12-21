import React from 'react';
import { createRoot } from 'react-dom/client';

const APP = () => {
  return (
    <div>
      <h1>Hello React!</h1>
    </div>
  );
};

const a = 'gggg';
console.log(a);

createRoot(document.getElementById('root') as HTMLElement).render(<APP />);
