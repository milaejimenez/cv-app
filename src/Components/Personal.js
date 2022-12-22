import React from 'react'
import { Input } from 'semantic-ui-react';


function Personal(props) {
    const index = 0
    return(
        <div>
            <Input focus
            placeholder='First Name'
	        name='firstName'
	        label='First Name'
            value={props.inputFields.firstName}
            onChange={ event => {props.handleChangeInput(index, event)} } />
            
            <Input focus
            placeholder='Last Name'
	        name='lastName'
	        label='Last Name'
            value={props.inputFields.lastName}
            onChange={ event => {props.handleChangeInput(index, event)} }  />

            <Input focus
            placeholder='Profession'
	        name='profession'
	        label='Profession'
            value={props.inputFields.profession}
            onChange={ event => {props.handleChangeInput(index, event)} } />
            
            <Input focus
            placeholder='Email'
	        name='email'
	        label='Email'
            value={props.inputFields.email}
            onChange={ event => {props.handleChangeInput(index, event)} }  />

            <Input focus
            placeholder='Phone Number'
	        name='phone'
	        label='Phone Number'
            value={props.inputFields.phone}
            onChange={ event => {props.handleChangeInput(index, event)} }  />

            <Input focus
            placeholder='Address'
	        name='address'
	        label='Address'
            value={props.inputFields.address}
            onChange={ event => {props.handleChangeInput(index, event)} }  />
        </div>
    )
}

export default Personal