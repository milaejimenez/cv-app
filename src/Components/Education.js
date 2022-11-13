import React from 'react'

function Education(props) {
    const number = 2
    return (
        props.inputFields.map( (inputField, index) => (
        <div key={index}>
            <input
            name='from'
            label='from'
            value={inputField.from}
            onChange={ event => {props.handleChangeInput(number, index, event)} } />
           
            <input
            name='to'
            label='from'
            value={inputField.to}
            onChange={ event => {props.handleChangeInput(number, index, event)} } />
           
            <input
            name='degree'
            label='degree'
            value={inputField.degree}
            onChange={ event => {props.handleChangeInput(number, index, event)} } />
           
            <input
            name='institution'
            label='institution'
            value={inputField.institution}
            onChange={ event => {props.handleChangeInput(number, index, event)} } />
           
            <input
            name='description'
            label='from'
            value={inputField.description}
            onChange={ event => {props.handleChangeInput(number, index, event)} } />

            <button type='button' onClick={props.handleAddFields}>+</button>
            <button type='button' onClick={ () => { props.handleRemoveFields(number, index)} }>-</button>
         </div> 

         
        ))
        
    )
}

export default Education