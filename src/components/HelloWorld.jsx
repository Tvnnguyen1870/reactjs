const HelloWorld = () => {
    let name = 'nguyen';

    const user = {
        firstName : 'to',
        lastName : 'nguyen'
    };

    const fullName = () => {
        return user.firstName + user.lastName;
    }

    return (
        <footer>
            <div>tên : {name} và {fullName(user)} </div>
            <div> {name === 'nguyen' ? 'xin chao nguyen': `xin chao ${fullName(user)}`} </div>
        </footer>
    )
}

export default HelloWorld;