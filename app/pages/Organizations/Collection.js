import React from 'react';
import { Link } from 'react-router';

import Spinner from 'components/Spinner';
import Page from 'components/Page';
import classNames from 'classnames';
import buttons from 'styles/buttons.sass';

class Collection extends React.PureComponent {
  render() {
    const action =
      <Link to={`/accounts/${this.props.params.accountId}/organizations/new`} className={classNames('pure-button', buttons.base, buttons.action)}>
        New Organization
      </Link>;

    return (
      <Page.Actionable title='Organizations' action={action}>
      </Page.Actionable>
    );
  }
}

export default Collection;
