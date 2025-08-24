import * as React from "react";
import { Dropdown } from "@aristobyte-ui/ui/components/Dropdown/index";
import { DropdownOption } from "@aristobyte-ui/ui/components/DropdownOption/index";

export const Usage = () => {
  return (
    <Dropdown value="frontend" placeholder="Open dropdown">
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
        value="devops"
        description="Handles CI/CD pipelines, cloud infrastructure, and automation"
      >
        DevOps Engineer
      </DropdownOption>
    </Dropdown>
  );
};
