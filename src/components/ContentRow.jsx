import React from 'react';
import './ContentRow.scss';

const ContentRow = ({ rowData }) => {
  return (
    <div className="table-row">
      {rowData.map((cell, index) => (
        <div key={index}>{cell}</div>
      ))}
    </div>
  );
};

export default ContentRow;
