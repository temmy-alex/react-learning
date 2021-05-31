const Table = () => {
    const users = [
        { id: 1, name: 'Fateh', gender: 'male', status: 'active' },
        { id: 2, name: 'Aflaha', gender: 'female', status: 'inactive' },
        { id: 3, name: 'Didi', gender: 'male', status: 'active' },
        { id: 4, name: 'Ilham', gender: 'male', status: 'inactive' },
        { id: 5, name: 'Iqbal', gender: 'male', status: 'active' },
        { id: 6, name: 'Eric', gender: 'male', status: 'active' },
    ];

    return <table className='table table-bordered table-striped table-hover'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {users.length > 0 && users.map((user) => {
                const { id, name, gender, status } = user
                const dataStatus = status == 'active' ? 'bg-primary' : 'bg-danger'  
                const isActive = `badge ${dataStatus}`
                return <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{gender == 'male' ? 'Laki-laki' : 'Perempuan'}</td>
                    <td><span className={isActive}>{status == 'active' ? 'Aktif' : 'Tidak Aktif'}</span></td>
                </tr>
            })}
        </tbody>
    </table>
}

export default Table;