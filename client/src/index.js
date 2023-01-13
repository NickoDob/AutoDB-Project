import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserGroup from "./group/UserGroup";
import AutoGroup from "./group/AutoGroup";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserGroup(),
        auto: new AutoGroup(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

