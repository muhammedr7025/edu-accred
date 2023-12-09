import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      style={{
        // backgroundImage: 'url(https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="h-screen flex items-center justify-center"
    >
      <div className="bg-transparent max-w-screen-md px-4 py-8 sm:px-6 lg:px-8 rounded-lg w-full sm:w-[50rem]">
        <div className="text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">STIST</h1>
          <p className="mt-4 text-gray-500">
           Login in Staff,Student,Admin
          </p>
          <form action="" className="mt-8 space-y-4 text-center">

            {/* Updated styles for the input fields */}
            <div className="text-center">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative inline-block">
                <input
                  type="text"
                  className="border w-[20rem] md:w-[25rem] rounded-lg border-blue-500 p-3 text-sm shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div className="text-center">
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative inline-block">
                <input
                  type="password"
                  className="border w-[20rem] md:w-[25rem] rounded-lg border-blue-500 p-3 text-sm shadow-sm"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div className="mx-4">
              <Link to="/forgot-password" className="underline text-sm">
                Forget Password?
              </Link>
            </div>

            <div className="flex  justify-center">
            <Link to='/'>
            <div className="w-[20rem] bg-blue-400 text-center py-2 font-bold text-lg rounded-lg">
              Sign in
            </div>
          </Link>
            </div>
          </form> 
          
        </div>
      </div>
    </div>
  );
}

export default Login;
