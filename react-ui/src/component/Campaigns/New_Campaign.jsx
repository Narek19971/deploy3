import React, { useState, useCallback, useEffect } from "react";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import "./Campaign.css";
import {
  Card,
  Frame,
  Layout,
  Page,
  Button,
  Banner,
  TextContainer,
  TextField,
  DisplayText,
  FormLayout,
  ButtonGroup,
  ChoiceList,
  Link,
  ProgressBar,
  Tooltip,
  Popover,
  ActionList,
  Select,
} from "@shopify/polaris";
import "./Campaign.css";

export default function Campaign() {
 let myRef = React.createRef();
  const options = [
    { label: "Select Type", value: "Select Type" },
    { label: "Country", value: "Country" },
    { label: "Ordered", value: "Ordered" },
    { label: "Order Count", value: "Order Count" },
    { label: "Total Spent", value: "Total Spent" },
    { label: "Tag", value: "Tag" },
  ];
  const options1 = [
    { label: "Select Operator", value: "Select Operator" },
    { label: "Equals", value: "Equals" },
    { label: "Not Equals", value: "Not Equals" },
    { label: "Greater Than", value: "Greater Than" },
    { label: "Less Than", value: "Less Than" },
    { label: "Greater or Equal To", value: "Greater or Equal To" },
    { label: "Less or Equal To", value: "Less or Equal To" },
  ];
  const [selected1, setSelected1] = useState("newestUpdate");
  const [selected2, setSelected2] = useState("newestUpdate");
  let [selectedoption, setSelectedOption] = useState(false);
  let [selectedoptionordered, setSelectedOptionOrdered] = useState(false);
  let [selectedoptionordercount, setSelectedOptionOrderCount] = useState(false);
  let [selectedoptiontotalspent, setSelectedOptionTotalSpent] = useState(false);
  let [selectedoptiontag, setSelectedOptionTag] = useState(false);
  const handleSelectChange = useCallback((value) => {
    setSelected1(value);
    if (value === "Country") {
      setSelectedOptionOrdered((selectedoptionordered = false));
      setSelectedOptionOrderCount((selectedoptionordercount = false));
      setSelectedOptionTotalSpent((selectedoptiontotalspent = false));
      setSelectedOptionTag((selectedoptiontag = false));
      setSelectedOption(!selectedoption);
    }
    if (value === "Ordered") {
      setSelectedOption((selectedoption = false));
      setSelectedOptionOrderCount((selectedoptionordercount = false));
      setSelectedOptionTotalSpent((selectedoptiontotalspent = false));
      setSelectedOptionTag((selectedoptiontag = false));
      setSelectedOptionOrdered(!selectedoptionordered);
    }
    if (value === "Order Count") {
      setSelectedOption((selectedoption = false));
      setSelectedOptionOrdered((selectedoptionordered = false));
      setSelectedOptionTotalSpent((selectedoptiontotalspent = false));
      setSelectedOptionTag((selectedoptiontag = false));
      setSelectedOptionOrderCount(!selectedoptionordercount);
    }
    if (value === "Total Spent") {
      setSelectedOption((selectedoption = false));
      setSelectedOptionOrderCount((selectedoptionordercount = false));
      setSelectedOptionOrdered((selectedoptionordered = false));
      setSelectedOptionTag((selectedoptiontag = false));
      setSelectedOptionTotalSpent(!selectedoptiontotalspent);
    }
    if (value === "Tag") {
      setSelectedOption((selectedoption = false));
      setSelectedOptionOrderCount((selectedoptionordercount = false));
      setSelectedOptionOrdered((selectedoptionordered = false));
      setSelectedOptionTotalSpent((selectedoptiontotalspent = false));
      setSelectedOptionTag(!selectedoptiontag);
    }
    if (value === "Select Type") {
      setSelectedOption((selectedoption = false));
      setSelectedOptionOrderCount((selectedoptionordercount = false));
      setSelectedOptionOrdered((selectedoptionordered = false));
      setSelectedOptionTotalSpent((selectedoptiontotalspent = false));
      setSelectedOptionTag((selectedoptiontag = false));
    }
  }, []);
  const handleSelectChange2 = useCallback((value) => {
    setSelected2(value);
  }, []);
  const handleSelectOption = useCallback((selectedoption) => {
    setSelectedOption(!selectedoption);
  });

  const [popoverActive, setPopoverActive] = useState(false);
  const [addfilterpopoverActive, setAddFilterPopoverActive] = useState(false);
  const [active, setActive] = useState(true);
  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    []
  );
  const toggleAddFilterPopoverActive = useCallback(
    () =>
      setAddFilterPopoverActive(
        (addfilterpopoverActive) => !addfilterpopoverActive
      ),
    []
  );
  const [selected, setSelected] = useState(["hidden"]);
  const [clicked, setClick] = useState("false");
  const [showemoji, setShowEmoji] = useState(false);
  let [showfilter, setShowFilter] = useState(false);
  let [data, setData] = useState([0]);
  let [value, setValue] = useState("Hi {FirstName}, great news! Your order from {ShopName} has been shipped with {ShippingCompany}.");
  const handleChangeValue = e => {
    setValue(e.target.value)
  }
  const ShowFilter = useCallback(() => setShowFilter((showfilter) => showfilter=true),
  useCallback(() => setData((data) => [...data])),
    []
  );
  const closeFilter = useCallback(
    () => setShowFilter((showfilter) => (showfilter = 0)),
    []
  );
  const ShowEmoji = useCallback(
    () => setShowEmoji((showemoji) => !showemoji),
    []
  );
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

  const activator = <Button onClick={togglePopoverActive}>Tags</Button>;
  const activator2 = (
    <TextField
      label="Countries"
      onFocus={toggleAddFilterPopoverActive}
    ></TextField>
  );

  const addMoreFilter = () =>{
    
  }

  const addFilter = () => {
    data.push(1)
    return (
      <div className="add-filter">
        <div>
          <div style={{ float: "right" }}>
            <Button plain onClick={closeFilter}>
              ×
            </Button>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: "1 1 0%", padding: "10px" }}>
              <div>
                <label>Filter</label>
                <Select
                  labelInline
                  value={selected1}
                  options={options}
                  onChange={handleSelectChange}
                />
              </div>
            </div>
            <div style={{ flex: "1 1 0%", padding: "10px" }}>
              <div>
                <label>Operator</label>
                <Select
                  labelInline
                  value={selected2}
                  options={options1}
                  onChange={handleSelectChange2}
                />
              </div>
            </div>
            <div style={{ width: "500px", padding: "10px" }}>
              {selectedoption && (
                <Popover
                  active={addfilterpopoverActive}
                  activator={activator2}
                  onClose={toggleAddFilterPopoverActive}
                >
                  <ActionList
                    items={[
                      { content: "Frist Name" },
                      { content: "Last Name" },
                      { content: "Country" },
                      { content: "City" },
                      { content: "Province" },
                      { content: "Full Address" },
                      { content: "Shop Name" },
                      { content: "Shop Url" },
                      { content: "Discount Code" },
                    ]}
                  />
                </Popover>
              )}
              {selectedoptionordered && <Select label="Value"></Select>}
              {selectedoptionordercount && (
                <TextField label="Value"></TextField>
              )}
              {selectedoptiontotalspent && (
                <TextField label="Value"></TextField>
              )}
              {selectedoptiontag && (
                <TextField label="Customer Tags"></TextField>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const addEmoji = e =>{
    let emoji = e.native;
    setValue(value+emoji)
  }

  const actualPageMarkup1 = (
    <Page fullWidth title="New Campaign">
      <Layout>
        <Layout.Section>
          <Card>
            <Card.Section>
              <Banner>
                <p>
                  Stuck for ideas on the what to write. Read our knowledge base
                  articles on{" "}
                  <Link url="">Composing and Sending Messages.</Link>
                </p>
              </Banner>
              <br />
              <TextContainer>
                <TextField label="Campaign Name"></TextField>
              </TextContainer>
              <br />
              <DisplayText size="medium">Write a Message</DisplayText>
              <br />
              <FormLayout>
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", right: "0px" }}>
                    <Tooltip content="These are estimated figures only and are based on the preview on the right, which includes personalization and opt-out text.">
                      <Link>54 /160 (1 Chargeable SMS)</Link>
                    </Tooltip>
                  </div>
                  <TextField
                    label="Message"
                    value={value}
                    onChange={( e ) => setValue(e)}
                    ref={myRef}
                  ></TextField>
                </div>
              </FormLayout>
              <br />
              <div className="button_progress">
                <ButtonGroup>
                  <Popover
                    active={popoverActive}
                    activator={activator}
                    onClose={togglePopoverActive}
                  >
                    <ActionList
                      items={[
                        { content: "Frist Name" },
                        { content: "Last Name" },
                        { content: "Country" },
                        { content: "City" },
                        { content: "Province" },
                        { content: "Full Address" },
                        { content: "Shop Name" },
                        { content: "Shop Url" },
                        { content: "Discount Code" },
                      ]}
                    />
                  </Popover>
                  <Button onClick={ShowEmoji}>Emojis</Button>
                  <Button>Discounts</Button>
                </ButtonGroup>

                <div className="message-strength-container">
                  <span className="messageStrength">
                    <div className="progress_container">
                      Message Strength
                      <span className="span_Strong">Low</span>
                    </div>
                    <ProgressBar progress={35} size="small"></ProgressBar>
                  </span>
                </div>
              </div>
              <br />
              <DisplayText>Pick your Audience</DisplayText>
              <p>
                Target your campaign to a specific audience by adding filters
                below. Read our guide on using filters to target your SMS
                campaign .
              </p>
              <br />
              {showfilter && addFilter()}
              <Button primary onClick={ShowFilter}>
                Add filter
              </Button>
              <br />
              <DisplayText>Scheduling</DisplayText>
              <p>
                Send your SMS campaign now or at a later date. Note that the
                messages being sent will take into consideration your customers'
                time zones.
              </p>
              <br />
              <ChoiceList
                choices={[
                  { label: "Send now", value: "hidden" },
                  { label: "Send later", value: "optional" },
                ]}
                selected={selected}
                onChange={handleChange}
              />
            </Card.Section>
          </Card>
          <br />
          <ButtonGroup>
            <Button>Save Draft</Button>
            <Button primary>Save & Review</Button>
          </ButtonGroup>
        </Layout.Section>
      </Layout>
      {showemoji && (
        <div className="polaris-emoji-mart">
          <FormLayout>
            <Picker onSelect={addEmoji}/>
          </FormLayout>
        </div>
      )}
      <div style={{ paddingBottom: "100px" }}></div>
    </Page>
  );

  return <Frame>{actualPageMarkup1}</Frame>;
}
