import React from 'react';
import Item from './Item';

/*<div className="eight wide column" style={{ marginTop: '25vh' }}>
      <div className="ui middle aligned divided animated list">
        {items.map(({ id, imgUrl, desc }) => {
          return <Item key={id} image={imgUrl} description={desc} mood={id} />;
        })}
      </div>
    </div>*/

export default function List({ items }) {
  return (
    <div className="sixteen wide column" style={{ marginTop: '10vh' }}>
      <div className="ui centered card">
        <div className="content">
          <div className="header">
            Cuentanos como te sientes acerca de Raccoon Dev Studio.
          </div>
        </div>
        <div className="content">
          <div className="ui middle aligned divided animated list">
            {items.map(({ id, imgUrl, desc }) => {
              return (
                <Item key={id} image={imgUrl} description={desc} mood={id} />
              );
            })}
          </div>
        </div>
        <div className="content">
          <h4 className="ui sub header">Gracias por tu opinion!</h4>
        </div>
      </div>
    </div>
  );
}
