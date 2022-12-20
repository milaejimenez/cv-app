import React from 'react';
import { Input } from 'semantic-ui-react';

function Education(props) {
    const number = 2
    return (
        props.inputFields.map( (inputField, index) => (
        <div key={index}>
            <Input focus
            type='date'
            placeholder='From'
            name='from'
            label='From'
            value={inputField.from}
            onChange={ event => {props.handleChangeInput(number, index, event)} } />
           
            <Input focus
            type='date'
            placeholder='To'
            name='to'
            label='To'
            value={inputField.to}
            onChange={ event => {props.handleChangeInput(number, index, event)} } />
           
            <Input focus
            placeholder='Degree'
            name='degree'
            label='Degree'
            value={inputField.degree}
            onChange={ event => {props.handleChangeInput(number, index, event)} } />
           
            <Input focus 
            placeholder='Institution'
            name='institution'
            label='Institution'
            value={inputField.institution}
            onChange={ event => {props.handleChangeInput(number, index, event)} } />
           
            <Input focus
            placeholder='Description'
            name='description'
            label='Description'
            value={inputField.description}
            onChange={ event => {props.handleChangeInput(number, index, event)} } />

            <button type='button' onClick={props.handleAddFields}>+</button>
            <button type='button' onClick={ () => { props.handleRemoveFields(number, index)} }>-</button>
         </div> 

         
        ))
        
    )
}

export default Education