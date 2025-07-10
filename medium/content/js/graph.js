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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 21053.0, "series": [{"data": [[0.0, 179.0], [0.1, 179.0], [0.2, 179.0], [0.3, 179.0], [0.4, 179.0], [0.5, 181.0], [0.6, 181.0], [0.7, 181.0], [0.8, 181.0], [0.9, 181.0], [1.0, 182.0], [1.1, 182.0], [1.2, 182.0], [1.3, 182.0], [1.4, 182.0], [1.5, 183.0], [1.6, 183.0], [1.7, 183.0], [1.8, 183.0], [1.9, 183.0], [2.0, 184.0], [2.1, 184.0], [2.2, 184.0], [2.3, 184.0], [2.4, 184.0], [2.5, 185.0], [2.6, 185.0], [2.7, 185.0], [2.8, 185.0], [2.9, 185.0], [3.0, 190.0], [3.1, 190.0], [3.2, 190.0], [3.3, 190.0], [3.4, 190.0], [3.5, 191.0], [3.6, 191.0], [3.7, 191.0], [3.8, 191.0], [3.9, 191.0], [4.0, 193.0], [4.1, 193.0], [4.2, 193.0], [4.3, 193.0], [4.4, 193.0], [4.5, 222.0], [4.6, 222.0], [4.7, 222.0], [4.8, 222.0], [4.9, 222.0], [5.0, 325.0], [5.1, 325.0], [5.2, 325.0], [5.3, 325.0], [5.4, 325.0], [5.5, 340.0], [5.6, 340.0], [5.7, 340.0], [5.8, 340.0], [5.9, 340.0], [6.0, 344.0], [6.1, 344.0], [6.2, 344.0], [6.3, 344.0], [6.4, 344.0], [6.5, 344.0], [6.6, 344.0], [6.7, 344.0], [6.8, 344.0], [6.9, 344.0], [7.0, 345.0], [7.1, 345.0], [7.2, 345.0], [7.3, 345.0], [7.4, 345.0], [7.5, 345.0], [7.6, 345.0], [7.7, 345.0], [7.8, 345.0], [7.9, 345.0], [8.0, 363.0], [8.1, 363.0], [8.2, 363.0], [8.3, 363.0], [8.4, 363.0], [8.5, 368.0], [8.6, 368.0], [8.7, 368.0], [8.8, 368.0], [8.9, 368.0], [9.0, 369.0], [9.1, 369.0], [9.2, 369.0], [9.3, 369.0], [9.4, 369.0], [9.5, 372.0], [9.6, 372.0], [9.7, 372.0], [9.8, 372.0], [9.9, 372.0], [10.0, 378.0], [10.1, 378.0], [10.2, 378.0], [10.3, 378.0], [10.4, 378.0], [10.5, 379.0], [10.6, 379.0], [10.7, 379.0], [10.8, 379.0], [10.9, 379.0], [11.0, 390.0], [11.1, 390.0], [11.2, 390.0], [11.3, 390.0], [11.4, 390.0], [11.5, 391.0], [11.6, 391.0], [11.7, 391.0], [11.8, 391.0], [11.9, 391.0], [12.0, 399.0], [12.1, 399.0], [12.2, 399.0], [12.3, 399.0], [12.4, 399.0], [12.5, 420.0], [12.6, 420.0], [12.7, 420.0], [12.8, 420.0], [12.9, 420.0], [13.0, 582.0], [13.1, 582.0], [13.2, 582.0], [13.3, 582.0], [13.4, 582.0], [13.5, 733.0], [13.6, 733.0], [13.7, 733.0], [13.8, 733.0], [13.9, 733.0], [14.0, 773.0], [14.1, 773.0], [14.2, 773.0], [14.3, 773.0], [14.4, 773.0], [14.5, 799.0], [14.6, 799.0], [14.7, 799.0], [14.8, 799.0], [14.9, 799.0], [15.0, 880.0], [15.1, 880.0], [15.2, 880.0], [15.3, 880.0], [15.4, 880.0], [15.5, 904.0], [15.6, 904.0], [15.7, 904.0], [15.8, 904.0], [15.9, 904.0], [16.0, 981.0], [16.1, 981.0], [16.2, 981.0], [16.3, 981.0], [16.4, 981.0], [16.5, 992.0], [16.6, 992.0], [16.7, 992.0], [16.8, 992.0], [16.9, 992.0], [17.0, 1006.0], [17.1, 1006.0], [17.2, 1006.0], [17.3, 1006.0], [17.4, 1006.0], [17.5, 1008.0], [17.6, 1008.0], [17.7, 1008.0], [17.8, 1008.0], [17.9, 1008.0], [18.0, 1008.0], [18.1, 1008.0], [18.2, 1008.0], [18.3, 1008.0], [18.4, 1008.0], [18.5, 1008.0], [18.6, 1008.0], [18.7, 1008.0], [18.8, 1008.0], [18.9, 1008.0], [19.0, 1008.0], [19.1, 1008.0], [19.2, 1008.0], [19.3, 1008.0], [19.4, 1008.0], [19.5, 1023.0], [19.6, 1023.0], [19.7, 1023.0], [19.8, 1023.0], [19.9, 1023.0], [20.0, 1082.0], [20.1, 1082.0], [20.2, 1082.0], [20.3, 1082.0], [20.4, 1082.0], [20.5, 1117.0], [20.6, 1117.0], [20.7, 1117.0], [20.8, 1117.0], [20.9, 1117.0], [21.0, 1162.0], [21.1, 1162.0], [21.2, 1162.0], [21.3, 1162.0], [21.4, 1162.0], [21.5, 1165.0], [21.6, 1165.0], [21.7, 1165.0], [21.8, 1165.0], [21.9, 1165.0], [22.0, 1173.0], [22.1, 1173.0], [22.2, 1173.0], [22.3, 1173.0], [22.4, 1173.0], [22.5, 1176.0], [22.6, 1176.0], [22.7, 1176.0], [22.8, 1176.0], [22.9, 1176.0], [23.0, 1180.0], [23.1, 1180.0], [23.2, 1180.0], [23.3, 1180.0], [23.4, 1180.0], [23.5, 1189.0], [23.6, 1189.0], [23.7, 1189.0], [23.8, 1189.0], [23.9, 1189.0], [24.0, 1193.0], [24.1, 1193.0], [24.2, 1193.0], [24.3, 1193.0], [24.4, 1193.0], [24.5, 1193.0], [24.6, 1193.0], [24.7, 1193.0], [24.8, 1193.0], [24.9, 1193.0], [25.0, 1194.0], [25.1, 1194.0], [25.2, 1194.0], [25.3, 1194.0], [25.4, 1194.0], [25.5, 1194.0], [25.6, 1194.0], [25.7, 1194.0], [25.8, 1194.0], [25.9, 1194.0], [26.0, 1195.0], [26.1, 1195.0], [26.2, 1195.0], [26.3, 1195.0], [26.4, 1195.0], [26.5, 1195.0], [26.6, 1195.0], [26.7, 1195.0], [26.8, 1195.0], [26.9, 1195.0], [27.0, 1196.0], [27.1, 1196.0], [27.2, 1196.0], [27.3, 1196.0], [27.4, 1196.0], [27.5, 1197.0], [27.6, 1197.0], [27.7, 1197.0], [27.8, 1197.0], [27.9, 1197.0], [28.0, 1197.0], [28.1, 1197.0], [28.2, 1197.0], [28.3, 1197.0], [28.4, 1197.0], [28.5, 1199.0], [28.6, 1199.0], [28.7, 1199.0], [28.8, 1199.0], [28.9, 1199.0], [29.0, 1203.0], [29.1, 1203.0], [29.2, 1203.0], [29.3, 1203.0], [29.4, 1203.0], [29.5, 1329.0], [29.6, 1329.0], [29.7, 1329.0], [29.8, 1329.0], [29.9, 1329.0], [30.0, 1357.0], [30.1, 1357.0], [30.2, 1357.0], [30.3, 1357.0], [30.4, 1357.0], [30.5, 1359.0], [30.6, 1359.0], [30.7, 1359.0], [30.8, 1359.0], [30.9, 1359.0], [31.0, 1386.0], [31.1, 1386.0], [31.2, 1386.0], [31.3, 1386.0], [31.4, 1386.0], [31.5, 1400.0], [31.6, 1400.0], [31.7, 1400.0], [31.8, 1400.0], [31.9, 1400.0], [32.0, 1403.0], [32.1, 1403.0], [32.2, 1403.0], [32.3, 1403.0], [32.4, 1403.0], [32.5, 3188.0], [32.6, 3188.0], [32.7, 3188.0], [32.8, 3188.0], [32.9, 3188.0], [33.0, 3190.0], [33.1, 3190.0], [33.2, 3190.0], [33.3, 3190.0], [33.4, 3190.0], [33.5, 3190.0], [33.6, 3190.0], [33.7, 3190.0], [33.8, 3190.0], [33.9, 3190.0], [34.0, 3196.0], [34.1, 3196.0], [34.2, 3196.0], [34.3, 3196.0], [34.4, 3196.0], [34.5, 3197.0], [34.6, 3197.0], [34.7, 3197.0], [34.8, 3197.0], [34.9, 3197.0], [35.0, 3198.0], [35.1, 3198.0], [35.2, 3198.0], [35.3, 3198.0], [35.4, 3198.0], [35.5, 3200.0], [35.6, 3200.0], [35.7, 3200.0], [35.8, 3200.0], [35.9, 3200.0], [36.0, 3200.0], [36.1, 3200.0], [36.2, 3200.0], [36.3, 3200.0], [36.4, 3200.0], [36.5, 3201.0], [36.6, 3201.0], [36.7, 3201.0], [36.8, 3201.0], [36.9, 3201.0], [37.0, 3202.0], [37.1, 3202.0], [37.2, 3202.0], [37.3, 3202.0], [37.4, 3202.0], [37.5, 3202.0], [37.6, 3202.0], [37.7, 3202.0], [37.8, 3202.0], [37.9, 3202.0], [38.0, 3203.0], [38.1, 3203.0], [38.2, 3203.0], [38.3, 3203.0], [38.4, 3203.0], [38.5, 3205.0], [38.6, 3205.0], [38.7, 3205.0], [38.8, 3205.0], [38.9, 3205.0], [39.0, 3210.0], [39.1, 3210.0], [39.2, 3210.0], [39.3, 3210.0], [39.4, 3210.0], [39.5, 3211.0], [39.6, 3211.0], [39.7, 3211.0], [39.8, 3211.0], [39.9, 3211.0], [40.0, 3212.0], [40.1, 3212.0], [40.2, 3212.0], [40.3, 3212.0], [40.4, 3212.0], [40.5, 3289.0], [40.6, 3289.0], [40.7, 3289.0], [40.8, 3289.0], [40.9, 3289.0], [41.0, 3309.0], [41.1, 3309.0], [41.2, 3309.0], [41.3, 3309.0], [41.4, 3309.0], [41.5, 3309.0], [41.6, 3309.0], [41.7, 3309.0], [41.8, 3309.0], [41.9, 3309.0], [42.0, 3328.0], [42.1, 3328.0], [42.2, 3328.0], [42.3, 3328.0], [42.4, 3328.0], [42.5, 3336.0], [42.6, 3336.0], [42.7, 3336.0], [42.8, 3336.0], [42.9, 3336.0], [43.0, 3369.0], [43.1, 3369.0], [43.2, 3369.0], [43.3, 3369.0], [43.4, 3369.0], [43.5, 3408.0], [43.6, 3408.0], [43.7, 3408.0], [43.8, 3408.0], [43.9, 3408.0], [44.0, 3410.0], [44.1, 3410.0], [44.2, 3410.0], [44.3, 3410.0], [44.4, 3410.0], [44.5, 7188.0], [44.6, 7188.0], [44.7, 7188.0], [44.8, 7188.0], [44.9, 7188.0], [45.0, 7192.0], [45.1, 7192.0], [45.2, 7192.0], [45.3, 7192.0], [45.4, 7192.0], [45.5, 7193.0], [45.6, 7193.0], [45.7, 7193.0], [45.8, 7193.0], [45.9, 7193.0], [46.0, 7195.0], [46.1, 7195.0], [46.2, 7195.0], [46.3, 7195.0], [46.4, 7195.0], [46.5, 7196.0], [46.6, 7196.0], [46.7, 7196.0], [46.8, 7196.0], [46.9, 7196.0], [47.0, 7197.0], [47.1, 7197.0], [47.2, 7197.0], [47.3, 7197.0], [47.4, 7197.0], [47.5, 7200.0], [47.6, 7200.0], [47.7, 7200.0], [47.8, 7200.0], [47.9, 7200.0], [48.0, 7201.0], [48.1, 7201.0], [48.2, 7201.0], [48.3, 7201.0], [48.4, 7201.0], [48.5, 7201.0], [48.6, 7201.0], [48.7, 7201.0], [48.8, 7201.0], [48.9, 7201.0], [49.0, 7201.0], [49.1, 7201.0], [49.2, 7201.0], [49.3, 7201.0], [49.4, 7201.0], [49.5, 7202.0], [49.6, 7202.0], [49.7, 7202.0], [49.8, 7202.0], [49.9, 7202.0], [50.0, 7206.0], [50.1, 7206.0], [50.2, 7206.0], [50.3, 7206.0], [50.4, 7206.0], [50.5, 7207.0], [50.6, 7207.0], [50.7, 7207.0], [50.8, 7207.0], [50.9, 7207.0], [51.0, 7210.0], [51.1, 7210.0], [51.2, 7210.0], [51.3, 7210.0], [51.4, 7210.0], [51.5, 7210.0], [51.6, 7210.0], [51.7, 7210.0], [51.8, 7210.0], [51.9, 7210.0], [52.0, 7212.0], [52.1, 7212.0], [52.2, 7212.0], [52.3, 7212.0], [52.4, 7212.0], [52.5, 7215.0], [52.6, 7215.0], [52.7, 7215.0], [52.8, 7215.0], [52.9, 7215.0], [53.0, 7216.0], [53.1, 7216.0], [53.2, 7216.0], [53.3, 7216.0], [53.4, 7216.0], [53.5, 7216.0], [53.6, 7216.0], [53.7, 7216.0], [53.8, 7216.0], [53.9, 7216.0], [54.0, 7217.0], [54.1, 7217.0], [54.2, 7217.0], [54.3, 7217.0], [54.4, 7217.0], [54.5, 7218.0], [54.6, 7218.0], [54.7, 7218.0], [54.8, 7218.0], [54.9, 7218.0], [55.0, 7254.0], [55.1, 7254.0], [55.2, 7254.0], [55.3, 7254.0], [55.4, 7254.0], [55.5, 7269.0], [55.6, 7269.0], [55.7, 7269.0], [55.8, 7269.0], [55.9, 7269.0], [56.0, 7276.0], [56.1, 7276.0], [56.2, 7276.0], [56.3, 7276.0], [56.4, 7276.0], [56.5, 7283.0], [56.6, 7283.0], [56.7, 7283.0], [56.8, 7283.0], [56.9, 7283.0], [57.0, 7290.0], [57.1, 7290.0], [57.2, 7290.0], [57.3, 7290.0], [57.4, 7290.0], [57.5, 7306.0], [57.6, 7306.0], [57.7, 7306.0], [57.8, 7306.0], [57.9, 7306.0], [58.0, 7318.0], [58.1, 7318.0], [58.2, 7318.0], [58.3, 7318.0], [58.4, 7318.0], [58.5, 7334.0], [58.6, 7334.0], [58.7, 7334.0], [58.8, 7334.0], [58.9, 7334.0], [59.0, 7337.0], [59.1, 7337.0], [59.2, 7337.0], [59.3, 7337.0], [59.4, 7337.0], [59.5, 7362.0], [59.6, 7362.0], [59.7, 7362.0], [59.8, 7362.0], [59.9, 7362.0], [60.0, 7371.0], [60.1, 7371.0], [60.2, 7371.0], [60.3, 7371.0], [60.4, 7371.0], [60.5, 7377.0], [60.6, 7377.0], [60.7, 7377.0], [60.8, 7377.0], [60.9, 7377.0], [61.0, 7378.0], [61.1, 7378.0], [61.2, 7378.0], [61.3, 7378.0], [61.4, 7378.0], [61.5, 7381.0], [61.6, 7381.0], [61.7, 7381.0], [61.8, 7381.0], [61.9, 7381.0], [62.0, 7382.0], [62.1, 7382.0], [62.2, 7382.0], [62.3, 7382.0], [62.4, 7382.0], [62.5, 7392.0], [62.6, 7392.0], [62.7, 7392.0], [62.8, 7392.0], [62.9, 7392.0], [63.0, 7406.0], [63.1, 7406.0], [63.2, 7406.0], [63.3, 7406.0], [63.4, 7406.0], [63.5, 7410.0], [63.6, 7410.0], [63.7, 7410.0], [63.8, 7410.0], [63.9, 7410.0], [64.0, 15200.0], [64.1, 15200.0], [64.2, 15200.0], [64.3, 15200.0], [64.4, 15200.0], [64.5, 15201.0], [64.6, 15201.0], [64.7, 15201.0], [64.8, 15201.0], [64.9, 15201.0], [65.0, 15204.0], [65.1, 15204.0], [65.2, 15204.0], [65.3, 15204.0], [65.4, 15204.0], [65.5, 15206.0], [65.6, 15206.0], [65.7, 15206.0], [65.8, 15206.0], [65.9, 15206.0], [66.0, 15207.0], [66.1, 15207.0], [66.2, 15207.0], [66.3, 15207.0], [66.4, 15207.0], [66.5, 15209.0], [66.6, 15209.0], [66.7, 15209.0], [66.8, 15209.0], [66.9, 15209.0], [67.0, 15210.0], [67.1, 15210.0], [67.2, 15210.0], [67.3, 15210.0], [67.4, 15210.0], [67.5, 15211.0], [67.6, 15211.0], [67.7, 15211.0], [67.8, 15211.0], [67.9, 15211.0], [68.0, 15213.0], [68.1, 15213.0], [68.2, 15213.0], [68.3, 15213.0], [68.4, 15213.0], [68.5, 15213.0], [68.6, 15213.0], [68.7, 15213.0], [68.8, 15213.0], [68.9, 15213.0], [69.0, 15213.0], [69.1, 15213.0], [69.2, 15213.0], [69.3, 15213.0], [69.4, 15213.0], [69.5, 15214.0], [69.6, 15214.0], [69.7, 15214.0], [69.8, 15214.0], [69.9, 15214.0], [70.0, 15214.0], [70.1, 15214.0], [70.2, 15214.0], [70.3, 15214.0], [70.4, 15214.0], [70.5, 15215.0], [70.6, 15215.0], [70.7, 15215.0], [70.8, 15215.0], [70.9, 15215.0], [71.0, 15215.0], [71.1, 15215.0], [71.2, 15215.0], [71.3, 15215.0], [71.4, 15215.0], [71.5, 15216.0], [71.6, 15216.0], [71.7, 15216.0], [71.8, 15216.0], [71.9, 15216.0], [72.0, 15216.0], [72.1, 15216.0], [72.2, 15216.0], [72.3, 15216.0], [72.4, 15216.0], [72.5, 15217.0], [72.6, 15217.0], [72.7, 15217.0], [72.8, 15217.0], [72.9, 15217.0], [73.0, 15218.0], [73.1, 15218.0], [73.2, 15218.0], [73.3, 15218.0], [73.4, 15218.0], [73.5, 15218.0], [73.6, 15218.0], [73.7, 15218.0], [73.8, 15218.0], [73.9, 15218.0], [74.0, 15218.0], [74.1, 15218.0], [74.2, 15218.0], [74.3, 15218.0], [74.4, 15218.0], [74.5, 15219.0], [74.6, 15219.0], [74.7, 15219.0], [74.8, 15219.0], [74.9, 15219.0], [75.0, 15219.0], [75.1, 15219.0], [75.2, 15219.0], [75.3, 15219.0], [75.4, 15219.0], [75.5, 15220.0], [75.6, 15220.0], [75.7, 15220.0], [75.8, 15220.0], [75.9, 15220.0], [76.0, 15221.0], [76.1, 15221.0], [76.2, 15221.0], [76.3, 15221.0], [76.4, 15221.0], [76.5, 15223.0], [76.6, 15223.0], [76.7, 15223.0], [76.8, 15223.0], [76.9, 15223.0], [77.0, 15223.0], [77.1, 15223.0], [77.2, 15223.0], [77.3, 15223.0], [77.4, 15223.0], [77.5, 15223.0], [77.6, 15223.0], [77.7, 15223.0], [77.8, 15223.0], [77.9, 15223.0], [78.0, 15224.0], [78.1, 15224.0], [78.2, 15224.0], [78.3, 15224.0], [78.4, 15224.0], [78.5, 15228.0], [78.6, 15228.0], [78.7, 15228.0], [78.8, 15228.0], [78.9, 15228.0], [79.0, 15228.0], [79.1, 15228.0], [79.2, 15228.0], [79.3, 15228.0], [79.4, 15228.0], [79.5, 15239.0], [79.6, 15239.0], [79.7, 15239.0], [79.8, 15239.0], [79.9, 15239.0], [80.0, 15249.0], [80.1, 15249.0], [80.2, 15249.0], [80.3, 15249.0], [80.4, 15249.0], [80.5, 15251.0], [80.6, 15251.0], [80.7, 15251.0], [80.8, 15251.0], [80.9, 15251.0], [81.0, 15254.0], [81.1, 15254.0], [81.2, 15254.0], [81.3, 15254.0], [81.4, 15254.0], [81.5, 15263.0], [81.6, 15263.0], [81.7, 15263.0], [81.8, 15263.0], [81.9, 15263.0], [82.0, 15270.0], [82.1, 15270.0], [82.2, 15270.0], [82.3, 15270.0], [82.4, 15270.0], [82.5, 15275.0], [82.6, 15275.0], [82.7, 15275.0], [82.8, 15275.0], [82.9, 15275.0], [83.0, 15276.0], [83.1, 15276.0], [83.2, 15276.0], [83.3, 15276.0], [83.4, 15276.0], [83.5, 15279.0], [83.6, 15279.0], [83.7, 15279.0], [83.8, 15279.0], [83.9, 15279.0], [84.0, 15293.0], [84.1, 15293.0], [84.2, 15293.0], [84.3, 15293.0], [84.4, 15293.0], [84.5, 15298.0], [84.6, 15298.0], [84.7, 15298.0], [84.8, 15298.0], [84.9, 15298.0], [85.0, 15321.0], [85.1, 15321.0], [85.2, 15321.0], [85.3, 15321.0], [85.4, 15321.0], [85.5, 15325.0], [85.6, 15325.0], [85.7, 15325.0], [85.8, 15325.0], [85.9, 15325.0], [86.0, 15328.0], [86.1, 15328.0], [86.2, 15328.0], [86.3, 15328.0], [86.4, 15328.0], [86.5, 15337.0], [86.6, 15337.0], [86.7, 15337.0], [86.8, 15337.0], [86.9, 15337.0], [87.0, 15354.0], [87.1, 15354.0], [87.2, 15354.0], [87.3, 15354.0], [87.4, 15354.0], [87.5, 15377.0], [87.6, 15377.0], [87.7, 15377.0], [87.8, 15377.0], [87.9, 15377.0], [88.0, 15379.0], [88.1, 15379.0], [88.2, 15379.0], [88.3, 15379.0], [88.4, 15379.0], [88.5, 15382.0], [88.6, 15382.0], [88.7, 15382.0], [88.8, 15382.0], [88.9, 15382.0], [89.0, 15383.0], [89.1, 15383.0], [89.2, 15383.0], [89.3, 15383.0], [89.4, 15383.0], [89.5, 15392.0], [89.6, 15392.0], [89.7, 15392.0], [89.8, 15392.0], [89.9, 15392.0], [90.0, 15401.0], [90.1, 15401.0], [90.2, 15401.0], [90.3, 15401.0], [90.4, 15401.0], [90.5, 15404.0], [90.6, 15404.0], [90.7, 15404.0], [90.8, 15404.0], [90.9, 15404.0], [91.0, 15415.0], [91.1, 15415.0], [91.2, 15415.0], [91.3, 15415.0], [91.4, 15415.0], [91.5, 15420.0], [91.6, 15420.0], [91.7, 15420.0], [91.8, 15420.0], [91.9, 15420.0], [92.0, 15421.0], [92.1, 15421.0], [92.2, 15421.0], [92.3, 15421.0], [92.4, 15421.0], [92.5, 15430.0], [92.6, 15430.0], [92.7, 15430.0], [92.8, 15430.0], [92.9, 15430.0], [93.0, 21020.0], [93.1, 21020.0], [93.2, 21020.0], [93.3, 21020.0], [93.4, 21020.0], [93.5, 21027.0], [93.6, 21027.0], [93.7, 21027.0], [93.8, 21027.0], [93.9, 21027.0], [94.0, 21028.0], [94.1, 21028.0], [94.2, 21028.0], [94.3, 21028.0], [94.4, 21028.0], [94.5, 21030.0], [94.6, 21030.0], [94.7, 21030.0], [94.8, 21030.0], [94.9, 21030.0], [95.0, 21032.0], [95.1, 21032.0], [95.2, 21032.0], [95.3, 21032.0], [95.4, 21032.0], [95.5, 21034.0], [95.6, 21034.0], [95.7, 21034.0], [95.8, 21034.0], [95.9, 21034.0], [96.0, 21035.0], [96.1, 21035.0], [96.2, 21035.0], [96.3, 21035.0], [96.4, 21035.0], [96.5, 21035.0], [96.6, 21035.0], [96.7, 21035.0], [96.8, 21035.0], [96.9, 21035.0], [97.0, 21042.0], [97.1, 21042.0], [97.2, 21042.0], [97.3, 21042.0], [97.4, 21042.0], [97.5, 21045.0], [97.6, 21045.0], [97.7, 21045.0], [97.8, 21045.0], [97.9, 21045.0], [98.0, 21045.0], [98.1, 21045.0], [98.2, 21045.0], [98.3, 21045.0], [98.4, 21045.0], [98.5, 21048.0], [98.6, 21048.0], [98.7, 21048.0], [98.8, 21048.0], [98.9, 21048.0], [99.0, 21048.0], [99.1, 21048.0], [99.2, 21048.0], [99.3, 21048.0], [99.4, 21048.0], [99.5, 21053.0], [99.6, 21053.0], [99.7, 21053.0], [99.8, 21053.0], [99.9, 21053.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 42.0, "series": [{"data": [[700.0, 3.0], [800.0, 1.0], [900.0, 3.0], [15200.0, 42.0], [15300.0, 10.0], [15400.0, 6.0], [1000.0, 7.0], [1100.0, 17.0], [1200.0, 1.0], [1300.0, 4.0], [21000.0, 14.0], [1400.0, 2.0], [100.0, 9.0], [3100.0, 6.0], [200.0, 1.0], [3200.0, 11.0], [3300.0, 5.0], [3400.0, 2.0], [300.0, 15.0], [400.0, 1.0], [7100.0, 6.0], [7300.0, 11.0], [7200.0, 20.0], [7400.0, 2.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 14.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 121.0, "series": [{"data": [[0.0, 26.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 39.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 121.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 14.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 70.82499999999996, "minX": 1.75212642E12, "maxY": 70.82499999999996, "series": [{"data": [[1.75212642E12, 70.82499999999996]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75212642E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 356.0, "minX": 1.0, "maxY": 21053.0, "series": [{"data": [[2.0, 21020.0], [3.0, 21030.0], [4.0, 21027.0], [5.0, 21035.0], [6.0, 21034.0], [7.0, 21048.0], [8.0, 21045.0], [9.0, 21028.0], [10.0, 21035.0], [11.0, 21032.0], [12.0, 21045.0], [13.0, 21053.0], [14.0, 21048.0], [15.0, 15223.0], [18.0, 15238.333333333334], [19.0, 15392.0], [20.0, 15211.0], [21.0, 15207.0], [22.0, 15201.0], [23.0, 15206.0], [24.0, 15200.0], [25.0, 15275.0], [27.0, 15236.5], [28.0, 15382.0], [29.0, 15420.0], [30.0, 15213.0], [31.0, 15217.0], [33.0, 15214.0], [32.0, 15215.0], [34.0, 15221.0], [37.0, 5256.666666666667], [36.0, 15266.5], [39.0, 2848.0], [38.0, 5331.0], [41.0, 5773.0], [40.0, 8188.5], [43.0, 8185.5], [42.0, 8190.5], [44.0, 8148.0], [45.0, 15328.0], [47.0, 15315.0], [49.0, 3164.6923076923076], [50.0, 390.0], [52.0, 9383.2], [53.0, 8213.5], [55.0, 15219.0], [54.0, 15218.0], [56.0, 7702.0], [57.0, 15228.0], [59.0, 7700.5], [58.0, 15218.0], [61.0, 15220.0], [60.0, 15213.0], [62.0, 8211.0], [63.0, 15251.0], [65.0, 7752.0], [67.0, 8205.5], [66.0, 15293.0], [64.0, 15270.0], [71.0, 15415.0], [70.0, 15389.0], [68.0, 15337.0], [74.0, 7210.0], [73.0, 7215.0], [72.0, 15215.0], [79.0, 3794.0], [78.0, 7371.0], [77.0, 7254.0], [76.0, 7294.5], [82.0, 3792.0], [81.0, 2636.3333333333335], [83.0, 4187.5], [80.0, 7207.0], [86.0, 3782.5], [87.0, 7406.0], [85.0, 7392.0], [84.0, 7276.0], [88.0, 4206.0], [91.0, 7201.0], [90.0, 7212.0], [89.0, 7217.0], [92.0, 3697.5], [94.0, 5261.333333333333], [95.0, 7290.0], [98.0, 3698.5], [99.0, 7201.0], [97.0, 7201.0], [96.0, 7362.0], [103.0, 7337.0], [102.0, 7197.0], [101.0, 7188.0], [100.0, 7200.0], [107.0, 7192.0], [106.0, 7396.0], [104.0, 7378.0], [108.0, 3794.0], [110.0, 2278.5], [111.0, 356.0], [109.0, 7216.0], [112.0, 3946.0], [115.0, 3212.0], [114.0, 3369.0], [113.0, 7377.0], [116.0, 3210.5], [118.0, 2197.5], [119.0, 3190.0], [117.0, 3197.0], [122.0, 1735.5], [123.0, 3322.5], [120.0, 3203.0], [124.0, 2301.5], [127.0, 3201.0], [126.0, 3188.0], [125.0, 3205.0], [128.0, 1689.5], [135.0, 3202.0], [134.0, 1386.0], [133.0, 2328.5], [131.0, 1357.0], [130.0, 1197.0], [129.0, 3202.0], [139.0, 3299.0], [140.0, 1770.5], [142.0, 891.0], [138.0, 1189.0], [137.0, 1194.0], [136.0, 1196.0], [1.0, 21042.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[70.82499999999996, 7963.485000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 142.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 561.1, "minX": 1.75212642E12, "maxY": 3330.1666666666665, "series": [{"data": [[1.75212642E12, 3330.1666666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75212642E12, 561.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75212642E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 7963.485000000001, "minX": 1.75212642E12, "maxY": 7963.485000000001, "series": [{"data": [[1.75212642E12, 7963.485000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75212642E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 6490.420000000003, "minX": 1.75212642E12, "maxY": 6490.420000000003, "series": [{"data": [[1.75212642E12, 6490.420000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75212642E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 7898.525, "minX": 1.75212642E12, "maxY": 7898.525, "series": [{"data": [[1.75212642E12, 7898.525]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75212642E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.75212642E12, "maxY": 15430.0, "series": [{"data": [[1.75212642E12, 15430.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75212642E12, 179.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75212642E12, 15283.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75212642E12, 15422.17]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75212642E12, 7195.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75212642E12, 15380.95]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75212642E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 986.5, "minX": 1.0, "maxY": 21046.5, "series": [{"data": [[8.0, 7204.0], [1.0, 15215.0], [9.0, 7217.5], [19.0, 15228.0], [10.0, 3200.0], [5.0, 15239.0], [6.0, 7268.5], [26.0, 986.5], [13.0, 15298.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 21046.5], [1.0, 21042.0], [5.0, 21030.0], [6.0, 21040.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 15298.0, "series": [{"data": [[8.0, 7204.0], [1.0, 15215.0], [9.0, 7217.5], [19.0, 15228.0], [10.0, 3200.0], [5.0, 15238.0], [6.0, 7268.5], [26.0, 982.5], [13.0, 15298.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 0.0], [1.0, 0.0], [5.0, 0.0], [6.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.75212642E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.75212642E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75212642E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.75212642E12, "maxY": 3.1, "series": [{"data": [[1.75212642E12, 3.1]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.75212642E12, 0.23333333333333334]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75212642E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.75212642E12, "maxY": 3.1, "series": [{"data": [[1.75212642E12, 3.1]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.75212642E12, 0.23333333333333334]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75212642E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.75212642E12, "maxY": 3.1, "series": [{"data": [[1.75212642E12, 3.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75212642E12, 0.23333333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75212642E12, "title": "Total Transactions Per Second"}},
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

