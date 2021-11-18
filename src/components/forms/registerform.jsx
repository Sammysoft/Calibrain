import React, { Component } from 'react';
import validator from 'validator';
import { Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { Form, Button, Message, Select, Input } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';

const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
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
            phonenumber: "+234",
            dateofbirth: "",
            category: "",
            imageurl: "",
            house: "",
            post: "",
            class: ""

        },
        errors: {},
        loading: false
    }

    onChange= e=>this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value }
    })

    onSubmit = () => {
        const errors = this.validate(this.state.data)
       if(Object.keys(errors).length > 0){

        this.setState({ errors });
       }

        if(Object.keys(errors).length === 0){
            this.props.submit(this.state.data)
             .catch(err => this.setState({errors: err.response.data.errors}))
             console.log(errors)
        }
    }

    validate= data =>{
        const errors = {}
        if(!validator.isEmail(data.email)) errors.email = 'Invalid email'
        if(!data.firstname) errors.firstname = `Can't be blank`;
        if(!data.lastname) errors.lastname = `Can't be blank`;
        if(!data.category) errors.category = `Can't be blank`;
        if(!data.house) errors.house = `Can't be blank`;
        if(!data.post) errors.post = `Can't be blank`;
        if(!data.dateofbirth) errors.dateofbirth = `Can't be blank`;
        if(!data.class) errors.class = `Can't be blank`;
        if(!data.address) errors.address = `FIll in Address`;

        return errors;
    }

    render() {

        const { data, errors } = this.state;
        return (
            <>

                    <div className="image-wrapper">
                        <div className="image">
                           <label for="file" id="uploadBtn">
                                <Icon color="purple" name="plus" size="big" ></Icon>
                           </label>
                           <input  type="file" id="file"  style={{display: "none"}}/>
                        </div>
                    </div>

                        <Form onSubmit={this.onSubmit}>
                                        {  (errors.global) && <Message negative>
                                            <Message.Header>Error!</Message.Header>
                                            <p>{errors.global}</p>
                                        </Message>


                        }


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

                    <Form.Field
                        control={Select}
                        options={classOptions}
                        label={{ children: 'Class', htmlFor: 'form-select-control-gender' }}
                        placeholder='Class'
                        search
                        searchInput={{ id: 'form-select-control-gender' }}
                    />

                    <Form.Field
                        control={Select}
                        options={genderOptions}
                        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
                        placeholder='Gender'
                        search
                        searchInput={{ id: 'form-select-control-gender' }}
                    />
                     <Form.Field error={!!errors.address}>
                        <label htmlFor="address">Phonenumber</label>
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
                    icon='map marker alternate'
                    iconPosition='left'
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