import React from 'react';
import './Get_cod.css'
import exit from '../assets/exit.png'

function get_cod(props) {
    return (
        <div className='container'>
            <h2>Восстановить пароль</h2>
            <div className='exit'>
                <img src={exit} alt="" />
            </div>
            <div className='e-mail'>
                <h4>E-mail</h4>
                <input type="text" placeholder='Введите e-mail'/>
            </div>
            <button className='Sign_in'>Войти</button>
        </div>
    );
}

export default get_cod;