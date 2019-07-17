import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route, IndexRoute } from 'react-router-dom'

import App from '../containers/index.jsx'
import Home from '../containers/Home/index.jsx'
import Search from '../containers/Search/index.jsx'
import User from '../containers/User/index.jsx'
import Detail from '../containers/Detail/index.jsx'
import City from '../containers/City/index.jsx'
import NotFound from '../containers/404.jsx'

class RouterMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/search" component={Search}/>
                    <Route exact path="/user" component={User}/>
                    <Route exact path="/city" component={City}/>
                    <Route exact path="/detail" component={Detail}/>
                    <Route exact path="/*" component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}

export default RouterMap