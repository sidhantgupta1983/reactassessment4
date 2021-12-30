import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import Students from './Component/Students'
import ContactUs from './Component/ContactUs'
import Header from './Component/Header'
import PageNotFound from './Component/PageNotFound';
import './Component/Style.css'


function App() {
  return (
    <div className="App">

      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='home' element={<Home />}/>
          <Route path='students' element={<Students />}/> 
          <Route path='contact' element={<ContactUs />}/>
          <Route path='/*' element={<PageNotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
