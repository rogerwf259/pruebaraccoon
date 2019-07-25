import React, { useState } from 'react';
import { Modal, Button, Image, Header } from 'semantic-ui-react';

export default function Item({ image, description, mood }) {
  const [show, setShow] = useState(false);
  const evilArray = [1, 3, 4, 8];
  return (
    <div className="item">
      <div className="right floated content">
        <Button className="inverted violet" onClick={() => setShow(true)}>
          Así
        </Button>
      </div>
      <img className="ui avatar image" src={image} alt="Avatar" />
      <div className="content">{description}</div>
      <Modal size="tiny" open={show} onClose={() => setShow(false)}>
        <Modal.Header>{description}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="large" src={image} />
          <Modal.Description>
            <Header>De verdad te sientes asi sobre Raccoon?</Header>
            {evilArray.includes(mood) ? (
              <span style={{ fontSize: '100px' }}>&#128547;</span>
            ) : (
              <span style={{ fontSize: '100px' }}>&#129299;</span>
            )}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button className="inverted red" onClick={() => setShow(false)}>
            Cerrar
          </Button>
          <Button className="inverted purple" content="Justo asi?" />
        </Modal.Actions>
      </Modal>
    </div>
  );
}
