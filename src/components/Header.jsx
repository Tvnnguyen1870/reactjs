
function Header(props) {
    console.log(props);

    const handleLogin = () => {
        props.onLogin();
    }

    const handleLogout = () => {
        props.onLogout();
    }

    // const [isLogin, setIsLogin] = useState(false);

    // const onLogin = () => {
    //     setIsLogin(true);
    // }

    // const onLogout = () => {
    //     setIsLogin(false);
    // }

    return props.isLogined ? (
    <header>
        this is navbar <button onClick={handleLogout}>logout</button>
    </header>
    ):( 
    <button onClick={handleLogin}>login</button>
    );
}

export default Header;