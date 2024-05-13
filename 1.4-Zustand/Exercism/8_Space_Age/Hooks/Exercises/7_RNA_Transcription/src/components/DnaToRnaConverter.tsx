import React, { useState } from 'react';

export function DnaToRnaConverter() {
  const [dnaSequence, setDnaSequence] = useState<string>('');
  const [rnaSequence, setRnaSequence] = useState<string>('');

  function toRna(sequence: string): string {
    return sequence
      .split('')
      .map(nucleotide => {
        switch(nucleotide) {
          case 'G':
            return 'C';
          case 'C':
            return 'G';
          case 'T':
            return 'A';
          case 'A':
            return 'U';
          default:
            throw new Error('Invalid input DNA.');
        }
      })
      .join('');
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDnaSequence(event.target.value);
  }

  function convertToRna() {
    try {
      const result = toRna(dnaSequence);
      setRnaSequence(result);
    } catch (error) {
      console.error(error);
      setRnaSequence('Error: Invalid input DNA.');
    }
  }

  return (
    <div>
      <h2>DNA to RNA Converter</h2>
      <p>Enter DNA sequence:</p>
      <input type="text" value={dnaSequence} onChange={handleInputChange} />
      <button onClick={convertToRna}>Convert</button>
      <p>RNA sequence: {rnaSequence}</p>
    </div>
  );
}
