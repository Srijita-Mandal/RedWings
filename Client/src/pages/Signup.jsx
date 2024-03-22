import React, { useState } from 'react'

const Signup = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cnf_password: "",
    phone: "",
    dob: "",
  })

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user, [name]:value
    });
  }

  const handleSignupForm = (e) => {
    e.preventDefault();
    // console.log("Signup");
  }

  return (
    <div>
        <div className="container" style={{minHeight:"90vh", paddingBottom: '1rem', display:'flex', justifyContent: 'center'}}>
            <div className="row">
                <div className="col-md-6 formimage" id="sign_img">
                    <img className='' src="../src/assets/images/signup.png" alt="signup image"  width='100%'/>
                    {/* <!-- </div> --> */}
                </div>


                <div className="col-md-6 sForm" style={{alingItems: 'center'}}>
                   <h3 id="signup"><b>SIGN UP</b></h3>
                   <form onSubmit={handleSignupForm} id="signup_form">
                        <div className="form-group">
                          <label className='slabel' htmlFor="name">Name:</label>
                            <input type="text" className="form-control signup_field" placeholder="John Doe" name="name" id="name" autoComplete='off' required value={user.name} onChange={handleInput}/>

                            <label className='slabel' htmlFor="name">Email:</label>
                            <input type="email" className="form-control signup_field" placeholder="johndoe@mail.com" name="email" id="email" autoComplete='off' required value={user.email} onChange={handleInput}/>
                            
                            <label className='slabel' htmlFor="name">Password:</label>
                                <input type="password" className="form-control signup_field" placeholder="Enter your password" name="password" id="password" autoComplete='off' required value={user.password} onChange={handleInput}/>
                                
                                <label className='slabel' htmlFor="name">Confirm Password:</label>
                                <input type="password" className="form-control signup_field" placeholder="Enter your password" name="cnf_password" id="cnf_password" autoComplete='off' required value={user.cnf_password} onChange={handleInput}/>
                                
                                <label className='slabel' htmlFor="name">Phone Number:</label>
                                <input type="tel" className="form-control signup_field" placeholder="Enter your phone number" name="phone" id="phone" autoComplete='off' required value={user.phone} onChange={handleInput}/>
                                
                                <label className='slabel' htmlFor="name">Date of Birth:</label>
                            <input type="date" className="form-control signup_field" name="dob" id="dob" autoComplete='off' required value={user.dob} onChange={handleInput}/><br />
                            <button id="submitbtn" type="submit" value="submit" className="btn"> Submit</button>
                            <p><i>Registered already? <span id="login"><a href="login.php">Login</a></span></i></p>
                        </div>
                    </form> 
                </div>
            </div>
        </div>

    </div>
  )
}

export default Signup
