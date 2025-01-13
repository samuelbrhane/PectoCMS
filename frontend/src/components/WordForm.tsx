import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axiosConfig";
import { Word } from "../types/word";

const WordForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Determine if the form is for editing or creating
  const isEditMode = Boolean(id);

  const [word, setWord] = useState<Word>({
    wordFirstLang: "",
    sentenceFirstLang: "",
    wordSecondLang: "",
    sentenceSecondLang: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Fetch existing word data if in edit mode
  useEffect(() => {
    if (isEditMode) {
      setLoading(true);
      api
        .get(`words/${id}/`)
        .then((response) => {
          setWord(response.data);
          setLoading(false);
        })
        .catch(() => {
          setError("Failed to load word.");
          setLoading(false);
        });
    }
  }, [id]);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setWord({ ...word, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const request = isEditMode
      ? api.put(`words/${id}/`, word)
      : api.post("words/", word);

    request
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        alert(`Failed to ${isEditMode ? "update" : "create"} word.`);
      });
  };

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">
        {isEditMode ? "Edit Word" : "Add New Word"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="wordFirstLang"
          value={word.wordFirstLang}
          onChange={handleChange}
          placeholder="Word in First Language"
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="wordSecondLang"
          value={word.wordSecondLang}
          onChange={handleChange}
          placeholder="Translation"
          className="w-full p-2 border rounded-md"
          required
        />
        <textarea
          name="sentenceFirstLang"
          value={word.sentenceFirstLang}
          onChange={handleChange}
          placeholder="Example Sentence (First Language)"
          className="w-full p-2 border rounded-md"
        />
        <textarea
          name="sentenceSecondLang"
          value={word.sentenceSecondLang}
          onChange={handleChange}
          placeholder="Example Sentence (Second Language)"
          className="w-full p-2 border rounded-md"
        />
        <div className="flex space-x-4 mt-4 w-full">
          <button
            type="submit"
            className="flex-1 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            {isEditMode ? "Save Changes" : "Create Word"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex-1 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default WordForm;
