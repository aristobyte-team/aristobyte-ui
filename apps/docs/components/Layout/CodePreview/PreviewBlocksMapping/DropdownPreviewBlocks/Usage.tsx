import * as React from "react";
import {
  Dropdown,
  type IDropdownOption,
} from "@aristobyte-ui/ui/components/Dropdown/index";

const options: IDropdownOption[] = [
  { label: "Frontend Developer", value: "frontend" },
  { label: "Backend Developer", value: "backend" },
  { label: "Full Stack Developer", value: "fullstack" },
  { label: "DevOps Engineer", value: "devops", disabled: true },
];

export const Usage = () => {
  const [selectedRole, setSelectedRole] = React.useState<string>("");

  return (
    <div style={{ maxWidth: 320 }}>
      <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 8 }}>
        Select your role
      </h3>
      <Dropdown
        options={options}
        value={selectedRole}
        onChange={(val) => setSelectedRole(val)}
        placeholder="Choose a role"
      />
    </div>
  );
};
