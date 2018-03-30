import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Form} from 'semantic-ui-react';
import {loginUserAction, userDetailsAction} from '../actions/auth.actions';
import styles from './LoginPage.module.scss';
import FormField from '../components/common/FormField';
import {Dropdown} from 'semantic-ui-react';
import {push as pushAction} from 'react-router-redux';
import config from '../config/config';
import cookie from 'cookie-machine';
const {identifiers} = config;


export class LoginPage extends React.Component {

  state = { password: '', email: '', loginType:'crew'};

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  onLoginTypeChange = (e, { value }) => this.setState({ loginType: value });

  submitLogin = e => {
    e.preventDefault();
    this.props.loginUserAction(this.state);
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.loginSucess) {
      this.props.pushAction('/');
    }
  }

  render() {
    const options = [
      {
        text: 'Crew',
        value: 'crew'
      }, {
        text: 'Guest',
        value: 'guest'
      }
    ]
    return (
      <div className={styles.loginForm}>
        <Form onSubmit={this.submitLogin}>
          <FormField contentWidth={11} label="E-mail">
            <Form.Input name="email" onChange={this.handleChange}/>
          </FormField>
          <FormField contentWidth={11} label="Password">
            <Form.Input name="password" type="password" onChange={this.handleChange} />
          </FormField>
          <FormField contentWidth={11} label="Login As">
            <div className={styles.loginType}>
              <Dropdown simple value={this.state.loginType} options={options} onChange={this.onLoginTypeChange} fluid/>
            </div>
          </FormField>
          <FormField contentWidth={11} label="">
            <Button className="ui inverted button">Submit</Button>
          </FormField>
        </Form>
      </div>
    )
  }
}

LoginPage.propTypes = {
  loginUserAction: React.PropTypes.func.isRequired,
  userDetailsAction: React.PropTypes.func,
  pushAction: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  loginSucess : state.authLogin.loginSucess
});

const mapDispatchToProps = (dispatch) => bindActionCreators({loginUserAction, userDetailsAction, pushAction}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
