import React from 'react';
import logo from './logo.svg';
import './App.css';

const Button = React.lazy(() => import('microFrontApp1/Button'));

function App() {
  console.log('Container');
  return (
    <div>
      <div>2324</div>
      <Button />
    </div>
  );
}

export default App;
