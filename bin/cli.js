#!/usr/bin/env node
import { createComponent } from "../src/commands/CreateComponent/createComponent.js";
import { createModule } from "../src/commands/CreateModule/createModule.js";

const args = process.argv.slice(2);

const command = args[0];

switch (command) {
  case "create-module":
    createModule();
    break;
  case "create-component":
    createComponent();
    break;
  default:
    console.log("Comando inválido! Use: create-module");
}
