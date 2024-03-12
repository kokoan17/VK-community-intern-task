import styles from "./Filters.module.css";
import { colorsArray } from "../../helpers";
import { useState } from "react";
import classNames from "class-names";
import useDispatch from "../../utils/hooks/useDispatch";
import { loadGroupList } from "../../redux/actions";

const Filters = () => {
  const dispatch = useDispatch();
  const [activeColorsFilters, setActiveColorsFilters] = useState([]);

  const filters = colorsArray();

  const privacyTypes = ["all", "open", "close"];
  const [activePrivacyFilters, setActivePrivacyFilters] = useState("all");

  const [isChecked, setIsChecked] = useState(false);

  const handleClickForColor = (filter) => {
    if (activeColorsFilters.includes(filter)) {
      setActiveColorsFilters(
        activeColorsFilters.filter((item) => item !== filter)
      );
    } else {
      setActiveColorsFilters([...activeColorsFilters, filter]);
    }
  };

  const handleClickForPrivacy = (filter) => {
    setActivePrivacyFilters(filter);
  };

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
  };

  const applyClick = () => {
    dispatch(
      loadGroupList(activePrivacyFilters, activeColorsFilters, isChecked)
    );
  };

  return (
    <>
      <div className={styles.filters_block}>
        <div className={styles.filters}>
          {filters.map((elem) => (
            <div
              key={elem}
              className={
                activeColorsFilters.includes(elem)
                  ? classNames(
                      styles.filters__item,
                      styles.filters__item__active
                    )
                  : styles.filters__item
              }
              onClick={() => handleClickForColor(elem)}
            >
              {elem}
            </div>
          ))}
        </div>
        <div className={styles.filters}>
          {privacyTypes.map((elem) => (
            <div
              key={elem}
              className={
                activePrivacyFilters.includes(elem)
                  ? classNames(
                      styles.filters__item,
                      styles.filters__item__active
                    )
                  : styles.filters__item
              }
              onClick={() => handleClickForPrivacy(elem)}
            >
              {elem}
            </div>
          ))}
        </div>
        <div className={styles.toggle_switch}>
          with friends
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleToggle}
            />
            <span className={classNames(styles.slider, styles.round)}></span>
          </label>
        </div>
      </div>
      <div className={styles.filters__btn}>
        <button onClick={() => applyClick()}>apply</button>
      </div>
    </>
  );
};

export default Filters;
