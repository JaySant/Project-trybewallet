import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <div>
          <label htmlFor="input-value">
            Valor:
            <input
              data-testid="value-input"
              placeholder="Coloque um valor"
            />
          </label>
          <label htmlFor="input-description">
            Despesas:
            <input
              data-testid="description-input"
              placeholder="Descrição das despesas"
            />
          </label>
          <label htmlFor="currencies-input">
            Moeda:
            <select id="currencies-input">
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
            <select data-testid="method-input">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>

            </select>
          </label>
          <label htmlFor="category-input">
            Categoria:
            <select data-testid="tag-input">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>

            </select>
          </label>
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
};

export default connect(mapStateToProps)(Form);
