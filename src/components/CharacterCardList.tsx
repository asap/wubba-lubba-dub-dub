import * as React from 'react';
import { CharacterEntity } from '../models/CharacterEntity';
import { CharacterCard } from './CharacterCard';

export interface CharacterCardListProps {
  loading: boolean;
  characters: Array<CharacterEntity>;
}

const loadingMessage = () => (
  <div className="ui row container">
    <div className="ui icon message">
      <i className="notched circle loading icon"></i>
      <div className="content">
        <div className="header">
          Just one second
        </div>
        <p>We're fetching that content for you.</p>
      </div>
    </div>
  </div>
);

const noResultsMessage = () => (
  <div className="ui row container">
    <div className="ui negative message">
      <div className="content">
        <div className="header">
          Sorry
        </div>
        <p>We can't find any records like that</p>
      </div>
    </div>
  </div>
);

export const CharacterCardList = (props: CharacterCardListProps) => {
  const cards = props.characters.map(c => {
    return (
      <CharacterCard
        key={c.id}
        name={c.name}
        imageUrl={c.image}
        species={c.species}
        status={c.status}
        origin={c.origin.name}
        episodes={c.episode.length}
      />
    );
  });

  if (props.loading && cards.length === 0) {
    return loadingMessage();
  } else if (cards.length === 0){
    return noResultsMessage();
  } else {
    return (
      <div className="ui row container">
        <div className="ui grid cards">{cards}</div>
      </div>
    );
  }
};
