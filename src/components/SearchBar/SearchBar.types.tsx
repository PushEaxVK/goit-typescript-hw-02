export interface SearchFormElements extends HTMLFormControlsCollection {
  query: HTMLInputElement;
}

export interface SearchForm extends HTMLFormElement {
  elements: SearchFormElements;
}

export type SearchFormEvent = React.FormEvent<HTMLFormElement>;

export type SearchBarProps = {
  onSubmit: (query: string) => void;
};
