import './App.scss'
import { FC, JSX } from 'react';
import { routerProvider } from '../../routes/router-provider.tsx';
import { RouterProvider } from 'react-router-dom';

const App: FC = (): JSX.Element => {

  return (
    <>
        <RouterProvider router={routerProvider} />
    </>
  )
};

export default App;