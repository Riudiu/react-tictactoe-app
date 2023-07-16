/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import { Board } from "./components/Board";

export default function App() {

  return (
    <>
     <Global
          styles={css``}
      />
      <div 
        css={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div>
          <Board />
        </div>
        <div css={{
            marginTop: 50,
            color: 'grey'
          }}
        >
          ⓒ Riudiu.
        </div>
      </div>
    </>
  );
}