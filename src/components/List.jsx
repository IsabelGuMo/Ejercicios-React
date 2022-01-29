import Button from './Button';
const name = "Isabel Gutiérrez"

export default function List(){
    return (
        <div>
            <ul>
                <li>Fresa</li>
                <li>Sandia</li>
                <li><Button></Button></li>
                <li>Melón</li>
            </ul>
            <ul>
                <li>Fresa</li>
                <li>Sandia</li>
                <li>Pomelo</li>
                <li>Melón</li>
            </ul>
        </div>
    )
}