import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("features", "routes/features.tsx"),
    route("benefits", "routes/benefits.tsx"),
    route("statistics", "routes/statistics.tsx"),
    route("resources", "routes/resources.tsx"),
  ]),
] satisfies RouteConfig;
