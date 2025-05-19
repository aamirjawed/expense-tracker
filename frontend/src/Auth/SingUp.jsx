/* eslint-disable no-unused-vars */
import { useState } from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import {Link, useNavigate} from "react-router-dom"
import Input from "../components/Input/Input";
import ProfilePhotSelector from "../components/Input/ProfilePhotSelector";
import { validateEmail } from "../utils/helper";


const SingUp = () => {

  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");


  const [error, setError] = useState(null)

  const navigate = useNavigate();

  // handling sign up from submit
 
  const handleSingUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if(!fullName){
      setError("Please Enter your name")
      return
    }

    if(!validateEmail(email)){
      setError("Please enter a valid email")
    }

    if(!password){
      setError("Please enter your password")
    }

    setError("");

    // signup api call
  }
  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">Join us today by entering your details below.</p>


        <form onSubmit={handleSingUp}>

        <ProfilePhotSelector image={profilePic} setImage={setProfilePic} />
            <div className="grid grid-cols-1 gap-4">
              <Input
                value={fullName}
                onChange={({target}) => setFullName(target.value)}
                label="Full Name"
                placeholder="John Doe"
                type="text"
               />
               <Input
                value={email}
                onChange={({target}) => setEmail(target.value)}
                label="Email Address"
                placeholder="John@example.com"
                type="email"
               />
              <div>
               <Input
                value={password}
                onChange={({target}) => setPassword(target.value)}
                label="Password"
                placeholder="Enter your password"
                type="password"
               />
               </div>
            </div>

            {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
            
                       <button type="submit" className="btn-primary ">SIGN UP</button>
            
                       <p className="text-[13px] text-slate-800 mt-3">
                        Already have an account?{""}
                        <Link className="font-medium text-primary underline ml-2" to="/login">logIn</Link>
                       </p>
        </form>

      </div>
    </AuthLayout>
  )
}

export default SingUp