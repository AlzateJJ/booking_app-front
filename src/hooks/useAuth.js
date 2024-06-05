import axios from "axios"
import { useNavigate } from "react-router-dom"

const useAuth = () => {

    const navigate = useNavigate()
    //Register
    const registerUser = (user) => {
        const url = 'http://localhost:8080/users'
        axios.post(url, user)
            .then(res => {
                navigate('/login')
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    //Login
    const loginUser = (userLoginData) => {
        const url = 'http://localhost:8080/users/login'
        axios.post(url, userLoginData)
            .then(res => {
                navigate('/')
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user', JSON.stringify(res.data.user))
            }
            )
            .catch(err => {
                console.log(err)
                localStorage.removeItem('token')
                localStorage.removeItem('user')
            })
    }

    return { registerUser, loginUser }
}

export default useAuth