import React from 'react';
import ReactDOM from 'react-dom';

const LoginModal = props => {
  return ReactDOM.createPortal(
    <div className="modal fade" id="modalLogin" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="logout-modal-header">
        </div>

        <div className="modal-body login-modal-body">

          <div className="login-modal-title">
            <h2><strong>LOGIN</strong></h2>
          </div>

          <form method="post" action="{% url 'login' %}">
              <div className="sm-form">
                <label htmlFor="id_username"><i className="fas fa-user prefix"></i></label>
                 <input placeholder="Username" onkeyup='saveValue(this);' id="id_username"  className="form-control validate " type="text" name="username" maxlength="30" />
              </div>

              <div className="sm-form">
                <label htmlFor="id_password"><i className="fas fa-lock prefix"></i></label>
                <input placeholder="Password" onkeyup='saveValue(this);' type="password" className="bottom-form-control form-control validate " name="password" id="id_password" />
              </div>
              <div className="forgot_pass_div">
                <small> <a className="forgot_pass" href="{% url 'password_reset' %}">Forgot your password?</a> </small>
              </div>

              <button type="submit" onclick= "loginError()" className="login_button" name="button"><span className="login_button_text">Login</span></button>
          </form>

            <div className="or_connect_with">
              <small className = "muted_text">OR CONNECT WITH </small>
            </div>

            <div className="social-container">
              <a href="{% url 'social:begin' 'google-oauth2' %}" className="social-button"><i className="fab fa-google"></i></a>
              <a href="{% url 'social:begin' 'facebook' %}" className="social-button"><i className="fab fa-facebook-f"></i></a>
              <a href="{% url 'social:begin' 'twitter' %}" className="social-button"><i className="fab fa-twitter"></i></a>
              <a href="{% url 'social:begin' 'github' %}" className="social-button"><i className="fab fa-github"></i></a>
            </div>

            <hr />

            <small className = "muted_text"> Don't have an account?</small>
            <br />
            <a className="signup-now" onclick="signup_now()" data-toggle="modal" data-target="#modalRegister">Sign-Up Now!</a>

        </div>

        <div className="logout-modal-footer">
        </div>

      </div>
    </div>
    </div>,
    document.getElementById('login_modal')
  );
}

export default LoginModal;
