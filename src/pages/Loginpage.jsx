import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/forms/loginform';
import { login } from '../actions/auth';
import  { Grid, Image } from 'semantic-ui-react';


class Loginpage extends React.Component{


    submit= (data) => this.props.login(data).then(()=>this.props.history.push('/dashboard'))

    render(){
        return(
            <>
                 <Grid columns={2} divided>
                        <Grid.Row>
                        <Grid.Column>
                        <Form submit={this.submit}/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={'./bulb.png'} />
                        </Grid.Column>
                        </Grid.Row>
                 </Grid>

            </>
        )
    }
}


Loginpage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null, { login })(Loginpage);