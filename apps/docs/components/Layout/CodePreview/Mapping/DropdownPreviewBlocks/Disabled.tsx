import * as React from "react";
import { Dropdown, DropdownOption } from "@aristobyte-ui/dropdown";

export const Disabled = () => {
  return (
    <Dropdown value="frontend" placeholder="Open dropdown" disabled>
      <DropdownOption
        value="frontend"
        description="Specializes in UI/UX, JavaScript, and frontend frameworks"
      >
        Frontend Developer
      </DropdownOption>
    </Dropdown>
  );
};
