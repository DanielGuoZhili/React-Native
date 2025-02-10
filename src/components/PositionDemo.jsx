import React from 'react';
import './PositionDemo.scss';

const PositionDemo = () => {
  return (
    <div className="position-demo">
      <h2>CSS Positioning Demo</h2>

      {/* Static positioning */}
      <div className="static-box">
        <p>Static Position (Default)</p>
      </div>

      {/* Relative positioning */}
      <div className="relative-box">
        <p>Relative Position</p>
        {/* 相对自身原始位置移动 */}
      </div>

      {/* Absolute positioning */}
      <div className="absolute-container">
        <p>Absolute Container</p>
        {/* Absolute 定位相对于最近的 position: relative 的父级 */}
        <div className="absolute-box">
          <p>Absolute Position</p>
        </div>
      </div>

      {/* Fixed positioning */}
      <div className="fixed-box">
        <p>Fixed Position</p>
        {/* Fixed 定位相对于浏览器窗口 (viewport)，不随页面滚动 */}
      </div>

      {/* Sticky positioning */}
      <div className="sticky-container">
        <p>Scroll down to see Sticky Position</p>
        {/* Sticky 定位：在滚动时相对自身表现为相对定位，
          但到达阈值时固定在页面顶部 */}
        <div className="sticky-box">
          <p>Sticky Position</p>
        </div>
      </div>
    </div>
  );
};

export default PositionDemo;
