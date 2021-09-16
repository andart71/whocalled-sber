import React, { FC, memo, useReducer, useEffect } from 'react';
import { Header, Container } from '@sberdevices/plasma-ui';
import { reducer } from './store';
import { initAssistant } from './assistant';
import { PhonePage } from './components/PhonePage';
import CheckPhonePage from "./components/CheckPhonePage";

export const App: FC = memo(() => {
        const [appState, dispatch] = useReducer(reducer, {
            currentState: '',
            phone: ''
        });

        useEffect(() => {
            initAssistant(dispatch);
        }, []);

        const route = () => {
            switch (appState.currentState) {
                case 'phone':
                    return <CheckPhonePage phone={appState.phone} />;
                    break;
                default:
                    return <PhonePage />
                break;
            }
        }

        return (

            <Container>
                <Header
                    logo='/logo-whocalled.png'
                    title='Кто звонил?'
                />
                {route()}
            </Container>
        );
    }
);

export default App;
