import React, { Fragment } from 'react';

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
    const { children, renderControls, title, backAvailable } = this.props;

    return(
      <Fragment>
        <Header 
          title={title}
          onBack={backAvailable && this.handleBack}
        >
          {renderControls()}
        </Header>

        {children}
      </Fragment>
    )
  }
}

export default Page;