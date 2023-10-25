import React, { Component } from "react";
import Navigation from "./Navigation";

export default function Layout(props: { children: JSX.Element }): JSX.Element {
  {
    return (
      <section>
        <Navigation />
        <div>{props.children}</div>
      </section>
    );
  }
}
