import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { faqs } from "../constants/faqs";
import Box from "@material-ui/core/Box";

const StyledAccordion = withStyles((theme) => ({
  root: {
    border: "none",
    boxShadow: "none",
    "&::before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
}))(Accordion);

const StyledAccordionSummary = withStyles((theme) => ({
  root: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row-reverse",
    "&$expanded": {
      minHeight: 48,
    },
  },
  content: {
    marginLeft: theme.spacing(1),
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expandIcon: {
    marginRight: theme.spacing(1),
    "&$expanded": {
      transform: "rotate(180deg)",
    },
  },
  expanded: {},
}))(AccordionSummary);

const StyledAccordionDetails = withStyles((theme) => ({
  root: {
    padding: "0px 72px",
  },
}))(AccordionDetails);

export default function FAQs() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box id="faqs" style={{ margin: 16 }}>
      <Typography
        variant="h4"
        component="h3"
        gutterBottom
        style={{ fontWeight: 700, marginTop: 16, marginBottom: 16 }}
      >
        FAQs
      </Typography>
      {faqs.map((faq) => (
        <StyledAccordion
          key={faq.id}
          expanded={expanded === `panel${faq.id}`}
          onChange={handleChange(`panel${faq.id}`)}
        >
          <StyledAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${faq.id}d-content`}
            id={`panel${faq.id}d-header`}
          >
            <Typography
              style={{ fontSize: 16, fontWeight: 600, textAlign: "left" }}
            >
              {faq.question}
            </Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography style={{ textAlign: "left" }}>{faq.answer}</Typography>
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </Box>
  );
}
