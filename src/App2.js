import logo from './logo.svg';
import './App.css';
import './components/banner.js';
import BlueBanner from './components/banner.js';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <BlueBanner value={110.00} month={"Janeiro"}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
