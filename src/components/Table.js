import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((items) => (
              <tr key={ items.id }>
                <td>{items.description}</td>
                <td>{items.tag}</td>
                <td>{items.method}</td>
                <td>{Number(items.value).toFixed(2)}</td>
                <td>{items.exchangeRates[items.currency].name}</td>
                <td>{Number(items.exchangeRates[items.currency].ask).toFixed(2)}</td>
                <td>
                  {Number(items.value) * Number(items.exchangeRates[items.currency].ask)
                    .toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="submit"
                    data-testid="delete-btn"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Table);
