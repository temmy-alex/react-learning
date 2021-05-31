const Conditional = () => {
    const isLogin = true
    const userName = 'Iqbal'
    // if(isLogin) return <div>Anda sudah Login</div>
    // else return <div>Silahkan Login</div>

    // Short circuit evaluation / shorthand if
    // const message = isLogin && 'Anda sudah login'
    // return <div>{message}</div>

    // Ternary Operator
    // const message = isLogin ? 'Anda sudah login' : 'Silahkan Login!';
    // return <div>{message}</div>

    // Conditional didalam JSX
    return <div>
        {/* Short circuit evaluation */}
        {/* {isLogin && 'User sudah login'} */}
        
        {/* Ternary operator */}
        {/* {isLogin ? 'User sudah login' : 'silahkan login'} */}

        {isLogin ? <b>{userName} sudah login</b> : 'silahkan login'}
    </div>
}

export default Conditional;