(function (thisObj) {

var config = {
  version: version,
  id: "com.dry-bones.cep",
  displayName: "Dry Bones",
  symlink: "local",
  port: 3000,
  servePort: 5000,
  startingDebugPort: 8860,
  extensionManifestVersion: 6.0,
  requiredRuntimeVersion: 9.0,
  hosts: [{
    name: "PPRO",
    version: "[0.0,99.9]"
  }],
  type: "Panel",
  iconDarkNormal: "./src/assets/light-icon.png",
  iconNormal: "./src/assets/dark-icon.png",
  iconDarkNormalRollOver: "./src/assets/light-icon.png",
  iconNormalRollOver: "./src/assets/dark-icon.png",
  parameters: ["--v=0", "--enable-nodejs", "--mixed-context"],
  width: 500,
  height: 550,
  panels: [{
    mainPath: "./main/index.html",
    name: "main",
    panelDisplayName: "Dry Bones",
    autoVisible: true,
    width: 600,
    height: 650
  }],
  build: {
    jsxBin: "off",
    sourceMap: true
  },
  zxp: {
    country: "US",
    province: "CA",
    org: "MyCompany",
    password: "mypassword",
    tsa: "http://timestamp.digicert.com/",
    sourceMap: false,
    jsxBin: "off"
  },
  installModules: [],
  copyAssets: [],
  copyZipAssets: []
};

var ns = config.id;

var createFolderStructure = function createFolderStructure() {
  app.project.rootItem.createBin("00 Creative");
  app.project.rootItem.createBin("01 Cuts");
  app.project.rootItem.createBin("02 Footage");
  app.project.rootItem.createBin("03 Audio");
  app.project.rootItem.createBin("04 Graphics");
  app.project.rootItem.createBin("05 2D");
  app.project.rootItem.createBin("06 3D");
  app.project.rootItem.createBin("07 Color");
  app.project.rootItem.createBin("08 Output");
};

var ppro = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  createFolderStructure: createFolderStructure
});

var main;
switch (BridgeTalk.appName) {
  case "premierepro":
  case "premiereprobeta":
    main = ppro;
    break;
}

var host = typeof $ !== "undefined" ? $ : window;
host[ns] = main;
