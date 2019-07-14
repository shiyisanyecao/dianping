import React from 'react'
import { render } from 'react-dom'

// import './static/css/common.less'

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