import Counter from './components/counter';
import { useState } from "react";
import './App.css';


function App() {

  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      {isVisible && <Counter />}
      <br />
      <button onClick={() => setInterval(!isVisible)}></button>
    </div>
    
    
  );
}

export default App;
