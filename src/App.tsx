import React from "react";
import { registerRootComponent } from "expo";
import AppNavigation from "./navigation/app-navigation";

export default function App() {
  return <AppNavigation />;
}

registerRootComponent(App);
