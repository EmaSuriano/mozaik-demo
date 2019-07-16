import React from 'react';
import Mozaik from 'mozaik/browser';
import github from 'mozaik-ext-github';
import travis from 'mozaik-ext-travis';

const MozaikComponent = Mozaik.Component.Mozaik;
const ConfigActions = Mozaik.Actions.Config;

Mozaik.Registry.addExtensions({
  github,
  travis,
});

React.render(<MozaikComponent />, document.getElementById('mozaik'));

window.onload = () => (document.body.style = 'overflow: scroll;');

ConfigActions.loadConfig();
