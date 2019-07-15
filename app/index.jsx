import React from 'react'
import { render } from 'react-dom'

// require('!style-loader!css-loader!postcss-loader!less-loader!./static/css/common.less')
import './static/css/common.less'

class Hello extends React.Component {
    render() {
        var str = "hello world"
        return (
            <div>{str} 123 </div>
        )
    }
}

render(
    <Hello />,
    document.getElementById('root')
)