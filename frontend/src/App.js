import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Contacts from './pages/Contacts';
import CreateContact from './pages/CreateContact';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/product/create" element={<CreateContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
