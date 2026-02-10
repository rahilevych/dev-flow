import type { CSSProperties } from 'react';
import { DotLoader } from 'react-spinners';

const loaderStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
};

export const Loader = () => (
  <div style={loaderStyle}>
    <DotLoader size={60} />
  </div>
);
