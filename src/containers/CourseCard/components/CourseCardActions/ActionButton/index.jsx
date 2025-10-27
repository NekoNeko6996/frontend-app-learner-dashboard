import React from 'react';
import { Button } from '@openedx/paragon';

import './index.scss';

import useIsCollapsed from './hooks';

export const ActionButton = (props) => {
  const isSmall = useIsCollapsed();
  return (
    <Button
      {...props}
      {...isSmall && { size: 'sm' }}
      className='btn-submit'
    />
  );
};

export default ActionButton;
