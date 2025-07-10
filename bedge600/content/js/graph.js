/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 605.0, "minX": 0.0, "maxY": 2572.0, "series": [{"data": [[0.0, 605.0], [0.1, 605.0], [0.2, 621.0], [0.3, 621.0], [0.4, 626.0], [0.5, 663.0], [0.6, 663.0], [0.7, 725.0], [0.8, 725.0], [0.9, 751.0], [1.0, 758.0], [1.1, 758.0], [1.2, 759.0], [1.3, 759.0], [1.4, 763.0], [1.5, 763.0], [1.6, 763.0], [1.7, 764.0], [1.8, 764.0], [1.9, 770.0], [2.0, 773.0], [2.1, 773.0], [2.2, 774.0], [2.3, 774.0], [2.4, 778.0], [2.5, 779.0], [2.6, 779.0], [2.7, 794.0], [2.8, 794.0], [2.9, 802.0], [3.0, 812.0], [3.1, 812.0], [3.2, 814.0], [3.3, 814.0], [3.4, 834.0], [3.5, 835.0], [3.6, 835.0], [3.7, 837.0], [3.8, 837.0], [3.9, 839.0], [4.0, 842.0], [4.1, 842.0], [4.2, 843.0], [4.3, 843.0], [4.4, 853.0], [4.5, 857.0], [4.6, 857.0], [4.7, 858.0], [4.8, 858.0], [4.9, 861.0], [5.0, 862.0], [5.1, 862.0], [5.2, 864.0], [5.3, 864.0], [5.4, 873.0], [5.5, 873.0], [5.6, 877.0], [5.7, 879.0], [5.8, 879.0], [5.9, 881.0], [6.0, 881.0], [6.1, 899.0], [6.2, 902.0], [6.3, 902.0], [6.4, 907.0], [6.5, 907.0], [6.6, 910.0], [6.7, 910.0], [6.8, 910.0], [6.9, 911.0], [7.0, 911.0], [7.1, 911.0], [7.2, 913.0], [7.3, 913.0], [7.4, 913.0], [7.5, 913.0], [7.6, 914.0], [7.7, 915.0], [7.8, 915.0], [7.9, 917.0], [8.0, 917.0], [8.1, 917.0], [8.2, 925.0], [8.3, 925.0], [8.4, 926.0], [8.5, 926.0], [8.6, 926.0], [8.7, 927.0], [8.8, 927.0], [8.9, 927.0], [9.0, 927.0], [9.1, 928.0], [9.2, 929.0], [9.3, 929.0], [9.4, 929.0], [9.5, 929.0], [9.6, 932.0], [9.7, 936.0], [9.8, 936.0], [9.9, 940.0], [10.0, 940.0], [10.1, 946.0], [10.2, 951.0], [10.3, 951.0], [10.4, 953.0], [10.5, 957.0], [10.6, 957.0], [10.7, 961.0], [10.8, 961.0], [10.9, 964.0], [11.0, 964.0], [11.1, 964.0], [11.2, 964.0], [11.3, 964.0], [11.4, 965.0], [11.5, 965.0], [11.6, 965.0], [11.7, 966.0], [11.8, 966.0], [11.9, 967.0], [12.0, 968.0], [12.1, 968.0], [12.2, 970.0], [12.3, 970.0], [12.4, 970.0], [12.5, 970.0], [12.6, 970.0], [12.7, 972.0], [12.8, 972.0], [12.9, 976.0], [13.0, 977.0], [13.1, 977.0], [13.2, 979.0], [13.3, 979.0], [13.4, 984.0], [13.5, 984.0], [13.6, 984.0], [13.7, 984.0], [13.8, 984.0], [13.9, 985.0], [14.0, 986.0], [14.1, 986.0], [14.2, 987.0], [14.3, 987.0], [14.4, 987.0], [14.5, 989.0], [14.6, 989.0], [14.7, 992.0], [14.8, 992.0], [14.9, 992.0], [15.0, 993.0], [15.1, 993.0], [15.2, 995.0], [15.3, 995.0], [15.4, 995.0], [15.5, 996.0], [15.6, 996.0], [15.7, 997.0], [15.8, 997.0], [15.9, 998.0], [16.0, 999.0], [16.1, 999.0], [16.2, 999.0], [16.3, 999.0], [16.4, 1000.0], [16.5, 1002.0], [16.6, 1002.0], [16.7, 1002.0], [16.8, 1002.0], [16.9, 1004.0], [17.0, 1006.0], [17.1, 1006.0], [17.2, 1006.0], [17.3, 1006.0], [17.4, 1007.0], [17.5, 1008.0], [17.6, 1008.0], [17.7, 1013.0], [17.8, 1013.0], [17.9, 1013.0], [18.0, 1020.0], [18.1, 1020.0], [18.2, 1020.0], [18.3, 1020.0], [18.4, 1020.0], [18.5, 1022.0], [18.6, 1022.0], [18.7, 1022.0], [18.8, 1022.0], [18.9, 1022.0], [19.0, 1023.0], [19.1, 1023.0], [19.2, 1024.0], [19.3, 1024.0], [19.4, 1024.0], [19.5, 1025.0], [19.6, 1025.0], [19.7, 1027.0], [19.8, 1027.0], [19.9, 1027.0], [20.0, 1027.0], [20.1, 1027.0], [20.2, 1028.0], [20.3, 1028.0], [20.4, 1030.0], [20.5, 1030.0], [20.6, 1030.0], [20.7, 1032.0], [20.8, 1032.0], [20.9, 1033.0], [21.0, 1033.0], [21.1, 1033.0], [21.2, 1035.0], [21.3, 1035.0], [21.4, 1038.0], [21.5, 1039.0], [21.6, 1039.0], [21.7, 1040.0], [21.8, 1040.0], [21.9, 1040.0], [22.0, 1040.0], [22.1, 1040.0], [22.2, 1043.0], [22.3, 1043.0], [22.4, 1043.0], [22.5, 1044.0], [22.6, 1044.0], [22.7, 1044.0], [22.8, 1044.0], [22.9, 1044.0], [23.0, 1046.0], [23.1, 1046.0], [23.2, 1046.0], [23.3, 1046.0], [23.4, 1047.0], [23.5, 1047.0], [23.6, 1047.0], [23.7, 1047.0], [23.8, 1047.0], [23.9, 1049.0], [24.0, 1049.0], [24.1, 1049.0], [24.2, 1049.0], [24.3, 1049.0], [24.4, 1050.0], [24.5, 1051.0], [24.6, 1051.0], [24.7, 1051.0], [24.8, 1051.0], [24.9, 1052.0], [25.0, 1053.0], [25.1, 1053.0], [25.2, 1053.0], [25.3, 1053.0], [25.4, 1053.0], [25.5, 1054.0], [25.6, 1054.0], [25.7, 1054.0], [25.8, 1054.0], [25.9, 1054.0], [26.0, 1055.0], [26.1, 1055.0], [26.2, 1055.0], [26.3, 1055.0], [26.4, 1056.0], [26.5, 1057.0], [26.6, 1057.0], [26.7, 1057.0], [26.8, 1057.0], [26.9, 1058.0], [27.0, 1058.0], [27.1, 1058.0], [27.2, 1058.0], [27.3, 1058.0], [27.4, 1059.0], [27.5, 1059.0], [27.6, 1059.0], [27.7, 1060.0], [27.8, 1060.0], [27.9, 1060.0], [28.0, 1061.0], [28.1, 1061.0], [28.2, 1062.0], [28.3, 1062.0], [28.4, 1062.0], [28.5, 1063.0], [28.6, 1063.0], [28.7, 1063.0], [28.8, 1063.0], [28.9, 1063.0], [29.0, 1063.0], [29.1, 1063.0], [29.2, 1064.0], [29.3, 1064.0], [29.4, 1064.0], [29.5, 1065.0], [29.6, 1065.0], [29.7, 1065.0], [29.8, 1065.0], [29.9, 1066.0], [30.0, 1069.0], [30.1, 1069.0], [30.2, 1072.0], [30.3, 1072.0], [30.4, 1075.0], [30.5, 1076.0], [30.6, 1076.0], [30.7, 1077.0], [30.8, 1077.0], [30.9, 1078.0], [31.0, 1079.0], [31.1, 1079.0], [31.2, 1080.0], [31.3, 1080.0], [31.4, 1080.0], [31.5, 1080.0], [31.6, 1080.0], [31.7, 1081.0], [31.8, 1081.0], [31.9, 1082.0], [32.0, 1083.0], [32.1, 1083.0], [32.2, 1083.0], [32.3, 1083.0], [32.4, 1085.0], [32.5, 1086.0], [32.6, 1086.0], [32.7, 1087.0], [32.8, 1087.0], [32.9, 1089.0], [33.0, 1094.0], [33.1, 1094.0], [33.2, 1097.0], [33.3, 1097.0], [33.4, 1098.0], [33.5, 1100.0], [33.6, 1100.0], [33.7, 1101.0], [33.8, 1101.0], [33.9, 1101.0], [34.0, 1103.0], [34.1, 1103.0], [34.2, 1105.0], [34.3, 1105.0], [34.4, 1107.0], [34.5, 1107.0], [34.6, 1107.0], [34.7, 1107.0], [34.8, 1107.0], [34.9, 1107.0], [35.0, 1108.0], [35.1, 1108.0], [35.2, 1108.0], [35.3, 1108.0], [35.4, 1109.0], [35.5, 1111.0], [35.6, 1111.0], [35.7, 1111.0], [35.8, 1111.0], [35.9, 1112.0], [36.0, 1112.0], [36.1, 1112.0], [36.2, 1113.0], [36.3, 1113.0], [36.4, 1114.0], [36.5, 1114.0], [36.6, 1114.0], [36.7, 1114.0], [36.8, 1114.0], [36.9, 1115.0], [37.0, 1118.0], [37.1, 1118.0], [37.2, 1120.0], [37.3, 1120.0], [37.4, 1121.0], [37.5, 1125.0], [37.6, 1125.0], [37.7, 1127.0], [37.8, 1127.0], [37.9, 1128.0], [38.0, 1128.0], [38.1, 1128.0], [38.2, 1128.0], [38.3, 1128.0], [38.4, 1129.0], [38.5, 1130.0], [38.6, 1130.0], [38.7, 1133.0], [38.8, 1133.0], [38.9, 1142.0], [39.0, 1144.0], [39.1, 1144.0], [39.2, 1145.0], [39.3, 1145.0], [39.4, 1145.0], [39.5, 1145.0], [39.6, 1145.0], [39.7, 1145.0], [39.8, 1145.0], [39.9, 1146.0], [40.0, 1149.0], [40.1, 1149.0], [40.2, 1151.0], [40.3, 1151.0], [40.4, 1151.0], [40.5, 1151.0], [40.6, 1151.0], [40.7, 1153.0], [40.8, 1153.0], [40.9, 1153.0], [41.0, 1154.0], [41.1, 1154.0], [41.2, 1155.0], [41.3, 1155.0], [41.4, 1156.0], [41.5, 1156.0], [41.6, 1156.0], [41.7, 1157.0], [41.8, 1157.0], [41.9, 1157.0], [42.0, 1158.0], [42.1, 1158.0], [42.2, 1162.0], [42.3, 1162.0], [42.4, 1162.0], [42.5, 1164.0], [42.6, 1164.0], [42.7, 1164.0], [42.8, 1164.0], [42.9, 1165.0], [43.0, 1166.0], [43.1, 1166.0], [43.2, 1167.0], [43.3, 1167.0], [43.4, 1168.0], [43.5, 1169.0], [43.6, 1169.0], [43.7, 1170.0], [43.8, 1170.0], [43.9, 1171.0], [44.0, 1172.0], [44.1, 1172.0], [44.2, 1173.0], [44.3, 1173.0], [44.4, 1174.0], [44.5, 1174.0], [44.6, 1174.0], [44.7, 1175.0], [44.8, 1175.0], [44.9, 1175.0], [45.0, 1175.0], [45.1, 1175.0], [45.2, 1175.0], [45.3, 1175.0], [45.4, 1176.0], [45.5, 1176.0], [45.6, 1176.0], [45.7, 1179.0], [45.8, 1179.0], [45.9, 1180.0], [46.0, 1182.0], [46.1, 1182.0], [46.2, 1183.0], [46.3, 1183.0], [46.4, 1183.0], [46.5, 1184.0], [46.6, 1184.0], [46.7, 1186.0], [46.8, 1186.0], [46.9, 1186.0], [47.0, 1188.0], [47.1, 1188.0], [47.2, 1189.0], [47.3, 1189.0], [47.4, 1189.0], [47.5, 1189.0], [47.6, 1189.0], [47.7, 1189.0], [47.8, 1189.0], [47.9, 1190.0], [48.0, 1190.0], [48.1, 1190.0], [48.2, 1191.0], [48.3, 1191.0], [48.4, 1191.0], [48.5, 1191.0], [48.6, 1191.0], [48.7, 1192.0], [48.8, 1192.0], [48.9, 1193.0], [49.0, 1194.0], [49.1, 1194.0], [49.2, 1194.0], [49.3, 1194.0], [49.4, 1197.0], [49.5, 1197.0], [49.6, 1197.0], [49.7, 1198.0], [49.8, 1198.0], [49.9, 1198.0], [50.0, 1199.0], [50.1, 1199.0], [50.2, 1200.0], [50.3, 1200.0], [50.4, 1201.0], [50.5, 1201.0], [50.6, 1201.0], [50.7, 1201.0], [50.8, 1201.0], [50.9, 1203.0], [51.0, 1204.0], [51.1, 1204.0], [51.2, 1204.0], [51.3, 1204.0], [51.4, 1206.0], [51.5, 1206.0], [51.6, 1206.0], [51.7, 1208.0], [51.8, 1208.0], [51.9, 1208.0], [52.0, 1209.0], [52.1, 1209.0], [52.2, 1209.0], [52.3, 1209.0], [52.4, 1210.0], [52.5, 1211.0], [52.6, 1211.0], [52.7, 1211.0], [52.8, 1211.0], [52.9, 1211.0], [53.0, 1211.0], [53.1, 1211.0], [53.2, 1211.0], [53.3, 1211.0], [53.4, 1213.0], [53.5, 1213.0], [53.6, 1213.0], [53.7, 1213.0], [53.8, 1213.0], [53.9, 1215.0], [54.0, 1215.0], [54.1, 1215.0], [54.2, 1216.0], [54.3, 1216.0], [54.4, 1216.0], [54.5, 1217.0], [54.6, 1217.0], [54.7, 1218.0], [54.8, 1218.0], [54.9, 1220.0], [55.0, 1220.0], [55.1, 1220.0], [55.2, 1220.0], [55.3, 1220.0], [55.4, 1221.0], [55.5, 1221.0], [55.6, 1221.0], [55.7, 1222.0], [55.8, 1222.0], [55.9, 1223.0], [56.0, 1224.0], [56.1, 1224.0], [56.2, 1224.0], [56.3, 1224.0], [56.4, 1224.0], [56.5, 1225.0], [56.6, 1225.0], [56.7, 1225.0], [56.8, 1225.0], [56.9, 1228.0], [57.0, 1228.0], [57.1, 1228.0], [57.2, 1228.0], [57.3, 1228.0], [57.4, 1228.0], [57.5, 1228.0], [57.6, 1228.0], [57.7, 1229.0], [57.8, 1229.0], [57.9, 1229.0], [58.0, 1229.0], [58.1, 1229.0], [58.2, 1230.0], [58.3, 1230.0], [58.4, 1230.0], [58.5, 1230.0], [58.6, 1230.0], [58.7, 1231.0], [58.8, 1231.0], [58.9, 1231.0], [59.0, 1233.0], [59.1, 1233.0], [59.2, 1233.0], [59.3, 1233.0], [59.4, 1234.0], [59.5, 1234.0], [59.6, 1234.0], [59.7, 1235.0], [59.8, 1235.0], [59.9, 1236.0], [60.0, 1237.0], [60.1, 1237.0], [60.2, 1239.0], [60.3, 1239.0], [60.4, 1240.0], [60.5, 1241.0], [60.6, 1241.0], [60.7, 1242.0], [60.8, 1242.0], [60.9, 1242.0], [61.0, 1242.0], [61.1, 1242.0], [61.2, 1243.0], [61.3, 1243.0], [61.4, 1244.0], [61.5, 1244.0], [61.6, 1244.0], [61.7, 1246.0], [61.8, 1246.0], [61.9, 1246.0], [62.0, 1247.0], [62.1, 1247.0], [62.2, 1249.0], [62.3, 1249.0], [62.4, 1250.0], [62.5, 1250.0], [62.6, 1250.0], [62.7, 1251.0], [62.8, 1251.0], [62.9, 1252.0], [63.0, 1252.0], [63.1, 1252.0], [63.2, 1252.0], [63.3, 1252.0], [63.4, 1253.0], [63.5, 1253.0], [63.6, 1253.0], [63.7, 1254.0], [63.8, 1254.0], [63.9, 1255.0], [64.0, 1256.0], [64.1, 1256.0], [64.2, 1256.0], [64.3, 1256.0], [64.4, 1257.0], [64.5, 1257.0], [64.6, 1257.0], [64.7, 1257.0], [64.8, 1257.0], [64.9, 1257.0], [65.0, 1258.0], [65.1, 1258.0], [65.2, 1258.0], [65.3, 1258.0], [65.4, 1258.0], [65.5, 1259.0], [65.6, 1259.0], [65.7, 1261.0], [65.8, 1261.0], [65.9, 1261.0], [66.0, 1262.0], [66.1, 1262.0], [66.2, 1264.0], [66.3, 1264.0], [66.4, 1265.0], [66.5, 1268.0], [66.6, 1268.0], [66.7, 1268.0], [66.8, 1268.0], [66.9, 1269.0], [67.0, 1269.0], [67.1, 1269.0], [67.2, 1274.0], [67.3, 1274.0], [67.4, 1275.0], [67.5, 1279.0], [67.6, 1279.0], [67.7, 1279.0], [67.8, 1279.0], [67.9, 1280.0], [68.0, 1282.0], [68.1, 1282.0], [68.2, 1286.0], [68.3, 1286.0], [68.4, 1288.0], [68.5, 1288.0], [68.6, 1288.0], [68.7, 1289.0], [68.8, 1289.0], [68.9, 1291.0], [69.0, 1295.0], [69.1, 1295.0], [69.2, 1295.0], [69.3, 1295.0], [69.4, 1296.0], [69.5, 1296.0], [69.6, 1296.0], [69.7, 1296.0], [69.8, 1296.0], [69.9, 1297.0], [70.0, 1297.0], [70.1, 1297.0], [70.2, 1298.0], [70.3, 1298.0], [70.4, 1299.0], [70.5, 1304.0], [70.6, 1304.0], [70.7, 1311.0], [70.8, 1311.0], [70.9, 1312.0], [71.0, 1314.0], [71.1, 1314.0], [71.2, 1314.0], [71.3, 1314.0], [71.4, 1316.0], [71.5, 1316.0], [71.6, 1316.0], [71.7, 1317.0], [71.8, 1317.0], [71.9, 1318.0], [72.0, 1319.0], [72.1, 1319.0], [72.2, 1320.0], [72.3, 1320.0], [72.4, 1320.0], [72.5, 1321.0], [72.6, 1321.0], [72.7, 1322.0], [72.8, 1322.0], [72.9, 1323.0], [73.0, 1324.0], [73.1, 1324.0], [73.2, 1324.0], [73.3, 1324.0], [73.4, 1325.0], [73.5, 1325.0], [73.6, 1325.0], [73.7, 1327.0], [73.8, 1327.0], [73.9, 1327.0], [74.0, 1327.0], [74.1, 1327.0], [74.2, 1327.0], [74.3, 1327.0], [74.4, 1327.0], [74.5, 1329.0], [74.6, 1329.0], [74.7, 1330.0], [74.8, 1330.0], [74.9, 1330.0], [75.0, 1332.0], [75.1, 1332.0], [75.2, 1334.0], [75.3, 1334.0], [75.4, 1336.0], [75.5, 1336.0], [75.6, 1336.0], [75.7, 1338.0], [75.8, 1338.0], [75.9, 1338.0], [76.0, 1339.0], [76.1, 1339.0], [76.2, 1342.0], [76.3, 1342.0], [76.4, 1343.0], [76.5, 1345.0], [76.6, 1345.0], [76.7, 1346.0], [76.8, 1346.0], [76.9, 1348.0], [77.0, 1349.0], [77.1, 1349.0], [77.2, 1351.0], [77.3, 1351.0], [77.4, 1351.0], [77.5, 1353.0], [77.6, 1353.0], [77.7, 1355.0], [77.8, 1355.0], [77.9, 1355.0], [78.0, 1355.0], [78.1, 1355.0], [78.2, 1357.0], [78.3, 1357.0], [78.4, 1358.0], [78.5, 1358.0], [78.6, 1358.0], [78.7, 1358.0], [78.8, 1358.0], [78.9, 1359.0], [79.0, 1359.0], [79.1, 1362.0], [79.2, 1363.0], [79.3, 1363.0], [79.4, 1364.0], [79.5, 1364.0], [79.6, 1365.0], [79.7, 1366.0], [79.8, 1366.0], [79.9, 1366.0], [80.0, 1366.0], [80.1, 1375.0], [80.2, 1376.0], [80.3, 1376.0], [80.4, 1379.0], [80.5, 1379.0], [80.6, 1380.0], [80.7, 1385.0], [80.8, 1385.0], [80.9, 1387.0], [81.0, 1387.0], [81.1, 1389.0], [81.2, 1392.0], [81.3, 1392.0], [81.4, 1401.0], [81.5, 1401.0], [81.6, 1402.0], [81.7, 1403.0], [81.8, 1403.0], [81.9, 1404.0], [82.0, 1404.0], [82.1, 1406.0], [82.2, 1414.0], [82.3, 1414.0], [82.4, 1415.0], [82.5, 1415.0], [82.6, 1415.0], [82.7, 1416.0], [82.8, 1416.0], [82.9, 1417.0], [83.0, 1417.0], [83.1, 1417.0], [83.2, 1421.0], [83.3, 1421.0], [83.4, 1423.0], [83.5, 1423.0], [83.6, 1426.0], [83.7, 1426.0], [83.8, 1426.0], [83.9, 1428.0], [84.0, 1428.0], [84.1, 1430.0], [84.2, 1430.0], [84.3, 1430.0], [84.4, 1431.0], [84.5, 1431.0], [84.6, 1432.0], [84.7, 1433.0], [84.8, 1433.0], [84.9, 1435.0], [85.0, 1435.0], [85.1, 1436.0], [85.2, 1439.0], [85.3, 1439.0], [85.4, 1439.0], [85.5, 1439.0], [85.6, 1446.0], [85.7, 1446.0], [85.8, 1446.0], [85.9, 1447.0], [86.0, 1447.0], [86.1, 1450.0], [86.2, 1451.0], [86.3, 1451.0], [86.4, 1452.0], [86.5, 1452.0], [86.6, 1456.0], [86.7, 1457.0], [86.8, 1457.0], [86.9, 1458.0], [87.0, 1458.0], [87.1, 1458.0], [87.2, 1459.0], [87.3, 1459.0], [87.4, 1461.0], [87.5, 1461.0], [87.6, 1463.0], [87.7, 1463.0], [87.8, 1463.0], [87.9, 1464.0], [88.0, 1464.0], [88.1, 1464.0], [88.2, 1471.0], [88.3, 1471.0], [88.4, 1472.0], [88.5, 1472.0], [88.6, 1473.0], [88.7, 1476.0], [88.8, 1476.0], [88.9, 1477.0], [89.0, 1477.0], [89.1, 1479.0], [89.2, 1485.0], [89.3, 1485.0], [89.4, 1491.0], [89.5, 1491.0], [89.6, 1501.0], [89.7, 1503.0], [89.8, 1503.0], [89.9, 1503.0], [90.0, 1503.0], [90.1, 1504.0], [90.2, 1505.0], [90.3, 1505.0], [90.4, 1505.0], [90.5, 1505.0], [90.6, 1508.0], [90.7, 1510.0], [90.8, 1510.0], [90.9, 1511.0], [91.0, 1511.0], [91.1, 1511.0], [91.2, 1520.0], [91.3, 1520.0], [91.4, 1521.0], [91.5, 1521.0], [91.6, 1523.0], [91.7, 1524.0], [91.8, 1524.0], [91.9, 1526.0], [92.0, 1526.0], [92.1, 1528.0], [92.2, 1531.0], [92.3, 1531.0], [92.4, 1531.0], [92.5, 1531.0], [92.6, 1533.0], [92.7, 1539.0], [92.8, 1539.0], [92.9, 1540.0], [93.0, 1540.0], [93.1, 1540.0], [93.2, 1540.0], [93.3, 1540.0], [93.4, 1541.0], [93.5, 1541.0], [93.6, 1546.0], [93.7, 1550.0], [93.8, 1550.0], [93.9, 1551.0], [94.0, 1551.0], [94.1, 1555.0], [94.2, 1563.0], [94.3, 1563.0], [94.4, 1565.0], [94.5, 1565.0], [94.6, 1567.0], [94.7, 1574.0], [94.8, 1574.0], [94.9, 1574.0], [95.0, 1574.0], [95.1, 1578.0], [95.2, 1578.0], [95.3, 1578.0], [95.4, 1579.0], [95.5, 1579.0], [95.6, 1581.0], [95.7, 1583.0], [95.8, 1583.0], [95.9, 1584.0], [96.0, 1584.0], [96.1, 1589.0], [96.2, 1590.0], [96.3, 1590.0], [96.4, 1598.0], [96.5, 1598.0], [96.6, 1599.0], [96.7, 1601.0], [96.8, 1601.0], [96.9, 1601.0], [97.0, 1601.0], [97.1, 1601.0], [97.2, 1607.0], [97.3, 1607.0], [97.4, 1621.0], [97.5, 1621.0], [97.6, 1622.0], [97.7, 1640.0], [97.8, 1640.0], [97.9, 1670.0], [98.0, 1670.0], [98.1, 1677.0], [98.2, 1687.0], [98.3, 1687.0], [98.4, 1703.0], [98.5, 1703.0], [98.6, 1703.0], [98.7, 1715.0], [98.8, 1715.0], [98.9, 1763.0], [99.0, 1763.0], [99.1, 1894.0], [99.2, 1905.0], [99.3, 1905.0], [99.4, 2020.0], [99.5, 2020.0], [99.6, 2047.0], [99.7, 2196.0], [99.8, 2196.0], [99.9, 2572.0], [100.0, 2572.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 122.0, "series": [{"data": [[2100.0, 1.0], [600.0, 4.0], [2500.0, 1.0], [700.0, 13.0], [800.0, 20.0], [900.0, 61.0], [1000.0, 103.0], [1100.0, 100.0], [1200.0, 122.0], [1300.0, 65.0], [1400.0, 49.0], [1500.0, 43.0], [1600.0, 10.0], [1700.0, 4.0], [1800.0, 1.0], [1900.0, 1.0], [2000.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 63.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 537.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 537.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 63.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 7.076923076923074, "minX": 1.7521332E12, "maxY": 8.425925925925926, "series": [{"data": [[1.75213326E12, 7.649999999999997], [1.7521332E12, 8.425925925925926], [1.75213332E12, 7.076923076923074]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213332E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 985.0, "minX": 1.0, "maxY": 2196.0, "series": [{"data": [[8.0, 1220.545893719807], [2.0, 1358.0], [9.0, 1320.2201834862385], [10.0, 1479.2068965517242], [11.0, 1294.75], [12.0, 1539.0], [3.0, 985.0], [13.0, 2196.0], [14.0, 2020.0], [4.0, 1062.0], [1.0, 1199.0], [5.0, 991.2], [6.0, 1016.0425531914896], [7.0, 1121.3437500000002]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[7.785000000000002, 1205.0000000000002]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 14.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 153.4, "minX": 1.7521332E12, "maxY": 367416.25, "series": [{"data": [[1.75213326E12, 367416.25], [1.7521332E12, 165337.7], [1.75213332E12, 79605.63333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75213326E12, 708.0], [1.7521332E12, 318.6], [1.75213332E12, 153.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213332E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1102.6025641025642, "minX": 1.7521332E12, "maxY": 1282.2407407407402, "series": [{"data": [[1.75213326E12, 1192.4277777777786], [1.7521332E12, 1282.2407407407402], [1.75213332E12, 1102.6025641025642]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213332E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 972.0256410256413, "minX": 1.7521332E12, "maxY": 1131.5246913580245, "series": [{"data": [[1.75213326E12, 1052.9444444444455], [1.7521332E12, 1131.5246913580245], [1.75213332E12, 972.0256410256413]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213332E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 383.6794871794872, "minX": 1.7521332E12, "maxY": 475.25308641975295, "series": [{"data": [[1.75213326E12, 429.6444444444444], [1.7521332E12, 475.25308641975295], [1.75213332E12, 383.6794871794872]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213332E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 605.0, "minX": 1.7521332E12, "maxY": 2572.0, "series": [{"data": [[1.75213326E12, 2572.0], [1.7521332E12, 2196.0], [1.75213332E12, 1531.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75213326E12, 663.0], [1.7521332E12, 725.0], [1.75213332E12, 605.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75213326E12, 1462.8000000000002], [1.7521332E12, 1576.8000000000002], [1.75213332E12, 1357.1]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75213326E12, 1640.7199999999993], [1.7521332E12, 2102.1300000000006], [1.75213332E12, 1531.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75213326E12, 1189.5], [1.7521332E12, 1241.5], [1.75213332E12, 1067.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75213326E12, 1552.7999999999995], [1.7521332E12, 1700.6], [1.75213332E12, 1364.1]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213332E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1159.0, "minX": 2.0, "maxY": 2020.0, "series": [{"data": [[8.0, 1164.0], [4.0, 1159.0], [2.0, 1278.5], [9.0, 1201.0], [5.0, 1224.5], [6.0, 1199.0], [3.0, 2020.0], [7.0, 1208.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1010.0, "minX": 2.0, "maxY": 1823.0, "series": [{"data": [[8.0, 1010.0], [4.0, 1045.0], [2.0, 1109.0], [9.0, 1030.0], [5.0, 1095.5], [6.0, 1049.0], [3.0, 1823.0], [7.0, 1057.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.7521332E12, "maxY": 6.0, "series": [{"data": [[1.75213326E12, 6.0], [1.7521332E12, 2.816666666666667], [1.75213332E12, 1.1833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213332E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.3, "minX": 1.7521332E12, "maxY": 6.0, "series": [{"data": [[1.75213326E12, 6.0], [1.7521332E12, 2.7], [1.75213332E12, 1.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213332E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.3, "minX": 1.7521332E12, "maxY": 6.0, "series": [{"data": [[1.75213326E12, 6.0], [1.7521332E12, 2.7], [1.75213332E12, 1.3]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213332E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.3, "minX": 1.7521332E12, "maxY": 6.0, "series": [{"data": [[1.75213326E12, 6.0], [1.7521332E12, 2.7], [1.75213332E12, 1.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213332E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

