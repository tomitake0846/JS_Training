import React, {useState,useEffect} from 'react';
import {ColorfulMessage} from './components/ColorfulMessage'

const App = () => {
  //num ... 動的に変更される変数
  //setNum ... num を更新する関数
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);  

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  }
  useEffect(()=> {
    if(num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  useEffect(() => {
    console.log('first rendering');
  },[]);
  
  return (
    <>
      <h1 style={{color:'red'}}>hello </h1>
      <ColorfulMessage color='blue'>how are you?</ColorfulMessage>
      <ColorfulMessage color='pink'>Yes! Good!</ColorfulMessage>
      <button onClick={onClickCountUp}>count up</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>test message</p>}
      
    </>
  );
}

export default App;
