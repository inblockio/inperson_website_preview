(function () {
  "use strict";

  var section = document.getElementById("partner-locations");
  var list = section && section.querySelector("nav > ul");
  if (!list) { return; }

  function el(tag, props) {
    var node = document.createElement(tag);
    Object.keys(props || {}).forEach(function (key) { node.setAttribute(key, props[key]); });
    return node;
  }

  function option(value, text) {
    var node = el("option", { value: value });
    node.textContent = text;
    return node;
  }

  // The nav stays the single source of truth: each region is read from it, never duplicated in markup.
  var regions = [];
  Array.prototype.forEach.call(list.children, function (item) {
    var links = Array.prototype.slice.call(item.querySelectorAll(":scope > ul a"));
    var label = item.querySelector(":scope > span");
    var name = label ? label.textContent.trim() : "";
    if (!name || links.length === 0) { return; }
    regions.push({ name: name, links: links });
  });
  if (regions.length === 0) { return; }

  // Chips of one block share one width: the widest chip's natural width (a long single word widens them all,
  // multi-word names still wrap at spaces). CSS alone sizes each column on its own.
  function equaliseChips() {
    Array.prototype.forEach.call(list.querySelectorAll("ul ul"), function (grid) {
      grid.style.removeProperty("--chip-w");
      var widest = 0;
      Array.prototype.forEach.call(grid.querySelectorAll("a"), function (chip) {
        widest = Math.max(widest, chip.getBoundingClientRect().width);
      });
      if (widest > 0) { grid.style.setProperty("--chip-w", Math.ceil(widest) + "px"); }
    });
  }
  equaliseChips();
  var pending = 0;
  window.addEventListener("resize", function () {
    window.cancelAnimationFrame(pending);
    pending = window.requestAnimationFrame(equaliseChips);
  });
  if (document.fonts && document.fonts.ready) { document.fonts.ready.then(equaliseChips); }

  var continent = el("select", { id: "location-continent" });
  continent.appendChild(option("", "Choose a continent"));
  regions.forEach(function (region, index) { continent.appendChild(option(String(index), region.name)); });

  var country = el("select", { id: "location-country", disabled: "" });
  country.appendChild(option("", "Choose a country"));

  function labelled(select, text) {
    var wrap = el("div");
    var label = el("label", { "for": select.id });
    label.textContent = text;
    wrap.appendChild(label);
    wrap.appendChild(select);
    return wrap;
  }

  var go = el("button", { type: "submit", disabled: "" });
  go.textContent = "Go";

  // Moving to the target is the only effect of an explicit submit; choosing an option never moves the page.
  function jump(href) {
    if (location.hash === href) {
      var target = document.getElementById(href.slice(1));
      if (target) { target.scrollIntoView(); }
    } else {
      location.hash = href;
    }
  }

  function fillCountries(region) {
    while (country.options.length > 1) { country.remove(1); }
    country.value = "";
    go.disabled = true;
    if (!region) { country.disabled = true; return; }
    region.links.forEach(function (link) { country.appendChild(option(link.getAttribute("href"), link.textContent)); });
    country.disabled = false;
  }

  continent.addEventListener("change", function () {
    fillCountries(continent.value === "" ? null : regions[Number(continent.value)]);
  });
  country.addEventListener("change", function () { go.disabled = country.value === ""; });

  var form = el("form", { "class": "location-selects" });
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (country.value !== "") { jump(country.value); }
  });
  form.appendChild(labelled(continent, "Continent"));
  form.appendChild(labelled(country, "Country"));
  form.appendChild(go);
  section.insertBefore(form, section.querySelector("nav"));
  section.classList.add("has-selects");
})();
