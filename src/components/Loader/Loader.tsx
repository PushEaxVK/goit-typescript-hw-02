import ClipLoader from 'react-spinners/ClipLoader';
import type { CSSProperties } from 'react';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

const Loader: React.FC = () => {
  return (
    <div>
      <ClipLoader
        color="#36d7b7"
        loading={true}
        cssOverride={override}
        size={50}
        aria-label="Loading Images..."
      />
    </div>
  );
};

export default Loader;
