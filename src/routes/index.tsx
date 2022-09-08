import React, { lazy } from "react";
import ProtectedRoute from "src/routes/ProtectedRoute";

const Auth: React.FC = lazy(() => import("../pages/auth/Auth"));
const Login: React.FC = lazy(() => import("../pages/auth/Login"));
const LayoutWithSideBar: React.FC = lazy(
  () => import("../layout/LayoutWithSideBar")
);
const JobFlatform: React.FC = lazy(() => import("../pages/board"));

const routes = () => [
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedRoute children={<LayoutWithSideBar />}></ProtectedRoute>,
    children: [
      {
        path: "job",
        element: <JobFlatform />,
      },
    ],
  },
];

export { routes };
