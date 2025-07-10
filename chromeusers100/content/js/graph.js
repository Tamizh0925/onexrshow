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
        data: {"result": {"minY": 1330.0, "minX": 0.0, "maxY": 8273.0, "series": [{"data": [[0.0, 1330.0], [0.1, 1330.0], [0.2, 1330.0], [0.3, 1330.0], [0.4, 1330.0], [0.5, 1330.0], [0.6, 1330.0], [0.7, 1330.0], [0.8, 1330.0], [0.9, 1330.0], [1.0, 1521.0], [1.1, 1521.0], [1.2, 1521.0], [1.3, 1521.0], [1.4, 1521.0], [1.5, 1521.0], [1.6, 1521.0], [1.7, 1521.0], [1.8, 1521.0], [1.9, 1521.0], [2.0, 1786.0], [2.1, 1786.0], [2.2, 1786.0], [2.3, 1786.0], [2.4, 1786.0], [2.5, 1786.0], [2.6, 1786.0], [2.7, 1786.0], [2.8, 1786.0], [2.9, 1786.0], [3.0, 1815.0], [3.1, 1815.0], [3.2, 1815.0], [3.3, 1815.0], [3.4, 1815.0], [3.5, 1815.0], [3.6, 1815.0], [3.7, 1815.0], [3.8, 1815.0], [3.9, 1815.0], [4.0, 1885.0], [4.1, 1885.0], [4.2, 1885.0], [4.3, 1885.0], [4.4, 1885.0], [4.5, 1885.0], [4.6, 1885.0], [4.7, 1885.0], [4.8, 1885.0], [4.9, 1885.0], [5.0, 1930.0], [5.1, 1930.0], [5.2, 1930.0], [5.3, 1930.0], [5.4, 1930.0], [5.5, 1930.0], [5.6, 1930.0], [5.7, 1930.0], [5.8, 1930.0], [5.9, 1930.0], [6.0, 1936.0], [6.1, 1936.0], [6.2, 1936.0], [6.3, 1936.0], [6.4, 1936.0], [6.5, 1936.0], [6.6, 1936.0], [6.7, 1936.0], [6.8, 1936.0], [6.9, 1936.0], [7.0, 1946.0], [7.1, 1946.0], [7.2, 1946.0], [7.3, 1946.0], [7.4, 1946.0], [7.5, 1946.0], [7.6, 1946.0], [7.7, 1946.0], [7.8, 1946.0], [7.9, 1946.0], [8.0, 1967.0], [8.1, 1967.0], [8.2, 1967.0], [8.3, 1967.0], [8.4, 1967.0], [8.5, 1967.0], [8.6, 1967.0], [8.7, 1967.0], [8.8, 1967.0], [8.9, 1967.0], [9.0, 2218.0], [9.1, 2218.0], [9.2, 2218.0], [9.3, 2218.0], [9.4, 2218.0], [9.5, 2218.0], [9.6, 2218.0], [9.7, 2218.0], [9.8, 2218.0], [9.9, 2218.0], [10.0, 2225.0], [10.1, 2225.0], [10.2, 2225.0], [10.3, 2225.0], [10.4, 2225.0], [10.5, 2225.0], [10.6, 2225.0], [10.7, 2225.0], [10.8, 2225.0], [10.9, 2225.0], [11.0, 2267.0], [11.1, 2267.0], [11.2, 2267.0], [11.3, 2267.0], [11.4, 2267.0], [11.5, 2267.0], [11.6, 2267.0], [11.7, 2267.0], [11.8, 2267.0], [11.9, 2267.0], [12.0, 2268.0], [12.1, 2268.0], [12.2, 2268.0], [12.3, 2268.0], [12.4, 2268.0], [12.5, 2268.0], [12.6, 2268.0], [12.7, 2268.0], [12.8, 2268.0], [12.9, 2268.0], [13.0, 2277.0], [13.1, 2277.0], [13.2, 2277.0], [13.3, 2277.0], [13.4, 2277.0], [13.5, 2277.0], [13.6, 2277.0], [13.7, 2277.0], [13.8, 2277.0], [13.9, 2277.0], [14.0, 3019.0], [14.1, 3019.0], [14.2, 3019.0], [14.3, 3019.0], [14.4, 3019.0], [14.5, 3019.0], [14.6, 3019.0], [14.7, 3019.0], [14.8, 3019.0], [14.9, 3019.0], [15.0, 3040.0], [15.1, 3040.0], [15.2, 3040.0], [15.3, 3040.0], [15.4, 3040.0], [15.5, 3040.0], [15.6, 3040.0], [15.7, 3040.0], [15.8, 3040.0], [15.9, 3040.0], [16.0, 3085.0], [16.1, 3085.0], [16.2, 3085.0], [16.3, 3085.0], [16.4, 3085.0], [16.5, 3085.0], [16.6, 3085.0], [16.7, 3085.0], [16.8, 3085.0], [16.9, 3085.0], [17.0, 3137.0], [17.1, 3137.0], [17.2, 3137.0], [17.3, 3137.0], [17.4, 3137.0], [17.5, 3137.0], [17.6, 3137.0], [17.7, 3137.0], [17.8, 3137.0], [17.9, 3137.0], [18.0, 3320.0], [18.1, 3320.0], [18.2, 3320.0], [18.3, 3320.0], [18.4, 3320.0], [18.5, 3320.0], [18.6, 3320.0], [18.7, 3320.0], [18.8, 3320.0], [18.9, 3320.0], [19.0, 3350.0], [19.1, 3350.0], [19.2, 3350.0], [19.3, 3350.0], [19.4, 3350.0], [19.5, 3350.0], [19.6, 3350.0], [19.7, 3350.0], [19.8, 3350.0], [19.9, 3350.0], [20.0, 3372.0], [20.1, 3372.0], [20.2, 3372.0], [20.3, 3372.0], [20.4, 3372.0], [20.5, 3372.0], [20.6, 3372.0], [20.7, 3372.0], [20.8, 3372.0], [20.9, 3372.0], [21.0, 3384.0], [21.1, 3384.0], [21.2, 3384.0], [21.3, 3384.0], [21.4, 3384.0], [21.5, 3384.0], [21.6, 3384.0], [21.7, 3384.0], [21.8, 3384.0], [21.9, 3384.0], [22.0, 3564.0], [22.1, 3564.0], [22.2, 3564.0], [22.3, 3564.0], [22.4, 3564.0], [22.5, 3564.0], [22.6, 3564.0], [22.7, 3564.0], [22.8, 3564.0], [22.9, 3564.0], [23.0, 3568.0], [23.1, 3568.0], [23.2, 3568.0], [23.3, 3568.0], [23.4, 3568.0], [23.5, 3568.0], [23.6, 3568.0], [23.7, 3568.0], [23.8, 3568.0], [23.9, 3568.0], [24.0, 3620.0], [24.1, 3620.0], [24.2, 3620.0], [24.3, 3620.0], [24.4, 3620.0], [24.5, 3620.0], [24.6, 3620.0], [24.7, 3620.0], [24.8, 3620.0], [24.9, 3620.0], [25.0, 3685.0], [25.1, 3685.0], [25.2, 3685.0], [25.3, 3685.0], [25.4, 3685.0], [25.5, 3685.0], [25.6, 3685.0], [25.7, 3685.0], [25.8, 3685.0], [25.9, 3685.0], [26.0, 3874.0], [26.1, 3874.0], [26.2, 3874.0], [26.3, 3874.0], [26.4, 3874.0], [26.5, 3874.0], [26.6, 3874.0], [26.7, 3874.0], [26.8, 3874.0], [26.9, 3874.0], [27.0, 3880.0], [27.1, 3880.0], [27.2, 3880.0], [27.3, 3880.0], [27.4, 3880.0], [27.5, 3880.0], [27.6, 3880.0], [27.7, 3880.0], [27.8, 3880.0], [27.9, 3880.0], [28.0, 3984.0], [28.1, 3984.0], [28.2, 3984.0], [28.3, 3984.0], [28.4, 3984.0], [28.5, 3984.0], [28.6, 3984.0], [28.7, 3984.0], [28.8, 3984.0], [28.9, 3984.0], [29.0, 3997.0], [29.1, 3997.0], [29.2, 3997.0], [29.3, 3997.0], [29.4, 3997.0], [29.5, 3997.0], [29.6, 3997.0], [29.7, 3997.0], [29.8, 3997.0], [29.9, 3997.0], [30.0, 4018.0], [30.1, 4018.0], [30.2, 4018.0], [30.3, 4018.0], [30.4, 4018.0], [30.5, 4018.0], [30.6, 4018.0], [30.7, 4018.0], [30.8, 4018.0], [30.9, 4018.0], [31.0, 4085.0], [31.1, 4085.0], [31.2, 4085.0], [31.3, 4085.0], [31.4, 4085.0], [31.5, 4085.0], [31.6, 4085.0], [31.7, 4085.0], [31.8, 4085.0], [31.9, 4085.0], [32.0, 4093.0], [32.1, 4093.0], [32.2, 4093.0], [32.3, 4093.0], [32.4, 4093.0], [32.5, 4093.0], [32.6, 4093.0], [32.7, 4093.0], [32.8, 4093.0], [32.9, 4093.0], [33.0, 4130.0], [33.1, 4130.0], [33.2, 4130.0], [33.3, 4130.0], [33.4, 4130.0], [33.5, 4130.0], [33.6, 4130.0], [33.7, 4130.0], [33.8, 4130.0], [33.9, 4130.0], [34.0, 4148.0], [34.1, 4148.0], [34.2, 4148.0], [34.3, 4148.0], [34.4, 4148.0], [34.5, 4148.0], [34.6, 4148.0], [34.7, 4148.0], [34.8, 4148.0], [34.9, 4148.0], [35.0, 4182.0], [35.1, 4182.0], [35.2, 4182.0], [35.3, 4182.0], [35.4, 4182.0], [35.5, 4182.0], [35.6, 4182.0], [35.7, 4182.0], [35.8, 4182.0], [35.9, 4182.0], [36.0, 4215.0], [36.1, 4215.0], [36.2, 4215.0], [36.3, 4215.0], [36.4, 4215.0], [36.5, 4215.0], [36.6, 4215.0], [36.7, 4215.0], [36.8, 4215.0], [36.9, 4215.0], [37.0, 4218.0], [37.1, 4218.0], [37.2, 4218.0], [37.3, 4218.0], [37.4, 4218.0], [37.5, 4218.0], [37.6, 4218.0], [37.7, 4218.0], [37.8, 4218.0], [37.9, 4218.0], [38.0, 4235.0], [38.1, 4235.0], [38.2, 4235.0], [38.3, 4235.0], [38.4, 4235.0], [38.5, 4235.0], [38.6, 4235.0], [38.7, 4235.0], [38.8, 4235.0], [38.9, 4235.0], [39.0, 4242.0], [39.1, 4242.0], [39.2, 4242.0], [39.3, 4242.0], [39.4, 4242.0], [39.5, 4242.0], [39.6, 4242.0], [39.7, 4242.0], [39.8, 4242.0], [39.9, 4242.0], [40.0, 4263.0], [40.1, 4263.0], [40.2, 4263.0], [40.3, 4263.0], [40.4, 4263.0], [40.5, 4263.0], [40.6, 4263.0], [40.7, 4263.0], [40.8, 4263.0], [40.9, 4263.0], [41.0, 4293.0], [41.1, 4293.0], [41.2, 4293.0], [41.3, 4293.0], [41.4, 4293.0], [41.5, 4293.0], [41.6, 4293.0], [41.7, 4293.0], [41.8, 4293.0], [41.9, 4293.0], [42.0, 4322.0], [42.1, 4322.0], [42.2, 4322.0], [42.3, 4322.0], [42.4, 4322.0], [42.5, 4322.0], [42.6, 4322.0], [42.7, 4322.0], [42.8, 4322.0], [42.9, 4322.0], [43.0, 4370.0], [43.1, 4370.0], [43.2, 4370.0], [43.3, 4370.0], [43.4, 4370.0], [43.5, 4370.0], [43.6, 4370.0], [43.7, 4370.0], [43.8, 4370.0], [43.9, 4370.0], [44.0, 4424.0], [44.1, 4424.0], [44.2, 4424.0], [44.3, 4424.0], [44.4, 4424.0], [44.5, 4424.0], [44.6, 4424.0], [44.7, 4424.0], [44.8, 4424.0], [44.9, 4424.0], [45.0, 4458.0], [45.1, 4458.0], [45.2, 4458.0], [45.3, 4458.0], [45.4, 4458.0], [45.5, 4458.0], [45.6, 4458.0], [45.7, 4458.0], [45.8, 4458.0], [45.9, 4458.0], [46.0, 4461.0], [46.1, 4461.0], [46.2, 4461.0], [46.3, 4461.0], [46.4, 4461.0], [46.5, 4461.0], [46.6, 4461.0], [46.7, 4461.0], [46.8, 4461.0], [46.9, 4461.0], [47.0, 4508.0], [47.1, 4508.0], [47.2, 4508.0], [47.3, 4508.0], [47.4, 4508.0], [47.5, 4508.0], [47.6, 4508.0], [47.7, 4508.0], [47.8, 4508.0], [47.9, 4508.0], [48.0, 4521.0], [48.1, 4521.0], [48.2, 4521.0], [48.3, 4521.0], [48.4, 4521.0], [48.5, 4521.0], [48.6, 4521.0], [48.7, 4521.0], [48.8, 4521.0], [48.9, 4521.0], [49.0, 4581.0], [49.1, 4581.0], [49.2, 4581.0], [49.3, 4581.0], [49.4, 4581.0], [49.5, 4581.0], [49.6, 4581.0], [49.7, 4581.0], [49.8, 4581.0], [49.9, 4581.0], [50.0, 4628.0], [50.1, 4628.0], [50.2, 4628.0], [50.3, 4628.0], [50.4, 4628.0], [50.5, 4628.0], [50.6, 4628.0], [50.7, 4628.0], [50.8, 4628.0], [50.9, 4628.0], [51.0, 4650.0], [51.1, 4650.0], [51.2, 4650.0], [51.3, 4650.0], [51.4, 4650.0], [51.5, 4650.0], [51.6, 4650.0], [51.7, 4650.0], [51.8, 4650.0], [51.9, 4650.0], [52.0, 4656.0], [52.1, 4656.0], [52.2, 4656.0], [52.3, 4656.0], [52.4, 4656.0], [52.5, 4656.0], [52.6, 4656.0], [52.7, 4656.0], [52.8, 4656.0], [52.9, 4656.0], [53.0, 4659.0], [53.1, 4659.0], [53.2, 4659.0], [53.3, 4659.0], [53.4, 4659.0], [53.5, 4659.0], [53.6, 4659.0], [53.7, 4659.0], [53.8, 4659.0], [53.9, 4659.0], [54.0, 4684.0], [54.1, 4684.0], [54.2, 4684.0], [54.3, 4684.0], [54.4, 4684.0], [54.5, 4684.0], [54.6, 4684.0], [54.7, 4684.0], [54.8, 4684.0], [54.9, 4684.0], [55.0, 4693.0], [55.1, 4693.0], [55.2, 4693.0], [55.3, 4693.0], [55.4, 4693.0], [55.5, 4693.0], [55.6, 4693.0], [55.7, 4693.0], [55.8, 4693.0], [55.9, 4693.0], [56.0, 4698.0], [56.1, 4698.0], [56.2, 4698.0], [56.3, 4698.0], [56.4, 4698.0], [56.5, 4698.0], [56.6, 4698.0], [56.7, 4698.0], [56.8, 4698.0], [56.9, 4698.0], [57.0, 4738.0], [57.1, 4738.0], [57.2, 4738.0], [57.3, 4738.0], [57.4, 4738.0], [57.5, 4738.0], [57.6, 4738.0], [57.7, 4738.0], [57.8, 4738.0], [57.9, 4738.0], [58.0, 4758.0], [58.1, 4758.0], [58.2, 4758.0], [58.3, 4758.0], [58.4, 4758.0], [58.5, 4758.0], [58.6, 4758.0], [58.7, 4758.0], [58.8, 4758.0], [58.9, 4758.0], [59.0, 4766.0], [59.1, 4766.0], [59.2, 4766.0], [59.3, 4766.0], [59.4, 4766.0], [59.5, 4766.0], [59.6, 4766.0], [59.7, 4766.0], [59.8, 4766.0], [59.9, 4766.0], [60.0, 4785.0], [60.1, 4785.0], [60.2, 4785.0], [60.3, 4785.0], [60.4, 4785.0], [60.5, 4785.0], [60.6, 4785.0], [60.7, 4785.0], [60.8, 4785.0], [60.9, 4785.0], [61.0, 4799.0], [61.1, 4799.0], [61.2, 4799.0], [61.3, 4799.0], [61.4, 4799.0], [61.5, 4799.0], [61.6, 4799.0], [61.7, 4799.0], [61.8, 4799.0], [61.9, 4799.0], [62.0, 4816.0], [62.1, 4816.0], [62.2, 4816.0], [62.3, 4816.0], [62.4, 4816.0], [62.5, 4816.0], [62.6, 4816.0], [62.7, 4816.0], [62.8, 4816.0], [62.9, 4816.0], [63.0, 4882.0], [63.1, 4882.0], [63.2, 4882.0], [63.3, 4882.0], [63.4, 4882.0], [63.5, 4882.0], [63.6, 4882.0], [63.7, 4882.0], [63.8, 4882.0], [63.9, 4882.0], [64.0, 4906.0], [64.1, 4906.0], [64.2, 4906.0], [64.3, 4906.0], [64.4, 4906.0], [64.5, 4906.0], [64.6, 4906.0], [64.7, 4906.0], [64.8, 4906.0], [64.9, 4906.0], [65.0, 4951.0], [65.1, 4951.0], [65.2, 4951.0], [65.3, 4951.0], [65.4, 4951.0], [65.5, 4951.0], [65.6, 4951.0], [65.7, 4951.0], [65.8, 4951.0], [65.9, 4951.0], [66.0, 4961.0], [66.1, 4961.0], [66.2, 4961.0], [66.3, 4961.0], [66.4, 4961.0], [66.5, 4961.0], [66.6, 4961.0], [66.7, 4961.0], [66.8, 4961.0], [66.9, 4961.0], [67.0, 4972.0], [67.1, 4972.0], [67.2, 4972.0], [67.3, 4972.0], [67.4, 4972.0], [67.5, 4972.0], [67.6, 4972.0], [67.7, 4972.0], [67.8, 4972.0], [67.9, 4972.0], [68.0, 5002.0], [68.1, 5002.0], [68.2, 5002.0], [68.3, 5002.0], [68.4, 5002.0], [68.5, 5002.0], [68.6, 5002.0], [68.7, 5002.0], [68.8, 5002.0], [68.9, 5002.0], [69.0, 5024.0], [69.1, 5024.0], [69.2, 5024.0], [69.3, 5024.0], [69.4, 5024.0], [69.5, 5024.0], [69.6, 5024.0], [69.7, 5024.0], [69.8, 5024.0], [69.9, 5024.0], [70.0, 5036.0], [70.1, 5036.0], [70.2, 5036.0], [70.3, 5036.0], [70.4, 5036.0], [70.5, 5036.0], [70.6, 5036.0], [70.7, 5036.0], [70.8, 5036.0], [70.9, 5036.0], [71.0, 5072.0], [71.1, 5072.0], [71.2, 5072.0], [71.3, 5072.0], [71.4, 5072.0], [71.5, 5072.0], [71.6, 5072.0], [71.7, 5072.0], [71.8, 5072.0], [71.9, 5072.0], [72.0, 5157.0], [72.1, 5157.0], [72.2, 5157.0], [72.3, 5157.0], [72.4, 5157.0], [72.5, 5157.0], [72.6, 5157.0], [72.7, 5157.0], [72.8, 5157.0], [72.9, 5157.0], [73.0, 5186.0], [73.1, 5186.0], [73.2, 5186.0], [73.3, 5186.0], [73.4, 5186.0], [73.5, 5186.0], [73.6, 5186.0], [73.7, 5186.0], [73.8, 5186.0], [73.9, 5186.0], [74.0, 5209.0], [74.1, 5209.0], [74.2, 5209.0], [74.3, 5209.0], [74.4, 5209.0], [74.5, 5209.0], [74.6, 5209.0], [74.7, 5209.0], [74.8, 5209.0], [74.9, 5209.0], [75.0, 5245.0], [75.1, 5245.0], [75.2, 5245.0], [75.3, 5245.0], [75.4, 5245.0], [75.5, 5245.0], [75.6, 5245.0], [75.7, 5245.0], [75.8, 5245.0], [75.9, 5245.0], [76.0, 5265.0], [76.1, 5265.0], [76.2, 5265.0], [76.3, 5265.0], [76.4, 5265.0], [76.5, 5265.0], [76.6, 5265.0], [76.7, 5265.0], [76.8, 5265.0], [76.9, 5265.0], [77.0, 5266.0], [77.1, 5266.0], [77.2, 5266.0], [77.3, 5266.0], [77.4, 5266.0], [77.5, 5266.0], [77.6, 5266.0], [77.7, 5266.0], [77.8, 5266.0], [77.9, 5266.0], [78.0, 5357.0], [78.1, 5357.0], [78.2, 5357.0], [78.3, 5357.0], [78.4, 5357.0], [78.5, 5357.0], [78.6, 5357.0], [78.7, 5357.0], [78.8, 5357.0], [78.9, 5357.0], [79.0, 5361.0], [79.1, 5361.0], [79.2, 5361.0], [79.3, 5361.0], [79.4, 5361.0], [79.5, 5361.0], [79.6, 5361.0], [79.7, 5361.0], [79.8, 5361.0], [79.9, 5361.0], [80.0, 5409.0], [80.1, 5409.0], [80.2, 5409.0], [80.3, 5409.0], [80.4, 5409.0], [80.5, 5409.0], [80.6, 5409.0], [80.7, 5409.0], [80.8, 5409.0], [80.9, 5409.0], [81.0, 5446.0], [81.1, 5446.0], [81.2, 5446.0], [81.3, 5446.0], [81.4, 5446.0], [81.5, 5446.0], [81.6, 5446.0], [81.7, 5446.0], [81.8, 5446.0], [81.9, 5446.0], [82.0, 5453.0], [82.1, 5453.0], [82.2, 5453.0], [82.3, 5453.0], [82.4, 5453.0], [82.5, 5453.0], [82.6, 5453.0], [82.7, 5453.0], [82.8, 5453.0], [82.9, 5453.0], [83.0, 5485.0], [83.1, 5485.0], [83.2, 5485.0], [83.3, 5485.0], [83.4, 5485.0], [83.5, 5485.0], [83.6, 5485.0], [83.7, 5485.0], [83.8, 5485.0], [83.9, 5485.0], [84.0, 5709.0], [84.1, 5709.0], [84.2, 5709.0], [84.3, 5709.0], [84.4, 5709.0], [84.5, 5709.0], [84.6, 5709.0], [84.7, 5709.0], [84.8, 5709.0], [84.9, 5709.0], [85.0, 5772.0], [85.1, 5772.0], [85.2, 5772.0], [85.3, 5772.0], [85.4, 5772.0], [85.5, 5772.0], [85.6, 5772.0], [85.7, 5772.0], [85.8, 5772.0], [85.9, 5772.0], [86.0, 5819.0], [86.1, 5819.0], [86.2, 5819.0], [86.3, 5819.0], [86.4, 5819.0], [86.5, 5819.0], [86.6, 5819.0], [86.7, 5819.0], [86.8, 5819.0], [86.9, 5819.0], [87.0, 7673.0], [87.1, 7673.0], [87.2, 7673.0], [87.3, 7673.0], [87.4, 7673.0], [87.5, 7673.0], [87.6, 7673.0], [87.7, 7673.0], [87.8, 7673.0], [87.9, 7673.0], [88.0, 7712.0], [88.1, 7712.0], [88.2, 7712.0], [88.3, 7712.0], [88.4, 7712.0], [88.5, 7712.0], [88.6, 7712.0], [88.7, 7712.0], [88.8, 7712.0], [88.9, 7712.0], [89.0, 7835.0], [89.1, 7835.0], [89.2, 7835.0], [89.3, 7835.0], [89.4, 7835.0], [89.5, 7835.0], [89.6, 7835.0], [89.7, 7835.0], [89.8, 7835.0], [89.9, 7835.0], [90.0, 7859.0], [90.1, 7859.0], [90.2, 7859.0], [90.3, 7859.0], [90.4, 7859.0], [90.5, 7859.0], [90.6, 7859.0], [90.7, 7859.0], [90.8, 7859.0], [90.9, 7859.0], [91.0, 7907.0], [91.1, 7907.0], [91.2, 7907.0], [91.3, 7907.0], [91.4, 7907.0], [91.5, 7907.0], [91.6, 7907.0], [91.7, 7907.0], [91.8, 7907.0], [91.9, 7907.0], [92.0, 7991.0], [92.1, 7991.0], [92.2, 7991.0], [92.3, 7991.0], [92.4, 7991.0], [92.5, 7991.0], [92.6, 7991.0], [92.7, 7991.0], [92.8, 7991.0], [92.9, 7991.0], [93.0, 8023.0], [93.1, 8023.0], [93.2, 8023.0], [93.3, 8023.0], [93.4, 8023.0], [93.5, 8023.0], [93.6, 8023.0], [93.7, 8023.0], [93.8, 8023.0], [93.9, 8023.0], [94.0, 8080.0], [94.1, 8080.0], [94.2, 8080.0], [94.3, 8080.0], [94.4, 8080.0], [94.5, 8080.0], [94.6, 8080.0], [94.7, 8080.0], [94.8, 8080.0], [94.9, 8080.0], [95.0, 8104.0], [95.1, 8104.0], [95.2, 8104.0], [95.3, 8104.0], [95.4, 8104.0], [95.5, 8104.0], [95.6, 8104.0], [95.7, 8104.0], [95.8, 8104.0], [95.9, 8104.0], [96.0, 8110.0], [96.1, 8110.0], [96.2, 8110.0], [96.3, 8110.0], [96.4, 8110.0], [96.5, 8110.0], [96.6, 8110.0], [96.7, 8110.0], [96.8, 8110.0], [96.9, 8110.0], [97.0, 8170.0], [97.1, 8170.0], [97.2, 8170.0], [97.3, 8170.0], [97.4, 8170.0], [97.5, 8170.0], [97.6, 8170.0], [97.7, 8170.0], [97.8, 8170.0], [97.9, 8170.0], [98.0, 8214.0], [98.1, 8214.0], [98.2, 8214.0], [98.3, 8214.0], [98.4, 8214.0], [98.5, 8214.0], [98.6, 8214.0], [98.7, 8214.0], [98.8, 8214.0], [98.9, 8214.0], [99.0, 8273.0], [99.1, 8273.0], [99.2, 8273.0], [99.3, 8273.0], [99.4, 8273.0], [99.5, 8273.0], [99.6, 8273.0], [99.7, 8273.0], [99.8, 8273.0], [99.9, 8273.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1300.0, "maxY": 7.0, "series": [{"data": [[8200.0, 2.0], [1300.0, 1.0], [1500.0, 1.0], [1700.0, 1.0], [1800.0, 2.0], [1900.0, 4.0], [2200.0, 5.0], [3000.0, 3.0], [3100.0, 1.0], [3300.0, 4.0], [3500.0, 2.0], [3600.0, 2.0], [3800.0, 2.0], [3900.0, 2.0], [4000.0, 3.0], [4200.0, 6.0], [4300.0, 2.0], [4100.0, 3.0], [4600.0, 7.0], [4400.0, 3.0], [4500.0, 3.0], [4800.0, 2.0], [4700.0, 5.0], [5000.0, 4.0], [4900.0, 4.0], [5100.0, 2.0], [5200.0, 4.0], [5300.0, 2.0], [5400.0, 4.0], [5700.0, 2.0], [5800.0, 1.0], [7600.0, 1.0], [7700.0, 1.0], [7900.0, 2.0], [7800.0, 2.0], [8100.0, 3.0], [8000.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 99.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 99.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 45.34000000000001, "minX": 1.75213116E12, "maxY": 45.34000000000001, "series": [{"data": [[1.75213116E12, 45.34000000000001]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213116E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1786.0, "minX": 1.0, "maxY": 8273.0, "series": [{"data": [[2.0, 7859.0], [3.0, 8273.0], [4.0, 7907.0], [5.0, 7673.0], [6.0, 7835.0], [7.0, 8170.0], [8.0, 8214.0], [9.0, 8110.0], [10.0, 8023.0], [11.0, 8104.0], [12.0, 7991.0], [13.0, 4148.0], [14.0, 4242.0], [15.0, 4508.0], [17.0, 5987.5], [18.0, 4235.0], [19.0, 4093.0], [20.0, 4293.0], [22.0, 3911.5], [26.0, 4673.0], [28.0, 4783.0], [29.0, 3874.0], [30.0, 4424.0], [31.0, 3372.0], [35.0, 5772.0], [37.0, 3984.0], [36.0, 4020.0], [39.0, 4693.0], [38.0, 3997.0], [41.0, 3137.0], [40.0, 3040.0], [43.0, 3059.0], [42.0, 4085.0], [45.0, 3620.0], [44.0, 3320.0], [47.0, 3121.5], [46.0, 2827.75], [49.0, 2068.5], [48.0, 4215.0], [50.0, 3598.6666666666665], [51.0, 4461.0], [53.0, 5559.0], [55.0, 3880.0], [54.0, 4758.0], [57.0, 4130.0], [56.0, 5485.0], [59.0, 5024.0], [58.0, 4628.0], [61.0, 4697.0], [63.0, 4698.0], [62.0, 5361.0], [67.0, 4058.0], [66.0, 4742.0], [64.0, 4370.0], [68.0, 4172.5], [71.0, 5257.0], [69.0, 4659.0], [75.0, 5209.0], [74.0, 1815.0], [73.0, 1930.0], [72.0, 5453.0], [77.0, 3696.0], [78.0, 5245.0], [76.0, 4906.0], [83.0, 1786.0], [82.0, 4724.5], [80.0, 4976.5], [84.0, 4565.0], [85.0, 4816.0], [1.0, 8080.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[45.34000000000001, 4602.429999999999]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 85.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 196.66666666666666, "minX": 1.75213116E12, "maxY": 102059.36666666667, "series": [{"data": [[1.75213116E12, 102059.36666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75213116E12, 196.66666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213116E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4602.429999999999, "minX": 1.75213116E12, "maxY": 4602.429999999999, "series": [{"data": [[1.75213116E12, 4602.429999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213116E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4505.780000000001, "minX": 1.75213116E12, "maxY": 4505.780000000001, "series": [{"data": [[1.75213116E12, 4505.780000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213116E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2244.9400000000005, "minX": 1.75213116E12, "maxY": 2244.9400000000005, "series": [{"data": [[1.75213116E12, 2244.9400000000005]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213116E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1330.0, "minX": 1.75213116E12, "maxY": 8273.0, "series": [{"data": [[1.75213116E12, 8273.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.75213116E12, 1330.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.75213116E12, 7856.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.75213116E12, 8272.41]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.75213116E12, 4604.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.75213116E12, 8102.799999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213116E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1967.0, "minX": 1.0, "maxY": 7993.5, "series": [{"data": [[1.0, 1967.0], [8.0, 6110.0], [2.0, 7993.5], [9.0, 2218.0], [18.0, 4863.5], [37.0, 4235.0], [5.0, 6244.5], [10.0, 4928.5], [3.0, 3350.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 37.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1817.0, "minX": 1.0, "maxY": 7896.0, "series": [{"data": [[1.0, 1817.0], [8.0, 5918.0], [2.0, 7896.0], [9.0, 2086.0], [18.0, 4809.0], [37.0, 4176.0], [5.0, 6162.5], [10.0, 4871.5], [3.0, 3223.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 37.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75213116E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75213116E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213116E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75213116E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75213116E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75213116E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75213116E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75213116E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213116E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75213116E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75213116E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75213116E12, "title": "Total Transactions Per Second"}},
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

