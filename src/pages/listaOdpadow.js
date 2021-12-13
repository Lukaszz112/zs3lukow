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
      
        const trashList = [{"Item":"Puszki","trashType":"Metal"},{"Item":"Gazety","trashType":"Papier"},{"Item":"Przeterminowane tabletki","trashType":"Leki"},{"Item":"Zepsuta suszarka","trashType":"Elektrośmieć"},{"Item":"Butelka plastikowa","trashType":"Plastik"},{"Item":"Butelka szklana","trashType":"Szkło"},{"Item":"Stary telewizor","trashType":"Elektrośmieć"},{"Item":"Skórka od banana","trashType":"BIO"},{"Item":"Stary monitor","trashType":"Elektrośmieć"},{"Item":"Obierki z warzyw","trashType":"BIO"},{"Item":"Plastikowe reklamówki","trashType":"Plastik"}]
        
        

            return(
                <>
                <ListaWrapper>
                    <h1>Strona w budowie</h1>
                  <table id="trashListTable">
      <tr>
        <th>Odpad</th>
        <th>Rodzaj</th>
      </tr>
      
      <tr>
        <td>
          {trashList[0].Item}
          </td>
        <td>
          {trashList[0].trashType}
          </td>
        </tr>
      <tr>
        <td>
          {trashList[1].Item}
          </td>
        <td>
          {trashList[1].trashType}
          </td>
        </tr>
                    <tr>
        <td>
          {trashList[2].Item}
          </td>
        <td>
          {trashList[2].trashType}
          </td>
        </tr>
                    <tr>
        <td>
          {trashList[3].Item}
          </td>
        <td>
          {trashList[3].trashType}
          </td>
        </tr>
                    <tr>
        <td>
          {trashList[4].Item}
          </td>
        <td>
          {trashList[4].trashType}
          </td>
        </tr>
                    <tr>
        <td>
          {trashList[5].Item}
          </td>
        <td>
          {trashList[5].trashType}
          </td>
        </tr>
                    <tr>
        <td>
          {trashList[6].Item}
          </td>
        <td>
          {trashList[6].trashType}
          </td>
        </tr>
      
    </table>
                </ListaWrapper>
                </>
            )
    }
}

export default ListaOdpadow;
