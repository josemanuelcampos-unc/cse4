var wms_layers = [];

var format_8Convocatoria2020mapadecalor_0 = new ol.format.GeoJSON();
var features_8Convocatoria2020mapadecalor_0 = format_8Convocatoria2020mapadecalor_0.readFeatures(json_8Convocatoria2020mapadecalor_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8Convocatoria2020mapadecalor_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8Convocatoria2020mapadecalor_0.addFeatures(features_8Convocatoria2020mapadecalor_0);
var lyr_8Convocatoria2020mapadecalor_0 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_8Convocatoria2020mapadecalor_0, 
                radius: 10 * 2,
                gradient: ['#000004', '#02020b', '#050416', '#090720', '#0e0b2b', '#140e36', '#1a1042', '#21114e', '#29115a', '#311165', '#390f6e', '#420f75', '#4a1079', '#52137c', '#5a167e', '#621980', '#6a1c81', '#721f81', '#792282', '#812581', '#892881', '#912b81', '#992d80', '#a1307e', '#aa337d', '#b2357b', '#ba3878', '#c23b75', '#ca3e72', '#d2426f', '#d9466b', '#e04c67', '#e75263', '#ec5860', '#f1605d', '#f4695c', '#f7725c', '#f97b5d', '#fb8560', '#fc8e64', '#fd9869', '#fea16e', '#feaa74', '#feb47b', '#febd82', '#fec68a', '#fecf92', '#fed89a', '#fde2a3', '#fdebac', '#fcf4b6', '#fcfdbf'],
                blur: 15,
                shadow: 250,
                title: '8° Convocatoria 2020 mapa de calor'
            });
var format_8Convocatoria2020_1 = new ol.format.GeoJSON();
var features_8Convocatoria2020_1 = format_8Convocatoria2020_1.readFeatures(json_8Convocatoria2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8Convocatoria2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8Convocatoria2020_1.addFeatures(features_8Convocatoria2020_1);
var lyr_8Convocatoria2020_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8Convocatoria2020_1, 
                style: style_8Convocatoria2020_1,
                interactive: true,
                title: '<img src="styles/legend/8Convocatoria2020_1.png" /> 8° Convocatoria 2020'
            });
var format_7Convocatoria2020mapadecalor_2 = new ol.format.GeoJSON();
var features_7Convocatoria2020mapadecalor_2 = format_7Convocatoria2020mapadecalor_2.readFeatures(json_7Convocatoria2020mapadecalor_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7Convocatoria2020mapadecalor_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7Convocatoria2020mapadecalor_2.addFeatures(features_7Convocatoria2020mapadecalor_2);
var lyr_7Convocatoria2020mapadecalor_2 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_7Convocatoria2020mapadecalor_2, 
                radius: 10 * 2,
                gradient: ['#000004', '#02020b', '#050416', '#090720', '#0e0b2b', '#140e36', '#1a1042', '#21114e', '#29115a', '#311165', '#390f6e', '#420f75', '#4a1079', '#52137c', '#5a167e', '#621980', '#6a1c81', '#721f81', '#792282', '#812581', '#892881', '#912b81', '#992d80', '#a1307e', '#aa337d', '#b2357b', '#ba3878', '#c23b75', '#ca3e72', '#d2426f', '#d9466b', '#e04c67', '#e75263', '#ec5860', '#f1605d', '#f4695c', '#f7725c', '#f97b5d', '#fb8560', '#fc8e64', '#fd9869', '#fea16e', '#feaa74', '#feb47b', '#febd82', '#fec68a', '#fecf92', '#fed89a', '#fde2a3', '#fdebac', '#fcf4b6', '#fcfdbf'],
                blur: 15,
                shadow: 250,
                title: '7° Convocatoria 2020 mapa de calor'
            });
var format_7Convocatoria2020_3 = new ol.format.GeoJSON();
var features_7Convocatoria2020_3 = format_7Convocatoria2020_3.readFeatures(json_7Convocatoria2020_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7Convocatoria2020_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7Convocatoria2020_3.addFeatures(features_7Convocatoria2020_3);
var lyr_7Convocatoria2020_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_7Convocatoria2020_3, 
                style: style_7Convocatoria2020_3,
                interactive: true,
                title: '<img src="styles/legend/7Convocatoria2020_3.png" /> 7° Convocatoria 2020'
            });
var format_6Convocatoria2019mapadecalor_4 = new ol.format.GeoJSON();
var features_6Convocatoria2019mapadecalor_4 = format_6Convocatoria2019mapadecalor_4.readFeatures(json_6Convocatoria2019mapadecalor_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6Convocatoria2019mapadecalor_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6Convocatoria2019mapadecalor_4.addFeatures(features_6Convocatoria2019mapadecalor_4);
var lyr_6Convocatoria2019mapadecalor_4 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_6Convocatoria2019mapadecalor_4, 
                radius: 10 * 2,
                gradient: ['#000004', '#02020b', '#050416', '#090720', '#0e0b2b', '#140e36', '#1a1042', '#21114e', '#29115a', '#311165', '#390f6e', '#420f75', '#4a1079', '#52137c', '#5a167e', '#621980', '#6a1c81', '#721f81', '#792282', '#812581', '#892881', '#912b81', '#992d80', '#a1307e', '#aa337d', '#b2357b', '#ba3878', '#c23b75', '#ca3e72', '#d2426f', '#d9466b', '#e04c67', '#e75263', '#ec5860', '#f1605d', '#f4695c', '#f7725c', '#f97b5d', '#fb8560', '#fc8e64', '#fd9869', '#fea16e', '#feaa74', '#feb47b', '#febd82', '#fec68a', '#fecf92', '#fed89a', '#fde2a3', '#fdebac', '#fcf4b6', '#fcfdbf'],
                blur: 15,
                shadow: 250,
                title: '6° Convocatoria 2019  mapa de calor'
            });
var format_6Convocatoria2019_5 = new ol.format.GeoJSON();
var features_6Convocatoria2019_5 = format_6Convocatoria2019_5.readFeatures(json_6Convocatoria2019_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6Convocatoria2019_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6Convocatoria2019_5.addFeatures(features_6Convocatoria2019_5);
var lyr_6Convocatoria2019_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_6Convocatoria2019_5, 
                style: style_6Convocatoria2019_5,
                interactive: true,
                title: '<img src="styles/legend/6Convocatoria2019_5.png" /> 6° Convocatoria 2019 '
            });
var format_5Convocatoria2019mapadecalor_6 = new ol.format.GeoJSON();
var features_5Convocatoria2019mapadecalor_6 = format_5Convocatoria2019mapadecalor_6.readFeatures(json_5Convocatoria2019mapadecalor_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5Convocatoria2019mapadecalor_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5Convocatoria2019mapadecalor_6.addFeatures(features_5Convocatoria2019mapadecalor_6);
var lyr_5Convocatoria2019mapadecalor_6 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_5Convocatoria2019mapadecalor_6, 
                radius: 10 * 2,
                gradient: ['#000004', '#02020b', '#050416', '#090720', '#0e0b2b', '#140e36', '#1a1042', '#21114e', '#29115a', '#311165', '#390f6e', '#420f75', '#4a1079', '#52137c', '#5a167e', '#621980', '#6a1c81', '#721f81', '#792282', '#812581', '#892881', '#912b81', '#992d80', '#a1307e', '#aa337d', '#b2357b', '#ba3878', '#c23b75', '#ca3e72', '#d2426f', '#d9466b', '#e04c67', '#e75263', '#ec5860', '#f1605d', '#f4695c', '#f7725c', '#f97b5d', '#fb8560', '#fc8e64', '#fd9869', '#fea16e', '#feaa74', '#feb47b', '#febd82', '#fec68a', '#fecf92', '#fed89a', '#fde2a3', '#fdebac', '#fcf4b6', '#fcfdbf'],
                blur: 15,
                shadow: 250,
                title: '5° Convocatoria 2019 mapa de calor'
            });
var format_5Convocatoria2019_7 = new ol.format.GeoJSON();
var features_5Convocatoria2019_7 = format_5Convocatoria2019_7.readFeatures(json_5Convocatoria2019_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5Convocatoria2019_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5Convocatoria2019_7.addFeatures(features_5Convocatoria2019_7);
var lyr_5Convocatoria2019_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5Convocatoria2019_7, 
                style: style_5Convocatoria2019_7,
                interactive: true,
                title: '<img src="styles/legend/5Convocatoria2019_7.png" /> 5° Convocatoria 2019'
            });
var format_4Convocatoria2018mapadecalor_8 = new ol.format.GeoJSON();
var features_4Convocatoria2018mapadecalor_8 = format_4Convocatoria2018mapadecalor_8.readFeatures(json_4Convocatoria2018mapadecalor_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4Convocatoria2018mapadecalor_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4Convocatoria2018mapadecalor_8.addFeatures(features_4Convocatoria2018mapadecalor_8);
var lyr_4Convocatoria2018mapadecalor_8 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_4Convocatoria2018mapadecalor_8, 
                radius: 10 * 2,
                gradient: ['#000004', '#02020b', '#050416', '#090720', '#0e0b2b', '#140e36', '#1a1042', '#21114e', '#29115a', '#311165', '#390f6e', '#420f75', '#4a1079', '#52137c', '#5a167e', '#621980', '#6a1c81', '#721f81', '#792282', '#812581', '#892881', '#912b81', '#992d80', '#a1307e', '#aa337d', '#b2357b', '#ba3878', '#c23b75', '#ca3e72', '#d2426f', '#d9466b', '#e04c67', '#e75263', '#ec5860', '#f1605d', '#f4695c', '#f7725c', '#f97b5d', '#fb8560', '#fc8e64', '#fd9869', '#fea16e', '#feaa74', '#feb47b', '#febd82', '#fec68a', '#fecf92', '#fed89a', '#fde2a3', '#fdebac', '#fcf4b6', '#fcfdbf'],
                blur: 15,
                shadow: 250,
                title: '4° Convocatoria 2018 mapa de calor'
            });
var format_4Convocatoria2018_9 = new ol.format.GeoJSON();
var features_4Convocatoria2018_9 = format_4Convocatoria2018_9.readFeatures(json_4Convocatoria2018_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4Convocatoria2018_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4Convocatoria2018_9.addFeatures(features_4Convocatoria2018_9);
var lyr_4Convocatoria2018_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4Convocatoria2018_9, 
                style: style_4Convocatoria2018_9,
                interactive: true,
                title: '<img src="styles/legend/4Convocatoria2018_9.png" /> 4° Convocatoria 2018'
            });
var format_3Convocatoria2018mapadecalor_10 = new ol.format.GeoJSON();
var features_3Convocatoria2018mapadecalor_10 = format_3Convocatoria2018mapadecalor_10.readFeatures(json_3Convocatoria2018mapadecalor_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3Convocatoria2018mapadecalor_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3Convocatoria2018mapadecalor_10.addFeatures(features_3Convocatoria2018mapadecalor_10);
var lyr_3Convocatoria2018mapadecalor_10 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_3Convocatoria2018mapadecalor_10, 
                radius: 10 * 2,
                gradient: ['#000004', '#02020b', '#050416', '#090720', '#0e0b2b', '#140e36', '#1a1042', '#21114e', '#29115a', '#311165', '#390f6e', '#420f75', '#4a1079', '#52137c', '#5a167e', '#621980', '#6a1c81', '#721f81', '#792282', '#812581', '#892881', '#912b81', '#992d80', '#a1307e', '#aa337d', '#b2357b', '#ba3878', '#c23b75', '#ca3e72', '#d2426f', '#d9466b', '#e04c67', '#e75263', '#ec5860', '#f1605d', '#f4695c', '#f7725c', '#f97b5d', '#fb8560', '#fc8e64', '#fd9869', '#fea16e', '#feaa74', '#feb47b', '#febd82', '#fec68a', '#fecf92', '#fed89a', '#fde2a3', '#fdebac', '#fcf4b6', '#fcfdbf'],
                blur: 15,
                shadow: 250,
                title: '3° Convocatoria 2018 mapa de calor'
            });
var format_3Convocatoria2018_11 = new ol.format.GeoJSON();
var features_3Convocatoria2018_11 = format_3Convocatoria2018_11.readFeatures(json_3Convocatoria2018_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3Convocatoria2018_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3Convocatoria2018_11.addFeatures(features_3Convocatoria2018_11);
var lyr_3Convocatoria2018_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3Convocatoria2018_11, 
                style: style_3Convocatoria2018_11,
                interactive: true,
                title: '<img src="styles/legend/3Convocatoria2018_11.png" /> 3° Convocatoria 2018'
            });
var format_2Convocatoria2018mapadecalor_12 = new ol.format.GeoJSON();
var features_2Convocatoria2018mapadecalor_12 = format_2Convocatoria2018mapadecalor_12.readFeatures(json_2Convocatoria2018mapadecalor_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2Convocatoria2018mapadecalor_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2Convocatoria2018mapadecalor_12.addFeatures(features_2Convocatoria2018mapadecalor_12);
var lyr_2Convocatoria2018mapadecalor_12 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_2Convocatoria2018mapadecalor_12, 
                radius: 10 * 2,
                gradient: ['#000004', '#02020b', '#050416', '#090720', '#0e0b2b', '#140e36', '#1a1042', '#21114e', '#29115a', '#311165', '#390f6e', '#420f75', '#4a1079', '#52137c', '#5a167e', '#621980', '#6a1c81', '#721f81', '#792282', '#812581', '#892881', '#912b81', '#992d80', '#a1307e', '#aa337d', '#b2357b', '#ba3878', '#c23b75', '#ca3e72', '#d2426f', '#d9466b', '#e04c67', '#e75263', '#ec5860', '#f1605d', '#f4695c', '#f7725c', '#f97b5d', '#fb8560', '#fc8e64', '#fd9869', '#fea16e', '#feaa74', '#feb47b', '#febd82', '#fec68a', '#fecf92', '#fed89a', '#fde2a3', '#fdebac', '#fcf4b6', '#fcfdbf'],
                blur: 15,
                shadow: 250,
                title: '2° Convocatoria 2018 mapa de calor'
            });
var format_2Convocatoria2018_13 = new ol.format.GeoJSON();
var features_2Convocatoria2018_13 = format_2Convocatoria2018_13.readFeatures(json_2Convocatoria2018_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2Convocatoria2018_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2Convocatoria2018_13.addFeatures(features_2Convocatoria2018_13);
var lyr_2Convocatoria2018_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2Convocatoria2018_13, 
                style: style_2Convocatoria2018_13,
                interactive: true,
                title: '<img src="styles/legend/2Convocatoria2018_13.png" /> 2° Convocatoria 2018'
            });
var format_1Convocatoria2018mapadecalor_14 = new ol.format.GeoJSON();
var features_1Convocatoria2018mapadecalor_14 = format_1Convocatoria2018mapadecalor_14.readFeatures(json_1Convocatoria2018mapadecalor_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1Convocatoria2018mapadecalor_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1Convocatoria2018mapadecalor_14.addFeatures(features_1Convocatoria2018mapadecalor_14);
var lyr_1Convocatoria2018mapadecalor_14 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_1Convocatoria2018mapadecalor_14, 
                radius: 10 * 2,
                gradient: ['#000004', '#02020b', '#050416', '#090720', '#0e0b2b', '#140e36', '#1a1042', '#21114e', '#29115a', '#311165', '#390f6e', '#420f75', '#4a1079', '#52137c', '#5a167e', '#621980', '#6a1c81', '#721f81', '#792282', '#812581', '#892881', '#912b81', '#992d80', '#a1307e', '#aa337d', '#b2357b', '#ba3878', '#c23b75', '#ca3e72', '#d2426f', '#d9466b', '#e04c67', '#e75263', '#ec5860', '#f1605d', '#f4695c', '#f7725c', '#f97b5d', '#fb8560', '#fc8e64', '#fd9869', '#fea16e', '#feaa74', '#feb47b', '#febd82', '#fec68a', '#fecf92', '#fed89a', '#fde2a3', '#fdebac', '#fcf4b6', '#fcfdbf'],
                blur: 15,
                shadow: 250,
                title: '1° Convocatoria 2018 mapa de calor'
            });
var format_1Convocatoria2018_15 = new ol.format.GeoJSON();
var features_1Convocatoria2018_15 = format_1Convocatoria2018_15.readFeatures(json_1Convocatoria2018_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1Convocatoria2018_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1Convocatoria2018_15.addFeatures(features_1Convocatoria2018_15);
var lyr_1Convocatoria2018_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1Convocatoria2018_15, 
                style: style_1Convocatoria2018_15,
                interactive: true,
                title: '<img src="styles/legend/1Convocatoria2018_15.png" /> 1° Convocatoria 2018'
            });
var format_AsociacionCivil_16 = new ol.format.GeoJSON();
var features_AsociacionCivil_16 = format_AsociacionCivil_16.readFeatures(json_AsociacionCivil_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AsociacionCivil_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AsociacionCivil_16.addFeatures(features_AsociacionCivil_16);
var lyr_AsociacionCivil_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AsociacionCivil_16, 
                style: style_AsociacionCivil_16,
                interactive: true,
                title: '<img src="styles/legend/AsociacionCivil_16.png" /> Asociacion Civil'
            });
var format_Fundacion_17 = new ol.format.GeoJSON();
var features_Fundacion_17 = format_Fundacion_17.readFeatures(json_Fundacion_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fundacion_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fundacion_17.addFeatures(features_Fundacion_17);
var lyr_Fundacion_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fundacion_17, 
                style: style_Fundacion_17,
                interactive: true,
                title: '<img src="styles/legend/Fundacion_17.png" /> Fundacion'
            });
var format_Comercio_18 = new ol.format.GeoJSON();
var features_Comercio_18 = format_Comercio_18.readFeatures(json_Comercio_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comercio_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comercio_18.addFeatures(features_Comercio_18);
var lyr_Comercio_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comercio_18, 
                style: style_Comercio_18,
                interactive: true,
                title: '<img src="styles/legend/Comercio_18.png" /> Comercio'
            });
var format_OrganismosPublicos_19 = new ol.format.GeoJSON();
var features_OrganismosPublicos_19 = format_OrganismosPublicos_19.readFeatures(json_OrganismosPublicos_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OrganismosPublicos_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OrganismosPublicos_19.addFeatures(features_OrganismosPublicos_19);
var lyr_OrganismosPublicos_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OrganismosPublicos_19, 
                style: style_OrganismosPublicos_19,
                interactive: true,
                title: '<img src="styles/legend/OrganismosPublicos_19.png" /> Organismos Publicos'
            });

        var lyr_OpenStreetMap_20 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var group_CSEOrganizaciones = new ol.layer.Group({
                                layers: [lyr_AsociacionCivil_16,lyr_Fundacion_17,lyr_Comercio_18,lyr_OrganismosPublicos_19,],
                                title: "CSE - Organizaciones"});
var group_CSEConvocatoria2018 = new ol.layer.Group({
                                layers: [lyr_4Convocatoria2018mapadecalor_8,lyr_4Convocatoria2018_9,lyr_3Convocatoria2018mapadecalor_10,lyr_3Convocatoria2018_11,lyr_2Convocatoria2018mapadecalor_12,lyr_2Convocatoria2018_13,lyr_1Convocatoria2018mapadecalor_14,lyr_1Convocatoria2018_15,],
                                title: "CSE - Convocatoria 2018"});
var group_CSEConvocatoria2019 = new ol.layer.Group({
                                layers: [lyr_6Convocatoria2019mapadecalor_4,lyr_6Convocatoria2019_5,lyr_5Convocatoria2019mapadecalor_6,lyr_5Convocatoria2019_7,],
                                title: "CSE - Convocatoria 2019"});
var group_CSEConvocatoria2020 = new ol.layer.Group({
                                layers: [lyr_8Convocatoria2020mapadecalor_0,lyr_8Convocatoria2020_1,lyr_7Convocatoria2020mapadecalor_2,lyr_7Convocatoria2020_3,],
                                title: "CSE - Convocatoria 2020"});

lyr_8Convocatoria2020mapadecalor_0.setVisible(true);lyr_8Convocatoria2020_1.setVisible(true);lyr_7Convocatoria2020mapadecalor_2.setVisible(true);lyr_7Convocatoria2020_3.setVisible(true);lyr_6Convocatoria2019mapadecalor_4.setVisible(true);lyr_6Convocatoria2019_5.setVisible(true);lyr_5Convocatoria2019mapadecalor_6.setVisible(true);lyr_5Convocatoria2019_7.setVisible(true);lyr_4Convocatoria2018mapadecalor_8.setVisible(true);lyr_4Convocatoria2018_9.setVisible(true);lyr_3Convocatoria2018mapadecalor_10.setVisible(true);lyr_3Convocatoria2018_11.setVisible(true);lyr_2Convocatoria2018mapadecalor_12.setVisible(true);lyr_2Convocatoria2018_13.setVisible(true);lyr_1Convocatoria2018mapadecalor_14.setVisible(true);lyr_1Convocatoria2018_15.setVisible(true);lyr_AsociacionCivil_16.setVisible(true);lyr_Fundacion_17.setVisible(true);lyr_Comercio_18.setVisible(true);lyr_OrganismosPublicos_19.setVisible(true);lyr_OpenStreetMap_20.setVisible(true);
var layersList = [group_CSEConvocatoria2020,group_CSEConvocatoria2019,group_CSEConvocatoria2018,group_CSEOrganizaciones,lyr_OpenStreetMap_20];
lyr_8Convocatoria2020_1.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Código': 'Código', 'Código de': 'Código de', 'Dependenci': 'Dependenci', 'Dependen_1': 'Dependen_1', 'Descripci�': 'Descripci�', 'Dirección': 'Dirección', 'Director/a': 'Director/a', 'Email': 'Email', 'Línea Tem': 'Línea Tem', 'Número': 'Número', 'Sitio Web': 'Sitio Web', });
lyr_7Convocatoria2020_3.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Código': 'Código', 'Código de': 'Código de', 'Dependenci': 'Dependenci', 'Dependen_1': 'Dependen_1', 'Descripci�': 'Descripci�', 'Dirección': 'Dirección', 'Director/a': 'Director/a', 'Email': 'Email', 'Línea Tem': 'Línea Tem', 'Número': 'Número', 'Sitio Web': 'Sitio Web', });
lyr_6Convocatoria2019_5.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Código': 'Código', 'Código de': 'Código de', 'Dependenci': 'Dependenci', 'Dependen_1': 'Dependen_1', 'Descripci�': 'Descripci�', 'Dirección': 'Dirección', 'Director/a': 'Director/a', 'Email': 'Email', 'Línea Tem': 'Línea Tem', 'Número': 'Número', 'Sitio Web': 'Sitio Web', });
lyr_5Convocatoria2019_7.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Código': 'Código', 'Código de': 'Código de', 'Dependenci': 'Dependenci', 'Dependen_1': 'Dependen_1', 'Descripci�': 'Descripci�', 'Dirección': 'Dirección', 'Director/a': 'Director/a', 'Email': 'Email', 'Línea Tem': 'Línea Tem', 'Número': 'Número', 'Sitio Web': 'Sitio Web', });
lyr_4Convocatoria2018_9.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Código': 'Código', 'Código de': 'Código de', 'Dependenci': 'Dependenci', 'Dependen_1': 'Dependen_1', 'Descripci�': 'Descripci�', 'Dirección': 'Dirección', 'Director/a': 'Director/a', 'Email': 'Email', 'Línea Tem': 'Línea Tem', 'Número': 'Número', 'Sitio Web': 'Sitio Web', });
lyr_3Convocatoria2018_11.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Código': 'Código', 'Código de': 'Código de', 'Dependenci': 'Dependenci', 'Dependen_1': 'Dependen_1', 'Descripci�': 'Descripci�', 'Dirección': 'Dirección', 'Director/a': 'Director/a', 'Email': 'Email', 'Línea Tem': 'Línea Tem', 'Número': 'Número', 'Sitio Web': 'Sitio Web', });
lyr_2Convocatoria2018_13.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Código': 'Código', 'Código de': 'Código de', 'Dependenci': 'Dependenci', 'Dependen_1': 'Dependen_1', 'Descripci�': 'Descripci�', 'Dirección': 'Dirección', 'Director/a': 'Director/a', 'Email': 'Email', 'Línea Tem': 'Línea Tem', 'Número': 'Número', 'Sitio Web': 'Sitio Web', });
lyr_1Convocatoria2018_15.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Código': 'Código', 'Código de': 'Código de', 'Dependenci': 'Dependenci', 'Dependen_1': 'Dependen_1', 'Descripci�': 'Descripci�', 'Dirección': 'Dirección', 'Director/a': 'Director/a', 'Email': 'Email', 'Línea Tem': 'Línea Tem', 'Número': 'Número', 'Sitio Web': 'Sitio Web', });
lyr_AsociacionCivil_16.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Código': 'Código', 'Código de': 'Código de', 'Dependenci': 'Dependenci', 'Dependen_1': 'Dependen_1', 'Descripci�': 'Descripci�', 'Dirección': 'Dirección', 'Director/a': 'Director/a', 'Email': 'Email', 'Línea Tem': 'Línea Tem', 'Número': 'Número', 'Sitio Web': 'Sitio Web', });
lyr_Fundacion_17.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Código': 'Código', 'Código de': 'Código de', 'Dependenci': 'Dependenci', 'Dependen_1': 'Dependen_1', 'Descripci�': 'Descripci�', 'Dirección': 'Dirección', 'Director/a': 'Director/a', 'Email': 'Email', 'Línea Tem': 'Línea Tem', 'Número': 'Número', 'Sitio Web': 'Sitio Web', 'imagen': 'imagen', 'URL': 'URL', });
lyr_Comercio_18.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Código': 'Código', 'Código de': 'Código de', 'Dependenci': 'Dependenci', 'Dependen_1': 'Dependen_1', 'Descripci�': 'Descripci�', 'Dirección': 'Dirección', 'Director/a': 'Director/a', 'Email': 'Email', 'Línea Tem': 'Línea Tem', 'Número': 'Número', 'Sitio Web': 'Sitio Web', });
lyr_OrganismosPublicos_19.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Código': 'Código', 'Código de': 'Código de', 'Dependenci': 'Dependenci', 'Dependen_1': 'Dependen_1', 'Descripci�': 'Descripci�', 'Dirección': 'Dirección', 'Director/a': 'Director/a', 'Email': 'Email', 'Línea Tem': 'Línea Tem', 'Número': 'Número', 'Sitio Web': 'Sitio Web', });
lyr_8Convocatoria2020_1.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Código': 'TextEdit', 'Código de': 'TextEdit', 'Dependenci': 'TextEdit', 'Dependen_1': 'TextEdit', 'Descripci�': 'TextEdit', 'Dirección': 'TextEdit', 'Director/a': 'TextEdit', 'Email': 'TextEdit', 'Línea Tem': 'TextEdit', 'Número': 'TextEdit', 'Sitio Web': 'TextEdit', });
lyr_7Convocatoria2020_3.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Código': 'TextEdit', 'Código de': 'TextEdit', 'Dependenci': 'TextEdit', 'Dependen_1': 'TextEdit', 'Descripci�': 'TextEdit', 'Dirección': 'TextEdit', 'Director/a': 'TextEdit', 'Email': 'TextEdit', 'Línea Tem': 'TextEdit', 'Número': 'TextEdit', 'Sitio Web': 'TextEdit', });
lyr_6Convocatoria2019_5.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Código': 'TextEdit', 'Código de': 'TextEdit', 'Dependenci': 'TextEdit', 'Dependen_1': 'TextEdit', 'Descripci�': 'TextEdit', 'Dirección': 'TextEdit', 'Director/a': 'TextEdit', 'Email': 'TextEdit', 'Línea Tem': 'TextEdit', 'Número': 'TextEdit', 'Sitio Web': 'TextEdit', });
lyr_5Convocatoria2019_7.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Código': 'TextEdit', 'Código de': 'TextEdit', 'Dependenci': 'TextEdit', 'Dependen_1': 'TextEdit', 'Descripci�': 'TextEdit', 'Dirección': 'TextEdit', 'Director/a': 'TextEdit', 'Email': 'TextEdit', 'Línea Tem': 'TextEdit', 'Número': 'TextEdit', 'Sitio Web': 'TextEdit', });
lyr_4Convocatoria2018_9.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Código': 'TextEdit', 'Código de': 'TextEdit', 'Dependenci': 'TextEdit', 'Dependen_1': 'TextEdit', 'Descripci�': 'TextEdit', 'Dirección': 'TextEdit', 'Director/a': 'TextEdit', 'Email': 'TextEdit', 'Línea Tem': 'TextEdit', 'Número': 'TextEdit', 'Sitio Web': 'TextEdit', });
lyr_3Convocatoria2018_11.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Código': 'TextEdit', 'Código de': 'TextEdit', 'Dependenci': 'TextEdit', 'Dependen_1': 'TextEdit', 'Descripci�': 'TextEdit', 'Dirección': 'TextEdit', 'Director/a': 'TextEdit', 'Email': 'TextEdit', 'Línea Tem': 'TextEdit', 'Número': 'TextEdit', 'Sitio Web': 'TextEdit', });
lyr_2Convocatoria2018_13.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Código': 'TextEdit', 'Código de': 'TextEdit', 'Dependenci': 'TextEdit', 'Dependen_1': 'TextEdit', 'Descripci�': 'TextEdit', 'Dirección': 'TextEdit', 'Director/a': 'TextEdit', 'Email': 'TextEdit', 'Línea Tem': 'TextEdit', 'Número': 'TextEdit', 'Sitio Web': 'TextEdit', });
lyr_1Convocatoria2018_15.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Código': 'TextEdit', 'Código de': 'TextEdit', 'Dependenci': 'TextEdit', 'Dependen_1': 'TextEdit', 'Descripci�': 'TextEdit', 'Dirección': 'TextEdit', 'Director/a': 'TextEdit', 'Email': 'TextEdit', 'Línea Tem': 'TextEdit', 'Número': 'TextEdit', 'Sitio Web': 'TextEdit', });
lyr_AsociacionCivil_16.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Código': 'TextEdit', 'Código de': 'TextEdit', 'Dependenci': 'TextEdit', 'Dependen_1': 'TextEdit', 'Descripci�': 'TextEdit', 'Dirección': 'TextEdit', 'Director/a': 'TextEdit', 'Email': 'TextEdit', 'Línea Tem': 'TextEdit', 'Número': 'TextEdit', 'Sitio Web': 'TextEdit', });
lyr_Fundacion_17.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Código': 'TextEdit', 'Código de': 'TextEdit', 'Dependenci': 'TextEdit', 'Dependen_1': 'TextEdit', 'Descripci�': 'TextEdit', 'Dirección': 'TextEdit', 'Director/a': 'TextEdit', 'Email': 'TextEdit', 'Línea Tem': 'TextEdit', 'Número': 'TextEdit', 'Sitio Web': 'TextEdit', 'imagen': 'ExternalResource', 'URL': 'ExternalResource', });
lyr_Comercio_18.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Código': 'TextEdit', 'Código de': 'TextEdit', 'Dependenci': 'TextEdit', 'Dependen_1': 'TextEdit', 'Descripci�': 'TextEdit', 'Dirección': 'TextEdit', 'Director/a': 'TextEdit', 'Email': 'TextEdit', 'Línea Tem': 'TextEdit', 'Número': 'TextEdit', 'Sitio Web': 'TextEdit', });
lyr_OrganismosPublicos_19.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Código': 'TextEdit', 'Código de': 'TextEdit', 'Dependenci': 'TextEdit', 'Dependen_1': 'TextEdit', 'Descripci�': 'TextEdit', 'Dirección': 'TextEdit', 'Director/a': 'TextEdit', 'Email': 'TextEdit', 'Línea Tem': 'TextEdit', 'Número': 'TextEdit', 'Sitio Web': 'TextEdit', });
lyr_8Convocatoria2020_1.set('fieldLabels', {});
lyr_7Convocatoria2020_3.set('fieldLabels', {});
lyr_6Convocatoria2019_5.set('fieldLabels', {});
lyr_5Convocatoria2019_7.set('fieldLabels', {});
lyr_4Convocatoria2018_9.set('fieldLabels', {});
lyr_3Convocatoria2018_11.set('fieldLabels', {});
lyr_2Convocatoria2018_13.set('fieldLabels', {});
lyr_1Convocatoria2018_15.set('fieldLabels', {});
lyr_AsociacionCivil_16.set('fieldLabels', {});
lyr_Fundacion_17.set('fieldLabels', {});
lyr_Comercio_18.set('fieldLabels', {});
lyr_OrganismosPublicos_19.set('fieldLabels', {});
lyr_OrganismosPublicos_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});