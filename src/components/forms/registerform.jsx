import React, { Component } from 'react';
import validator from 'validator';
import { Icon } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types'
import { Form, Button, Message, Select, Input } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';

const genderOptions = [
    { key: 'm', text: 'Male', value: 'Male' },
    { key: 'f', text: 'Female', value: 'Female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

  const classOptions = [
    { key: '1', text: 'JSS1', value: 'JSS1' },
    { key: '2', text: 'JSS2', value: 'JSS2' },
    { key: '3', text: 'JSS3', value: 'JSS3' },
    { key: '4', text: 'SSS1', value: 'SSS1' },
    { key: '5', text: 'SSS2', value: 'SSS2' },
    { key: '6', text: 'SSS3', value: 'SSS3' },
  ]

class registerform extends Component {


    state={
        data: {
            email: "",
            firstname: "",
            lastname: "",
            phonenumber: "",
            dateofbirth: "",
            category: "",
            imageuri: "",
            house: "",
            post: "",
            gender: "",

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
            dateofbirth: "",
            category: "",
            imageuri: "",
            house: "",
            post: "",
            gender: "",
            address: ""
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
                text: 'Added User To Calibrain.',
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
        if(!data.dateofbirth) errors.dateofbirth = `Can't be blank`;
        if(!data.imageuri) errors.imageuri = `Can't be blank`;
        if(!data.phonenumber) errors.phonenumber = `Enter Phone Number`;

        return errors;
    }

    render() {

        const { data, errors, loading } = this.state;
        return (
            <>

                <div className="image-wrapper">
                        <div className="image">
                           <label for="file" id="uploadBtn">
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
                <Form.Field error={!!errors.imageuri}>
                        <label htmlFor="imageuri">imageuri</label>
                        <Input id="imageInput"  type="imageuri" icon='user secret' iconPosition='left'
                          name="imageuri"
                          placeholder="Waiting..."
                          value={data.imageuri}
                          onChange={this.onChange}  />
                          {errors.imageuri && <InlineError text={errors.imageuri} />}
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

                    <Form.Field error={!!errors.dateofbirth}>
                        <label htmlFor="dateofbirth">dateofbirth</label>
                        <Input type="text" icon='calendar alternate' iconPosition='left'
                          name="dateofbirth"
                          placeholder="Dateofbirth"
                          value={data.dateofbirth}
                          onChange={this.onChange}  />
                          {errors.dateofbirth && <InlineError text={errors.dateofbirth} />}
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

                    <Form.Field error={!!errors.house}>
                        <label htmlFor="house">Game House</label>
                        <Input type="house" icon='bicycle' iconPosition='left'
                          name="house"
                          placeholder="Game"
                          value={data.house}
                          onChange={this.onChange}  />
                          {errors.house && <InlineError text={errors.house} />}
                    </Form.Field>

                 </Form.Group>

                    <Form.Group widths='equal'>

                    <Form.Field error={!!errors.post}>
                        <label htmlFor="post">post</label>
                        <Input type="text" icon='trophy' iconPosition='left'
                          name="post"
                          placeholder="official post"
                          value={data.post}
                          onChange={this.onChange}  />
                          {errors.post && <InlineError text={errors.post} />}
                    </Form.Field>

                    <Form.Field error={!!errors.category}>
                        <label htmlFor="post">Class</label>
                        <Input type="text" icon='graduation' iconPosition='left'
                          name="category"
                          placeholder="Enter Class [JSS1]"
                          value={data.category}
                          onChange={this.onChange}  />
                          {errors.category && <InlineError text={errors.category} />}
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

                    <Form.TextArea
                    label='Address'
                    name="address"
                    icon='map marker alternate'
                    iconPosition='left'
                    onChange={this.onChange}
                    placeholder='Home Address...'
                    />
                    <Button primary>Done</Button>
                </Form>
            </>
        );
    }
}

registerform.propTypes ={
    submit: PropTypes.func.isRequired
}

export default registerform;