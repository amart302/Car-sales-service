
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

import "./registration.scss";

function Registration(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ confirmPassword, setConfirmPassword ] = useState(true);
    const onSubmit = (data) => {
        console.log(data);
        if(data.password != data.confirmPassword){
            setConfirmPassword(false);
        }else{
            axios.post("http://localhost:8000/api/registration", {
                username: data.fullName,
                email: data.email,
                phoneNumber: data.mobilePhone,
                password: data.password
            })
            .then(res => {
                console.log("Ответ сервера", res.data);
            })
            .catch(err => {
                console.error("Ошибка от сервера", err.res.status);
            })
        }
        
    }

    const handlePhoneChange = (event) => {
        const value = event.target.value;
        const filetValue = value.replace(/[^\d()+\- ]/g, "");
        event.target.value = filetValue;
    }

    return(
        <div className="content">
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="registrationForm">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="Введите ваш Email" {...register("email", { required: "Поле обязательно для заполнения ", pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Неверный адрес электронной почты"
                }})} />
                { errors.email && <span className="errMessage">{ errors.email.message }</span> }
                <label htmlFor="fullName">ФИО</label>
                <input type="text" id="fullName" placeholder="Введите ваше ФИО" {...register("fullName", { required: "Поле обязательное для заполнения" })} />
                { errors.fullName && <span className="errMessage">{ errors.fullName.message }</span> }
                <label htmlFor="mobilePhone">Мобильный телефон</label>
                <input type="text" id="mobilePhone" placeholder="Введите ваш номер телефона."{...register("mobilePhone", { required: "Поле обязательное для заполнения"})} onChange={handlePhoneChange} />
                { errors.mobilePhone && <span className="errMessage">{ errors.mobilePhone.message }</span> }
                <label htmlFor="password">Пароль</label>
                <input type="password" id="password" placeholder="Введите пароль" {...register("password", { required: "Поле обязательное для заполнения" })}/>
                { errors.password && <span className="errMessage">{ errors.password.message }</span> }
                <label htmlFor="confirmPassword">Подтвердите пароль</label>
                <input type="password" id="confirmPassword" placeholder="Введите пароль" {...register("confirmPassword", { required: "Поле обязательное для заполнения" })} />
                { errors.confirmPassword && <span className="errMessage">{ errors.confirmPassword.message }</span> }
                { !confirmPassword && <span className="errMessage">Пароли не совпадают</span> }
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default Registration;