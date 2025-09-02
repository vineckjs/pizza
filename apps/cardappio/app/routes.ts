import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("pizzas", "modules/catalog/pages/pizzas.tsx"),
  index("modules/catalog/pages/home.tsx"),
] satisfies RouteConfig;
