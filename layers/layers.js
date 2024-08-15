var wms_layers = [];

var format_kelcibabatadm_cimahi2008_0 = new ol.format.GeoJSON();
var features_kelcibabatadm_cimahi2008_0 = format_kelcibabatadm_cimahi2008_0.readFeatures(json_kelcibabatadm_cimahi2008_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kelcibabatadm_cimahi2008_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kelcibabatadm_cimahi2008_0.addFeatures(features_kelcibabatadm_cimahi2008_0);
var lyr_kelcibabatadm_cimahi2008_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kelcibabatadm_cimahi2008_0, 
                style: style_kelcibabatadm_cimahi2008_0,
                popuplayertitle: "kel cibabat — adm_cimahi2008",
                interactive: true,
                title: '<img src="styles/legend/kelcibabatadm_cimahi2008_0.png" /> kel cibabat — adm_cimahi2008'
            });
var format_gildakmlTrack240722130727_1 = new ol.format.GeoJSON();
var features_gildakmlTrack240722130727_1 = format_gildakmlTrack240722130727_1.readFeatures(json_gildakmlTrack240722130727_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gildakmlTrack240722130727_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gildakmlTrack240722130727_1.addFeatures(features_gildakmlTrack240722130727_1);
var lyr_gildakmlTrack240722130727_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gildakmlTrack240722130727_1, 
                style: style_gildakmlTrack240722130727_1,
                popuplayertitle: "gilda kml — Track-240722-130727",
                interactive: true,
                title: 'gilda kml — Track-240722-130727'
            });
var format_Buffered_2 = new ol.format.GeoJSON();
var features_Buffered_2 = format_Buffered_2.readFeatures(json_Buffered_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_2.addFeatures(features_Buffered_2);
var lyr_Buffered_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_2, 
                style: style_Buffered_2,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_2.png" /> Buffered'
            });
var format_UTMPerindukangilda_kml__track240722130727_3 = new ol.format.GeoJSON();
var features_UTMPerindukangilda_kml__track240722130727_3 = format_UTMPerindukangilda_kml__track240722130727_3.readFeatures(json_UTMPerindukangilda_kml__track240722130727_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTMPerindukangilda_kml__track240722130727_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTMPerindukangilda_kml__track240722130727_3.addFeatures(features_UTMPerindukangilda_kml__track240722130727_3);
var lyr_UTMPerindukangilda_kml__track240722130727_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTMPerindukangilda_kml__track240722130727_3, 
                style: style_UTMPerindukangilda_kml__track240722130727_3,
                popuplayertitle: "UTM Perindukan — gilda_kml__track240722130727",
                interactive: true,
                title: '<img src="styles/legend/UTMPerindukangilda_kml__track240722130727_3.png" /> UTM Perindukan — gilda_kml__track240722130727'
            });

lyr_kelcibabatadm_cimahi2008_0.setVisible(true);lyr_gildakmlTrack240722130727_1.setVisible(true);lyr_Buffered_2.setVisible(true);lyr_UTMPerindukangilda_kml__track240722130727_3.setVisible(true);
var layersList = [lyr_kelcibabatadm_cimahi2008_0,lyr_gildakmlTrack240722130727_1,lyr_Buffered_2,lyr_UTMPerindukangilda_kml__track240722130727_3];
lyr_kelcibabatadm_cimahi2008_0.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_gildakmlTrack240722130727_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Buffered_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_UTMPerindukangilda_kml__track240722130727_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_kelcibabatadm_cimahi2008_0.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_gildakmlTrack240722130727_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Buffered_2.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_UTMPerindukangilda_kml__track240722130727_3.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_kelcibabatadm_cimahi2008_0.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_gildakmlTrack240722130727_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Buffered_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_UTMPerindukangilda_kml__track240722130727_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_UTMPerindukangilda_kml__track240722130727_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});