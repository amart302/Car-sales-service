
import { useForm } from "react-hook-form";
import "./registration.scss";

function Registration(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    }

    const onError = (error) => {
        console.error(error);
    }

    return(
        <div className="content">
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit(onSubmit, onError)} className="registrationForm">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" {...register("email", { required: true })} />
                <label htmlFor="fullName">ФИО</label>
                <input type="text" id="fullName" {...register("fullName", { required: true })} />
                <label htmlFor="mobilePhone">Мобильный телефон</label>
                <input type="text" id="mobilePhone" {...register("mobilePhone", { required: true })} />
                <label htmlFor="password">Пароль</label>
                <input type="password" id="password" {...register("password", { required: true })}/>
                <label htmlFor="confirmPassword">Подтвердите пароль</label>
                <input type="password" id="confirmPassword" {...register("confirmPassword", { required: true })} />
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default Registration;