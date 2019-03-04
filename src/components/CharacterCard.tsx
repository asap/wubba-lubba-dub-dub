import * as React from 'react';

export interface CharacterCardProps {
  name: string;
  species: string;
  imageUrl: string;
  status: string;
  origin: string;
  episodes: number;
}

export const CharacterCard = (props: CharacterCardProps) => (
  <div className="five wide column card">
    <div className="image">
      <img alt={props.name} src={props.imageUrl} />
    </div>
    <div className="content">
      <div className="header">{props.name}</div>
      <div className="meta">{props.species}</div>
    </div>
    <div className="content">
      <div className="ui equal width grid">
        <div className="four wide column">
          <div className="summary">Status:</div>
        </div>
        <div className="twelve wide column">
          <div className="summary right aligned">{props.status}</div>
        </div>
        <div className="four wide column">
          <div className="summary">Origin:</div>
        </div>
        <div className="twelve wide column">
          <div className="summary right aligned">{props.origin}</div>
        </div>
        <div className="four wide column">
          <div className="summary">Appearances:</div>
        </div>
        <div className="twelve wide column">
          <div className="summary right aligned">{props.episodes} Episodes</div>
        </div>
      </div>
    </div>
  </div>
);
