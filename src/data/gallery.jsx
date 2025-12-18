const files = import.meta.glob("../assets/*.{avif,png,jpg}", { eager: true, import: "default" });

const gallery = Object.entries(files).map(([path, src]) => ({
  file: path.split(/[/\\\\]/).pop(),
  src,
}));

export default gallery;
