import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'

class Detail extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }
    render() {
        return (
            <div>
                <h1>Detail</h1>
            </div>
        )
    }
}

// export default NotFound
module.exports = Detail