import React, { useCallback } from 'react';

import Form from '../../../components/Form.jsx';

const ReplaySelectForm = (props) => {
  const { invalidate, next } = props;

  const onSelect = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      next(file);
    } else {
      invalidate();
    }
  }, [invalidate, next]);

  return (
    <Form>
      <input type="file" onChange={onSelect} accept=".dem,.bz2" />

      <p>
        The replay file you select is never uploaded to any server.
      </p>
    </Form>
  );
};

export default ReplaySelectForm;
