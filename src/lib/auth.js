import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  appName: "StaticAuthDemo",

  // Disable database completely
  database: {
    adapter: "none",
  },

  session: {
    store: "cookies",
  },

  plugins: [nextCookies()],
});
