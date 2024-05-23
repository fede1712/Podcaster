import { Podcast } from "@/app/types";

export const Filter = ({
  data,
  results,
  setResults,
  setSearch,
  search,
}: {
  data: Podcast[];
  results: Podcast[];
  setResults: (result: Podcast[]) => void;
  setSearch: (search: string) => void;
  search: string;
}) => {
  const handleSearch = (value: string) => {
    setSearch(value);
    if (search.length > 0) {
      const filteredResults = data.filter((podcast: Podcast) => {
        if (
          podcast["im:name"].label.toLowerCase().includes(value.toLowerCase()) ||
          podcast["im:artist"].label.toLowerCase().includes(value.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
      setResults(filteredResults);
    }
  };

  return (
    <div className="flex justify-end m-14" data-testId="filter">
      <div className="bg-cyan-600 rounded-md p-2 m-2">
        <p className="text-white">{results.length}</p>
      </div>
      <input type="text" placeholder="Filter podcast..." className="p-2 border rounded-md" onChange={(e) => handleSearch(e.target.value)} />
    </div>
  );
};
