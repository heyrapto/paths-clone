import LandingPage from "~/landing";
import type { Route } from "./+types/home";
import { ReactLenis } from "lenis/react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Paths" },
    { name: "description", content: "Welcome to Paths!" },
    // { name: "viewport", content: "width=device-width, initial-scale=1" },
    // { link: [{rel: "icon", href: "/favicon.ico"}] }
  ];
}

export default function Home() {
  return (
    <ReactLenis root>
      <LandingPage />
    </ReactLenis>
  )
}