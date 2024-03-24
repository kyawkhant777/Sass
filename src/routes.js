import React from "react";
const TestCode = React.lazy(() => import("./views/menus/testCode/TestCode"));
const NewMenu = React.lazy(() => import("./views/menus/newMenu/NewMenu"));
const Result = React.lazy(() => import('./views/menus/Home/Result'));
const Home = React.lazy(() => import("./views/menus/Home/Home"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/menus/TestCode", name: "TestCode", component: TestCode },
  { path: `/menus/NewMenu`, name: "NewMenu", component: NewMenu },
  { path: `/menus/Result`, name: 'Result', component: Result},
  { path: `/menus/Home`, name: "Home", component: Home },
];

export default routes;
