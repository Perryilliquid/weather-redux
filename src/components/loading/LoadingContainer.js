import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from './LoadingSpinner';

export default class LoadingContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    children: PropTypes.node.isRequired
  }

  static defaultProps = {
    loading: false
  }

  render() {
    return (
        <React.Fragment>
            {this.props.loading ? <LoadingSpinner /> : this.props.children}
        </React.Fragment>
    );
  }
}
