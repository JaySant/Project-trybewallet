import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, currencyInicial } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{email}</span>
          <p data-testid="total-field">{0}</p>
          <p data-testid="header-currency-field">{currencyInicial}</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencyInicial: state.wallet.currency,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  currencyInicial: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Header);
