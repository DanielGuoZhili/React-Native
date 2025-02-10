import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapboxComponent.scss';

mapboxgl.accessToken =
  'pk.eyJ1IjoiaW5vcmx5ZSIsImEiOiJjbTBxaHpoYmcwYng3Mmlwd2gxcTZ6Y3V3In0.fidYOUBVnLA8fQZ5eaR30g';

const MapboxComponent = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [0, 0], // 地图中心点经纬度
      zoom: 2,
    });

    return () => map.remove(); // 组件卸载时清除地图实例
  }, []);

  return <div ref={mapContainerRef} className="mapbox-container"></div>;
};

export default MapboxComponent;
