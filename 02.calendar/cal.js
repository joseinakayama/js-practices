#!/usr/bin/env node

import minimist from "minimist";
import dayjs from "dayjs";

const argv = minimist(process.argv.slice(2));
if (argv.m == null && argv.y == null) {
  var month = dayjs().month() + 1;
  var year = dayjs().year();
} else if (argv.y == null) {
  var month = argv.m;
  var year = dayjs().year();
} else if (argv.m == null) {
  var month = dayjs().month() + 1;
  var year = argv.y;
} else {
  var month = argv.m;
  var year = argv.y;
}

console.log(`      ${month}月 ${year}`);
console.log("日 月 火 水 木 金 土");
const date = dayjs(`${year}-${month}`);
const lastDate = date.endOf("month");
const firstdayOfMonth = date.startOf("month");
const space = "   ".repeat(firstdayOfMonth.get("day"));
process.stdout.write(space);
for (let i = 1; i <= lastDate.get("date"); i++) {
  const current = date.set("date", i);
  const weekday = current.get("day");
  process.stdout.write(String(i).padStart(2, " ") + " ");
  if (weekday === 6) {
    process.stdout.write("\n");
  }
}
console.log("\n");
