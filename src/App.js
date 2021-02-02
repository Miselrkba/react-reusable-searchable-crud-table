import React, { lazy, Suspense } from 'react';
import './App.css';
import data from './data/userData';

const Table = lazy(() => {
  return import('./components/Table');
});

const App = () => {
  return (
    <Suspense fallback={<h1>Loading... </h1>}>
      <Table data={data} />
    </Suspense>
  );
};

export default App;
