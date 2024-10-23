import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requirePlan?: boolean;
}

export default function ProtectedRoute({ children, requirePlan = false }: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  if (requirePlan && !user.hasPlan) {
    return <Navigate to="/pricing" />;
  }

  return <>{children}</>;
}