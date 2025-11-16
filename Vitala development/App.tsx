
import React from 'react';
import Chat from './components/Chat';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl h-full flex flex-col">
          <Chat />
        </div>
      </main>
    </div>
  );
};

export default App;
