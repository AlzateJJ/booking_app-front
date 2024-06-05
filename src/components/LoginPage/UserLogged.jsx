
const UserLogged = ( { user, setUser } ) => {

    const handleLogOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser()
    }

    return (
        <article>
            <h2>You're Logged!</h2>
            <header>
                <img src={user.gender === 'male' ? '/male_user.webp' : '/female_user.webp'} alt="" />
            </header>

            <h2>{`Hola ${user.firstName} ${user.lastName}!`}</h2>

            <button onClick={handleLogOut} >Logout</button>
        </article>
    )
}

export default UserLogged