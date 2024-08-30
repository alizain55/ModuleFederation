import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import React, { Suspense } from 'react';
import { NewExternal } from './External/External';


// const NewExternalPortal = () => {
//     const ExternalPortal = React.lazy(() => import('external-portal/External'))
  
//     return (
//       <Suspense fallback="Loading...">
//         {ExternalPortal ? <ExternalPortal  /> : null}
//       </Suspense>
//     );
//   };
  
export function AppRoutes() {
return (
    <BrowserRouter>
        <Routes>
            <Route path='external-portal/*' element={<NewExternal />} />
        </Routes>
    </BrowserRouter>
);
}

export default AppRoutes;
