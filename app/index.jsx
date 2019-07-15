import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'

import RouteMap from './router/routerMap'

// require('!style-loader!css-loader!postcss-loader!less-loader!./static/css/common.less')
import './static/css/common.less'


render(
    <RouteMap history={hashHistory} />,
    document.getElementById('root')
)