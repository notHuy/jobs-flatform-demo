import React from "react";
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
} from "src/slices/filterJobs";
import { useAppDispatch } from "src/types/redux";

const data = [
  {
    accordionTitle: "Type of employments",
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

const SearchSideBar: React.FC<SearchSideBarProps> = ({ className }) => {
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
  const dispatch = useAppDispatch();
  const filters = useSelector(filterJobsSelectors.selectFilters);
  console.log(filters);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.id);
    const value = event.target.id;
    if (event.target.checked) {
      dispatch(
        filterJobsSliceActions.filterJobs({
          jobTags: filters.jobTags,
          locationTags: filters.locationTags,
          type: value.includes("type")
            ? [...filters.type, value]
            : filters.type,
          level: value.includes("level")
            ? [...filters.level, value]
            : filters.level,
          salary: value.includes("salary")
            ? [...filters.salary, value]
            : filters.salary,
        })
      );
    } else {
      dispatch(
        filterJobsSliceActions.filterJobs({
          jobTags: filters.jobTags,
          locationTags: filters.locationTags,
          type: value.includes("type")
            ? filters.type.filter((i) => i !== value)
            : filters.type,
          level: value.includes("level")
            ? filters.level.filter((i) => i !== value)
            : filters.level,
          salary: value.includes("salary")
            ? filters.salary.filter((i) => i !== value)
            : filters.salary,
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
                  onClick={(e) => {
                    e.stopPropagation();
                    document.getElementById(`${item.id}`)?.click();
                  }}
                >
                  <Checkbox
                    // checked={checked}
                    onChange={handleCheckboxChange}
                    id={`${item.id}`}
                    inputProps={{ "aria-label": "controlled" }}
                    onClick={(e) => {
                      document.getElementById(`${item.id}`)?.click();
                    }}
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
