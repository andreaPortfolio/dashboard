import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import {
  Home,
  LoginPage,
  Layout,
  IdeasPage,
  AgentsPage,
  TicketsPage,
  ArticlesPage,
  ContactsPage,
  SettingsPage,
  SubscriptionsPage,
  OverviewPage,
} from "../ui";
import { ROUTES } from "../utils";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ReactElement } from "react";

const RequireAuth = (): ReactElement => {
  const access = true///useSelector((state: RootState) => state.login.access);
  if (access) {
    return <Outlet />;
  }
  return <Navigate to={ROUTES.login} />;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.tickets} element={<TicketsPage />} />
            <Route
              path={ROUTES.subscriptions}
              element={<SubscriptionsPage />}
            />
            <Route path={ROUTES.settings} element={<SettingsPage />} />
            <Route path={ROUTES.agents} element={<AgentsPage />} />
            <Route path={ROUTES.articles} element={<ArticlesPage />} />
            <Route path={ROUTES.contacts} element={<ContactsPage />} />
            <Route path={ROUTES.overview} element={<OverviewPage />} />
            <Route path={ROUTES.contacts} element={<ContactsPage />} />
            <Route path={ROUTES.ideas} element={<IdeasPage />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Route>
        <Route path={ROUTES.login} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
