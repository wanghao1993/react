import { RouteProps } from 'react-router-dom'
import { lazy } from 'react'

const HomePage = import('../view/home/index')
type RouteItem = RouteProps & {
    text: string
}

const routes: RouteItem[] = [{
    path: '/',
    text: '首页',
}, {
    path: '/login',
    text: '登陆',
}]

export default routes