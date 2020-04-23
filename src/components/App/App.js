import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import NotFound from '../elements/NotFound/NotFound';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faClock, faTicketAlt, faMoneyBill, faFilm } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faSearch, faClock, faTicketAlt, faMoneyBill, faFilm)

const App = () => {
    return(
       <BrowserRouter>
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path="/:movieId" component={Movie} exact />
                    <Route component={NotFound} />
                </Switch>
            </React.Fragment>
       </BrowserRouter>
    )
}

export default App;