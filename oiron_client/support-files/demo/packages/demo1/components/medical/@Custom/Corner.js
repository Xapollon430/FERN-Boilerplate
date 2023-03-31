import React, { useContext } from 'react';
import uiState from '~/theme/config';
import PageNav from '../PageNav';
import Chat from '../Chat';
import { Context } from '../../wrapper/Store';

function CornerCustom() {
  const [state] = useContext(Context);
  return (
    <div>
      { state.corner === 'chat' && <Chat /> }
      { state.corner === 'nav' && <PageNav /> }
    </div>
  );
}

export default CornerCustom;
