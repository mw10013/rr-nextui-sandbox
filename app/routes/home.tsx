import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Button } from "@nextui-org/react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col space-y-4 items-center">
      <Welcome />
      <Button color="primary">Button</Button>
    </div>
  );
}
