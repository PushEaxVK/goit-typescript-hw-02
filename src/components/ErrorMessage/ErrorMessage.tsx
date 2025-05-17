import { useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';

const ErrorMessage: React.FC = () => {
  const hasFetched = useRef<boolean>(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    toast.error('Network error!');
  }, [toast]);

  return <div>Error when serach images!</div>;
};

export default ErrorMessage;
