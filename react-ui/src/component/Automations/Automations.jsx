import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Frame,
  Layout,
  Page,
  Banner,
  TextContainer,
  Heading,
  FormLayout,
  TextField,
  ChoiceList,
  Select,
  Button,
  Modal,
  ButtonGroup,
  Stack,
  ProgressBar,
  Tooltip,
  TextStyle,
} from "@shopify/polaris";
import "./Automations.css";

export default function Automation() {
  const [active, setActive] = useState(false);
  const handleChange = useCallback(() => setActive(!active), [active]);
  const options1 = [
    { label: "5 minutes", value: "5 minutes" },
    { label: "10 minutes", value: "10 minutes" },
    { label: "20 minutes", value: "20 minutes" },
    { label: "30 minutes", value: "30 minutes" },
    { label: "60 minutes", value: "60 minutes" },
    { label: "3 hours", value: "3 hours" },
    { label: "6 hours", value: "6 hours" },
    { label: "12 hours", value: "12 hours" },
    { label: "24 hours", value: "24 hours" },
    { label: "48 hours", value: "48 hours" },
  ];
  const options2 = [
    { label: "1 months", value: "1 months" },
    { label: "2 months", value: "2 months" },
    { label: "3 months", value: "3 months" },
    { label: "4 months", value: "4 months" },
    { label: "5 months", value: "5 months" },
    { label: "6 months", value: "6 months" },
    { label: "9 months", value: "9 months" },
    { label: "12 months", value: "12 months" },
  ];

  const actualPageMarkup = (
    <Page title="Automations">
      <Layout>
        <Layout.Section>
          <Card>
            <Card.Section>
              <Banner>
                <p>
                  Need help configuring your Automations? Read our article
                  Enable and Configure Text Automations.
                </p>
              </Banner>
              <TextContainer>
                <Heading>Abandoned Cart Recovery</Heading>
                <p>
                  To recover your abandoned carts, we recommend sending two
                  reminders. We've set them up for
                  <br /> you below. Feel free to update them to suit your needs.
                </p>
              </TextContainer>
              <TextContainer>
                <Heading>
                  Sends a message to a customer that abandoned their cart
                </Heading>
                <FormLayout>
                  <FormLayout.Group>
                    <ChoiceList
                      allowMultiple
                      choices={[
                        {
                          label: "Enabled",
                          value: "shipping",
                        },
                      ]}
                      selected=""
                      onChange=""
                    />
                    <Select label="Delay" options={options1} />
                  </FormLayout.Group>

                  <Button plain textAlign="left" onClick={handleChange}>
                    <div className="text_button">
                      <div className="text_button_color">
                        "{"ShopName"}": Hi {"FirstName"}, we noticed there were
                        some items left in your shopping cart. If you're ready
                        to complete your order, we saved your cart here{" "}
                        {"CheckoutUrl"}
                      </div>
                    </div>
                  </Button>
                  <TextStyle variation="strong">
                    No discount configured
                  </TextStyle>

                  <Modal
                    open={active}
                    title="Edit Message"
                    onClose={handleChange}
                    large={true}
                  >
                    <Modal.Section>
                      <Banner>
                        <p>
                          Stuck for ideas on the what to write. Read our
                          knowledge base articles on{" "}
                          <Link url="">Composing and Sending Messages.</Link>
                        </p>
                      </Banner>
                      <br />
                      <br />
                      <FormLayout>
                        <div style={{ position: "relative" }}>
                          <div style={{ position: "absolute", right: "0px" }}>
                            <Tooltip content="These are estimated figures only and which includes personalization and opt-out text.">
                              <Link>170 /306 (2 Chargeable SMS)</Link>
                            </Tooltip>
                          </div>
                          <TextField
                            label="Message"
                            value="Hi {FirstName}, great news! Your order from {ShopName} has been shipped with {ShippingCompany}. 📦😍"
                          ></TextField>
                        </div>
                      </FormLayout>
                      <br />
                      <div className="button_progress">
                        <ButtonGroup>
                          <Button>Tags</Button>
                          <Button>Emojis</Button>
                          <Button>Discounts</Button>
                        </ButtonGroup>
                        <div className="message-strength-container">
                          <span className="messageStrength">
                            <div className="progress_container">
                              Message Strength
                              <span className="span_Strong">Strong</span>
                            </div>
                            <ProgressBar
                              progress={100}
                              size="small"
                            ></ProgressBar>
                          </span>
                        </div>
                      </div>
                    </Modal.Section>
                    <Modal.Section>
                      <Stack>
                        <Stack.Item fill></Stack.Item>
                        <Stack.Item>
                          <ButtonGroup>
                            <Button>Cancel</Button>
                          </ButtonGroup>
                        </Stack.Item>
                        <Stack.Item>
                          <Button primary>Confirm</Button>
                        </Stack.Item>
                      </Stack>
                    </Modal.Section>
                  </Modal>
                </FormLayout>
              </TextContainer>
            </Card.Section>
            <Card.Section>
              <TextContainer>
                <Heading>
                  Sends a message to a customer that abandoned their cart
                </Heading>
                <FormLayout>
                  <FormLayout.Group>
                    <ChoiceList
                      allowMultiple
                      choices={[
                        {
                          label: "Enabled",
                          value: "shipping",
                        },
                      ]}
                      selected=""
                      onChange=""
                    />
                    <Select label="Delay" options={options1} />
                  </FormLayout.Group>

                  <Button plain textAlign="left" onClick={handleChange}>
                    <div className="text_button">
                      <div className="text_button_color">
                        {"ShopName"}: Hi {"FirstName"}, you still have items in
                        your shopping cart. Complete your order before any of
                        the items go out of stock at {"CheckoutUrl"}
                      </div>
                    </div>
                  </Button>
                  <TextStyle variation="strong">
                    No discount configured
                  </TextStyle>
                </FormLayout>
              </TextContainer>
            </Card.Section>
            <Card.Section>
              <TextContainer>
                <Heading>Customer Recovery</Heading>
                <p>
                  To help increase repeat business, we recommend sending a
                  message to customers who haven't purchased from you in a
                  while.
                </p>
              </TextContainer>
              <TextContainer>
                <Heading>
                  Sends a message to a customer that hasn't made an order in the
                  specified time.
                </Heading>
                <FormLayout>
                  <FormLayout.Group>
                    <ChoiceList
                      allowMultiple
                      choices={[
                        {
                          label: "Enabled",
                          value: "shipping",
                        },
                      ]}
                      selected=""
                      onChange=""
                    />
                    <Select label="Delay" options={options2} />
                  </FormLayout.Group>

                  <Button plain textAlign="left" onClick={handleChange}>
                    <div className="text_button">
                      <div className="text_button_color">
                        {"ShopName"}: Hi {"FirstName"}, it's been a while since
                        we've seen you! Check out our range of products at{" "}
                        {"ShopUrl"}
                      </div>
                    </div>
                  </Button>
                  <TextStyle variation="strong">
                    No discount configured
                  </TextStyle>
                </FormLayout>
              </TextContainer>
            </Card.Section>
            <Card.Section>
              <TextContainer>
                <Heading>
                  Sends a message confirming that an order has been shipped
                </Heading>
                <FormLayout>
                  <FormLayout.Group>
                    <ChoiceList
                      allowMultiple
                      choices={[
                        {
                          label: "Enabled",
                          value: "shipping",
                        },
                      ]}
                      selected=""
                      onChange=""
                    />
                    <Select label="Delay" disabled/>
                  </FormLayout.Group>

                  <Button plain textAlign="left" onClick={handleChange}>
                    <div className="text_button">
                      <div className="text_button_color">
                        Hi {"FirstName"}, great news! Your order from{" "}
                        {"ShopName"} has been shipped with {"ShippingCompany"}.
                        📦😍
                      </div>
                    </div>
                  </Button>
                  <TextStyle variation="strong">
                    No discount configured
                  </TextStyle>
                </FormLayout>
              </TextContainer>
              <div style={{ textAlign: "center" }}>
                <Button primary>Confirm Updates</Button>
              </div>
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
      <div style={{ paddingBottom: "100px" }}></div>
    </Page>
  );

  return (
    <div className="Polaris-Frame__Main">
      <Frame>{actualPageMarkup}</Frame>
    </div>
  );
}
