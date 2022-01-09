
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
    </div>
  );
}

export default App;
