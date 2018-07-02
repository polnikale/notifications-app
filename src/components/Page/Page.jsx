import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';

class Page extends React.Component {
  static propTypes = {
    back: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    renderControls: PropTypes.func.isRequired,
    backAvailable: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  }

  constructor(props) {
    super(props);

    this.handleBack = this.handleBack.bind(this);
  }


  handleBack() {
    const { back } = this.props;

    back();
  }

  render() {
    const {
      children,
      renderControls,
      title,
      backAvailable,
    } = this.props;

    return (
      <Fragment>
        <Header
          title={title}
          onBack={backAvailable && this.handleBack}
        >
          {renderControls()}
        </Header>

        {children}
      </Fragment>
    );
  }
}

export default Page;
