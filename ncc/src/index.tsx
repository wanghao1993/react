import { lazy } from 'react'
import 'antd/dist/antd.css'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const HomePage = lazy(() => import('./view/home/index'))
const LoginPage = lazy(() => import('./view/login'))
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter >
    <Routes>
      <Route path='/' element={<HomePage></HomePage>} />
      <Route path='/login' element={<LoginPage></LoginPage>} />
    </Routes>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log)
