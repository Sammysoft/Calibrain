import React, { Component } from 'react';
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import axios from 'axios';


class StudentsList extends Component {
    constructor(props){
        super()
        this.state = {students: []}

    }

    componentDidMount=()=> {
        axios.get('/api/getuser/')
            .then(response=>{
                console.log(response)
                    this.setState({students: response.data})
            })
    }

 renderStudents=()=>{
     const students = this.state.students;
     console.log(students)

     return students.map(student=>(
         <span key={student._id} style={{display: 'flex', flexDirection: 'row', padding: '5%'}}><img src={student.imageuri} height={'50px'} width={'50px'} style={{borderRadius: '50%', border: '1px solid #800080'}}></img><div className="names" style={{fontFamily: "Irish Gover", textTransform: 'capitalize'}}>{student.firstname} {student.lastname}</div> </span>
     ))
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