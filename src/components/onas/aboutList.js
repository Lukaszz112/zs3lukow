import react from "react";
import {Wrapper} from './wrapper'

class AboutList extends react.Component{
    constructor(props){
        super(props)

        this.state = {
            showInfoL: false,
            showInfoJ: false,
            showInfoR: false,
        }
    }
    
    render(){

        const Lukasz = " Hej, jestem Łukasz. Moją rolą w projekcie było wykonanie wszystkich prac związanych z frontendem. Bardzo pomógł mi w tym taki framework jak react, oraz biblioteki styled-copmonents, czy react-google-maps"
        const Robert = "Witam, mam na imię Robert. Przygodę z programowaniem zacząłem 2 lata temu. W projekcie odpowiadałem za bazę danych oraz pomoc w postawieniu strony na serwerze"
        const Jakub = " Cześć, tu Jakub. W projekcie byłem odpowiedzialny za wszystko związane z backendem. Wykorzystałem do tego node.js"
    
        const handleImgL = () =>{
            this.setState({
                showInfoL: !this.state.showInfoL,
            });
        }

        const handleImgJ = () =>{
            this.setState({
                showInfoJ: !this.state.showInfoJ,
            });
        }

        const handleImgR = () =>{
            this.setState({
                showInfoR: !this.state.showInfoR,
            });
        }

        return(
        <>
            <Wrapper lukasz showInfoL={this.state.showInfoL}>
                    <img src="https://cdn.glitch.me/32d6913b-918b-4340-b6a2-9a73932c01eb/lukasz.png?v=1639423140746" onClick={handleImgL}></img>
                    {this.state.showInfoL ? (<p>{Lukasz}</p>) : null }
            </Wrapper>

            <Wrapper jakub showInfoJ={this.state.showInfoJ}>
                <img src="https://cdn.glitch.me/32d6913b-918b-4340-b6a2-9a73932c01eb/jakub.jpg" onClick={handleImgJ}></img>
                {this.state.showInfoJ ? (<p>{Jakub}</p>) : null }
            </Wrapper>

            <Wrapper robert showInfoR={this.state.showInfoR}>
                <img src="https://cdn.glitch.me/32d6913b-918b-4340-b6a2-9a73932c01eb/robert.jpg?v=1639423157624" onClick={handleImgR}></img>
                {this.state.showInfoR ? (<p>{Robert}</p>) : null }
            </Wrapper>       
        </>
        )
    }
}

export default AboutList;