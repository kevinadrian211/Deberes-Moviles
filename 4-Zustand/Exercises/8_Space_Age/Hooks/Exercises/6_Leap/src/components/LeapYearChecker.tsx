import React from 'react';

type LeapYearCheckerProps = {
  year: number;
};

const LeapYearChecker: React.FC<LeapYearCheckerProps> = ({ year }) => {
  const isLeap = (year: number): boolean => {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  };

  return (
    <div>
      <h2>Leap Year Checker</h2>
      <p>
        {year} {isLeap(year) ? 'is' : 'is not'} a leap year.
      </p>
    </div>
  );
};

export default LeapYearChecker;