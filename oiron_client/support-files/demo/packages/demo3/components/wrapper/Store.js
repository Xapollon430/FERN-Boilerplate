import React, {createContext, useReducer} from 'react';
import uiState, { reducer } from '../../theme/config';

export const Context = createContext(uiState);

const Store = ({children}) => {
  const [state, dispatch] = useReducer(reducer, uiState);
    return (
      <Context.Provider value={[state, dispatch]}>
        {children}
      </Context.Provider>
    )
};

export default Store;
