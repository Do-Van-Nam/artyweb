<<<<<<< HEAD
import React, { useState, useEffect, useContext } from 'react';
=======
import React, { useState, useEffect,useContext } from 'react';
>>>>>>> 322ff698181d039ef5e05407796cdc717d33c43a
import clsx from 'clsx';
import { Link, redirect, withRouter, useNavigate } from "react-router-dom";
import { } from 'react-router'
import axios from 'axios'
import { AppContext } from '../../AppContext';


import styles from './login.module.css'

// import 'bootstrap/dist/css/bootstrap.min.css';

function Login(props) {
    const [login, setLogin] = useState(props.log)
    const [loginSuccess, setLoginSuccess] = useState(false)
    const [signupSuccess, setSignupSuccess] = useState(false)
<<<<<<< HEAD
    const { log, setLog } = useContext(AppContext)
    const { userid, setUserid } = useContext(AppContext)
=======
	const { log, setLog } = useContext(AppContext)
	const { userid, setUserid } = useContext(AppContext)
>>>>>>> 322ff698181d039ef5e05407796cdc717d33c43a

    const navigate = useNavigate()

    var email = '', password = '', confirmpassword = ''

    var [accs, setAccs] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:5713/accs')
            .then((response) => {
                setAccs(response.data.accs)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    function loginSummit(e) {
        e.preventDefault()
        const isLoggined = accs.find(acc => acc.email === email && acc.password === password)
        if (isLoggined) {
            setLog(true)
            console.log('dang nhap thanh cong')
            setLoginSuccess(true)
            setTimeout(() => {
                navigate('/')
            }, 2000)
<<<<<<< HEAD
            const userid = localStorage.setItem("userid", isLoggined._id)
=======
           const userid= localStorage.setItem("userid",isLoggined._id)
>>>>>>> 322ff698181d039ef5e05407796cdc717d33c43a
            setUserid(userid)
            return
        }
        else {
            alert("Sai thông tin đăng nhập!")
            return
        }
    }
    async function loadacc(){
        try {
            const acc1 = await axios.get('http://localhost:5713/accs')
            setAccs(acc1.data.accs)
            console.log(accs)
            let isLoggined = acc1.data.accs.find(acc => acc.email === email && acc.password === password)
            localStorage.setItem("userid", isLoggined._id)
            setUserid(localStorage.getItem('userid'))
        } catch (error) {
            console.log(error)
        }
    }
    async function signupSubmit(e) {
        e.preventDefault()
        if (password !== confirmpassword) {
            alert("Mật khẩu không khớp!")
            return
        }
        var formData = {
            email: email,
            password: password
        }
<<<<<<< HEAD
        const isExistedEmail = accs.find(acc => acc.email === email)
        if (isExistedEmail) {
            alert("Tài khoản đã tồn tại!")
=======
        const isExistedEmail = accs.find(acc=>acc.email===email)
        if(isExistedEmail){
            alert("Tai khoan da ton tai!")
>>>>>>> 322ff698181d039ef5e05407796cdc717d33c43a
            return
        }
        try {
            await axios.post('http://localhost:5713/accs', formData);

            loadacc()
            setTimeout(() => {
                setLog(true)
                navigate('/')
            }, 2000)
<<<<<<< HEAD


        } catch (error) {
            console.log(error)
        }
        try {
                        
=======
        const isLoggined = accs.find(acc => acc.email === email && acc.password === password)
         localStorage.setItem("userid",isLoggined._id)
            setUserid(localStorage.getItem('userid'))
            return
>>>>>>> 322ff698181d039ef5e05407796cdc717d33c43a

        } catch (error) {
            console.log(error)
        }
    }

    function LoginForm() {
        return (
            <form onSubmit={loginSummit} className={styles.login}>
                <div className={styles.field}>
                    <input type="text" placeholder="Email" onChange={(e) => { email = e.target.value }} required />
                </div>
                <div className={styles.field}>
                    <input type="password" placeholder="Mật khẩu" onChange={(e) => { password = e.target.value }} required />
                </div>
                <div className={styles.pass_link}>
                    <a href="#">Quên mật khẩu?</a>
                </div>
                <div className={clsx(styles.field, styles.btn)}>
                    <div className={styles.btn_layer}></div>
                    <input type="submit" value="Đăng nhập" />
                </div>
                <div className={styles.signup_link}>
                    Chưa có tài khoản? <div href="" onClick={() => setLogin(false)}>Đăng ký</div>
                </div>
            </form>
        );
    }
    function SignupForm() {
        return (

            <form onSubmit={signupSubmit} className={styles.signup}>
                <div className={styles.field}>
                    <input type="text" placeholder="Email" onChange={(e) => email = e.target.value} required />
                </div>
                <div className={styles.field}>
                    <input type="password" placeholder="Mật khẩu" onChange={(e) => password = e.target.value} required />
                </div>
                <div className={styles.field}>
                    <input type="password" placeholder="Xác nhận mật khẩu" onChange={(e) => confirmpassword = e.target.value} required />
                </div>
                <div className={clsx(styles.field, styles.btn)}>
                    <div className={styles.btn_layer}></div>
                    <input type="submit" value="Đăng ký" />
                </div>
                <div className={styles.signup_link}>
                    Đã tài khoản? <div onClick={() => setLogin(true)}>Đăng nhập</div>
                </div>
            </form>
        )
    }

    return (
        <div>

            <div className={styles.wrapper}>

                <div className={styles.title_text}>
                    <Link to={'/'} className={clsx(styles.title, styles.login)}>
                        ARTY
                    </Link>
                </div>

                <div className={styles.form_container}>
                    <div className={styles.form_inner}>
                        {login ? <LoginForm /> : <SignupForm />}
                    </div >
                </div >
            </div >
        </div >
    )
}


export default Login