import * as React from "react";
import { Button } from "@aristobyte-ui/button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => <Button variant="primary">Click me</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
