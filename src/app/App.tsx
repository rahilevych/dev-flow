import '../App.css';
import { Toaster } from 'react-hot-toast';

import { AppRouter } from './routes/AppRouter';
import { Loader } from '@/shared/ui/Loader';
import { useGetMe } from '@/features/auth/model/useGetMe';

export const App = () => {
  const { isLoading } = useGetMe();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {' '}
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
