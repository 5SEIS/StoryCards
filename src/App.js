import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Landing from './Components/Landing'
import ContactUs from './Components/ContactUs';
import EndScreen from './Components/EndScreen';
import Music from './Components/Music';


function App() {

  return (
    <>
      <BrowserRouter>
        <Music/>
        <Routes>
          <Route path='*' element={<Music/>}/>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/final' element={<EndScreen/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
