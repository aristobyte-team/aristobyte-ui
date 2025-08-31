import * as React from "react";
import { Dropdown, DropdownOption } from "@aristobyte-ui/dropdown";

interface IDropdownComponent {
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning";
  appearance?:
    | "solid"
    | "outline"
    | "outline-dashed"
    | "no-outline"
    | "glowing";
}

const DropdownComponent: React.FC<IDropdownComponent> = ({
  variant,
  appearance,
}) => (
  <Dropdown
    variant={variant}
    appearance={appearance}
    value="frontend"
    placeholder="Open dropdown"
  >
    <DropdownOption
      value="frontend"
      description="Specializes in UI/UX, JavaScript, and frontend frameworks"
    >
      Frontend Developer
    </DropdownOption>
    <DropdownOption
      value="backend"
      description="Focuses on APIs, databases, and server-side logic"
    >
      Backend Developer
    </DropdownOption>
    <DropdownOption
      value="fullstack"
      description="Versatile in both client and server-side development"
    >
      Full Stack Developer
    </DropdownOption>
    <DropdownOption
      disabled
      value="devops"
      description="Handles CI/CD pipelines, cloud infrastructure, and automation"
    >
      DevOps Engineer
    </DropdownOption>
  </Dropdown>
);

export const Appearance = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <DropdownComponent appearance="solid" variant="default" />
        <DropdownComponent appearance="glowing" variant="default" />
        <DropdownComponent appearance="outline" variant="default" />
        <DropdownComponent appearance="outline-dashed" variant="default" />
        <DropdownComponent appearance="no-outline" variant="default" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <DropdownComponent appearance="solid" variant="primary" />
        <DropdownComponent appearance="glowing" variant="primary" />
        <DropdownComponent appearance="outline" variant="primary" />
        <DropdownComponent appearance="outline-dashed" variant="primary" />
        <DropdownComponent appearance="no-outline" variant="primary" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <DropdownComponent appearance="solid" variant="secondary" />
        <DropdownComponent appearance="glowing" variant="secondary" />
        <DropdownComponent appearance="outline" variant="secondary" />
        <DropdownComponent appearance="outline-dashed" variant="secondary" />
        <DropdownComponent appearance="no-outline" variant="secondary" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <DropdownComponent appearance="solid" variant="error" />
        <DropdownComponent appearance="glowing" variant="error" />
        <DropdownComponent appearance="outline" variant="error" />
        <DropdownComponent appearance="outline-dashed" variant="error" />
        <DropdownComponent appearance="no-outline" variant="error" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <DropdownComponent appearance="solid" variant="warning" />
        <DropdownComponent appearance="glowing" variant="warning" />
        <DropdownComponent appearance="outline" variant="warning" />
        <DropdownComponent appearance="outline-dashed" variant="warning" />
        <DropdownComponent appearance="no-outline" variant="warning" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <DropdownComponent appearance="solid" variant="success" />
        <DropdownComponent appearance="glowing" variant="success" />
        <DropdownComponent appearance="outline" variant="success" />
        <DropdownComponent appearance="outline-dashed" variant="success" />
        <DropdownComponent appearance="no-outline" variant="success" />
      </div>
    </div>
  );
};
