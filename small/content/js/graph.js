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
        data: {"result": {"minY": 180.0, "minX": 0.0, "maxY": 15497.0, "series": [{"data": [[0.0, 180.0], [0.1, 180.0], [0.2, 180.0], [0.3, 180.0], [0.4, 180.0], [0.5, 180.0], [0.6, 180.0], [0.7, 180.0], [0.8, 180.0], [0.9, 180.0], [1.0, 180.0], [1.1, 180.0], [1.2, 180.0], [1.3, 180.0], [1.4, 180.0], [1.5, 180.0], [1.6, 180.0], [1.7, 180.0], [1.8, 180.0], [1.9, 180.0], [2.0, 180.0], [2.1, 180.0], [2.2, 180.0], [2.3, 180.0], [2.4, 180.0], [2.5, 180.0], [2.6, 180.0], [2.7, 180.0], [2.8, 180.0], [2.9, 180.0], [3.0, 181.0], [3.1, 181.0], [3.2, 181.0], [3.3, 181.0], [3.4, 181.0], [3.5, 181.0], [3.6, 181.0], [3.7, 181.0], [3.8, 181.0], [3.9, 181.0], [4.0, 181.0], [4.1, 181.0], [4.2, 181.0], [4.3, 181.0], [4.4, 181.0], [4.5, 181.0], [4.6, 181.0], [4.7, 181.0], [4.8, 181.0], [4.9, 181.0], [5.0, 182.0], [5.1, 182.0], [5.2, 182.0], [5.3, 182.0], [5.4, 182.0], [5.5, 182.0], [5.6, 182.0], [5.7, 182.0], [5.8, 182.0], [5.9, 182.0], [6.0, 182.0], [6.1, 182.0], [6.2, 182.0], [6.3, 182.0], [6.4, 182.0], [6.5, 182.0], [6.6, 182.0], [6.7, 182.0], [6.8, 182.0], [6.9, 182.0], [7.0, 182.0], [7.1, 182.0], [7.2, 182.0], [7.3, 182.0], [7.4, 182.0], [7.5, 183.0], [7.6, 183.0], [7.7, 183.0], [7.8, 183.0], [7.9, 183.0], [8.0, 183.0], [8.1, 183.0], [8.2, 183.0], [8.3, 183.0], [8.4, 183.0], [8.5, 183.0], [8.6, 183.0], [8.7, 183.0], [8.8, 183.0], [8.9, 183.0], [9.0, 183.0], [9.1, 183.0], [9.2, 183.0], [9.3, 183.0], [9.4, 183.0], [9.5, 184.0], [9.6, 184.0], [9.7, 184.0], [9.8, 184.0], [9.9, 184.0], [10.0, 184.0], [10.1, 184.0], [10.2, 184.0], [10.3, 184.0], [10.4, 184.0], [10.5, 184.0], [10.6, 184.0], [10.7, 184.0], [10.8, 184.0], [10.9, 184.0], [11.0, 184.0], [11.1, 184.0], [11.2, 184.0], [11.3, 184.0], [11.4, 184.0], [11.5, 185.0], [11.6, 185.0], [11.7, 185.0], [11.8, 185.0], [11.9, 185.0], [12.0, 185.0], [12.1, 185.0], [12.2, 185.0], [12.3, 185.0], [12.4, 185.0], [12.5, 185.0], [12.6, 185.0], [12.7, 185.0], [12.8, 185.0], [12.9, 185.0], [13.0, 186.0], [13.1, 186.0], [13.2, 186.0], [13.3, 186.0], [13.4, 186.0], [13.5, 186.0], [13.6, 186.0], [13.7, 186.0], [13.8, 186.0], [13.9, 186.0], [14.0, 187.0], [14.1, 187.0], [14.2, 187.0], [14.3, 187.0], [14.4, 187.0], [14.5, 187.0], [14.6, 187.0], [14.7, 187.0], [14.8, 187.0], [14.9, 187.0], [15.0, 189.0], [15.1, 189.0], [15.2, 189.0], [15.3, 189.0], [15.4, 189.0], [15.5, 189.0], [15.6, 189.0], [15.7, 189.0], [15.8, 189.0], [15.9, 189.0], [16.0, 190.0], [16.1, 190.0], [16.2, 190.0], [16.3, 190.0], [16.4, 190.0], [16.5, 191.0], [16.6, 191.0], [16.7, 191.0], [16.8, 191.0], [16.9, 191.0], [17.0, 197.0], [17.1, 197.0], [17.2, 197.0], [17.3, 197.0], [17.4, 197.0], [17.5, 198.0], [17.6, 198.0], [17.7, 198.0], [17.8, 198.0], [17.9, 198.0], [18.0, 198.0], [18.1, 198.0], [18.2, 198.0], [18.3, 198.0], [18.4, 198.0], [18.5, 198.0], [18.6, 198.0], [18.7, 198.0], [18.8, 198.0], [18.9, 198.0], [19.0, 203.0], [19.1, 203.0], [19.2, 203.0], [19.3, 203.0], [19.4, 203.0], [19.5, 204.0], [19.6, 204.0], [19.7, 204.0], [19.8, 204.0], [19.9, 204.0], [20.0, 205.0], [20.1, 205.0], [20.2, 205.0], [20.3, 205.0], [20.4, 205.0], [20.5, 281.0], [20.6, 281.0], [20.7, 281.0], [20.8, 281.0], [20.9, 281.0], [21.0, 288.0], [21.1, 288.0], [21.2, 288.0], [21.3, 288.0], [21.4, 288.0], [21.5, 295.0], [21.6, 295.0], [21.7, 295.0], [21.8, 295.0], [21.9, 295.0], [22.0, 296.0], [22.1, 296.0], [22.2, 296.0], [22.3, 296.0], [22.4, 296.0], [22.5, 296.0], [22.6, 296.0], [22.7, 296.0], [22.8, 296.0], [22.9, 296.0], [23.0, 308.0], [23.1, 308.0], [23.2, 308.0], [23.3, 308.0], [23.4, 308.0], [23.5, 322.0], [23.6, 322.0], [23.7, 322.0], [23.8, 322.0], [23.9, 322.0], [24.0, 329.0], [24.1, 329.0], [24.2, 329.0], [24.3, 329.0], [24.4, 329.0], [24.5, 331.0], [24.6, 331.0], [24.7, 331.0], [24.8, 331.0], [24.9, 331.0], [25.0, 332.0], [25.1, 332.0], [25.2, 332.0], [25.3, 332.0], [25.4, 332.0], [25.5, 337.0], [25.6, 337.0], [25.7, 337.0], [25.8, 337.0], [25.9, 337.0], [26.0, 342.0], [26.1, 342.0], [26.2, 342.0], [26.3, 342.0], [26.4, 342.0], [26.5, 345.0], [26.6, 345.0], [26.7, 345.0], [26.8, 345.0], [26.9, 345.0], [27.0, 345.0], [27.1, 345.0], [27.2, 345.0], [27.3, 345.0], [27.4, 345.0], [27.5, 347.0], [27.6, 347.0], [27.7, 347.0], [27.8, 347.0], [27.9, 347.0], [28.0, 351.0], [28.1, 351.0], [28.2, 351.0], [28.3, 351.0], [28.4, 351.0], [28.5, 360.0], [28.6, 360.0], [28.7, 360.0], [28.8, 360.0], [28.9, 360.0], [29.0, 362.0], [29.1, 362.0], [29.2, 362.0], [29.3, 362.0], [29.4, 362.0], [29.5, 362.0], [29.6, 362.0], [29.7, 362.0], [29.8, 362.0], [29.9, 362.0], [30.0, 364.0], [30.1, 364.0], [30.2, 364.0], [30.3, 364.0], [30.4, 364.0], [30.5, 370.0], [30.6, 370.0], [30.7, 370.0], [30.8, 370.0], [30.9, 370.0], [31.0, 372.0], [31.1, 372.0], [31.2, 372.0], [31.3, 372.0], [31.4, 372.0], [31.5, 375.0], [31.6, 375.0], [31.7, 375.0], [31.8, 375.0], [31.9, 375.0], [32.0, 380.0], [32.1, 380.0], [32.2, 380.0], [32.3, 380.0], [32.4, 380.0], [32.5, 380.0], [32.6, 380.0], [32.7, 380.0], [32.8, 380.0], [32.9, 380.0], [33.0, 381.0], [33.1, 381.0], [33.2, 381.0], [33.3, 381.0], [33.4, 381.0], [33.5, 385.0], [33.6, 385.0], [33.7, 385.0], [33.8, 385.0], [33.9, 385.0], [34.0, 389.0], [34.1, 389.0], [34.2, 389.0], [34.3, 389.0], [34.4, 389.0], [34.5, 394.0], [34.6, 394.0], [34.7, 394.0], [34.8, 394.0], [34.9, 394.0], [35.0, 398.0], [35.1, 398.0], [35.2, 398.0], [35.3, 398.0], [35.4, 398.0], [35.5, 404.0], [35.6, 404.0], [35.7, 404.0], [35.8, 404.0], [35.9, 404.0], [36.0, 427.0], [36.1, 427.0], [36.2, 427.0], [36.3, 427.0], [36.4, 427.0], [36.5, 461.0], [36.6, 461.0], [36.7, 461.0], [36.8, 461.0], [36.9, 461.0], [37.0, 493.0], [37.1, 493.0], [37.2, 493.0], [37.3, 493.0], [37.4, 493.0], [37.5, 500.0], [37.6, 500.0], [37.7, 500.0], [37.8, 500.0], [37.9, 500.0], [38.0, 540.0], [38.1, 540.0], [38.2, 540.0], [38.3, 540.0], [38.4, 540.0], [38.5, 564.0], [38.6, 564.0], [38.7, 564.0], [38.8, 564.0], [38.9, 564.0], [39.0, 581.0], [39.1, 581.0], [39.2, 581.0], [39.3, 581.0], [39.4, 581.0], [39.5, 582.0], [39.6, 582.0], [39.7, 582.0], [39.8, 582.0], [39.9, 582.0], [40.0, 798.0], [40.1, 798.0], [40.2, 798.0], [40.3, 798.0], [40.4, 798.0], [40.5, 858.0], [40.6, 858.0], [40.7, 858.0], [40.8, 858.0], [40.9, 858.0], [41.0, 1000.0], [41.1, 1000.0], [41.2, 1000.0], [41.3, 1000.0], [41.4, 1000.0], [41.5, 1049.0], [41.6, 1049.0], [41.7, 1049.0], [41.8, 1049.0], [41.9, 1049.0], [42.0, 1084.0], [42.1, 1084.0], [42.2, 1084.0], [42.3, 1084.0], [42.4, 1084.0], [42.5, 1190.0], [42.6, 1190.0], [42.7, 1190.0], [42.8, 1190.0], [42.9, 1190.0], [43.0, 1193.0], [43.1, 1193.0], [43.2, 1193.0], [43.3, 1193.0], [43.4, 1193.0], [43.5, 1193.0], [43.6, 1193.0], [43.7, 1193.0], [43.8, 1193.0], [43.9, 1193.0], [44.0, 1199.0], [44.1, 1199.0], [44.2, 1199.0], [44.3, 1199.0], [44.4, 1199.0], [44.5, 1199.0], [44.6, 1199.0], [44.7, 1199.0], [44.8, 1199.0], [44.9, 1199.0], [45.0, 1258.0], [45.1, 1258.0], [45.2, 1258.0], [45.3, 1258.0], [45.4, 1258.0], [45.5, 1264.0], [45.6, 1264.0], [45.7, 1264.0], [45.8, 1264.0], [45.9, 1264.0], [46.0, 1312.0], [46.1, 1312.0], [46.2, 1312.0], [46.3, 1312.0], [46.4, 1312.0], [46.5, 1343.0], [46.6, 1343.0], [46.7, 1343.0], [46.8, 1343.0], [46.9, 1343.0], [47.0, 1408.0], [47.1, 1408.0], [47.2, 1408.0], [47.3, 1408.0], [47.4, 1408.0], [47.5, 1430.0], [47.6, 1430.0], [47.7, 1430.0], [47.8, 1430.0], [47.9, 1430.0], [48.0, 1447.0], [48.1, 1447.0], [48.2, 1447.0], [48.3, 1447.0], [48.4, 1447.0], [48.5, 1476.0], [48.6, 1476.0], [48.7, 1476.0], [48.8, 1476.0], [48.9, 1476.0], [49.0, 1476.0], [49.1, 1476.0], [49.2, 1476.0], [49.3, 1476.0], [49.4, 1476.0], [49.5, 1476.0], [49.6, 1476.0], [49.7, 1476.0], [49.8, 1476.0], [49.9, 1476.0], [50.0, 1481.0], [50.1, 1481.0], [50.2, 1481.0], [50.3, 1481.0], [50.4, 1481.0], [50.5, 1585.0], [50.6, 1585.0], [50.7, 1585.0], [50.8, 1585.0], [50.9, 1585.0], [51.0, 1639.0], [51.1, 1639.0], [51.2, 1639.0], [51.3, 1639.0], [51.4, 1639.0], [51.5, 1661.0], [51.6, 1661.0], [51.7, 1661.0], [51.8, 1661.0], [51.9, 1661.0], [52.0, 1662.0], [52.1, 1662.0], [52.2, 1662.0], [52.3, 1662.0], [52.4, 1662.0], [52.5, 3191.0], [52.6, 3191.0], [52.7, 3191.0], [52.8, 3191.0], [52.9, 3191.0], [53.0, 3194.0], [53.1, 3194.0], [53.2, 3194.0], [53.3, 3194.0], [53.4, 3194.0], [53.5, 3197.0], [53.6, 3197.0], [53.7, 3197.0], [53.8, 3197.0], [53.9, 3197.0], [54.0, 3198.0], [54.1, 3198.0], [54.2, 3198.0], [54.3, 3198.0], [54.4, 3198.0], [54.5, 3198.0], [54.6, 3198.0], [54.7, 3198.0], [54.8, 3198.0], [54.9, 3198.0], [55.0, 3204.0], [55.1, 3204.0], [55.2, 3204.0], [55.3, 3204.0], [55.4, 3204.0], [55.5, 3206.0], [55.6, 3206.0], [55.7, 3206.0], [55.8, 3206.0], [55.9, 3206.0], [56.0, 3212.0], [56.1, 3212.0], [56.2, 3212.0], [56.3, 3212.0], [56.4, 3212.0], [56.5, 3224.0], [56.6, 3224.0], [56.7, 3224.0], [56.8, 3224.0], [56.9, 3224.0], [57.0, 3350.0], [57.1, 3350.0], [57.2, 3350.0], [57.3, 3350.0], [57.4, 3350.0], [57.5, 3360.0], [57.6, 3360.0], [57.7, 3360.0], [57.8, 3360.0], [57.9, 3360.0], [58.0, 3380.0], [58.1, 3380.0], [58.2, 3380.0], [58.3, 3380.0], [58.4, 3380.0], [58.5, 3386.0], [58.6, 3386.0], [58.7, 3386.0], [58.8, 3386.0], [58.9, 3386.0], [59.0, 3386.0], [59.1, 3386.0], [59.2, 3386.0], [59.3, 3386.0], [59.4, 3386.0], [59.5, 7195.0], [59.6, 7195.0], [59.7, 7195.0], [59.8, 7195.0], [59.9, 7195.0], [60.0, 7197.0], [60.1, 7197.0], [60.2, 7197.0], [60.3, 7197.0], [60.4, 7197.0], [60.5, 7198.0], [60.6, 7198.0], [60.7, 7198.0], [60.8, 7198.0], [60.9, 7198.0], [61.0, 7203.0], [61.1, 7203.0], [61.2, 7203.0], [61.3, 7203.0], [61.4, 7203.0], [61.5, 7203.0], [61.6, 7203.0], [61.7, 7203.0], [61.8, 7203.0], [61.9, 7203.0], [62.0, 7204.0], [62.1, 7204.0], [62.2, 7204.0], [62.3, 7204.0], [62.4, 7204.0], [62.5, 7205.0], [62.6, 7205.0], [62.7, 7205.0], [62.8, 7205.0], [62.9, 7205.0], [63.0, 7205.0], [63.1, 7205.0], [63.2, 7205.0], [63.3, 7205.0], [63.4, 7205.0], [63.5, 7206.0], [63.6, 7206.0], [63.7, 7206.0], [63.8, 7206.0], [63.9, 7206.0], [64.0, 7207.0], [64.1, 7207.0], [64.2, 7207.0], [64.3, 7207.0], [64.4, 7207.0], [64.5, 7209.0], [64.6, 7209.0], [64.7, 7209.0], [64.8, 7209.0], [64.9, 7209.0], [65.0, 7211.0], [65.1, 7211.0], [65.2, 7211.0], [65.3, 7211.0], [65.4, 7211.0], [65.5, 7213.0], [65.6, 7213.0], [65.7, 7213.0], [65.8, 7213.0], [65.9, 7213.0], [66.0, 7213.0], [66.1, 7213.0], [66.2, 7213.0], [66.3, 7213.0], [66.4, 7213.0], [66.5, 7214.0], [66.6, 7214.0], [66.7, 7214.0], [66.8, 7214.0], [66.9, 7214.0], [67.0, 7217.0], [67.1, 7217.0], [67.2, 7217.0], [67.3, 7217.0], [67.4, 7217.0], [67.5, 7217.0], [67.6, 7217.0], [67.7, 7217.0], [67.8, 7217.0], [67.9, 7217.0], [68.0, 7218.0], [68.1, 7218.0], [68.2, 7218.0], [68.3, 7218.0], [68.4, 7218.0], [68.5, 7219.0], [68.6, 7219.0], [68.7, 7219.0], [68.8, 7219.0], [68.9, 7219.0], [69.0, 7221.0], [69.1, 7221.0], [69.2, 7221.0], [69.3, 7221.0], [69.4, 7221.0], [69.5, 7221.0], [69.6, 7221.0], [69.7, 7221.0], [69.8, 7221.0], [69.9, 7221.0], [70.0, 7221.0], [70.1, 7221.0], [70.2, 7221.0], [70.3, 7221.0], [70.4, 7221.0], [70.5, 7222.0], [70.6, 7222.0], [70.7, 7222.0], [70.8, 7222.0], [70.9, 7222.0], [71.0, 7222.0], [71.1, 7222.0], [71.2, 7222.0], [71.3, 7222.0], [71.4, 7222.0], [71.5, 7223.0], [71.6, 7223.0], [71.7, 7223.0], [71.8, 7223.0], [71.9, 7223.0], [72.0, 7223.0], [72.1, 7223.0], [72.2, 7223.0], [72.3, 7223.0], [72.4, 7223.0], [72.5, 7226.0], [72.6, 7226.0], [72.7, 7226.0], [72.8, 7226.0], [72.9, 7226.0], [73.0, 7229.0], [73.1, 7229.0], [73.2, 7229.0], [73.3, 7229.0], [73.4, 7229.0], [73.5, 7235.0], [73.6, 7235.0], [73.7, 7235.0], [73.8, 7235.0], [73.9, 7235.0], [74.0, 7238.0], [74.1, 7238.0], [74.2, 7238.0], [74.3, 7238.0], [74.4, 7238.0], [74.5, 7240.0], [74.6, 7240.0], [74.7, 7240.0], [74.8, 7240.0], [74.9, 7240.0], [75.0, 7266.0], [75.1, 7266.0], [75.2, 7266.0], [75.3, 7266.0], [75.4, 7266.0], [75.5, 7271.0], [75.6, 7271.0], [75.7, 7271.0], [75.8, 7271.0], [75.9, 7271.0], [76.0, 7271.0], [76.1, 7271.0], [76.2, 7271.0], [76.3, 7271.0], [76.4, 7271.0], [76.5, 7272.0], [76.6, 7272.0], [76.7, 7272.0], [76.8, 7272.0], [76.9, 7272.0], [77.0, 7289.0], [77.1, 7289.0], [77.2, 7289.0], [77.3, 7289.0], [77.4, 7289.0], [77.5, 7317.0], [77.6, 7317.0], [77.7, 7317.0], [77.8, 7317.0], [77.9, 7317.0], [78.0, 7396.0], [78.1, 7396.0], [78.2, 7396.0], [78.3, 7396.0], [78.4, 7396.0], [78.5, 7412.0], [78.6, 7412.0], [78.7, 7412.0], [78.8, 7412.0], [78.9, 7412.0], [79.0, 7412.0], [79.1, 7412.0], [79.2, 7412.0], [79.3, 7412.0], [79.4, 7412.0], [79.5, 7433.0], [79.6, 7433.0], [79.7, 7433.0], [79.8, 7433.0], [79.9, 7433.0], [80.0, 7463.0], [80.1, 7463.0], [80.2, 7463.0], [80.3, 7463.0], [80.4, 7463.0], [80.5, 15197.0], [80.6, 15197.0], [80.7, 15197.0], [80.8, 15197.0], [80.9, 15197.0], [81.0, 15198.0], [81.1, 15198.0], [81.2, 15198.0], [81.3, 15198.0], [81.4, 15198.0], [81.5, 15199.0], [81.6, 15199.0], [81.7, 15199.0], [81.8, 15199.0], [81.9, 15199.0], [82.0, 15205.0], [82.1, 15205.0], [82.2, 15205.0], [82.3, 15205.0], [82.4, 15205.0], [82.5, 15206.0], [82.6, 15206.0], [82.7, 15206.0], [82.8, 15206.0], [82.9, 15206.0], [83.0, 15210.0], [83.1, 15210.0], [83.2, 15210.0], [83.3, 15210.0], [83.4, 15210.0], [83.5, 15210.0], [83.6, 15210.0], [83.7, 15210.0], [83.8, 15210.0], [83.9, 15210.0], [84.0, 15210.0], [84.1, 15210.0], [84.2, 15210.0], [84.3, 15210.0], [84.4, 15210.0], [84.5, 15211.0], [84.6, 15211.0], [84.7, 15211.0], [84.8, 15211.0], [84.9, 15211.0], [85.0, 15213.0], [85.1, 15213.0], [85.2, 15213.0], [85.3, 15213.0], [85.4, 15213.0], [85.5, 15213.0], [85.6, 15213.0], [85.7, 15213.0], [85.8, 15213.0], [85.9, 15213.0], [86.0, 15219.0], [86.1, 15219.0], [86.2, 15219.0], [86.3, 15219.0], [86.4, 15219.0], [86.5, 15219.0], [86.6, 15219.0], [86.7, 15219.0], [86.8, 15219.0], [86.9, 15219.0], [87.0, 15219.0], [87.1, 15219.0], [87.2, 15219.0], [87.3, 15219.0], [87.4, 15219.0], [87.5, 15221.0], [87.6, 15221.0], [87.7, 15221.0], [87.8, 15221.0], [87.9, 15221.0], [88.0, 15221.0], [88.1, 15221.0], [88.2, 15221.0], [88.3, 15221.0], [88.4, 15221.0], [88.5, 15225.0], [88.6, 15225.0], [88.7, 15225.0], [88.8, 15225.0], [88.9, 15225.0], [89.0, 15226.0], [89.1, 15226.0], [89.2, 15226.0], [89.3, 15226.0], [89.4, 15226.0], [89.5, 15226.0], [89.6, 15226.0], [89.7, 15226.0], [89.8, 15226.0], [89.9, 15226.0], [90.0, 15227.0], [90.1, 15227.0], [90.2, 15227.0], [90.3, 15227.0], [90.4, 15227.0], [90.5, 15228.0], [90.6, 15228.0], [90.7, 15228.0], [90.8, 15228.0], [90.9, 15228.0], [91.0, 15229.0], [91.1, 15229.0], [91.2, 15229.0], [91.3, 15229.0], [91.4, 15229.0], [91.5, 15229.0], [91.6, 15229.0], [91.7, 15229.0], [91.8, 15229.0], [91.9, 15229.0], [92.0, 15241.0], [92.1, 15241.0], [92.2, 15241.0], [92.3, 15241.0], [92.4, 15241.0], [92.5, 15241.0], [92.6, 15241.0], [92.7, 15241.0], [92.8, 15241.0], [92.9, 15241.0], [93.0, 15244.0], [93.1, 15244.0], [93.2, 15244.0], [93.3, 15244.0], [93.4, 15244.0], [93.5, 15258.0], [93.6, 15258.0], [93.7, 15258.0], [93.8, 15258.0], [93.9, 15258.0], [94.0, 15261.0], [94.1, 15261.0], [94.2, 15261.0], [94.3, 15261.0], [94.4, 15261.0], [94.5, 15279.0], [94.6, 15279.0], [94.7, 15279.0], [94.8, 15279.0], [94.9, 15279.0], [95.0, 15299.0], [95.1, 15299.0], [95.2, 15299.0], [95.3, 15299.0], [95.4, 15299.0], [95.5, 15366.0], [95.6, 15366.0], [95.7, 15366.0], [95.8, 15366.0], [95.9, 15366.0], [96.0, 15376.0], [96.1, 15376.0], [96.2, 15376.0], [96.3, 15376.0], [96.4, 15376.0], [96.5, 15378.0], [96.6, 15378.0], [96.7, 15378.0], [96.8, 15378.0], [96.9, 15378.0], [97.0, 15398.0], [97.1, 15398.0], [97.2, 15398.0], [97.3, 15398.0], [97.4, 15398.0], [97.5, 15409.0], [97.6, 15409.0], [97.7, 15409.0], [97.8, 15409.0], [97.9, 15409.0], [98.0, 15414.0], [98.1, 15414.0], [98.2, 15414.0], [98.3, 15414.0], [98.4, 15414.0], [98.5, 15414.0], [98.6, 15414.0], [98.7, 15414.0], [98.8, 15414.0], [98.9, 15414.0], [99.0, 15430.0], [99.1, 15430.0], [99.2, 15430.0], [99.3, 15430.0], [99.4, 15430.0], [99.5, 15497.0], [99.6, 15497.0], [99.7, 15497.0], [99.8, 15497.0], [99.9, 15497.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 38.0, "series": [{"data": [[700.0, 1.0], [800.0, 1.0], [15200.0, 27.0], [15300.0, 4.0], [15100.0, 3.0], [15400.0, 5.0], [1000.0, 3.0], [1100.0, 5.0], [1200.0, 2.0], [1300.0, 2.0], [1400.0, 7.0], [1500.0, 1.0], [1600.0, 3.0], [100.0, 38.0], [3100.0, 5.0], [200.0, 8.0], [3200.0, 4.0], [3300.0, 5.0], [300.0, 25.0], [400.0, 4.0], [7100.0, 3.0], [7200.0, 33.0], [7400.0, 4.0], [7300.0, 2.0], [500.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 15400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 25.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 99.0, "series": [{"data": [[0.0, 76.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 25.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 99.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 48.97, "minX": 1.75212594E12, "maxY": 48.97, "series": [{"data": [[1.75212594E12, 48.97]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75212594E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 180.0, "minX": 1.0, "maxY": 15430.0, "series": [{"data": [[2.0, 15261.0], [3.0, 15258.0], [4.0, 15244.0], [5.0, 15221.0], [6.0, 15430.0], [7.0, 15213.0], [8.0, 15197.0], [9.0, 15219.0], [10.0, 15210.0], [11.0, 15221.0], [12.0, 15376.0], [13.0, 15414.0], [14.0, 15213.0], [15.0, 15210.0], [16.0, 7704.0], [17.0, 4051.0], [18.0, 5314.666666666667], [19.0, 5328.333333333333], [20.0, 15241.0], [21.0, 15378.0], [22.0, 8499.5], [23.0, 3275.142857142857], [24.0, 3348.0], [25.0, 4009.25], [26.0, 5570.333333333333], [27.0, 4594.5], [28.0, 5427.0], [29.0, 7773.5], [30.0, 15409.0], [31.0, 15226.0], [33.0, 15225.0], [32.0, 15219.0], [34.0, 5307.666666666667], [35.0, 2587.0], [36.0, 2135.3846153846152], [37.0, 7731.5], [38.0, 7792.0], [39.0, 9354.5], [40.0, 3699.5], [41.0, 15226.0], [43.0, 7213.0], [42.0, 7229.0], [45.0, 2019.5], [44.0, 3761.5], [46.0, 2591.3333333333335], [47.0, 3697.0], [48.0, 3693.0], [49.0, 3692.5], [50.0, 3688.5], [51.0, 7222.0], [53.0, 7412.0], [52.0, 7271.0], [55.0, 2594.3333333333335], [54.0, 7203.0], [56.0, 1686.8], [57.0, 3699.0], [58.0, 3701.0], [59.0, 182.0], [60.0, 4904.333333333333], [61.0, 7433.0], [63.0, 7211.0], [62.0, 7396.0], [65.0, 1456.8333333333333], [66.0, 1693.0], [67.0, 1687.5], [64.0, 7213.0], [68.0, 180.0], [69.0, 182.0], [70.0, 4475.5], [71.0, 7412.0], [75.0, 794.8333333333333], [74.0, 7214.0], [73.0, 3197.0], [72.0, 3386.0], [76.0, 5210.5], [77.0, 1692.5], [78.0, 7218.0], [79.0, 4893.666666666667], [80.0, 1773.5], [83.0, 7205.0], [82.0, 3386.0], [81.0, 3350.0], [87.0, 3893.0], [86.0, 521.0], [85.0, 1193.0], [84.0, 3198.0], [88.0, 4927.0], [89.0, 4251.0], [90.0, 803.0], [91.0, 3380.0], [95.0, 4947.0], [94.0, 185.0], [93.0, 1199.0], [92.0, 1193.0], [96.0, 350.6666666666667], [1.0, 15199.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[48.97, 5004.62]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 96.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 583.3333333333334, "minX": 1.75212594E12, "maxY": 2883.3333333333335, "series": [{"data": [[1.75212594E12, 2883.3333333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75212594E12, 583.3333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75212594E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 5004.62, "minX": 1.75212594E12, "maxY": 5004.62, "series": [{"data": [[1.75212594E12, 5004.62]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75212594E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5003.785000000001, "minX": 1.75212594E12, "maxY": 5003.785000000001, "series": [{"data": [[1.75212594E12, 5003.785000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75212594E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 4929.545, "minX": 1.75212594E12, "maxY": 4929.545, "series": [{"data": [[1.75212594E12, 4929.545]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75212594E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 180.0, "minX": 1.75212594E12, "maxY": 15497.0, "series": [{"data": [[1.75212594E12, 15497.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75212594E12, 180.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75212594E12, 15226.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75212594E12, 15429.84]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75212594E12, 1478.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75212594E12, 15298.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75212594E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 197.0, "minX": 1.0, "maxY": 15251.0, "series": [{"data": [[8.0, 15234.5], [4.0, 15251.0], [1.0, 15230.0], [9.0, 7217.0], [10.0, 349.0], [5.0, 7229.0], [11.0, 197.0], [7.0, 15219.0], [30.0, 1066.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 197.0, "minX": 1.0, "maxY": 15251.0, "series": [{"data": [[8.0, 15234.5], [4.0, 15251.0], [1.0, 15230.0], [9.0, 7216.0], [10.0, 349.0], [5.0, 7229.0], [11.0, 197.0], [7.0, 15219.0], [30.0, 1059.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.75212594E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.75212594E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75212594E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.75212594E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.75212594E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75212594E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.75212594E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.75212594E12, 3.3333333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75212594E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.75212594E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.75212594E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75212594E12, "title": "Total Transactions Per Second"}},
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

