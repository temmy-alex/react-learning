import { users } from './data.js';
const ListObject = () => {
    // const users = [
    //     { id: 1, name: 'Fateh', gender: 'male' },
    //     { id: 2, name: 'Aflaha', gender: 'female' },
    //     { id: 3, name: 'Didi', gender: 'male' },
    //     { id: 4, name: 'Ilham', gender: 'male' },
    //     { id: 5, name: 'Iqbal', gender: 'male' },
    //     { id: 6, name: 'Eric', gender: 'male' },
    // ];

    const displayUser = users.map((user) => {
        return <li key={user.id}>{user.name} ({user.gender})</li>
    })

    return <ul>{displayUser}</ul>
}

export default ListObject;