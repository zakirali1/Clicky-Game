import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Hero from './Hero';
import Characters from './Characters'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      </header>
      <Hero />
    </div>
  );
}

export default App;
