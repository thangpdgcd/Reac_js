
import './Login.scss'
const Login = (props) => {
    return (
        <div className="login-container">
            <div className="container mt-3">
                <div className="row">
                    <div className="content-left  col-7 ">
                        <div className='logo'>
                            facebook
                        </div>
                        <div className='brand'>
                            Recent logins
                        </div>
                        <div className='detail'>
                            Click your picture or add an account.
                        </div>
                    </div>
                    <div className="content-right green col-5 d-flex flex-column gap-3 py-3">
                        <input type='text' className="form-control" placeholder='Email address or phone number' ></input>
                        <input type='password' className="form-control" placeholder='Password'></input>
                        <button className='btn btn-primary login_btn selected _51sy login'  >Log in</button>
                        <a className='text-center forgot'>Forgotten password?</a>
                        <hr />
                        <button className='Create-new btn py-3 '>Create new account</button>

                    </div>
                    <div className='content d-flex'>
                        <a href='' className='create-first black'>Create a Page</a> <span className='create-second black'>for a celebrity, brand or business.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
