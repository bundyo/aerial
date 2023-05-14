require("slint-ui");
const ui = require("../ui/aerial.slint");
const aerial = new ui.Aerial();

aerial.runClicked.setHandler((mode) => console.log(mode));

aerial.run();