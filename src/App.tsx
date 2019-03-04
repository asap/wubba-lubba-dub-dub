import * as React from 'react';
import rickandmorty from './apis/rickandmorty';
import { CharacterEntity } from './models/CharacterEntity';
import { CharacterCardList } from './components/CharacterCardList';
import { SearchBar } from './components/SearchBar';

interface IState {
  characters: Array<CharacterEntity>;
  filteredCharacters: Array<CharacterEntity>;
  searchTerm: string;
  loading: boolean;
}

class App extends React.Component<{}, IState> {
  state: IState = {
    characters: [],
    filteredCharacters: [],
    searchTerm: '',
    loading: true,
  };

  fetchCharacters = async () => {
    // Found a crafty way to grab the first 200 records
    // since api only supports 20 at a time
    const append = [...Array(200)].map((x, i) => ++i).join(',');
    const response = await rickandmorty.get('/character/' + append);
    if (response.status !== 200) throw Error('ERROR');
    return response.data;
  };

  async componentDidMount() {
    try {
      const characters = await this.fetchCharacters();
      this.setState({
        characters,
        filteredCharacters: characters,
        loading: false,
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleFilterCharacters = async (term: string) => {
    const filteredCharacters = this.state.characters.filter(character =>
      character.name.toLowerCase().includes(term.toLowerCase()),
    );

    this.setState({
      searchTerm: term,
      filteredCharacters,
    });
  };

  render() {
    return (
      <div className="ui container">
        <h1>The Multiverse's Most Wanted</h1>
        <div className="ui three column centered grid padded">
          <SearchBar
            searchTerm={this.state.searchTerm}
            onUpdateSearchTerm={(e: any) =>
              this.handleFilterCharacters(e.target.value)
            }
          />
          <CharacterCardList
            characters={this.state.filteredCharacters}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}

export default App;
