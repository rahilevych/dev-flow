interface GeneralDatailesProps {
  name: string;
}

export const GeneralDetailes = ({ name }: GeneralDatailesProps) => {
  return (
    <section className='space-y-4'>
      <div className='border rounded-md p-4  bg-card space-y-4 '>
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='font-medium text-xl'>General Details</h3>
            <p className='mt-5 text-md '>
              Current name: <span>{name}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
