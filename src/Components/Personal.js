import React from 'react'

function Personal(props) {
    const index = 0
    return(
        <div>
            <input
	        name='firstName'
	        label='First Name'
            value={props.inputFields.firstName}
            onChange={ event => {props.handleChangeInput(index, event)} } />
            
            <input
	        name='lastName'
	        label='Last Name'
            value={props.inputFields.lastName}
            onChange={ event => {props.handleChangeInput(index, event)} }  />
            
            <input
	        name='email'
	        label='Email'
            value={props.inputFields.email}
            onChange={ event => {props.handleChangeInput(index, event)} }  />

            <input
	        name='phone'
	        label='Phone Number'
            value={props.inputFields.phone}
            onChange={ event => {props.handleChangeInput(index, event)} }  />

            <input
	        name='address'
	        label='Address'
            value={props.inputFields.address}
            onChange={ event => {props.handleChangeInput(index, event)} }  />
        </div>
    )
}

export default Personal