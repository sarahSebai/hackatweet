import React from 'react'

function signup() {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[firstname,setFirstname]=useState('')



    const handleclick=()=>{
        fetch('http://localhost:3002/users/signup',{
            method:'POST',
            headers:{'Content-Type':'Application/json'},
            body:JSON.stringify({username,password,firstname})
            .then(response=>response.json)
            .then(data=>{
                if(data.result===true){
                    

                }
            })
            
            


        })


    }
   





  return (
    <div>
                 <input require onChange={(e)=>setFirstname(e.target.value)} value={firstname} type='text' className={styles.firstname} placeholder='firstname' ></input>

                 <input require onChange={(e)=>setUsername(e.target.value)} value={username} type='text'className={styles.firstname}  placeholder='username'></input>

                 <input require onChange={(e)=>setPassword(e.target.value)} value={password} type='password' className={styles.firstname}placeholder='password'></input>

                 <button onClick={()=>handleclick()} className={styles.signup}>Sign up</button>
                 <p className={styles.texte}>Create your Hackatweet account</p>
      
    </div>
  )
}

export default signup
