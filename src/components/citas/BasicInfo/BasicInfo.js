import React, { useReducer } from 'react';
import {Upload,Input, InputNumber} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {Checkbox, Button, DatePicker} from 'antd';
import {Link} from 'react-router-dom'
import { useForm } from '../../../hooks/useForm';
import {todoReducer as citaReducer} from '../../disponibilidad/CitaReducer'

import "antd/dist/antd.css";
import "./topSection.scss";
import "./basicInfo.scss";

const { TextArea } = Input;

const init = () =>{

  return JSON.parse(localStorage.getItem('todos'))|| []

}

export  const BasicInfo = () => {

  const [citas, dispatch] = useReducer(citaReducer, [], init)

  const [{nombreCita, nombreProducto, precioProducto, description, date, confirm, cancel}, handleInputChange,handleCheckChange, reset] = useForm({
    nombreCita: '',
    nombreProducto: '',
    precioProducto: '',
    description: '',
    date: '',
    confirm: '',
    cancel: '',
})

  const handleAddCita = (newCita) =>{
          
    dispatch({
        type: 'add',
        payload: newCita
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if( description.trim().length <= 1){
        return
    }

    const newCita = {
        id: new Date().getTime(),   
        nombreCita: nombreCita,
        nombreProducto: nombreProducto,
        precioProducto: precioProducto,
        description: description,
        date: date,
        confirm: confirm,
        cancel: cancel,
        done: false
    }

    console.log(newCita)

    handleAddCita(newCita)
    reset()
  }
    const checkChange = (checked) =>{

      
      return !checked
    }
  
  

  return (
    <div className='container_form'>

    <form className='form' onSubmit={handleSubmit} >
        <div className='topSection'>
            <div className='form-control'>
              <Input  
                  placeholder='Nombre de la Cita'
                  type="text" 
                  name="nombreCita" 
                  autoComplete='off'
                  value={nombreCita}
                  onChange={handleInputChange}
              />
              <TextArea 
                  placeholder='Descripcion de la Cita'
                  type="text" 
                  name="description" 
                  autoComplete='off'
                  value={description}
                  onChange={handleInputChange}
              />
            </div>

            <div className='uploader form-control'>
              <Upload action="/upload.do" listType="picture-card">
                <div >
                  <PlusOutlined />
                    <div
                      style={{
                      marginTop: 8,
                      }}
                    >
                    Subir
                    </div>
                </div>
              </Upload>
            </div>
        </div>

        <div className='form-control'>
          <Input 
              placeholder='Nombre del producto'
              type="text" 
              name="nombreProducto" 
              value={nombreProducto}
              onChange={handleInputChange}
          />
          <Input
              placeholder='$ Precio del producto'
              type='number'
              name="precioProducto" 
              value={precioProducto}
              onChange={handleInputChange}
          />
        </div>

        <hr/>
        {/* Buttom Section */}
        <div className='btm_container' >

            <DatePicker 
                renderExtraFooter={()=>'extra footer'} 
                showTime
                name="date" 
                value={date}
                // onChange={handleInputChange}

            />

            <p>Requiere Confirmacion?</p>
            <Checkbox 
                defaultChecked={false}
                name="confirm" 
                checked={confirm}

                />
            
            <p>Puede Cancelar?</p>
            <Checkbox
                defaultChecked={false}
                name="cancel" 
                checked={cancel}

            />

            
            
        </div>
                      
        <Link to='/' type="secundary">Cancelar</Link>
        <button type="submit">Continuar</button>
    </form>
    </div>
  )
  
}