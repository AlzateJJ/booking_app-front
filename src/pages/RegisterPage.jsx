import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const RegisterPage = () => {

  const { register, handleSubmit, reset } = useForm()

  const { registerUser } = useAuth()

  const submit = data => {
    registerUser(data)

    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: 'other'
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <h2>Register</h2>
        <label>
          <span>First Name</span>
          <input {...register('firstName')} type="text" />
        </label>
        <label>
          <span>Last Name</span>
          <input {...register('lastName')} type="text" />
        </label>
        <label>
          <span>Email</span>
          <input {...register('email')} type="email" />
        </label>
        <label>
          <span>Password</span>
          <input {...register('password')} type="password" />
        </label>
        <label>
          <span>Gender</span>
          <select {...register('gender')} >
            <option value='other' >I'd rather not to say it</option>
            <option value='female' >female</option>
            <option value='male' >male</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
