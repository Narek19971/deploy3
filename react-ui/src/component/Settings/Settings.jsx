import React from "react";
import {
  Page,
  Banner,
  Card,
  Frame,
  TextContainer,
  Heading,
  FormLayout,
  ChoiceList,
  TextField,
  Select,
  Button,
  VisuallyHidden,
} from "@shopify/polaris";

export default function Settings() {
  const actualPageMarkup = (
    <Page fullWidth title="Settings">
      <Card>
        <Card.Section>
          <Banner>
            <p>
              Use your finance report to get detailed information about your
              business. <a href="#">Let us know what you think</a>
            </p>
          </Banner>
          <TextContainer>
            <Heading>Quiet Hours</Heading>
            <p>
              Let's be responsible and not message your customers between
              certain times of the day (e.g 6pm to 8am). There must be a minimum
              of 7 hours between the start and end time. Also note that we take
              into account the recipients timezone for quiet hours.
            </p>
            <FormLayout>
              <FormLayout.Group condensed>
                <TextField label="Start" clearButton value="15"></TextField>
                <TextField label="End" clearButton value="15"></TextField>
                <VisuallyHidden>
                  <TextField label="End" clearButton value="15"></TextField>
                </VisuallyHidden>
                <VisuallyHidden>
                  <TextField label="End" clearButton value="15"></TextField>
                </VisuallyHidden>
              </FormLayout.Group>
            </FormLayout>
          </TextContainer>
        </Card.Section>
        <Card.Section>
          <TextContainer>
            <Heading>Auto Top-up</Heading>
            <p>
              Make sure your account is always topped up so that you don't miss
              out on potential conversion opportunities. This is optional and
              you can disable this if you prefer to manually top up.
            </p>
            <FormLayout>
              <FormLayout.Group condensed>
                <FormLayout>
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
                  <p>
                    It is RECOMMENDED to enable the Auto Topup setting. You
                    could potentially lose on potential sales should your
                    account not have enough funds.
                  </p>
                </FormLayout>
                <FormLayout>
                  <TextField
                    prefix="$"
                    type="number"
                    label="Add $10 to my account"
                  ></TextField>
                  <TextField
                    prefix="$"
                    type="number"
                    label="When my balance falls below $5"
                  ></TextField>
                  <TextField
                    prefix="$"
                    type="number"
                    label="But don't go over my monthly limit of $100"
                  ></TextField>
                </FormLayout>
              </FormLayout.Group>
            </FormLayout>
          </TextContainer>
        </Card.Section>
        <Card.Section>
          <TextContainer>
            <Heading>Global Sender ID</Heading>
            <p>
              In supported countries, you can choose for your texts to be
              delivered from a short custom sender, such as your store name (not
              available in US/CA). Otherwise, we will automatically select a
              phone number to send texts from.
            </p>
            <FormLayout>
              <FormLayout.Group condensed>
                <TextField></TextField>
                <VisuallyHidden>
                  <TextField></TextField>
                </VisuallyHidden>
              </FormLayout.Group>
            </FormLayout>
          </TextContainer>
          <TextContainer>
            <Heading>Smart Sending</Heading>
            <p>
              Smart sending allows you to set some boundaries about how
              frequently you text your customers marketing messages. This
              ensures that a customer won't receive multiple marketing texts
              within the specified time period.
            </p>
            <FormLayout>
              <FormLayout.Group condensed>
                <Select label="Time Period"></Select>
                <VisuallyHidden>
                  <Select></Select>
                </VisuallyHidden>
              </FormLayout.Group>
              <div style={{ textAlign: "center" }}>
                <Button primary>Confirm Updates</Button>
              </div>
            </FormLayout>
          </TextContainer>
        </Card.Section>
      </Card>
      <div style={{ paddingBottom: "100px" }}></div>
    </Page>
  );
  return (
    <div className="Polaris-Frame__Main">
      <Frame>{actualPageMarkup}</Frame>
    </div>
  );
}
