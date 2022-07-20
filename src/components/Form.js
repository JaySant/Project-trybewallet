import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchThunkExpenses } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      id: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Trabalho',
      exchangeRates: [],
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { dispatch } = this.props;
    this.setState((prevState) => ({
      ...prevState,
      id: prevState.id + 1,
    }));
    dispatch(fetchThunkExpenses(this.state));
    this.setState({ value: '' });
  }

  render() {
    const { currencies } = this.props;
    const { method, tag, value, currency, description } = this.state;

    return (

      <form>
        <div>
          <label htmlFor="input-value">
            Valor:
            <input
              value={ value }
              name="value"
              data-testid="value-input"
              placeholder="Coloque um valor"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="input-description">
            Despesas:
            <input
              value={ description }
              name="description"
              data-testid="description-input"
              placeholder="Descrição das despesas"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currencies-input">
            Moeda:
            <select
              value={ currency }
              name="currency"
              id="currencies-input"
              onChange={ this.handleChange }
            >
              {currencies.map((item, index) => (
                <option key={ index } value={ item }>
                  {
                    item
                  }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="pay-input">
            Método de Pagamento:
            <select
              name="method"
              value={ method }
              id="pay-input"
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>

            </select>
          </label>
          <label htmlFor="category-input">
            Categoria:
            <select
              name="tag"
              value={ tag }
              id="category-input"
              data-testid="tag-input"
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>

            </select>
          </label>
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>

        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Form);
