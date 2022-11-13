import React, { useState } from 'react'
import Personal from './Components/Personal';
import Work from './Components/Work';
import Education from './Components/Education';
import './App.css';

function App() {
    const[inputFields, setInputFields] = useState([
      { firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
      },
      [{
        from: '',
        to: '',
        title: '',
        company: '',
        description: '',
      },
      {
        from: '',
        to: '',
        title: '',
        company: '',
        description: '',
      }],
      [{
        from: '',
        to: '',
        degree: '',
        institution: '',
        description: '',
      },
      {
        from: '',
        to: '',
        degree: '',
        institution: '',
        description: ''
      }]
    ])

const handleChangeInput = (index, event) => {
  const values = [...inputFields];
  values[index][event.target.name] = event.target.value;
  setInputFields(values)
}

const handleChangeInputArrays = (number, index, event ) => {
  const values = [...inputFields]
  values[number][index][event.target.name] = event.target.value;
  setInputFields(values)
}

const handleAddWorkFields = () => {
  const values = [...inputFields]
  values[1].push(
    {
      from: '',
      to: '',
      title: '',
      company: '',
      description: '',
    }
  )
  setInputFields(values)
}

const handleAddEducationFields = () => {
  const values = [...inputFields]
  values[2].push(
    {
      from: '',
      to: '',
      degree: '',
      institution: '',
      description: ''
    }
  )
  setInputFields(values)
}

const handleRemoveFields = (number, index) => {
  const values = [...inputFields]
  values[number].splice(index, 1)
  setInputFields(values)
}



return(
  <div className='app'>
    <h1>CV Creator</h1>
    <Personal inputFields={inputFields[0]} handleChangeInput={handleChangeInput} />
    <Work inputFields={inputFields[1]} handleChangeInput={handleChangeInputArrays} handleAddFields={handleAddWorkFields} handleRemoveFields={handleRemoveFields} />
    <Education inputFields={inputFields[2]} handleChangeInput={handleChangeInputArrays}  handleAddFields={handleAddEducationFields} handleRemoveFields={handleRemoveFields} />
    <input type="button" value="Save" />
    
    <p>{ inputFields[0].firstName } {inputFields[0].lastName }</p>
    <p>{ inputFields[0].email }</p>
    <p>{ inputFields[0].phone }</p>
    <p>{ inputFields[0].address }</p>

    { inputFields[1].map( (inputField, index) => (
      <div key={index}>
        <p>{inputField.from}</p>
        <p>{inputField.to}</p>
        <p>{inputField.title}</p>
        <p>{inputField.company}</p>
        <p>{inputField.description}</p>
      </div>
    )) }

{ inputFields[2].map( (inputField, index) => (
      <div key={index}>
        <p>{inputField.from}</p>
        <p>{inputField.to}</p>
        <p>{inputField.degree}</p>
        <p>{inputField.institution}</p>
        <p>{inputField.description}</p>
      </div>
    )) }
  </div>
)

}


export default App;
