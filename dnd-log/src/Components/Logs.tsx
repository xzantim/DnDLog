import * as React from "react";
import * as data from "../Content/Logs.json";
import DescriptionText from "./DescriptionText.tsx";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export default function LogBookComponent() {
  const records = JSON.parse(JSON.stringify(data));
  return (
    <ul style={{ padding: "0px", margin: "0px" }}>
      {records.logs.map((item) => (
        <LogListItem key={item.logId} record={item} />
      ))}
    </ul>
  );
}

function LogListItem(props) {
  const record = props.record;
  const description = DescriptionText(record);
  return (
    <div>
      <Accordion>
        <AccordionSummary
          aria-controls="panel-content"
          id="panel-header"
          sx={{
            "&.Mui-expanded": {
              minHeight: 0,
              "& .MuiAccordionSummary-content.Mui-expanded": {
                margin: "12px 0",
              },
            },
            "&:hover": {
              bgcolor: "#1e3cd4", // use summary hover background

              color: "success.light", // use summary hover color

              "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
                color: "success.light",
              }, // use summary hover icon color
            },
          }}
        >
          <Typography align="center" sx={{ width: "100%" }}>
            {record.title} : {record.location}{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align="center" sx={{ width: "100%" }}>
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
