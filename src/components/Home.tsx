import React from 'react';
import FhirClientProvider from './services/fhir/FhirClientProvider';

export default function Page() {
  return (
    <FhirClientProvider>
      <div>Page content</div>
    </FhirClientProvider>
  );
}
