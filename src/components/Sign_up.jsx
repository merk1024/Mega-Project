import React from 'react';
import './Sign_up.css'
import exit from '../assets/exit.png'
import mark from '../assets/mark.png'
import google from '../assets/google.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'

function Sign_up(props) {
    return (
        <div className='container'>
            <h2>Регистрация</h2>
            <div className='exit'>
                <img src={exit} alt="" />
            </div>            
            <div className='name'>
                <h4>ФИО</h4>
                <input type="text" placeholder='ФИО'/>
            </div>
            <div className='e-mail'>
                <h4>E-mail</h4>
                <input type="text" placeholder='Введите e-mail'/>
            </div>
            <div className='phone'>
                <h4>Телефон</h4>
                <input type="text" placeholder='0 ххх ххх ххх'/>
            </div>
            <div className='new_password'>
                <h4>Создать пароль</h4>
                <input type="text" placeholder='Введите пароль'/>
            </div>
            <div className='password'>
                <h4>Подтвердить пароль</h4>
                <input type="text" placeholder='Введите пароль'/>
            </div>
            <button className='Sign_in'>Зарегистрироваться</button>
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
                <button className='reg'>Войти</button>

            </div>
        </div>
    );
}

export default Sign_up;