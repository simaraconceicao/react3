import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../Pages/Home'
import Sobre from '../Pages/Sobre'
import Portfolio from '../Pages/Portfolio'
import Contato from '../Pages/Contato'



function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>                
                <Route path="/sobre" component={Sobre}/> 
                <Route path="/portfolio" component={Portfolio}/>    
                <Route path="/contato" component={Contato}/>       
            </Switch>   
        </BrowserRouter>
    )
}

export default Routes