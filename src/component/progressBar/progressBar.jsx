import React from 'react'

const ProgressBar = ({bgcolor,progress,height}) => {
  const Parentdiv = {
        height: height,
        width: "100%",
        backgroundColor: "whitesmoke",
        borderRadius: 40,
        // margin: 50,
      };
    
      const Childdiv = {
        height: "100%",
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        padding: "5px",
      };
    
      return (
        <div style={Parentdiv}>
          <div style={Childdiv}>
          </div>
        </div>
      );
}

export default ProgressBar;