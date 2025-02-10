import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Menu from './components/Menu';
import CertificateHeader from './components/CertificateHeader';
import MapboxComponent from './components/MapboxComponent'; // 引入新组件
import PositionDemo from './components/PositionDemo'; // 引入新组件

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('table1');

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      {/* <InfoCard /> */}
      <Menu selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <CertificateHeader />

      {selectedTab === 'table1' && (
        <Header isOpen={isOpen} toggleOpen={toggleOpen} />
      )}
      {selectedTab === 'table1' && <Content isOpen={isOpen} />}
      {selectedTab === 'MapBox' && <MapboxComponent />}
      {selectedTab === 'PositionDemo' && <PositionDemo />}
    </div>
  );
};

export default App;
