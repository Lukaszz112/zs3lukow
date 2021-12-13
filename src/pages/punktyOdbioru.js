import react from 'react';
import { PunktyWrapper } from './punktyOdbioru/wrapper';
import Form from '../components/punktyOdbioru/form';

class PunktyOdbioru extends react.Component{
    render(){

        const title = "Kłopotliwe odpady";

            return(
                <>
                <PunktyWrapper>
                    <h1>{title}</h1>
                    <Form />
                </PunktyWrapper>

                </>
            )
    }
}

export default PunktyOdbioru;