import useFetch from "./useFetch";

export default function FetchComments() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/comments/1");
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <div>
      <h1>Data: </h1>
      {JSON.stringify(data)}
    </div>
  );
}
