import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppLoader from "./layouts/AppLoader";
import RequiredAuth from "./pages/auth/required-auth";
import NotFound from "./pages/errors/not-found";

const App = lazy(() => import("@/layouts/App"));
const Login = lazy(() => import("@/pages/auth/login"));
const InQuery = lazy(() => import("@/pages/in-query"));
const Event = lazy(() => import("@/pages/events"));
const ShowCase = lazy(() => import("@/pages/show-case"));

export default function Router() {
  return (
    <Suspense fallback={<AppLoader />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<RequiredAuth />}>
          <Route path="/" element={<App />}>
            <Route path="in-quiries" element={<InQuery />} />
            <Route path="event" element={<Event />} />
            <Route path="show-case" element={<ShowCase />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
