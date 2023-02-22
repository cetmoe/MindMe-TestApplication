import React from 'react';
import { oauth2 as SMART } from 'fhirclient';

export default class Launcher extends React.Component {
  componentDidMount() {
    SMART.authorize({
      iss: 'https://api.dips.no/fhir',
      clientId: 'test-123',
      redirectUri: './app',
      scope:
        'openid dips-fhir-r4 fhirUser patient/*.read offline_access',
    });
  }

  render() {
    return 'Launching...';
  }
}
