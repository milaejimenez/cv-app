import React from 'react'
import { Input, Segment } from 'semantic-ui-react';


function Personal(props) {
    const index = 0
    return(
        <div>
            <h3>Personal Information</h3>
            <Segment padded basic>
                <Input fluid focus
                placeholder='First Name'
                name='firstName'
                value={props.inputFields.firstName}
                onChange={ event => {props.handleChangeInput(index, event)} } />
                
                <Input fluid focus
                placeholder='Last Name'
                name='lastName'
                value={props.inputFields.lastName}
                onChange={ event => {props.handleChangeInput(index, event)} }  />

                <Input fluid focus
                placeholder='Profession'
                name='profession'
                value={props.inputFields.profession}
                onChange={ event => {props.handleChangeInput(index, event)} } />
                
                <Input fluid focus
                placeholder='Email'
                name='email'
                value={props.inputFields.email}
                onChange={ event => {props.handleChangeInput(index, event)} }  />

                <Input fluid focus
                placeholder='Phone Number'
                name='phone'
                value={props.inputFields.phone}
                onChange={ event => {props.handleChangeInput(index, event)} }  />

                <Input fluid focus
                placeholder='Address'
                name='address'
                value={props.inputFields.address}
                onChange={ event => {props.handleChangeInput(index, event)} }  />
            </Segment>
        </div>
    )
}

export default Personal