'use client';

import styles from '@components/ComboBox.module.scss';

import * as React from 'react';

import AlertBanner from '@components/AlertBanner';
import CardDouble from '@components/CardDouble';

interface ComboBoxProps {
  data: string[][];
  label?: string;
}

function ComboBox({ data, label }: ComboBoxProps) {
  const displayed = React.useMemo(() => data.slice(1), [data]);

  return (
    <>
      {displayed.map((entry) => (
        <CardDouble key={entry[0]} title={entry[0]}>
          <AlertBanner>{entry[1]}</AlertBanner>
          <br />
        </CardDouble>
      ))}
    </>
  );
}

export default ComboBox;
