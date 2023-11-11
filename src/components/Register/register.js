
import './Register.scss'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'
import { useEffect } from 'react'
const Register = (props) => {
    let history = useHistory();
    const handleLogin = () => {
        history.push("/login") //chuyển trang bắt sự kiện onlick dùng history
    }
    useEffect(() => {
        axios.get("http://localhost:5000/api/test-api") //check data từ đường link http này
            .then(data => {
                console.log("check data", data);
            })
            .catch(err => {
                console.log("Error", err);
            })
    }, [])
    return (
        <div className="register-container">
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
                        <div className='form-group'>
                            <label>
                                Email:
                            </label>
                            <input type='text' className="form-control" placeholder='Email address' ></input>
                        </div>
                        <div className='form-group'>
                            <label>
                                Phone Number:
                            </label>
                            <input type='phone' className="form-control" placeholder='Phone Number' ></input>
                        </div>
                        <div className='form-group'>
                            <label>
                                Username
                            </label>
                            <input type='Name' className="form-control" placeholder='Name'></input>
                        </div>
                        <div className='form-group'>
                            <label>
                                Password:
                            </label>
                            <input type='password' className="form-control" placeholder='Password' ></input>
                        </div>
                        <div className='form-group'>
                            <label>
                                Re-enter Password:
                            </label>
                            <input type='password' className="form-control" placeholder='Re-enter Password' ></input>
                        </div>
                        <button className='btn btn-primary login_btn selected _51sy login'  >Register</button>
                        <hr />
                        <div className='text-center'> <button className='Create-new  btn btn-success py-3' onClick={() => handleLogin()}> Already've an account .Login</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
