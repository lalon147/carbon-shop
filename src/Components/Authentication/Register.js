import React, { useContext } from 'react'
import image from "../../assets/register.svg"
import { useForm } from "react-hook-form";
import { AuthContext } from '../../context/UserContext';


const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {setUpRecaptcha}=useContext(AuthContext);
   
    const onSubmit = data => {
       setUpRecaptcha(data.phone).then(result=>{
        const otp=window.prompt("Enter the OTP");console.log(otp)
        result.confirm(otp).then(result=>{
          const user=result.user
          console.log(user)
        })
       }).catch(error=>console.log(error))
      console.log(data)};
  return (
    <div className='my-10 flex flex-col-reverse md:flex-row justify-evenly items-center'>
           <div>
           <img className='hidden md:block' src={image} alt=""/>           
           </div>
           <div>
           <form className="mx-4 w-full flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>     
              <input className='p-4 rounded-md' placeholder='Full Name'  {...register("fullName",{required:true})} /> 
              <input className='p-4 rounded-md' placeholder='Phone Number'  {...register("phone",{required:true})} /> 
              <input className='p-4 rounded-md' placeholder='Password'  {...register("password",{required:true})} /> 
              <input type="submit" className='btn btn-primary' />
              <div id="recaptcha-container"></div>
            </form>
           </div>
    </div>
  )
}

export default Register