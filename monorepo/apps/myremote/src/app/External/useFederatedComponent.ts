import { lazy, useState, useEffect } from 'react';
import { useDynamicScript } from './useDynamicScript';

declare const __webpack_init_sharing__: (scope: 'default') => Promise<void>;
declare const __webpack_share_scopes__: { default: unknown };

async function loadComponent(scope: any, module: any) {
  // Initializes the share scope. This fills it with known provided modules from this build and all remotes
  await __webpack_init_sharing__('default');
  const container = window[scope] as any; // or get the container somewhere else
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);
  const factory = await (window as any)[scope].get(module);
  const Module = factory();
  return Module;
}

const componentCache = new Map();

export type UseFederatedComponentProps = {
  remoteUrl: string;
  scope: string;
  module: string;
};
export const useFederatedComponent = ({
  remoteUrl,
  scope,
  module,
}: UseFederatedComponentProps) => {
  const key = `${remoteUrl}-${scope}-${module}`;
  const [Component, setComponent] = useState<any>(null);

  const { ready } = useDynamicScript(remoteUrl);
  useEffect(() => {
    if (Component) setComponent(null);
    // Only recalculate when key changes
  }, [key]);

  useEffect(() => {
    if (ready && !Component) {
      const Comp = lazy(() => loadComponent(scope, module));
      componentCache.set(key, Comp);
      setComponent(Comp);
    }
    // key includes all dependencies (scope/module)
  }, [Component, ready, key]);

  return { Component };
};
