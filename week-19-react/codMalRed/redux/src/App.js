import IncrementDecrement from "./components/IncrementDecrement";
import { Provider } from 'react-redux'
import store from "./redux/store";



function App() {
  return (
    <>
      <Provider store={store}>
        <IncrementDecrement />
      </Provider>
    </>
  );
}

export default App;
