(function () {
  "use strict";

  var BADGE = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 64\" width=\"240\" height=\"64\" role=\"img\" aria-label=\"Global Alliance Partner of InPerson Group\" style=\"display:inline-block;width:240px;height:64px;max-width:none;max-height:none\"><title>Global Alliance Partner of InPerson Group</title><rect x=\"0.5\" y=\"0.5\" width=\"239\" height=\"63\" rx=\"6\" style=\"fill:#ffffff;stroke:#d9dfe9;stroke-width:1\"/><circle cx=\"34.8\" cy=\"34.7\" r=\"20.8\" style=\"fill:#fc7c04;stroke:none\"/><rect x=\"28.3\" y=\"8\" width=\"11.8\" height=\"47.9\" rx=\"1\" style=\"fill:#666666;stroke:none\"/><path style=\"fill:#012b6a;stroke:none\" d=\"M68 20.2v8.8h1.1v-8.8zm14.2 0v6.7h-.1l-6.9-6.8h-.1v8.9h.6v-6.7h.1l6.9 6.9h.1v-9zm7.2 5.2q.3 0 .7 .1t.8 .1q.8 0 1.4-.3t1-.5q.3-.4 .5-.9t.2-1t-.1-1t-.6-.9q-.3-.3-.9-.5t-1.2-.3h-2.9v8.8h1.1zm0-4.6h1.3q.5 0 .9 .2t.7 .5t.4 .7t.1 .7t-.1 .8q-.1 .3-.4 .6t-.6 .5t-1 .2q-.4 0-.7 0t-.6-.2zm9-.6v8.8h5.7v-.7h-4.5v-3.7h3.8v-.5h-3.8v-3.2h4.5v-.7zm10 0v8.8h1.2v-3.9h.5q.4 0 .6 .1t.4 .2t.4 .4t.4 .6l1 1.4q.1 .3 .3 .6t.4 .4t.5 .2t.7 .2q.2 0 .4-.1t.4-.1v-.5q-.1 .1-.2 .1t-.1 0q-.3 0-.5-.1t-.3-.2t-.4-.4q-.1-.2-.3-.5q-.5-.7-.8-1.2t-.5-.7t-.3-.3t-.2-.2l-.1-.1h0q.6-.1 1-.3t.7-.6t.4-.7t.1-.8q0-.3-.1-.7t-.5-.7t-.8-.6q-.6-.3-1.4-.3zm1.2 .6h1.2q.5 0 .9 .1t.7 .4t.4 .6t.1 .7t-.1 .7t-.4 .6t-.6 .5t-.9 .2h-1.3zm9.3 6q0 .5 .3 1t.7 .7t1 .5t1.3 .2t1.3-.2t1-.5t.7-.8t.2-1q0-.8-.4-1.3t-1-.8t-1.2-.6t-1.3-.5t-1-.5t-.3-.9q0-.3 .1-.6t.4-.4t.6-.3t.9-.2q.8 0 1.3 .4t.7 1.1h.9q-.1-.5-.4-.9t-.6-.6t-.9-.4t-1.1-.1t-1.1 .1q-.5 .2-.9 .5t-.6 .7t-.3 1q0 .8 .4 1.2t1 .8q.5 .2 1.2 .5t1.2 .4q.6 .3 1 .7t.3 1q0 .8-.6 1.2t-1.5 .4t-1.3-.2t-.7-.5t-.4-.6t-.1-.5zm10.5-2.2q0 .7 .2 1.5t.9 1.5q.5 .7 1.4 1.1t2.2 .5q.8 0 1.5-.3t1.2-.5q.6-.4 1-.8t.6-1t.4-1t.1-1t-.3-1.5t-.8-1.4q-.6-.7-1.6-1.2t-2.1-.4q-1.3 0-2.2 .4t-1.4 1.1t-.9 1.5q-.2 .8-.2 1.5zm1.2 0q0-.8 .3-1.6t.7-1.2q.5-.6 1.1-.9t1.4-.3t1.4 .3t1.1 .9t.8 1.2q.3 .8 .3 1.6t-.3 1.6t-.8 1.3t-1.1 .8t-1.4 .3t-1.4-.3t-1.1-.8t-.7-1.3t-.3-1.6zm20-4.4v6.7h0l-7-6.8h0v8.9h.5v-6.7h.1l6.9 6.9h.1v-9zm20.9 4.9h-2.5v.5h1.4v2.3q-.5 .3-1.1 .5t-1.3 .2q-1 0-1.8-.3t-1.2-.8t-.7-1.3t-.3-1.6t.3-1.6t.7-1.2q.4-.6 1.1-.9t1.5-.3q.6 0 1.1 .2t.9 .3t.7 .5q.3 .2 .3 .5h.9q-.1-.3-.3-.6t-.8-.7q-.4-.3-1.1-.5t-1.6-.2q-1.1 0-2 .3t-1.5 .9t-1 1.3q-.4 .9-.4 1.9t.3 1.7t.8 1.5t1.5 1.1t2.2 .4q.9 0 1.6-.3t1.2-.4v.5h1.1zm4.8-4.9v8.8h1.1v-3.9h.6q.3 0 .5 .1t.5 .2q.1 .2 .3 .4t.4 .6l1 1.4q.2 .3 .3 .6t.4 .4t.5 .2t.7 .2q.2 0 .4-.1t.4-.1v-.5q-.1 .1-.2 .1t-.1 0q-.2 0-.4-.1t-.4-.2t-.4-.4t-.3-.5q-.5-.7-.8-1.2t-.5-.7t-.2-.3t-.3-.2l-.1-.1h0q.6-.1 1-.3t.7-.6t.4-.7t.1-.8q0-.3-.1-.7t-.4-.7t-.9-.6t-1.4-.3zm1.1 .6h1.3q.4 0 .8 .1t.7 .4t.4 .6t.1 .7t-.1 .7t-.4 .6t-.6 .5t-.9 .2h-1.3zm9.5 3.8q0 .7 .2 1.5t.9 1.5t1.4 1.1q.9 .5 2.2 .5q.8 0 1.5-.3t1.2-.5q.6-.4 .9-.8t.7-1t.4-1t.1-1t-.3-1.5q-.2-.8-.9-1.4t-1.5-1.2q-.9-.4-2.1-.4t-2.2 .4q-.8 .5-1.4 1.1t-.9 1.5t-.2 1.5zm1.2 0q0-.8 .3-1.6t.7-1.2q.5-.6 1.1-.9t1.4-.3t1.4 .3t1.1 .9t.8 1.2q.3 .8 .3 1.6t-.3 1.6t-.8 1.3t-1.1 .8t-1.4 .3t-1.4-.3t-1.1-.8t-.7-1.3t-.3-1.6zm12.5-4.4v5.4q0 .5 0 1.2q.2 .6 .5 1.1t1.1 .9t2 .4q.8 0 1.5-.3t1-.7t.6-1t.3-1.2v-5.8h-.6v5.3q0 .3 0 .6t-.1 .6t-.2 .5t-.4 .6t-1 .6q-.5 .2-1.1 .2t-1-.2t-.7-.4t-.5-.6q-.1-.2-.2-.4t-.1-.5t0-.5v-5.8zm13.1 5.2q.3 0 .7 .1t.8 .1q.8 0 1.4-.3t.9-.5q.4-.4 .6-.9t.2-1t-.1-1t-.6-.9q-.3-.3-.9-.5t-1.2-.3h-2.9v8.8h1.1zm0-4.6h1.3q.5 0 .9 .2t.7 .5t.4 .7t.1 .7t-.1 .8q-.1 .3-.4 .6t-.6 .5t-1 .2q-.4 0-.7 0t-.6-.2z\"/><path style=\"fill:#fc7c04;stroke:none\" d=\"M73.6 40.9h-2v.4h1.1v1.8q-.4 .3-.9 .4t-1.1 .2q-.8 0-1.4-.3t-.9-.6q-.4-.5-.6-1t-.2-1.3t.2-1.3t.5-1t.9-.6q.6-.3 1.3-.3q.4 0 .9 .1t.7 .3t.5 .3t.3 .5h.7q-.1-.3-.3-.5t-.6-.6q-.4-.2-.9-.4t-1.3-.1t-1.6 .2q-.7 .3-1.2 .7t-.8 1.1t-.3 1.5t.2 1.4t.7 1.2t1.2 .8t1.7 .3q.8 0 1.4-.1t.9-.4v.4h.9zm3-3.9h-.8v7h.8zm7.3 4.5q0 .5-.2 1t-.5 .8t-.8 .6t-1.1 .2t-1.1-.2t-.8-.6q-.3-.3-.5-.8t-.2-1t.2-1t.5-.8t.8-.6t1.1-.2t1.1 .2t.8 .6q.3 .3 .5 .8t.2 1zm-.9 0q0-.7-.2-1.1t-.4-.7t-.5-.3t-.6-.1t-.5 .1t-.6 .3q-.2 .2-.4 .7t-.1 1.1t.1 1.1q.2 .5 .4 .7t.6 .3q.2 .1 .5 .1t.6-.1t.5-.3t.4-.7t.2-1.1zm2.8-4.5h.8v2.8h.1q.1-.2 .3-.4t.3-.3t.5-.2q.2 0 .4 0q.6 0 1 .2t.7 .5t.5 .8t.1 1.1t-.1 1.1q-.2 .5-.5 .8t-.7 .5t-1 .2q-1.1 0-1.5-.9h-.1v.8h-.8zm.8 5q0 .3 .2 .6t.2 .5q.2 .3 .5 .4t.5 .1q.4 0 .6-.1t.5-.4t.4-.6t.1-1t-.1-1t-.4-.6t-.5-.4t-.6-.1q-.2 0-.5 .1t-.4 .4t-.3 .5t-.2 .7zm7.7-3.1q.7 0 1.1 .2t.6 .5t.2 .8t0 .9v2.7h-.8v-.5q-.3 .3-.7 .5t-.9 .1t-.8-.1q-.3-.2-.5-.4t-.3-.6t-.2-.6t.2-.6q.1-.3 .3-.6t.6-.4t.8-.2t.9 .2t.6 .5v-.4q0-.8-.2-1.2t-.9-.4q-.3 0-.5 0t-.4 .2t-.3 .3t-.3 .4l-.5-.5q.2-.1 .3-.3t.4-.2q.2-.2 .5-.2t.8-.1zm1.1 3.1q0-.1-.1-.3t-.3-.3t-.3-.2t-.5-.1t-.6 .1t-.4 .3t-.2 .4t-.1 .5t.1 .6t.3 .4t.4 .2t.4 .1t.4-.1t.4-.1q.2-.2 .3-.3t.2-.4zm4.1-5h-.9v7h.9zm10.8 4.9l.9 2.1h1l-3.2-7h-.6l-2.9 7h.5l.8-2.1zm-.2-.4h-3.1l1.5-3.4h0zm4.9-4.5h-.9v7h.9zm3.4 0h-.8v7h.8zm2.7 2v5h.9v-5zm-.1-1.6q0 .2 .2 .4t.4 .2t.3-.2t.2-.4t-.2-.4q-.1-.1-.3-.1t-.4 .1t-.2 .4zm5.3 1.5q.8 0 1.2 .2t.5 .5t.3 .8q0 .4 0 .9v2.7h-.8v-.5q-.3 .3-.8 .5t-.9 .1t-.7-.1q-.3-.2-.6-.4t-.3-.6t-.1-.6t.1-.6t.4-.6t.6-.4t.8-.2t.8 .2t.7 .5v-.4q0-.8-.3-1.2t-.9-.4q-.2 0-.4 0t-.4 .2t-.3 .3t-.3 .4l-.5-.5q.1-.1 .3-.3t.3-.2q.3-.2 .6-.2t.7-.1zm1.2 3.1q-.1-.1-.2-.3t-.2-.3t-.4-.2t-.5-.1t-.5 .1t-.4 .3t-.3 .4q0 .3 0 .5q0 .4 .1 .6t.3 .4t.4 .2t.4 .1t.4-.1q.2 0 .3-.1t.4-.3q.1-.2 .2-.4zm7.2 2v-3.2q0-.2-.1-.5t-.2-.7t-.5-.5t-1-.2q-.3 0-.7 .1t-.7 .5l-.1 .1h-.1v-.6h-.8v5h.8v-3.1q0-.4 .1-.7t.4-.4q.1-.2 .4-.3t.5-.1q.4 0 .6 .2t.4 .4t.1 .4t0 .3v3.3zm4.7-.4q-.4 0-.7-.1t-.6-.4t-.4-.6t-.2-1t.2-1q.2-.5 .4-.7t.6-.4t.6-.1q.5 0 .8 .2t.4 .6h.7q-.1-.3-.3-.6t-.5-.4t-.6-.2t-.6 0q-.7 0-1.1 .2t-.8 .5t-.5 .9q-.2 .4-.2 1t.2 1t.5 .9q.3 .3 .8 .5t1.1 .2t1.1-.2t.9-.5l-.3-.4q-.4 .3-.7 .5t-.8 .1zm8-1.9v-.2q0-.7-.2-1.1t-.5-.9q-.3-.3-.8-.4t-.9-.2t-.9 .2q-.5 .1-.8 .5t-.5 .8t-.2 1.1q0 .5 .2 .9t.5 .9t.8 .6t1.1 .2t1.2-.2t.9-.7l-.3-.3q-.2 .2-.4 .4t-.4 .2t-.4 .2q-.2 0-.4 0t-.6-.1t-.6-.3t-.4-.6t-.2-1zm-3.8-.4q0-.4 .1-.8t.2-.6t.5-.5q.2-.2 .6-.2q.7 0 1.1 .6t.4 1.5zm11.1-.2q.3 .1 .5 .1t.7 0t1.1-.1t.8-.5t.4-.7t.2-.8t-.1-.8t-.5-.7q-.2-.3-.7-.4t-1-.2h-2.3v7h.9zm0-3.7h1q.5 0 .8 .2t.5 .4t.3 .5t.1 .6t-.1 .6t-.3 .6t-.5 .3q-.3 .2-.8 .2q-.3 0-.5 0t-.5-.1zm7.2 1.5q.8 0 1.2 .2t.6 .5t.2 .8t0 .9v2.7h-.8v-.5q-.3 .3-.7 .5t-.9 .1t-.8-.1q-.3-.2-.6-.4t-.3-.6t-.1-.6t.1-.6t.4-.6t.6-.4t.8-.2t.8 .2t.7 .5v-.4q0-.8-.2-1.2t-.9-.4q-.3 0-.5 0t-.4 .2t-.3 .3t-.3 .4l-.5-.5q.1-.1 .3-.3t.4-.2q.2-.2 .5-.2t.7-.1zm1.2 3.1q-.1-.1-.1-.3t-.3-.3q-.1-.1-.4-.2t-.5-.1t-.5 .1t-.4 .3t-.2 .4t-.1 .5t.1 .6t.3 .4t.4 .2t.4 .1t.4-.1t.4-.1q.1-.2 .3-.3t.2-.4zm3-3v5h.9v-3q0-.4 .1-.7t.2-.5t.3-.2t.4-.1t.4 .1t.3 .3l.3-.6q-.1-.1-.2-.2t-.2-.1t-.3-.1t-.1 0q-.4 0-.7 .2t-.5 .7h0v-.8zm3.9 .4v-.4h.9v-1.5h.8v1.5h1.3v.4h-1.3v3.3q0 .1 .1 .3t0 .3q.1 .1 .2 .2t.3 .1t.4-.2t.2-.4l.5 .5q-.5 .5-1.1 .5q-.3 0-.5-.1t-.5-.3t-.3-.4t-.1-.7v-3.1zm9.1 4.6v-3.2q0-.2-.1-.5t-.2-.7t-.5-.5t-1-.2q-.3 0-.7 .1t-.7 .5l-.1 .1h-.1v-.6h-.8v5h.8v-3.1q0-.4 .1-.7t.3-.4t.5-.3t.5-.1q.4 0 .6 .2t.4 .4t.1 .4t0 .3v3.3zm6.6-2.3v-.2q0-.7-.2-1.1t-.5-.9q-.3-.3-.7-.4t-.9-.2t-1 .2q-.4 .1-.7 .5t-.5 .8t-.2 1.1q0 .5 .1 .9t.5 .9t.8 .6t1.2 .2q.6 0 1.1-.2t1-.7l-.3-.3q-.3 .2-.4 .4t-.4 .2t-.4 .2q-.2 0-.5 0t-.6-.1t-.5-.3t-.5-.6t-.2-1zm-3.8-.4q0-.4 .1-.8t.3-.6t.4-.5t.7-.2q.7 0 1.1 .6t.4 1.5zm5.7-2.3v5h.9v-3q0-.4 .1-.7t.2-.5t.3-.2t.4-.1t.4 .1t.3 .3l.3-.6q0-.1-.2-.2t-.2-.1t-.2-.1t-.2 0q-.4 0-.7 .2t-.5 .7h0v-.8z\"/></svg>";
  var ORIGIN = "https://inperson.group";
  var PAGE = "/our-partner/";
  var LABEL = "Global Alliance Partner of InPerson Group";

  var dialog = null;
  var trigger = null;
  var fields = {};

  function el(tag, props, children) {
    var node = document.createElement(tag);
    Object.keys(props || {}).forEach(function (key) {
      if (key === "text") { node.textContent = props[key]; } else { node.setAttribute(key, props[key]); }
    });
    (children || []).forEach(function (child) { node.appendChild(child); });
    return node;
  }

  function copyRow(id, label, control, buttonText, source) {
    var button = el("button", { type: "button", "class": "embed-copy", text: buttonText });
    button.addEventListener("click", function () { copy(source); });
    return el("div", { "class": "embed-row" }, [
      el("label", { "for": id, text: label }),
      control,
      button
    ]);
  }

  function build() {
    var preview = el("div", { "class": "embed-preview" });
    preview.innerHTML = BADGE;

    var link = el("input", { id: "embed-link", type: "text", readonly: "", "class": "embed-field" });
    var code = el("textarea", { id: "embed-code", readonly: "", rows: "6", "class": "embed-field embed-code", spellcheck: "false" });
    var status = el("p", { "class": "embed-status", role: "status", "aria-live": "polite" });
    var close = el("button", { type: "button", "class": "embed-close", text: "Close" });
    close.addEventListener("click", function () { dialog.close(); });

    dialog = el("dialog", { "class": "embed-dialog", "aria-labelledby": "embed-title" }, [
      el("h2", { id: "embed-title", text: "Link to this partner card" }),
      el("p", { text: "Add this badge to your website. It links to your card on the InPerson Group partner page and loads nothing from our servers." }),
      preview,
      copyRow("embed-link", "Card link", link, "Copy link", link),
      copyRow("embed-code", "Embed code", code, "Copy code", code),
      status,
      close
    ]);
    // The backdrop is the dialog element's own box outside its content: close only when the press
    // and the release both land outside the dialog's rectangle, so a text selection that starts
    // inside and ends over the padding or the backdrop does not close it.
    var pressedOutside = false;
    dialog.addEventListener("pointerdown", function (event) { pressedOutside = outside(event); });
    dialog.addEventListener("click", function (event) {
      var close = pressedOutside && outside(event);
      pressedOutside = false;
      if (close) { dialog.close(); }
    });
    dialog.addEventListener("close", function () { if (trigger) { trigger.focus(); } });
    document.body.appendChild(dialog);
    fields = { link: link, code: code, status: status };
  }

  function outside(event) {
    var box = dialog.getBoundingClientRect();
    return event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
  }

  function announce(text) {
    fields.status.textContent = "";
    window.setTimeout(function () { fields.status.textContent = text; }, 50);
  }

  function copy(field) {
    var text = field.value;
    var fallback = function () {
      field.focus();
      field.select();
      var done = false;
      try { done = document.execCommand("copy"); } catch (err) { done = false; }
      announce(done ? "Copied" : "Select the text and copy it.");
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { announce("Copied"); }, fallback);
    } else {
      fallback();
    }
  }

  function open(anchor) {
    var id = anchor.getAttribute("href").slice(1);
    var url = ORIGIN + PAGE + "#" + id;
    if (!dialog) { build(); }
    trigger = anchor;
    fields.link.value = url;
    fields.code.value = '<a href="' + url + '" title="' + LABEL + '">' + BADGE + "</a>";
    fields.status.textContent = "";
    dialog.showModal();
  }

  if (typeof HTMLDialogElement === "function") {
    Array.prototype.forEach.call(document.querySelectorAll("a.card-link"), function (anchor) {
      anchor.setAttribute("aria-haspopup", "dialog");
    });
  }

  document.addEventListener("click", function (event) {
    var anchor = event.target.closest && event.target.closest("a.card-link");
    if (!anchor || event.defaultPrevented || event.button !== 0) { return; }
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) { return; }
    if (typeof HTMLDialogElement !== "function") { return; }
    event.preventDefault();
    open(anchor);
  });
})();
