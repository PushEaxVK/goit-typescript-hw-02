import s from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { SearchBarProps, SearchForm, SearchFormEvent } from './SearchBar.types';

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }: SearchBarProps) => {
  const handleSubmit = (evt: SearchFormEvent): void => {
    evt.preventDefault();
    const form = evt.target as SearchForm;
    const query: string = form.elements.query.value.trim();

    if (query === '') {
      toast.error('Query is empty!');
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <header className={s.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
