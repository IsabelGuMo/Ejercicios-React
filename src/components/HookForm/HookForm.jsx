import { useForm } from "react-hook-form";

export default function HookForm(){

    const {register, handleSubmit} = useForm();

    const submit = (data) => {
        console.log(data)

    }
    return <form onSubmit={handleSubmit(submit)}>
        <fieldset>
            <label>
                Nombre
                <input type="text" {...register("name")}/>
            </label>
        </fieldset>
        <button>Enviar</button>
    </form>
}