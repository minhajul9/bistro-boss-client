import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'


const Login = () => {

    const {signIn} = useContext(AuthContext)

    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true)
    const location= useLocation();
    console.log(location);
    const navigate = useNavigate();
    const from = location.state?.from;

    useEffect( () => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = () =>{
        const value = captchaRef.current.value;
        if(validateCaptcha(value)){
            setDisabled(false)
        }
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        
        const email = form.email.value;
        const password= form.password.value;
        // const captcha = form.captcha.value;
        // console.log(email, password, captcha);
        signIn(email, password)
        .then(result => {
            Swal.fire({
                title: 'Success',
                text: 'Login Successful',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
            console.log(result.user)
            navigate(from || '/')
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row px-16 mx-24">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleLogin} className="card-body">

                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        
                        {/* captcha */}
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidateCaptcha} type="text" ref={captchaRef} name="captcha" placeholder="type captcha" className="input input-bordered" />
                            {/* <button onClick={handleValidateCaptcha} className="btn btn-xs mt-2 btn-outline">Validate</button> */}
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p><small>New here? <Link to='/signup'>Create new Account</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;