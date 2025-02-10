import React from 'react';
import './CertificateHeader.scss';

const CertificateHeader = () => {
  return (
    <div
      className="certificate-header"
      style={{
        textAlign: 'left',
        border: '1px solid black',
        marginBottom: '10px',
      }}
    >
      <h3>Status(Survey)</h3>
      <div className="application-container">
        <button className="application-button">Application</button>{' '}
      </div>
    </div>
  );
};

export default CertificateHeader;
