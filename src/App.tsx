import './App.css';
import Navbar from './sections/Navbar';
import Home from './sections/Home';
import About from './sections/About';

function App() {
  return (
    <div >
      <Navbar />
      <main className="flex flex-col items-center">
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
