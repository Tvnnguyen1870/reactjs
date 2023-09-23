import { useState } from 'react';
import './App.css'

import Footer from './components/Footer';
import Header from './components/Header'
import HelloWorld from './components/Helloworld';
import Main from './components/Main'


function App() {

  const [isLogin, setIsLogin] = useState(false);

  const onLoginClick = () => {
    setIsLogin(true);
  }

  const onLogoutClick = () => {
    setIsLogin(false)
  }
  
  return (
  <div>
    <HelloWorld />
    <Header isLogined={isLogin} onLogin={onLoginClick} onLogout={onLogoutClick}/>
    <Main />
    <Footer />
  </div>
  );
}

export default App;
