import React from 'react'
import './SignupStyle.css'; 

function Signup() {
  return (
    <div> <section className='section1'>
    <div className="login-box">
      <form action="">
        <h2>Sign Up</h2>
        <div className="input-box">
          <span className="icon"><ion-icon name="Name"></ion-icon></span>
          <input type="text" required />
          <label>name</label>
        </div>
        <div className="input-box">
          <span className="icon"><ion-icon name="mail"></ion-icon></span>
          <input type="email" required />
          <label>email</label>
        </div>
        <div className="input-box">
          <span className="icon"><ion-icon name="mail"></ion-icon></span>
          <input type="email" required />
          <label>email</label>
        </div>
        
        <div className="input-box">
          <span className="icon">
            <ion-icon name="lock-closed"></ion-icon>
          </span>
          <input type="number" required />
          <label>phone number</label>
        </div>
        <div className="input-box">
          <span className="icon">
            <ion-icon name="lock-closed"></ion-icon>
          </span>
          <input type="password" required />
          <label>password</label>
        </div>
        <div className="input-box">
          <span className="icon">
            <ion-icon name="lock-closed"></ion-icon>
          </span>
          <input type="password" required />
          <label>confirm password</label>
        </div>
        <button type="submit">Sign Up</button>
        
      </form>
    </div>
  </section>
</div>
  )
}

export default Signup