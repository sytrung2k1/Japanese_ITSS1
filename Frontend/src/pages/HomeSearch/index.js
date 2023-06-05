import DefaultLayout from "../../components/Layouts/DefaultLayout";
import Search from "../../components/Search";

function HomeSearch() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--background)" }}>
      <DefaultLayout content={<Search />}></DefaultLayout>;
    </div>
  );
}

export default HomeSearch;
