import React, { createContext, useContext, useState } from "react";
import { Poem } from "../types/poems";

interface PoemContextProps {
  poems: Poem[];
  addPoem: (poem: Poem) => void;
}

const PoemContext = createContext<PoemContextProps | undefined>(undefined);

export const PoemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [poems, setPoems] = useState<Poem[]>([]);

  const addPoem = (poem: Poem) => {
    setPoems([...poems, poem]);
  };

  return (
    <PoemContext.Provider value={{ poems, addPoem }}>
      {children}
    </PoemContext.Provider>
  );
};

export const usePoems = (): PoemContextProps => {
  const context = useContext(PoemContext);
  if (!context) {
    throw new Error("usePoems must be used within a PoemProvider");
  }
  return context;
};
