import { useState } from 'react';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header'
import HelloWorld from './components/Helloworld';
import Main from './components/Main'
import Navbar from './components/Nav';
import Age from './components/Age';
import DemoHeader from './components/DemoHeader';
import UserForm from './components/UserForm';
import Greeting from './components/Greeting';

function App() {

  // bai tap 2 
  const [nameForm, setNameForm] = useState('')
  const handleEnter = (name) => {
    setNameForm(name);
  }

  // event, input
  const handleInputChangeLol = (e) => {
    setUserInput(e.target.value);
  }

  const [userInput, setUserInput] = useState("");
  const handleButtonClick = (e) => {
    alert(userInput);
  }

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
    <DemoHeader /> {/*bài tập 1*/}

    <UserForm onEnter={handleEnter} /> {/*bai tap 2 */}
    <Greeting nameForm={nameForm} />

    <HelloWorld /> {/*thực hành 1*/}

    <Navbar /> {/*thực hành 2 */}

    <div className='conatiner'> {/*thực hành 3*/}
      <button onClick={onIncreateAge}>tăng age lên 1</button>
      <Age age={age} displayName={name}/>
    </div>

    <div className='event'> {/* thực hành 4*/}
      <input
        type="text"
        name="user"
        placeholder="Please type somthing"
        onChange={handleInputChangeLol}
      />
      <button onClick={handleButtonClick}>Print</button>
    </div>
    
    <Header isLogined={isLogin} onLogin={onLoginClick} onLogout={onLogoutClick}/>
    <Main />
    <Footer />
  </div>
  );
}

export default App;
