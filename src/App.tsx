import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Zero from './Components/Zero';

function App(){
  return(
    <Router>
      <Navbar/>
    <Routes>
      <Route path={"/"} element={<Zero/>}/>
    </Routes>
    </Router>
  );
}

export default App;