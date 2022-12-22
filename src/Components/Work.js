import React from 'react';
import { Input, Segment, Button } from 'semantic-ui-react';

function Work(props) {
    const number = 1
    return (
        <div>
            <h3>Work Experience</h3>
            {props.inputFields.map( (inputField, index) => (
                <Segment basic padded key={inputField.id}>
                    <Input fluid focus
                    placeholder='From'
                    type='date'
                    name='from'
                    value={inputField.from}
                    onChange = { event => { props.handleChangeInput(number, index, event)}} />
                    
                    <Input fluid focus
                    placeholder='To'
                    type='date'
                    name='to'
                    value={inputField.to}
                    onChange = { event => { props.handleChangeInput(number, index, event)}}  />
                
                    <Input fluid focus
                    placeholder='Title'
                    name='title'
                    value={inputField.title}
                    onChange = { event => { props.handleChangeInput(number, index, event)}}  />

                    <Input fluid focus
                    placeholder='Company'
                    name='company'
                    value={inputField.company}
                    onChange = { event => { props.handleChangeInput(number, index, event)}}  />

                    <Input fluid focus
                    placeholder='Description'
                    name='description'
                    value={inputField.description}
                    onChange = { event => { props.handleChangeInput(number, index, event)}}  />
                
                    <Button basic type='button' onClick={props.handleAddFields}>Add</Button>
                    <Button basic type='button' onClick={ () => { props.handleRemoveFields(number, index)} }>Delete</Button>
                </Segment>
            ))}
        </div>
        
    )
}

export default Work