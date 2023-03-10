import { useState } from "react";
import useToggle from "../hooks/useToggle";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";

const loginInputs = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Username",
    errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage: "Password should be 8-20 characters and include at least 1 uppercase letter, 1 number and 1 special character!",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
];

export default function AuthPage() {
  const [form, setForm] = useState({});
  const [showPassword, setShowPassword] = useToggle(true)
  const [loginView, setLoginView] = useToggle(true)
  const navigate = useNavigate();

  const regInputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      pattern: form.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    navigate("/logged")
  };

  return (
    <div className='w-full h-full'>
      <div className='picture-container'>
        <img src='/login.jpeg' className='picture' />
      </div>
      <h1>Login || Register</h1>

      {loginView ?
        <div className="flex flex-col justify-center items-center w-72 mx-auto my-6 shadow-xl p-3">
          <h2>Login</h2>
          <form onSubmit={handleSubmit} className="w-full">
            {loginInputs.map((input) => (
              <FormInput key={input.id} {...input} onChange={onChange} show={showPassword} />
            ))}
            <button className="btn-add">Sign In</button>
          </form>
          <h2>Don't have an account?</h2>
          <button onClick={setLoginView} className="btn-link">Register</button>
        </div> :
        <div className="flex flex-col justify-center items-center w-72 mx-auto my-6 shadow-xl p-3">
          <h2>Register</h2>
          <form onSubmit={handleSubmit} className="w-full">
            {regInputs.map((input) => (
              <FormInput key={input.id} {...input} onChange={onChange} show={showPassword} />
            ))}
            <button className="btn-add">Sign up</button>
          </form>
          <h2>Already have an account?</h2>
          <button onClick={setLoginView} className="btn-link">Login</button>
        </div>
      }
    </div>
  )
}
