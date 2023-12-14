import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation navigation={Navigation}></Navigation>
      </header>
    </div>
  );
}

export default App;
