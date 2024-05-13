import React from 'react';

interface TwoFerProps {
  name?: string;
}

const TwoFer: React.FC<TwoFerProps> = ({ name }) => {
  const recipient = name || 'you';
  return (
    <p>
      One for {recipient}, one for me.
    </p>
  );
}

export default TwoFer;
