import { useState } from "react";
import UserLogged from "../components/LoginPage/UserLogged";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";

const LoginPage = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    const { register, handleSubmit, reset } = useForm()

    const { loginUser } = useAuth()

    const submit = data => {
        loginUser(data)

        reset({
          email: '',
          password: ''
        })
    }

    if (localStorage.getItem('token')) {
      return <UserLogged 
        user = {user} 
        setUser = {setUser}
        />
    }

    return (

      <div>
        <form onSubmit = {handleSubmit(submit)}>
          <label>
            <span>Email</span>
            <input type="email" {...register('email')} />
          </label>
          <label>
            <span>Password</span>
            <input type="password" {...register('password')}/>
          </label>
          <button>Submit</button>
        </form>
      </div>

    );
};

export default LoginPage;
