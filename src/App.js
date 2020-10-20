import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import { TracksProvider } from './core/store/addTrack/+tracks-context';
import { Lyrics } from './components/tracks/lyrics';

// import { PageHeader } from 'antd';
import { Navbar } from './components/layout/Navbar';
import { Index } from './components/layout/Index';


function App() {
    return (
        <TracksProvider>
            <Router>
                <Navbar/>
                <div className="container">
                    <Switch>
                        <Route exact path='/' component={Index}/>
                        <Route exact path='/lyrics/track/:id' component={Lyrics}/>
                    </Switch>
                </div>
            </Router>
        </TracksProvider>
    );
}

export default App;
