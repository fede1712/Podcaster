export const EpisodesResume = ({ data }: { data: any }) => {
  return <p className="border shadow-md p-4 font-bold">Episodes: {data.resultCount}</p>;
};
