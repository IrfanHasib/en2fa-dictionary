import './style.scss';
import React, { useEffect, useRef, useState } from 'react';
import { FormGroup, Input, Container } from 'reactstrap';
import classNames from 'classnames';
import { IWord } from './Word.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons/faVolumeUp';

const useKeyPress = function (targetKey: 'ArrowDown' | 'ArrowUp' | 'Enter') {
  const [keyPressed, setKeyPressed] = useState(false);

  // @ts-ignore
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  // @ts-ignore
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  });

  return keyPressed;
};

const Search: React.FunctionComponent = () => {
  const boxDiv = useRef<HTMLDivElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState<string | null>();
  const [words, setWords] = useState<IWord[]>();
  const [selectedWord, setSelectedWord] = useState<IWord>();
  const [searchResult, setSearchResults] = useState<IWord[] | undefined>();
  const [isComponentVisible, setIsComponentVisible] = useState<boolean>(true);
  const [cursor, setCursor] = useState<number>(0);
  const downPress = useKeyPress('ArrowDown');
  const upPress = useKeyPress('ArrowUp');
  const enterPress = useKeyPress('Enter');

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = (event: Event) => {
    //@ts-ignore
    if (boxDiv.current && event.target && !boxDiv.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown, true);
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('keydown', handleHideDropdown, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  const changeSearchHandler = () => {
    setCursor(0);
    setIsComponentVisible(true);
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
          if (word?.Farsi?.toLowerCase()?.trim()?.search(searchText.toLowerCase()?.trim()) === 0) {
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

  useEffect(() => {
    if (searchResult?.length && downPress) {
      setCursor((prevState) => (prevState < searchResult?.length - 1 ? prevState + 1 : prevState));
    }
  }, [downPress]);
  useEffect(() => {
    if (searchResult?.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress]);
  useEffect(() => {
    if (searchResult?.length && enterPress) {
      setSelectedWord(searchResult?.[cursor]);
      setIsComponentVisible(false);
    }
  }, [cursor, enterPress]);

  return (
    <>
      <div className="hero">
        <Container className="">
          <div className="search-form" ref={boxDiv}>
            <FormGroup className="custom-search-box">
              <Input
                type="text"
                bsSize="lg"
                placeholder="Type English or Farsi Word"
                onChange={changeSearchHandler}
                innerRef={searchInput}
                onFocus={() => setIsComponentVisible(true)}
              />
              <FontAwesomeIcon icon={faSearch} />
              {search && search?.length > 0 && isComponentVisible && (
                <ul className="search-result">
                  {searchResult && searchResult?.length > 0 ? (
                    searchResult?.map((word: IWord, key: number) => {
                      return (
                        <li
                          key={key}
                          onClick={() => {
                            setSelectedWord(word);
                            setIsComponentVisible(false);
                          }}
                          className={classNames({
                            hover: key === cursor,
                          })}
                          onMouseEnter={() => {
                            setCursor(key);
                          }}
                        >
                          {`${word.English} (${word.Farsi})`}
                        </li>
                      );
                    })
                  ) : (
                    <li className="no_match_found">No match found</li>
                  )}
                </ul>
              )}
            </FormGroup>
          </div>
        </Container>
      </div>

      <Container className="">
        <div className="result-con">
          {selectedWord ? (
            <div className="selected-result">
              <div className="word-title">
                {selectedWord.English}
                {selectedWord.English_Audio && (
                  <span className="audio-icon">
                    <FontAwesomeIcon
                      icon={faVolumeUp}
                      onClick={() => {
                        const audio = new Audio(`english_audio/${selectedWord?.English_Audio}`);
                        audio.play().then(() => {});
                      }}
                    />
                  </span>
                )}
              </div>
              <div className="meaning-box">
                <div className="meaning-label">Meaning in Farsi</div>
                <div className="meaning-title">{selectedWord.Farsi}</div>
                <div className="meaning-pronunciation">
                  <span>{selectedWord.Transliteration}</span>
                  {selectedWord.Farsi_Audio && (
                    <span className="audio-icon">
                      <FontAwesomeIcon
                        icon={faVolumeUp}
                        onClick={() => {
                          const audio = new Audio(`farsi_audio/${selectedWord.Farsi_Audio}`);
                          audio.play().then(() => {});
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
        </div>
      </Container>
    </>
  );
};

export default Search;
