import React, { useEffect, useState, useRef } from "react";
import api from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";
import { WordItem, SearchBar, Pagination } from ".";
import { Word } from "../types/word";
import { debounce } from "lodash";

const WordList: React.FC = () => {
  const navigate = useNavigate();
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  // Debounce search to reduce API calls during typing
  const debouncedSearch = useRef(
    debounce((query: string, page: number, size: number) => {
      setLoading(true);
      api
        .get(`words/?search=${query}&page=${page}&page_size=${size}`)
        .then((response) => {
          setWords(response.data.results);
          setTotalPages(Math.ceil(response.data.total_items / size));
          setLoading(false);
        })
        .catch(() => {
          setError("Failed to load words.");
          setLoading(false);
        });
    }, 800)
  ).current;

  // Fetch words when searchQuery, page, or pageSize changes
  useEffect(() => {
    debouncedSearch(searchQuery, currentPage, pageSize);
  }, [searchQuery, currentPage, pageSize]);

  // Handle page size change
  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  return loading ? (
    <p>Loading words...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0 md:space-x-4">
        <button
          onClick={() => navigate("/create")}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 w-full md:w-auto"
        >
          ➕ Add New Word
        </button>

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      {words.length ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {words.map((word) => (
              <WordItem
                key={word.id}
                id={word.id}
                wordFirstLang={word.wordFirstLang}
                wordSecondLang={word.wordSecondLang}
                sentenceFirstLang={word.sentenceFirstLang}
                sentenceSecondLang={word.sentenceSecondLang}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            pageSize={pageSize}
            onPageChange={setCurrentPage}
            onPageSizeChange={handlePageSizeChange}
          />
        </>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default WordList;
