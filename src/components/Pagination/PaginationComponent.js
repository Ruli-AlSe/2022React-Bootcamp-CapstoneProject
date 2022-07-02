import * as Styles from "./pagination-styles";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function PaginationComponent({
  totalPages,
  currentPage,
  setCurrentPage,
  products,
}) {
  const pagesArray = [];

  const setNewPage = (e, action) => {
    let newPageNumber = currentPage;
    let stateChanged = false;
    if (action) {
      if (action === "previous" && currentPage > 1) {
        stateChanged = true;
        newPageNumber = currentPage - 1;
      }

      if (action === "next" && currentPage < totalPages) {
        stateChanged = true;
        newPageNumber = currentPage + 1;
      }
    }

    if (e.target.dataset.index !== undefined) {
      stateChanged = true;
      newPageNumber = parseInt(e.target.dataset.index) + 1;
    }

    if (stateChanged) {
      setCurrentPage(newPageNumber);
    }
  };

  for (let i = 0; i < totalPages; i++) {
    pagesArray.push(
      <Styles.ListItem key={i} data-index={i} onClick={setNewPage}>
        <Styles.NumberButton
          data-index={i}
          className={i + 1 === currentPage ? "active" : ""}
        >
          {i + 1}
        </Styles.NumberButton>
      </Styles.ListItem>
    );
  }

  return (
    <Styles.StyledContainer>
      <Styles.ListItem onClick={(e) => setNewPage(e, "previous")}>
        <Styles.Button className={currentPage === 1 ? "disabled" : ""}>
          <FaArrowLeft />
          <span>Previous</span>
        </Styles.Button>
      </Styles.ListItem>
      {pagesArray}
      <Styles.ListItem onClick={(e) => setNewPage(e, "next")}>
        <Styles.Button className={currentPage === totalPages ? "disabled" : ""}>
          <span>Next</span>
          <FaArrowRight />
        </Styles.Button>
      </Styles.ListItem>
    </Styles.StyledContainer>
  );
}
