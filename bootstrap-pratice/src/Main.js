import React, { useState } from "react";
import Layout from "./Components/layout/layout";
import { Route, Switch, Redirect } from "react-router-dom";


import Grid from "./Pages/grid";
import Components from "./Pages/components";
import Home from "./Pages/home";

function Main() {
  //Nav Bar states
 
  const [inputState, setInput] = React.useState("Type to Change My Text");
  

  return (
    <Layout
      
    >
      <Switch>
        <Route path="/" exact={true}>
          <Redirect to="/home" />
        </Route>

        <Route path="/home" exact={true}>
          <Home 
          inputState={inputState} 
          setInput={setInput}
         
           />
        </Route>

        <Route path="/grid" exact={true}>
          <Grid />
        </Route>

        <Route path="/components" exact={true}>
          <Components />
        </Route>
      </Switch>
    </Layout>
  );
}

export default Main;
