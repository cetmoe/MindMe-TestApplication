import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Header from './header/header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
