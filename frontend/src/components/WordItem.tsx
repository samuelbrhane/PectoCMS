import React from "react";
import { useNavigate } from "react-router-dom";
import { Word } from "../types/word";
import api from "../api/axiosConfig";

type WordItemProps = Word;

const WordItem: React.FC<WordItemProps> = ({
  id,
  wordFirstLang,
  wordSecondLang,
  sentenceFirstLang,
  sentenceSecondLang,
}) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this word?")) {
      try {
        await api.delete(`words/${id}/`);
        window.location.reload();
      } catch (err) {
        alert(`Failed to delete the word.${err}`);
      }
    }
  };

  return (
    <div className="flex flex-col p-4 border rounded-md shadow-sm bg-white h-full">
      <div className="flex-grow">
        <p>
          <strong>Word:</strong> {wordFirstLang}
        </p>
        {sentenceFirstLang && (
          <p>
            <strong>Example:</strong> {sentenceFirstLang}
          </p>
        )}

        <p>
          <strong>Translation:</strong> {wordSecondLang}
        </p>

        {sentenceSecondLang && (
          <p>
            <strong>Translation Example:</strong> {sentenceSecondLang}
          </p>
        )}
      </div>

      <div className="flex justify-start mt-4 space-x-2">
        <button
          onClick={() => navigate(`/edit/${id}`)}
          className="py-1 bg-blue-500 w-24 text-white rounded-md hover:bg-blue-600 text-center"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="py-1 bg-red-500 w-24 text-white rounded-md hover:bg-red-600 text-center"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default WordItem;
