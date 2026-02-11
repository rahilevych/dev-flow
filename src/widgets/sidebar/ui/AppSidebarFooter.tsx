import { LogoutButton } from '@/shared/ui/custom/LogoutButton';
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/ui/sidebar';
import { User2 } from 'lucide-react';

export const AppSidebarFooter = ({ username }: { username: string }) => {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <User2 /> {username}
          </SidebarMenuButton>
          <LogoutButton />
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};
