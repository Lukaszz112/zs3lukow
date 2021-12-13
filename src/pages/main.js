import react from 'react';
import {MainWrapper} from './mainStlyed/MainWrapper';
import {ListElement} from './mainStlyed/ListElement';

class Main extends react.Component{
    render(){

            return(
                <MainWrapper>
                    <ListElement listaodpadow>
                        <a href="/lista_odpadow"><input type="button" value="Lista odpadów" /></a>
                    </ListElement>
                    <ListElement pktodbioru>
                        <a href="/punkty_odbioru"><input type="button" value="Kłopotliwe odpady" /></a>     
                    </ListElement>
                    <ListElement onas>
                        <a href="/o_nas"><input type="button" value="O nas" /></a>      
                    </ListElement>
                    <ListElement orecyklingu>
                        <a href="/o_recyklingu"><input type="button" value="O recyklingu" /></a>
                    </ListElement>
                </MainWrapper>
            )
    }
}

export default Main;