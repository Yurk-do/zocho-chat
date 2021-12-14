import { Button } from 'primereact/button';
import ZochoChat from '../../zochoChat/ZochoChat'

import './homePage.scss';

const HomePage = () => {
  return (
    <div className="conversations-page">
      <div className="button-container">
        <Button
          label="Open Chat"
          className="button-chat-widget"
          onClick={() => console.log('ffff')}
        />
        <Button
          label="Close Chat"
          className="button-chat-widget"
          onClick={() => console.log('ffff')}
        />
        <Button
          label="Hide Chat"
          className="button-chat-widget"
          onClick={() => console.log('ffff')}
        />
      </div>
      <div className="button-container">
        <Button
          label="Show Help"
          className="p-button-success button-chat-widget"
          onClick={() => console.log('ffff')}
        />
        <Button
          label="Hide Help"
          className="p-button-success button-chat-widget"
          onClick={() => console.log('ffff')}
        />
      </div>
      <ZochoChat/>
    </div>
  );
};

export default HomePage;
