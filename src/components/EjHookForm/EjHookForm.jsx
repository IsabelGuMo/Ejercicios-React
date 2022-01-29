import { useForm } from 'react-hook-form'

const EjHookForm = () => {
 const { register, handleSubmit } = useForm();

 const submit = (data) => {
     console.log(data)
 }

 return <form onsubmit={ handleSubmit(submit)}>
    <fieldset>
        <label>
            Nombre
            <input type="text" {...register("name")}/>
            Edad
            <input type="text" {...register("age")}/>
            Rol
            <input type="text" {...register("rol")}/>
        </label>
        <button>Enviar</button>
    </fieldset>
 </form>
};

export default EjHookForm;