#! /usr/bin/env node

import minimist from "minimist";
import dayjs from "dayjs";

const argv = minimist(process.argv.slice(2));
let date = "";
if (argv.m == null) {
  date = dayjs();
} else if (argv.y == null) {
  date = dayjs(`2024- ${argv.m} `);
} else {
  date = dayjs(`${argv.y}-${argv.m}`);
}
const month = date.format("M");
const year = date.format("YYYY");
console.log("      " + month + "月" + " " + year);
console.log("日 月 火 水 木 金 土");

const lastDate = date.endOf("month");
const firstdayOfMonth = date.startOf("month");
const space = "   ".repeat(firstdayOfMonth.get("day"));
process.stdout.write(String(space));
for (let i = 1; i <= lastDate.get("date"); i++) {
  const current = date.set("date", i);
  const weekday = current.get("day");
  process.stdout.write(String(i).padStart(2, " ") + " ");
  if (weekday === 6) {
    process.stdout.write("\n");
  }
}
console.log("\n");
