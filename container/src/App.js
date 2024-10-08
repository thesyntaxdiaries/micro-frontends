import React from 'react';

const RemoteButton = React.lazy(() => import('remote/Button'));

function App() {
  return (
    <div>
      <h1>Container App</h1>
      <React.Suspense fallback="Loading...">
        <RemoteButton />
      </React.Suspense>
    </div>
  );
}

export default App;