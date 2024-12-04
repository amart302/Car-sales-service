
import { useForm } from "react-hook-form";
import "./registration.scss";

function Registration(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    const handlePhoneChange = (event) => {
        const value = event.target.value;
        const filetValue = value.replace(/[^\d()+\-]/g, "");
        event.target.value = filetValue;
    }

    return(
        <div className="content">
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="registrationForm">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" {...register("email", { required: "Поле обязательно для заполнения ", pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Неверный адрес электронной почты"
                }})} />
                { errors.email && <span className="errMessage">{ errors.email.message }</span> }
                <label htmlFor="fullName">ФИО</label>
                <input type="text" id="fullName" {...register("fullName", { required: "Поле обязательное для заполнения" })} />
                { errors.fullName && <span className="errMessage">{ errors.fullName.message }</span> }
                <label htmlFor="mobilePhone">Мобильный телефон</label>
                <input type="text" id="mobilePhone" {...register("mobilePhone", { required: "Поле обязательное для заполнения", pattern: {
                    value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                    message: 'Неверный формат номера телефона'
                }})} onChange={handlePhoneChange} />
                { errors.mobilePhone && <span className="errMessage">{ errors.mobilePhone.message }</span> }
                <label htmlFor="password">Пароль</label>
                <input type="password" id="password" {...register("password", { required: "Поле обязательное для заполнения" })}/>
                { errors.password && <span className="errMessage">{ errors.password.message }</span> }
                <label htmlFor="confirmPassword">Подтвердите пароль</label>
                <input type="password" id="confirmPassword" {...register("confirmPassword", { required: "Поле обязательное для заполнения" })} />
                { errors.confirmPassword && <span className="errMessage">{ errors.confirmPassword.message }</span> }
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default Registration;