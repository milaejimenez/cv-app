import React from 'react';
import { Input } from 'semantic-ui-react';

function Work(props) {
    const number = 1
    return (
        props.inputFields.map( (inputField, index) => (
            <div key={index}>
                <Input focus
                placeholder='From'
                type='date'
                name='from'
                label='From'
                value={inputField.from}
                onChange = { event => { props.handleChangeInput(number, index, event)}} />
                
                <Input focus
                placeholder='To'
                type='date'
                name='to'
                label='To'
                value={inputField.to}
                onChange = { event => { props.handleChangeInput(number, index, event)}}  />
            
                <input focus
                placeholder='Title'
                name='title'
                label='Title'
                value={inputField.title}
                onChange = { event => { props.handleChangeInput(number, index, event)}}  />

                <input focus
                placeholder='Company'
                name='company'
                label='Company'
                value={inputField.company}
                onChange = { event => { props.handleChangeInput(number, index, event)}}  />

                <input focus
                placeholder='Description'
                name='description'
                label='Description'
                value={inputField.description}
                onChange = { event => { props.handleChangeInput(number, index, event)}}  />
            
                <button type='button' onClick={props.handleAddFields}>+</button>
                <button type='button' onClick={ () => { props.handleRemoveFields(number, index)} }>-</button>

            </div>

  
        ))
        
    )
}

export default Work