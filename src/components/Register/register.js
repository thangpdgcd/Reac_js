
import './Register.scss'
import { useHistory } from 'react-router-dom'
// import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
const Register = (props) => {
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    let history = useHistory();
    const handleRegister = () => {
        let userData = {
            "email": email,
            "phone": phone,
            "username": username,
            "password": password,
        }
        console.log("check user data", userData);
    }
    const handleLogin = () => {
        history.push("/login") //chuyển trang bắt sự kiện onlick dùng history
    }
    useEffect(() => {
        // axios
        // .get("http://localhost:5000/api/test-api") //check data từ đường link http này
        //     .then(data => {
        //         console.log("check data", data);
        //     })
        //     .catch(err => {
        //         console.log("Error", err);
        //     })
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
                            <input name='email' type="text" className="form-control" placeholder='Email address'
                                value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className='form-group'>
                            <label>
                                Phone Number:
                            </label>
                            <input name='phone' type="text" className=" form-control" placeholder='Phone Number'
                                value={phone} onChange={(e) => setPhone(e.target.value)}
                            ></input>
                        </div>
                        <div className='form-group'>
                            <label>
                                Username
                            </label>
                            <input name='name' type="text" className="form-control" placeholder='Name'
                                value={username} onChange={(e) => setUsername(e.target.value)}
                            ></input>
                        </div>
                        <div className='form-group'>
                            <label>
                                Password:
                            </label>
                            <input name='password' type="text" className="form-control" placeholder='Password'
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>
                        <div className='form-group'>
                            <label>
                                Re-enter Password:
                            </label>
                            <input type="Re-enter" className="form-control" placeholder='Re-enter Password'
                                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                            ></input>
                        </div>
                        <button className='btn btn-primary login_btn selected _51sy login' onClick={() => handleRegister()}  >Register</button>
                        <hr />
                        <div className='text-center'> <button className='Create-new  btn btn-success py-3' onClick={() => handleLogin()}> Already've an account .Login</button></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Register;
