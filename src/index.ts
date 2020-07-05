#!/usr/bin/env node
import { readFileSync } from "fs";
import { argv } from "process";
import yaml from "yaml";

if(argv.length >= 4) {
  const file = readFileSync(argv[2], "utf-8");
  const config = yaml.parse(file);
  console.log(config[argv[3]]);
} else {
  process.exit(1);
}
