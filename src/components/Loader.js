import React from 'react';

export default function Loader() {
  return (
    <div className="six wide column" style={{ marginTop: '45vh' }}>
      <div className="ui icon message">
        <i className="notched circle loading icon" />
        <div className="content">
          <div className="header">Solo un segundo mas</div>
          <p>Estamos dando los toques finales!</p>
        </div>
      </div>
    </div>
  );
}
