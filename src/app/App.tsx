import '../App.css';
import { Toaster } from 'react-hot-toast';

import { AppRouter } from './routes/AppRouter';

export const App = () => {
  return (
    <>
      <Toaster
        position='top-center'
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
      />
      <AppRouter />
    </>
  );
};

export default App;
