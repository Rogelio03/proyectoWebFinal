import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
import { BasicInfo } from '../components/citas/BasicInfo/BasicInfo';
import { CitaApp } from '../components/disponibilidad/CitaApp';

export const AppRouter = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route path='/*' element={<CitaApp/>}/>
              <Route path='/addCita' element={<BasicInfo/>}/>

          </Routes>
      </BrowserRouter>
    )
}
