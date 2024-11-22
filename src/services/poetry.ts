import { Poem } from "../types/poems";

export const getPoems = async (): Promise<Poem[]> => {
  try {
    const response = await fetch("https://poetrydb.org/poemcount/20");

    if (!response.ok) {
      throw new Error("Error fetching poems: " + response.statusText);
    }

    const data = await response.json();

    return data.map((poem: any) => ({
      id: poem.id, 
      title: poem.title,
      author: poem.author,
      lines: poem.lines,
      linecount: poem.linecount,
    }));
  } catch (error) {
    console.error("Error fetching poems:", error);
    throw new Error("Could not fetch poems.");
  }
};


