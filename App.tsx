
import { Provider } from 'react-redux';
import { store } from './redux/store';

import AppNavigation from './navigations/AppNavigation';



function App(): JSX.Element {
  
  return (
    <Provider store={store}>
        <AppNavigation />
    </Provider>
   
  );
}

export default App;
