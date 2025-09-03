import * as React from "react";
import { Radio, RadioGroup } from "@aristobyte-ui/radio";

export const AlignLabel = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <RadioGroup
        name="top-label"
        value="top-label-1"
        variant="primary"
        appearance="solid"
        alignLabel="top"
        highlightLabel
      >
        <Radio value="top-label-1">Top label 1</Radio>
        <Radio value="top-label-2">Top label 2</Radio>
        <Radio value="top-label-3">Top label 3</Radio>
      </RadioGroup>

      <RadioGroup
        name="right-label"
        value="right-label-1"
        variant="warning"
        appearance="solid"
        alignLabel="right"
        highlightLabel
      >
        <Radio value="right-label-1">Right label 1</Radio>
        <Radio value="right-label-2">Right label 2</Radio>
        <Radio value="right-label-3">Right label 3</Radio>
      </RadioGroup>

      <RadioGroup
        name="bottom-label"
        value="bottom-label-1"
        variant="success"
        appearance="solid"
        alignLabel="bottom"
        highlightLabel
      >
        <Radio value="bottom-label-1">Bottom label 1</Radio>
        <Radio value="bottom-label-2">Bottom label 2</Radio>
        <Radio value="bottom-label-3">Bottom label 3</Radio>
      </RadioGroup>

      <RadioGroup
        name="left-label"
        value="left-label-1"
        variant="error"
        appearance="solid"
        alignLabel="left"
        highlightLabel
      >
        <Radio value="left-label-1">Left label 1</Radio>
        <Radio value="left-label-2">Left label 2</Radio>
        <Radio value="left-label-3">Left label 3</Radio>
      </RadioGroup>
    </div>
  );
};
