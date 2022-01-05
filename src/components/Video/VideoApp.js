import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CallPage from "./CallPage/CallPage";
import VideoHome from "./VideoHome";

function VideoApp () {
     return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/video" component={VideoHome}></Route>
                    <Route exact path="/video/:id" component={CallPage}></Route>
                </Switch>
            </Router>
            
        </div>
     );
 }

 export default VideoApp