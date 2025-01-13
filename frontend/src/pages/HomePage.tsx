import React from "react";
import { WordList } from "../components";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">PectoCMS - Words Manager</h1>
      </header>
      <main className="p-6">
        <WordList />
      </main>
    </div>
  );
};

export default HomePage;
