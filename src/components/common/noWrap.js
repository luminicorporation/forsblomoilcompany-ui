import React from 'react';

export const NoWrap = p => (
  <span style={{ whiteSpace: 'nowrap' }}>{p.children}</span>
);
