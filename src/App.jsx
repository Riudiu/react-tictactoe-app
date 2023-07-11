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
          flexDirection: 'row',
        }}
      >
        <div>
          <Board />
        </div>
        <div css={{
            marginLeft: '20px',
          }}
        >
            im info
        </div>
      </div>
    </>
  );
}