import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Dashboard from "./component/Dashboard/Dashboard";
import Campaigns from "./component/Campaigns/Campaigns";
import Marketing from "./component/Marketing/Marketing";
import Settings from "./component/Settings/Settings";
import Automations from "./component/Automations/Automations";
import NewCampaign from "./component/Campaigns/New_Campaign";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <AppProvider i18n={enTranslations}>
            <Marketing />
            <div className="a">
              <Navbar />
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/Dashboard" component={Dashboard} />
              <Route exact path="/Campaigns" component={Campaigns} />
              <Route exact path="/Automations" component={Automations} />
              <Route exact path="/Settings" component={Settings} />
              <Route exact path="/New-Campaign" component={NewCampaign} />
            </div>
          </AppProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
