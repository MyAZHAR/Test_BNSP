import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import FromComponent from './components/nav/FormComponent';
import NavigationBar from './components/NavigationBar';
import HomeComponent from './components/nav/HomeComponet';
import ChooseComponent from './components/nav/ChooseComponent';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    // kumpulan components yang dijadikan satu
    <Router>
      <div>
        <Header/>
        <NavigationBar/>
        <main>
          <Routes>
            <Route path="/form" element={<FromComponent/>}/>
            <Route path="/home" element={<HomeComponent/>}/>
            <Route path="/choose" element={<ChooseComponent/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>

  )
}

export default App
