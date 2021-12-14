import React, { Component } from 'react';
import validator from 'validator';
import { Icon } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types'
import { Form, Button, Message, Select, Input } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';



class registerform2 extends Component {


    state={
        data: {
            email: "",
            firstname: "",
            lastname: "",
            phonenumber: "",
            imageurl: "",
            username: "",
            password:"",
            teaches: [],
            gender: "",
            usertype:""

        },
        errors: {},
        loading: false,
    }

    onChange= e=>this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value }
    })
    newdata = {
        email: "",
            firstname: "",
            lastname: "",
            phonenumber: "",
            imageurl: "",
            username: "",
            password:"",
            teaches: [],
            gender: "",
            usertype:""
    }

    onSubmit = (e) => {
        console.log(this.state.data)
        e.preventDefault();
        const errors = this.validate(this.state.data)
        this.setState({ errors });
        if(Object.keys(errors).length === 0){
            this.setState({loading: true})
            this.props.submit(this.state.data).then(()=> this.setState({data: this.newdata, loading:false}), Swal.fire({
                title: 'Good job!',
                text: 'Added Staff To Calibrain.',
                icon: 'success'
              }))
             .catch(err=>this.setState({errors: err.response.data.errors, loading: false})
             )
        }
    }

    validate= data =>{
        const errors = {}
        if(!validator.isEmail(data.email)) errors.email = 'Invalid email'
        if(!data.firstname) errors.firstname = `Can't be blank`;
        if(!data.lastname) errors.lastname = `Can't be blank`;
        if(!data.password) errors.password = `Can't be blank`;
        if(!data.imageurl) errors.imageurl = `Can't be blank`;
        if(!data.phonenumber) errors.phonenumber = `Enter Phone Number`;

        return errors;
    }

    render() {

        const { data, errors, loading } = this.state;
        return (
            <>

                <div className="image-wrapper">
                        <div className="image">
                           <label htmlFor="file" id="uploadBtn">
                                <div className="plus"><Icon color="purple" name="plus" size="big" ></Icon></div>
                                <div className="ship"><Icon onclick="uploadImage()" color="purple"  name="paper plane" size="big" ></Icon></div>
                           </label>
                           <input  type="file" id="file"  style={{display: "none"}}/>
                        </div>
                    </div>
                    <button id="push">Push</button>

            <Form onSubmit={this.onSubmit} loading={loading}>
                        {  (errors.global) && <Message negative>
                            <Message.Header>Error!</Message.Header>
                            <p>{errors.global}</p>
                        </Message>
                        }
                <Form.Field error={!!errors.imageurl}>
                        <label htmlFor="imageurl">Imageurl</label>
                        <Input id="imageInput"  type="imageuri" icon='user secret' iconPosition='left'
                          name="imageurl"
                          placeholder="Waiting..."
                          value={data.imageurl}
                          onChange={this.onChange}  />
                          {errors.imageurl && <InlineError text={errors.imageurl} />}
                    </Form.Field>
                 <Form.Group widths='equal'>

                 <Form.Field error={!!errors.firstname}>
                        <label htmlFor="firstname">Firstname</label>
                        <Input type="text" icon='user' iconPosition='left'
                          name="firstname"
                          placeholder="Secured firstname"
                          value={data.firstname}
                          onChange={this.onChange}  />
                          {errors.firstname && <InlineError text={errors.firstname} />}
                    </Form.Field>
                    <Form.Field error={!!errors.lastname}>
                        <label htmlFor="lastname">Lastname</label>
                        <Input type="text" icon='user' iconPosition='left'
                          name="lastname"
                          placeholder="Lastname"
                          value={data.lastname}
                          onChange={this.onChange}  />
                          {errors.lastname && <InlineError text={errors.lastname} />}
                    </Form.Field>

                    <Form.Field error={!!errors.username}>
                        <label htmlFor="username">Username</label>
                        <Input type="text" icon='user' iconPosition='left'
                          name="username"
                          placeholder="username"
                          value={data.username}
                          onChange={this.onChange}  />
                          {errors.username && <InlineError text={errors.username} />}
                    </Form.Field>

                    <Form.Field error={!!errors.email}>
                        <label htmlFor="email">Email</label>
                        <Input type="email" icon='envelope' iconPosition='left'
                          name="email"
                          placeholder="example@gmail.com"
                          value={data.email}
                          onChange={this.onChange}  />
                          {errors.email && <InlineError text={errors.email} />}
                    </Form.Field>

                    <Form.Field error={!!errors.password}>
                        <label htmlFor="password">Password</label>
                        <Input type="password" icon='unlock' iconPosition='left'
                          name="password"
                          placeholder="Password"
                          value={data.password}
                          onChange={this.onChange}  />
                          {errors.password && <InlineError text={errors.password} />}
                    </Form.Field>

                 </Form.Group>

                    <Form.Group widths='equal'>

                    <Form.Field error={!!errors.usertype}>
                        <label htmlFor="usertype">Usertype</label>
                        <Input type="text" icon='trophy' iconPosition='left'
                          name="usertype"
                          placeholder="Usertype"
                          value={data.usertype}
                          onChange={this.onChange}  />
                          {errors.usertype && <InlineError text={errors.usertype} />}
                    </Form.Field>

                    <Form.Field error={!!errors.gender}>
                        <label htmlFor="gender">Gender</label>
                        <Input type="text" icon='smile' iconPosition='left'
                          name="gender"
                          placeholder="Male / Female"
                          value={data.gender}
                          onChange={this.onChange}  />
                          {errors.gender && <InlineError text={errors.gender} />}
                    </Form.Field>
                     <Form.Field error={!!errors.phonenumber}>
                        <label htmlFor="phonenumber">Phonenumber</label>
                        <Input type="text" icon='phone' iconPosition='left'
                          name="phonenumber"
                          placeholder="+234"
                          value={data.phonenumber}
                          onChange={this.onChange}  />
                          {errors.phonenumber && <InlineError text={errors.phonenumber} />}
                    </Form.Field>

                    </Form.Group>
                    <Button primary>Done</Button>
                </Form>
            </>
        );
    }
}

registerform2.propTypes ={
    submit: PropTypes.func.isRequired
}

export default registerform2;