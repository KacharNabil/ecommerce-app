

function Register() {
  return (
    <div className='bg-teal-500 flex justify-center items-center h-screen'>
      <div className='bg-white w-[95%] md:w-[35%] p-8 rounded-xl shadow-xl '>
        <form action="" method="post"     >

          <h1 className='font-bold text-[20px] text-center my-2'>Welcome  To <span className='text-gray-300'>Snow</span>Shop</h1>
          <div className='grid grid-cols-2 justify-center  '>
            <input type="text" placeholder='firstname' className='my-4 py-1.5 px-2 rounded-md font-medium bg-gray-100 border-2 border-gray-100 mr-5' />
            <input type="text" placeholder='lastname' className='my-4 py-1.5 px-2 rounded-md font-medium bg-gray-100 border-2 border-gray-100 mr-5' />
            <input type="text" placeholder='username' className='my-4 py-1.5 px-2 rounded-md font-medium bg-gray-100 border-2 border-gray-100 mr-5' />
            <input type="email" placeholder='e-mail' className='my-4 py-1.5 px-2 rounded-md font-medium bg-gray-100 border-2 border-gray-100 mr-5' />
            <input type="password" placeholder='password' className='my-4 py-1.5 px-2 rounded-md font-medium bg-gray-100 border-2 border-gray-100 mr-5' />
            <input type="password" placeholder='confirm password' className='my-4 py-1.5 px-2 rounded-md font-medium bg-gray-100 border-2 border-gray-100 mr-5' />
          </div>
          <span className='mt-2 px-2'> By creating an account, I consent to the processing of my personal
            data in accordance with the <b className='cursor-pointer'>PRIVACY POLICY</b></span>


          <div className="flex justify-center md:justify-start">
            <button type="submit" className='bg-teal-500 rounded-md p-2 my-3 w-[30%]   text-white font-semibold'>CREATE</button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default Register