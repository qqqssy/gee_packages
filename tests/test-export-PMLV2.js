/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var imgcol_d = ee.ImageCollection("projects/pml_evapotranspiration/landcover_impact/PMLV2_yearly_v016_dynamic"),
    imgcol_s = ee.ImageCollection("projects/pml_evapotranspiration/landcover_impact/PMLV2_yearly_v016_static");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var pkg_export = require('users/kongdd/public:pkg_export.js');
// var pkg_trend  = require('users/kongdd/public:Math/pkg_trend.js');

// export parameters
var options = {
    type: "drive",
    range: [-180, -60, 180, 90], // [73, 25, 105, 40], 
    cellsize: 1 / 10,
    // crsTransform : [463.312716528, 0, -20015109.354, 0, -463.312716527, 10007554.677], // prj.crsTransform;
    // scale        : 463.3127165275, // prj.scale
    crs: 'EPSG:4326', // 'SR-ORG:6974', // EPSG:4326
    folder: 'PMLV2'
};

// pkg_export.ExportImgCol(imgcol_d, null, options, 'PMLV2_veg-dynamic_');
pkg_export.ExportImgCol(imgcol_s, null, options, 'PMLV2_veg-static_');
