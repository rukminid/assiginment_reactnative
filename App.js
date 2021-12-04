import React from 'react';
import { createStore } from "redux";
import {NavigationContainer} from '@react-navigation/native';
import TabScreen from './navigation/Tabs';
import { Provider } from 'react-redux';
import ImageReducers from './store/reducer'

const store = createStore(ImageReducers);

const App = () => {
    return(
        <NavigationContainer>
            <Provider store={store}>
              <TabScreen />
            </Provider>
        </NavigationContainer>
    )
}
export default App;
