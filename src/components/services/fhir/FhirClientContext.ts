import React from 'react';
import Client from 'fhirclient/lib/Client';

export interface FhirClientType {
  client?: Client;
  error?: any;
}

export const FhirClientContext =
  React.createContext<FhirClientType>({});
