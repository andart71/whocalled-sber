import React, { FC, memo, useReducer, useEffect } from 'react';
import { Header, Container } from '@sberdevices/plasma-ui';
import { reducer } from './store';
import { initAssistant } from './assistant';
import { PhonePage } from './components/PhonePage';
import CheckPhonePage from "./components/CheckPhonePage";

export const App: FC = memo(() => {
        const [appState, dispatch] = useReducer(reducer, {
            currentState: '',
            phone: {},
            countViews: 0,
            userId: '',
            countLike: 0,
            countDislike: 0
        });

        useEffect(() => {
            initAssistant(dispatch);
        }, []);

        const route = () => {
            switch (appState.currentState) {
                case 'phone':
                    return <CheckPhonePage phone={appState.phone} countViews={appState.countViews} userId={appState.userId} countLike={appState.countLike} countDislike={appState.countDislike} positive={false} negative={false} />;
                    break;
                case 'positive':
                    return <CheckPhonePage phone={appState.phone} countViews={appState.countViews} userId={appState.userId} countLike={appState.countLike} countDislike={appState.countDislike} positive={true} negative={false} />;
                    break;
                case 'negative':
                    return <CheckPhonePage phone={appState.phone} countViews={appState.countViews} userId={appState.userId} countLike={appState.countLike} countDislike={appState.countDislike} positive={false} negative={true} />;
                    break;
                default:
                    return <PhonePage currentState={appState.currentState} />;
                break;
            }
        }

        return (
            <>

            <Container>
                <Header
                    logo='/logo-whocalled.png'
                    title='Кто звонил?'
                />
                {route()}
            </Container>
    </>
        );
    }
);

export default App;
