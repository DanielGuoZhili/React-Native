import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import './LeafLet.scss';

const LeafletMap = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // 初始化地图
    const map = L.map('map', {
      center: [-29.5, 145],
      zoom: 3.5,
    });

    // 添加地图瓦片层
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // 组件卸载时清理地图实例
    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainerRef} className="leaflet-map"></div>;
};

export default LeafletMap;
