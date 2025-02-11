//(function (a) {
//    if (!tabglobalJS.hasOwnProperty('JS_device')) tabglobalJS['JS_device'] = a();//pass pubArgs later if need
//})
w0w.tabglobalJS['JS_JS_device'] = (function () { // scoping
    "use strict";
    function O(opts) { // constructor
        //
        //debugger;
        var init_dataDIV,
             init_data,
            deviceMEM,
            _cht = {
                _lod: function (fn) {
                    //
                    //
                    if (window.hasOwnProperty('GetIEVersion') && GetIEVersion() != 11) {
                        _gsC(deV.chartjs, 'js', fn, 'chart.min.js');//https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.8.2/chart.min.js '
                    };
                    //
                    //
                    //
                    //
                }
                , _deviceDAT: {
                    l: [],
                    d1: [],
                    d2: [],
                    dI: [],
                    maxY: function () {
                        return this.d2.reduce(function (pV, cV) {
                            if (pV < cV[1]) pV = cV[1] + 10;
                            return pV;
                        }, 50);
                    },
                    devcap: function (j, kind) {
                        const fuk = JSON.parse(j);
                        if (!fuk || !fuk[2]) return;
                        //debugger;
                        const devi = /*JSON.parse(j)*/ fuk[2].split('-'),
                        max = kind == -9999 ? 0 : parseInt(devi[8]) / 1000,
                        fre = kind == -9999 ? 0 : (parseInt(devi[8]) - parseInt(devi[2])) / 1000;
                        return [devi, max, fre];
                    },
                    init: function (dat) {
                        //
                        var _tha = this, devi;
                        for (var i = 0; i < dat.length; i++) {
                            //
                            if (dat[i].wdmo.length < 3 || dat[i].kind == -9999) continue;
                            //
                            devi = _tha.devcap(dat[i].wdmo, dat[i].kind);
                            _tha.l.push(dat[i].id);
                            //
                            //var max = parseInt(parseInt(devi[8]) / 1000),
                            //        fre = parseInt((parseInt(devi[8]) - parseInt(devi[2])) / 1000);
                            //
                            if (!devi) continue;
                            //
                            if (devi.length>2) _tha.d1.push([0, devi[1] - devi[2]]);
                            if (devi.length > 1) _tha.d2.push([0, devi[1]]);
                            if (devi.length > 0) _tha.dI.push(devi[0]);
                        };
                    },
                    add: function (a) {
                        try {
                            const _tha = this,
                                devi = _tha.devcap(a.wdmo, a.kind);
                            _tha.l.push(a.id);
                            _tha.d1.push([0, devi[1] - devi[2]]);
                            _tha.d2.push([0, devi[1]]);
                            _tha.dI.push(devi[0]);
                            //debugger;
                            if (deviceMEM) deviceMEM.update();
                        }
                        catch (err) {
                        };
                    },
                    upt: function (a, i) {
                        try {
                            const _tha = this,
                       devi = _tha.devcap(a.wdmo, a.kind);
                            _tha.l[i] = a.id;
                            _tha.d1[i] = [0, devi[1] - devi[2]];
                            _tha.d2[i] = [0, devi[1]];
                            _tha.dI[i] = devi[0];
                            //debugger;
                            if (deviceMEM) deviceMEM.update();
                        }
                        catch (err) {

                        };
                    },
                    rmv: function (r, i) {
                        var _tha = this;
                        _tha.l.splice(r, i);
                        _tha.d1.splice(r, i);
                        _tha.d2.splice(r, i);
                        _tha.dI.splice(r, i);
                        //
                        if (deviceMEM) deviceMEM.update();
                    }
                }
                , _deviceMEM: function (dat, canvas) {
                    //
                    var _d = this._deviceDAT;
                    _d.init(dat);
                    //
                    var resizeTimeout
                        , dog = function (hwn) {

                            clearTimeout(resizeTimeout);

                            resizeTimeout = setTimeout(function () {
                                //
                                //console.log('effer theme : ' + cS$.c0lor);
                                //
                                //debugger;
                                var ctx = hwn.chart.ctx,
                                    y_axis = hwn.chart.scales.y,
                                    ds = hwn.chart.config.data.datasets,
                                    bkFREE0 = [],
                                    disFREE = function (FREE1) {
                                        var FREE0 = bkFREE0.shift(),
                                            fre = (FREE1 - FREE0);
                                        return "free: " + toSep(fre * 1000) + " (" + toFix(100 * fre / FREE1) + "%)";
                                    };

                                //ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'bottom';
                                ctx.fillStyle = "#007aff"; //<======= here

                                ctx.strokeStyle =cS$.c0lor =='dark'?"#4d4d4d": "#ddd";
                                ctx.lineWidth = 1;

                                var lineOne = [];

                                //debugger;

                                ds.forEach(function (dataset, i) {
                                    //debugger;
                                    var meta = hwn.chart._metasets[i],
                                        atI = i;

                                    meta.data.forEach(function (bar, index) {

                                        //console.log(bar.$context.raw + '; '  + new Date().getTime);
                                        //debugger;

                                        ctx.fillText(atI == 0 ? (bkFREE0.push(bar.$context.raw[1]), "") : disFREE(bar.$context.raw[1]), bar.x, bar.y + 20);
                                        //if (dataset.data[index] > 0) {
                                        //    var data = dataset.data[index];

                                        //}
                                        var X = bar.x + 100;
                                        if (lineOne.indexOf(X) == -1 && atI < ds.length - 1) {
                                            //console.log(new Date().getTime());
                                            lineOne.push(X);
                                            ctx.beginPath();

                                            ctx.moveTo(X, y_axis.top);
                                            ctx.lineTo(X, 100);
                                            ctx.stroke();
                                        }
                                    });

                                });
                            }, 50);
                        }
                        , config = {
                            type: "bar",
                            data: {
                                labels: _d.l, // Date Objects
                                datasets: [
                                  {
                                      maxBarThickness: 50,
                                      label: "min",
                                      backgroundColor: "rgba(240, 140, 121, 1.0)",
                                      borderColor: "rgba(140, 140, 140, 0.0)",
                                      borderWidth: 0,
                                      data: _d.d1,
                                      fill: "-1",
                                      radius: 0,
                                  },
                                  {
                                      maxBarThickness: 50,
                                      label: "max",
                                      backgroundColor: "rgba(121, 200, 121, 0.8)",
                                      borderColor: "rgba(140, 140, 140, 0.0)",
                                      borderWidth: 0,
                                      data: _d.d2,
                                      fill: "-1",
                                      line: false,
                                      radius: 0,
                                  }
                                ]
                            },
                            options: {
                                animation: {
                                    duration: 300,
                                    onComplete: dog
                                },
                                hover: { mode: null },
                                events: [/*option empty nay dung prevent mouse hover redraw*/],
                                plugins: {
                                    legend: {
                                        display: false,
                                    }
                                    , tooltip: {
                                        enabled: false
                                    }
                                },
                                responsive: true,
                                title: {
                                    display: false,
                                    text: "Chart.js stackable with Min/Avg/Max"
                                },
                                scales: {
                                    x: {
                                        stacked: true,
                                        time: {
                                            // Luxon format string
                                            tooltipFormat: 'DD T'
                                        },
                                        format: "HH mm",
                                        grid: {
                                            borderWidth: 0 //du me tim khap noi moi thay cho remove x axis line https://www.chartjs.org/docs/latest/axes/cartesian/#border
                                        }
                                        //,display:false
                                        , ticks: {// Include a dollar sign in the ticks
                                            callback: function (va, ix, ticks) {
                                                //var number2 = parseInt(_d.dI[ix][8]); // floating point example

                                                var t = parseInt(_d.dI[ix][8]),
                                                    u = parseInt(_d.dI[ix][2]);

                                                return toSep(t) + " (used: " + toSep(u) + " ~ " + toFix(100 * u / t) + "%)";// "1,234.57";
                                            }
                                        }
                                    },
                                    y: {
                                        stacked: false,
                                        scaleLabel: {
                                            display: true,
                                            labelString: "value"
                                        },
                                        display: false,
                                        max: _d.maxY.bind(_d)
                                    }
                                }
                            }
                        }
                        , ctx = canvas.getContext("2d");
                    //
                    _cht._lod(function () {
                        deviceMEM = new Chart(ctx, config);
                    });
                }
            },
            toSep = function (n) {

                return parseInt(n).toLocaleString(apisvr.a$.selected_language, { maximumFractionDigits: 0 });
            },
            toFix = function (n) {
                return n.toLocaleString(apisvr.a$.selected_language, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })
            },
            ringchrt = function (devcap, rstMAX) {

                //devcap[12] = 300;

                //debugger;

                const cntchrt = function (t, u, mx, rMX) {
                    //tam doan luan => mx rMX
                    if (rMX > 0) {
                        var b_g = mx * parseInt(devcap[t]) / rMX,
                            c_u = mx * parseInt(devcap[u]) / rMX;


                        t = devcap[t];
                        u = devcap[u];
                        return [[b_g, mx], [c_u, mx], [toSep(t), toSep(u), parseInt(t) == 0 ? 0 :

                            toFix(100 * parseInt(u) / parseInt(t))

                        ]];
                    } else {
                        t = 0; u = 0;
                    }
                    return [[0, mx], [0, mx], [t, u, 0]];
                }
                ,
                faceCHR = function () {
                    if (_fa[2][1] == 0) {
                        return '<text x="17.2" y="17" class="percentage invalid">face invalid</text>' +
                                '<path d="M17 15L17 11.816898" class="circle-bg" stroke-width="0.2"></path>';
                    } else {
                        return '<text x="18" y="12" class="percentage">' +
                                '    <tspan x="20" dy="1.2em">use</tspan>' +
                                '    <tspan x="19" dy="1.2em">' + _fa[2][1] + ' (' + _fa[2][2] + '%)</tspan>' +
                                '    <tspan x="19" dy="1.2em">total: ' + _fa[2][0] + '</tspan>' +
                                '    <tspan x="19" dy="1.2em">Face capacity</tspan>' +
                                '</text>' +
                                '<path d="M18 15L17 11.816898" stroke="hotpink" stroke-width="0.2" stroke-dasharray="1"></path>';
                    };
                }
                ,
                _fp = cntchrt(6, 1, 80, rstMAX[0]),//finger
                _usr = cntchrt(7, 0, 50, rstMAX[1]),//user
                _fa = cntchrt(13, 12, 20, rstMAX[2]);//face

                return '<svg width=180 height=150 viewbox="0 0 30 30">' +

               '<path class="circle-bg"  stroke-dasharray="' + _fp[0].join(',') + '"' +
               '    d="M17 2.26759' +
               '            a 12.7324 12.7324 0 0 1 0 25.4648' +
               '      a 12.7324 12.7324 0 0 1 0 -25.4648"></path>' +

               '<path class="circular-chart orange circle" stroke-dasharray="' + _fp[1].join(',') + '"' +
               '    d="M17 2.26759' +
               '      a 12.7324 12.7324 0 0 1 0 25.4648' +
               '      a 12.7324 12.7324 0 0 1 0 -25.4648"></path>' +
               '<text x="1" y="1.3" class="percentage">' +
               '    <tspan x="-1" dy="1.2em">use: ' + _fp[2][1] + ' (' + _fp[2][2] + '%)</tspan>' +
               '    <tspan x="-1" dy="1.2em">total: ' + _fp[2][0] + '</tspan>' +
               '    <tspan x="-1" dy="1.2em">Finger capacity</tspan>' +
               '</text>' +


               '<path class="circle-bg" stroke-dasharray="' + _usr[0].join(',') + '"' +
               '    d="M17 7.042246' +
               '      a 7.9577 7.9577 0 0 1 0 15.9155' +
               '      a 7.9577 7.9577 0 0 1 0 -15.9155"></path>' +

               '<path d="M17.2 2L12 8" stroke="hotpink" stroke-width="0.2" stroke-dasharray="1"></path>' +
               '<path d="M1,8 h11" stroke="hotpink" stroke-width="0.2" stroke-dasharray="1"></path>' +
               '<circle cx="17" cy="2.4" r="0.6" fill="hotpink"></circle>' +

               '<path class="circular-chart green circle" stroke-dasharray="' + _usr[1].join(',') + '"' +
               '    d="M17 7.042246' +
               '      a 7.9577 7.9577 0 0 1 0 15.9155' +
               '      a 7.9577 7.9577 0 0 1 0 -15.9155"></path>' +


               '<path d="M10 20L17 7.042246" stroke="hotpink" stroke-width="0.2" stroke-dasharray="1"></path>' +
               '<path d="M1,20 h10" stroke="hotpink" stroke-width="0.2" stroke-dasharray="1"></path>' +
               '<circle cx="17" cy="7.042246" r="0.6" fill="hotpink"></circle>' +
               '<text x="1" y="20" class="percentage">' +
               '    <tspan x="-1" dy="1.2em">use:' + _usr[2][1] + ' (' + _usr[2][2] + '%)</tspan>' +
               '    <tspan x="-1" dy="1.2em">total: ' + _usr[2][0] + '</tspan>' +
               '    <tspan x="-1" dy="1.2em">User capacity</tspan>' +
               '</text>' +



               '<path class="circle-bg stroke-dasharray="' + _fa[0].join(',') + '"' +
               '    d="M17 11.816898' +
               '      a 3.1831 3.1831 0 0 1 0 6.3662' +
               '      a 3.1831 3.1831 0 0 1 0 -6.3662"></path>' +
               '<path class="circular-chart blue circle" stroke-dasharray="' + _fa[1].join(',') + '"' +
               '    d="M17 11.816898' +
               '      a 3.1831 3.1831 0 0 1 0 6.3662' +
               '      a 3.1831 3.1831 0 0 1 0 -6.3662"></path>' +

                faceCHR() +
               '<circle cx="17" cy="11.816898" r="0.6" fill="hotpink"></circle>' +

               '</svg>';
            }


        //_gsC('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js', 'js', function (data) {
        //   // var ctx = $("#doughnut");
        //    var myChart = new Chart($("#doughnut"), {
        //        type: 'doughnut',
        //        data: {
        //            //labels: ["Green", "Yellow", "Red", "Purple", "Blue"],
        //            datasets: [
        //              {
        //                  data: [5, 5],
        //                  backgroundColor: [
        //                      'green',
        //                      '#2a2a2a'
        //                  ], weight: 1
        //              },
        //              {
        //                  data: [7, 3],
        //                  backgroundColor: [
        //                      'red',
        //                      '#2a2a2a'
        //                  ], weight:0.2
        //              },
        //            ]
        //        },
        //        options: {
        //            responsive: true,
        //            legend: {
        //                display: false,
        //            },

        //            cutout: 30,
        //            animation: false,
        //            elements: {
        //                arc: {
        //                    borderWidth: 0
        //                }
        //            }
        //            ,stroke: {
        //                width: 0
        //            }
        //        }
        //    });
        //});

        //_gsC('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js', 'js', function (data) {




        //    //.push(label);
        //    //    chart.data.datasets.forEach((dataset) => {
        //    //        var d = data[0];
        //    //        dataset.data.push(d);
        //    //        data.shift();
        //    //    });

        //    var config1 = {
        //        type: 'doughnut',
        //        data: {
        //            datasets: [
        //              {

        //                  data: [10, 20, 15, 5, 50],
        //                  backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', ],
        //              },
        //            ],
        //            labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue']
        //        },
        //        hover: { mode: null },
        //        options: {
        //            //cutout: 30,
        //            animation: false,
        //            elements: {
        //                arc: {
        //                    borderWidth: 0
        //                }
        //            },
        //            plugins: {
        //                datalabels: {
        //                    formatter: function (value) {
        //                        return value + '%';
        //                    }
        //                }
        //                , title: {
        //                    display: true,
        //                    position: 'bottom',
        //                    text: 'Du me may',
        //                    padding: {
        //                        top: 10,
        //                        //bottom: 0
        //                    }
        //                }
        //                , legend: {
        //                    display: false,
        //                }
        //                , tooltip: {
        //                    enabled: false
        //                }
        //            }
        //        }
        //    }
        //    new Chart(document.getElementById("doughnut").getContext("2d"), config1);


        //});

        function update_chart() {
            debugger;

            var d = deviceMEM.data.labels;
            d.push('2');


            //[0, 25]

            var c = deviceMEM.data.datasets;
            c[0].data.push([0, 25]);
            c[1].data.push([0, 28]);

            //[0, 35]
            deviceMEM.update();
        }




        //_gsC('https://hr.dnd.vn/test.js', 'js', function (data) {
        //    debugger;
        //    var c = 0;
        //});

        var hasUA = opts.ua > 1 ? 'UA' : 'noU',
            _tabId, devlst, _device, elUI = {
                socIO: null,
                WDM: {},
                dbNa: 'bHN0TUND',
                __: [
                    'd2Rtc19jb25u',//wdms_conn
                    'X2NtZGRldg',//_cmddev
                    'SlNfZGV2aWNlX3NldHRpbmc'//JS_device_setting
                ],
                ___: [
                    '\x52\x54\x45\x56\x54', //RTEVT
                    '\x57\x44\x4D\x53\x5F\x43\x4D\x44',//WDMS_CMD
                    '\x44\x45\x56\x5F\x4A\x4F\x49\x4E\x5F\x52\x4D\x56'//DEV_JOIN_RMV
                        //, '\x55\x53\x52\x5f\x4d\x4f\x54\x45\x52'//USR_MOTER
                ]
                , lan: {},
                dogTimezone: [{ id: 2000, tim: "2000", dis: "(Default)" }
                    , { id: 0, tim: "-12", dis: "(-12:00) International Date Line West" }
                        , { id: 1, tim: "-11", dis: "(-11:00) Coordinated Universal Time-11" }
                        , { id: 2, tim: "-10", dis: "(-10:00) Hawaii" }
                        , { id: 3, tim: "-9", dis: "(-09:00) Alaska" }
                        , { id: 4, tim: "-7", dis: "(-08:00) Baja California" }
                        , { id: 5, tim: "-7", dis: "(-07:00) Pacific Time (US &amp; Canada)" }
                        , { id: 6, tim: "-8", dis: "(-08:00) Pacific Time (US &amp; Canada)" }
                        , { id: 7, tim: "-7", dis: "(-07:00) Arizona" }
                        , { id: 8, tim: "-6", dis: "(-07:00) Chihuahua, La Paz, Mazatlan" }
                        , { id: 9, tim: "-6", dis: "(-07:00) Mountain Time (US &amp; Canada)" }
                        , { id: 10, tim: "-6", dis: "(-06:00) Central America" }
                        , { id: 11, tim: "-5", dis: "(-06:00) Central Time (US &amp; Canada)" }
                        , { id: 12, tim: "-5", dis: "(-06:00) Guadalajara, Mexico City, Monterrey" }
                        , { id: 13, tim: "-6", dis: "(-06:00) Saskatchewan" }
                        , { id: 14, tim: "-5", dis: "(-05:00) Bogota, Lima, Quito" }
                        , { id: 15, tim: "-4", dis: "(-05:00) Eastern Time (US &amp; Canada)" }
                        , { id: 16, tim: "-4", dis: "(-05:00) Indiana (East)" }
                        //, { id: 17, tim: "-4.5", dis: "(-04:30) Caracas" }
                        , { id: 18, tim: "-4", dis: "(-04:00) Asuncion" }
                        , { id: 19, tim: "-3", dis: "(-04:00) Atlantic Time (Canada)" }
                        , { id: 20, tim: "-4", dis: "(-04:00) Cuiaba" }
                        , { id: 21, tim: "-4", dis: "(-04:00) Georgetown, La Paz, Manaus, San Juan" }
                        , { id: 22, tim: "-4", dis: "(-04:00) Santiago" }
                        //, { id: 23, tim: "-2.5", dis: "(-03:30) Newfoundland" }
                        , { id: 24, tim: "-3", dis: "(-03:00) Brasilia" }
                        , { id: 25, tim: "-3", dis: "(-03:00) Buenos Aires" }
                        , { id: 26, tim: "-3", dis: "(-03:00) Cayenne, Fortaleza" }
                        , { id: 27, tim: "-3", dis: "(-03:00) Greenland" }
                        , { id: 28, tim: "-3", dis: "(-03:00) Montevideo" }
                        , { id: 29, tim: "-3", dis: "(-03:00) Salvador" }
                        , { id: 30, tim: "-2", dis: "(-02:00) Coordinated Universal Time-02" }
                        , { id: 31, tim: "-1", dis: "(-02:00) Mid-Atlantic - Old" }
                        //, { id: 32, tim: "0", dis: "(-01:00) Azores" }
                        , { id: 33, tim: "-1", dis: "(-01:00) Cape Verde Is." }
                        , { id: 34, tim: "1", dis: "(+01:00) Casablanca" }
                        , { id: 35, tim: "0", dis: "(+00:00) Coordinated Universal Time" }
                        , { id: 36, tim: "0", dis: "(+00:00) Edinburgh, London" }
                        , { id: 37, tim: "1", dis: "(+01:00) Edinburgh, London" }
                        , { id: 38, tim: "1", dis: "(+01:00) Dublin, Lisbon" }
                        , { id: 39, tim: "0", dis: "(+00:00) Monrovia, Reykjavik" }
                        , { id: 40, tim: "2", dis: "(+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna" }
                        , { id: 41, tim: "2", dis: "(+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague" }
                        , { id: 42, tim: "2", dis: "(+01:00) Brussels, Copenhagen, Madrid, Paris" }
                        , { id: 43, tim: "2", dis: "(+01:00) Sarajevo, Skopje, Warsaw, Zagreb" }
                        , { id: 44, tim: "1", dis: "(+01:00) West Central Africa" }
                        , { id: 45, tim: "1", dis: "(+01:00) Windhoek" }
                        , { id: 46, tim: "3", dis: "(+02:00) Athens, Bucharest" }
                        , { id: 47, tim: "3", dis: "(+02:00) Beirut" }
                        , { id: 48, tim: "2", dis: "(+02:00) Cairo" }
                        , { id: 49, tim: "3", dis: "(+02:00) Damascus" }
                        , { id: 50, tim: "3", dis: "(+02:00) E. Europe" }
                        , { id: 51, tim: "2", dis: "(+02:00) Harare, Pretoria" }
                        , { id: 52, tim: "3", dis: "(+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius" }
                        , { id: 53, tim: "3", dis: "(+03:00) Istanbul" }
                        , { id: 54, tim: "3", dis: "(+02:00) Jerusalem" }
                        , { id: 55, tim: "2", dis: "(+02:00) Tripoli" }
                        , { id: 56, tim: "3", dis: "(+03:00) Amman" }
                        , { id: 57, tim: "3", dis: "(+03:00) Baghdad" }
                        , { id: 58, tim: "3", dis: "(+02:00) Kaliningrad" }
                        , { id: 59, tim: "3", dis: "(+03:00) Kuwait, Riyadh" }
                        , { id: 60, tim: "3", dis: "(+03:00) Nairobi" }
                        , { id: 61, tim: "3", dis: "(+03:00) Moscow, St. Petersburg, Volgograd, Minsk" }
                        , { id: 62, tim: "4", dis: "(+04:00) Samara, Ulyanovsk, Saratov" }
                        //, { id: 63, tim: "4.5", dis: "(+03:30) Tehran" }
                        , { id: 64, tim: "4", dis: "(+04:00) Abu Dhabi, Muscat" }
                        , { id: 65, tim: "5", dis: "(+04:00) Baku" }
                        , { id: 66, tim: "4", dis: "(+04:00) Port Louis" }
                        , { id: 67, tim: "4", dis: "(+04:00) Tbilisi" }
                        , { id: 68, tim: "4", dis: "(+04:00) Yerevan" }
                        //, { id: 69, tim: "4.5", dis: "(+04:30) Kabul" }
                        , { id: 70, tim: "5", dis: "(+05:00) Ashgabat, Tashkent" }
                        , { id: 71, tim: "5", dis: "(+05:00) Yekaterinburg" }
                        , { id: 72, tim: "5", dis: "(+05:00) Islamabad, Karachi" }
                        //, { id: 73, tim: "5.5", dis: "(+05:30) Chennai, Kolkata, Mumbai, New Delhi" }
                        //, { id: 74, tim: "5.5", dis: "(+05:30) Sri Jayawardenepura" }
                        //, { id: 75, tim: "5.75", dis: "(+05:45) Kathmandu" }
                        , { id: 76, tim: "6", dis: "(+06:00) Nur-Sultan (Astana)" }
                        , { id: 77, tim: "6", dis: "(+06:00) Dhaka" }
                        //, { id: 78, tim: "6.5", dis: "(+06:30) Yangon (Rangoon)" }
                        , { id: 79, tim: "7", dis: "(+07:00) Bangkok, Hanoi, Jakarta" }
                        , { id: 80, tim: "7", dis: "(+07:00) Novosibirsk" }
                        , { id: 81, tim: "8", dis: "(+08:00) Beijing, Chongqing, Hong Kong, Urumqi" }
                        , { id: 82, tim: "8", dis: "(+08:00) Krasnoyarsk" }
                        , { id: 83, tim: "8", dis: "(+08:00) Kuala Lumpur, Singapore" }
                        , { id: 84, tim: "8", dis: "(+08:00) Perth" }
                        , { id: 85, tim: "8", dis: "(+08:00) Taipei" }
                        , { id: 86, tim: "8", dis: "(+08:00) Ulaanbaatar" }
                        , { id: 87, tim: "8", dis: "(+08:00) Irkutsk" }
                        , { id: 88, tim: "9", dis: "(+09:00) Osaka, Sapporo, Tokyo" }
                        , { id: 89, tim: "9", dis: "(+09:00) Seoul" }
                        //, { id: 90, tim: "9.5", dis: "(+09:30) Adelaide" }
                        //, { id: 91, tim: "9.5", dis: "(+09:30) Darwin" }
                        , { id: 92, tim: "10", dis: "(+10:00) Brisbane" }
                        , { id: 93, tim: "10", dis: "(+10:00) Canberra, Melbourne, Sydney" }
                        , { id: 94, tim: "10", dis: "(+10:00) Guam, Port Moresby" }
                        , { id: 95, tim: "10", dis: "(+10:00) Hobart" }
                        , { id: 96, tim: "9", dis: "(+09:00) Yakutsk" }
                        , { id: 97, tim: "11", dis: "(+11:00) Solomon Is., New Caledonia" }
                        , { id: 98, tim: "11", dis: "(+11:00) Vladivostok" }
                        , { id: 99, tim: "12", dis: "(+12:00) Auckland, Wellington" }
                        , { id: 100, tim: "12", dis: "(+12:00) Coordinated Universal Time+12" }
                        , { id: 101, tim: "12", dis: "(+12:00) Fiji" }
                        , { id: 102, tim: "12", dis: "(+12:00) Magadan" }
                        , { id: 103, tim: "13", dis: "(+12:00) Petropavlovsk-Kamchatsky - Old" }
                        , { id: 104, tim: "13", dis: "(+13:00) Nuku'alofa" }
                        , { id: 105, tim: "13", dis: "(+13:00) Samoa" }
                ]
            }
        , _resetRING = function () {
            devlst.find('.refresh_devstas').each(function (i, td) {
                __refreshINFO(

                    [$(td), JSON.parse(devlst.__dbDAT[i].wdmo)/*[2]*/, i + 1]

                    , 0, devlst.__dbDAT

                    );
            });
        }
        , __refreshINFO = function ($t, p, _allD) {
            //
            //debugger;
            //
            if (!$t[1] || $t[1].length == 0 || !$t[1][2] ) return;
            //return;

            const tdIDX=$t[2]-1,
                
                dogDAT = _allD[tdIDX],

                devcap = $t[1][2].split('-'),

                    cls1 = 'btn-primary', cls2 = devcap.length < 18 ? 'd-none' : 'disabled',
                    pref = $t[0].find(".refsh-tim"),

                    getTD = function (TR, iof) {
                        return TR.find('td:nth-child(' + (iof + 1) + ')');
                    }

                    ,

                    morinf = $t[0].closest('tr').next(),

                    adminR = getTD(morinf.next().next(), devcap.length < 18 ? 1 : $t[2]),

                    passR = getTD(adminR.closest('tr').next(), devcap.length < 18 ? 1 : $t[2]),

                    calcMAX = function () {//tinh toan dung luong max cua all list device
                        var st_ = __refreshINFO.calcMaxAt,
                            els = 0,
                            reCalc = !st_ || (els = new Date() - st_, els > 1000);
                        //
                        st_ = new Date(); //chuan bi reset
                        //
                        if (reCalc) {
                            __refreshINFO.calcMaxAt = st_;//reset
                            console.log(els + ' :reCalc ' + st_.getTime());
                            __refreshINFO.rstMAX = _allD/*.filter(function (d) {return d.kind != -9999;})*/.reduce(function (p, c) {
                                if (c.kind != -9999) {//kickoff
                                    const devcap = c.wdmo.split('-');
                                    if (parseInt(devcap[6]) > p[0]) p[0] = parseInt(devcap[6]);//6 'fp_capacity': 56,
                                    if (parseInt(devcap[7]) > p[1]) p[1] = parseInt(devcap[7]);//7 'user_capacity': 60,
                                    if (parseInt(devcap[13]) > p[2]) p[2] = parseInt(devcap[13]);//13 'face_capacity': 88
                                };
                                return p;
                            }, [0, 0, 0]);
                        } else {
                            console.log(els + ' :keepOld ' + st_.getTime());
                        };
                    };
            //
            //debugger;
            //console.log(' __refreshINFO: ' + _allD);
            $t[0].removeClass(cls1 + ' d-none disabled');
            //
            if (p == 1) {
                $t[0].addClass(cls1);
            } else {
                //$t[0].addClass(cls2);
                if (devcap.length < 18) {
                    pref.text('');
                    adminR.text( "0");
                    passR.text( "0");
                    getTD(morinf.next(), 1).html('');
                };
            };
            //
            if (devcap.length > 18) {
                var s = parseInt(devcap[16]), u = parseInt(devcap[17]),
                    ti = new Date((s + 1e9) * 1000 + u);
                //
                //text display thoi gian recalc cmd=50 cua local device
                pref.text(ti.toISOString().slice(0, 10) + ti.toGMTString().slice(16, 25));
                //
                calcMAX();
                //
                adminR.text(devcap[4]);
                passR.text(devcap[5]);
                //
                if (__refreshINFO.rstMAX) {
                    var tdRig = getTD(morinf.next(), $t[2]);
                    //
                    tdRig.html(ringchrt(devcap, __refreshINFO.rstMAX));
                };
                //
            };
            //
            //debugger;
            dogDAT.heavyMOD = "";
            //
            //
            if ($t[1][3]) {
                //chuc nang ket noi, thoi han cloud premium
                var bq = JSON.parse($t[1][3]),
                    mcc_plan = $t[0].closest('tbody').find('.mcc_plan'),
                    fn_conn = ["Cloud Free"],
                    ngcloud = '<span class="badge badge-success">Free</span>';

                if (mcc_plan.length > 0) {
                    //
                    if (bq[1] == '2') {
                        fn_conn.push("Android local");
                    };
                    //
                    if (bq[0]&&bq[0].length == 2) {
                        const d2 = new Date(new Date(bq[0][0]).getTime() + bq[0][1] * (24 * 60 * 60 * 1000));
                        if (new Date() < d2) {
                            ngcloud = d2.toISOString().split('T')[0];
                            fn_conn[0] = '<span class="badge badge-info">Cloud Premium</span>';
                            dogDAT.heavyMOD = "1";//Premium
                        };
                    };
                    //debugger;
                    //[["2023-01-31T17:00:00.000Z", 300], "2"]
                    $(mcc_plan[0]).find('td:eq(' + tdIDX + ')').html(fn_conn.join("  <br class='my-1'/> "));
                    $(mcc_plan[1]).find('td:eq(' + tdIDX + ')').html(ngcloud);
                };
            };
        }
        , _kickoff_cover = function (e$l) {
            e$l.children().last().addClass('kick_div').html(
                '<h2 class="ti-comment-alt" style="color:red"></h2>' +
                '<h4>OPPS</h4>' +
                '<div>Device off monitor by it owner</div>' +
                '<br/>' +
                '<div>Vui long click delete button de xac nhan hoan tat kick off session</div>'
            );
        }
        , _fields = {
            col0: function (dat, isDevtas) {

                var morI, isRESET = 1;

                devlst.find('tr td:last-child').each(function (i, td) {

                    const $t = $(td), f = $t.attr('f');

                    f && $t.html(_fields[f](dat));

                    if (isDevtas === undefined && $t.hasClass('refresh_devstas')) {
                        if (dat) {
                            morI = [$t.find('.btn'), JSON.parse(dat.wdmo)/*[2]*/, 1];//1 la do first is th
                        } else {
                            $t.addClass('disabled'); //$t.empty();
                        };

                    } else if ($t.hasClass('att_chrt')) {

                        $t[(dat ? 'remove' : 'add') + 'Class']('blank');
                    } else if ($t.hasClass('svg_ring')) {
                        if (!dat) {
                            $t.empty();
                            isRESET = 2;
                        }
                    } else if (isRESET == 2) {
                        $t.text('0');
                    }
                    //
                    if ($t.hasClass('kickoff')) {
                        if (!dat) {
                            $t.children().last().removeClass('kick_div').html('');
                        } else if (dat.kind == -9999) {
                            _kickoff_cover($t);
                        };
                    };
                    //
                });
                //
                if (morI) __refreshINFO(morI, 0, devlst.__dbDAT);
                //time_ruler.st$rt(undefined, 1);
            }
            , coln: function (dat, isDevtas) {
                //debugger;
                var tdIdx = 1, morI;
                devlst.find('tr td:last-child').each(function (i, td) {
                    var $t = $(td), ncol = $t.attr('colspan'), f = $t.attr('f');
                    if (ncol) {
                        $t.attr('colspan', parseInt(tdIdx) + 1);
                    } else {
                        if ($t.index() > tdIdx) tdIdx = $t.index();
                        var newTD;
                        if (f) {
                            newTD = $t.clone().html(_fields[f](dat));
                        } else {
                            newTD = $(td.outerHTML);
                        };
                        //
                        //
                        if (newTD.hasClass('kickoff')) {
                            newTD.children().last().removeClass('kick_div').html('');
                        };
                        $t.parent().append(newTD);
                        //
                    };
                    //
                    if (isDevtas === undefined && $t.hasClass('refresh_devstas')) {
                        morI = [$t.find('.btn'), dat ? JSON.parse(dat.wdmo)/*[2]*/ : "", tdIdx + 1];//cong 1 la do first is th
                    };
                });
                //
                if (morI) __refreshINFO(morI, 0, devlst.__dbDAT);
                //
            }
            , id: function (dat) { return dat && dat.id || '0' }
            , ten: function (dat, tok) {
                return '<div class="comparison-item">' +
                        '<div>' +
                            '<span class="comparison-item-title">' +
                                (dat && dat.ten || 'SAMPLE') +
                            '</span>' +
                            '<span class="comparison-item-titleuser ti-eye"><span class="eye-moter">0</span></span>' +
                        '</div>' +
                        '<div class="inline-block position-relative"><button style="padding-left:6px;padding-right:6px" class="btn btn-warning py-1 chinhsua" ' + (dat ? '' : 'disabled') + ' data-toggle="dropdown" type="button">' +
                            '<i class="fa fa-wrench"></i>' +
                        '</button></div>\n' +
                        //'<button class="btn btn-danger p-1 xoabo" ' + (dat ? '' : 'disabled') + ' type="button">' +
                        //    '<i class="fa fa-trash-o"></i>' +
                        //'</button>' +
                        '\t<div class="btn text-secondary mcc-statux" tok="' + (dat && dat.tok || 'NEWTOK') + '"><i class="fa fa-circle"></i>&nbsp;<span>offline</span></div>' +
                    '</div>';
            }
            , DeviceName: function (dat) {
                return '<span class="text-dark font-weight-semibold">' + (dat && dat.DeviceName || 'ZKTECO') + '</span>';
            }
            , serno: function (dat) { return dat && dat.serno || 'xxxxxxxxxx' }
            , wdms: function (dat) { return dat && dat.wdms || '-' }
            , rtevt: function (dat) {
                //debugger;
                //return dat && dat.rtevt === true && '<i style="color:limegreen" class="fa fa-check fa-lg"></i>' || '-'
                if (!dat) return '-';
            }
            , rtevt_sub: function (datI, v) {
                //debugger;
                var dat = devlst.__dbDAT && devlst.__dbDAT[datI];
                if (dat) {
                    dat['rtevt'] = v == 1;
                };
                return v === 1 && '<i style="color:limegreen" class="fa fa-check fa-lg"></i>' || '-'
            }
            , timezone: function (dat) {
                //debugger;
                //return dat && dat.rtevt === true && '<i style="color:limegreen" class="fa fa-check fa-lg"></i>' || '-'
                if (!dat) return '-';
            }
            , timezone_sub: function (datI, v) {
                //debugger;
                var dat, itm = elUI.dogTimezone.filter(function (tz) { return tz.id == v });
                if (itm.length > 0) {
                    dat = devlst.__dbDAT && devlst.__dbDAT[datI];
                    if (dat) {
                        dat['time_zone'] = itm[0].tim;
                        dat['timezone'] = itm[0].id;
                    };
                    return itm[0].dis;
                } else {
                    return '-';
                };
                //return v === 1 && '<i style="color:limegreen" class="fa fa-check fa-lg"></i>' || '-'
            }
            , isatt: function (dat) {
                //debugger;
                //return dat && dat.rtevt === true && '<i style="color:limegreen" class="fa fa-check fa-lg"></i>' || '-'
                if (!dat) return '-';
            }
            , isatt_sub: function (datI, v) {
                var dat = devlst.__dbDAT && devlst.__dbDAT[datI];
                if (dat) {
                    dat['isatt'] = v == 1;
                };
                return v === 1 && '<i style="color:limegreen" class="fa fa-check fa-lg"></i>' || '-'
            }
        }
        , begin__lstMCC = function () {
            //
            debugger;
            //
            var dbDAT;
            if (hasUA == 'noU') {
                dbDAT = st('getItem', window[st0('1')](elUI.dbNa));
                if (dbDAT) {
                    dbDAT = JSON.parse(window[st0('2')](atob(dbDAT)));
                };
            } else {

            };
            //
            devlst.__dbDAT = [];
            if (dbDAT) {
                devlst.__dbDAT = dbDAT;
                dbDAT[0].olsta = 0;//moi load thi reset
                //
                _fields.col0(dbDAT[0]);
                for (var i = 1; i < dbDAT.length; i++) {
                    //
                    dbDAT[i].olsta = 0;//moi load thi reset
                    //
                    _fields.coln(dbDAT[i]);
                    //
                };
            } else {
                _fields.col0();
            };
            //
            devlst[(devlst.__dbDAT.length>0 ? 'remove' : 'add') + 'Class']('empty_mcc');
            //
        }
        , __save = function (dat) {
            //
            if (hasUA == 'noU') {
                st('setItem', elUI.dbNa, btoa(window[st0('1')](JSON.stringify(dat))));//lstMCC
            } else {

            };
            //
            devlst[(dat.length > 0 ? 'remove' : 'add') + 'Class']('empty_mcc');
            //
            gloEVTs.dumeTHIETBI.f1.bind(['thietbi',dat])();
            //
        }

        , rulerT = [0, 0, 0, 24, 25, new Date(new Date()), 28, null]   //0: top timeMaker,.setHours(20)
                                //1: top hour_list
                                //2: height hour_list
                                //3: baseH
                                //4: itemH
                                //5: moc thoi gian bat dau chay
                                //6: top timeMaker padding
                                //7: table chua event
        , time_ruler = {
            fmt: 12,//12: AM/PM 24:24H
            atLOAD: new Date(),
            hwnd: -1,
            timeMaker: null,
            _rtevt_sigcard: function (e) {
                alert('here');
            },
            drawRULER: function (timeDIV) {
                //
                clearTimeout(this.hwnd);
                //
                if (!timeDIV) timeDIV = devlst.closest('.comparison-table').next();
                //
                var hour_lst = [],
                    baseH = rulerT[3],
                    itemH = rulerT[4],
                    hei = Math.floor((devlst.height() - baseH) / itemH),
                    maxH = baseH + (hei - 2) * itemH;
                //if (hei > Math.floor(hei)) hei = Math.floor(hei) + 1;
                //
                console.log(devlst.height() + ';' + (baseH + hei * itemH));
                //
                var t = rulerT[5],
                    t1 = new Date().setHours(0, 0, 0, 0),
                    Hh = t.getHours(),
                    Mm = t.getMinutes(),
                    Ss = t.getSeconds();
                //
                ////
                //debugger;
                //
                if (rulerT[2] == 0 || function () {
                       return rulerT[0] + 2 * rulerT[4] > rulerT[2];//current top maker + 2 itemH > curent view range
                }()) {
                    //
                    var fullTimeR_H = 2 * itemH * 24,//tong chieu cao 24 h
                        TimeR_View = hei * itemH,//chieu cao view range.
                        topTimeR = 2 * itemH * Hh;
                    //
                    if (fullTimeR_H - topTimeR < TimeR_View) {
                        topTimeR = fullTimeR_H - TimeR_View + 2 * itemH;
                    };
                    //
                    for (var i = 0; i < 24; i++) {
                        var hAPM = ':00' + (this.fmt == 12 ? ' <small> ' + (i < this.fmt ? 'A' : 'P') + 'M</small>' : ''),
                            hou = (this.fmt == 12 ? (i == 0 || i == 12 ? 12 : i % this.fmt) : pad$(i, 2));

                        hour_lst.push('<div class="time">' +
                                hou + hAPM +
                        '</div>' +
                        '<div class="time"><small>' + hou + ':30</small></div>');
                    };
                    //
                    rulerT[1] = -1 * topTimeR;
                    rulerT[2] = maxH;
                    var hour_list = timeDIV.css('height', (hei * itemH + itemH + 5))
                        //hour_list
                        .find('.hour_list').css({ 'top': rulerT[1], 'height': rulerT[2] })
                        .html(hour_lst.join(''));
                    //
                    //table event log
                    rulerT[7].css({ 'top': rulerT[1] - rulerT[4] });//vi line border bottom title nen default offset -1 itemH
                    //
                    //dayview-now-marker
                    this.timeMaker = hour_list.prev();
                    //
                    timeDIV.find('.rtedog').css('height', maxH);
                };
                //
                rulerT[0] = 2 * itemH * (Hh + Mm / 60) + rulerT[1] + rulerT[6];//1:top hour_list - 6:top padding
                this.timeMaker.css('top', rulerT[0]);
                //
                timeDIV.find('.rtvtitle').html(rulerT[5].toLocaleTimeString());
                //
                this.st$rt();
                //
            },
            in$t: function () {
                clearTimeout(this.hwnd);
                //
                var t$h = this,
                    mcc_list = devlst.closest('.comparison-table'),
                    timeDIV = mcc_list.next();
                //
                //
                timeDIV.find('input[name="mod24"]').change(function () {
                    //
                    time_ruler.fmt = this.checked ? 24 : 12;
                    //
                    elUI[elUI.__[2]]['mod24'] = time_ruler.fmt;
                    //
                    st('setItem', elUI.__[2], btoa(window[st0('1')](JSON.stringify(elUI[elUI.__[2]]))));//lstMCC
                    //
                    rulerT[2] = 0;//reset
                    time_ruler.drawRULER(timeDIV);
                    //
                }).prop('checked', elUI[elUI.__[2]]['mod24'] == 24);


                //
                timeDIV.on('click', '.btn_viewall', function (e) {
                    //
                    //debugger

                    rulerT[5] = new Date(rulerT[5].setHours(rulerT[5].getHours() + 1));
                    var Hh = rulerT[5].getHours() + (rulerT[5].getMinutes() > 30 ? 0.5 : 0),
                        iTR = Hh * 2,
                        tr = rulerT[7].find('tr:nth-child(' + (iTR + 3) + ')');
                    //tr.find("td:first").html('<div class="btn text-small"><span class="fa fa-id-card-o rtevt_sigcard"></span><span class="ml-1">(2)</span></div>');
                    //
                    t$h.drawRULER(timeDIV);
                });
                //
                //
                var evt_lst = [];
                for (var i = 0; i <= 50; i++) {
                    evt_lst.push('<tr><td>-</td></tr>');
                };
                //
                //table chua realtime event
                rulerT[7] = timeDIV.find('table');
                rulerT[7].find('.realtime-row')
                    .on('click', '.btn', time_ruler._rtevt_sigcard)
                    .html(evt_lst.join(''));//tbody
                //
                //
                this.fmt = elUI[elUI.__[2]]['mod24'];
                this.drawRULER(timeDIV);
            },
            job: function () {
                console.log('time_ruler: ' + new Date().getTime());
                var mcc_list = devlst.closest('.comparison-table'),
                    timeDIV = mcc_list.next();
                //
                rulerT[0] += 1;
                //var timeMaker = timeDIV.find('.dayview-now-marker');
                this.timeMaker.css('top', rulerT[0]);
                //
                //timeDIV.css('height', devlst.height());
                var baseH = 27,
                    itemH = 25,
                    hei = (devlst.height() - baseH) / itemH;
                if (hei > Math.floor(hei)) hei = Math.floor(hei) + 1;
                //
                console.log(devlst.height() + ';' + (baseH + hei * itemH));
                //
            },
            tick: function (s) {
                clearTimeout(this.hwnd);
                //debugger;
                //
                var t = new Date(),
                    diff = Math.abs(rulerT[5] - t),
                    Hh = t.getHours() + (t.getMinutes() > 30 ? 0.5 : 0),
                        iTR = Hh * 2,
                        tr = rulerT[7].find('tr:nth-child(' + (iTR + 3) + ')');
                //
                //tr.find("td:first").html('<div class="btn text-small"><span class="fa fa-id-card-o rtevt_sigcard"></span><span class="ml-1">(2)</span></div>');
                //debugger;
                if (Math.floor((diff / 1000) / 60) > 30) {
                    rulerT[2] = 0;//reset
                };
                //
                rulerT[5] = t;
                this.drawRULER();
                console.log('tick: function (s)');
                //this.job();

                //this.st$rt(s);
            },
            st$rt: function (s, im) {
                clearTimeout(this.hwnd);
                var dumeJ = function () { time_ruler.tick(s); };
                this.hwnd = setTimeout(dumeJ, 1000 * (!s ? 60 : s))
                if (im === 1) dumeJ();
            }
        }
        //
        this.init = function (frmEL, cb, tabId, clickArgs, tabProps) {
            //
            _tabId = tabId;
            //
            init_dataDIV = frmEL.find('.init_data');
            init_data = JSON.parse(atob(init_dataDIV.text()));
            elUI.lan = $.extend(JSON.parse(init_data.lan), aLAN); init_dataDIV.remove();
            //
            //debugger;
            $('.sockmsg').on('click', function (e) {

                e.preventDefault();

                $('.talk-bubble').addClass('pulsate').delay(2000).removeClass('pulsate');
            });

            frmEL.on('theme', function (e, m, a, b, c, d, f, g) {
                alert('here theme');
                frmEL.trigger('sub_theme');//1. ben device_user.html listen de thay doi theme cua popup.
                //
                if (deviceMEM) deviceMEM.update();
            })
            .on(atob('cnRldnRz').toUpperCase(), function (a, b, c) {//RTEVTS
                //debugger;
                if (!b || b.length < 2) return;
                //test_toast(b.join('|'));
                var t = new Date(new Date(b[1].replace(/-/g, "\/"))),
                        Hh = t.getHours() + (t.getMinutes() > 30 ? 0.5 : 0),
                        iTR = Hh * 2,
                        tr = rulerT[7].find('tr:nth-child(' + (iTR + 3) + ')'),
                        cnt = tr.data('cntlog') || 0;

                cnt++;
                tr.data('cntlog', cnt);
                //
                tr.find("td:first").html('<div class="btn text-small"><span class="fa fa-id-card-o rtevt_sigcard"></span><span class="ml-1">(' + cnt + ')</span></div>');

            }).find('[data-lang]').each(function (idx, el) {
                var key = el.getAttribute('data-lang');
                $(el).html(_La$N(key, elUI.lan));
            });
            //
            //
            var mcc_list_W = function () {
                var tbW = devlst.width(),
                    winW = frmEL.width(),
                    W = 'auto', cls = 'add';
                if (winW < tbW) { W = winW; cls = 'remove'; };
                devlst.parent()[cls + 'Class']('ps-hieu-active-x').css('width', W);
                if (elUI['mcc_lst_scroll']) elUI['mcc_lst_scroll'].update();
            }
            , loadDEV = function (_fn) {
                srclocked(true);
                //
                _gsC(srcp$f + '/media/utils/jsc/tikestep_device.js' + src$id, 'js', function (data) {
                //_gsC(srcpf$ + '/media/utils/jsc/tikestep_device.js' + src$id, 'js', function (data) {
                    //
                    if (!_device) {
                        if (window['gloEVTs']) gloEVTs.giaidoan2 = null;
                        _device = new _o$h.tikestep_device(opts, frmEL, elUI);
                    };
                    _fn();
                    //
                }, 'tikestep_device.js');



            }
            , __c$b = {

                moi: function (dat, new_localconn_chk) {


                    var dbDAT = devlst.__dbDAT,putI = dbDAT.length;



                    if (new_localconn_chk === 'new_localconn_chk') {
                        //
                        //debugger;
                        //
                        for (var w = 0; w < putI; w++) {
                            if (dat[2] == dbDAT[w].serno || JSON.parse(dbDAT[w].wdmo)[0] == dat[1]) {
                                return "1";
                                break;
                            };
                        };
                        //
                        return "2";
                    };



  
                    //
                    dbDAT.push(dat);//de thu tu truoc, vi co qua nhieu chuyen xay ra.
                    //
                    if (putI > 0) {
                        _fields.coln(dat, 1);
                    } else {
                        _fields.col0(dat, 1);
                    };
                    //
                    _cht._lod(function () {
                        _cht._deviceDAT.add(dat)
                    });
                    //
                    //
                    _resetRING();
                    //
                    rulerT[2] = 0;//reset
                    time_ruler.drawRULER();
                    //
                    __save(dbDAT);
                    //
                    mcc_list_W();
                }
                , sua: function (dat, idx) {

                    debugger;

                    devlst.__dbDAT[idx] = dat;
                    var morI;
                    devlst.find('tr td:nth-child(' + (idx + 2) + ')').each(function (i, td) {
                        var $t = $(td), ncol = $t.attr('colspan'), f = $t.attr('f');
                        if (ncol) {
                            //
                        } else {
                            if (f) {
                                if (f == 'ten') {
                                    $t.find('span.comparison-item-title').html(dat[f]);
                                } else {
                                    $t.html(_fields[f](dat));
                                }
                            };
                        };
                        //
                        if ($t.hasClass('refresh_devstas')) {
                            morI = [$t.find('.btn'), dat ? JSON.parse(dat.wdmo)/*[2]*/ : "", idx + 1];//cong 1 la do first is th
                        };
                        //
                    });
                    //
                    __save(devlst.__dbDAT);
                    _cht._deviceDAT.upt(dat, idx);
                    //
                    if (morI) __refreshINFO(morI, 1, devlst.__dbDAT);
                    //
                    rulerT[2] = 0;//reset
                    time_ruler.drawRULER();
                }
                , mcc_onoffline: function (m) {
                }
                , refresh_devstas:function(tdIDX) {
                    //debugger;
                    devlst.find('td.refresh_devstas > .btn').eq(tdIDX).trigger('click');
                }
            }
            , frmEDIT = function (_cb, DAT, isN, kind,txt) {
                loadDEV(function () {
                    _device._Device({ dat: JSON.parse(JSON.stringify(DAT)), txt:txt },//clone
                     _cb
                    , devlst.__dbDAT.reduce(function (rst, at) {

                        rst.push({ id: at.id, serno: at.serno,kind:at.kind,ten:at.ten ,wdms:at.wdms});
                        return rst;

                    }, []), isN, kind);
                });
            };
            //
            devlst = frmEL.find('.mcc-list-container>table').on('click', '.refresh_devstas .btn', function (e) {

                //debugger;

                if ($(this).hasClass('disabled')) {
                    //alert('disabled');
                } else {
                    if (devlst.__dbDAT.length > 0) {
                        var datI = $(this).parent().data('datI')
                                , _dat = devlst.__dbDAT[datI - 1];
                        //
                        if (!_dat || !_dat.tok) return;
                        //
                        srclocked(true);

                        //https://codepen.io/evth/pen/zBNqrL
                        //https://codepen.io/JMChristensen/pen/AGbeEy
                        //https://codepen.io/tnhu/pen/BayGGqR

                        //https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705
                        //https://codepen.io/sergiopedercini/pen/jmKdbj/

                        //https://codepen.io/janverstr/pen/PvPoaV

                        //$('.circle').attr('stroke-dasharray', '20,100');

                        $(e.target).trigger("\x58\x32\x4e\x74\x5a\x47\x52\x6c\x64\x67"//_cmddev https://www.dcode.fr/ascii-code
                            , [50, _dat, datI]);//
                    };
                };
            }).on('rst_devstas', function (e, a, m, d, i, giaidoan2) {

                if (giaidoan2) {
                    //debugger;

                    giaidoan2.bind([].slice.apply(arguments, [1, 5]))();
         
                    return;
                }
                //
                //change code from tikestep_device sang ..
                if (a != 'OK') return;
                //
                //
                __refreshINFO.calcMaxAt = new Date(1659427921374);//de tinh lai Max capacity

                var old_devstas = JSON.parse(d.wdmo),

                    clkEL = $(e.target);
                //
                //debugger;
                clkEL = clkEL.hasClass('btn') ? clkEL : clkEL.parent();
                //
                //debugger;
                const isLOCAL= m[3] && m[3][0] == 'localconn',
                    newV = isLOCAL ? m[0][4][6] : m[4][6];
                //
                if (old_devstas[2] != newV) {
                    //
                    old_devstas[2] = newV;//gan new value
                    //
                    d.wdmo = JSON.stringify(old_devstas);//update new device state
                    //
                    /*
                    if (!isLOCAL) {
                        //cap nhat lai wdmo
                        for (var fuk in elUI.WDM) {
                            if (elUI.WDM.hasOwnProperty(fuk)) {
                                const dev_WDMS = elUI.WDM[fuk];
                                if (dev_WDMS.wdms.hasOwnProperty(d.serno)) {
                                    //co toi trong nay
                                    dev_WDMS.wdms[d.serno][2] = old_devstas[2];
                                };
                            };
                        };
                    };
                    */
                    //
                    //devlst.__dbDAT[i - 1].wdmo = d.wdmo;
                    __save(devlst.__dbDAT);

                    _cht._deviceDAT.upt(d, i - 1);
                    //
                    __refreshINFO([clkEL, old_devstas, i], 1, devlst.__dbDAT);
                    //
                //} else {
                //    const devcap = old_devstas[2].split('-');
                //    if (devcap.length > 18) {
                //        var s = parseInt(devcap[16]), u = parseInt(devcap[17]),ti = new Date((s + 1e9) * 1000 + u);
                //        clkEL.find(".refsh-tim").text(ti.toISOString().slice(0, 10) + ti.toGMTString().slice(16, 25));
                //    }
                };
                //
            });
            //
            begin__lstMCC();
            //
            if (!Main.isMobile()) {
                elUI['mcc_lst_scroll'] = new PerfectScrollbar(devlst.parent()[0], { suppressScrollY: true });
            };
            //
            tabProps.EVTS.RZ_EVT = mcc_list_W;
            //
            //chart
            _cht._deviceMEM(devlst.__dbDAT//.filter(function (d) { return d.kind != -9999; })
                , devlst.find('.deviceMEM')[0]);
            //
            //
            //
            mcc_list_W();
            //
            elUI.fnHANDSHAKE = function (aRg,banQ) {
                //
                elUI.fnHANDSHAKE.currMSG = aRg[2];//luu giu lai de khoi phai offline nhieu lan
                //
                var kickOF, morI, getH = function () {
                    var mat = $('');

                    devlst.find('.mcc-statux').each(function (z, el) {
                        var e$l = $(el);
                        //debugger;
                        if (aRg[1].indexOf(e$l.attr('tok')) != -1) {
                            mat = e$l;
                            var idx = mat.closest('td').index();
                            //console.log("mat.closest('td'" + new Date().getTime());
                            devlst.find('tr td:nth-child(' + (idx + 1) + ')').each(function (i, td) {
                                var $t = $(td), f = $t.attr('f');
                                if (_fields[f + '_sub']) {
                                    if (aRg[4].length > 0) {//device data
                                        //debugger;
                                        $t.html(_fields[f + '_sub'](idx - 1, aRg[4][$t.attr('ixs')]));
                                    };
                                };
                                //
              
                                if (//aRg.length > 5 && offline ko can refresh lai ?? u91 die thi se ko tat nut refresh
                                $t.hasClass('refresh_devstas')) {
                                    //
                                    //debugger;
                                    const old_devstas = JSON.parse(devlst.__dbDAT[idx - 1].wdmo)/*[2]*/;
                                    //
                                    //neu co kem ban quyen.
                                    if (banQ) {
                                        //bat chap undefine;
                                        old_devstas[3] = banQ[4] && banQ[4][5] || JSON.stringify( []);
                                    };
                                    //
                                    //
                                    //
                                    if (aRg[5]) old_devstas[2] = aRg[5];
                                    //
                                    morI = [$t.data('datI', idx).find('.btn'),
                                        old_devstas
                                        , idx];

                                };

                                if ($t.hasClass('kickoff')) {
                                    kickOF = [idx, $t];
                                    //debugger;
                                };

                            });

                        };
                    });
                    return mat;
                }(),

                signal = function (statuxDAT) {
                    var oldSTA = getH.parent().data("statux"),
                        newCLA = 'text-secondary';
                    //
                    //debugger;
                    //
                    if (aRg[2] == 'online') {
                        newCLA = 'text-success';
                        statuxDAT = 1;
                    };
                    if (!oldSTA || oldSTA && oldSTA[0]!= statuxDAT) {
                        getH.removeClass('text-secondary text-success').addClass(newCLA).find('span').html(aRg[2]);
                        getH.parent().data("statux", [statuxDAT]).find('.comparison-item-titleuser').html('<span class="eye-moter">' + aRg[3] + "</span>");
                        //
                        $(document).trigger('click');//hide all menu ..
                        //
                    };
                    //
                    return statuxDAT;
                };

                switch (aRg[0]) {
                    case 'sigLIVE': {
                        //
                        if (morI && morI[1]) {
                            //debugger;
                            const p= signal(0);
                            devlst.__dbDAT [morI[2]-1].olsta = p;//online status.
                            __refreshINFO(morI,p, devlst.__dbDAT);
                        };
                        //
                        break;
                    }
                    case 'usr': {
                        getH.parent().find('.comparison-item-titleuser').html('<span class="eye-moter">' + aRg[3] + "</span>");
                        break;
                    }
                    case 'kickoff': {
                        debugger;
                        if (kickOF) {
                            var _oldDat = devlst.__dbDAT[kickOF[0] - 1];
                            //
                            if (_oldDat.kind != -9999) {
                                _oldDat.kind = -9999;//trang thai kickoff
                                __c$b.sua(_oldDat, kickOF[0] - 1);
                            };
                            //
                            aRg[2] = 'offline';//changed into format
                            //
                            //debugger;
                            signal(-9999);
                            //
                            _kickoff_cover(kickOF[1]);
                            //
                            _resetRING();
                            //
                        };
                        //
                        break;
                    }
                };
            };
            //
            //
            if (devlst.__dbDAT.length > 0) {
                //
                //ko co thi load sau vay
                loadDEV(function () {
                    var tim0, sockTO = !window.sockjo ? 200 : 1, sockhwnd = function () {
                        //console.log('sleep' + new Date().getTime());
                        clearTimeout(tim0); tim0 = -1;
                        if (window.sockjo) {
                            frmEL.trigger('\x64\x32\x52\x74\x63\x31\x39\x6A\x62\x32\x35\x75'//wdms_conn https://www.dcode.fr/ascii-code
                                , [devlst.__dbDAT, __c$b.mcc_onoffline]);
                        } else {//set tiep ne cu
                            tim0 = setTimeout(sockhwnd, sockTO);
                        };
                    };
                    tim0 = setTimeout(sockhwnd, sockTO);
                });
                //
            };
            //
            devlst.find('.xyzku .btn').on('click', function (e) {
                $(e.currentTarget).find('i[class^=ti-angle]').toggleClass("ti-angle-up ti-angle-down")
                    .closest('tbody').toggleClass("state_colai");
            });


            function dev_user_get() {
                //
                const def = $.Deferred();
                //
                if (dev_user_get.raw) return def.resolve();
                //
                frmEL.trigger('get', [srcp$f + '/media/utils/device_user.html'  /*'http://192.168.1.91:10996/media/utils/device_step2.html'*/ + src$id, function (data) {//get co ky tu \x03 giua chu e va chu t
                    //  

                    var ecU = this;

                    frmEL.trigger('',//trigger event "\x1C\x1D\x1E\x1F"

                    [data,

                        false,//option add script when load , no worry, vi link jquery se emty string.

                        $.Deferred().done(function () {

                            const rawHTML = $(adCS(arguments[0], ecU));
                            //
                            for (var z = rawHTML.length - 1; z > -1; z--) {

                                if (rawHTML[z].classList && rawHTML[z].classList.contains("device-user_get__content")) {
                                    //
                                    dev_user_get.raw = rawHTML[z].outerHTML;
                                    //
                                    break;
                                };
                            };
                            //
                            //add code vao 
                            //debugger;
                            dev_user_get.dynjs = arguments[3].splice(0, 1);
                            //
                            //
                            //add code xu ly form vao.
                            apisvr.a$.scod(arguments[3].join(''));

                            def.resolve();//sure script already .

                            //du me doan code bz2 ... worker
                            /*
                            tmplet.wokJS = arguments[3];// arguments[3][0] + ';(function(){' + arguments[3][1].replace('_$_ATTLOG_$_', '_$_ATTLOG_$_'.hexEncode()) + '})()';
                            tmplet.wokJS.unshift('_$_ATTLOG_$_'.hexEncode());
                            */
       

                        })]);
                    //
                }]);


                return def;

                /*

                _gsC(srcpf$ + '/media/js/JS_JS_device_up.js' + src$id, 'js', function () {

                    const sWIX = Main._devget.createUPL({

                        lan: elUI.lan,

                        _tabId: _tabId,

                        $mainO: cb('dbEngine')

                    });
                    //
                    //
                    sWIX.init(frmEL, PAA);
                    //
                }, 'JS_JS_nhapxuat_up.js');
                */
            };


   
            devlst.find('.head-cmd').on('click', '.btn:not(.dropdown-toggle)', function (e) {
                e.preventDefault();            // will prevent page reloading
                //
                var nut = e.currentTarget,
                    btn = $(nut),
                    dbDAT = devlst.__dbDAT,
                    tdIdx = btn.closest('td').index();
                //
                if (btn.hasClass('chinhsua')) {
                    //
                    if (!nut.__menu) {
                        //
                        nut.__menu = tdIdx;
                        //
                        const paTB = btn.closest('.comparison-table')
                        ,
                        mnuPU = paTB.find('>.lang-lst').clone().insertAfter(btn).off()

                            .on('click', 'a', function (xe) {

                                xe.preventDefault();
                                //
                                const atD = devlst.__dbDAT[nut.__menu - 1],
                                    __mnu = xe.currentTarget.getAttribute('mnu');
                                //
                                switch (__mnu) {
                                    case "1": {
                                        const elTIT =atD.kind==101? 'js_009_18|2' : 'js_009_14' ,
                                            __lan = $(xe.currentTarget).closest('tr').find('[data-lang="' + elTIT + '"]');
                                        //
                                        frmEDIT(__c$b.sua, atD, nut.__menu - 1, atD.kind,__lan.text().trim());
                                        break;
                                    }
                                    case "15": case "20": case "1004": {
                                        //
                                        const refreshBTN = paTB.find('td.refresh_devstas > .btn');
                                        if (refreshBTN.length == 0) return;
                                        //
                                        srclocked(true);
                                        devDlg(1, _La$N('js_001_27', aLAN) + '.. -> ' + $(xe.currentTarget).find('[data-lang]').text() + '?', null, {
                                            cb: function (a) {
                                                //
                                                srclocked(false);
                                                //
                                            }
                                        }).show().done(function (rst) {
                                            if (rst == 1) {
                                                srclocked(true);
                                                $(refreshBTN[nut.__menu - 1]).trigger("\x58\x32\x4e\x74\x5a\x47\x52\x6c\x64\x67"//_cmddev https://www.dcode.fr/ascii-code
                                                        , [__mnu, atD, nut.__menu]);//
                                            };
                                        });
                                        break;
                                    }
                                    case "3": {

 
                                        loadDEV(function () {
                                            _device._confirmDEL(1, function (rst, kill_wdms_server) {
                                                //
                                                if (!rst) return;
                                                //
                                                const wdmo = JSON.parse(atD.wdmo);
                                                //
                                                //debugger; //tam thoi ko dung cham gi den device , cho di an dam gio ve tinh !!!
                                                if (kill_wdms_server(atD.tok, 1, atD.serno, wdmo) == 'localconn') {

                                                    //debugger;

                                                    delete elUI.WDM[btoa(atD.serno + ';' + wdmo[0])];// SN + MAC


                                                }; //param 2 DEL
                                                //
                                                dbDAT.splice(nut.__menu - 1, 1);
                                                //
                                                //
                                                _cht._deviceDAT.rmv(nut.__menu - 1, 1);
                                                __save(dbDAT);
                                                //
                                                //
                                                //
                                                //neu ket noi global tu read device thi phai goi fcm key cho firebase cloud message ...
                                                if (atD.kind == 0 && /*elUI.localDEV*/gloEVTs['elUI_localDEV']) gloEVTs['elUI_localDEV']('fcmdev', [atD, '1']);
                                                //
                                                //
                                                //
                                                if (dbDAT.length > 0) {
                                                    devlst.find('tr td:nth-child(' + (nut.__menu + 1) + ')').each(function (i, td) {
                                                        var $t = $(td), ncol = $t.attr('colspan');
                                                        if (ncol) {
                                                            $t.attr('colspan', parseInt(ncol) - 1);
                                                        } else {
                                                            $t.remove();
                                                        };
                                                    });
                                                    mcc_list_W();
                                                    //
                                                    _resetRING();
                                                    //
                                                } else if (dbDAT.length == 0) {
                                                    _fields.col0();
                                                };
                                                //
                                                mcc_list_W();
                                                //
                                                rulerT[2] = 0;//reset
                                                time_ruler.drawRULER();
                                                //
                                                toastMsg('HOAN TAT XOA THIET BI', 'success');
                                                //
                                            });
                                        });
                                        break;
                                    };
                                };
                            });

                        //phai parent moi duoc nhe....
                        mnuPU.parent().on('show.bs.dropdown', function (e) {
                            //
                            nut.__menu = $(this).closest('td').index();
                            //
                            const isOL = $(this).next().hasClass('text-success') ? 'remove' : 'add',

                                liA = mnuPU.find('a[mnu]');

                            for (var z = 0; z < liA.length; z++) {
                                if (parseInt(liA[z].getAttribute('mnu')) > 3) {
                                    $(liA[z]).parent()[isOL + 'Class']('d-none');
                                };
                            };

                            //debugger;
                        });
                            
                    };
                    //
                } else if (btn.hasClass('xoabo')) {

                } else if (btn.hasClass('mcc-statux')) {
                    for (var so in elUI.WDM) {
                        if (elUI.WDM.hasOwnProperty(so)) {
                            //debugger;
                            //dung de test su kien socket io
                            //elUI.WDM[so].emit('chat message', 'test');
                        };
                    };
                };
            })
            .on('click', '.themmoi', function (e) {

                var btn = $(e.currentTarget),
                    kind = 1000;

                if (btn.hasClass('downattlog') || btn.hasClass('mngusrs')) {

                    srclocked(true);

                    //debugger;

                    const fakelst = $('<div><div>').appendTo(devlst);
                    fakelst.__dbDAT = devlst.__dbDAT.filter(function (it) {
                        return it.olsta == 1;
                    });
                    //
                    //
                    if (fakelst.__dbDAT.length == 0) {
                        admin$.popup({ a: 'd', m: '<i class="ti-face-sad text-danger mr-2"></i>' + (elUI.lan.js_009_32 || "No devices. Please check and try again.") })
                            .one('shown.bs.modal', function () {
                                srclocked(false);
                            }).modal('show').find('#popupdone').remove();
                        //
                        return;
                    };
                    //
                    //
                    const mnu = $(e.currentTarget).clone(),
                        tit = '<span>' + mnu.children().last().remove().text().trim() + '</span>',
                        arg=[ mnu.html() + tit, 'on'];
                    //
                    if (btn.hasClass('mngusrs') ){
                        arg[0]='dev-user-get';
                        arg[1]='one';
                    };
                    //
                    //
                    const benchmark = new Date().getTime(),
                        __lsDIS = function (na) {
                            const _ls = (new Date().getTime() - benchmark);//ket thuc...
                            console.log(na,  _ls > 0 ? (_ls > 30000) ? Math.floor(_ls / 30000) + 's' : _ls + ' ms' : '');
                        };

                    const popHWND = gloEVTs.giaidoan2(e, arg[0], fakelst, arg[1]);
                    //
                    if (btn.hasClass('mngusrs')) {
                        //
                        const popf = popHWND.find('.modal-dialog').addClass(' js_js_att mngusrs all_usr_inf').css({ 'perspective': '600px' })//all_usr_inf:-1.000.000 or only_usr_inf:-1
                            , popc = popf.find('.modal-content').css({ 'height': 'auto' })
                            //
                            , scrB = frmEL[0].getBoundingClientRect()
                            , mobiui = 1// (scrB.width < 800) ? 1 : 0
                            , def = $.Deferred();
                        //
                        popHWND.one('shown.bs.modal', function () {
                            //
                            //debugger;
                            popc.addClass('container_x' + (mobiui == 0 ? ' fuk_desktop' : '')).css({ 'height': 'auto', 'transform': 'rotateX(50deg) scale(0.7)', 'overflow': 'hidden' });
                            popf.parent();//.removeClass('invisible');
                            //
                            if (mobiui == 0) {//desktop UI
                                //
                                admin$.DEV(function () {
                                    //
                                    __lsDIS('admin$.DEV');
                                    srclocked(false);
                                    //
                                    def.resolve();//lo di load truoc.
                                });
                            } else {
                                def.resolve();
                            };
                            //
                        }).one('DOWN_ATTLOG_END', function (evt, usr) {
                            //
                            //debugger;
                            //
                            const PAA = $(this);
                            //
                            $.when(dev_user_get(), def).done(function (a, b) {

                                const sWIX = Main._devget.createUPL({

                                    lan: elUI.lan,

                                    _tabId: _tabId,

                                    $mainO: cb('dbEngine'),

                                    dynjs: dev_user_get.dynjs.join(''),

                                    mobiui: ($(window).width() < 768) ? 1 : 0,

                                    c_$_b: function (cmd) {
                                        if (cmd == 'dev_chg') {
                                            //del,upload use se call ve cap nhat lai datasource.
                                            return [devlst.__dbDAT, __c$b];//dem qua ben kia xu ly cho nhe ben nay.
                                        };
                                    }
                                });
                                //
                                __lsDIS('sWIX.init');
                                //
                                sWIX.init(frmEL, PAA, dev_user_get.raw, usr);
                                //
                            });
                            //
                        }).one('hidden.bs.modal', function () {
                            //debugger;
                            delete fakelst.__dbDAT;
                            fakelst.find('*').off(/*all event*/).unbind().removeData();
                            fakelst.empty();
                            fakelst.remove();
                        });
                        //
                    } else {
                        popHWND.on('click', 'actionline .btn', function (x) {
                            //
                            const oldB2 = popHWND.find('.modal-body');
                            oldB2.find('*').off(/*all event*/).unbind().removeData();
                            oldB2.empty();
                            //
                            //debugger;
                            popHWND.trigger('shown.bs.modal');
                            //gloEVTs.giaidoan2.fnXX.initWOK_JOB(/*ko truyen vao lst ...*/);
                            //
                        });
                    };
                    //
                    return;
                };
                //
                //
                //
                if (btn.hasClass('menuitem_wdms')) kind = 0;
                if (btn.hasClass('connlocal')) kind = 101;

                if (kind != 0 && kind != 101) return;

                srclocked(true);

                frmEDIT(__c$b.moi, {
                    id: 1,
                    DeviceName: '',
                    ten: "ZK-DEV",//'MITA 8386',
                    serno: "",//'A4P7174860372',//'0782205160121',//'8116222160619 204',//'6222160700118',//'5418212160193',//'2017173760055',//,'6095154900055'
                    pkey: '',
                    pubkey: '2TCVkVIIudv5wOl5qWLx8px69XtXvxkDJu9lzj65tMIobn+C460EBlpx3fIIEl00',
                    kind: kind,
                    wdms: kind == 0 ? /*"mobi.dnd.vn/xyz"*/ "": '192.168.1.201'//'192.168.1.91:3008/xyz',//
                    //wdmo:JSON.stringify([]),
                    //area: '(Default)',
                    //time_zone: 7,
                    //timezone: 79,
                    //heartbeat: '(800) 555-2797',
                    //rtevt: true,
                    //isreg: true,
                    //isatt: true,
                    //token: '2TCVkVIIudv5wOl5qWLx8px69XtXvxkDJu9lzj65tMIobn+C460EBlpx3fIIEl00'

                    , baku: [/*total empty*/]//day la field dung dung phong sau nay..

                }, -1, kind, btn.text().trim());
            })
            .on('show.bs.dropdown', function () {
                //handler nut chuc nang menu click, -> hide all dropdown menu.
                //$(this).find('.dropdown-menu.lang-lst').hide();//.trigger('click');
            });
            //
            //
            //load user setting & timeruler
            var sett = st('getItem', elUI.__[2]);
            elUI[elUI.__[2]] = sett ? JSON.parse(window[st0('2')](atob(sett))) : { 'mod24': 12 };
            time_ruler.in$t();
            //
            srclocked(false);
        },
        this.dispose = function () {
            //
            if (deviceMEM) deviceMEM.destroy();
            //
            if (elUI.socIO) elUI.socIO.close();

  



            /*

            for (var so in elUI.WDM) {
                if (elUI.WDM.hasOwnProperty(so) && elUI.WDM[so].close) {
                    elUI.WDM[so].close();
                };
            };

            */




            
            //
            //*** ko duoc dispose no, vi co the dung cho another target ..... if (/*elUI.localDEV*/gloEVTs['elUI_localDEV']) gloEVTs['elUI_localDEV']('dispose');
            //
            $("#tabBODY_" + _tabId).trigger('dispose');
            //
        };


        this.mod = function (args) {
            alert(args);
        };


        //var test = JSON.parse("{\"to\":\"\\/topics\\/my-app\",\"priority\":\"high\",\"mutable_content\":true,\"notification\":{\"title\":null,\"body\":null},\"data\":{\"action\":\"models\",\"model_id\":\"2701\"}}");

    };
    O.prototype.comm1 = {
        exS: function (id) { }
        , uplog: "html"
    }
    return O;

})();