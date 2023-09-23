import { useState } from 'react';
import './App.css'

import Footer from './components/Footer';
import Header from './components/Header'
import HelloWorld from './components/Helloworld';
import Main from './components/Main'
import Navbar from './components/Nav';
import Age from './components/Age';


function App() {

  // age
  const [age, setAge] = useState(0);
  const [name, setName] = useState('nguyen')
  
  const onIncreateAge = () => {
    setAge(age + 1);
  }
  
  
  // header
  const [isLogin, setIsLogin] = useState(false);

  const onLoginClick = () => {
    setIsLogin(true);
  }
  const onLogoutClick = () => {
    setIsLogin(false)
  }


  
  return (
  <div>
    <div className='conatiner'>
      <button onClick={onIncreateAge}>tăng age lên 1</button>
      <Age age={age} displayName={name}/>
    </div>
    <HelloWorld />
    <Header isLogined={isLogin} onLogin={onLoginClick} onLogout={onLogoutClick}/>
    <Navbar />
    <Main />
    <Footer />
  </div>
  );
}

export default App;
