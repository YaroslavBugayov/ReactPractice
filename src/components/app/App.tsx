import './App.scss'
import { FC, JSX, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routerProvider } from '../../routes/router-provider.tsx';
import { Provider } from 'react-redux';
import { store } from '../../redux/store.ts';

const App: FC = (): JSX.Element => {

    return (
        <Provider store={store}>
            <RouterProvider router={routerProvider}/>
        </Provider>
    );
};

export default App;