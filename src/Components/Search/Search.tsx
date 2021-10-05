import './style.scss';
import React, { useEffect, useRef, useState } from 'react';
import { Form, FormGroup, Input, Button, Container, InputGroup, InputGroupText, InputGroupAddon } from 'reactstrap';
import { IWord } from './Word.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons/faVolumeUp';
import { faLanguage } from '@fortawesome/free-solid-svg-icons/faLanguage';

const Search: React.FunctionComponent = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const [hasInputFocus, setInputFocus] = useState<boolean>(false);
  const [search, setSearch] = useState<string | null>();
  const [words, setWords] = useState<IWord[]>();
  const [selectedWord, setSelectedWord] = useState<IWord>();
  const [searchResult, setSearchResults] = useState<IWord[] | undefined>();
  const changeSearchHandler = () => {
    const searchText = searchInput?.current?.value;
    setSearch(searchText);
    let results: IWord[] | undefined;
    if (searchText) {
      results = words
        ?.sort((a: IWord, b: IWord): number => a.English.localeCompare(b.English))
        ?.filter((word: IWord): boolean => {
          let matchFound: boolean = false;
          if (word?.English?.toLowerCase()?.trim()?.search(searchText.toLowerCase()?.trim()) === 0) {
            matchFound = true;
          }
          return matchFound;
        })
        ?.slice(0, 10);
    }
    setSearchResults(results);
  };
  const getWords = () => {
    const dataUrl = 'data/words.json';
    fetch(dataUrl, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response: Response): Promise<IWord[]> => {
        return response.json();
      })
      .then((data: IWord[]) => {
        setWords(data);
      })
      .catch((e: Error) => {
        console.error(e);
      });
  };
  useEffect(() => {
    getWords();
  }, []);
  console.log(selectedWord);
  return (
    <>
      <Container className="mt-5 mb-5">
        <h1 className="search-title">Search for a Word</h1>
        <Form className="search-form mt-5">
          <FormGroup className="custom-search-box">
            <Input
              type="tel"
              bsSize="lg"
              placeholder="English Word"
              onChange={changeSearchHandler}
              innerRef={searchInput}
              onFocus={() => setInputFocus(true)}
              //onBlur={() => setInputFocus(false)}
            />
            <FontAwesomeIcon icon={faSearch} />
            {search && search?.length > 0 && hasInputFocus && (
              <ul className="search-result">
                {searchResult && searchResult?.length > 0 ? (
                  searchResult?.map((word: IWord, key: number) => {
                    return (
                      <li
                        key={key}
                        onClick={() => {
                          console.log(word);
                          setSelectedWord(word);
                          setInputFocus(false);
                        }}
                      >
                        {word.English}
                      </li>
                    );
                  })
                ) : (
                  <li className="no_match_found">No match found</li>
                )}
              </ul>
            )}
          </FormGroup>
          {selectedWord ? (
            <div className="selected-result">
              <div className="word-title">{selectedWord.English}</div>
              <div className="meaning-box">
                <div className="meaning-label">Meaning in Farsi</div>
                <div className="meaning-title">{selectedWord.Farsi}</div>
                <div className="meaning-pronunciation">
                  <span>{selectedWord.Transliteration}</span>
                  {selectedWord.Audio && (
                    <span className="audio-icon">
                      <FontAwesomeIcon
                        icon={faVolumeUp}
                        onClick={() => {
                          {
                            const audio = new Audio(`Audio/${selectedWord.Audio}`);
                            audio.play().then(() => {});
                          }
                        }}
                      />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="selected-no-result">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          )}
        </Form>
      </Container>
    </>
  );
};

export default Search;
