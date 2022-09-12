import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Paper,
  Divider,
  Accordion,
  AccordionSummary,
  ListItemButton,
  Typography,
  Checkbox,
  List,
} from "src/components";
import { ExpandMoreIcon } from "src/components/Icon";
import {
  filterJobsSliceActions,
  filterJobsSelectors,
  TypeFilter,
} from "src/slices/filterJobs";
import { useAppDispatch } from "src/types/redux";

type TypeCategoryItem = {
  id: string;
  name: string;
};

type TypeCategory = {
  accordionTitle: string;
  type: string;
  types: TypeCategoryItem[];
};

const data: TypeCategory[] = [
  {
    accordionTitle: "Type of employments",
    type: "type",
    types: [
      {
        id: "typeFullTime",
        name: "Full Time",
      },
      {
        id: "typePartTime",
        name: "Part Time",
      },
      {
        id: "typeRemote",
        name: "Remote",
      },
      {
        id: "typeInternship",
        name: "Internship",
      },
      {
        id: "typeFreelance",
        name: "Freelance",
      },
    ],
  },
  {
    accordionTitle: "Seniority Level",
    type: "level",
    types: [
      {
        id: "levelStudent",
        name: "Student",
      },
      {
        id: "levelEntry",
        name: "Entry level",
      },
      {
        id: "levelMid",
        name: "Mid level",
      },
      {
        id: "levelDirector",
        name: "Director",
      },
      {
        id: "levelVP",
        name: "VP and above",
      },
    ],
  },
  {
    accordionTitle: "Salary range",
    type: "salary",
    types: [
      {
        id: "salary7001200",
        name: "$700- $1200",
      },
      {
        id: "salary12003000",
        name: "$1200- $3000",
      },
      {
        id: "salary30005000",
        name: "$3000- $5000",
      },
      {
        id: "salaryabove5000",
        name: "$5000 and above",
      },
    ],
  },
];

interface SearchSideBarProps {
  className: string;
}

const DividerWrapper = styled(Divider)(
  () => `
          &{
            background: rgba(34, 51, 84, 0.1);
          //   color: rgb(34, 51, 84);
             margin: 18px;
            width: 1px;
            }
          `
);

const SearchSideBar: React.FC<SearchSideBarProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const filters = useSelector(filterJobsSelectors.selectFilters);
  console.log(filters);
  const generateDispatchItem = (
    value: string,
    groupName: string,
    filters: {
      [key: string]: string[];
    }
  ) => {
    if (value.includes(groupName)) {
      console.log("here1");
      if (filters[groupName].length > 0) {
        console.log("here2");
        return filters[groupName].filter((i) => i !== value);
      } else {
        console.log("here3");
        return [];
      }
    } else {
      console.log("here4");
      return filters[groupName];
    }
  };
  const handleCheckboxChange = (event: any) => {
    const [type, value] = event.target.id.split("_");
    console.log(event);
    console.log(type);
    console.log(value);
    const isChecked = filters[type as TypeFilter].includes(value);
    console.log(isChecked);
    if (!isChecked) {
      dispatch(
        filterJobsSliceActions.filterJobs({
          [type]: [...filters[type as TypeFilter], value],
        })
      );
    } else {
      dispatch(
        filterJobsSliceActions.filterJobs({
          [type]: [...filters[type as TypeFilter]].filter(
            (item) => item !== value
          ),
        })
      );
    }
  };
  return (
    <Paper square={false} className={className}>
      <Paper
        square={false}
        className="board__searchSideBarPaper custom-paper-elevation"
        elevation={0}
      >
        {data.map((category) => (
          <Accordion
            disableGutters
            className="board__searchSideBarAccordionGroup__accordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              className="board__searchSideBarAccordionGroup__accordionSummary"
            >
              <Typography
                component="h5"
                className="board__searchSideBarAccordionGroup__accordionTitle"
              >
                {category.accordionTitle}
              </Typography>
            </AccordionSummary>
            <List>
              {category.types.map((item) => (
                <ListItemButton
                  className="board__searchSideBar__listItemButton"
                  // id={`${category.type}_${item.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    document
                      .getElementById(`${category.type}_${item.id}`)
                      ?.click();
                  }}
                >
                  <Checkbox
                    checked={filters[category.type as TypeFilter].includes(
                      item.id
                    )}
                    onClick={handleCheckboxChange}
                    id={`${category.type}_${item.id}`}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <Typography className="board__searchSideBar__itemName">
                    {item.name}
                  </Typography>
                  <span className="board__searchSideBar__totalNumber">12</span>
                </ListItemButton>
              ))}
            </List>
          </Accordion>
        ))}
      </Paper>
    </Paper>
  );
};

export default SearchSideBar;
