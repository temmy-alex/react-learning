const ListData = () => {
    const users = [
        'Ilham', 'Fateh', 'Arief', 'Casey'
    ];

    // const displayUser = users.map(user => user)
    // return <div>{displayUser}</div>

    // const displayUser = users.map(user => <li key={user}>{user}</li>)
    // return <ul>{displayUser}</ul>

    const displayUser = users.map((user, index) => <li key={index}>{user}</li>)
    return <ul>{displayUser}</ul>
}

export default ListData;