import React, { useState } from 'react'
import { Button } from '../../common/Button/Button'
import styles from '../../styles/components/Login/Login.module.css'
import { openEye,closeEye } from './SVG' 
import { useLottie } from "lottie-react";
import {string} from 'yup'
import loaderLottieJSON from './Loader.json'
import peekerLottieJSON from './Peeker.json';

export default function Login() {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<any>({'email':'','password':''});
  const [userInputErrors, setUserInputErrors] = useState<any>({'email':'','password':''});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const {View: LoaderLottie} = useLottie({'animationData': loaderLottieJSON, 'loop': true, 'autoplay': true})
  const {View: PeekerLottie} = useLottie({'animationData': peekerLottieJSON, 'loop': true, 'autoplay': true})

  const validators:any = {
    'email': string().required('Email is required').email('Invalid email address'),
    'password': string().required('Password is required').min(8, 'Password must be at least 8 characters long')
  }
  
  const handleInputChange = (e:any) => {
    setUserInput({...userInput, [e.target.name]: e.target.value})
    setUserInputErrors({...userInputErrors, [e.target.name]: ''})
  }

  const handleInputValidation = (e:any):void => {
    let key:string = e.target.name;
    try {
      let updatedValue:string=userInput[key];
      validators[key].validateSync(updatedValue);
      const tempUserInputErrors:any = {...userInputErrors, [key]: ""};
      if(Object.values(tempUserInputErrors).every((value) => value==='')) {
        setIsFormValid(true);
      }
      setUserInputErrors(tempUserInputErrors)
      setUserInput({...userInput, [key]: updatedValue})
    } catch (error:any) {
      setIsFormValid(false);
      // any failed validation will come here
      setUserInputErrors({...userInputErrors, [key]: error.message})
    }

  }
        

  const handleSubmit = (e:any) => {
    try{
      e.preventDefault();
      if(!isFormValid){
        return;
      }

      
    }catch(error:any){
      console.log(error)
    
    }
  }
  


  return (
    <div className={['container-fluid', styles['container']].join(' ')}>
      <h3>
        Join a thriving community at <span className={styles.name}>Remix-Todo</span>.
        {/* <span className={styles['peeker']}><React.Fragment>{PeekerLottie}</React.Fragment></span> */}
      </h3>

      <form className={['m-5 d-flex justify-content-center'].join(' ')}>
        <div className={[styles['form-container']].join(' ')}>
          <h5 className='text-start mt-2 mb-4'>Sign In to Your Account</h5>
          <div className={[styles['form-input']].join(' ')}>
            <div className="form-group">
              <label htmlFor="inputEmail">Email address</label>
              <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" value={userInput.email} name='email' required onChange={handleInputChange} onBlur={handleInputValidation}/>
              <small id="emailHelp" className={["form-text text-muted d-block text-end", styles['info-box']].join(' ')}>{userInputErrors.email}</small>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Password <span className='d-inline' onClick={()=>setShowPassword(!showPassword)}><img src={showPassword ? closeEye : openEye} alt="open-eye" /></span></label>
              <input type={showPassword ? "text": "password"} className="form-control" id="inputPassword" placeholder="Password" name='password' value={userInput.password} required onChange={handleInputChange} onBlur={handleInputValidation}/>
              <small id="emailHelp" className={["form-text text-muted d-block text-end", styles['info-box']].join(' ')}>{userInputErrors.password}</small>
            </div>
          </div>
          <div className='mx-2 my-3'>
            <Button text='Sign In' clickHandler={handleSubmit} disabled={!isFormValid} loader={false} node={<React.Fragment>{LoaderLottie}</React.Fragment>}/>
          </div>
        </div>
      </form>
    </div>
  )
}
