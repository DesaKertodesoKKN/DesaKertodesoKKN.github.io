var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_BATAS_1 = new ol.format.GeoJSON();
var features_BATAS_1 = format_BATAS_1.readFeatures(json_BATAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_1.addFeatures(features_BATAS_1);
var lyr_BATAS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATAS_1, 
                style: style_BATAS_1,
                popuplayertitle: "BATAS",
                interactive: true,
                title: '<img src="styles/legend/BATAS_1.png" /> BATAS'
            });
var format_krajan_2 = new ol.format.GeoJSON();
var features_krajan_2 = format_krajan_2.readFeatures(json_krajan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_krajan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_krajan_2.addFeatures(features_krajan_2);
var lyr_krajan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_krajan_2, 
                style: style_krajan_2,
                popuplayertitle: "krajan",
                interactive: true,
                title: '<img src="styles/legend/krajan_2.png" /> krajan'
            });
var format_dasar_3 = new ol.format.GeoJSON();
var features_dasar_3 = format_dasar_3.readFeatures(json_dasar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dasar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dasar_3.addFeatures(features_dasar_3);
var lyr_dasar_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dasar_3, 
                style: style_dasar_3,
                popuplayertitle: "dasar",
                interactive: true,
                title: '<img src="styles/legend/dasar_3.png" /> dasar'
            });
var format_patukdasar_4 = new ol.format.GeoJSON();
var features_patukdasar_4 = format_patukdasar_4.readFeatures(json_patukdasar_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_patukdasar_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_patukdasar_4.addFeatures(features_patukdasar_4);
var lyr_patukdasar_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_patukdasar_4, 
                style: style_patukdasar_4,
                popuplayertitle: "patukdasar",
                interactive: true,
                title: '<img src="styles/legend/patukdasar_4.png" /> patukdasar'
            });
var format_kedungsawit_5 = new ol.format.GeoJSON();
var features_kedungsawit_5 = format_kedungsawit_5.readFeatures(json_kedungsawit_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kedungsawit_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kedungsawit_5.addFeatures(features_kedungsawit_5);
var lyr_kedungsawit_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kedungsawit_5, 
                style: style_kedungsawit_5,
                popuplayertitle: "kedungsawit",
                interactive: true,
                title: '<img src="styles/legend/kedungsawit_5.png" /> kedungsawit'
            });
var format_dasarwetan_6 = new ol.format.GeoJSON();
var features_dasarwetan_6 = format_dasarwetan_6.readFeatures(json_dasarwetan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dasarwetan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dasarwetan_6.addFeatures(features_dasarwetan_6);
var lyr_dasarwetan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dasarwetan_6, 
                style: style_dasarwetan_6,
                popuplayertitle: "dasarwetan",
                interactive: true,
                title: '<img src="styles/legend/dasarwetan_6.png" /> dasarwetan'
            });
var format_trukanpakel_7 = new ol.format.GeoJSON();
var features_trukanpakel_7 = format_trukanpakel_7.readFeatures(json_trukanpakel_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trukanpakel_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trukanpakel_7.addFeatures(features_trukanpakel_7);
var lyr_trukanpakel_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_trukanpakel_7, 
                style: style_trukanpakel_7,
                popuplayertitle: "trukanpakel",
                interactive: true,
                title: '<img src="styles/legend/trukanpakel_7.png" /> trukanpakel'
            });
var format_rowopakel_8 = new ol.format.GeoJSON();
var features_rowopakel_8 = format_rowopakel_8.readFeatures(json_rowopakel_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rowopakel_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rowopakel_8.addFeatures(features_rowopakel_8);
var lyr_rowopakel_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rowopakel_8, 
                style: style_rowopakel_8,
                popuplayertitle: "rowopakel",
                interactive: true,
                title: '<img src="styles/legend/rowopakel_8.png" /> rowopakel'
            });
var format_babaanyar_9 = new ol.format.GeoJSON();
var features_babaanyar_9 = format_babaanyar_9.readFeatures(json_babaanyar_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_babaanyar_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_babaanyar_9.addFeatures(features_babaanyar_9);
var lyr_babaanyar_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_babaanyar_9, 
                style: style_babaanyar_9,
                popuplayertitle: "babaanyar",
                interactive: true,
                title: '<img src="styles/legend/babaanyar_9.png" /> babaanyar'
            });
var format_sawah_2_10 = new ol.format.GeoJSON();
var features_sawah_2_10 = format_sawah_2_10.readFeatures(json_sawah_2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawah_2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah_2_10.addFeatures(features_sawah_2_10);
var lyr_sawah_2_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawah_2_10, 
                style: style_sawah_2_10,
                popuplayertitle: "sawah_2",
                interactive: true,
                title: '<img src="styles/legend/sawah_2_10.png" /> sawah_2'
            });
var format_kebun_2_11 = new ol.format.GeoJSON();
var features_kebun_2_11 = format_kebun_2_11.readFeatures(json_kebun_2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kebun_2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kebun_2_11.addFeatures(features_kebun_2_11);
var lyr_kebun_2_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kebun_2_11, 
                style: style_kebun_2_11,
                popuplayertitle: "kebun_2",
                interactive: true,
                title: '<img src="styles/legend/kebun_2_11.png" /> kebun_2'
            });
var format_titik_jambukristal_12 = new ol.format.GeoJSON();
var features_titik_jambukristal_12 = format_titik_jambukristal_12.readFeatures(json_titik_jambukristal_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titik_jambukristal_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titik_jambukristal_12.addFeatures(features_titik_jambukristal_12);
var lyr_titik_jambukristal_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titik_jambukristal_12, 
                style: style_titik_jambukristal_12,
                popuplayertitle: "titik_jambukristal",
                interactive: true,
                title: '<img src="styles/legend/titik_jambukristal_12.png" /> titik_jambukristal'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_BATAS_1.setVisible(true);lyr_krajan_2.setVisible(true);lyr_dasar_3.setVisible(true);lyr_patukdasar_4.setVisible(true);lyr_kedungsawit_5.setVisible(true);lyr_dasarwetan_6.setVisible(true);lyr_trukanpakel_7.setVisible(true);lyr_rowopakel_8.setVisible(true);lyr_babaanyar_9.setVisible(true);lyr_sawah_2_10.setVisible(true);lyr_kebun_2_11.setVisible(true);lyr_titik_jambukristal_12.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_BATAS_1,lyr_krajan_2,lyr_dasar_3,lyr_patukdasar_4,lyr_kedungsawit_5,lyr_dasarwetan_6,lyr_trukanpakel_7,lyr_rowopakel_8,lyr_babaanyar_9,lyr_sawah_2_10,lyr_kebun_2_11,lyr_titik_jambukristal_12];
lyr_BATAS_1.set('fieldAliases', {'fid': 'fid', 'Dusun': 'Dusun', 'RT': 'RT', 'RW': 'RW', 'Nama Pemil': 'Nama Pemil', 'Jenis Pert': 'Jenis Pert', 'Luas Lahan': 'Luas Lahan', });
lyr_krajan_2.set('fieldAliases', {'fid': 'fid', 'Dusun': 'Dusun', 'RT': 'RT', 'RW': 'RW', 'Nama Pemil': 'Nama Pemil', 'Jenis Pert': 'Jenis Pert', 'Luas Lahan': 'Luas Lahan', });
lyr_dasar_3.set('fieldAliases', {'fid': 'fid', 'Dusun': 'Dusun', 'RT': 'RT', 'RW': 'RW', 'Nama Pemil': 'Nama Pemil', 'Jenis Pert': 'Jenis Pert', 'Luas Lahan': 'Luas Lahan', });
lyr_patukdasar_4.set('fieldAliases', {'fid': 'fid', 'Dusun': 'Dusun', 'RT': 'RT', 'RW': 'RW', 'Nama Pemil': 'Nama Pemil', 'Jenis Pert': 'Jenis Pert', 'Luas Lahan': 'Luas Lahan', });
lyr_kedungsawit_5.set('fieldAliases', {'fid': 'fid', 'Dusun': 'Dusun', 'RT': 'RT', 'RW': 'RW', 'Nama Pemil': 'Nama Pemil', 'Jenis Pert': 'Jenis Pert', 'Luas Lahan': 'Luas Lahan', });
lyr_dasarwetan_6.set('fieldAliases', {'fid': 'fid', 'Dusun': 'Dusun', 'RT': 'RT', 'RW': 'RW', 'Nama Pemil': 'Nama Pemil', 'Jenis Pert': 'Jenis Pert', 'Luas Lahan': 'Luas Lahan', });
lyr_trukanpakel_7.set('fieldAliases', {'fid': 'fid', 'Dusun': 'Dusun', 'RT': 'RT', 'RW': 'RW', 'Nama Pemil': 'Nama Pemil', 'Jenis Pert': 'Jenis Pert', 'Luas Lahan': 'Luas Lahan', });
lyr_rowopakel_8.set('fieldAliases', {'fid': 'fid', 'Dusun': 'Dusun', 'RT': 'RT', 'RW': 'RW', 'Nama Pemil': 'Nama Pemil', 'Jenis Pert': 'Jenis Pert', 'Luas Lahan': 'Luas Lahan', });
lyr_babaanyar_9.set('fieldAliases', {'fid': 'fid', 'Dusun': 'Dusun', 'RT': 'RT', 'RW': 'RW', 'Nama Pemil': 'Nama Pemil', 'Jenis Pert': 'Jenis Pert', 'Luas Lahan': 'Luas Lahan', });
lyr_sawah_2_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_kebun_2_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_titik_jambukristal_12.set('fieldAliases', {'fid': 'fid', 'luas_lahan': 'luas_lahan', 'lama_waktupanen': 'lama_waktupanen', 'hasil_panen': 'hasil_panen', 'gagal_panen': 'gagal_panen', 'dusun': 'dusun', 'gambar': 'gambar', });
lyr_BATAS_1.set('fieldImages', {'fid': 'TextEdit', 'Dusun': 'TextEdit', 'RT': 'TextEdit', 'RW': 'TextEdit', 'Nama Pemil': 'TextEdit', 'Jenis Pert': 'TextEdit', 'Luas Lahan': 'TextEdit', });
lyr_krajan_2.set('fieldImages', {'fid': '', 'Dusun': '', 'RT': '', 'RW': '', 'Nama Pemil': '', 'Jenis Pert': '', 'Luas Lahan': '', });
lyr_dasar_3.set('fieldImages', {'fid': '', 'Dusun': '', 'RT': '', 'RW': '', 'Nama Pemil': '', 'Jenis Pert': '', 'Luas Lahan': '', });
lyr_patukdasar_4.set('fieldImages', {'fid': '', 'Dusun': '', 'RT': '', 'RW': '', 'Nama Pemil': '', 'Jenis Pert': '', 'Luas Lahan': '', });
lyr_kedungsawit_5.set('fieldImages', {'fid': '', 'Dusun': '', 'RT': '', 'RW': '', 'Nama Pemil': '', 'Jenis Pert': '', 'Luas Lahan': '', });
lyr_dasarwetan_6.set('fieldImages', {'fid': '', 'Dusun': '', 'RT': '', 'RW': '', 'Nama Pemil': '', 'Jenis Pert': '', 'Luas Lahan': '', });
lyr_trukanpakel_7.set('fieldImages', {'fid': '', 'Dusun': '', 'RT': '', 'RW': '', 'Nama Pemil': '', 'Jenis Pert': '', 'Luas Lahan': '', });
lyr_rowopakel_8.set('fieldImages', {'fid': '', 'Dusun': '', 'RT': '', 'RW': '', 'Nama Pemil': '', 'Jenis Pert': '', 'Luas Lahan': '', });
lyr_babaanyar_9.set('fieldImages', {'fid': '', 'Dusun': '', 'RT': '', 'RW': '', 'Nama Pemil': '', 'Jenis Pert': '', 'Luas Lahan': '', });
lyr_sawah_2_10.set('fieldImages', {'fid': '', 'id': '', });
lyr_kebun_2_11.set('fieldImages', {'fid': '', 'id': '', });
lyr_titik_jambukristal_12.set('fieldImages', {'fid': '', 'luas_lahan': '', 'lama_waktupanen': '', 'hasil_panen': '', 'gagal_panen': '', 'dusun': '', 'gambar': '', });
lyr_BATAS_1.set('fieldLabels', {'fid': 'no label', 'Dusun': 'no label', 'RT': 'no label', 'RW': 'no label', 'Nama Pemil': 'no label', 'Jenis Pert': 'no label', 'Luas Lahan': 'no label', });
lyr_krajan_2.set('fieldLabels', {'fid': 'no label', 'Dusun': 'no label', 'RT': 'no label', 'RW': 'no label', 'Nama Pemil': 'no label', 'Jenis Pert': 'no label', 'Luas Lahan': 'no label', });
lyr_dasar_3.set('fieldLabels', {'fid': 'no label', 'Dusun': 'no label', 'RT': 'no label', 'RW': 'no label', 'Nama Pemil': 'no label', 'Jenis Pert': 'no label', 'Luas Lahan': 'no label', });
lyr_patukdasar_4.set('fieldLabels', {'fid': 'no label', 'Dusun': 'no label', 'RT': 'no label', 'RW': 'no label', 'Nama Pemil': 'no label', 'Jenis Pert': 'no label', 'Luas Lahan': 'no label', });
lyr_kedungsawit_5.set('fieldLabels', {'fid': 'no label', 'Dusun': 'no label', 'RT': 'no label', 'RW': 'no label', 'Nama Pemil': 'no label', 'Jenis Pert': 'no label', 'Luas Lahan': 'no label', });
lyr_dasarwetan_6.set('fieldLabels', {'fid': 'no label', 'Dusun': 'no label', 'RT': 'no label', 'RW': 'no label', 'Nama Pemil': 'no label', 'Jenis Pert': 'no label', 'Luas Lahan': 'no label', });
lyr_trukanpakel_7.set('fieldLabels', {'fid': 'no label', 'Dusun': 'no label', 'RT': 'no label', 'RW': 'no label', 'Nama Pemil': 'no label', 'Jenis Pert': 'no label', 'Luas Lahan': 'no label', });
lyr_rowopakel_8.set('fieldLabels', {'fid': 'no label', 'Dusun': 'no label', 'RT': 'no label', 'RW': 'no label', 'Nama Pemil': 'no label', 'Jenis Pert': 'no label', 'Luas Lahan': 'no label', });
lyr_babaanyar_9.set('fieldLabels', {'fid': 'no label', 'Dusun': 'no label', 'RT': 'no label', 'RW': 'no label', 'Nama Pemil': 'no label', 'Jenis Pert': 'no label', 'Luas Lahan': 'no label', });
lyr_sawah_2_10.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_kebun_2_11.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_titik_jambukristal_12.set('fieldLabels', {'fid': 'no label', 'luas_lahan': 'no label', 'lama_waktupanen': 'no label', 'hasil_panen': 'no label', 'gagal_panen': 'no label', 'dusun': 'no label', 'gambar': 'no label', });
lyr_titik_jambukristal_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});