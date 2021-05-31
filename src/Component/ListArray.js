const ListArray = () => {
    const users = [
        'Arief', 'Iqbal', 'Didi', 'Fateh', 'Eric'
    ];

    // const displayUser = users.map(user => user)
    // return <div>{displayUser}</div>

    // With JSX
    // const displayUser = users.map(user =><li>{user}</li>)
    // return <ul>{displayUser}</ul> 

    // Not Explicit mention index
    // const displayUser = users.map((user) => <li key={user}>{user}</li>)
    // return <ul>{displayUser}</ul>

    // Set Index Explicit
    const displayUser = users.map((user, index) => <li key={index}>{user}</li>)
    return <ul>{displayUser}</ul>
}

export default ListArray;