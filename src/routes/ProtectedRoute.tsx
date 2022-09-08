import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAppSelector } from "src/types/redux";
import { authSelectors } from "src/slices/auth";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();
  const user = useAppSelector(authSelectors.selectAccount);

  return user.user.length !== 0 ? (
    <>{children}</>
  ) : (
    <>
      <Navigate to={`/auth/login?url=${location.pathname}`} />
    </>
  );
};

export default ProtectedRoute;
