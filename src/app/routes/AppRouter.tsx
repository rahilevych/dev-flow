import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { SettingsPage } from '@/pages/SettingsPage';
import { HomePage } from '@/pages/HomePage';
import { MembersPage } from '@/pages/MembersPage';
import { TasksPage } from '@/pages/TasksPage';
import { ProjectPage } from '@/pages/ProjectPage';
import { AuthLayout } from '../layouts/AuthLayout';
import { LoginPage } from '@/pages/LoginPage';
import { RegisterPage } from '@/pages/RegisterPage';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<DashboardLayout />}>
            <Route index element={<HomePage />} />
            <Route path='members' element={<MembersPage />} />
            <Route path='tasks' element={<TasksPage />} />
            <Route path='settings' element={<SettingsPage />} />
            <Route path='projects' element={<ProjectPage />} />
          </Route>
        </Route>

        <Route path='/auth' element={<AuthLayout />}>
          <Route index path='login' element={<LoginPage />} />
          <Route index element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />

          <Route></Route>
        </Route>
      </Routes>
    </Router>
  );
};
