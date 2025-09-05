import * as React from "react";
import { Dropdown, DropdownOption } from "@aristobyte-ui/dropdown";

interface IDropdownComponent {
  variant:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning";
  appearance: "solid" | "outline" | "outline-dashed" | "no-outline" | "glowing";
  placeholder: string;
}

const DropdownComponent: React.FC<IDropdownComponent> = ({
  variant,
  appearance,
  placeholder,
}) => (
  <Dropdown
    variant={variant}
    appearance={appearance}
    placeholder={placeholder}
    value="frontend"
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
        <DropdownComponent
          placeholder="Solid Default"
          appearance="solid"
          variant="default"
        />
        <DropdownComponent
          placeholder="Glowing Default"
          appearance="glowing"
          variant="default"
        />
        <DropdownComponent
          placeholder="Outline Default"
          appearance="outline"
          variant="default"
        />
        <DropdownComponent
          placeholder="Outline-dashed Default"
          appearance="outline-dashed"
          variant="default"
        />
        <DropdownComponent
          placeholder="No-outline Default"
          appearance="no-outline"
          variant="default"
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <DropdownComponent
          placeholder="Solid Primary"
          appearance="solid"
          variant="primary"
        />
        <DropdownComponent
          placeholder="Glowing Primary"
          appearance="glowing"
          variant="primary"
        />
        <DropdownComponent
          placeholder="Outline Primary"
          appearance="outline"
          variant="primary"
        />
        <DropdownComponent
          placeholder="Outline-dashed Primary"
          appearance="outline-dashed"
          variant="primary"
        />
        <DropdownComponent
          placeholder="No-outline Primary"
          appearance="no-outline"
          variant="primary"
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <DropdownComponent
          placeholder="Solid Secondary"
          appearance="solid"
          variant="secondary"
        />
        <DropdownComponent
          placeholder="Glowing Secondary"
          appearance="glowing"
          variant="secondary"
        />
        <DropdownComponent
          placeholder="Outline Secondary"
          appearance="outline"
          variant="secondary"
        />
        <DropdownComponent
          placeholder="Outline-dashed Secondary"
          appearance="outline-dashed"
          variant="secondary"
        />
        <DropdownComponent
          placeholder="No-outline Secondary"
          appearance="no-outline"
          variant="secondary"
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <DropdownComponent
          placeholder="Solid Error"
          appearance="solid"
          variant="error"
        />
        <DropdownComponent
          placeholder="Glowing Error"
          appearance="glowing"
          variant="error"
        />
        <DropdownComponent
          placeholder="Outline Error"
          appearance="outline"
          variant="error"
        />
        <DropdownComponent
          placeholder="Outline-dashed Error"
          appearance="outline-dashed"
          variant="error"
        />
        <DropdownComponent
          placeholder="No-outline Error"
          appearance="no-outline"
          variant="error"
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <DropdownComponent
          placeholder="Solid Warning"
          appearance="solid"
          variant="warning"
        />
        <DropdownComponent
          placeholder="Glowing Warning"
          appearance="glowing"
          variant="warning"
        />
        <DropdownComponent
          placeholder="Outline Warning"
          appearance="outline"
          variant="warning"
        />
        <DropdownComponent
          placeholder="Outline-dashed Warning"
          appearance="outline-dashed"
          variant="warning"
        />
        <DropdownComponent
          placeholder="No-outline Warning"
          appearance="no-outline"
          variant="warning"
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <DropdownComponent
          placeholder="Solid Success"
          appearance="solid"
          variant="success"
        />
        <DropdownComponent
          placeholder="Glowing Success"
          appearance="glowing"
          variant="success"
        />
        <DropdownComponent
          placeholder="Outline Success"
          appearance="outline"
          variant="success"
        />
        <DropdownComponent
          placeholder="Outline-dashed Success"
          appearance="outline-dashed"
          variant="success"
        />
        <DropdownComponent
          placeholder="No-outline Success"
          appearance="no-outline"
          variant="success"
        />
      </div>
    </div>
  );
};
