import './App.scss'
import { FC, JSX } from 'react';
import Header from '../header/Header.tsx';
import { RouterProvider } from 'react-router-dom';
import { routerProvider } from '../../routes/router-provider.tsx';

const App: FC = (): JSX.Element => {

  return (
      <>
          <Header />
          <RouterProvider router={routerProvider} />
      </>
  )
};

export default App;