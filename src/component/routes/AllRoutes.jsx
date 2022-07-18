import { Button } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../allPages/Home'

export const AllRoutes = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home />} />
        

       </Routes>
    </div>
  )
}
