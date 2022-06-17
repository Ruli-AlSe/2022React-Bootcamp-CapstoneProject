import PropTypes from "prop-types";
import * as Styles from "./sidebar-styles";

export default function SidebarComponent({ categories, setFilters }) {
  const updateFilters = (value, action) => {
    if (action === "add") {
      setFilters((oldFilters) => [...oldFilters, value]);
    } else {
      setFilters((oldFilters) =>
        oldFilters.filter((filter) => filter !== value)
      );
    }
  };

  const getCheckbox = (target) => {
    var elem;
    switch (target.tagName) {
      case "LI":
        elem = target.querySelector("input[type='checkbox']");
        break;
      case "LABEL":
        elem = target.parentElement.querySelector("input[type='checkbox']");
        break;
      default:
        elem = target;
        break;
    }
    return elem;
  };

  const handleClick = (e) => {
    var elem = getCheckbox(e.target);
    elem.checked = !elem.checked;

    if (elem.checked === true) {
      elem.parentElement.classList.add("checked");
      updateFilters(elem.dataset.id, "add");
    } else {
      updateFilters(elem.dataset.id);
      elem.parentElement.classList.remove("checked");
    }
  };

  const categoriesMap = categories.map((category) => (
    <Styles.ListItem
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
        defaultChecked={false}
      />
    </Styles.ListItem>
  ));

  return (
    <Styles.FiltersWrapper>
      <h3>Filters</h3>
      <Styles.FiltersContainer>{categoriesMap}</Styles.FiltersContainer>
    </Styles.FiltersWrapper>
  );
}

SidebarComponent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
