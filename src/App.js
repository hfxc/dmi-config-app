import './App.css';
import DigitalMusicInterface from './components/DigitalMusicInterface';

import dmiSpecificationJson from './controllerzinho.spec.json'

function App() {
  return (
    <div className="App">

      <DigitalMusicInterface specification={dmiSpecificationJson} />

    </div>
  );
}

export default App;
