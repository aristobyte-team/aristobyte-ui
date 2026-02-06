import * as React from "react";
import { Dropdown, DropdownOption } from "@aristobyte-ui/dropdown";

export const Multiple = () => (
  <Dropdown
    choice="multiple"
    value="frontend"
    placeholder="Select roles"
    initiallyOpened
  >
    <DropdownOption value="frontend">Frontend Developer</DropdownOption>
    <DropdownOption value="backend">Backend Developer</DropdownOption>
    <DropdownOption value="fullstack">Full Stack Developer</DropdownOption>
  </Dropdown>
);
