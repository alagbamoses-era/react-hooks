import React from 'react';
import { EffectExample } from './hooks/use-effect';
import { StateExample } from './hooks/use-state';
import {MyComponent} from './hooks/use-effect/window';

function App() {
  

  return (
    <>
      <StateExample />
      <EffectExample />
      <MyComponent />
    </>
  )
}

export default App
