import LandingPage from "~/landing";
import type { Route } from "./+types/home";
import { ReactLenis } from "lenis/react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <ReactLenis root>
      <LandingPage />
    </ReactLenis>
  )
}