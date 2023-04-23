w0w.tabglobalJS['JS_JS_nhapxuat'] = (function () { // scoping


    "use strict";

    function O(opts) { // constructor

        var _tabId, $mainO, elUI = {},

            destroy = [],

            tuoi = [{
                        maxBarThickness: 50,
                        label: "l1",
                        backgroundColor: "lightgray",
                        //borderColor: "rgba(140, 140, 140, 0.0)",
                        borderWidth: 0,
                        data: [[10, 22]]
                    }
                    ,
                    {
                        maxBarThickness: 50,
                        label: "l1",
                        backgroundColor: "rgba(121, 200, 121, 1)",
                        //borderColor: "rgba(140, 140, 140, 0.0)",
                        borderWidth: 0,
                        data: [[22, 30]]
                    },
                    {
                        maxBarThickness: 50,
                        label: "l2",
                        backgroundColor: "rgba(75, 192, 192, 1)",
                        //borderColor: "rgba(140, 140, 140, 0.0)",
                        borderWidth: 0,
                        data: [[30, 40]]
                    }
                    ,
                    {
                        maxBarThickness: 50,
                        label: "l3",
                        backgroundColor: "rgba(255, 206, 86, 1)",
                        //borderColor: "rgba(140, 140, 140, 0.0)",
                        borderWidth: 0,
                        data: [[40, 50]]
                    }
                    ,
                    {
                        maxBarThickness: 50,
                        label: "l4",
                        backgroundColor: "rgba(240, 140, 121,1)",
                        //borderColor: "rgba(140, 140, 140, 0.0)",
                        borderWidth: 0,
                        data: [[50, 60]]
                    }
            ],

                                    
            chart_table 
            ,

            draw_chart_table = function () {//draw chart_table
                //

                //
                chart_table.empty().html(tuoi.reduce(function (re, ax, zm) {
                    //
                    var rng = ax.data[0];

                    ax.emps = [[], []];
                    ax.emps.tong = 0;
                    //
                    for (var x = 0; x < 2; x++) {

                        if (elUI.pie_gender.hasOwnProperty(x)) {

                            ax.emps[x] = elUI.pie_gender[x].filter(function (em) {
                                return (rng[0] < em.age || zm == 0) && em.age <= rng[1];
                            });

                            ax.emps.tong += ax.emps[x].length;

                        };

                    };




                    re.unshift(
                        '<tr>' +
                            '<td scope="row" class="dogchartbar text-nowrap">' +
                            '    <span class="mr-2 chart_square" style="background:' + ax.backgroundColor + ';"></span>' +
                            '   <small>' + rng.join(' - ') + '</small>' +
                            '</td>' +

                            '<td>' + (ax.emps[0].length == 0 ? '-' : ax.emps[0].length) + '</td>' +
                            '<td>' + (ax.emps[1].length == 0 ? '-' : ax.emps[1].length) + '</td>' +
                            '<td>' + ax.emps.tong + '</td>' +
                        '</tr>');



                    return re;
                    //
                }, []).join('')

                    );

                chart_table.append(
                    '<tr>' +
                                '<td scope="row" class="dogchartbar font-intalic">' +
                                '    <span class="mr-2"></span>' +
                                '   <span>Total</span>' +
                                '</td>' +

                                '<td>' + elUI.pie_gender[1].length + '</td>' +
                                '<td>' + elUI.pie_gender[0].length + '</td>' +
                                '<td>' + elUI.dbLOD.cnt + '</td>' +
                            '</tr>');
            }

            ,

            dbLOD = function () {

                if (elUI.dbLOD) {
                    //
                    return elUI.dbLOD;
                    //
                } else {

                    var def = $.Deferred();

                    $mainO.svrDAT({ uri: '/api/empprofile', "act": 'SEL', "qry": ["acno", "birthday", "hireday", "gender", "offdate"] }).then(function (v1) {
                        //
                        var gender = ["Nu", 'Nam']
                        ,
                        pie_ARR = [[0, 0]]
                        ,
                        doughnut_ARR = [[]]
                        ,

                        pie_gender = elUI.pie_gender = v1.reduce(function (rst, d, i) {
                            //
                            var se = rst[d.gender] || (rst[d.gender] = []),
                                tm = d.birthday;

                            se.push(d);
                            //
                            pie_ARR[0][d.gender] = se.length;
                            //
                            //tinh do tuoi..
                            if (tm) {
                                tm = new Date(tm);
                                if (tm instanceof Date && !isNaN(tm)) {
                                    tm = Math.floor((new Date() - tm.getTime()) / 3.15576e+10); 
                                };
                            };
                            //
                            d.age = tm || 0;
                            //
                            return rst;
                            //
                        }, {})

                        ,
                        
                        pie_dat = {
                            labels:[],
                            datasets: [
                                {

                                    data: doughnut_ARR[0],//20, 20, 60

                                    backgroundColor: [
                                        "green",
                                        "yellow",
                                        "navy"
                                    ],
                                    //hoverBorderColor: [
                                    //    "#eee", "#eee"
                                    //],
                                    borderWidth: 0
                                }
                                ,
                                {
                                    labels: gender
                                    ,
                                    data: pie_ARR[0],//[1, 1],//40, 60

                                    backgroundColor: [
                                        "#FF6384",
                                        "#36A2EB"
                                    ],
                                    //hoverBorderColor: [
                                    //    "#eee", "#eee"
                                    //],
                                    borderWidth: 0
                                }

                            ]
                        };
                        //
                        elUI.dbLOD = { pie: pie_dat, cnt: v1.length };
                        //
                        draw_chart_table();
                        //
                        def.resolve(elUI.dbLOD);
                        //
                    }, function (error) {
                        //
                        def.resolve();
                        //
                    });
                    //
                    return def.promise();
                    //
                };
            }
            ,

            laZY = {

                job: function () {

                    var heightOffset = 10,
                        lazyLOD = laZY.lazyLOD,
                        frmEL = laZY.frmEL;


                    console.log(lazyLOD.length);

                    if (lazyLOD.length > 0) {
                        //
                        var reMOV = [];
                        for (var ei = 0; ei < lazyLOD.length ; ei++) {
                            //
                            var el = lazyLOD[ei];
                            //
                            if (el.getBoundingClientRect().top + heightOffset < $(document).height()) {
                                //
                                var fnZY = el.getAttribute('lazy');
                                //el.setAttribute('lazy', '');
                                //
                                //da load roi => bo ra
                                reMOV.push(ei);
                                //
                                if (laZY[fnZY]) {//test co function hay ko?
                                    //
                                    //add vo queue xu ly sau ...
                                    laZY.Q.queue('renZY', function (next, b) {
                                        //
                                        //this=name function render
                                        var p = this;
                                        console.log(p[0]);
                                        //
                                        $.when(laZY[p[0]](frmEL)).done(next);
                                        //
                                    }.bind([fnZY, ei]));
                                    //
                                };
                            };
                            //
                        };
                        //
                        //
                        for (var z = reMOV.length - 1; z > -1; z--) {
                            lazyLOD.splice(reMOV[z], 1);
                        };
                        //
                        //
                        clearTimeout(laZY.Qtout);
                        //bat dau thuc thi....
                        laZY.Qtout = setTimeout(function () {
                            //
                            laZY.Q.dequeue('renZY');
                            //
                        }, 300);
                        //
                    } else {
                        //
                        $('#app').off('scroll', laZY.job);
                        //
                    };
                    //
                }
                ,

                track: function (lazyLOD, frmEL) {
                    //
                    laZY.Q = $({});
                    //
                    //lam lan dau tien ...
                    laZY.job();
                    //
                    $('#app').on('scroll', laZY.job);
                    //
                }

                ,

                cakip_tree: function (frmEL) {
                    //
                    var tree_cakip = frmEL.find('.tree_cakip').removeClass('d-none');

                    tree_cakip.find('li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');

                    tree_cakip.find('li.parent_li > span').on('click', function (e) {
                        var children = $(this).parent('li.parent_li').find(' > ul > li');
                        if (children.is(":visible")) {
                            children.hide('fast');
                            $(this).attr('title', 'Expand this branch').find(' > i').addClass('fa-plus-circle').removeClass('fa-minus-circle');
                        } else {
                            children.show('fast');
                            $(this).attr('title', 'Collapse this branch').find(' > i').addClass('fa-minus-circle').removeClass('fa-plus-circle');
                        }
                        e.stopPropagation();
                    });
                    //
                    //
                    if (i$Desk) {

                        new PerfectScrollbar(tree_cakip.parent()[0], {
                            suppressScrollX: true
                        });
                    };
                    //
                    //
                    tree_cakip.closest('.csspinner').removeClass('csspinner load1 load2');
                    //
                    //
                    this.cakip_tree = function () {
                        //debugger;
                        //refresh method
                    };
                    //
                    return $.Deferred().resolve();
                }
                ,

                cakip_clock: function (frmEL) {

                    var set = 1, clW = 400, clH = 400, ofsclH = -20,
                        clX = function () {
                            return clW / 2;
                        }
                        ,
                        clY = function () {
                            return ofsclH + clH / 2;
                        };



                    clY._shiftARC = frmEL.find(".dog_clock");
                    clY._shiftARC.parent().removeClass('invisible').closest('.csspinner').removeClass('csspinner load1 load2');


                    function drawClock(hd, md, sd) {
                        //hd+=-5;
                        //md+=-5;
                        //sd += -5;


                        var canvasTag = clY._shiftARC[0];
                        var canvas = canvasTag.getContext("2d");

                        canvas.clearRect(0, 0, clW, clH);
                        canvas.lineWidth = 15;

                        //canvas.lineCap = "round";

                        canvas.strokeStyle = "#87D37C";
                        canvas.beginPath();
                        if (set % 2 == 0) {
                            canvas.arc(clX(), clY(), 130, 90, 90 + sd * Math.PI / 180, true);
                        } else {
                            canvas.arc(clX(), clY(), 130, 90, 90 + sd * Math.PI / 180);
                        }
                        canvas.stroke();
                        canvas.closePath();
                        canvas.strokeStyle = "#4ECDC4";
                        canvas.beginPath();
                        canvas.arc(clX(), clY(), 100, 0, md * Math.PI / 180);
                        canvas.stroke();
                        canvas.closePath();
                        canvas.strokeStyle = "#6C7A89";
                        canvas.beginPath();
                        canvas.arc(clX(), clY(), 70, 0, hd * Math.PI / 180);
                        canvas.stroke();
                    };


                    //https://codepen.io/venkatgan/pen/wBEOYe
                    setInterval(function () {
                        var dt = new Date();
                        var hrs = dt.getHours();
                        var tz = "AM";
                        if (hrs > 12) {
                            hrs = hrs - 12;
                            tz = "PM";
                        }
                        var min = dt.getMinutes();
                        var sec = dt.getSeconds();
                        $("div b:nth-child(1)").text(hrs);
                        $("div b:nth-child(2)").text(min);
                        $("div b:nth-child(3)").text(sec);
                        $("div b:nth-child(4)").text(tz);
                        if (sec == 0 && set % 2 != 0) {
                            sec = 60;
                        };

                        //console.log(sec * 6);

                        drawClock(hrs * 30 + min / 2, min * 6, sec * 6);

                        if (sec == 60 || sec == 0) {
                            set++;
                        }

                    }, 1000);


                    function run_dongho() {

                        //ie11 phai set manual transform translate
                        //https://stackoverflow.com/questions/23047098/css-translate-not-working-in-ie11-on-svg-g
                        var run_clock = $('.run_clock'),
                            run_clock_g = run_clock.find('> g'),
                            transform = getComputedStyle(run_clock_g[0]).getPropertyValue('transform');
                        //
                        transform = "matrix(1, 0, 0, 1," + clX() + "," + clY() + ")";
                        run_clock_g[0].setAttribute('transform', transform);
                        //
                        run_clock.css({ width: clW, height: clH });
                        //


                        //https://codepen.io/binoculars/pen/wMOxrb
                        var radius = 114;
                        var outerRadius = radius - 10;
                        var dtg = new Date();
                        var hands = {};

                        var numbers = document.getElementById('numbers');
                        var ticks = document.getElementById('ticks');

                        var mark;
                        var rotation;
                        var number;
                        var angle;

                        hands.second = (dtg.getSeconds() + dtg.getMilliseconds() / 1000) / 60;
                        hands.minute = (dtg.getMinutes() + hands.second) / 60;
                        hands.hour = (dtg.getHours() % 12 + hands.minute) / 12;

                        for (var key in hands) {
                            document.getElementById(key).setAttribute('transform', "rotate(" + (hands[key] * 360) + ")");
                        }


                        function cE(type) {
                            return document.createElementNS("http://www.w3.org/2000/svg", type);
                        }

                        function createMark(group, outerRadius, length, rotation) {
                            var mark = cE('line');
                            mark.setAttribute('x1', outerRadius - length);
                            mark.setAttribute('x2', outerRadius);
                            mark.setAttribute('y1', '0');
                            mark.setAttribute('y2', '0');
                            mark.setAttribute('transform', 'rotate(' + rotation + ')');
                            group.appendChild(mark);
                        }

                        for (var i = 0; i < 12; i++) {
                            number = cE('text');
                            angle = Math.PI / 6 * i;
                            number.setAttribute('x', radius * Math.cos(angle));
                            number.setAttribute('y', radius * Math.sin(angle));
                            number.innerHTML = ((i + 2) % 12 + 1);
                            numbers.appendChild(number);
                            rotation = i * 30;
                            createMark(ticks, outerRadius, 16, rotation);

                            for (var j = 1; j < 5; j++) {
                                createMark(ticks, outerRadius, 8, rotation + j * 6);
                            }
                        }
                    };

                    run_dongho();


                    this.cakip_clock = function () {
                        //debugger;
                        //refresh method
                    };
                    //
                    //
                    return $.Deferred().resolve();
                    //
                }

                ,

                chartLIB: function (frmEL) {

                    var def = $.Deferred();

                    if (!window.Chart) {
                        if (GetIEVersion() == 11) {

                            _gsC('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js', 'js', function () {// ,

                                _gsC('https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/0.7.0/chartjs-plugin-datalabels.js', 'js', function () {
                                    //
                                    //
                                    def.resolve();
                                    //
                                    //
                                }, '');

                            }, 'chart.min.js');

                        } else {
                            _gsC('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.8.2/chart.min.js', 'js', function () {// ,

                                _gsC('https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.2.0/chartjs-plugin-datalabels.min.js', 'js', function () {// ,
                                    //
                                    Chart.register(ChartDataLabels);
                                    //
                                    def.resolve();
                                    //
                                }, '');

                            }, 'chart.min.js');
                        };
                    } else {
                        def.resolve();
                    };

                    return def.promise();

                }

                ,

                chrt_gender_age_pie: function (frmEL) {

                    var def = $.Deferred(),
                        $tha = this;

                    $.when(this.chartLIB()).done(function (a) {
                        //
                        var b = elUI.dbLOD,

                            piectx = frmEL.find("canvas.piechart"),
                            rCla = ['d-block', 'd-none'];
                            
                        //    
                        $tha.chartLIB.pie = new Chart(piectx[0].getContext("2d"), {

                            type: 'pie',

                            data: b.pie,

                            options: {

                                responsive: true,
                                maintainAspectRatio: false,

                                showAllTooltips: true,
                                animation: {
                                    animateRotate: true,
                                    animateScale: true
                                },
                                elements: {
                                    arc: {
                                        borderColor: "#fff"
                                    }
                                },
                                title: {
                                    display: true,
                                    text: 'Custom Chart Title',
                                    fontSize: 18,
                                    padding: 20,
                                    fontColor: "#999",
                                    fontStyle: 'Normal',
                                    fontFamily: "Montserrat",
                                    fullWidth: true
                                },
                                legend: {
                                    display: true,
                                    position: "bottom",
                                    labels: {
                                        boxWidth: 30,
                                        fontColor: "#999",
                                        fontFamily: "Montserrat",
                                        fullWidth: true
                                    }
                                },
                                tooltips: {
                                    enabled: false,
                                    bodyFontColor: "#efefef",
                                    fontStyle: 'Normal',
                                    bodyFontFamily: "Montserrat",
                                    cornerRadius: 2,
                                    backgroundColor: "#333",
                                    xPadding: 7,
                                    yPadding: 7,
                                    caretSize: 5,
                                    bodySpacing: 10
                                }
                                ,
                                plugins: {
                                    datalabels: {
                                        color: 'white',
                                        textAlign: 'center',
                                        formatter: function (value, ctx) {
                                            //if (context.datasetIndex == 0 && context.dataIndex == 0) {
                                            //    return value[1]>value[0]?'< ' + value[1]:'';
                                            //} else {
                                            //    return value.join(' - ');
                                            //}
                                            if (ctx.datasetIndex == 1) {
                                                //return 'Nam 4/100%\nNam 4/100%';//context.chart.data.labels[context.dataIndex];
                                                var index = ctx.dataIndex;
                                                var label = ctx.chart.data.datasets[ctx.datasetIndex].labels[index];
                                                return value==0?'':label + '\n(' + value + ')';
                                            };
                                        }
                                    }

                                    ,
                                    legend: {
                                        display: true,
                                        position: "bottom",
                                        align: "center",
                                        fontFamily: "Arial",
                                        labels: {
                                            usePointStyle: false,
                                            fontColor: "red",
                                            generateLabels: function (chart) {
                                                //debugger;

                                                const data = chart.data.datasets;

                                                if (data.length > 1 && data[1].labels) {

                                                    //const {labels: {pointStyle}} = chart.legend.options;

                                                    return data[1].labels.map(function (label, i) {

                                                      
                                                            const meta = chart.getDatasetMeta(1);
                                                            const style = meta.controller.getStyle(i);

                                                            return {
                                                                text:'This is ' + label + ' - ' + chart.data.datasets[0].data[i],
                                                                fillStyle: style.backgroundColor,
                                                                strokeStyle: style.borderColor,

                                                                lineWidth: style.borderWidth,

                                                                //pointStyle: chart.legend.options.pointStyle,

                                                                hidden: !chart.getDataVisibility(i),


                                                                index: i

                                                            };
        
                                                 

                                                    });
                                                }
                                                return [];
                                            }
                                        }
                                    }
  
                                   
                                }
                            }

                            ,

                            plugins: [{
                                beforeLayout: function (chart) {

                                    def.resolve();
                                    //debugger;
                                    //chart.options.scales.x1.labels = chart.config.data.datasets.filter((ds, i) => !chart.getDatasetMeta(i).hidden).map(ds => ds.label)
                                }
                                //afterRender: function (chart, options) {
                                //    //debugger;
                                //    if (!chart.$rendered) {
                                //        chart.$rendered = true;
                                //        // do whatever you want for the first render ...
                                //    };
                                //    //

                                //    //
                                //}


                            }]

                        });
                        //
                        $tha.chrt_gender_age_pie = function () {
                            //
                            def = $.Deferred();
                            //
                            $.when(dbLOD()).done(function () {
                                //
                                b = elUI.dbLOD;
                                //
                                def.resolve();
                                //
                                $tha.chartLIB.pie.config.data = b.pie;
                                $tha.chartLIB.pie.update();
                                //
                                piectx.removeClass(rCla.join(' ')).addClass(rCla[b.cnt == 0 ? 1 : 0]);
                                piectx.next().removeClass(rCla.join(' ')).addClass(rCla[b.cnt == 0 ? 0 : 1]);

                                piectx.closest('.csspinner').removeClass('csspinner load1 load2');
                                //
                            });
                            //
                            return def.promise();
                        };
                        //
                        piectx.removeClass(rCla.join(' ')).addClass(rCla[b.cnt == 0 ? 1 : 0]);
                        piectx.next().removeClass(rCla.join(' ')).addClass(rCla[b.cnt == 0 ? 0 : 1]);
                        piectx.closest('.csspinner').removeClass('csspinner load1 load2');
                        //
                    });
                    //
                    return def.promise();
                    //
                }

                ,

                chrt_gender_age_bar: function (frmEL) {

                    var def = $.Deferred(),
                        $tha = this;

                    $.when(this.chartLIB()).done(function (a) {

                        //console.log(b);

                        //https://codepen.io/bravewick/pen/XGjoMN
                        //https://codepen.io/lellky/pen/apVzEe
                        var timeFormat = "MM/DD/YYYY HH:mm";


                        var ctx = frmEL.find('.columnchart');

                        var bar_ctx = ctx[0].getContext('2d');

                        var purple_orange_gradient = bar_ctx.createLinearGradient(0, 0, 0, 600);
                        purple_orange_gradient.addColorStop(0, 'orange');
                        purple_orange_gradient.addColorStop(1, 'purple');

                        var grd = bar_ctx.createLinearGradient(0, 0, 170, 0);
                        grd.addColorStop(0, "black");
                        grd.addColorStop(1, "white");


                        var gradient = bar_ctx.createLinearGradient(0, 20, 0, 220);

                        // Add three color stops
                        gradient.addColorStop(0, 'green');
                        gradient.addColorStop(.5, 'cyan');
                        gradient.addColorStop(1, 'green')

                        var resizeTimeout
                            ,

                            yMIN = 10,

                            yMAX = 80,

                            _scale = function () {
                                //
                                var gidL = {}, colr;

                                if (cS$.c0lor == 'dark') {
                                    gidL = {
                                        color: '#4d4d4d'
                                    };
                                    colr = '#dedede';
                                };


                                return GetIEVersion() == 11 ? {

                                    xAxes: [{
                                        stacked: true,
                                        gridLines: gidL,
                                        ticks: {
                                            fontColor: colr
                                        }
                                    }]
                                    ,
                                    yAxes: [{
                                        stacked: false,
                                        position: 'right',
                                        ticks: {
                                            beginAtZero: true,
                                            min: yMIN,
                                            max: yMAX,
                                            fontColor: colr
                                        },
                                        gridLines: gidL
                                    }]
                                } : {
                                    x: {
                                        stacked: true,
                                        //time: {
                                        //    // Luxon format string
                                        //    tooltipFormat: 'DD T'
                                        //},
                                        //format: "HH mm",

                                        tickLength: 15,

                                        grid: gidL,

                                        ticks: {
                                            color: colr
                                        }

                                    }
                                    ,
                                    y: {

                                        stacked: false,
                                        position: 'right',
                                        min: yMIN,
                                        max: yMAX,
                                        //scaleLabel: {
                                        //    display: true,
                                        //    labelString: "value"
                                        //}
                                        grid: gidL,
                                        ticks: {
                                            color: colr
                                        }
                                    }
                                };
                            };

 


                            var config = {

                                type: "bar",

                                data: {

                                    labels: [
                                      '(Drag to change)',
                                      //'Nu',
                                      //'newDateString(0)',
                                      //'newDateString(0)'
                                    ], // Date Objects

                                    datasets: tuoi
                                },

                                options: {
                                    animation: false,
                                    responsive: true,
                                    maintainAspectRatio: false
                                    ,
                                    tooltips: {
                                        mode: 'index',
                                        intersect: false,
                                        displayColors: false,
                                    },

                                    title: {
                                        display: true,
                                        text: "Chart.js stackable with Min/Avg/Max"
                                    }
                                    ,

                                    scales: _scale()

                                    ,

                                    layout: {

                                        padding: {
                                            left: 120//4 padder *30
                                        }
                                    }

                                    ,

                                    plugins: {
                                        //legend: {
                                        //    //position: 'left'
                                        //}
                                        //,
                                        datalabels: {
                                            //align: 'center',
                                            //anchor: 'center',
                                            //color: function (context) {
                                            //    return context.dataset.backgroundColor;
                                            //},
                                            //font: function (context) {
                                            //    var w = context.chart.width;
                                            //    return {
                                            //        size: w < 512 ? 12 : 14,
                                            //        weight: 'bold',
                                            //    };
                                            //},
                                            formatter: function (value, context) {
                                                if (context.datasetIndex == 0 && context.dataIndex == 0) {
                                                    return value[1]>value[0]?'< ' + value[1]:'';
                                                } else {
                                                    return value.join(' - ');
                                                }
                                                //return 'Nam 4/100%\nNam 4/100%';//context.chart.data.labels[context.dataIndex];
                                            }
                                        }
                                        ,
                                        legend: {
                                            display: false,
                                            labels: {
                                                usePointStyle: true,
                                                fontColor: "red",
                                                generateLabels: function (chart) {
                                                    //https://stackoverflow.com/questions/52445181/chart-js-how-to-modify-an-existing-legend
                                                    console.log('generateLabels');
                                                }
                                            }
                                        }
                                    }
                                }
                                ,
                                plugins: [{
                                    //beforeInit: function (chart) {
                                    //    //console.log(chart.height);
                                    //    debugger;
                                    //    let dataset = chart.config.data.datasets[0];
                                    //    //chart.config.data.datasets = chart.config.data.labels.map((l, i) => ({
                                    //    //    label: l,
                                    //    //    data: [{ x: i + 1, y: dataset.data[i] }],
                                    //    //    backgroundColor: dataset.backgroundColor[i],
                                    //    //    categoryPercentage: 1
                                    //    //}));
                                    //    //chart.config.data.labels = undefined;
                                    //},
                                    beforeLayout: function (chart) {

                                        def.resolve();
                                        //debugger;
                                        //chart.options.scales.x1.labels = chart.config.data.datasets.filter((ds, i) => !chart.getDatasetMeta(i).hidden).map(ds => ds.label)
                                    }
                                    //,
                                    
                                    //beforeUpdate: function (chart) {// We affect the `beforeUpdate` event
                                    //    var backgroundColor = [];
                                    //    var borderColor = [];
        
                                    //    // For every data we have ...
                                    //    for (var i = 0; i < chart.config.data.datasets[0].data.length; i++) {
        
                                    //        // We generate a random color
                                    //        var color = "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ",";
            
                                    //        // We push this new color to both background and border color arrays
                                    //        backgroundColor.push(color + "0.2)");
                                    //        borderColor.push(color + "1)");
                                    //    }
        
                                    //    // We update the chart bars color properties
                                    //    chart.config.data.datasets[0].backgroundColor = backgroundColor;
                                    //    chart.config.data.datasets[0].borderColor = borderColor;
                                    //}
                                }]


                            };


                        var tovic_RNG = function (rect) {

                                function RS( EVTs) {

                                    EVTs = EVTs || {};

                                    var target = this,
                                        win = window,
                                        doc = document,
                                        ranger = doc.createElement('div'),
                                        dragger = $('<span class="ui-slider-handle"></span>')[0],
                                        drag = false,

                                        dragRECT = EVTs.dragRECT || doc,

                                        rangerSize = 0,

                                        draggerSize = 0,

                                        rangerDistance = 0,

                                        cacheValue =  0,

                                        vertical = vertical || EVTs.vertical || false,

                                        size = vertical ? 'offsetHeight' : 'offsetWidth',
                                        css = vertical ? 'top' : 'left',
                                        page = vertical ? 'pageY' : 'pageX',
                                        offset = vertical ? 'offsetTop' : 'offsetLeft',
                                        client = vertical ? 'clientY' : 'clientX',
                                        scroll = vertical ? 'scrollTop' : 'scrollLeft',

                                        resizeHWND = -1;

                            

                                    function isSet(x) {
                                        return typeof x !== "undefined";
                                    }

                                    function isFunc(x) {
                                        return typeof x === "function";
                                    }

                                    //function getCoordinate(el) {
                                    //    var x = el[offset];
                                    //    while (el = el.offsetParent) {
                                    //        x += el[offset];
                                    //    }
                                    //    return x;
                                    //}

                                    function on(ev, el, fn) {
                                        if (el.addEventListener) {
                                            el.addEventListener(ev, fn, false);
                                        } else if (el.attachEvent) {
                                            el.attachEvent('on' + ev, fn);
                                        } else {
                                            el['on' + ev] = fn;
                                        }
                                    }

                                    function off(ev, el, fn) {
                                        if (el.removeEventListener) {
                                            el.removeEventListener(ev, fn);
                                        } else if (el.detachEvent) {
                                            el.detachEvent('on' + ev, fn);
                                        } else {
                                            el['on' + ev] = null;
                                        }
                                    }

                                    function addClass(s, el) {
                                        if (el.classList) {
                                            el.classList.add(s);
                                        } else {
                                            el.className += ' ' + s;
                                        }
                                    }

                                    addClass('range-slider', target);
                                    addClass('position-absolute', target);




                                    target.style['top'] = rect.top + 'px';
                                    ranger.style['height'] = (rect.bottom - rect.top) + 'px';







                                    addClass('range-slider-' + (vertical ? 'vertical' : 'horizontal'), target);
                                    addClass('range-slider-track', ranger);




                                    //addClass('h-100', ranger);
                                    addClass('dragger', dragger);

                                    // `RS(target, function(a, b, c) {})`
                                    if (isFunc(EVTs)) {
                                        EVTs = {
                                            drag: EVTs
                                        };
                                    }

                                    function edge(a, b, c) {
                                        if (a < b) return b;
                                        if (a > c) return c;
                                        return a;
                                    }

                                    function preventDefault(e) {
                                        if (e.preventDefault) e.preventDefault();
                                        return false;
                                    }

                                    function setSize() {
                                        rangerSize = ranger[size];
                                        rangerDistance = ranger.getBoundingClientRect().top ;// getCoordinate(ranger);
                                        draggerSize = dragger[size];
                                    }

                                    function dragInit() {

                                        var val=rngV[EVTs.atV];

                                        cacheValue = edge(isSet(val.v) ? val.v : yMIN, yMIN, yMAX);

                                        dragger.style[css] = (((cacheValue / (yMAX - yMIN)) * rangerSize) - (draggerSize / 2)) + 'px';

                                        if (isFunc(EVTs.create)) EVTs.create(cacheValue, target);

                                        if (isFunc(EVTs.drag)) EVTs.drag(cacheValue, target);

                                    }

                                    target.RZval = function (va) {

                                        clearTimeout(resizeHWND);

                                        if (va !== undefined) {
                                            //
                                            cacheValue = va;
                                            //
                                            setSize();
                                            drag = false;

                                            //var dumeP = (((cacheValue / (yMAX - yMIN)) * rangerSize) - (draggerSize / 2));
                                            //console.log(dumeP);
                                            //
                                            dragger.style[css] = (((cacheValue / (yMAX - yMIN)) * rangerSize) - (draggerSize / 2)) + 'px';
                                            //
                                            if (isFunc(EVTs.drag)) EVTs.drag(cacheValue, target);
                                            //
                                        } else {
                                            return cacheValue;
                                        };
                                    };


                                    function hwnRESZ(e) {
                                        //
                                        clearTimeout(resizeHWND);
                                        //
                                        resizeHWND = setTimeout(function () {
                                            target.RZval(cacheValue);
                                        }, 300);
                                        //
                                    }

                                    function dragStart(e) {

                                        //console.log(e.type, new Date().getTime());

                                        setSize();

                                        drag = true;

                                        //dragUpdate(e);

                                        off("touchmove", dragRECT, dragMove);
                                        off("mousemove", dragRECT, dragMove);

                                        on("touchmove", dragRECT, dragMove);
                                        on("mousemove", dragRECT, dragMove);


                                        off("touchend", doc, dragStop);
                                        off("mouseup", doc, dragStop);
                                        //
                                        on("touchend", doc, dragStop);
                                        on("mouseup", doc, dragStop);

                                        if (isFunc(EVTs.start)) EVTs.start(cacheValue, target, e);
                                        //
                                        return preventDefault(e);
                                    }

                                    function dragMove(e) {
                                        dragUpdate(e);
                                        return preventDefault(e);
                                    }

                                    function dragStop(e) {
                                        drag = false;


                                        off("touchmove", dragRECT, dragMove);
                                        off("mousemove", dragRECT, dragMove);

                                        off("touchend", doc, dragStop);
                                        off("mouseup", doc, dragStop);


                                        if (isFunc(EVTs.stop)) EVTs.stop(cacheValue, target, e);
                                        //return preventDefault(e);
                                        //console.log('fuck');
                                    }

                                    function dragUpdate(e) {

                                        e = e || win.EVTs;
                                        var pos = e.touches ? e.touches[0][page] : e[page],

                                            move = edge(pos - rangerDistance, 0, rangerSize),

                                            value = edge(((pos - rangerDistance) / rangerSize) * (yMAX - yMIN), 0, yMAX- yMIN);


                                        //if (!pos) pos = e[client] + doc.body[scroll] + doc.documentElement[scroll];

                                        if (drag) {
                                            //
                                            //var VA = rngV[EVTs.atV],
                                            ////
                                            //_in = offsV(VA.max),
                                            //_ax = offsV(VA.min);
                                            ////
                                            //if (value < _in) {

                                            //    value = _in;
                                            //    move = value * rangerSize / yMAX;

                                            //} else if (value > _ax) {
                                            //    //
                                            //    value = _ax;
                                            //    //
                                            //    move = value * rangerSize / yMAX;
                                            //    //
                                            //};
                                            //
                                            //console.log(move);
                                            dragger.style[css] = (move - (draggerSize / 2)) + 'px';

                                            cacheValue = Math.round(value);

                                            if (isFunc(EVTs.drag)) EVTs.drag(cacheValue, target, e);

                                    
                                        };
                                    }

                                    on("touchstart", dragger, dragStart);
                                    on("mousedown", dragger, dragStart);





                                    on("resize", win,hwnRESZ );

                                    ranger.appendChild(dragger);
                                    target.appendChild(ranger);

                                    //
                                    destroy.push(function () {

                                        off("resize", win, hwnRESZ);

                                        off("touchstart", dragger, dragStart);
                                        off("mousedown", dragger, dragStart);

                                        off("touchend", doc, dragStop);
                                        off("mouseup", doc, dragStop);


                                        off("touchmove", dragRECT, dragMove);
                                        off("mousemove", dragRECT, dragMove);

                                    });
                                    //
                                    //
                                    return setSize(), dragInit(), target;

                                };

                                var p = frmEL.find('.tovic_range')
                                    ,

                                    offsV = function (v) {
                                        return yMAX - v;
                                    }

                                    ,

                                    rngV = config.data.datasets.reduce(function (re, ax) {
                                        //
                                        //if (re.length == 0) {
                                        //    re.push({ v:offsV( ax.data[0][0]) });
                                        //};
                                        //
                                        re.push({ v: offsV(ax.data[0][1]) });
                                        //
                                        return re;
                                        //
                                    }, []),
                                    
                                    offs = 22;


                                p.each(function (i, dx) {

                                    dx.style.left = (20+ i * offs) + 'px';

                                    RS.bind(dx, {

                                        atV: i,

                                        dragRECT: p.parent()[0],

                                        vertical: true,

                                        tip_V: $('<span class="ui-slider-tip">0</span>')[0],

                                        create: function (value, target) {
                                            target.firstChild.firstChild.appendChild(this.tip_V); // append tooltip to the trigger element
                                        }
                                        ,
                                        start: function () {
                                            //tip_V.style.display = 'block';
                                        }

                                        ,

                                        drag: function (value, target) {

                                            this.tip_V.innerHTML = offsV(value);//(100 - value);// + '%';
                                            //console.log('drag', new Date().getTime());
                                            target._val = offsV(value);
                                        }
                                        ,
                                        stop: function () {
                                            //tip_V.style.display = 'none';


                                            //config.data.datasets[0].data = [
                                            //                      [10, 75],
                                            //                      [75, 95]
                                            //];

                      

                                            //https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
                                            var byVAL = p.slice(0);
                                            byVAL.sort(function (a, b) {
                                                return a._val - b._val;
                                            });
                                            //
                                            for (var dox = 1; dox < byVAL.length; dox ++) {
                                                config.data.datasets[dox].data = [[byVAL[dox-1]._val, byVAL[dox ]._val]];
                                            };
                                            //neo step 0
                                            config.data.datasets[0].data = [[10, config.data.datasets[1].data[0][0]]];
                                            //
                                            //
                                            //
                                            draw_chart_table();
                                            //
                                            $tha.chartLIB.bar.update();
                                            $tha.chartLIB.pie.update();
                                            //
                                        }
                                    })();


                                });

                                return p.length * offs;

                            };
                        //
                        //
                        //
                        $tha.chartLIB.bar = new Chart(bar_ctx, config);
                        //
                        tovic_RNG($tha.chartLIB.bar.chartArea);
                        //
                        //
                        ctx.parent().closest('.csspinner').removeClass('csspinner load1 load2');
                        //
                        $tha.chrt_gender_age_bar = function () {
                            //
                            //debugger;
                            def = $.Deferred();
                            $.when(dbLOD()).done(function (a, b) {
                                var conf = $tha.chartLIB.bar.config;
                                conf.options.scales = _scale();
                                $tha.chartLIB.bar.update();
                                //
                                ctx.parent().closest('.csspinner').removeClass('csspinner load1 load2');
                                //
                                def.resolve();
                                //
                            });
                            //
                            return def.promise();
                        };
                        //
                    });
                    //
                    return def.promise();
                    //
                }

                ,

                jvectormap_visitor: function (frmEL) {

                    //_gsC('https://jvectormap.com/js/modernizr.js', 'js', function () {

                    _gsC(' https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.5/jquery-jvectormap.css', 'css', function () {
                    }, 'jquery-jvectormap.css');

                    _gsC(srcp$f + '/media/utils/jsc/jquery-jvectormap-2.0.5.min.js' + src$id, 'js', function () {

                        //_gsC('https://jvectormap.com/js/jquery-jvectormap-world-mill.js', 'js', function () {
                        //
                        //https://colorlib.com/wp/free-bootstrap-admin-dashboard-templates/
                        //https://dashboardpack.com/theme-details/hospital-html-dashboard/
                        //https://dashboardpack.com/

                        //https://codepen.io/LiangHsi/pen/EWQJoY
                        //
                        var dogJ = frmEL.find('.jvectormap_visitor'),
                            fnMAP= function () {

                                $('<div class="h-100" style="min-height:200px;' +
                                    'position: relative;' +
                                    'overflow: hidden;' +
                                    'background-color: transparent;"></div>').appendTo(frmEL.find('.jvectormap_visitor'))

                                .vectorMap({
                                    onViewportChange: function (e) {
                                        $(e.target).closest('.panel-body').removeClass('csspinner load1');
                                    },
                                    map: 'world_mill',
                                    backgroundColor: 'transparent',
                                    //borderColor: '#fff',
                                    borderOpacity: 0.25,
                                    borderWidth: 0,
                                    color: '#e6e6e6',
                                    regionStyle: {
                                        initial: {
                                            fill: '#e4ecef',
                                        },
                                    },

                                    markerStyle: {
                                        initial: {
                                            r: 7,
                                            //'fill': '#fff',
                                            'fill': 'hotpink',
                                            'fill-opacity': 1,
                                            'stroke': '#81dd4d',
                                            'stroke-width': 2,
                                            'stroke-opacity': 0.4,
                                        },
                                    },

                                    markers: [{
                                        latLng: [21.00, 78.00],
                                        name: 'INDIA : 350',
                                    }, {
                                        latLng: [-33.00, 151.00],
                                        name: 'Australia : 250',
                                    }, {
                                        latLng: [36.77, -119.41],
                                        name: 'USA : 250',
                                    }, {
                                        latLng: [55.37, -3.41],
                                        name: 'UK   : 250',
                                    }, {
                                        latLng: [25.20, 55.27],
                                        name: 'UAE : 250',
                                    }],
                                    series: {
                                        regions: [{
                                            values: {
                                                'US': 298,
                                                'SA': 200,
                                                'AU': 760,
                                                'IN': 200,
                                                'GB': 120,
                                            },
                                            scale: ['#03a9f3', '#02a7f1'],
                                            normalizeFunction: 'polynomial',
                                        }],
                                    },
                                    hoverOpacity: null,
                                    normalizeFunction: 'linear',
                                    zoomOnScroll: false,
                                    scaleColors: ['#b6d6ff', '#005ace'],
                                    selectedColor: '#c9dfaf',
                                    selectedRegions: [],
                                    enableZoom: false,
                                    hoverColor: '#fff',
                                });

                            };

                        setTimeout(fnMAP, 500);
                        //
                        //
                        laZY.jvectormap_visitor = function () {
                            debugger;
                            dogJ.find('*').off(/*all event*/).unbind().removeData();
                            //
                            dogJ.empty();
                            //
                            setTimeout(fnMAP, 500);
                        };
                        //
                        //}, 'jquery-jvectormap-world-mill.js');



                    }, 'jquery-jvectormap.min.js');


                    //}, 'modernizr.js');
                }

            };


        this.init = function (frmEL, cb, tabId, clickArgs, tabProps) {
            //
            _tabId = tabId;
            $mainO = cb('dbEngine');
            //
            var srcSwitch = function () {
                //
                elUI.title[0].html(_La$N('js_013_1', elUI.lan));
                //
                //if (key.indexOf('js_013_1')) elUI.title = [$(el), key];

                upload_hsnv_excel.fadeOut('fast', function () {

                    upload_hsnv_excel.next().fadeIn('slow');

                    if (srcSwitch.uptep === 1) {
                        srcSwitch.uptep = 0;
                        //open lai jvertermap
                        laZY.jvectormap_visitor(frmEL);
                    };
                    //

                });

            }
            ,

            lazyLOD = frmEL.find('.csspinner'),// [].slice.call(frmEL.find('.csspinner'), 0),

            init_dataDIV = frmEL.find('.init_data'),

            upload_hsnv_excel = frmEL.find('.upload_hsnv_excel'),

            sWIX;


            elUI.lan = JSON.parse(JSON.parse(atob(init_dataDIV.text())).lan);
            init_dataDIV.remove();
            //
            //
            frmEL.on('shown.bs.tab', function (e) {
                //debugger;
                //iframeWin.postMessage('myMessage.value', "*");

            }).on('click', '.wrap-content .links', function (e, a) {
                //
                srclocked(true);
                var isLOAD = 1;

                _gsC(srcpf$ + '/media/js/JS_JS_nhapxuat_up.js' + src$id, 'js', function () {
                    //
                    if (!sWIX) {
                        //
                        sWIX = Main._upl0d.createUPL({

                            lan: elUI.lan,

                            _tabId: _tabId,

                            $mainO: $mainO

                        });
                        //
                        //
                        sWIX.init(upload_hsnv_excel);
                        //
                        //
                        //tam thoi dat o day !!!!
                        elUI.title[0].parent().prev().find('.system_monitor').on('click', srcSwitch);
                        //
                        isLOAD = 0;
                        //
                        //
                    };
                    //
                    //clear jvertermap
                    var dogJ = frmEL.find('.jvectormap_visitor');
                    dogJ.find('*').off(/*all event*/).unbind().removeData();
                    //
                    dogJ.empty();
                    //
                    //chuyen title sang upload
                    elUI.title[0].html(_La$N('js_013_0', elUI.lan));
                    //
                    upload_hsnv_excel.next().fadeOut('fast', function () {
                        //
                        upload_hsnv_excel.fadeIn('slow');
                        //
                        if (isLOAD === 1) {
                            //
                            sWIX.reset_S(function () {
                                srclocked(false);
                            });
                            //
                        };
                        //
                    });
                    //
                    srcSwitch.uptep = dogJ.parent().hasClass('csspinner') ? 0 : 1;
                    //
                }, 'JS_JS_nhapxuat_up.js');
                //
                //
            }).find('[data-lang]').each(function (idx, el) {
                var key = el.getAttribute('data-lang');

                $(el).html(_La$N(key, elUI.lan));
                //
                if (key.indexOf('js_013_1') > -1) {
                    //
                    elUI.title = [$(el)];
                    //
                    //
                };
                //
            });
            //
            //
            frmEL.on('theme', function (e, m, a, b, c, d, f, g) {
                //
                if (laZY.chartLIB.pie) laZY.chartLIB.pie.update();
                if (laZY.chartLIB.bar) laZY.chrt_gender_age_bar();
                //
            }).on('onActived', function (a, b) {

                if (b.state === 1 && appEVT.changed) {

                    //clear flage
                    delete appEVT.changed;
                    //lazy="chrt_gender_age_bar" class="col-md-12 col-lg-4 d-flex csspinner load1"

                    laZY.lazyLOD = frmEL.find('[lazy]').addClass('csspinner load1');

                    laZY.track();

                    //debugger;
                };

     

            }).find('.sample_xls').on('click', function (ex) {
                //du me download
                ex.preventDefault();
                window.location.href = "https://hellohrm.github.io/utils/media/utils/tmplexcel/import_sample.xlsx";
                //
                //var link = document.createElement('a');
                //link.href = "https://hellohrm.github.io/utils/media/utils/tmplexcel/import_sample.xlsx";
                //link.download = "import_sample.xlsx";
                //link.click();
                //link.remove();
                //

            });


            var appEVT = function (e,d) {
                switch (shaEVT_NAN.indexOf(e.type)) {
                    case 0: {/*emp_changed*/
                        //
                        delete elUI.dbLOD;//reset de load db lai
                        //
                        appEVT.changed = [e.type, d];
                        //
                        break;
                    }
                };
            };

            $('#app').on(shaEVT_NAN[0]/*emp_changed*/,appEVT) ;


            destroy.push(function () {
                $('#app').off(shaEVT_NAN[0]/*emp_changed*/, appEVT);
                $('#app').on('scroll', laZY.job);
            });

            //
            //

            //jvectormap_visitor(frmEL);
            ////
            //cakip_tree(frmEL);
            //cakip_clock(frmEL);
            ////

            //chartLIB(frmEL);
            //
            //
            chart_table = frmEL.find('.chart_table');
            //
            //create layzy render collection
            laZY.lazyLOD = lazyLOD;
            laZY.frmEL = frmEL;
            //
            //
            //
            $.when(dbLOD()).done(function (b) {
                //
                laZY.track();
                //
                srclocked(false);
                //
            });
            //
        };

        this.dispose = function () {
            //
            for (var des = 0; des < destroy.length; des++) {
                destroy[des]();
            };
            //
            des = undefined;
            //
            //if (spread) spread.destroy();
            //
            $("#tabBODY_" + _tabId).trigger('dispose');
            //
            //var dogID = w0w.dynload.indexOf('gc.spread.excelio.min.js');
            //if (dogID && dogID > -1) {
            //    w0w.dynload.splice(dogID, 1);
            //};
            //

        };
    };


    return O;

})();


//svgx_onload = function (frmEL) {
//    //https://codepen.io/shu-vro/pen/zYKmVeq
//    const hour = document.querySelector(".hour");
//    const minute = document.querySelector(".minute");
//    const second = document.querySelector(".second");
//    const time = document.querySelector(".time");

//    //setInterval(() => {
//        const date = new Date();

//        let hh = date.getHours();
//        let mm = date.getMinutes();
//        let ss = date.getSeconds();
//        if (hh >= 12) {
//            hh = hh - 12;
//        }
//        time.textContent = date.toLocaleTimeString();
//        hour.setAttribute("data-number", hh + mm / 60);
//        minute.setAttribute("data-number", mm + ss / 60);
//        second.setAttribute("data-number", ss);

//        const circles = document.querySelectorAll(".circle");

//        function drawCircle(circle, color, strokeWidth, radius) {

//            circle.width =  window.innerWidth;
//            circle.height =  window.innerHeight;

//            let max_value = circle.dataset.number;
//            let actual_value = circle.parentNode.dataset.number;

//            let angle = (actual_value / max_value) * 2 * Math.PI;
//            const ctx = circle.getContext("2d");
//            ctx.beginPath();
//            ctx.arc(circle.width / 2, circle.height / 2, radius, 0, angle, false);

//            //ctx.lineCap = "round";

//            ctx.strokeStyle = color;
//            ctx.lineWidth = strokeWidth;
//            ctx.stroke();
//        }

//        drawCircle(circles[0], "orangered", 8, 200);
//        drawCircle(circles[1], "lime", 8, 180);
//        drawCircle(circles[2], "dodgerblue", 8, 160);
//        // circle, length, color, strokeWidth, radius
//    //}, 1000);


//        clock();

//        run_dongho();
//}



