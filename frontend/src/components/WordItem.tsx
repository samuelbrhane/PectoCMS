import React from "react";
import { useNavigate } from "react-router-dom";
import { Word } from "../types/word";

interface WordItemProps extends Word {}

const WordItem: React.FC<WordItemProps> = ({
  id,
  wordFirstLang,
  wordSecondLang,
  sentenceFirstLang,
  sentenceSecondLang,
}) => {
  const navigate = useNavigate();

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
      <button
        onClick={() => navigate(`/edit/${id}`)}
        className="mt-4 w-36 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center"
      >
        Edit
      </button>
    </div>
  );
};

export default WordItem;
