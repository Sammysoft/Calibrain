import React, { Component } from 'react';
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';
import { Icon, Dropdown } from 'semantic-ui-react';
import axios from 'axios';




class StudentsList extends Component {
    constructor(props){
        super()
        this.state = {
            students1: [],
            students2: [],
            students3: [],
            students4: [],
            students5: [],
            students6: []

        }

    }

    componentDidMount=()=> {
        axios.get('/api/getuser1')
            .then(response=>{
                console.log(response)
                    this.setState({students1: response.data})
            })
            axios.get('/api/getuser2')
            .then(response=>{
                console.log(response)
                    this.setState({students2: response.data})
            })
            axios.get('/api/getuser3')
            .then(response=>{
                console.log(response)
                    this.setState({students3: response.data})
            })
            axios.get('/api/getuser4')
            .then(response=>{
                console.log(response)
                    this.setState({students4: response.data})
            })
            axios.get('/api/getuser5')
            .then(response=>{
                console.log(response)
                    this.setState({students5: response.data})
            })
            axios.get('/api/getuser6')
            .then(response=>{
                console.log(response)
                    this.setState({students6: response.data})
            })
    }

 renderStudents=()=>{
     const students1 = this.state.students1;
     const students2 = this.state.students2;
     const students3 = this.state.students3;
     const students4 = this.state.students4;
     const students5= this.state.students5;
     const students6 = this.state.students6;
     console.log(students1)


     return (
         <>
                <div className="center-list">
                <Dropdown fluid
                placeholder='Junior Secondary School 1'
                selection
                options= { students1.map(student=>(
                    <span key={student._id} style={{display: 'flex', flexDirection: 'row', padding: '5%'}}><img src={student.imageuri} height={'50px'} width={'50px'} style={{borderRadius: '50%', border: '1px solid #800080'}}></img><div className="names" style={{fontFamily: "Irish Gover", textTransform: 'capitalize'}}>{student.firstname} {student.lastname}</div> </span>
                ))}
                />

         </div>
         <div className="center-list">
         <Dropdown
         fluid
         selection
          placeholder='Junior Secondary School 2'
         options= { students2.map(student=>(
            <span key={student._id} style={{display: 'flex', flexDirection: 'row', padding: '5%'}}><img src={student.imageuri} height={'50px'} width={'50px'} style={{borderRadius: '50%', border: '1px solid #800080'}}></img><div className="names" style={{fontFamily: "Irish Gover", textTransform: 'capitalize'}}>{student.firstname} {student.lastname}</div> </span>
        ))}
         />

  </div>
  <div className="center-list">
  <Dropdown
  fluid
  selection
  placeholder='Junior Secondary School 3'
  options={ students3.map(student=>(
    <span key={student._id} style={{display: 'flex', flexDirection: 'row', padding: '5%'}}><img src={student.imageuri} height={'50px'} width={'50px'} style={{borderRadius: '50%', border: '1px solid #800080'}}></img><div className="names" style={{fontFamily: "Irish Gover", textTransform: 'capitalize'}}>{student.firstname} {student.lastname}</div> </span>
))}

  />
</div>
<div className="center-list">
  <Dropdown
  fluid
  selection
  placeholder='Senior Secondary School 1'
  options=  { students5.map(student=>(
    <span key={student._id} style={{display: 'flex', flexDirection: 'row', padding: '5%'}}><img src={student.imageuri} height={'50px'} width={'50px'} style={{borderRadius: '50%', border: '1px solid #800080'}}></img><div className="names" style={{fontFamily: "Irish Gover", textTransform: 'capitalize'}}>{student.firstname} {student.lastname}</div> </span>
))}
  />
</div>
<div className="center-list">
  <Dropdown
  fluid
  selection
  placeholder='Senior Secondary School 2'
  options=  { students5.map(student=>(
    <span key={student._id} style={{display: 'flex', flexDirection: 'row', padding: '5%'}}><img src={student.imageuri} height={'50px'} width={'50px'} style={{borderRadius: '50%', border: '1px solid #800080'}}></img><div className="names" style={{fontFamily: "Irish Gover", textTransform: 'capitalize'}}>{student.firstname} {student.lastname}</div> </span>
))}
  />
</div>
<div className="center-list">
  <Dropdown
  placeholder='Senior Secondary School 3'
  fluid

  selection
   options=
    { students6.map(student=>(
        <span key={student._id} style={{display: 'flex', flexDirection: 'row', padding: '5%'}}><img src={student.imageuri} height={'50px'} width={'50px'} style={{borderRadius: '50%', border: '1px solid #800080'}}></img><div className="names" style={{fontFamily: "Irish Gover", textTransform: 'capitalize'}}>{student.firstname} {student.lastname}</div> </span>
    ))}


  />




</div>
         </>
     )
 }
    render() {


        return (
            <>
            <NavBar/>


                        <div className="ui-container">
                            { this.renderStudents()}
                        </div>
            </>
        );
    }
}

export default StudentsList;