import React from "react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <input
      type="text"
      placeholder="Search words or phrases..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full md:w-80 lg:w-96 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchBar;
