import React from 'react';
import c from 'classnames';
import { inject, observer } from 'mobx-react';
import Page from 'components/Page';

import stores from 'stores';
import styles from './Show.sass';


@inject('endpoint') @observer
class Show extends React.PureComponent {
  constructor(props) {
    super(props);

    const { endpoint, params } = props;
    const { accountId } = params;

    this.organizations = new stores.Organization(endpoint, `v1/${accountId}`);
    this.contacts = new stores.Contact(endpoint, `v1/${accountId}`);
  }

  componentDidMount() {
    const { organizationId } = this.props.params;
    this.organizations.findBy({ id: organizationId });
    this.contacts.findAll({ organizations: organizationId });
  }

  addContact = (e) => {
    e.preventDefault();

    const { organizationId } = this.props.params;

    this.contacts.create(
      { organizations: organizationId },
      {
        contact: {
          first_name: this.refs.first_name.value,
          last_name: this.refs.last_name.value,
          email: this.refs.email.value,
        },
      },
      {
        201: (response) => {
          this.contacts.appendToCollection(response.data.contact);
        },
      }
    );

    this.refs.first_name.value = null;
    this.refs.last_name.value = null;
    this.refs.email.value = null;
  };

  render() {
    const { selected, isLoading } = this.organizations;
    const { organization } = selected;

    if (isLoading || !organization) return null;

    return (
      <Page.Actionable title={organization.name}>
        <div className='pure-g'>
          <div className={c('pure-u-1-2', styles.contacts)}>
            <div className={c('pure-u-1', styles.addContact)}>
              <div>
                <form className="pure-form" onSubmit={this.addContact}>
                  <input ref="email" type="email" placeholder="example@example.com" />
                  <input ref="first_name" type="text" placeholder="First Name" />
                  <input ref="last_name" type="text" placeholder="Last Name" />

                  <button type="submit" className="pure-button pure-button-primary">Add</button>
                </form>
              </div>
            </div>
          </div>
          <div className={c('pure-u-1-2', styles.invoices)}>
            second column
          </div>
        </div>
      </Page.Actionable>
    );
  }
}

export default Show;
