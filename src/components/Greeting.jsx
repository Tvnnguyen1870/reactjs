const Greeting = ({nameForm}) => {
    return (
        <div>
            {nameForm && `Greeting: ${nameForm}`}
        </div>
    )
}

export default Greeting;