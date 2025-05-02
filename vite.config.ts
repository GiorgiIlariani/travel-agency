import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {
  sentryReactRouter,
  type SentryReactRouterBuildOptions,
} from "@sentry/react-router";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "giorgi-ilariani-t2",
  project: "travel-agency",
  // An auth token is required for uploading source maps.
  authToken:
    "SENTRY_AUTH_TOKEN=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",
  // ...
};

export default defineConfig((config) => {
  return {
    plugins: [
      tailwindcss(),
      tsconfigPaths(),
      reactRouter(),
      sentryReactRouter(sentryConfig, config),
    ],
    sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/],
    },
  };
});
