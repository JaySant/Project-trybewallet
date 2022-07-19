import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Table from '../components/Table';
import Form from '../components/Form';
import { fetchAPIThunk } from '../actions/index';

class Wallet extends React.Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAPIThunk());
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Wallet);
