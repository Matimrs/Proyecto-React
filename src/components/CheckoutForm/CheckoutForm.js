import { useState } from "react"

export const CheckoutForm=({onConfirm})=>{

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit=(e)=>{

        e.preventDefault();

        const data = {
            name,
            phone,
            email
        }

        onConfirm(data);
    }

    return(
        <form onSubmit={handleSubmit} className="form">
            <label>Nombre
            <input type="text" value={name} onChange={({target}) => setName(target.value)}/>
            </label>
            <label>Telefono
            <input type="text" value={phone} onChange={({target}) => setPhone(target.value)}/>
            </label>
            <label>Email
            <input type="email" value={email} onChange={({target}) => setEmail(target.value)}/>    
            </label>
            <button type="submit" className="button is-link">Enviar</button>
        </form>
    )
}