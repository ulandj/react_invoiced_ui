import React from 'react';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';

import buttons from 'styles/buttons.sass';

import styles from './Collection.sass'
import New from './New';

@inject('account', 'settings') @observer
class Collection extends React.PureComponent {
  openModal = (e) => {
    e.preventDefault();

    const { settings } = this.props;

    settings.layout.modal.setContent(<New />);
    settings.layout.modal.open();
  };

  render() {
    const { account } = this.props;
    const { collection, isLoading } = account;

    if (isLoading) return null;

    return (
      <div>
        <div className={classNames('pure-menu pure-menu-horizontal pure-g', styles.actionBar)}>
          <div className='pure-u-1-3'>blah</div>
          <div className='pure-u-1-3'>
            <h1 className='title'>Accounts</h1>
          </div>
          <div className='pure-u-1-3'>
            <a href='#' className={classNames('pure-button', buttons.base)} onClick={this.openModal}>
              New Account
            </a>
          </div>
        </div>
        {collection.map((acc) =>
          <div key={acc.id}>{acc.name}</div>
        )}
      </div>
    );
  }
}

export default Collection;
