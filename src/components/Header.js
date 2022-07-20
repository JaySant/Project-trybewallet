import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  state = {}

  render() {
    const { email, currencyInicial, expenses } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">{email}</span>
          <p data-testid="total-field">
            {expenses.reduce((acc, curr) => {
              acc += (Number(curr.value)
              * curr.exchangeRates[curr.currency].ask);
              return acc;
            }, 0).toFixed(2)}

          </p>
          <p data-testid="header-currency-field">{currencyInicial}</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencyInicial: state.wallet.currency,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencyInicial: PropTypes.string,
};
Header.defaultProps = { currencyInicial: 'BRL' };
export default connect(mapStateToProps, null)(Header);
