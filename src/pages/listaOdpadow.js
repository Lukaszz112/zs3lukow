import react from 'react';
import { ListaWrapper } from './listaOdpadow/wrapper';

class ListaOdpadow extends react.Component{
    render(){
    
        const onLoad = () => {
            const obj = [];

            fetch('http://localhost:3300')
                .then( resp => resp.json())
                .then( bestTimes => {
                    console.log(bestTimes)
                }
            );
            fetch('http://localhost:3300', {
                method: 'GET',
                body: JSON.stringify( { obj })
            })
                .then( resp =>  resp.json())
                .then( data => console.log(data))
            };

        const title = "Lista odpadów";

            return(
                <>
                <ListaWrapper>
                    <h1>{title}</h1>
                    <button onClick={onLoad}>eee</button>
                </ListaWrapper>
                </>
            )
    }
}

export default ListaOdpadow;