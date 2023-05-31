import { FC } from 'react'
import { ContainerAll, Content } from './style'
import { Outlet } from 'react-router-dom'
import { Aside } from '../aside/aside'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const OpenPage: FC = () => {
  return (
    <ContainerAll>
      <Aside />
      <Content>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
        />
        <Outlet />
      </Content>
    </ContainerAll>
  )
}

export { OpenPage }
