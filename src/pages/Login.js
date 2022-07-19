import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userEmail } from '../actions/index';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, this.handleDisabled);
  };

  handleDisabled = () => {
    const { email, password } = this.state;
    const isvalidEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/i.test(email);
    const lenghPassword = 6;
    if (password.length >= lenghPassword && isvalidEmail) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  };

  render() {
    const { isDisabled, email } = this.state;
    const { dispatch, history } = this.props;
    // const {dispatchInput } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="page-login">
            <input
              data-testid="email-input"
              type="email"
              id="email"
              name="email"
              onChange={ this.handleChange }
              placeholder="Digite seu email"
            />
            <input
              data-testid="password-input"
              id="password"
              type="password"
              name="password"
              onChange={ this.handleChange }
              placeholder="Digite a senha"
            />
            <button
              type="button"
              data-testid="login-submit-btn"
              disabled={ isDisabled }
              onClick={ () => {
                dispatch(userEmail(email));
                history.push('./carteira');
              } }
            >
              Entrar
            </button>
          </label>
        </form>
      </div>
    );
  }
}
// const mapDispatchToProps = (dispatch) => ({
//   dispatchInput: (value) => dispatch(userEmail(value)),
// });

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default connect()(Login);
// currying (função que retorna outra função)
