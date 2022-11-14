const ProgressBar = (props) => {
    const { completed } = props;
  
    const containerStyles = {
      height: 30,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      marginTop: 40
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: '#1a76d1',
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;