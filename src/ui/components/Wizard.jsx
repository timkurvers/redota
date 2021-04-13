/* eslint-disable react/no-array-index-key */

import React, { useCallback, useEffect, useState } from 'react';

const Wizard = (props) => {
  const { children, onDone } = props;

  // Holds values for every completed step in this wizard
  const [values, setValues] = useState([]);

  // Current step index
  const currentIndex = values.length;

  const invalidate = useCallback((index) => {
    setValues(values.slice(0, index));
  }, [setValues, values]);

  const next = useCallback((index, value) => {
    setValues(values.slice(0, index).concat(value));
  }, [setValues, values]);

  const prev = useCallback(() => {
    setValues(values.slice(0, -1));
  }, [setValues, values]);

  const reset = useCallback(() => {
    setValues([]);
  }, [setValues]);

  // Construct steps for this wizard passing in the value produced by the previous
  // step effectively chaining them together
  const steps = children.map((child, index) => (
    React.cloneElement(child, {
      input: values[index - 1],
      key: index,
      invalidate: invalidate.bind(null, index),
      next: next.bind(null, index),
      prev,
      reset,
    })
  ));

  // Handle finishing all steps in the wizard
  useEffect(() => {
    if (currentIndex === steps.length) {
      onDone();
    }
  }, [currentIndex, onDone, steps]);

  return steps.slice(0, currentIndex + 1);
};

export default Wizard;
