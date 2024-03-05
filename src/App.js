

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Componets/Navbar';
import ViewRecipe from './Pages/ViewRecipe';
import Singlerecipe from './Pages/Singlerecipe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes> 
        
        <Route path='/' element={<Home/>}/>
        <Route path='/ViewRecipe' element={<ViewRecipe/>}/>
        <Route path='/singleRecipe' element={<Singlerecipe/>}/>
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
