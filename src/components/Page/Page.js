import React, { Fragment } from 'react';
import { goBack } from 'react-router';

import Header from '../Header/Header';

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.handleBack = this.handleBack.bind(this);
  }


  handleBack() {
    const { back } = this.props;

    back();
  }

  render() {
    const { children, renderControls, title, route } = this.props;

    return(
      <Fragment>
        <Header 
          title={title}
          onBack={route !== '/' && this.handleBack}
        >
          {renderControls()}
        </Header>

        {children}
      </Fragment>
    )
  }
}

export default Page;