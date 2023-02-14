import React from 'react';
import './Sign_in.css'
import exit from '../assets/exit.png'
import mark from '../assets/mark.png'
import google from '../assets/google.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'



function sign_in(props) {
    return (
        <div className='container'>
            <h2 className=''>Войти</h2>
            <div className='exit'>
                <img src={exit} alt="" />
            </div>            
            <div className='e-mail'>
                <h4>E-mail</h4>
                <input type="text" placeholder='Введите e-mail'/>
            </div>
            <div className='password'>
                <h4>Пароль</h4>
                <input type="text" placeholder='Введите пароль'/>
            </div>
            <button className='Sign_in'>Войти</button>
            <div className='forget'>
                <div className='remember'>
                    <img src={mark} alt="" className='mark'/>
                    <p>запомнить меня</p>
                </div>
                <div><a href="#" className='forget_pass'>Забыли пароль?</a></div>
            </div>

            <div>
                <div className='contact'>
                    <p>Войти с помощью</p>
                </div>
                <div className='social_net'>
                    <div>
                        <img src={google} alt="" />
                    </div>
                    <div>
                        <img src={instagram} alt="" />
                    </div>
                    <div>
                        <img src={facebook} alt="" />
                    </div>
                </div>
            </div>
            <div className='register'>

                <div>
                    <p>Нет аккаунта?</p>
                </div>
                <button className='reg'>Зарегистрироваться</button>

            </div>
        </div>
    );
}

export default sign_in;