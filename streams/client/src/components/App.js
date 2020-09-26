import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamShow  from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import { Header } from "./Header";
import history from "../history";

export const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/new" exact component={StreamCreate} />
          <Route path="/stream/edit/:id" exact component={StreamEdit} />
          <Route path="/stream/delete/:id" exact component={StreamDelete} />
          <Route path="/stream/:id" exact component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
};