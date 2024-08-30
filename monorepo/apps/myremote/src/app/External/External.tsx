import { Suspense } from 'react';
import { useFederatedComponent } from './useFederatedComponent';

export const NewExternal = () => {

  const { Component: External } = useFederatedComponent({
    remoteUrl: 'http://localhost:4001/remoteEntry.js',
    scope: 'external_portal',
    module: './External',
  });

  return (
    <Suspense fallback='Loading...'>
      {External ? <External /> : null}
    </Suspense>
  );
};
