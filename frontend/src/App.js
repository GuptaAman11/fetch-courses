import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Fillter from './components/Fillter';

function App() {
  return (
    <div className=' bg-gray-700'>
      <div>
      <Navbar />
      </div>
      <div>
      <Fillter />
      </div>
    </div>
  );
}

export default App;
