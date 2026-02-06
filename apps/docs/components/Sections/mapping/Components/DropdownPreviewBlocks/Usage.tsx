import * as React from "react";
import { Dropdown, DropdownOption } from "@aristobyte-ui/dropdown";

export const Usage = () => (
  <Dropdown value="frontend" placeholder="Select role">
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
  </Dropdown>
);
