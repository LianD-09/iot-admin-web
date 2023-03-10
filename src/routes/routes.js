import Home from "../pages/Home";
import Access from "../pages/Access";
import Login from "../pages/UserList";
import UserList from "../pages/UserList";
import NotFound from "../pages/NotFound";

const routes = [
    { path: "/", element: <Home />, children: [] },
    { path: "/access", element: <Access />, children: [] },
    { path: "/login", element: <Login />, children: [] },
    { path: "/users", element: <UserList />, children: [] },
    { path: "*", element: <NotFound />, children: [] }
];

export default routes;