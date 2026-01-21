const WARNINGS_TO_IGNORE = [
  'Warning: `className` prop supplied to',
  'Warning: Accessing PropTypes via the main React package is deprecated',
  'Warning: Accessing createClass via the main React package is deprecated',
  'Warning: React.createFactory() is deprecated',
  'Warning: componentWillMount has been renamed',
  'Warning: componentWillReceiveProps has been renamed',
  'Warning: componentWillUpdate has been renamed',
];

const ERRORS_TO_IGNORE = [
  'You are using the simple (heuristic)',
  'WARNING: heuristic fragment matching going on!',
  'Warning: A component is changing an uncontrolled input of type',
  'not wrapped in act',
  'Warning: Failed prop type: Datepicker: prop type `shouldCloseOnDateChange` is invalid',
];

const warnReference = console.warn;
console.warn = (...props) => {
  for (const w of WARNINGS_TO_IGNORE) {
    if (props[0].includes(w)) {
      return;
    }
  }
  warnReference(...props);
};

const errorReference = console.error;
console.error = (...props) => {
  for (const w of ERRORS_TO_IGNORE) {
    if (props[0].includes(w)) {
      return;
    }
  }
  errorReference(...props);
};
