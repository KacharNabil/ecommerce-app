import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from 'react-redux';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {isFetching, error}= useSelector(state=>state.user);


  const handlClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  }

  return (
    <div className='bg-blue-300 flex  justify-center items-center h-screen'>
      <div className='bg-white md:w-[30%] p-8 rounded-xl shadow-xl'>
        <form action="" method="post"     >
          <div className='flex flex-col justify-center  mx-auto '>
            <h1 className='font-bold text-[20px] text-center my-2'>Welcome Back To <span className='text-gray-300'>Snow</span>Shop</h1>
            <input
              type="text"
              onChange={(e) => { setUsername(e.target.value) }}
              placeholder='username'
              className='my-4 py-1.5 px-2 rounded-md font-medium bg-gray-100 border-2 border-gray-100' />
            <input
              onChange={(e) => { setPassword(e.target.value) }}
              type="password"
              placeholder='password'
              className='my-4 py-1.5 px-2 rounded-md font-medium bg-gray-100 border-2 border-gray-100' />
            <button onClick={handlClick} disabled={isFetching} className='bg-teal-500 rounded-md p-2 my-3 w-[30%]  text-white font-semibold'>LOG IN</button>
            {error && <span className="text-center text-red-600 font-light">Your username or password is wrong  </span>}
          </div>
        </form>
        <div
          className='cursor-pointer font-light underline underline-offset-auto mt-1'>DO NOT YOU REMEMBER THE PASSWORD ?
        </div>
        <div
          className='cursor-pointer font-light underline underline-offset-auto mt-1'>CREAT A NEW ACCOUNT
        </div>
      </div>
    </div>
  );
}

export default Login