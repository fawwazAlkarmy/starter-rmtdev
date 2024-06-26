import { useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header, { HeaderTop } from "./Header";
import BookmarksButton from "./BookmarksButton";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import Sidebar, { SidebarTop } from "./Sidebar";
import JobItemContent from "./JobItemContent";
import JobList from "./JobList";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import Sorting from "./SortingControls";
import { useDebounce, useJobItems } from "../lib/hooks";

function App() {
  const [searchText, setSearchText] = useState("");
  const debouncedValue = useDebounce(searchText, 250);
  const { jobItemsSliced, loading, totalNumbersOfResults } =
    useJobItems(debouncedValue);

  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>
        <SearchForm searchText={searchText} setSearchText={setSearchText} />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount totalNumberOfResults={totalNumbersOfResults} />
            <Sorting />
          </SidebarTop>
          <JobList jobItems={jobItemsSliced} isLoading={loading} />
          <PaginationControls />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />
    </>
  );
}

export default App;
