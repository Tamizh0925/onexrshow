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
        data: {"result": {"minY": 603.0, "minX": 0.0, "maxY": 1929.0, "series": [{"data": [[0.0, 603.0], [0.1, 615.0], [0.2, 615.0], [0.3, 615.0], [0.4, 623.0], [0.5, 624.0], [0.6, 628.0], [0.7, 630.0], [0.8, 657.0], [0.9, 664.0], [1.0, 664.0], [1.1, 675.0], [1.2, 691.0], [1.3, 693.0], [1.4, 693.0], [1.5, 710.0], [1.6, 713.0], [1.7, 727.0], [1.8, 736.0], [1.9, 744.0], [2.0, 756.0], [2.1, 766.0], [2.2, 775.0], [2.3, 777.0], [2.4, 783.0], [2.5, 794.0], [2.6, 795.0], [2.7, 796.0], [2.8, 798.0], [2.9, 806.0], [3.0, 814.0], [3.1, 817.0], [3.2, 850.0], [3.3, 858.0], [3.4, 868.0], [3.5, 873.0], [3.6, 875.0], [3.7, 881.0], [3.8, 883.0], [3.9, 887.0], [4.0, 890.0], [4.1, 891.0], [4.2, 898.0], [4.3, 898.0], [4.4, 899.0], [4.5, 900.0], [4.6, 900.0], [4.7, 901.0], [4.8, 901.0], [4.9, 901.0], [5.0, 902.0], [5.1, 902.0], [5.2, 902.0], [5.3, 903.0], [5.4, 905.0], [5.5, 905.0], [5.6, 905.0], [5.7, 906.0], [5.8, 906.0], [5.9, 907.0], [6.0, 907.0], [6.1, 907.0], [6.2, 908.0], [6.3, 908.0], [6.4, 909.0], [6.5, 909.0], [6.6, 909.0], [6.7, 909.0], [6.8, 909.0], [6.9, 910.0], [7.0, 910.0], [7.1, 910.0], [7.2, 910.0], [7.3, 910.0], [7.4, 910.0], [7.5, 911.0], [7.6, 911.0], [7.7, 911.0], [7.8, 912.0], [7.9, 912.0], [8.0, 912.0], [8.1, 912.0], [8.2, 912.0], [8.3, 912.0], [8.4, 913.0], [8.5, 913.0], [8.6, 913.0], [8.7, 913.0], [8.8, 914.0], [8.9, 914.0], [9.0, 914.0], [9.1, 914.0], [9.2, 915.0], [9.3, 915.0], [9.4, 915.0], [9.5, 915.0], [9.6, 915.0], [9.7, 916.0], [9.8, 916.0], [9.9, 916.0], [10.0, 916.0], [10.1, 916.0], [10.2, 916.0], [10.3, 917.0], [10.4, 917.0], [10.5, 917.0], [10.6, 917.0], [10.7, 917.0], [10.8, 918.0], [10.9, 918.0], [11.0, 918.0], [11.1, 918.0], [11.2, 918.0], [11.3, 918.0], [11.4, 919.0], [11.5, 919.0], [11.6, 919.0], [11.7, 919.0], [11.8, 919.0], [11.9, 919.0], [12.0, 920.0], [12.1, 920.0], [12.2, 920.0], [12.3, 920.0], [12.4, 920.0], [12.5, 920.0], [12.6, 920.0], [12.7, 921.0], [12.8, 921.0], [12.9, 921.0], [13.0, 921.0], [13.1, 922.0], [13.2, 922.0], [13.3, 922.0], [13.4, 922.0], [13.5, 923.0], [13.6, 923.0], [13.7, 923.0], [13.8, 923.0], [13.9, 923.0], [14.0, 923.0], [14.1, 923.0], [14.2, 924.0], [14.3, 924.0], [14.4, 925.0], [14.5, 925.0], [14.6, 925.0], [14.7, 925.0], [14.8, 926.0], [14.9, 926.0], [15.0, 926.0], [15.1, 926.0], [15.2, 926.0], [15.3, 927.0], [15.4, 927.0], [15.5, 927.0], [15.6, 927.0], [15.7, 927.0], [15.8, 928.0], [15.9, 928.0], [16.0, 928.0], [16.1, 929.0], [16.2, 929.0], [16.3, 929.0], [16.4, 930.0], [16.5, 930.0], [16.6, 930.0], [16.7, 931.0], [16.8, 931.0], [16.9, 931.0], [17.0, 931.0], [17.1, 932.0], [17.2, 932.0], [17.3, 932.0], [17.4, 932.0], [17.5, 933.0], [17.6, 933.0], [17.7, 933.0], [17.8, 933.0], [17.9, 934.0], [18.0, 934.0], [18.1, 934.0], [18.2, 935.0], [18.3, 935.0], [18.4, 935.0], [18.5, 937.0], [18.6, 938.0], [18.7, 938.0], [18.8, 939.0], [18.9, 940.0], [19.0, 940.0], [19.1, 941.0], [19.2, 941.0], [19.3, 941.0], [19.4, 942.0], [19.5, 942.0], [19.6, 943.0], [19.7, 943.0], [19.8, 943.0], [19.9, 943.0], [20.0, 944.0], [20.1, 944.0], [20.2, 947.0], [20.3, 947.0], [20.4, 948.0], [20.5, 949.0], [20.6, 949.0], [20.7, 949.0], [20.8, 950.0], [20.9, 952.0], [21.0, 953.0], [21.1, 953.0], [21.2, 953.0], [21.3, 953.0], [21.4, 954.0], [21.5, 958.0], [21.6, 958.0], [21.7, 961.0], [21.8, 964.0], [21.9, 964.0], [22.0, 964.0], [22.1, 965.0], [22.2, 965.0], [22.3, 966.0], [22.4, 966.0], [22.5, 970.0], [22.6, 971.0], [22.7, 975.0], [22.8, 975.0], [22.9, 975.0], [23.0, 976.0], [23.1, 979.0], [23.2, 980.0], [23.3, 980.0], [23.4, 981.0], [23.5, 983.0], [23.6, 984.0], [23.7, 987.0], [23.8, 988.0], [23.9, 988.0], [24.0, 988.0], [24.1, 990.0], [24.2, 990.0], [24.3, 991.0], [24.4, 993.0], [24.5, 994.0], [24.6, 995.0], [24.7, 995.0], [24.8, 996.0], [24.9, 997.0], [25.0, 997.0], [25.1, 997.0], [25.2, 997.0], [25.3, 997.0], [25.4, 997.0], [25.5, 998.0], [25.6, 999.0], [25.7, 1000.0], [25.8, 1000.0], [25.9, 1000.0], [26.0, 1002.0], [26.1, 1002.0], [26.2, 1004.0], [26.3, 1004.0], [26.4, 1005.0], [26.5, 1005.0], [26.6, 1006.0], [26.7, 1007.0], [26.8, 1008.0], [26.9, 1009.0], [27.0, 1009.0], [27.1, 1009.0], [27.2, 1009.0], [27.3, 1011.0], [27.4, 1011.0], [27.5, 1012.0], [27.6, 1012.0], [27.7, 1013.0], [27.8, 1015.0], [27.9, 1015.0], [28.0, 1017.0], [28.1, 1018.0], [28.2, 1019.0], [28.3, 1020.0], [28.4, 1020.0], [28.5, 1022.0], [28.6, 1023.0], [28.7, 1024.0], [28.8, 1024.0], [28.9, 1025.0], [29.0, 1025.0], [29.1, 1026.0], [29.2, 1026.0], [29.3, 1027.0], [29.4, 1028.0], [29.5, 1029.0], [29.6, 1031.0], [29.7, 1031.0], [29.8, 1031.0], [29.9, 1032.0], [30.0, 1033.0], [30.1, 1034.0], [30.2, 1034.0], [30.3, 1037.0], [30.4, 1039.0], [30.5, 1039.0], [30.6, 1041.0], [30.7, 1043.0], [30.8, 1043.0], [30.9, 1043.0], [31.0, 1045.0], [31.1, 1046.0], [31.2, 1046.0], [31.3, 1046.0], [31.4, 1046.0], [31.5, 1046.0], [31.6, 1047.0], [31.7, 1047.0], [31.8, 1048.0], [31.9, 1048.0], [32.0, 1048.0], [32.1, 1049.0], [32.2, 1049.0], [32.3, 1049.0], [32.4, 1050.0], [32.5, 1050.0], [32.6, 1051.0], [32.7, 1051.0], [32.8, 1051.0], [32.9, 1052.0], [33.0, 1052.0], [33.1, 1053.0], [33.2, 1053.0], [33.3, 1053.0], [33.4, 1054.0], [33.5, 1054.0], [33.6, 1054.0], [33.7, 1054.0], [33.8, 1055.0], [33.9, 1055.0], [34.0, 1055.0], [34.1, 1055.0], [34.2, 1055.0], [34.3, 1055.0], [34.4, 1056.0], [34.5, 1056.0], [34.6, 1056.0], [34.7, 1057.0], [34.8, 1057.0], [34.9, 1057.0], [35.0, 1057.0], [35.1, 1058.0], [35.2, 1058.0], [35.3, 1058.0], [35.4, 1058.0], [35.5, 1059.0], [35.6, 1059.0], [35.7, 1059.0], [35.8, 1059.0], [35.9, 1059.0], [36.0, 1059.0], [36.1, 1060.0], [36.2, 1060.0], [36.3, 1060.0], [36.4, 1060.0], [36.5, 1060.0], [36.6, 1060.0], [36.7, 1060.0], [36.8, 1061.0], [36.9, 1061.0], [37.0, 1061.0], [37.1, 1061.0], [37.2, 1061.0], [37.3, 1061.0], [37.4, 1062.0], [37.5, 1062.0], [37.6, 1062.0], [37.7, 1062.0], [37.8, 1062.0], [37.9, 1062.0], [38.0, 1062.0], [38.1, 1063.0], [38.2, 1063.0], [38.3, 1063.0], [38.4, 1063.0], [38.5, 1063.0], [38.6, 1063.0], [38.7, 1063.0], [38.8, 1064.0], [38.9, 1064.0], [39.0, 1064.0], [39.1, 1064.0], [39.2, 1064.0], [39.3, 1064.0], [39.4, 1065.0], [39.5, 1065.0], [39.6, 1065.0], [39.7, 1065.0], [39.8, 1065.0], [39.9, 1065.0], [40.0, 1065.0], [40.1, 1065.0], [40.2, 1065.0], [40.3, 1066.0], [40.4, 1066.0], [40.5, 1066.0], [40.6, 1066.0], [40.7, 1066.0], [40.8, 1066.0], [40.9, 1067.0], [41.0, 1067.0], [41.1, 1067.0], [41.2, 1067.0], [41.3, 1067.0], [41.4, 1068.0], [41.5, 1068.0], [41.6, 1068.0], [41.7, 1068.0], [41.8, 1068.0], [41.9, 1069.0], [42.0, 1069.0], [42.1, 1069.0], [42.2, 1069.0], [42.3, 1069.0], [42.4, 1069.0], [42.5, 1069.0], [42.6, 1069.0], [42.7, 1069.0], [42.8, 1069.0], [42.9, 1069.0], [43.0, 1070.0], [43.1, 1070.0], [43.2, 1070.0], [43.3, 1070.0], [43.4, 1070.0], [43.5, 1070.0], [43.6, 1070.0], [43.7, 1070.0], [43.8, 1071.0], [43.9, 1071.0], [44.0, 1071.0], [44.1, 1071.0], [44.2, 1071.0], [44.3, 1071.0], [44.4, 1071.0], [44.5, 1072.0], [44.6, 1072.0], [44.7, 1072.0], [44.8, 1073.0], [44.9, 1073.0], [45.0, 1073.0], [45.1, 1073.0], [45.2, 1073.0], [45.3, 1074.0], [45.4, 1074.0], [45.5, 1074.0], [45.6, 1074.0], [45.7, 1074.0], [45.8, 1074.0], [45.9, 1074.0], [46.0, 1074.0], [46.1, 1075.0], [46.2, 1075.0], [46.3, 1076.0], [46.4, 1076.0], [46.5, 1076.0], [46.6, 1077.0], [46.7, 1077.0], [46.8, 1077.0], [46.9, 1077.0], [47.0, 1077.0], [47.1, 1077.0], [47.2, 1077.0], [47.3, 1077.0], [47.4, 1077.0], [47.5, 1078.0], [47.6, 1078.0], [47.7, 1078.0], [47.8, 1078.0], [47.9, 1078.0], [48.0, 1078.0], [48.1, 1078.0], [48.2, 1078.0], [48.3, 1079.0], [48.4, 1079.0], [48.5, 1079.0], [48.6, 1079.0], [48.7, 1079.0], [48.8, 1079.0], [48.9, 1079.0], [49.0, 1079.0], [49.1, 1080.0], [49.2, 1080.0], [49.3, 1080.0], [49.4, 1080.0], [49.5, 1080.0], [49.6, 1081.0], [49.7, 1081.0], [49.8, 1081.0], [49.9, 1081.0], [50.0, 1081.0], [50.1, 1081.0], [50.2, 1081.0], [50.3, 1081.0], [50.4, 1082.0], [50.5, 1082.0], [50.6, 1082.0], [50.7, 1082.0], [50.8, 1082.0], [50.9, 1082.0], [51.0, 1083.0], [51.1, 1083.0], [51.2, 1083.0], [51.3, 1083.0], [51.4, 1084.0], [51.5, 1084.0], [51.6, 1084.0], [51.7, 1084.0], [51.8, 1084.0], [51.9, 1084.0], [52.0, 1085.0], [52.1, 1085.0], [52.2, 1085.0], [52.3, 1085.0], [52.4, 1085.0], [52.5, 1085.0], [52.6, 1086.0], [52.7, 1086.0], [52.8, 1086.0], [52.9, 1086.0], [53.0, 1086.0], [53.1, 1086.0], [53.2, 1086.0], [53.3, 1086.0], [53.4, 1086.0], [53.5, 1087.0], [53.6, 1087.0], [53.7, 1087.0], [53.8, 1087.0], [53.9, 1088.0], [54.0, 1088.0], [54.1, 1088.0], [54.2, 1089.0], [54.3, 1089.0], [54.4, 1089.0], [54.5, 1090.0], [54.6, 1090.0], [54.7, 1090.0], [54.8, 1090.0], [54.9, 1091.0], [55.0, 1091.0], [55.1, 1091.0], [55.2, 1091.0], [55.3, 1092.0], [55.4, 1093.0], [55.5, 1094.0], [55.6, 1095.0], [55.7, 1095.0], [55.8, 1095.0], [55.9, 1096.0], [56.0, 1096.0], [56.1, 1097.0], [56.2, 1099.0], [56.3, 1099.0], [56.4, 1099.0], [56.5, 1099.0], [56.6, 1099.0], [56.7, 1102.0], [56.8, 1102.0], [56.9, 1103.0], [57.0, 1103.0], [57.1, 1103.0], [57.2, 1104.0], [57.3, 1105.0], [57.4, 1105.0], [57.5, 1105.0], [57.6, 1106.0], [57.7, 1107.0], [57.8, 1107.0], [57.9, 1108.0], [58.0, 1108.0], [58.1, 1108.0], [58.2, 1109.0], [58.3, 1109.0], [58.4, 1110.0], [58.5, 1111.0], [58.6, 1113.0], [58.7, 1113.0], [58.8, 1114.0], [58.9, 1115.0], [59.0, 1115.0], [59.1, 1115.0], [59.2, 1116.0], [59.3, 1116.0], [59.4, 1116.0], [59.5, 1117.0], [59.6, 1118.0], [59.7, 1118.0], [59.8, 1118.0], [59.9, 1119.0], [60.0, 1119.0], [60.1, 1119.0], [60.2, 1119.0], [60.3, 1119.0], [60.4, 1120.0], [60.5, 1120.0], [60.6, 1120.0], [60.7, 1121.0], [60.8, 1121.0], [60.9, 1121.0], [61.0, 1121.0], [61.1, 1121.0], [61.2, 1121.0], [61.3, 1122.0], [61.4, 1123.0], [61.5, 1123.0], [61.6, 1123.0], [61.7, 1124.0], [61.8, 1124.0], [61.9, 1124.0], [62.0, 1127.0], [62.1, 1127.0], [62.2, 1129.0], [62.3, 1131.0], [62.4, 1131.0], [62.5, 1132.0], [62.6, 1132.0], [62.7, 1133.0], [62.8, 1133.0], [62.9, 1133.0], [63.0, 1133.0], [63.1, 1134.0], [63.2, 1134.0], [63.3, 1134.0], [63.4, 1135.0], [63.5, 1137.0], [63.6, 1137.0], [63.7, 1137.0], [63.8, 1138.0], [63.9, 1138.0], [64.0, 1139.0], [64.1, 1140.0], [64.2, 1140.0], [64.3, 1141.0], [64.4, 1141.0], [64.5, 1141.0], [64.6, 1141.0], [64.7, 1144.0], [64.8, 1144.0], [64.9, 1145.0], [65.0, 1145.0], [65.1, 1145.0], [65.2, 1146.0], [65.3, 1146.0], [65.4, 1147.0], [65.5, 1147.0], [65.6, 1147.0], [65.7, 1147.0], [65.8, 1148.0], [65.9, 1148.0], [66.0, 1149.0], [66.1, 1149.0], [66.2, 1149.0], [66.3, 1149.0], [66.4, 1150.0], [66.5, 1151.0], [66.6, 1153.0], [66.7, 1155.0], [66.8, 1157.0], [66.9, 1158.0], [67.0, 1158.0], [67.1, 1158.0], [67.2, 1158.0], [67.3, 1158.0], [67.4, 1160.0], [67.5, 1160.0], [67.6, 1161.0], [67.7, 1161.0], [67.8, 1162.0], [67.9, 1163.0], [68.0, 1163.0], [68.1, 1164.0], [68.2, 1166.0], [68.3, 1166.0], [68.4, 1167.0], [68.5, 1168.0], [68.6, 1168.0], [68.7, 1169.0], [68.8, 1169.0], [68.9, 1170.0], [69.0, 1170.0], [69.1, 1170.0], [69.2, 1170.0], [69.3, 1171.0], [69.4, 1171.0], [69.5, 1171.0], [69.6, 1172.0], [69.7, 1173.0], [69.8, 1173.0], [69.9, 1173.0], [70.0, 1173.0], [70.1, 1173.0], [70.2, 1174.0], [70.3, 1174.0], [70.4, 1175.0], [70.5, 1176.0], [70.6, 1177.0], [70.7, 1179.0], [70.8, 1179.0], [70.9, 1182.0], [71.0, 1182.0], [71.1, 1183.0], [71.2, 1184.0], [71.3, 1184.0], [71.4, 1185.0], [71.5, 1185.0], [71.6, 1185.0], [71.7, 1187.0], [71.8, 1187.0], [71.9, 1187.0], [72.0, 1187.0], [72.1, 1187.0], [72.2, 1190.0], [72.3, 1191.0], [72.4, 1191.0], [72.5, 1191.0], [72.6, 1192.0], [72.7, 1192.0], [72.8, 1193.0], [72.9, 1193.0], [73.0, 1194.0], [73.1, 1197.0], [73.2, 1197.0], [73.3, 1198.0], [73.4, 1198.0], [73.5, 1201.0], [73.6, 1201.0], [73.7, 1201.0], [73.8, 1202.0], [73.9, 1203.0], [74.0, 1204.0], [74.1, 1204.0], [74.2, 1205.0], [74.3, 1205.0], [74.4, 1205.0], [74.5, 1205.0], [74.6, 1205.0], [74.7, 1205.0], [74.8, 1206.0], [74.9, 1207.0], [75.0, 1207.0], [75.1, 1209.0], [75.2, 1210.0], [75.3, 1211.0], [75.4, 1211.0], [75.5, 1212.0], [75.6, 1212.0], [75.7, 1213.0], [75.8, 1213.0], [75.9, 1214.0], [76.0, 1215.0], [76.1, 1216.0], [76.2, 1216.0], [76.3, 1216.0], [76.4, 1217.0], [76.5, 1218.0], [76.6, 1219.0], [76.7, 1220.0], [76.8, 1222.0], [76.9, 1223.0], [77.0, 1224.0], [77.1, 1224.0], [77.2, 1226.0], [77.3, 1226.0], [77.4, 1227.0], [77.5, 1227.0], [77.6, 1227.0], [77.7, 1228.0], [77.8, 1228.0], [77.9, 1228.0], [78.0, 1228.0], [78.1, 1229.0], [78.2, 1229.0], [78.3, 1230.0], [78.4, 1230.0], [78.5, 1231.0], [78.6, 1232.0], [78.7, 1232.0], [78.8, 1233.0], [78.9, 1233.0], [79.0, 1233.0], [79.1, 1233.0], [79.2, 1233.0], [79.3, 1233.0], [79.4, 1234.0], [79.5, 1234.0], [79.6, 1234.0], [79.7, 1236.0], [79.8, 1238.0], [79.9, 1238.0], [80.0, 1238.0], [80.1, 1238.0], [80.2, 1239.0], [80.3, 1239.0], [80.4, 1240.0], [80.5, 1241.0], [80.6, 1241.0], [80.7, 1242.0], [80.8, 1242.0], [80.9, 1243.0], [81.0, 1244.0], [81.1, 1244.0], [81.2, 1245.0], [81.3, 1245.0], [81.4, 1245.0], [81.5, 1246.0], [81.6, 1247.0], [81.7, 1247.0], [81.8, 1247.0], [81.9, 1248.0], [82.0, 1248.0], [82.1, 1248.0], [82.2, 1248.0], [82.3, 1249.0], [82.4, 1251.0], [82.5, 1251.0], [82.6, 1252.0], [82.7, 1252.0], [82.8, 1253.0], [82.9, 1254.0], [83.0, 1254.0], [83.1, 1255.0], [83.2, 1257.0], [83.3, 1257.0], [83.4, 1258.0], [83.5, 1259.0], [83.6, 1260.0], [83.7, 1260.0], [83.8, 1261.0], [83.9, 1262.0], [84.0, 1262.0], [84.1, 1262.0], [84.2, 1262.0], [84.3, 1263.0], [84.4, 1263.0], [84.5, 1264.0], [84.6, 1264.0], [84.7, 1264.0], [84.8, 1264.0], [84.9, 1265.0], [85.0, 1265.0], [85.1, 1265.0], [85.2, 1266.0], [85.3, 1267.0], [85.4, 1268.0], [85.5, 1270.0], [85.6, 1271.0], [85.7, 1271.0], [85.8, 1271.0], [85.9, 1274.0], [86.0, 1275.0], [86.1, 1275.0], [86.2, 1276.0], [86.3, 1276.0], [86.4, 1276.0], [86.5, 1276.0], [86.6, 1277.0], [86.7, 1277.0], [86.8, 1278.0], [86.9, 1278.0], [87.0, 1278.0], [87.1, 1280.0], [87.2, 1281.0], [87.3, 1281.0], [87.4, 1283.0], [87.5, 1283.0], [87.6, 1284.0], [87.7, 1285.0], [87.8, 1285.0], [87.9, 1287.0], [88.0, 1287.0], [88.1, 1287.0], [88.2, 1289.0], [88.3, 1289.0], [88.4, 1290.0], [88.5, 1290.0], [88.6, 1290.0], [88.7, 1291.0], [88.8, 1292.0], [88.9, 1292.0], [89.0, 1293.0], [89.1, 1294.0], [89.2, 1294.0], [89.3, 1294.0], [89.4, 1294.0], [89.5, 1295.0], [89.6, 1295.0], [89.7, 1296.0], [89.8, 1297.0], [89.9, 1297.0], [90.0, 1301.0], [90.1, 1302.0], [90.2, 1303.0], [90.3, 1303.0], [90.4, 1305.0], [90.5, 1307.0], [90.6, 1308.0], [90.7, 1308.0], [90.8, 1308.0], [90.9, 1309.0], [91.0, 1313.0], [91.1, 1313.0], [91.2, 1314.0], [91.3, 1316.0], [91.4, 1317.0], [91.5, 1317.0], [91.6, 1318.0], [91.7, 1320.0], [91.8, 1321.0], [91.9, 1321.0], [92.0, 1322.0], [92.1, 1323.0], [92.2, 1323.0], [92.3, 1323.0], [92.4, 1325.0], [92.5, 1325.0], [92.6, 1325.0], [92.7, 1326.0], [92.8, 1328.0], [92.9, 1328.0], [93.0, 1329.0], [93.1, 1330.0], [93.2, 1331.0], [93.3, 1331.0], [93.4, 1333.0], [93.5, 1336.0], [93.6, 1337.0], [93.7, 1338.0], [93.8, 1338.0], [93.9, 1340.0], [94.0, 1341.0], [94.1, 1341.0], [94.2, 1341.0], [94.3, 1344.0], [94.4, 1344.0], [94.5, 1344.0], [94.6, 1345.0], [94.7, 1345.0], [94.8, 1346.0], [94.9, 1347.0], [95.0, 1348.0], [95.1, 1348.0], [95.2, 1350.0], [95.3, 1351.0], [95.4, 1352.0], [95.5, 1352.0], [95.6, 1354.0], [95.7, 1354.0], [95.8, 1356.0], [95.9, 1356.0], [96.0, 1357.0], [96.1, 1357.0], [96.2, 1357.0], [96.3, 1357.0], [96.4, 1358.0], [96.5, 1358.0], [96.6, 1359.0], [96.7, 1364.0], [96.8, 1364.0], [96.9, 1364.0], [97.0, 1365.0], [97.1, 1366.0], [97.2, 1366.0], [97.3, 1368.0], [97.4, 1368.0], [97.5, 1369.0], [97.6, 1370.0], [97.7, 1372.0], [97.8, 1372.0], [97.9, 1372.0], [98.0, 1375.0], [98.1, 1376.0], [98.2, 1376.0], [98.3, 1377.0], [98.4, 1389.0], [98.5, 1398.0], [98.6, 1409.0], [98.7, 1435.0], [98.8, 1440.0], [98.9, 1449.0], [99.0, 1454.0], [99.1, 1498.0], [99.2, 1505.0], [99.3, 1505.0], [99.4, 1511.0], [99.5, 1519.0], [99.6, 1552.0], [99.7, 1660.0], [99.8, 1850.0], [99.9, 1929.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 310.0, "series": [{"data": [[600.0, 14.0], [700.0, 14.0], [800.0, 16.0], [900.0, 212.0], [1000.0, 310.0], [1100.0, 169.0], [1200.0, 165.0], [1300.0, 86.0], [1400.0, 6.0], [1500.0, 5.0], [1600.0, 1.0], [1800.0, 1.0], [1900.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 992.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 992.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.169811320754716, "minX": 1.75213188E12, "maxY": 4.4013605442176855, "series": [{"data": [[1.75213194E12, 4.240000000000001], [1.75213212E12, 4.21608040201005], [1.75213218E12, 4.169811320754716], [1.752132E12, 4.208955223880599], [1.75213206E12, 4.245000000000001], [1.75213188E12, 4.4013605442176855]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213218E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 900.1212121212121, "minX": 1.0, "maxY": 1647.0, "series": [{"data": [[8.0, 1647.0], [4.0, 1063.212427745664], [2.0, 954.0], [1.0, 1079.0], [5.0, 1201.6240601503762], [3.0, 900.1212121212121], [6.0, 1410.3333333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[4.250000000000002, 1097.9309999999991]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 104.23333333333333, "minX": 1.75213188E12, "maxY": 205140.0, "series": [{"data": [[1.75213194E12, 204117.8], [1.75213212E12, 203099.33333333334], [1.75213218E12, 54091.333333333336], [1.752132E12, 205140.0], [1.75213206E12, 204121.03333333333], [1.75213188E12, 150029.61666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75213194E12, 393.3333333333333], [1.75213212E12, 391.3666666666667], [1.75213218E12, 104.23333333333333], [1.752132E12, 395.3], [1.75213206E12, 393.3333333333333], [1.75213188E12, 289.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213218E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1089.402010050251, "minX": 1.75213188E12, "maxY": 1121.3773584905662, "series": [{"data": [[1.75213194E12, 1091.2549999999994], [1.75213212E12, 1089.402010050251], [1.75213218E12, 1121.3773584905662], [1.752132E12, 1092.5721393034826], [1.75213206E12, 1098.7650000000003], [1.75213188E12, 1116.2993197278906]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213218E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 979.8, "minX": 1.75213188E12, "maxY": 1009.6037735849058, "series": [{"data": [[1.75213194E12, 979.8], [1.75213212E12, 984.4824120603018], [1.75213218E12, 1009.6037735849058], [1.752132E12, 985.0995024875622], [1.75213206E12, 983.0150000000003], [1.75213188E12, 1003.5102040816325]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213218E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 370.1050000000001, "minX": 1.75213188E12, "maxY": 387.1698113207548, "series": [{"data": [[1.75213194E12, 370.1050000000001], [1.75213212E12, 371.5577889447239], [1.75213218E12, 387.1698113207548], [1.752132E12, 377.2786069651741], [1.75213206E12, 371.81], [1.75213188E12, 383.87074829931987]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213218E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 603.0, "minX": 1.75213188E12, "maxY": 1929.0, "series": [{"data": [[1.75213194E12, 1376.0], [1.75213212E12, 1375.0], [1.75213218E12, 1519.0], [1.752132E12, 1660.0], [1.75213206E12, 1409.0], [1.75213188E12, 1929.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75213194E12, 603.0], [1.75213212E12, 615.0], [1.75213218E12, 783.0], [1.752132E12, 615.0], [1.75213206E12, 617.0], [1.75213188E12, 691.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75213194E12, 1289.9], [1.75213212E12, 1285.0], [1.75213218E12, 1369.2], [1.752132E12, 1302.6], [1.75213206E12, 1312.5], [1.75213188E12, 1318.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75213194E12, 1369.98], [1.75213212E12, 1372.0], [1.75213218E12, 1519.0], [1.752132E12, 1497.1199999999994], [1.75213206E12, 1388.8700000000001], [1.75213188E12, 1891.0800000000008]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75213194E12, 1079.0], [1.75213212E12, 1084.0], [1.75213218E12, 1090.0], [1.752132E12, 1079.0], [1.75213206E12, 1075.5], [1.75213188E12, 1086.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75213194E12, 1340.85], [1.75213212E12, 1333.0], [1.75213218E12, 1506.8], [1.752132E12, 1363.1999999999998], [1.75213206E12, 1344.0], [1.75213188E12, 1350.3999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213218E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1054.0, "minX": 2.0, "maxY": 1404.5, "series": [{"data": [[4.0, 1077.5], [2.0, 1079.0], [5.0, 1054.0], [6.0, 1404.5], [3.0, 1085.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 936.0, "minX": 2.0, "maxY": 1117.5, "series": [{"data": [[4.0, 984.0], [2.0, 957.5], [5.0, 936.0], [6.0, 1117.5], [3.0, 985.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.75213188E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.75213194E12, 3.3333333333333335], [1.75213212E12, 3.3333333333333335], [1.75213218E12, 0.8166666666666667], [1.752132E12, 3.3333333333333335], [1.75213206E12, 3.3333333333333335], [1.75213188E12, 2.5166666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213218E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8833333333333333, "minX": 1.75213188E12, "maxY": 3.35, "series": [{"data": [[1.75213194E12, 3.3333333333333335], [1.75213212E12, 3.316666666666667], [1.75213218E12, 0.8833333333333333], [1.752132E12, 3.35], [1.75213206E12, 3.3333333333333335], [1.75213188E12, 2.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213218E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8833333333333333, "minX": 1.75213188E12, "maxY": 3.35, "series": [{"data": [[1.75213194E12, 3.3333333333333335], [1.75213212E12, 3.316666666666667], [1.75213218E12, 0.8833333333333333], [1.752132E12, 3.35], [1.75213206E12, 3.3333333333333335], [1.75213188E12, 2.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213218E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8833333333333333, "minX": 1.75213188E12, "maxY": 3.35, "series": [{"data": [[1.75213194E12, 3.3333333333333335], [1.75213212E12, 3.316666666666667], [1.75213218E12, 0.8833333333333333], [1.752132E12, 3.35], [1.75213206E12, 3.3333333333333335], [1.75213188E12, 2.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213218E12, "title": "Total Transactions Per Second"}},
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

