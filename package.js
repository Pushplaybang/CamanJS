/*
  Package Definition for Meteor, allowing camanJS to be isntalled by the meteor package api
 */
Package.describe({
  name: "camanjs:camanjs",
  version: "4.1.2",
  // Brief, one-line summary of the package.
  summary: "CamanJS is (ca)nvas (man)ipulation in Javascript. It's a combination of a simple-to-use interface with advanced and efficient image/canvas editing techniques.",
  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/meltingice/CamanJS/",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("1.2.0.2");
  api.use("ecmascript");

  // Should be minified by the isobuild, meteor's build system
  api.addFiles("dist/caman.full.js", ['client'], {bare: true});
});

