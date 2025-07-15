import { Import } from "./Import";
import { Installation } from "./Installation";
import { Intro } from "./Intro";
import { Checked } from "./Checked";
import { Usage } from "./Usage";
import { Variants } from "./Variants";
import { Sizes } from "./Sizes";
import { Labeled } from "./Labeled";
import { Controlled } from "./Controlled";
import { AlignLabel } from "./AlignLabel";
import { TrackIcon } from "./TrackIcon";
import { ThumbIcon } from "./ThumbIcon";
import { Disabled } from "./Disabled";

// @TODO: instead of current SwitchSections have something like this
// export const SwitchSections = {
//   ...
//   Checked: <CodePreview unit="switch" section="checked" />
//   ...
// };
// apply this to all components
export const SwitchSections = {
  Installation,
  Intro,
  Import,
  Checked,
  Usage,
  Variants,
  Sizes,
  Labeled,
  Controlled,
  AlignLabel,
  TrackIcon,
  ThumbIcon,
  Disabled,
};
