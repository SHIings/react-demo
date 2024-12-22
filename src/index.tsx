import React from 'react';
import { createRoot } from 'react-dom/client';

const APP = () => {
  return (
    <div>
      <h1>Hello React!</h1>
    </div>
  );
};

const test = 'hahah';
const a = 1;

createRoot(document.getElementById('root') as HTMLElement).render(<APP />);
