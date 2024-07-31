#!/usr/bin/env node

import minimist from "minimist";
import dayjs from "dayjs";

const argv = minimist(process.argv.slice(2));
let month = dayjs().month() + 1;
let year = dayjs().year();
if (argv.m != null) {
  month = argv.m;
}
if (argv.y != null) {
  year = argv.y;
}

console.log(`      ${month}月 ${year}`);
console.log("日 月 火 水 木 金 土");
const specifiedMonthAndYear = dayjs(`${year}-${month}`);
const lastDayOfMonth = specifiedMonthAndYear.endOf("month");
const firstDayOfMonth = specifiedMonthAndYear.startOf("month");
const space = "   ".repeat(firstDayOfMonth.get("day"));
process.stdout.write(space);
for (let i = 1; i <= lastDayOfMonth.get("date"); i++) {
  const currentDay = specifiedMonthAndYear.set("date", i);
  const dayOfWeek = currentDay.get("day");
  if (dayOfWeek === 6 || i === lastDayOfMonth.get("date")) {
    process.stdout.write(String(i).padStart(2, " "));
    console.log();
  } else {
    process.stdout.write(String(i).padStart(2, " ") + " ");
  }
}
console.log();
