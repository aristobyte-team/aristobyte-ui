const FORBIDDEN_LOGS = [
  'Warning: Failed context type: The context `t` is marked as required in',
  'Unable to access t function. Ensure that',
];

['warn', 'error'].forEach((method) => {
  const originalMethod = console[method];
  console[method] = (...props) => {
    const message = props[0];
    if (typeof message !== 'string') {
      return;
    }
    for (const w of FORBIDDEN_LOGS) {
      if (message.includes(w)) {
        throw new Error(`Forbidden console.${method}: ${message}`);
      }
    }
    originalMethod(...props);
  };
});
