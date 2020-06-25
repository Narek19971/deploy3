import React, { useState, useCallback, useEffect } from "react";
import {
  Card,
  Frame,
  Layout,
  Page,
  Pagination,
  DataTable,
  Button,
  Banner,
  TextContainer,
  TextField,
  DisplayText,
  FormLayout,
  ButtonGroup,
  ChoiceList,
  Link,
} from "@shopify/polaris";
import { Redirect } from "react-router-dom";
import "./Campaign.css";

export default function Campaign() {
  const [selected, setSelected] = useState(["hidden"]);
  const [clicked, setClick] = useState("false");
  console.log(clicked);
  const handleClick = useCallback(() => setClick(true), []);
  const handleChange = useCallback((value) => setSelected(value), []);
  const initiallySortedRows = [
    ["Emerald Silk Gown", "$875.00", 124689, 140, "$122,500.00"],
    ["Mauve Cashmere Scarf", "$230.00", 124533, 83, "$19,090.00"],
    [
      "Navy Merino Wool Blazer with khaki chinos and yellow belt",
      "$445.00",
      124518,
      32,
      <Button plain>Edit</Button>,
      <Button plain>Delete</Button>,
    ],
  ];
  const rows = initiallySortedRows;

  const actualPageMarkup1 = (
    <Page fullWidth title="New Campaign">
      <Layout>
        <Layout.Section>
          <Card>
            <Card.Section>
              <Banner>
                <p>
                  Stuck for ideas on the what to write. Read our knowledge base
                  articles on <a href="#">Composing and Sending Messages.</a>
                </p>
              </Banner>
              <TextContainer>
                <TextField label="Campaign Name"></TextField>
              </TextContainer>
              <DisplayText size="medium">Write a Message</DisplayText>
              <FormLayout>
                <TextField
                  label="Message"
                  value="{ShopName}: Hi {FirstName}, "
                ></TextField>
              </FormLayout>
              <ButtonGroup>
                <Button>Tags</Button>
                <Button>Emojis</Button>
                <Button>Discounts</Button>
              </ButtonGroup>
              <DisplayText>Pick your Audience</DisplayText>
              <p>
                Target your campaign to a specific audience by adding filters
                below. Read our guide on using filters to target your SMS
                campaign .
              </p>
              <Button primary>Add filter</Button>
              <DisplayText>Scheduling</DisplayText>
              <p>
                Send your SMS campaign now or at a later date. Note that the
                messages being sent will take into consideration your customers'
                time zones.
              </p>
              <ChoiceList
                title="Company name"
                choices={[
                  { label: "Send now", value: "hidden" },
                  { label: "Send later", value: "optional" },
                ]}
                selected={selected}
                onChange={handleChange}
              />
            </Card.Section>
          </Card>
          <ButtonGroup>
            <Button>Save Draft</Button>
            <Button primary>Save & Review</Button>
          </ButtonGroup>
        </Layout.Section>
      </Layout>
    </Page>
  );

  const actualPageMarkup2 = (
    <Page
      fullWidth
      title="Campaigns"
      primaryAction={
        <a href="/New-Campaign">
        <Button primary>
          Create Campaign
        </Button>
        </a>
      }
    >
      <Layout>
        <Layout.Section>
          <Card>
            <DataTable
              columnContentTypes={[
                "text",
                "numeric",
                "numeric",
                "numeric",
                "numeric",
              ]}
              headings={[
                "Campaign Name",
                "Message",
                "Scheduled",
                "Status",
                "Actions",
              ]}
              rows={rows}
              defaultSortDirection="descending"
              initialSortColumnIndex={4}
            />
            <Card.Section>
              <Pagination
                hasPrevious
                onPrevious={() => {
                  console.log("Previous");
                }}
                hasNext
                onNext={() => {
                  console.log("Next");
                }}
              />
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
  return (
  <Frame>{actualPageMarkup2}</Frame>
  )
}
