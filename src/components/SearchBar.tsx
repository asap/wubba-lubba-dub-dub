import * as React from 'react';

interface SearchProps {
  searchTerm: string;
  onUpdateSearchTerm: ((event: React.ChangeEvent<HTMLInputElement>) => void);
}

export const SearchBar = (props: SearchProps) => {
  return (
    <div className="ui row massive search">
      <input
        className="prompt"
        type="text"
        value={props.searchTerm}
        placeholder="Search"
        onChange={props.onUpdateSearchTerm}
      />
    </div>
  );
};
