import React from 'react'
import { CitaListItem } from './CitaListItem'

export const CitasList = ({citas, handleDelete, handleToggle}) => {

    return (
            <ul className='list-group list-group-flush'>
            {
            citas.map( (cita, i) => (
                //TodoListItem
                <CitaListItem
                    key={cita.id}
                    todo={cita}
                    index={i}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}/>
            ))}
            </ul>
  )
}
