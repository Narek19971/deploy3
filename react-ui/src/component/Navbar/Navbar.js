import React, { useState, useCallback } from "react";
import { Navigation } from "@shopify/polaris";
import {
  ProfileMinor,
  CashDollarMajorMonotone,
  HomeMajorMonotone,
  MarketingMajorMonotone,
  HintMajorMonotone,
  SettingsMajorMonotone,
  AutomationMajorMonotone,
  NavigationMajorMonotone
} from "@shopify/polaris-icons";
import {
  Card,
  Button,
  Page,
  Sheet,
  Heading,
  Scrollable,
  ChoiceList,
  Modal,
  DatePicker,
  Layout,
  TextField,
  ButtonGroup,
  Stack,
  TextStyle
} from "@shopify/polaris";
import "./Navbar.css";

function Navbar(props) {
  const [active, setActive] = useState(false);
  const [shownavigation, setShowNavigation] = useState(false);
  const handleChange = useCallback(() => setActive(!active), [active]);
  const setActiveNavigation = useCallback(() =>
    setShowNavigation(!shownavigation)
  );

  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: "/path/to/place",
            label: "testing-the-app1...",
            icon: ProfileMinor,
          },
        ]}
        separator
      />
      <Navigation.Section
        items={[
          {
            label: "Top up / Redeem",
            icon: CashDollarMajorMonotone,
            onClick: () => handleChange(),
          },
        ]}
        separator
      />
      <Button
      
        icon={NavigationMajorMonotone}
        fullWidth
        onClick={setActiveNavigation}
      >
        Show Navigation Page
      </Button>
      {shownavigation && (
        <div style={{ marginLeft: "30px" }}>
          <Navigation.Section
            items={[
              {
                url: "/Dashboard",
                label: "Dashboard",
                icon: HomeMajorMonotone,
              },
              {
                url: "/Campaigns",
                label: "Campaigns",
                icon: MarketingMajorMonotone,
              },
              {
                url: "/Automations",
                label: "Automations",
                icon: AutomationMajorMonotone,
              },
              {
                url: "/Settings",
                label: "Settings",
                icon: SettingsMajorMonotone,
              },
              {
                url: "https://help.airsms.io/en/",
                label: "Help Center",
                icon: HintMajorMonotone,
                new: true,
              },
            ]}
            separator
          />
        </div>
      )}
      <Modal open={active} title="Top Up" onClose={handleChange}>
        <Modal.Section>
          <p>
            To top up your account, select an amount below and press Confirm.
            Your payment will be processed by Shopify. Alternatively you can
            ensure your account always stays topped up by enabling auto top-up
            in your account settings.
          </p>
          <Layout>
            <Layout.Section>
              <TextField
                label="Top up amount"
                type="number"
                prefix="$"
              ></TextField>
            </Layout.Section>
            <Layout.Section>
              <TextField label="Have a voucher?"></TextField>
              <Button disabled>Redeem Voucher!</Button>
            </Layout.Section>
          </Layout>
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
    </Navigation>
  );
}

export default Navbar;
