import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class NotFound extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }
    render() {
        return (
            <div>404 Not Found Page</div>
        )
    }
}

// export default NotFound
module.exports = NotFound