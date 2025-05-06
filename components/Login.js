import React from 'react'
import styles from '../styles/login.module.css'
import useState from 'react'





import Image from 'next/image';

function Login() {

  
    const [singInPopover, setSignInPopover]=useState(false)
    const [singUpPopover,setSignUpPopover]=useState(false)

   
  return (
    <div className={styles.container}>
        <div className={styles.contentLeft}>
        


        </div>
        <div className={styles.contentright}>
       
       <h1 className={styles.title}>See what's <br/> happening</h1>
    
       <p  className={styles.soustitre}>Join Hackatweet today</p>
       <button className={styles.signup}>Sign Up</button>
       <span className={styles.alreadyaccount}>Already have an account ?</span>
       <button className={styles.signin}>Sign In</button>
       <Popover title="Liked movies" content={popoverContent} className={styles.popover} trigger="click">
         <input type='text' className={styles.firstname} placeholder='firstname' ></input>
         <input type='text'className={styles.firstname} placeholder='username'></input>
         <input type='password' className={styles.firstname}placeholder='password'></input>
         <button className={styles.signup}>Sign In</button>
         <p className={styles.texte}>Create your Hackatweet account</p>


        </Popover>
       
       

        </div>
        
    
    </div>
  )
}

export default Login;
