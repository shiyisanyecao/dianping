import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'

import RouterMap from './router/routerMap.jsx'

// require('!style-loader!css-loader!postcss-loader!less-loader!./static/css/common.less')
import './static/css/common.less'


render(
    <RouterMap history={hashHistory} />,
    document.getElementById('root')
)