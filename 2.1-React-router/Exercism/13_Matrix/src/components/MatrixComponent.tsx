import React, { useState } from 'react';

class Matrix {
  readonly rows: number[][];
  readonly columns: number[][];

  constructor(text: string) {
    this.rows = text
      .trim()
      .split('\n')
      .map((row) => row.trim().split(/\s+/).map(Number))
      .filter((row) => row.length > 0);

    const numColumns = this.rows[0]?.length || 0;
    this.columns = Array.from({ length: numColumns }, (_, i) =>
      this.rows.map((row) => row[i])
    );
  }
}

const MatrixComponent: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [matrix, setMatrix] = useState<Matrix | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleGenerateMatrix = () => {
    const newMatrix = new Matrix(inputText);
    setMatrix(newMatrix);
  };

  return (
    <div>
      <h1>Matrix Generator</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        rows={10}
        cols={30}
        placeholder="Enter matrix as text, e.g. '1 2 3\n4 5 6\n7 8 9'"
      />
      <br />
      <button onClick={handleGenerateMatrix}>Generate Matrix</button>

      {matrix && (
        <div>
          <h2>Rows</h2>
          <pre>{JSON.stringify(matrix.rows, null, 2)}</pre>
          <h2>Columns</h2>
          <pre>{JSON.stringify(matrix.columns, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MatrixComponent;
