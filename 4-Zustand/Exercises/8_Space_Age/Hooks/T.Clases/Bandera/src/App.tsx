const YellowBox = () => {
  const handleClick = () => {
    alert('Yellow');
    alert('Ecuador');
  };

  return (
    <div
      style={{
        width: '400px', height: '400px', backgroundColor: 'yellow', cursor: 'pointer', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
      }}
      onClick={handleClick}
    >
      <div
        style={{ 
          width: '200px', height: '200px', backgroundColor: 'blue', position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        }}
        onClick={(e) => {
          e.stopPropagation();
          alert('Blue');
          alert('Ecuador');
        }}
      >
        <div
          style={{
            width: '100px', height: '100px', backgroundColor: 'red', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          }}
          onClick={(e) => {
            e.stopPropagation();
            alert('Red');
            alert('Ecuador');
          }}
        />
      </div>
    </div>
  );
};

export default YellowBox;
