import React, { useState } from 'react'

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user, [name]:value
    });
  }

  const handleloginForm = (e) => {
    e.preventDefault();
    // console.log(user);
  }

  return (
    <div>
      <div className="container" style={{minHeight:"90vh", paddingBottom: '1rem', display:'flex', justifyContent: 'center'}}>
            <div className="row">
                <div className="col-md-6 formimage" id="sign_img">
                    <img className='' src="../src/assets/images/signup.png" alt="login image" width='100%'/>
                    {/* <!-- </div> --> */}
                </div>
                <div className="col-md-6 sForm" style={{alingItems: 'center'}}>
                   <h3 id="signup"><b>LOGIN</b></h3>
                   <form id="signup_form" onSubmit={handleloginForm}>
                        <div className="form-group">
                        <p><i>Don't have an account? <span id="login"><a href="login.php">Register</a></span></i></p>
                          <label className='slabel' htmlFor="name">Email:</label>
                          <input type="email" className="form-control signup_field" placeholder="Enter your email" name="email" id="email" autoComplete='off' required value={user.email} onChange={handleInput}/>
                            
                          <label className='slabel' htmlFor="name">Password:</label>
                          <input type="password" className="form-control signup_field" placeholder="Enter your password" name="password" id="password" autoComplete='off' required value={user.password} onChange={handleInput}/>
                          <br />      
                                
                          <button id="submitbtn" type="submit" value="submit" className="btn"> Submit</button>
                          
                        </div>
                    </form> 
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login
