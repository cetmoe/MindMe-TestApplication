import React from 'react';
import { oauth2 as SMART } from 'fhirclient';

export default class Launcher extends React.Component {
  componentDidMount() {
    SMART.authorize({
      clientId: 'demo_application_mindme',
      scope: 'openid offline_access dips-fhir',
      redirectUri: './app',
      iss: 'https://api.dips.no/FHIR',
    });
  }

  render() {
    return 'Launching...';
  }
}
