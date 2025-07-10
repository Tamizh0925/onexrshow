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
        data: {"result": {"minY": 613.0, "minX": 0.0, "maxY": 16130.0, "series": [{"data": [[0.0, 613.0], [0.1, 613.0], [0.2, 613.0], [0.3, 613.0], [0.4, 613.0], [0.5, 618.0], [0.6, 618.0], [0.7, 618.0], [0.8, 618.0], [0.9, 618.0], [1.0, 624.0], [1.1, 624.0], [1.2, 624.0], [1.3, 624.0], [1.4, 624.0], [1.5, 624.0], [1.6, 624.0], [1.7, 624.0], [1.8, 624.0], [1.9, 624.0], [2.0, 634.0], [2.1, 634.0], [2.2, 634.0], [2.3, 634.0], [2.4, 634.0], [2.5, 637.0], [2.6, 637.0], [2.7, 637.0], [2.8, 637.0], [2.9, 637.0], [3.0, 638.0], [3.1, 638.0], [3.2, 638.0], [3.3, 638.0], [3.4, 638.0], [3.5, 652.0], [3.6, 652.0], [3.7, 652.0], [3.8, 652.0], [3.9, 652.0], [4.0, 746.0], [4.1, 746.0], [4.2, 746.0], [4.3, 746.0], [4.4, 746.0], [4.5, 756.0], [4.6, 756.0], [4.7, 756.0], [4.8, 756.0], [4.9, 756.0], [5.0, 758.0], [5.1, 758.0], [5.2, 758.0], [5.3, 758.0], [5.4, 758.0], [5.5, 771.0], [5.6, 771.0], [5.7, 771.0], [5.8, 771.0], [5.9, 771.0], [6.0, 774.0], [6.1, 774.0], [6.2, 774.0], [6.3, 774.0], [6.4, 774.0], [6.5, 774.0], [6.6, 774.0], [6.7, 774.0], [6.8, 774.0], [6.9, 774.0], [7.0, 775.0], [7.1, 775.0], [7.2, 775.0], [7.3, 775.0], [7.4, 775.0], [7.5, 778.0], [7.6, 778.0], [7.7, 778.0], [7.8, 778.0], [7.9, 778.0], [8.0, 782.0], [8.1, 782.0], [8.2, 782.0], [8.3, 782.0], [8.4, 782.0], [8.5, 784.0], [8.6, 784.0], [8.7, 784.0], [8.8, 784.0], [8.9, 784.0], [9.0, 788.0], [9.1, 788.0], [9.2, 788.0], [9.3, 788.0], [9.4, 788.0], [9.5, 792.0], [9.6, 792.0], [9.7, 792.0], [9.8, 792.0], [9.9, 792.0], [10.0, 818.0], [10.1, 818.0], [10.2, 818.0], [10.3, 818.0], [10.4, 818.0], [10.5, 854.0], [10.6, 854.0], [10.7, 854.0], [10.8, 854.0], [10.9, 854.0], [11.0, 902.0], [11.1, 902.0], [11.2, 902.0], [11.3, 902.0], [11.4, 902.0], [11.5, 904.0], [11.6, 904.0], [11.7, 904.0], [11.8, 904.0], [11.9, 904.0], [12.0, 905.0], [12.1, 905.0], [12.2, 905.0], [12.3, 905.0], [12.4, 905.0], [12.5, 909.0], [12.6, 909.0], [12.7, 909.0], [12.8, 909.0], [12.9, 909.0], [13.0, 916.0], [13.1, 916.0], [13.2, 916.0], [13.3, 916.0], [13.4, 916.0], [13.5, 918.0], [13.6, 918.0], [13.7, 918.0], [13.8, 918.0], [13.9, 918.0], [14.0, 918.0], [14.1, 918.0], [14.2, 918.0], [14.3, 918.0], [14.4, 918.0], [14.5, 919.0], [14.6, 919.0], [14.7, 919.0], [14.8, 919.0], [14.9, 919.0], [15.0, 924.0], [15.1, 924.0], [15.2, 924.0], [15.3, 924.0], [15.4, 924.0], [15.5, 924.0], [15.6, 924.0], [15.7, 924.0], [15.8, 924.0], [15.9, 924.0], [16.0, 925.0], [16.1, 925.0], [16.2, 925.0], [16.3, 925.0], [16.4, 925.0], [16.5, 927.0], [16.6, 927.0], [16.7, 927.0], [16.8, 927.0], [16.9, 927.0], [17.0, 928.0], [17.1, 928.0], [17.2, 928.0], [17.3, 928.0], [17.4, 928.0], [17.5, 933.0], [17.6, 933.0], [17.7, 933.0], [17.8, 933.0], [17.9, 933.0], [18.0, 933.0], [18.1, 933.0], [18.2, 933.0], [18.3, 933.0], [18.4, 933.0], [18.5, 937.0], [18.6, 937.0], [18.7, 937.0], [18.8, 937.0], [18.9, 937.0], [19.0, 938.0], [19.1, 938.0], [19.2, 938.0], [19.3, 938.0], [19.4, 938.0], [19.5, 940.0], [19.6, 940.0], [19.7, 940.0], [19.8, 940.0], [19.9, 940.0], [20.0, 941.0], [20.1, 941.0], [20.2, 941.0], [20.3, 941.0], [20.4, 941.0], [20.5, 945.0], [20.6, 945.0], [20.7, 945.0], [20.8, 945.0], [20.9, 945.0], [21.0, 950.0], [21.1, 950.0], [21.2, 950.0], [21.3, 950.0], [21.4, 950.0], [21.5, 952.0], [21.6, 952.0], [21.7, 952.0], [21.8, 952.0], [21.9, 952.0], [22.0, 957.0], [22.1, 957.0], [22.2, 957.0], [22.3, 957.0], [22.4, 957.0], [22.5, 960.0], [22.6, 960.0], [22.7, 960.0], [22.8, 960.0], [22.9, 960.0], [23.0, 1009.0], [23.1, 1009.0], [23.2, 1009.0], [23.3, 1009.0], [23.4, 1009.0], [23.5, 1037.0], [23.6, 1037.0], [23.7, 1037.0], [23.8, 1037.0], [23.9, 1037.0], [24.0, 1043.0], [24.1, 1043.0], [24.2, 1043.0], [24.3, 1043.0], [24.4, 1043.0], [24.5, 1046.0], [24.6, 1046.0], [24.7, 1046.0], [24.8, 1046.0], [24.9, 1046.0], [25.0, 1049.0], [25.1, 1049.0], [25.2, 1049.0], [25.3, 1049.0], [25.4, 1049.0], [25.5, 1050.0], [25.6, 1050.0], [25.7, 1050.0], [25.8, 1050.0], [25.9, 1050.0], [26.0, 1050.0], [26.1, 1050.0], [26.2, 1050.0], [26.3, 1050.0], [26.4, 1050.0], [26.5, 1053.0], [26.6, 1053.0], [26.7, 1053.0], [26.8, 1053.0], [26.9, 1053.0], [27.0, 1054.0], [27.1, 1054.0], [27.2, 1054.0], [27.3, 1054.0], [27.4, 1054.0], [27.5, 1054.0], [27.6, 1054.0], [27.7, 1054.0], [27.8, 1054.0], [27.9, 1054.0], [28.0, 1056.0], [28.1, 1056.0], [28.2, 1056.0], [28.3, 1056.0], [28.4, 1056.0], [28.5, 1065.0], [28.6, 1065.0], [28.7, 1065.0], [28.8, 1065.0], [28.9, 1065.0], [29.0, 1066.0], [29.1, 1066.0], [29.2, 1066.0], [29.3, 1066.0], [29.4, 1066.0], [29.5, 1068.0], [29.6, 1068.0], [29.7, 1068.0], [29.8, 1068.0], [29.9, 1068.0], [30.0, 1070.0], [30.1, 1070.0], [30.2, 1070.0], [30.3, 1070.0], [30.4, 1070.0], [30.5, 1070.0], [30.6, 1070.0], [30.7, 1070.0], [30.8, 1070.0], [30.9, 1070.0], [31.0, 1071.0], [31.1, 1071.0], [31.2, 1071.0], [31.3, 1071.0], [31.4, 1071.0], [31.5, 1072.0], [31.6, 1072.0], [31.7, 1072.0], [31.8, 1072.0], [31.9, 1072.0], [32.0, 1073.0], [32.1, 1073.0], [32.2, 1073.0], [32.3, 1073.0], [32.4, 1073.0], [32.5, 1074.0], [32.6, 1074.0], [32.7, 1074.0], [32.8, 1074.0], [32.9, 1074.0], [33.0, 1074.0], [33.1, 1074.0], [33.2, 1074.0], [33.3, 1074.0], [33.4, 1074.0], [33.5, 1075.0], [33.6, 1075.0], [33.7, 1075.0], [33.8, 1075.0], [33.9, 1075.0], [34.0, 1076.0], [34.1, 1076.0], [34.2, 1076.0], [34.3, 1076.0], [34.4, 1076.0], [34.5, 1076.0], [34.6, 1076.0], [34.7, 1076.0], [34.8, 1076.0], [34.9, 1076.0], [35.0, 1081.0], [35.1, 1081.0], [35.2, 1081.0], [35.3, 1081.0], [35.4, 1081.0], [35.5, 1081.0], [35.6, 1081.0], [35.7, 1081.0], [35.8, 1081.0], [35.9, 1081.0], [36.0, 1082.0], [36.1, 1082.0], [36.2, 1082.0], [36.3, 1082.0], [36.4, 1082.0], [36.5, 1084.0], [36.6, 1084.0], [36.7, 1084.0], [36.8, 1084.0], [36.9, 1084.0], [37.0, 1086.0], [37.1, 1086.0], [37.2, 1086.0], [37.3, 1086.0], [37.4, 1086.0], [37.5, 1088.0], [37.6, 1088.0], [37.7, 1088.0], [37.8, 1088.0], [37.9, 1088.0], [38.0, 1091.0], [38.1, 1091.0], [38.2, 1091.0], [38.3, 1091.0], [38.4, 1091.0], [38.5, 1092.0], [38.6, 1092.0], [38.7, 1092.0], [38.8, 1092.0], [38.9, 1092.0], [39.0, 1093.0], [39.1, 1093.0], [39.2, 1093.0], [39.3, 1093.0], [39.4, 1093.0], [39.5, 1096.0], [39.6, 1096.0], [39.7, 1096.0], [39.8, 1096.0], [39.9, 1096.0], [40.0, 1169.0], [40.1, 1169.0], [40.2, 1169.0], [40.3, 1169.0], [40.4, 1169.0], [40.5, 1273.0], [40.6, 1273.0], [40.7, 1273.0], [40.8, 1273.0], [40.9, 1273.0], [41.0, 1333.0], [41.1, 1333.0], [41.2, 1333.0], [41.3, 1333.0], [41.4, 1333.0], [41.5, 1438.0], [41.6, 1438.0], [41.7, 1438.0], [41.8, 1438.0], [41.9, 1438.0], [42.0, 1556.0], [42.1, 1556.0], [42.2, 1556.0], [42.3, 1556.0], [42.4, 1556.0], [42.5, 1601.0], [42.6, 1601.0], [42.7, 1601.0], [42.8, 1601.0], [42.9, 1601.0], [43.0, 1626.0], [43.1, 1626.0], [43.2, 1626.0], [43.3, 1626.0], [43.4, 1626.0], [43.5, 1640.0], [43.6, 1640.0], [43.7, 1640.0], [43.8, 1640.0], [43.9, 1640.0], [44.0, 1747.0], [44.1, 1747.0], [44.2, 1747.0], [44.3, 1747.0], [44.4, 1747.0], [44.5, 1752.0], [44.6, 1752.0], [44.7, 1752.0], [44.8, 1752.0], [44.9, 1752.0], [45.0, 1954.0], [45.1, 1954.0], [45.2, 1954.0], [45.3, 1954.0], [45.4, 1954.0], [45.5, 1965.0], [45.6, 1965.0], [45.7, 1965.0], [45.8, 1965.0], [45.9, 1965.0], [46.0, 2034.0], [46.1, 2034.0], [46.2, 2034.0], [46.3, 2034.0], [46.4, 2034.0], [46.5, 2080.0], [46.6, 2080.0], [46.7, 2080.0], [46.8, 2080.0], [46.9, 2080.0], [47.0, 2212.0], [47.1, 2212.0], [47.2, 2212.0], [47.3, 2212.0], [47.4, 2212.0], [47.5, 2243.0], [47.6, 2243.0], [47.7, 2243.0], [47.8, 2243.0], [47.9, 2243.0], [48.0, 2322.0], [48.1, 2322.0], [48.2, 2322.0], [48.3, 2322.0], [48.4, 2322.0], [48.5, 2346.0], [48.6, 2346.0], [48.7, 2346.0], [48.8, 2346.0], [48.9, 2346.0], [49.0, 2440.0], [49.1, 2440.0], [49.2, 2440.0], [49.3, 2440.0], [49.4, 2440.0], [49.5, 2540.0], [49.6, 2540.0], [49.7, 2540.0], [49.8, 2540.0], [49.9, 2540.0], [50.0, 2549.0], [50.1, 2549.0], [50.2, 2549.0], [50.3, 2549.0], [50.4, 2549.0], [50.5, 2576.0], [50.6, 2576.0], [50.7, 2576.0], [50.8, 2576.0], [50.9, 2576.0], [51.0, 2587.0], [51.1, 2587.0], [51.2, 2587.0], [51.3, 2587.0], [51.4, 2587.0], [51.5, 2626.0], [51.6, 2626.0], [51.7, 2626.0], [51.8, 2626.0], [51.9, 2626.0], [52.0, 2741.0], [52.1, 2741.0], [52.2, 2741.0], [52.3, 2741.0], [52.4, 2741.0], [52.5, 2751.0], [52.6, 2751.0], [52.7, 2751.0], [52.8, 2751.0], [52.9, 2751.0], [53.0, 2777.0], [53.1, 2777.0], [53.2, 2777.0], [53.3, 2777.0], [53.4, 2777.0], [53.5, 2813.0], [53.6, 2813.0], [53.7, 2813.0], [53.8, 2813.0], [53.9, 2813.0], [54.0, 2902.0], [54.1, 2902.0], [54.2, 2902.0], [54.3, 2902.0], [54.4, 2902.0], [54.5, 2916.0], [54.6, 2916.0], [54.7, 2916.0], [54.8, 2916.0], [54.9, 2916.0], [55.0, 2917.0], [55.1, 2917.0], [55.2, 2917.0], [55.3, 2917.0], [55.4, 2917.0], [55.5, 2984.0], [55.6, 2984.0], [55.7, 2984.0], [55.8, 2984.0], [55.9, 2984.0], [56.0, 2998.0], [56.1, 2998.0], [56.2, 2998.0], [56.3, 2998.0], [56.4, 2998.0], [56.5, 3036.0], [56.6, 3036.0], [56.7, 3036.0], [56.8, 3036.0], [56.9, 3036.0], [57.0, 3072.0], [57.1, 3072.0], [57.2, 3072.0], [57.3, 3072.0], [57.4, 3072.0], [57.5, 3112.0], [57.6, 3112.0], [57.7, 3112.0], [57.8, 3112.0], [57.9, 3112.0], [58.0, 3178.0], [58.1, 3178.0], [58.2, 3178.0], [58.3, 3178.0], [58.4, 3178.0], [58.5, 3249.0], [58.6, 3249.0], [58.7, 3249.0], [58.8, 3249.0], [58.9, 3249.0], [59.0, 3298.0], [59.1, 3298.0], [59.2, 3298.0], [59.3, 3298.0], [59.4, 3298.0], [59.5, 3350.0], [59.6, 3350.0], [59.7, 3350.0], [59.8, 3350.0], [59.9, 3350.0], [60.0, 3482.0], [60.1, 3482.0], [60.2, 3482.0], [60.3, 3482.0], [60.4, 3482.0], [60.5, 3518.0], [60.6, 3518.0], [60.7, 3518.0], [60.8, 3518.0], [60.9, 3518.0], [61.0, 3568.0], [61.1, 3568.0], [61.2, 3568.0], [61.3, 3568.0], [61.4, 3568.0], [61.5, 3634.0], [61.6, 3634.0], [61.7, 3634.0], [61.8, 3634.0], [61.9, 3634.0], [62.0, 3643.0], [62.1, 3643.0], [62.2, 3643.0], [62.3, 3643.0], [62.4, 3643.0], [62.5, 3669.0], [62.6, 3669.0], [62.7, 3669.0], [62.8, 3669.0], [62.9, 3669.0], [63.0, 3682.0], [63.1, 3682.0], [63.2, 3682.0], [63.3, 3682.0], [63.4, 3682.0], [63.5, 3775.0], [63.6, 3775.0], [63.7, 3775.0], [63.8, 3775.0], [63.9, 3775.0], [64.0, 3796.0], [64.1, 3796.0], [64.2, 3796.0], [64.3, 3796.0], [64.4, 3796.0], [64.5, 3798.0], [64.6, 3798.0], [64.7, 3798.0], [64.8, 3798.0], [64.9, 3798.0], [65.0, 3803.0], [65.1, 3803.0], [65.2, 3803.0], [65.3, 3803.0], [65.4, 3803.0], [65.5, 3803.0], [65.6, 3803.0], [65.7, 3803.0], [65.8, 3803.0], [65.9, 3803.0], [66.0, 3922.0], [66.1, 3922.0], [66.2, 3922.0], [66.3, 3922.0], [66.4, 3922.0], [66.5, 3928.0], [66.6, 3928.0], [66.7, 3928.0], [66.8, 3928.0], [66.9, 3928.0], [67.0, 3932.0], [67.1, 3932.0], [67.2, 3932.0], [67.3, 3932.0], [67.4, 3932.0], [67.5, 3944.0], [67.6, 3944.0], [67.7, 3944.0], [67.8, 3944.0], [67.9, 3944.0], [68.0, 3957.0], [68.1, 3957.0], [68.2, 3957.0], [68.3, 3957.0], [68.4, 3957.0], [68.5, 3974.0], [68.6, 3974.0], [68.7, 3974.0], [68.8, 3974.0], [68.9, 3974.0], [69.0, 4076.0], [69.1, 4076.0], [69.2, 4076.0], [69.3, 4076.0], [69.4, 4076.0], [69.5, 4077.0], [69.6, 4077.0], [69.7, 4077.0], [69.8, 4077.0], [69.9, 4077.0], [70.0, 4078.0], [70.1, 4078.0], [70.2, 4078.0], [70.3, 4078.0], [70.4, 4078.0], [70.5, 4080.0], [70.6, 4080.0], [70.7, 4080.0], [70.8, 4080.0], [70.9, 4080.0], [71.0, 4084.0], [71.1, 4084.0], [71.2, 4084.0], [71.3, 4084.0], [71.4, 4084.0], [71.5, 4084.0], [71.6, 4084.0], [71.7, 4084.0], [71.8, 4084.0], [71.9, 4084.0], [72.0, 4087.0], [72.1, 4087.0], [72.2, 4087.0], [72.3, 4087.0], [72.4, 4087.0], [72.5, 4088.0], [72.6, 4088.0], [72.7, 4088.0], [72.8, 4088.0], [72.9, 4088.0], [73.0, 4094.0], [73.1, 4094.0], [73.2, 4094.0], [73.3, 4094.0], [73.4, 4094.0], [73.5, 4096.0], [73.6, 4096.0], [73.7, 4096.0], [73.8, 4096.0], [73.9, 4096.0], [74.0, 4100.0], [74.1, 4100.0], [74.2, 4100.0], [74.3, 4100.0], [74.4, 4100.0], [74.5, 4104.0], [74.6, 4104.0], [74.7, 4104.0], [74.8, 4104.0], [74.9, 4104.0], [75.0, 4105.0], [75.1, 4105.0], [75.2, 4105.0], [75.3, 4105.0], [75.4, 4105.0], [75.5, 4112.0], [75.6, 4112.0], [75.7, 4112.0], [75.8, 4112.0], [75.9, 4112.0], [76.0, 4114.0], [76.1, 4114.0], [76.2, 4114.0], [76.3, 4114.0], [76.4, 4114.0], [76.5, 4117.0], [76.6, 4117.0], [76.7, 4117.0], [76.8, 4117.0], [76.9, 4117.0], [77.0, 7679.0], [77.1, 7679.0], [77.2, 7679.0], [77.3, 7679.0], [77.4, 7679.0], [77.5, 7689.0], [77.6, 7689.0], [77.7, 7689.0], [77.8, 7689.0], [77.9, 7689.0], [78.0, 7782.0], [78.1, 7782.0], [78.2, 7782.0], [78.3, 7782.0], [78.4, 7782.0], [78.5, 7790.0], [78.6, 7790.0], [78.7, 7790.0], [78.8, 7790.0], [78.9, 7790.0], [79.0, 7798.0], [79.1, 7798.0], [79.2, 7798.0], [79.3, 7798.0], [79.4, 7798.0], [79.5, 7798.0], [79.6, 7798.0], [79.7, 7798.0], [79.8, 7798.0], [79.9, 7798.0], [80.0, 7802.0], [80.1, 7802.0], [80.2, 7802.0], [80.3, 7802.0], [80.4, 7802.0], [80.5, 7803.0], [80.6, 7803.0], [80.7, 7803.0], [80.8, 7803.0], [80.9, 7803.0], [81.0, 7852.0], [81.1, 7852.0], [81.2, 7852.0], [81.3, 7852.0], [81.4, 7852.0], [81.5, 7934.0], [81.6, 7934.0], [81.7, 7934.0], [81.8, 7934.0], [81.9, 7934.0], [82.0, 7936.0], [82.1, 7936.0], [82.2, 7936.0], [82.3, 7936.0], [82.4, 7936.0], [82.5, 7939.0], [82.6, 7939.0], [82.7, 7939.0], [82.8, 7939.0], [82.9, 7939.0], [83.0, 7942.0], [83.1, 7942.0], [83.2, 7942.0], [83.3, 7942.0], [83.4, 7942.0], [83.5, 7943.0], [83.6, 7943.0], [83.7, 7943.0], [83.8, 7943.0], [83.9, 7943.0], [84.0, 7951.0], [84.1, 7951.0], [84.2, 7951.0], [84.3, 7951.0], [84.4, 7951.0], [84.5, 7957.0], [84.6, 7957.0], [84.7, 7957.0], [84.8, 7957.0], [84.9, 7957.0], [85.0, 7959.0], [85.1, 7959.0], [85.2, 7959.0], [85.3, 7959.0], [85.4, 7959.0], [85.5, 8068.0], [85.6, 8068.0], [85.7, 8068.0], [85.8, 8068.0], [85.9, 8068.0], [86.0, 8076.0], [86.1, 8076.0], [86.2, 8076.0], [86.3, 8076.0], [86.4, 8076.0], [86.5, 8079.0], [86.6, 8079.0], [86.7, 8079.0], [86.8, 8079.0], [86.9, 8079.0], [87.0, 8087.0], [87.1, 8087.0], [87.2, 8087.0], [87.3, 8087.0], [87.4, 8087.0], [87.5, 8088.0], [87.6, 8088.0], [87.7, 8088.0], [87.8, 8088.0], [87.9, 8088.0], [88.0, 8093.0], [88.1, 8093.0], [88.2, 8093.0], [88.3, 8093.0], [88.4, 8093.0], [88.5, 8096.0], [88.6, 8096.0], [88.7, 8096.0], [88.8, 8096.0], [88.9, 8096.0], [89.0, 8097.0], [89.1, 8097.0], [89.2, 8097.0], [89.3, 8097.0], [89.4, 8097.0], [89.5, 8098.0], [89.6, 8098.0], [89.7, 8098.0], [89.8, 8098.0], [89.9, 8098.0], [90.0, 8098.0], [90.1, 8098.0], [90.2, 8098.0], [90.3, 8098.0], [90.4, 8098.0], [90.5, 8115.0], [90.6, 8115.0], [90.7, 8115.0], [90.8, 8115.0], [90.9, 8115.0], [91.0, 8117.0], [91.1, 8117.0], [91.2, 8117.0], [91.3, 8117.0], [91.4, 8117.0], [91.5, 15937.0], [91.6, 15937.0], [91.7, 15937.0], [91.8, 15937.0], [91.9, 15937.0], [92.0, 15941.0], [92.1, 15941.0], [92.2, 15941.0], [92.3, 15941.0], [92.4, 15941.0], [92.5, 15957.0], [92.6, 15957.0], [92.7, 15957.0], [92.8, 15957.0], [92.9, 15957.0], [93.0, 15962.0], [93.1, 15962.0], [93.2, 15962.0], [93.3, 15962.0], [93.4, 15962.0], [93.5, 15963.0], [93.6, 15963.0], [93.7, 15963.0], [93.8, 15963.0], [93.9, 15963.0], [94.0, 15963.0], [94.1, 15963.0], [94.2, 15963.0], [94.3, 15963.0], [94.4, 15963.0], [94.5, 15964.0], [94.6, 15964.0], [94.7, 15964.0], [94.8, 15964.0], [94.9, 15964.0], [95.0, 16079.0], [95.1, 16079.0], [95.2, 16079.0], [95.3, 16079.0], [95.4, 16079.0], [95.5, 16081.0], [95.6, 16081.0], [95.7, 16081.0], [95.8, 16081.0], [95.9, 16081.0], [96.0, 16083.0], [96.1, 16083.0], [96.2, 16083.0], [96.3, 16083.0], [96.4, 16083.0], [96.5, 16096.0], [96.6, 16096.0], [96.7, 16096.0], [96.8, 16096.0], [96.9, 16096.0], [97.0, 16099.0], [97.1, 16099.0], [97.2, 16099.0], [97.3, 16099.0], [97.4, 16099.0], [97.5, 16104.0], [97.6, 16104.0], [97.7, 16104.0], [97.8, 16104.0], [97.9, 16104.0], [98.0, 16111.0], [98.1, 16111.0], [98.2, 16111.0], [98.3, 16111.0], [98.4, 16111.0], [98.5, 16116.0], [98.6, 16116.0], [98.7, 16116.0], [98.8, 16116.0], [98.9, 16116.0], [99.0, 16116.0], [99.1, 16116.0], [99.2, 16116.0], [99.3, 16116.0], [99.4, 16116.0], [99.5, 16130.0], [99.6, 16130.0], [99.7, 16130.0], [99.8, 16130.0], [99.9, 16130.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 34.0, "series": [{"data": [[600.0, 8.0], [700.0, 12.0], [800.0, 2.0], [900.0, 24.0], [1000.0, 34.0], [15900.0, 7.0], [16000.0, 5.0], [16100.0, 5.0], [1100.0, 1.0], [1200.0, 1.0], [1300.0, 1.0], [1400.0, 1.0], [1500.0, 1.0], [1600.0, 3.0], [1700.0, 2.0], [1900.0, 2.0], [2000.0, 2.0], [2200.0, 2.0], [2300.0, 2.0], [2400.0, 1.0], [2500.0, 4.0], [2600.0, 1.0], [2800.0, 1.0], [2700.0, 3.0], [2900.0, 5.0], [3000.0, 2.0], [3100.0, 2.0], [3200.0, 2.0], [3300.0, 1.0], [3400.0, 1.0], [3500.0, 2.0], [3600.0, 4.0], [3700.0, 3.0], [3800.0, 2.0], [3900.0, 6.0], [4000.0, 10.0], [4100.0, 6.0], [7600.0, 2.0], [7700.0, 4.0], [7900.0, 8.0], [7800.0, 3.0], [8000.0, 10.0], [8100.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 84.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 116.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 84.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 116.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 30.065000000000005, "minX": 1.75213458E12, "maxY": 30.065000000000005, "series": [{"data": [[1.75213458E12, 30.065000000000005]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213458E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1593.1111111111109, "minX": 1.0, "maxY": 16130.0, "series": [{"data": [[33.0, 5356.4], [32.0, 3847.5], [2.0, 16096.0], [35.0, 3608.5], [34.0, 3371.6666666666665], [36.0, 5107.8], [37.0, 1932.5714285714284], [38.0, 3213.3333333333335], [39.0, 5346.625], [40.0, 8317.666666666666], [41.0, 4310.0], [42.0, 2209.8], [43.0, 2284.0], [44.0, 3820.333333333333], [45.0, 3297.0], [46.0, 2031.5], [47.0, 2627.833333333333], [48.0, 4245.333333333333], [3.0, 15963.0], [4.0, 16116.0], [5.0, 15937.0], [6.0, 16111.0], [7.0, 15964.0], [8.0, 16104.0], [9.0, 16116.0], [10.0, 15962.0], [11.0, 3566.6666666666665], [12.0, 4868.5], [13.0, 4757.0], [14.0, 4934.5], [15.0, 3599.0], [16.0, 4573.5], [1.0, 16130.0], [17.0, 3541.6666666666665], [18.0, 4642.0], [19.0, 15957.0], [20.0, 9032.0], [21.0, 2230.3333333333335], [22.0, 2137.2], [23.0, 2248.6666666666665], [24.0, 2897.2], [25.0, 1884.125], [26.0, 2765.363636363636], [27.0, 3375.5], [28.0, 2898.0], [29.0, 1593.1111111111109], [30.0, 3003.5833333333335], [31.0, 3124.294117647059]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[30.065000000000005, 4034.975]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 48.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 533.3333333333334, "minX": 1.75213458E12, "maxY": 204120.16666666666, "series": [{"data": [[1.75213458E12, 204120.16666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75213458E12, 533.3333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213458E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4034.975, "minX": 1.75213458E12, "maxY": 4034.975, "series": [{"data": [[1.75213458E12, 4034.975]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213458E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3926.5050000000006, "minX": 1.75213458E12, "maxY": 3926.5050000000006, "series": [{"data": [[1.75213458E12, 3926.5050000000006]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213458E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3067.955, "minX": 1.75213458E12, "maxY": 3067.955, "series": [{"data": [[1.75213458E12, 3067.955]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213458E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 613.0, "minX": 1.75213458E12, "maxY": 16130.0, "series": [{"data": [[1.75213458E12, 16130.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75213458E12, 613.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75213458E12, 8098.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75213458E12, 16116.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75213458E12, 2544.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75213458E12, 16073.249999999998]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213458E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 936.0, "minX": 1.0, "maxY": 16033.5, "series": [{"data": [[4.0, 9440.5], [8.0, 1072.0], [2.0, 8088.0], [1.0, 16033.5], [17.0, 2777.0], [9.0, 2435.5], [10.0, 936.0], [5.0, 8098.0], [11.0, 1438.0], [3.0, 8106.5], [7.0, 1096.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 914.0, "minX": 1.0, "maxY": 15941.5, "series": [{"data": [[4.0, 9340.5], [8.0, 922.5], [2.0, 7929.0], [1.0, 15941.5], [17.0, 2718.0], [9.0, 2355.0], [10.0, 914.0], [5.0, 7936.0], [11.0, 1268.0], [3.0, 7945.5], [7.0, 941.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.75213458E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.75213458E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213458E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.75213458E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.75213458E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213458E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.75213458E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.75213458E12, 3.3333333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213458E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.75213458E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.75213458E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213458E12, "title": "Total Transactions Per Second"}},
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

