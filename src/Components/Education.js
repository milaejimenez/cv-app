import React from 'react';
import { Input, Segment, Button } from 'semantic-ui-react';

function Education(props) {
    const number = 2
    return (
        <div>
            <h3 className='red'>Education</h3>
            {props.inputFields.map( (inputField, index) => (
            <Segment padded basic key={index}>
                <Input fluid focus
                type='date'
                placeholder='From'
                name='from'
                value={inputField.from}
                onChange={ event => {props.handleChangeInput(number, index, event)} } />
                
                <Input fluid focus
                type='date'
                placeholder='To'
                name='to'
                value={inputField.to}
                onChange={ event => {props.handleChangeInput(number, index, event)} } />
                
                <Input fluid focus
                placeholder='Degree'
                name='degree'
                value={inputField.degree}
                onChange={ event => {props.handleChangeInput(number, index, event)} } />
                
                <Input fluid focus 
                placeholder='Institution'
                name='institution'
                value={inputField.institution}
                onChange={ event => {props.handleChangeInput(number, index, event)} } />
                
                <Input fluid focus
                placeholder='Description'
                name='description'
                value={inputField.description}
                onChange={ event => {props.handleChangeInput(number, index, event)} } />

                <Button basic onClick={ () => {props.handleAddFields()} }> Add </Button>
                <Button basic onClick={ () => { props.handleRemoveFields(number, index)} }>Delete</Button>
                </Segment> 
            ))}

        </div>
        
    )
}

export default Education