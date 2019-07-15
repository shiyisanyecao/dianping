import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers/index.jsx'
import Home from '../containers/Home/index.jsx'
import Search from '../containers/Search/index.jsx'
import User from '../containers/User/index.jsx'
import Detail from '../containers/Detail/index.jsx'
import City from '../containers/City/index.jsx'
import NotFound from '../containers/404.jsx'

class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/user" component={User}/>
                    <Route path="/city" component={City}/>
                    <Route path="/detail" component={Detail}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouteMap