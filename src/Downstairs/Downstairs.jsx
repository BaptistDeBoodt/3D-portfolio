import React, { useEffect} from 'react';
import Mainfloor from '../Components/Downstairs/Mainfloor';
import Piano from '../Components/Downstairs/Piano';
import Player from '../Components/Downstairs/Player';
import Door2 from '../Components/Downstairs/Door2.jsx';
import Candle1 from '../Components/Downstairs/Candle1';
import Candle2 from '../Components/Downstairs/Candle2';
import Candle3 from '../Components/Downstairs/Candle3.jsx';

const Downstairs = ({ onObjectClick }) => {
  const voice = new Audio('/audio/voice.wav');

  useEffect(() => {
    voice.play();
  }, []);

  return (
    <>
      <Mainfloor />
      <Piano onClick={() => onObjectClick('Piano')}/>
      <Player/>
      <Door2 onClick={() => onObjectClick('Door2')}/>
      <Candle1 onClick={() => onObjectClick('Candle1')}/>
      <Candle2 onClick={() => onObjectClick('Candle2')}/>
      <Candle3 onClick={() => onObjectClick('Candle3')}/>
    </>
  );
};

export default Downstairs;
