import './Login.scss'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Login = (props) => {
    let history = useHistory();
    const handleCreateNewAccout = () => {
        history.push("/register") //chuyển trang bắt sự kiện onlick dùng history
    }
    return (
        <div className="login-container">
            <div className="container mt-3">
                <div className="row px-3 px-sm-0">
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
                        <a href="/About" className='text-center forgot'>Forgotten password?</a>
                        <hr />
                        <div className='text-center'> <button className='Create-new  btn btn-success py-3' onClick={() => handleCreateNewAccout()}> Create new account</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
