import { store, persistor } from "./reudux/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import TodolistDays from "./TodolistDays"

function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <TodolistDays/>
      </Provider>
    </PersistGate>
  )
}

export default App
