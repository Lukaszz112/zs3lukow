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
                    <img src="https://cdn.glitch.me/8e3149b6-fa53-4a08-995d-918b1a0b05b9/lukasz.png?v=1639436058015" alt="Lukasz" onClick={handleImgL}></img>
                    {this.state.showInfoL ? (<p>{Lukasz}</p>) : null }
            </Wrapper>

            <Wrapper jakub showInfoJ={this.state.showInfoJ}>
                <img src="https://cdn.glitch.me/8e3149b6-fa53-4a08-995d-918b1a0b05b9/jakub.png?v=1639436053704" alt="Jakub" onClick={handleImgJ}></img>
                {this.state.showInfoJ ? (<p>{Jakub}</p>) : null }
            </Wrapper>

            <Wrapper robert showInfoR={this.state.showInfoR}>
                <img src="https://cdn.glitch.me/8e3149b6-fa53-4a08-995d-918b1a0b05b9/robert.png?v=1639436065168" alt="Robert" onClick={handleImgR}></img>
                {this.state.showInfoR ? (<p>{Robert}</p>) : null }
            </Wrapper>      
        </>
        )
    }
}

export default AboutList;
