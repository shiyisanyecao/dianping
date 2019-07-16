import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'

class User extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }
    render() {
        return (
            <div>
                <h1>User</h1>
            </div>
        )
    }
}

// export default NotFound
module.exports = User