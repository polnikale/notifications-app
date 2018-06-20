import React, { Fragment } from 'react';

import Header from '../Header/Header';

class Page extends React.Component {
  render() {
    const { children, render } = this.props;

    return(
      <Fragment>
        {render(Header)}

        {children}
      </Fragment>
    )
  }
}

export default Page;