import React, { useState } from 'react'
import useState from 'react'

function signin() {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')//les useState pour recuperer les donées que l'user met dans le input

    const clicksignin=()=>{
      fetch('http://localhost:3002/users/signin',{
        method:'POST',
        headers:{'Content-Type':'Application/json'},
        body:JSON.stringify({username,password})
        .then(response=>response.json)
        .then(data=>{
          if(data.data){
            //usedispatch
          }
        })

      })
    }


  return (
    <div>
        <input require onChange={(e)=>setUsername(e.target.value)} value={username} type='text' className={styles.username} placeholder='username' ></input>
        
        <input  require onChange={(e)=>setPassword(e.target.value)} value={password} type='password' className={styles.firstname}placeholder='password'></input>
        <button onClick={()=>clicksignin()} className={styles.signin} >Sign In</button>
         <p className={styles.texte}>Create your Hackatweet account</p>
      
    </div>
  )
}

export default signin
