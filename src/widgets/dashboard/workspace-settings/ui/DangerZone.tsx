import { DeleteConfirmButton } from '@/features/workspace/ui/delete-workspace/DeleteConfirmButton';
interface DangerZoneProps {
  isDeleting: boolean;
  name: string;
  handleDelete: () => void;
}

export const DangerZone = ({
  isDeleting,
  name,
  handleDelete,
}: DangerZoneProps) => {
  return (
    <section className='space-y-4'>
      <div className='flex items-center gap-2 text-destructive'>
        <h2 className='text-lg font-semibold'>Danger Zone</h2>
      </div>

      <div className='border border-destructive/20 rounded-xl p-6 space-y-4'>
        <div className='flex flex-col gap-1'>
          <p className='text-sm font-semibold'>Delete this workspace</p>
          <p className='text-xs text-muted-foreground'>
            Once you delete a workspace, there is no going back
          </p>
        </div>

        <DeleteConfirmButton
          onConfirm={handleDelete}
          isPending={isDeleting}
          title={`Delete "${name}" workspace?`}
          description='This will permanently delete this workspace and all associated projects, tasks, and data.'
          buttonText='Permanently Delete'
        />
      </div>
    </section>
  );
};
