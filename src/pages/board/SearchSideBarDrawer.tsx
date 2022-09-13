import React from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

import {
  Paper,
  Divider,
  Accordion,
  Button,
  AccordionSummary,
  ListItemButton,
  Typography,
  Checkbox,
  InputLabel,
  List,
} from "src/components";
import { SearchIcon, ExpandMoreIcon, NewspaperIcon } from "src/components/Icon";

const data = [
  {
    accordionTitle: "Type of employments",
    types: [
      {
        id: "typeFullTime",
        name: "Full time",
      },
      {
        id: "typePartTime",
        name: "Part time",
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

const SearchSideBar: React.FC = () => {
  return (
    <Paper
      square={false}
      className="board__searchSideBarContainer custom-paper-elevation"
    >
      <Paper square={false} className="board__searchSideBarPaper" elevation={0}>
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
                    // onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                    id={`${item.id}`}
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
