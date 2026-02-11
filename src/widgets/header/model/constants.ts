import type { HeaderData } from './types';

export const HEADER_DATA: Record<string, HeaderData> = {
  '/dashboard': {
    title: 'Home',
    description:
      'Welcome back! Here’s what’s happening with your projects today',
  },
  '/dashboard/tasks': {
    title: 'Tasks',
    description: 'Manage, filter, and track your team’s tasks and progress',
  },
  '/dashboard/settings': {
    title: 'Settings',
    description:
      'Manage your account settings, security preferences, and configurations',
  },
  '/dashboard/members': {
    title: 'Members',
    description: 'View and manage team members, roles, and permissions',
  },
  '/dashboard/projects': {
    title: 'Projects',
    description: 'View and manage your projects',
  },
};
