import React from "react";
import { Link, useParams, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

import {
  Box,
  List,
  ListSubheader,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "src/components";
import { ExpandMoreIcon } from "src/components/Icon";
import { AccordionGroupData } from "src/data/data";
import CustomIcon from "src/components/CustomIcon";

const AccordionSummaryWrapper = styled(AccordionSummary)(
  () => `
        &{
          .MuiAccordionSummary-expandIconWrapper{
            color: rgba(255, 255, 255, 0.7);
          }
          color: rgba(255, 255, 255, 0.7);
          border-radius: 10px;
        }
        &.MuiAccordion-root::before {
          content: none;
        }
        &:hover{
          background-color: rgba(255, 255, 255, 0.06);
          color: rgb(255, 255, 255);
        
        }
        &.Mui-expanded {
          min-height: 48px;
          background-color: rgba(255, 255, 255, 0.06); 
          color: rgb(255, 255, 255);
        }
        .MuiAccordionSummary-content{ 
          align-items: center;
        }
        .MuiAccordionSummary-content.Mui-expanded {
          margin: 12px 0;
        }
    `
);

const ListWrapper = styled(List)(
  () => `
       &{
        a{
        text-decoration: none;
        }
       }
    `
);

const AccordionDetailsWrapper = styled(AccordionDetails)(
  () => `
        &{
          padding: 1rem;
          // padding-left: 2.5rem;
          color: rgba(255, 255, 255, 0.7);
          border-radius: 10px;   
          text-decoration: none;   
          font-weight: bold;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
        } 
        &:hover{
          background-color: rgba(255, 255, 255, 0.06);
          color: rgb(255, 255, 255);
          &::before{
            transform: scale(1);
            opacity: 1;
          }
        }
        &::before{
          content: "";
          background: rgb(255, 255, 255);
          opacity: 0;
          transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          width: 6px ;
          height: 6px;
          transform: scale(0);
          transform-origin: center center;  
          border-radius: 40px;
          margin-right: 15px;
          display: inline-block;
        }
    `
);

const AccordionGroup: React.FC = () => {
  const params = useParams();
  console.log(params);
  console.log("side bar accordion group render");
  return (
    <Box className="sideBar__AccordionGroup__container">
      {AccordionGroupData.map(({ id, subHeader, accordion }) => (
        <Box className="sideBar__AccordionGroup__component" key={id}>
          <ListSubheader className="sideBar__AccordionGroup__ListSubheader">
            {subHeader}
          </ListSubheader>
          {accordion.map((acc) => (
            <Accordion
              disableGutters
              className="sideBar__AccordionGroup__accordion"
              elevation={0}
            >
              <AccordionSummaryWrapper
                expandIcon={
                  acc.accordionItem.length !== 0 && <ExpandMoreIcon />
                }
                aria-controls="panel1a-content"
              >
                <CustomIcon
                  name={acc.accordionIcon}
                  className="sideBar__AccordionGroup__icon"
                />
                <Typography className="sideBar__AccordionGroup__title">
                  {acc.accordionTitle}
                </Typography>
              </AccordionSummaryWrapper>
              {acc.accordionItem.length !== 0 && (
                <ListWrapper>
                  {acc.accordionItem.map((item) => (
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        isActive ? "accordionItemActive" : undefined
                      }
                    >
                      <AccordionDetailsWrapper>
                        {item.name}
                      </AccordionDetailsWrapper>
                    </NavLink>
                  ))}
                </ListWrapper>
              )}
            </Accordion>
          ))}
        </Box>
      ))}
    </Box>
  );
};
export default AccordionGroup;
