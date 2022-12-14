import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css"
import styless from "./styles.css"
import prismstyles from 'prismjs/themes/prism-okaidia.min.css'

export const links = () => [{rel:'stylesheet', href:styles},{rel:'stylesheet', href:styless}, {rel:'stylesheet', href:prismstyles}]

export const meta = () => ({
  charset: "utf-8",
  title: "DevPoint Blog Remix",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />

        <Links />
      </head>

      <body>
        <Outlet />

        <ScrollRestoration />

        <Scripts />

        <LiveReload />
      </body>
    </html>
  );
}
