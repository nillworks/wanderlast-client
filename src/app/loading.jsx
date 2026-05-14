import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-2">
      <Spinner color="accent" />
    </div>
  );
};

export default loading;
