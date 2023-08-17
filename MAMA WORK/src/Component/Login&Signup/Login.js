import React from 'react'
import './LoginStyle.css'; 
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div>
 
    <section className='section1'>
      <div className="login-box">
        <form action="">
          <h2>login</h2>
          <div className="input-box">
            <span className="icon"><ion-icon name="mail"></ion-icon></span>
            <input type="email" required />
            <label>email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required />
            <label>password</label>
          </div>
          <div className="remember-forget">
            <label><input type="checkbox" />remember me</label>
            <a href="#">forget password?</a>
          </div>
          <button type="submit">login</button>
          <div className="register-link">
            <p>don't have an account? <Link to="/signup">register</Link></p>
          </div>
        </form>
      </div>
    </section>

    </div>
  )
}

export default Login