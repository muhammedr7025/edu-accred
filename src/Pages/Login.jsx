
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div  className='text-white h-[100vh] w-full flex justify-center items-center bg-cover'
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, 
      backgroundRepeat:'no-repeat',
     
      
    }}>
     <div className='Container'>
      <div>
        <h1 className='text-4xl text-white text-center font-bold mb-8'>Login</h1>
        <form action="POST">
        <div className='relative my-4'>
        <input type="email" placeholder='Email' className='TextField peer'/>
        <label htmlFor="Your Email">Your Email</label>
        </div>
        <div className='relative my-4'>
        <input type="pasword"  placeholder='Password' className='TextField  peer'/>
        
        <label htmlFor="Your Password">Your Password</label>
        </div>
        <div>
          <div className='my-4'>
            <input className='TextField peer'placeholder='confirm password' type="checkout" name='' id='' />
            
          </div>
         
        </div>
        <Link to='/'>
        <button className='py-2 px-4 rounded-[50px] bg-black text-white text-center backdrop-filter backdrop-blur-sm bg-opacity-30' type='submit'>Login</button>
        </Link>
        <div className='mb-3'>
          <span>New here <Link className='text-blue-500' to='/register'>Create A Account</Link></span>
        </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login
