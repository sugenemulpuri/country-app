"use strict";
/**
 * MET CS601 - Assignment 4
 * Country Management System
 */
class RainyCountry {
    constructor(name, rainLevel) {
        this.name = name;
        this.rainLevel = rainLevel;
    }
    getInfo(p) {
        p.textContent = `${this.name} has an annual rain level of ${this.rainLevel} inches.`;
        return p;
    }
}
class SnowyCountry {
    constructor(name, snowLevel) {
        this.name = name;
        this.snowLevel = snowLevel;
    }
    getInfo(p) {
        p.textContent = `${this.name} has an annual snowfall of ${this.snowLevel} inches.`;
        return p;
    }
}
class IslandCountry {
    constructor(name, landSize) {
        this.name = name;
        this.landSize = landSize;
    }
    getInfo(p) {
        p.textContent = `${this.name} has a land size of ${this.landSize} square feet.`;
        return p;
    }
}
const countries = [
    new RainyCountry("United States", 28),
    new SnowyCountry("Norway", 20),
    new RainyCountry("Brazil", 40),
    new IslandCountry("Japan", 145937),
    new SnowyCountry("Sweden", 30),
    new IslandCountry("Australia", 2968464)
];
const snowyCountriesList = [];
function checkSnowLevel(country) {
    if ("snowLevel" in country)
        return country;
    else
        return null;
}
function isSnowyCountry(country) {
    return "snowLevel" in country;
}
for (const country of countries) {
    const result = checkSnowLevel(country);
    if (result !== null && isSnowyCountry(result)) {
        snowyCountriesList.push(result);
    }
}
let totalSnowLevel = 0;
for (const s of snowyCountriesList) {
    totalSnowLevel += s.snowLevel;
}

const appRoot = document.createElement("div");
appRoot.style.fontFamily = "Helvetica";
appRoot.style.lineHeight = "2.4";
appRoot.style.padding = "16px";

const title = document.createElement("h4");
title.textContent = "All Countries";
title.style.margin = "0px 0px 8px 0px";
title.style.padding = "0px";
appRoot.appendChild(title);

const allList = document.createElement("ul");
allList.style.listStyle = "none";
allList.style.padding = "0";
allList.style.margin = "0";
for (const country of countries) {
    const li = document.createElement("li");
    const contentEl = document.createElement("div");
    country.getInfo(contentEl);
    li.appendChild(contentEl);
    allList.append(li);
}
appRoot.appendChild(allList);

const snowyTitle = document.createElement("h4");
snowyTitle.textContent = "Snowy Countries";
snowyTitle.style.margin = "16px 0px 8px 0px";
snowyTitle.style.padding = "0px";
appRoot.appendChild(snowyTitle);
if (snowyCountriesList.length === 0) {
    const p = document.createElement("p");
    p.textContent = "No snowy countries";
    appRoot.appendChild(p);
}
else {
    const snowyUl = document.createElement("ul");
    snowyUl.style.listStyle = "none";
    snowyUl.style.padding = "0";
    snowyUl.style.padding = "0";
    snowyUl.style.listStyle = "none";
    for (const s of snowyCountriesList) {
        const li = document.createElement("li");
        const contentEl = document.createElement("div");
        s.getInfo(contentEl);
        li.appendChild(contentEl);
        snowyUl.appendChild(li);
    }
    appRoot.appendChild(snowyUl);
}

const totalDiv = document.createElement("div");
totalDiv.style.fontWeight = "600";
totalDiv.textContent = `Total snow level: ${totalSnowLevel} inches.`;
appRoot.appendChild(totalDiv);
document.body.appendChild(appRoot);
