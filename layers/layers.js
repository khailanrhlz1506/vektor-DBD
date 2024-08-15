var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Kelurahanpasirkaliki_1 = new ol.format.GeoJSON();
var features_Kelurahanpasirkaliki_1 = format_Kelurahanpasirkaliki_1.readFeatures(json_Kelurahanpasirkaliki_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelurahanpasirkaliki_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelurahanpasirkaliki_1.addFeatures(features_Kelurahanpasirkaliki_1);
var lyr_Kelurahanpasirkaliki_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kelurahanpasirkaliki_1, 
                style: style_Kelurahanpasirkaliki_1,
                popuplayertitle: "Kelurahan pasirkaliki",
                interactive: true,
                title: '<img src="styles/legend/Kelurahanpasirkaliki_1.png" /> Kelurahan pasirkaliki'
            });
var format_BufferedKhaila_2 = new ol.format.GeoJSON();
var features_BufferedKhaila_2 = format_BufferedKhaila_2.readFeatures(json_BufferedKhaila_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BufferedKhaila_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BufferedKhaila_2.addFeatures(features_BufferedKhaila_2);
var lyr_BufferedKhaila_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BufferedKhaila_2, 
                style: style_BufferedKhaila_2,
                popuplayertitle: "Buffered Khaila",
                interactive: true,
                title: '<img src="styles/legend/BufferedKhaila_2.png" /> Buffered Khaila'
            });
var format_TugasVektorCKhaila1_3 = new ol.format.GeoJSON();
var features_TugasVektorCKhaila1_3 = format_TugasVektorCKhaila1_3.readFeatures(json_TugasVektorCKhaila1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TugasVektorCKhaila1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TugasVektorCKhaila1_3.addFeatures(features_TugasVektorCKhaila1_3);
var lyr_TugasVektorCKhaila1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TugasVektorCKhaila1_3, 
                style: style_TugasVektorCKhaila1_3,
                popuplayertitle: "Tugas Vektor-C Khaila 1",
                interactive: true,
                title: '<img src="styles/legend/TugasVektorCKhaila1_3.png" /> Tugas Vektor-C Khaila 1'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Kelurahanpasirkaliki_1.setVisible(true);lyr_BufferedKhaila_2.setVisible(true);lyr_TugasVektorCKhaila1_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Kelurahanpasirkaliki_1,lyr_BufferedKhaila_2,lyr_TugasVektorCKhaila1_3];
lyr_Kelurahanpasirkaliki_1.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_BufferedKhaila_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TugasVektorCKhaila1_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kelurahanpasirkaliki_1.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_BufferedKhaila_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_TugasVektorCKhaila1_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Kelurahanpasirkaliki_1.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_BufferedKhaila_2.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TugasVektorCKhaila1_3.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TugasVektorCKhaila1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});