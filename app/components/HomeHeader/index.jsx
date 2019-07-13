import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class HomeHeader extends React.Component {
    constructor(props,context) {
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }
    render() {
        return (
            <div className="clear-fix">
                <div className="float-left">
                    深圳
                    <i className="icon-angel-down"></i>
                </div>
                <div className="float-left">
                    <i className="icon-user"></i>
                </div>
                <div>
                    <i className="icon-search"></i>
                    <input/>
                </div>
            </div>
        )
    }
}

// export default NotFound
module.exports = HomeHeader