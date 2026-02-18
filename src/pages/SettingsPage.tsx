import { useParams } from 'react-router';
import { useGetWorkspace } from '@/features/workspace/model/useGetWorkspace';
import { useDeleteWorkspace } from '@/features/workspace/model/useDeleteWorkspace';
import { UpdateWorkspaceModal } from '@/features/workspace/ui/update-workspace/UpdateWorkspaceModal';
import { CustomButton } from '@/shared/ui/custom/CustomButton';
import { HeaderContent } from '@/widgets/dashboard/dashboard-header/ui/HeaderContent';
import { GeneralDetailes } from '@/widgets/dashboard/workspace-settings/ui/GeneralDetailes';
import { DangerZone } from '@/widgets/dashboard/workspace-settings/ui/DangerZone';
import { Loader } from '@/shared/ui/Loader';

export const SettingsPage = () => {
  const title = 'Workspace settings';
  const { id } = useParams<{ id: string }>();
  const { data: workspace, isPending: isWorkspaceLoading } = useGetWorkspace(
    id!,
  );
  const { mutate: deleteWorkspace, isPending: isDeleting } =
    useDeleteWorkspace();

  if (isWorkspaceLoading) return <Loader />;
  if (!workspace)
    return <div className='p-8 text-center'>Workspace not found</div>;

  const handleDelete = () => {
    if (id) deleteWorkspace(id);
  };

  return (
    <div className='flex flex-col min-h-screen bg-background'>
      <HeaderContent title={title} />
      <main className='w-full flex flex-col  space-y-10'>
        <div className='self-end mb-5'>
          <UpdateWorkspaceModal workspace={workspace}>
            <CustomButton>Edit Settings</CustomButton>
          </UpdateWorkspaceModal>
        </div>
        <GeneralDetailes name={workspace.name} />
        <DangerZone
          isDeleting={isDeleting}
          name={workspace.name}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};
