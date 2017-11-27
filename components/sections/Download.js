import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {initialize} from 'redux-form';
import {Section} from '@machete-platform/core-bundle/components/layout';
import {Contact as ContactForm} from '@machete-platform/core-bundle/components/forms';
import {create} from '@machete-platform/core-bundle/controllers/Contact';
import * as forms from '@soundcloud-downloader/machete-bundle/components/forms';
import {download} from '@soundcloud-downloader/machete-bundle/controllers/Collection';

const CLIENT_ID = 'JlZIsxg2hY5WnBgtn3jfS0UYCl0K8DOg';

@connect(() => ({}), {initialize, create, download})

export default class extends Section {
  static propTypes = {
    initialize: PropTypes.func.isRequired,
    create: PropTypes.func,
    download: PropTypes.func
  };

  state = {
    userId: '',
    clientId: '',
    token: ''
  };

  submit = (values) => {
    const { initialize, create } = this.props;
    const { name, email } = values;
    // initialize('contact', {});
    if (values.email) {
      create(values).then(() => this.setState({ name, email }));
    }
  };

  download = values => {
    const { initialize, download } = this.props;
    const { clientId, token, userId } = values;
    const data = { userId, token, clientId: clientId || CLIENT_ID };
    // initialize('soundcloud-downloader', {});
    download(values).then(() => this.setState(data));
  };

  render() {
    const { clientId, userId, token, email } = this.state;
    return (
      <Section>
        <h1>SoundCloud Downloader</h1>
        {!email && <ContactForm onSubmit={this.submit}/>}
        {email && !userId && !token && <forms.Download onSubmit={this.download}/>}
        {userId && token && <strong>{userId} - {token} - {clientId}</strong>}
      </Section>
    );
  }
}
