import PropTypes from "prop-types";
import { FaTimesCircle } from "react-icons/fa";
import * as Styles from "./sidebar-styles";

export default function SidebarComponent({
  categories,
  setFilters,
  filters,
  setCurrentPage,
}) {
  const updateFilters = (value, action) => {
    if (action === "add") {
      setFilters((oldFilters) => [...oldFilters, value]);
    } else {
      setFilters((oldFilters) =>
        oldFilters.filter((filter) => filter !== value)
      );
    }

    setCurrentPage(1);
  };

  const getCheckbox = (target) => {
    var obj;
    switch (target.tagName) {
      case "LI":
        obj = [target.querySelector("input[type='checkbox']"), "li"];
        break;
      case "LABEL":
        obj = [
          target.parentElement.querySelector("input[type='checkbox']"),
          "label",
        ];
        break;
      default:
        obj = [target, "checkbox"];
        break;
    }
    return obj;
  };

  const handleClick = (e) => {
    var [elem, targetType] = getCheckbox(e.target);
    if (targetType !== "checkbox") {
      elem.checked = !elem.checked;
    }

    elem.checked === true
      ? updateFilters(elem.dataset.id, "add")
      : updateFilters(elem.dataset.id);
  };

  const handleClearFilters = () => {
    setFilters([]);
  };

  const handleOnChange = (e) => {
    handleClick(e);
  };

  const categoriesMap = categories.map((category) => (
    <Styles.ListItem
      className={filters.includes(category.id) ? "checked" : ""}
      onClick={(e) => handleClick(e)}
      htmlFor={category.data.name}
      key={category.id}
    >
      <Styles.Label name={category.data.name} htmlFor={category.data.name}>
        {category.data.name}
      </Styles.Label>
      <Styles.CheckBox
        type="checkbox"
        data-id={category.id}
        name={category.data.name}
        checked={filters.includes(category.id)}
        onChange={handleOnChange}
      />
    </Styles.ListItem>
  ));

  return (
    <Styles.FiltersWrapper>
      <h3>Filters</h3>
      {filters.length > 0 && (
        <Styles.ClearFiltersBtn onClick={handleClearFilters}>
          Clear Filters
          <FaTimesCircle />
        </Styles.ClearFiltersBtn>
      )}
      <Styles.FiltersContainer>{categoriesMap}</Styles.FiltersContainer>
    </Styles.FiltersWrapper>
  );
}

SidebarComponent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
