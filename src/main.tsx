import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { Context, initialGameState } from './hooks/useData.tsx'

createRoot(document.getElementById('root')!).render(
  <Context value={initialGameState}>
    <App />
  </Context>
)
