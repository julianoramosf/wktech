/* eslint-disable prettier/prettier */
import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { OpenPage } from '../components/view/openPage'
import { Initial } from '../page/categoria'
import { Produto } from '../page/produto'

const AllRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<OpenPage />}>
        <Route path={'/'} element={<Initial />} />      
        <Route path={'/produto'} element={<Produto />} />     
      </Route>    
    </Routes>
  )
}

export { AllRoutes }
