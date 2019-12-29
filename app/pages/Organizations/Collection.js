import React from 'react';
import { Link } from 'react-router';
import { extendObservable } from 'mobx';
import { inject, observer } from 'mobx-react';

import stores from 'stores';
import Spinner from 'components/Spinner';
import Page from 'components/Page';
import classNames from 'classnames';
import buttons from 'styles/buttons.sass';

import Contact from './Contact';

@inject('endpoint') @observer
class Collection extends React.PureComponent {
  constructor(props) {
    super(props);

    const { endpoint, params } = props;
    const { accountId } = params;

    extendObservable(this, {
      organizations: new stores.Organization(endpoint, `v1/${accountId}`),
    });
  }

  componentDidMount() {
    this.organizations.findAll();
  }

  render() {
    const { collection, isLoading } = this.organizations;

    console.log(collection.slice());

    const action =
      <Link to={`/accounts/${this.props.params.accountId}/organizations/new`} className={classNames('pure-button', buttons.base, buttons.action)}>
        New Organization
      </Link>;

    return (
      <Page.Actionable title='Organizations' action={action}>
        {collection.map(org =>
          <Contact key={org.id} {...org} params={this.props.params} />
        )}
      </Page.Actionable>
    );
  }
}

export default Collection;
