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
        data: {"result": {"minY": 175.0, "minX": 0.0, "maxY": 1038.0, "series": [{"data": [[0.0, 175.0], [0.1, 175.0], [0.2, 175.0], [0.3, 175.0], [0.4, 175.0], [0.5, 176.0], [0.6, 176.0], [0.7, 176.0], [0.8, 176.0], [0.9, 176.0], [1.0, 176.0], [1.1, 176.0], [1.2, 176.0], [1.3, 176.0], [1.4, 176.0], [1.5, 176.0], [1.6, 176.0], [1.7, 176.0], [1.8, 176.0], [1.9, 176.0], [2.0, 177.0], [2.1, 177.0], [2.2, 177.0], [2.3, 177.0], [2.4, 177.0], [2.5, 177.0], [2.6, 177.0], [2.7, 177.0], [2.8, 177.0], [2.9, 177.0], [3.0, 177.0], [3.1, 177.0], [3.2, 177.0], [3.3, 177.0], [3.4, 177.0], [3.5, 177.0], [3.6, 177.0], [3.7, 177.0], [3.8, 177.0], [3.9, 177.0], [4.0, 177.0], [4.1, 177.0], [4.2, 177.0], [4.3, 177.0], [4.4, 177.0], [4.5, 178.0], [4.6, 178.0], [4.7, 178.0], [4.8, 178.0], [4.9, 178.0], [5.0, 178.0], [5.1, 178.0], [5.2, 178.0], [5.3, 178.0], [5.4, 178.0], [5.5, 178.0], [5.6, 178.0], [5.7, 178.0], [5.8, 178.0], [5.9, 178.0], [6.0, 178.0], [6.1, 178.0], [6.2, 178.0], [6.3, 178.0], [6.4, 178.0], [6.5, 178.0], [6.6, 178.0], [6.7, 178.0], [6.8, 178.0], [6.9, 178.0], [7.0, 179.0], [7.1, 179.0], [7.2, 179.0], [7.3, 179.0], [7.4, 179.0], [7.5, 179.0], [7.6, 179.0], [7.7, 179.0], [7.8, 179.0], [7.9, 179.0], [8.0, 179.0], [8.1, 179.0], [8.2, 179.0], [8.3, 179.0], [8.4, 179.0], [8.5, 179.0], [8.6, 179.0], [8.7, 179.0], [8.8, 179.0], [8.9, 179.0], [9.0, 179.0], [9.1, 179.0], [9.2, 179.0], [9.3, 179.0], [9.4, 179.0], [9.5, 179.0], [9.6, 179.0], [9.7, 179.0], [9.8, 179.0], [9.9, 179.0], [10.0, 179.0], [10.1, 179.0], [10.2, 179.0], [10.3, 179.0], [10.4, 179.0], [10.5, 179.0], [10.6, 179.0], [10.7, 179.0], [10.8, 179.0], [10.9, 179.0], [11.0, 179.0], [11.1, 179.0], [11.2, 179.0], [11.3, 179.0], [11.4, 179.0], [11.5, 179.0], [11.6, 179.0], [11.7, 179.0], [11.8, 179.0], [11.9, 179.0], [12.0, 179.0], [12.1, 179.0], [12.2, 179.0], [12.3, 179.0], [12.4, 179.0], [12.5, 179.0], [12.6, 179.0], [12.7, 179.0], [12.8, 179.0], [12.9, 179.0], [13.0, 180.0], [13.1, 180.0], [13.2, 180.0], [13.3, 180.0], [13.4, 180.0], [13.5, 180.0], [13.6, 180.0], [13.7, 180.0], [13.8, 180.0], [13.9, 180.0], [14.0, 180.0], [14.1, 180.0], [14.2, 180.0], [14.3, 180.0], [14.4, 180.0], [14.5, 180.0], [14.6, 180.0], [14.7, 180.0], [14.8, 180.0], [14.9, 180.0], [15.0, 180.0], [15.1, 180.0], [15.2, 180.0], [15.3, 180.0], [15.4, 180.0], [15.5, 180.0], [15.6, 180.0], [15.7, 180.0], [15.8, 180.0], [15.9, 180.0], [16.0, 180.0], [16.1, 180.0], [16.2, 180.0], [16.3, 180.0], [16.4, 180.0], [16.5, 181.0], [16.6, 181.0], [16.7, 181.0], [16.8, 181.0], [16.9, 181.0], [17.0, 181.0], [17.1, 181.0], [17.2, 181.0], [17.3, 181.0], [17.4, 181.0], [17.5, 181.0], [17.6, 181.0], [17.7, 181.0], [17.8, 181.0], [17.9, 181.0], [18.0, 181.0], [18.1, 181.0], [18.2, 181.0], [18.3, 181.0], [18.4, 181.0], [18.5, 181.0], [18.6, 181.0], [18.7, 181.0], [18.8, 181.0], [18.9, 181.0], [19.0, 181.0], [19.1, 181.0], [19.2, 181.0], [19.3, 181.0], [19.4, 181.0], [19.5, 181.0], [19.6, 181.0], [19.7, 181.0], [19.8, 181.0], [19.9, 181.0], [20.0, 182.0], [20.1, 182.0], [20.2, 182.0], [20.3, 182.0], [20.4, 182.0], [20.5, 182.0], [20.6, 182.0], [20.7, 182.0], [20.8, 182.0], [20.9, 182.0], [21.0, 182.0], [21.1, 182.0], [21.2, 182.0], [21.3, 182.0], [21.4, 182.0], [21.5, 182.0], [21.6, 182.0], [21.7, 182.0], [21.8, 182.0], [21.9, 182.0], [22.0, 182.0], [22.1, 182.0], [22.2, 182.0], [22.3, 182.0], [22.4, 182.0], [22.5, 182.0], [22.6, 182.0], [22.7, 182.0], [22.8, 182.0], [22.9, 182.0], [23.0, 182.0], [23.1, 182.0], [23.2, 182.0], [23.3, 182.0], [23.4, 182.0], [23.5, 182.0], [23.6, 182.0], [23.7, 182.0], [23.8, 182.0], [23.9, 182.0], [24.0, 182.0], [24.1, 182.0], [24.2, 182.0], [24.3, 182.0], [24.4, 182.0], [24.5, 183.0], [24.6, 183.0], [24.7, 183.0], [24.8, 183.0], [24.9, 183.0], [25.0, 183.0], [25.1, 183.0], [25.2, 183.0], [25.3, 183.0], [25.4, 183.0], [25.5, 183.0], [25.6, 183.0], [25.7, 183.0], [25.8, 183.0], [25.9, 183.0], [26.0, 183.0], [26.1, 183.0], [26.2, 183.0], [26.3, 183.0], [26.4, 183.0], [26.5, 183.0], [26.6, 183.0], [26.7, 183.0], [26.8, 183.0], [26.9, 183.0], [27.0, 183.0], [27.1, 183.0], [27.2, 183.0], [27.3, 183.0], [27.4, 183.0], [27.5, 183.0], [27.6, 183.0], [27.7, 183.0], [27.8, 183.0], [27.9, 183.0], [28.0, 184.0], [28.1, 184.0], [28.2, 184.0], [28.3, 184.0], [28.4, 184.0], [28.5, 184.0], [28.6, 184.0], [28.7, 184.0], [28.8, 184.0], [28.9, 184.0], [29.0, 184.0], [29.1, 184.0], [29.2, 184.0], [29.3, 184.0], [29.4, 184.0], [29.5, 184.0], [29.6, 184.0], [29.7, 184.0], [29.8, 184.0], [29.9, 184.0], [30.0, 184.0], [30.1, 184.0], [30.2, 184.0], [30.3, 184.0], [30.4, 184.0], [30.5, 184.0], [30.6, 184.0], [30.7, 184.0], [30.8, 184.0], [30.9, 184.0], [31.0, 184.0], [31.1, 184.0], [31.2, 184.0], [31.3, 184.0], [31.4, 184.0], [31.5, 184.0], [31.6, 184.0], [31.7, 184.0], [31.8, 184.0], [31.9, 184.0], [32.0, 184.0], [32.1, 184.0], [32.2, 184.0], [32.3, 184.0], [32.4, 184.0], [32.5, 184.0], [32.6, 184.0], [32.7, 184.0], [32.8, 184.0], [32.9, 184.0], [33.0, 185.0], [33.1, 185.0], [33.2, 185.0], [33.3, 185.0], [33.4, 185.0], [33.5, 185.0], [33.6, 185.0], [33.7, 185.0], [33.8, 185.0], [33.9, 185.0], [34.0, 185.0], [34.1, 185.0], [34.2, 185.0], [34.3, 185.0], [34.4, 185.0], [34.5, 185.0], [34.6, 185.0], [34.7, 185.0], [34.8, 185.0], [34.9, 185.0], [35.0, 185.0], [35.1, 185.0], [35.2, 185.0], [35.3, 185.0], [35.4, 185.0], [35.5, 185.0], [35.6, 185.0], [35.7, 185.0], [35.8, 185.0], [35.9, 185.0], [36.0, 185.0], [36.1, 185.0], [36.2, 185.0], [36.3, 185.0], [36.4, 185.0], [36.5, 185.0], [36.6, 185.0], [36.7, 185.0], [36.8, 185.0], [36.9, 185.0], [37.0, 185.0], [37.1, 185.0], [37.2, 185.0], [37.3, 185.0], [37.4, 185.0], [37.5, 185.0], [37.6, 185.0], [37.7, 185.0], [37.8, 185.0], [37.9, 185.0], [38.0, 185.0], [38.1, 185.0], [38.2, 185.0], [38.3, 185.0], [38.4, 185.0], [38.5, 185.0], [38.6, 185.0], [38.7, 185.0], [38.8, 185.0], [38.9, 185.0], [39.0, 185.0], [39.1, 185.0], [39.2, 185.0], [39.3, 185.0], [39.4, 185.0], [39.5, 185.0], [39.6, 185.0], [39.7, 185.0], [39.8, 185.0], [39.9, 185.0], [40.0, 185.0], [40.1, 185.0], [40.2, 185.0], [40.3, 185.0], [40.4, 185.0], [40.5, 186.0], [40.6, 186.0], [40.7, 186.0], [40.8, 186.0], [40.9, 186.0], [41.0, 186.0], [41.1, 186.0], [41.2, 186.0], [41.3, 186.0], [41.4, 186.0], [41.5, 186.0], [41.6, 186.0], [41.7, 186.0], [41.8, 186.0], [41.9, 186.0], [42.0, 186.0], [42.1, 186.0], [42.2, 186.0], [42.3, 186.0], [42.4, 186.0], [42.5, 186.0], [42.6, 186.0], [42.7, 186.0], [42.8, 186.0], [42.9, 186.0], [43.0, 186.0], [43.1, 186.0], [43.2, 186.0], [43.3, 186.0], [43.4, 186.0], [43.5, 187.0], [43.6, 187.0], [43.7, 187.0], [43.8, 187.0], [43.9, 187.0], [44.0, 187.0], [44.1, 187.0], [44.2, 187.0], [44.3, 187.0], [44.4, 187.0], [44.5, 187.0], [44.6, 187.0], [44.7, 187.0], [44.8, 187.0], [44.9, 187.0], [45.0, 187.0], [45.1, 187.0], [45.2, 187.0], [45.3, 187.0], [45.4, 187.0], [45.5, 187.0], [45.6, 187.0], [45.7, 187.0], [45.8, 187.0], [45.9, 187.0], [46.0, 187.0], [46.1, 187.0], [46.2, 187.0], [46.3, 187.0], [46.4, 187.0], [46.5, 187.0], [46.6, 187.0], [46.7, 187.0], [46.8, 187.0], [46.9, 187.0], [47.0, 187.0], [47.1, 187.0], [47.2, 187.0], [47.3, 187.0], [47.4, 187.0], [47.5, 187.0], [47.6, 187.0], [47.7, 187.0], [47.8, 187.0], [47.9, 187.0], [48.0, 187.0], [48.1, 187.0], [48.2, 187.0], [48.3, 187.0], [48.4, 187.0], [48.5, 187.0], [48.6, 187.0], [48.7, 187.0], [48.8, 187.0], [48.9, 187.0], [49.0, 187.0], [49.1, 187.0], [49.2, 187.0], [49.3, 187.0], [49.4, 187.0], [49.5, 187.0], [49.6, 187.0], [49.7, 187.0], [49.8, 187.0], [49.9, 187.0], [50.0, 187.0], [50.1, 187.0], [50.2, 187.0], [50.3, 187.0], [50.4, 187.0], [50.5, 187.0], [50.6, 187.0], [50.7, 187.0], [50.8, 187.0], [50.9, 187.0], [51.0, 188.0], [51.1, 188.0], [51.2, 188.0], [51.3, 188.0], [51.4, 188.0], [51.5, 188.0], [51.6, 188.0], [51.7, 188.0], [51.8, 188.0], [51.9, 188.0], [52.0, 188.0], [52.1, 188.0], [52.2, 188.0], [52.3, 188.0], [52.4, 188.0], [52.5, 188.0], [52.6, 188.0], [52.7, 188.0], [52.8, 188.0], [52.9, 188.0], [53.0, 188.0], [53.1, 188.0], [53.2, 188.0], [53.3, 188.0], [53.4, 188.0], [53.5, 188.0], [53.6, 188.0], [53.7, 188.0], [53.8, 188.0], [53.9, 188.0], [54.0, 189.0], [54.1, 189.0], [54.2, 189.0], [54.3, 189.0], [54.4, 189.0], [54.5, 190.0], [54.6, 190.0], [54.7, 190.0], [54.8, 190.0], [54.9, 190.0], [55.0, 191.0], [55.1, 191.0], [55.2, 191.0], [55.3, 191.0], [55.4, 191.0], [55.5, 191.0], [55.6, 191.0], [55.7, 191.0], [55.8, 191.0], [55.9, 191.0], [56.0, 191.0], [56.1, 191.0], [56.2, 191.0], [56.3, 191.0], [56.4, 191.0], [56.5, 192.0], [56.6, 192.0], [56.7, 192.0], [56.8, 192.0], [56.9, 192.0], [57.0, 195.0], [57.1, 195.0], [57.2, 195.0], [57.3, 195.0], [57.4, 195.0], [57.5, 197.0], [57.6, 197.0], [57.7, 197.0], [57.8, 197.0], [57.9, 197.0], [58.0, 200.0], [58.1, 200.0], [58.2, 200.0], [58.3, 200.0], [58.4, 200.0], [58.5, 200.0], [58.6, 200.0], [58.7, 200.0], [58.8, 200.0], [58.9, 200.0], [59.0, 204.0], [59.1, 204.0], [59.2, 204.0], [59.3, 204.0], [59.4, 204.0], [59.5, 207.0], [59.6, 207.0], [59.7, 207.0], [59.8, 207.0], [59.9, 207.0], [60.0, 209.0], [60.1, 209.0], [60.2, 209.0], [60.3, 209.0], [60.4, 209.0], [60.5, 218.0], [60.6, 218.0], [60.7, 218.0], [60.8, 218.0], [60.9, 218.0], [61.0, 219.0], [61.1, 219.0], [61.2, 219.0], [61.3, 219.0], [61.4, 219.0], [61.5, 230.0], [61.6, 230.0], [61.7, 230.0], [61.8, 230.0], [61.9, 230.0], [62.0, 231.0], [62.1, 231.0], [62.2, 231.0], [62.3, 231.0], [62.4, 231.0], [62.5, 233.0], [62.6, 233.0], [62.7, 233.0], [62.8, 233.0], [62.9, 233.0], [63.0, 233.0], [63.1, 233.0], [63.2, 233.0], [63.3, 233.0], [63.4, 233.0], [63.5, 241.0], [63.6, 241.0], [63.7, 241.0], [63.8, 241.0], [63.9, 241.0], [64.0, 248.0], [64.1, 248.0], [64.2, 248.0], [64.3, 248.0], [64.4, 248.0], [64.5, 259.0], [64.6, 259.0], [64.7, 259.0], [64.8, 259.0], [64.9, 259.0], [65.0, 266.0], [65.1, 266.0], [65.2, 266.0], [65.3, 266.0], [65.4, 266.0], [65.5, 271.0], [65.6, 271.0], [65.7, 271.0], [65.8, 271.0], [65.9, 271.0], [66.0, 272.0], [66.1, 272.0], [66.2, 272.0], [66.3, 272.0], [66.4, 272.0], [66.5, 274.0], [66.6, 274.0], [66.7, 274.0], [66.8, 274.0], [66.9, 274.0], [67.0, 276.0], [67.1, 276.0], [67.2, 276.0], [67.3, 276.0], [67.4, 276.0], [67.5, 290.0], [67.6, 290.0], [67.7, 290.0], [67.8, 290.0], [67.9, 290.0], [68.0, 293.0], [68.1, 293.0], [68.2, 293.0], [68.3, 293.0], [68.4, 293.0], [68.5, 306.0], [68.6, 306.0], [68.7, 306.0], [68.8, 306.0], [68.9, 306.0], [69.0, 311.0], [69.1, 311.0], [69.2, 311.0], [69.3, 311.0], [69.4, 311.0], [69.5, 314.0], [69.6, 314.0], [69.7, 314.0], [69.8, 314.0], [69.9, 314.0], [70.0, 318.0], [70.1, 318.0], [70.2, 318.0], [70.3, 318.0], [70.4, 318.0], [70.5, 319.0], [70.6, 319.0], [70.7, 319.0], [70.8, 319.0], [70.9, 319.0], [71.0, 320.0], [71.1, 320.0], [71.2, 320.0], [71.3, 320.0], [71.4, 320.0], [71.5, 321.0], [71.6, 321.0], [71.7, 321.0], [71.8, 321.0], [71.9, 321.0], [72.0, 322.0], [72.1, 322.0], [72.2, 322.0], [72.3, 322.0], [72.4, 322.0], [72.5, 326.0], [72.6, 326.0], [72.7, 326.0], [72.8, 326.0], [72.9, 326.0], [73.0, 327.0], [73.1, 327.0], [73.2, 327.0], [73.3, 327.0], [73.4, 327.0], [73.5, 334.0], [73.6, 334.0], [73.7, 334.0], [73.8, 334.0], [73.9, 334.0], [74.0, 338.0], [74.1, 338.0], [74.2, 338.0], [74.3, 338.0], [74.4, 338.0], [74.5, 346.0], [74.6, 346.0], [74.7, 346.0], [74.8, 346.0], [74.9, 346.0], [75.0, 347.0], [75.1, 347.0], [75.2, 347.0], [75.3, 347.0], [75.4, 347.0], [75.5, 349.0], [75.6, 349.0], [75.7, 349.0], [75.8, 349.0], [75.9, 349.0], [76.0, 349.0], [76.1, 349.0], [76.2, 349.0], [76.3, 349.0], [76.4, 349.0], [76.5, 351.0], [76.6, 351.0], [76.7, 351.0], [76.8, 351.0], [76.9, 351.0], [77.0, 351.0], [77.1, 351.0], [77.2, 351.0], [77.3, 351.0], [77.4, 351.0], [77.5, 352.0], [77.6, 352.0], [77.7, 352.0], [77.8, 352.0], [77.9, 352.0], [78.0, 353.0], [78.1, 353.0], [78.2, 353.0], [78.3, 353.0], [78.4, 353.0], [78.5, 353.0], [78.6, 353.0], [78.7, 353.0], [78.8, 353.0], [78.9, 353.0], [79.0, 354.0], [79.1, 354.0], [79.2, 354.0], [79.3, 354.0], [79.4, 354.0], [79.5, 358.0], [79.6, 358.0], [79.7, 358.0], [79.8, 358.0], [79.9, 358.0], [80.0, 358.0], [80.1, 358.0], [80.2, 358.0], [80.3, 358.0], [80.4, 358.0], [80.5, 359.0], [80.6, 359.0], [80.7, 359.0], [80.8, 359.0], [80.9, 359.0], [81.0, 360.0], [81.1, 360.0], [81.2, 360.0], [81.3, 360.0], [81.4, 360.0], [81.5, 361.0], [81.6, 361.0], [81.7, 361.0], [81.8, 361.0], [81.9, 361.0], [82.0, 362.0], [82.1, 362.0], [82.2, 362.0], [82.3, 362.0], [82.4, 362.0], [82.5, 362.0], [82.6, 362.0], [82.7, 362.0], [82.8, 362.0], [82.9, 362.0], [83.0, 364.0], [83.1, 364.0], [83.2, 364.0], [83.3, 364.0], [83.4, 364.0], [83.5, 366.0], [83.6, 366.0], [83.7, 366.0], [83.8, 366.0], [83.9, 366.0], [84.0, 366.0], [84.1, 366.0], [84.2, 366.0], [84.3, 366.0], [84.4, 366.0], [84.5, 367.0], [84.6, 367.0], [84.7, 367.0], [84.8, 367.0], [84.9, 367.0], [85.0, 370.0], [85.1, 370.0], [85.2, 370.0], [85.3, 370.0], [85.4, 370.0], [85.5, 371.0], [85.6, 371.0], [85.7, 371.0], [85.8, 371.0], [85.9, 371.0], [86.0, 373.0], [86.1, 373.0], [86.2, 373.0], [86.3, 373.0], [86.4, 373.0], [86.5, 376.0], [86.6, 376.0], [86.7, 376.0], [86.8, 376.0], [86.9, 376.0], [87.0, 377.0], [87.1, 377.0], [87.2, 377.0], [87.3, 377.0], [87.4, 377.0], [87.5, 377.0], [87.6, 377.0], [87.7, 377.0], [87.8, 377.0], [87.9, 377.0], [88.0, 379.0], [88.1, 379.0], [88.2, 379.0], [88.3, 379.0], [88.4, 379.0], [88.5, 381.0], [88.6, 381.0], [88.7, 381.0], [88.8, 381.0], [88.9, 381.0], [89.0, 381.0], [89.1, 381.0], [89.2, 381.0], [89.3, 381.0], [89.4, 381.0], [89.5, 383.0], [89.6, 383.0], [89.7, 383.0], [89.8, 383.0], [89.9, 383.0], [90.0, 385.0], [90.1, 385.0], [90.2, 385.0], [90.3, 385.0], [90.4, 385.0], [90.5, 385.0], [90.6, 385.0], [90.7, 385.0], [90.8, 385.0], [90.9, 385.0], [91.0, 386.0], [91.1, 386.0], [91.2, 386.0], [91.3, 386.0], [91.4, 386.0], [91.5, 386.0], [91.6, 386.0], [91.7, 386.0], [91.8, 386.0], [91.9, 386.0], [92.0, 391.0], [92.1, 391.0], [92.2, 391.0], [92.3, 391.0], [92.4, 391.0], [92.5, 395.0], [92.6, 395.0], [92.7, 395.0], [92.8, 395.0], [92.9, 395.0], [93.0, 395.0], [93.1, 395.0], [93.2, 395.0], [93.3, 395.0], [93.4, 395.0], [93.5, 396.0], [93.6, 396.0], [93.7, 396.0], [93.8, 396.0], [93.9, 396.0], [94.0, 397.0], [94.1, 397.0], [94.2, 397.0], [94.3, 397.0], [94.4, 397.0], [94.5, 398.0], [94.6, 398.0], [94.7, 398.0], [94.8, 398.0], [94.9, 398.0], [95.0, 401.0], [95.1, 401.0], [95.2, 401.0], [95.3, 401.0], [95.4, 401.0], [95.5, 404.0], [95.6, 404.0], [95.7, 404.0], [95.8, 404.0], [95.9, 404.0], [96.0, 404.0], [96.1, 404.0], [96.2, 404.0], [96.3, 404.0], [96.4, 404.0], [96.5, 404.0], [96.6, 404.0], [96.7, 404.0], [96.8, 404.0], [96.9, 404.0], [97.0, 477.0], [97.1, 477.0], [97.2, 477.0], [97.3, 477.0], [97.4, 477.0], [97.5, 624.0], [97.6, 624.0], [97.7, 624.0], [97.8, 624.0], [97.9, 624.0], [98.0, 776.0], [98.1, 776.0], [98.2, 776.0], [98.3, 776.0], [98.4, 776.0], [98.5, 923.0], [98.6, 923.0], [98.7, 923.0], [98.8, 923.0], [98.9, 923.0], [99.0, 1038.0], [99.1, 1038.0], [99.2, 1038.0], [99.3, 1038.0], [99.4, 1038.0], [99.5, 1038.0], [99.6, 1038.0], [99.7, 1038.0], [99.8, 1038.0], [99.9, 1038.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 116.0, "series": [{"data": [[300.0, 53.0], [600.0, 1.0], [700.0, 1.0], [400.0, 5.0], [100.0, 116.0], [200.0, 21.0], [900.0, 1.0], [1000.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 195.0, "series": [{"data": [[0.0, 195.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.539999999999998, "minX": 1.75212846E12, "maxY": 2.539999999999998, "series": [{"data": [[1.75212846E12, 2.539999999999998]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75212846E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 196.03787878787884, "minX": 1.0, "maxY": 743.1428571428571, "series": [{"data": [[2.0, 196.03787878787884], [1.0, 230.0], [9.0, 743.1428571428571], [3.0, 342.53333333333336]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[2.539999999999998, 259.30500000000006]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 9.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 583.3333333333334, "minX": 1.75212846E12, "maxY": 2883.3333333333335, "series": [{"data": [[1.75212846E12, 2883.3333333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75212846E12, 583.3333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75212846E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 259.30500000000006, "minX": 1.75212846E12, "maxY": 259.30500000000006, "series": [{"data": [[1.75212846E12, 259.30500000000006]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75212846E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 258.94999999999993, "minX": 1.75212846E12, "maxY": 258.94999999999993, "series": [{"data": [[1.75212846E12, 258.94999999999993]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75212846E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 186.96999999999997, "minX": 1.75212846E12, "maxY": 186.96999999999997, "series": [{"data": [[1.75212846E12, 186.96999999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75212846E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 175.0, "minX": 1.75212846E12, "maxY": 1038.0, "series": [{"data": [[1.75212846E12, 1038.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75212846E12, 175.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75212846E12, 384.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75212846E12, 1036.850000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75212846E12, 187.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75212846E12, 400.84999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75212846E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 186.0, "minX": 3.0, "maxY": 550.5, "series": [{"data": [[10.0, 550.5], [6.0, 186.0], [3.0, 353.0], [7.0, 187.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 186.0, "minX": 3.0, "maxY": 542.5, "series": [{"data": [[10.0, 542.5], [6.0, 186.0], [3.0, 353.0], [7.0, 187.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.75212846E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.75212846E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75212846E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.75212846E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.75212846E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75212846E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.75212846E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.75212846E12, 3.3333333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75212846E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.75212846E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.75212846E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75212846E12, "title": "Total Transactions Per Second"}},
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

