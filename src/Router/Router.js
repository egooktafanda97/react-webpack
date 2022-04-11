import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Page } from "./Page";
export default function App() {
  return (
    <Switch>
      {Page.map((root, i) => (
        <Route path={root.Route} key={i}>
          <root.Layout>
            <root.index />
          </root.Layout>
        </Route>
      ))}
    </Switch>
  );
}
