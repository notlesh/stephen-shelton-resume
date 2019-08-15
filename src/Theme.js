let currentTheme = "dark";

const themes = {
  dark: {
    base03:    "#002b36",
    base02:    "#073642",
    base01:    "#586e75",
    base00:    "#657b83",
    base0:     "#839496",
    base1:     "#93a1a1",
    base2:     "#eee8d5",
    base3:     "#fdf6e3",

    yellow:    "#b58900",
    orange:    "#cb4b16",
    red:       "#dc322f",
    magenta:   "#d33682",
    violet:    "#6c71c4",
    blue:      "#268bd2",
    cyan:      "#2aa198",
    green:     "#859900",
  },

  light: {
    base3:    "#002b36",
    base2:    "#073642",
    base1:    "#586e75",
    base0:    "#657b83",
    base00:   "#839496",
    base01:   "#93a1a1",
    base02:   "#eee8d5",
    base03:   "#fdf6e3",

    yellow:    "#b58900",
    orange:    "#cb4b16",
    red:       "#dc322f",
    magenta:   "#d33682",
    violet:    "#6c71c4",
    blue:      "#268bd2",
    cyan:      "#2aa198",
    green:     "#859900",
  },

  monochrome: {
    base3:    "#000000",
    base2:    "#000000",
    base1:    "#000000",
    base0:    "#000000",
    base00:   "#000000",
    base01:   "#000000",
    base02:   "#ffffff",
    base03:   "#ffffff",

    yellow:    "#000000",
    orange:    "#000000",
    red:       "#000000",
    magenta:   "#000000",
    violet:    "#000000",
    blue:      "#000000",
    cyan:      "#000000",
    green:     "#000000",
  },
};

function switchTheme(name) {
  const style = document.documentElement.style;

  const theme = themes[name];
  if (! theme) {
    throw new Error("Unknown theme "+ name);
  }

  for (const prop of Object.keys(theme)) {
    // our CSS theme properties start with "--", which we omit above
    style.setProperty( "--"+ prop, theme[prop]);
  }

  currentTheme = name;
}

export { currentTheme };

export default switchTheme;
