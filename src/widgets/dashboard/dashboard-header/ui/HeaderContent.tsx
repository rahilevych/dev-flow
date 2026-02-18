interface HeaderContentProps {
  title?: string;
  children?: React.ReactNode;
}
export const HeaderContent = ({ title, children }: HeaderContentProps) => {
  return (
    <header className='w-full flex  flex-col items-start justify-between  mb-10'>
      <h1 className='text-xl md:text-3xl font-bold tracking-tight '>{title}</h1>
      <div className='w-full flex justify-between  '> {children}</div>
    </header>
  );
};
