import React, { useState, useCallback } from "react";
import {
  Card,
  Frame,
  Layout,
  Page,
  Button,
  DatePicker,
  Popover,
} from "@shopify/polaris";
import { CalendarMajorMonotone } from "@shopify/polaris-icons";
import "./Dashboard.css";

export default function Dashboard() {
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    []
  );
  const [active, setActive] = useState(true);
  const handleToggle = useCallback(() => setActive((active) => !active), []);
  const [{ month, year }, setDate] = useState({
    month: 1,
    year: 2018,
  });
  const [selectedDates, setSelectedDates] = useState({
    start: new Date("Wed Feb 07 2018 00:00:00 GMT-0500 (EST)"),
    end: new Date("Wed Feb 07 2018 00:00:00 GMT-0500 (EST)"),
  });

  const handleMonthChange = useCallback(
    (month, year) => setDate({ month, year }),
    []
  );
  const activator = (
    <Button
      primary
      icon={CalendarMajorMonotone}
      disclosure={1}
      ariaExpanded={active}
      onClick={togglePopoverActive}
    >
      5/20/2020 - 6/17/2020
    </Button>
  );
  const popover = (
    <Popover
      active={popoverActive}
      activator={activator}
      onClose={togglePopoverActive}
    >
      <Popover.Pane fixed>
        <Popover.Section>
          <DatePicker
            month={month}
            year={year}
            onChange={setSelectedDates}
            onMonthChange={handleMonthChange}
            selected={selectedDates}
            allowRange={true}
            weekStartsOn
          />
        </Popover.Section>
      </Popover.Pane>
      <Popover.Pane></Popover.Pane>
    </Popover>
  );
  const actualPageMarkup = (
    <Page fullWidth title="Dashboard" primaryAction={popover}>
      <Button plain>View Reports</Button>
      <Layout>
        <Layout.Section
          title="Account details"
          description="Jaded Pixel will use this as your account information."
        >
          <Card title="ROI" sectioned>
            <span className="card_text">0%</span>
          </Card>
          <Card title="Revenue" sectioned>
            <span className="card_text">AMD 0.00</span>
          </Card>
          <Card title="Cost" sectioned>
            <span className="card_text">AMD 0.00</span>
          </Card>
          <Card title="CRevenue | Cost" sectioned></Card>
          <Card title="Sent" sectioned>
            <span className="card_text">0</span>
          </Card>
          <Card title="Unique Clicks" sectioned>
            <span className="card_text">0</span>
          </Card>
          <Card title="Unsubscribes" sectioned>
            <span className="card_text">0</span>
          </Card>
          <br />
          <Layout>
            <Layout.Section oneThird>
              <Card title="Orders" sectioned>
                <span className="card_text">0</span>
              </Card>
            </Layout.Section>
            <Layout.Section oneThird>
              <Card title="Total Clicks" sectioned>
                <span className="card_text">0</span>
              </Card>
            </Layout.Section>
            <Layout.Section>
              <Card title="Click Through Rate" sectioned>
                <span className="card_text">0%</span>
              </Card>
            </Layout.Section>
          </Layout>
          <br />
          <Card sectioned>
            <div style={{ padding: "20px" }}>
              <div className="last_Cart_Text">
                <div>
                  <h2 className="Polaris-Heading">
                    We're new on the Shopify App Store, please help us out
                  </h2>
                </div>
                <button
                  type="button"
                  className="Polaris-Button Polaris-Button--plain"
                >
                  <span className="Polaris-Button__Content">Hide</span>
                </button>
              </div>
              <br></br>
              <div className="last_Cart_Content">
                <div style={{ flex: "1 1 0%" }}>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg"></svg>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );

  return (
    <div className="Polaris-Frame__Main">
      <Frame>{actualPageMarkup}</Frame>
    </div>
  );
}
