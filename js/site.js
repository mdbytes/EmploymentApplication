/**
 * After loading jQuery, jQuery-ui, jQuery-validate, and Bootstrap, the
 * JavaScript for the application is loaded in five separate files,
 * which appear below in the order in which they are loaded:
 *
 * environment.js  | provides constants and variables used by the application
 * validation.js   | provides validation rules, messages, and error placement
 *                   for each of the five forms comprising the application
 * functions.js    | implements UI functionality such as datepickers and event
 *                   listeners for areas such as military experience or criminal
 *                   background - utilizes both environment.js and validation.js
 * site.js         | serves as the top level in the hierarchy, initiating the
 *                   functions in functions.js
 *
 * Current File:  site.js
 * Purpose:       Top level in hierarchy, calling on resources from other files
 *
 */

import "../jquery/jquery-3.6.0.min.js";
import "../bootstrap/js/bootstrap.bundle.min.js";
import "../jquery/ui/jquery-ui.min.js";
import "../jquery/validate/jquery.validate.min.js";
import k from "./test.js";
import { states, datepickers, formGuide } from "./environment.js";
import {
  makeTabs,
  makeTabVisible,
  setUpDatepickers,
  enableBackButtons,
  personalSetup,
  schoolSetup,
  experienceSetup,
  footprintSetup,
  finishSetup,
} from "./functions.js";
import "./validation.js";

// To initiate the jQuery tabs effect
makeTabs("#tabs");

// To make only the first tab visible when application begins
makeTabVisible(0);

// To set up datepickers which are used throughout the application
setUpDatepickers(datepickers);

// To enable back buttons which allow user to go back and edit the app
enableBackButtons(formGuide);

// Setting up the personal information section of the application
personalSetup(states);

// Setting up the education section of the application
schoolSetup();

// Setting up the experience section of the application
experienceSetup();

// Setting up the footprint section of the application
footprintSetup();

// Setting up the final section of the application
finishSetup();
