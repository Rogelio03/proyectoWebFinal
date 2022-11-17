import React, { useEffect, useReducer } from 'react'
import {Link} from 'react-router-dom'
import {todoReducer as citaReducer} from './CitaReducer'

import {CitasList} from './CitasList'
import { CitaAdd } from './CitaAdd'
import './styles.scss'




export const CitaApp = () => {  

    const [citas, dispatch] = useReducer(citaReducer, [], )

    useEffect(() => {
      localStorage.setItem('citas', JSON.stringify( citas ))
    }, [citas])

    const handleDelete = (citaId) =>{

            const action= {
                type: 'delete',
                payload: citaId
            }

            dispatch(action)
    }
    
    const handleToggle = (citaId) =>{

        dispatch({
            type: 'toggle',
            payload: citaId
        })

    }

    const handleAddCita = (newCita) =>{
        
        dispatch({
            type: 'add',
            payload: newCita
        })
    }

  return (
    <div className='container_app' >
        <h1>Citas: ({citas.length})</h1>
        <hr/>

        <div className='row'>
            
            <div className='col-7'>
                
                <CitasList 
                    citas={citas}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}/>


            </div>

            <div className='col-5'>
                
                <CitaAdd 
                    handleAddCita={handleAddCita}/>
               

            </div>

        </div>

    </div>
  )
}


/* <h4>Agregar Cita1 </h4>
                <hr/>
                <Link
                    to='/addCita' 
                    type='submit'
                    className='btn btn-outline-primary mt-1 btn-block'
                >
                    Agregar
                </Link> */