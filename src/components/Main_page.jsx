import React from 'react';
import Get_cod from './Get_cod'
import New_pass from './New_pass'
import Sign_in from './Sign_in'
import Sign_up from './Sign_up'
import './Main_page'

function main_page(props) {
    return (
        <div className='container'>
            <a href={Sign_in}>Войти</a>
            <a href={Sign_up} target='_blank'>Зарегистрироваться</a>
            <a href={Get_cod} target='_blank'>Восстановить пароль</a>
            <a href={New_pass} target='_blank'>Восстановить пароль</a>
            
            
        </div>
    );
}

export default main_page;