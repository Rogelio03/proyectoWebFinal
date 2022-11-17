import React from 'react'
import { useForm } from '../../hooks/useForm'
import {Link} from 'react-router-dom'
import './citaAdd.scss';

export const CitaAdd = ({handleAddCita}) => {
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if( description.trim().length <= 1){
            return
        }

        const newCita = {
            id: new Date().getTime(),   
            desc: description,
            done: false
        }

        handleAddCita(newCita)
        reset()
    }

  return (
    <div className='container'>

    <h4>Agregar Cita</h4>
        <hr/>

        <Link
            to='/addCita' 
            type='submit'
            className='btn btn-outline-primary mt-1 btn-block'
        >
            Agregar
        </Link>

        
    </div>    
    )
}
