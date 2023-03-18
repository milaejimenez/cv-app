import React, { useState, useRef } from 'react'
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

import Personal from './Components/Personal';
import Work from './Components/Work';
import Education from './Components/Education';
import { Divider, Grid, Segment, Container, Header, Icon, Button } from 'semantic-ui-react'



function App() {
    const[inputFields, setInputFields] = useState([
      { firstName: "John",
        lastName: "Doe",
        profession: "Software Developer",
        email: "johndoe@gmail.com",
        phone: "666-666",
        address: "Berlin, Germany",
      },
      [{
        from: '2021',
        to: 'Current',
        title: 'Software Developer',
        company: 'Computer Company',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        id: Math.floor(Math.random() * 10000),
      },
      {
        from: '2019',
        to: '2021',
        title: 'IT Support',
        company: 'Another Computer Company',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        id: Math.floor(Math.random() * 10000),
      }],
      [{
        from: '2015',
        to: '2017',
        degree: 'Master',
        institution: 'University',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
        id: Math.floor(Math.random() * 10000),
      },
      {
        from: '2012',
        to: '2015',
        degree: 'Bachelor',
        institution: 'University',
        description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?.',
        id: Math.floor(Math.random() * 10000),
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

// Generate PDF on Save
const printRef = useRef();
const handleGeneratePdf = async () => {
  const element = printRef.current;
  const canvas = await html2canvas(element);
  const data = canvas.toDataURL('image/png');

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight(); 
  const margin = 25;
  pdf.addImage(data, 'PNG', margin, margin, pdfWidth - ( margin * 2 ), pdfHeight - (margin * 2));
  pdf.save('cv.pdf');
}



return(
  <div className='app'>
    <h1>CV Creator</h1>

  <Container>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
        <Personal inputFields={inputFields[0]} handleChangeInput={handleChangeInput} />
        <Work inputFields={inputFields[1]} handleChangeInput={handleChangeInputArrays} handleAddFields={handleAddWorkFields} handleRemoveFields={handleRemoveFields} />
        <Education inputFields={inputFields[2]} handleChangeInput={handleChangeInputArrays}  handleAddFields={handleAddEducationFields} handleRemoveFields={handleRemoveFields} />
        <Button variant="contained"onClick={handleGeneratePdf}> Save </Button>
      </Grid.Column>
      <Grid.Column>
        <div ref={printRef}>
        <Segment className='space-between'>
          <div>     
            <Header size='huge' as='h2'>{ inputFields[0].firstName } {inputFields[0].lastName }</Header>
            <p className='title'>{ inputFields[0].profession }</p>
          </div>
          <div >
            <p>  <Icon name='mail' size='small' /> { inputFields[0].email }</p>
            <p>  <Icon name='phone' size='small' /> { inputFields[0].phone }</p>
            <p> <Icon name='home' size='small' /> { inputFields[0].address }</p>
          </div>
        </Segment>
        <Divider />
        <h3>Work Experience</h3>
        { inputFields[1].map( (inputField, index) => (
          <div key={index}>
            <Segment basic padded>
              <div className='space-between'>
                <div>{inputField.company} </div> <div> {inputField.from} - {inputField.to} </div>
              </div>
              <p className='title'>{inputField.title}</p>
              <p>{inputField.description}</p>
            </Segment>
          </div>
          
        )) }

         <h3>Education</h3>
        { inputFields[2].map( (inputField, index) => (
          <div key={index}>
            <Segment basic padded>
              <div className='space-between'>
                <div>{inputField.institution} </div>
                <div> {inputField.from} - {inputField.to}</div>
              </div>
              <p className='title'>{inputField.degree}</p>
              <p>{inputField.description}</p>
            </Segment>
          </div>
        )) }
        </div>
      </Grid.Column>
    </Grid>

    <Divider vertical></Divider>
  </Container>
  </div>
)

}


export default App;
