import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { store } from './store';
import './index.scss';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Auth0Provider
                    domain={domain}
                    clientId={clientId}
                    authorizationParams={{
                        redirect_uri: 'http://localhost:5173/',
                    }}
                >
                    <App />
                </Auth0Provider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
