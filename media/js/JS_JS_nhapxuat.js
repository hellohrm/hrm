(function (fac) {

    "use strict";

    if (!Main._plugCHRT) Main._plugCHRT = fac();

})(function (args) {

    function O(opts) { // constructor
        return {
            a: 1
        }
    };

    const testPLUGIN = function () {
        //https://codepen.io/BillDou/pen/oNoGBXb
        // pieLabelsLine plugin
        const pieLabelsLine = {
            id: "pieLabelsLine",
            afterDraw: function (chart) {
                debugger;

                var ctx = chart.ctx,
                    width = chart.chartArea.width,
                    height = chart.chartArea.height,

                    dd = chart.getDatasetMeta(0).data[0];

                //ie11
                dd = (dd._view || dd);

                const cx = dd.x,
                    cy = dd.y;

                const sum = chart.data.datasets[0].data.reduce(function (a, b) { return a + b }, 0);

                //chart.data.datasets.forEach(function(dataset, i)  {

                chart.getDatasetMeta(0).data.forEach(function (datapoint, index) {

                    var c = datapoint.tooltipPosition(),
                        a = c.x,
                        b = c.y;

                    var x = 2 * a - cx;
                    var y = 2 * b - cy;


                    // draw line
                    const halfwidth = width / 2;
                    const halfheight = height / 2;
                    const xLine = x >= halfwidth ? x + 20 : x - 20;
                    const yLine = y >= halfheight ? y + 20 : y - 20;

                    const extraLine = x >= halfwidth ? 10 : -10;

                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.arc(x, y, 2, 0, 2 * Math.PI, true);
                    ctx.fill();
                    ctx.moveTo(x, y);
                    ctx.lineTo(xLine, yLine);
                    ctx.lineTo(xLine + extraLine, yLine);
                    // ctx.strokeStyle = dataset.backgroundColor[index];
                    ctx.strokeStyle = "black";
                    ctx.stroke();

                    // text
                    const textWidth = ctx.measureText(chart.data.labels[index]).width;
                    ctx.font = "12px Arial";
                    // control the position
                    const textXPosition = x >= halfwidth ? "left" : "right";
                    const plusFivePx = x >= halfwidth ? 5 : -5;
                    ctx.textAlign = textXPosition;
                    ctx.textBaseline = "middle";
                    // ctx.fillStyle = dataset.backgroundColor[index];
                    ctx.fillStyle = "black";

                    ctx.fillText(
                      ((chart.data.datasets[2].data[index] * 100) / sum).toFixed(2) +
                        "%",
                      xLine + extraLine + plusFivePx,
                      yLine
                    );

                });

                //});
            },
        }
        ,
        dougLabelsP = {//https://jsfiddle.net/Leelenaleee/y0oz7cn1/16/

            id: "dougLabelsP",

            afterDraw: function (chart, args, opts) {
                //debugger;
                var ctx = chart.ctx,
                        width = chart.chartArea.right - chart.chartArea.left,
                        height = chart.chartArea.bottom - chart.chartArea.top,
                dogT = chart.chartArea.top;

                ctx.fillStyle = 'black';



                const sum = chart.data.datasets[0].data.reduce(function (a, b) {
                    return a + b

                }, 0);



                chart.getDatasetMeta(0).data.forEach(function (bp, index) {
                    //
                    //debugger;
                    var arc = bp._view || bp;//ie11
                    //
                    var stretch = 0,
                        perVAL = (chart.data.datasets[0].data[index] * 100) / sum;




                    var angle = (arc.startAngle + arc.endAngle) / 2;
                    var cosA = Math.cos(angle);
                    var sinA = Math.sin(angle);
                    var d = arc.outerRadius;
                    var stretchedD = d + stretch;
                    //
                    //console.log('angle', angle, 'cosA', cosA, 'sinA', sinA, 'd', d, 'stretchedD', stretchedD);
                    //

                    //
                    //
                    ctx.beginPath();




                    ctx.moveTo(0, dogT + height / 2);
                    ctx.lineTo(width, dogT + height / 2);
                    //ctx.lineTo(xLine + extraLine, yLine);
                    // ctx.strokeStyle = dataset.backgroundColor[index];
                    ctx.strokeStyle = "red";
                    ctx.stroke();

                    ctx.beginPath();

                    ctx.moveTo(width / 2, dogT);
                    ctx.lineTo(width / 2, dogT + height);
                    //ctx.lineTo(xLine + extraLine, yLine);
                    // ctx.strokeStyle = dataset.backgroundColor[index];
                    ctx.strokeStyle = "red";
                    ctx.stroke();



                    ctx.beginPath();


                    var testx = arc.x + cosA * stretchedD,
                    testy = arc.y + sinA * stretchedD;
                    //ctx.arc(testx, testy, 5, 0, Math.PI * 2);
                    //ctx.fill();
                    //return;


                    //var c = arc.tooltipPosition(),
                    //    x = c.x,
                    //    y = c.y;

                    //ctx.arc(x, y, 5, 0, Math.PI * 2);

                    //ctx.fill();

                    ctx.arc(width / 2, dogT + height / 2, 25, 0, Math.PI * 2);
                    ctx.fill();

                    var x = testx, y = testy;

                    const halfwidth = width / 2;
                    const halfheight = height / 2;

                    const xLine = x >= halfwidth ? x + 20 : x - 20;
                    const yLine = y >= halfheight ? y + 20 : y - 20;

                    const extraLine = x >= halfwidth ? 10 : -10;


                    if (perVAL < 10) {

                        var c = bp.tooltipPosition(),
                            x = c.x,
                            y = c.y;


                        ctx.arc(x, y, 5, 0, Math.PI * 2);
                        ctx.fill();

                        // text
                        const textWidth = ctx.measureText(chart.data.labels[index]).width;


                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.arc(x, y, 2, 0, 2 * Math.PI, true);
                        ctx.fill();
                        ctx.moveTo(x, y);
                        ctx.lineTo(xLine, yLine);
                        ctx.lineTo(xLine + extraLine, yLine);
                        //debugger;
                        //ctx.fillStyle = chart.data.datasets[0].backgroundColor[index];
                        ctx.strokeStyle = chart.data.datasets[0].backgroundColor[index];// "black";
                        ctx.stroke();


                        ctx.font = "12px Helvetica";
                        // control the position
                        const textXPosition = x >= halfwidth ? "left" : "right";
                        const plusFivePx = x >= halfwidth ? 5 : -5;
                        ctx.textAlign = textXPosition;
                        ctx.textBaseline = "middle";
                        //ctx.fillStyle = chart.data.datasets[0].backgroundColor[index];
                        ctx.fillStyle = "black";


                        var txt = fmtNB(((chart.data.datasets[0].data[index] * 100) / sum).toFixed(2)) + "%";
                        //txt = chart.data.datasets[0].data[index].join(' - ');
                        var txtW = ctx.measureText(txt).width;

                        console.log('txt', txt, 'txtW', txtW);
                        //

                        ctx.fillText(
                          txt,
         xLine + extraLine + plusFivePx,
                      yLine
                        );

                        return;


                    }
                    return;

                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.arc(x, y, 2, 0, 2 * Math.PI, true);
                    ctx.fill();
                    ctx.moveTo(x, y);
                    ctx.lineTo(xLine, yLine);
                    ctx.lineTo(xLine + extraLine, yLine);
                    // ctx.strokeStyle = dataset.backgroundColor[index];
                    ctx.strokeStyle = "black";
                    ctx.stroke();

                    // text
                    const textWidth = ctx.measureText(chart.data.labels[index]).width;
                    ctx.font = "12px Arial";
                    // control the position
                    const textXPosition = x >= halfwidth ? "left" : "right";
                    const plusFivePx = x >= halfwidth ? 5 : -5;
                    ctx.textAlign = textXPosition;
                    ctx.textBaseline = "middle";
                    // ctx.fillStyle = dataset.backgroundColor[index];
                    ctx.fillStyle = "black";

                    ctx.fillText(
                      fmtNB (((chart.data.datasets[0].data[index] * 100) / sum).toFixed(2)) +
                        "%",
                      xLine + extraLine + plusFivePx,
                      yLine
                    );


                });

            }
        }


    };


    const fmt= function (chart, value, ctx) {
        var pro = ['config', 'options', 'plugins', 'datalabels', 'formatter'], obj = chart;
        for (var i = 0; i < pro.length; i++) {
            if (!obj[pro[i]]) return value;
            obj = obj[pro[i]];
        };
        return obj(value, ctx);
    }

    ,

    _PLUG = {

        pie_outside : {

            //https://stackoverflow.com/questions/45352194/chart-js-v2-6-add-arrows-to-pie-chart-output-values
            //https://codesandbox.io/s/wispy-bash-nt7ty?file=/src/Chart.js

            id: "pie_outside"

            ,

            getOriginPoints : function(source, center, l)  {
                // console.log(source, center, l)

                let a = {x: 0, y: 0};
                var dx = (center.x - source.x) / l
                var dy = (center.y - source.y) / l
                a.x = center.x + l * dx
                a.y = center.y + l * dy
                return a
            }
            ,

            getSuitableY: function (y, yArray, direction) {

                var result = y, linH = 18;

                yArray = yArray || [];

                yArray.forEach(function (existedY) {
                    if (existedY - linH < result && existedY + linH > result) {
                        if (direction === "right") {
                            result = existedY + linH;
                        } else {
                            result = existedY - linH;
                        }
                    }
                });

                return result;

            }

            ,

            doughnut_LBL: function (chart) {

                const ctx = chart.ctx
                    , th$ = this
                    , leftLabelCoordinates = []
                    , rightLabelCoordinates = []
                    , chartCenterPoint = {
                        x:
                          (chart.chartArea.right - chart.chartArea.left) / 2 +
                          chart.chartArea.left,
                        y:
                          (chart.chartArea.bottom - chart.chartArea.top) / 2 +
                          chart.chartArea.top
                    }
                    , dataset = chart.config.data.datasets[0]

                    , sum = dataset.data.reduce(function (a, b) {
                        return a + b
                    }, 0);

                //
                //ctx.save();
                //ctx.font = "10px 'Averta Std CY'";
                //
                chart.getDatasetMeta(0).data.forEach(function (bp, i) {
                    //
                    if (chart.data.datasets[0].data[i] == 0) return;
                    //if (chart.data.datasets[0].data[i] >100) return;
                    //
                    //console.log('arc.circumference', arc.circumference, 'value', value, 'cung tron', arc.circumference * d, 'chu vi', 2 * Math.PI * d);
                    //
                    ctx.font = "12px Arial";
                    // control the position
                    ctx.textAlign = 'center';
                    ctx.textBaseline = "middle";
                    // ctx.fillStyle = dataset.backgroundColor[index];
                    ctx.fillStyle = "black";

                    const arc = bp._view || bp, //ie11

                        value = dataset.data[i],

                        txt = fmtNB ( ((value * 100) / sum).toFixed(2)) + "%",

                        textWidth = ctx.measureText(txt).width;



                    if ((arc.innerRadius + (arc.outerRadius - arc.innerRadius) /2) * arc.circumference > textWidth * 1.5) {

                        var c = bp.tooltipPosition(), x = c.x, y = c.y;

                        ctx.fillText(txt, x, y);

                        return;

                    };


                    //debugger;
                    // Prepare data to draw
                    // important point 1
                    const centerPoint = bp.getCenterPoint();
                    let color = dataset.backgroundColor[i];//chart.config._config.data.datasets[0].backgroundColor[i];
                    let labelColor = dataset.backgroundColor[i];//chart.config._config.data.datasets[0].backgroundColor[i];


                    const angle = Math.atan2(
                      centerPoint.y - chartCenterPoint.y,
                      centerPoint.x - chartCenterPoint.x
                    );




                    // important point 2, this point overlapsed with existed points
                    // so we will reduce y by 14 if it's on the right
                    // or add by 14 if it's on the left
                    var originPoint = th$.getOriginPoints(chartCenterPoint, centerPoint, arc.outerRadius)


                    var point2X = chartCenterPoint.x + Math.cos(angle) * (centerPoint.x < chartCenterPoint.x ? arc.outerRadius + 10 : arc.outerRadius + 10);




                    let point2Y = chartCenterPoint.y + Math.sin(angle) * (centerPoint.y < chartCenterPoint.y ? arc.outerRadius + 15 : arc.outerRadius + 15);

                    let suitableY;
                    if (point2X < chartCenterPoint.x) {
                        // on the left
                        suitableY = th$.getSuitableY(point2Y, leftLabelCoordinates, "left");
                    } else {
                        // on the right
                        suitableY = th$.getSuitableY(point2Y, rightLabelCoordinates, "right");
                    }

                    point2Y = suitableY;


                    // if (dataset.polyline && dataset.polyline.formatter) {
                    //   value = dataset.polyline.formatter(value);
                    // }
                    let edgePointX = point2X < chartCenterPoint.x ?
                        point2X /*chartCenterPoint.x - arc.outerRadius*/ - 10 :
                        point2X/*chartCenterPoint.x + arc.outerRadius */ + 10;



                    if (point2X < chartCenterPoint.x) {
                        leftLabelCoordinates.push(point2Y);
                    } else {
                        rightLabelCoordinates.push(point2Y);
                    }







                    //DRAW CODE
                    // first line: connect between arc's center point and outside point
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = color;

                    ctx.beginPath();

                    //var angle = (arc.startAngle + arc.endAngle) / 2;
                    var stretch = 0;
                    var cosA = Math.cos(angle);
                    var sinA = Math.sin(angle);
                    var d = arc.outerRadius;
                    var stretchedD = d + stretch;
                    var testx = arc.x + cosA * stretchedD, testy = arc.y + sinA * stretchedD;
                    ctx.moveTo(testx, testy);
                    //

                    //var c = bp.tooltipPosition(), x = c.x, y = c.y;
                    //ctx.moveTo(x, y);
                    //ctx.moveTo(originPoint.x, originPoint.y);

                    ctx.lineTo(point2X, point2Y);
                    ctx.stroke();
                    //
                    //
                    // second line: connect between outside point and chart's edge
                    ctx.beginPath();
                    ctx.moveTo(point2X, point2Y);
                    ctx.lineTo(edgePointX, point2Y);
                    ctx.stroke();
                    //
                    //
                    //fill custom label
                    const labelAlignStyle = edgePointX < chartCenterPoint.x ? "right" : "left";
                    const labelX = edgePointX < chartCenterPoint.x ? edgePointX : edgePointX + 0;
                    const labelY = point2Y + 7;
                    ctx.textAlign = labelAlignStyle;
                    ctx.textBaseline = "bottom";
                    //
                    ctx.font = "normal 12px Arial,'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
                    ctx.fillStyle = cS$.c0lor == 'dark' ? '#ddd' : "#666";
                    //
                    ctx.fillText(txt, labelX, labelY);


                });

                //chart.config.data.labels.forEach(function (label, i) {

                //    const meta = chart.getDatasetMeta(0);
                //    const arc = meta.data[i];

                //});

                //ctx.restore();
            }

            ,

            afterDraw: function (chart) {
                const ctx = chart.ctx, th$ = this
                    , dataset = chart.config.data.datasets[2]
                    , sum = dataset.data.reduce(function (a, b) {
                        return a + b
                    }, 0);
                //
                //
                th$.doughnut_LBL(chart);
                //
                //
                chart.getDatasetMeta(2).data.forEach(function (bp, i) {
                    //
                    const arc = bp._view || bp,//ie11
                        val = dataset.data[i],
                        txt = fmtNB ( ((val * 100) / sum).toFixed(2)) + "%",

                        c = bp.tooltipPosition(), x = c.x, y = c.y;


                    //
                    ctx.font = "12px Arial";
                    // control the position
                    ctx.textAlign = 'center';
                    ctx.textBaseline = "middle";
                    // ctx.fillStyle = dataset.backgroundColor[index];
                    ctx.fillStyle = "black";

                    //const textWidth = ctx.measureText(value).width;

                    ctx.fillText(txt, x, y-8);

                    ctx.fillText(val, x, y + 8);

                });
            }

        }
        ,

        pluginBAR_LBL: {

            id: 'pluginBAR_LBL'
            ,
            afterDraw: function (chart) {
                //
                const ctx = chart.ctx, th$ = this;
                //debugger;

                ctx.font = "12px Arial";
                // control the position
                ctx.textAlign = 'center';
                ctx.textBaseline = "middle";
                //ctx.fillStyle = dataset.backgroundColor[index];
                //ctx.fillStyle = "black";
                ctx.fillStyle = /*cS$.c0lor == 'dark' ? '#ddd' :*/ "#666";
                ctx.font = "normal 12px Arial,'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
                //
                //
                chart.config.data.datasets.forEach(function (da, zi) {
                    //
                    if (da.hidden === true) return;
                    //
                    chart.getDatasetMeta(zi).data.forEach(function (bp, i) {
                        //
                        var arc = bp._view || bp;//ie11
                        //
                        //
                        const value = fmt(chart, da.data[i], {
                            active: false,
                            chart: chart,
                            dataIndex: i,
                            dataset: da,//chart.data.datasets[datasetIndex],
                            datasetIndex: zi
                        })
                        ,
                        c = bp.getCenterPoint(), x = c.x, y = c.y;
                        ctx.fillText(value, x, y);
                        //
                    });
                    //
                });
                //
            }
        }


    };

    return {
        fn: function (op) {
            return new O(op);
        }
        ,
        PLUG: function (na) {
            return _PLUG.hasOwnProperty(na) && _PLUG[na] || {}
        }
    };


});


(function () {
    'use strict';

    /**
     * Initialize a Timesheet
     */
    var Timesheet = function (container, min, max, data) {
        this.data = [];
        this.year = {
            min: min,
            max: max
        };

        this.parse(data || []);

        if (typeof document !== 'undefined') {
            this.container = (typeof container === 'string') ? document.querySelector('#' + container) : container;
            this.drawSections();
            this.insertData();
        }
    };

    /**
     * Insert data into Timesheet
     */
    Timesheet.prototype.insertData = function () {
        var html = [];
        var widthMonth = this.container.querySelector('.scale section').offsetWidth;

        for (var n = 0, m = this.data.length; n < m; n++) {
            var cur = this.data[n];
            var bubble = this.createBubble(widthMonth, this.year.min, cur.start, cur.end);

            var line = [
              '<span style="margin-left: ' + bubble.getStartOffset() + 'px; width: ' + bubble.getWidth() + 'px;" class="bubble bubble-' + (cur.type || 'default') + '" data-duration="' + (cur.end ? Math.round((cur.end - cur.start) / 1000 / 60 / 60 / 24 / 39) : '') + '"></span>',
              '<span class="date">' + bubble.getDateLabel() + '</span> ',
              '<span class="label">' + cur.label + '</span>'
            ].join('');

            html.push('<li>' + line + '</li>');
        }

        this.container.innerHTML += '<ul class="data">' + html.join('') + '</ul>';
    };

    /**
     * Draw section labels
     */
    Timesheet.prototype.drawSections = function () {
        var html = [];

        for (var c = this.year.min; c <= this.year.max; c++) {
            html.push('<section>' + c + '</section>');
        }

        this.container.className = 'timesheet color-scheme-default';
        this.container.innerHTML = '<div class="scale">' + html.join('') + '</div>';
    };

    /**
     * Parse data string
     */
    Timesheet.prototype.parseDate = function (date) {
        if (date.indexOf('/') === -1) {
            date = new Date(parseInt(date, 10), 0, 1);
            date.hasMonth = false;
        } else {
            date = date.split('/');
            date = new Date(parseInt(date[1], 10), parseInt(date[0], 10) - 1, 1);
            date.hasMonth = true;
        }

        return date;
    };

    /**
     * Parse passed data
     */
    Timesheet.prototype.parse = function (data) {
        for (var n = 0, m = data.length; n < m; n++) {
            var beg = this.parseDate(data[n][0]);
            var end = data[n].length === 4 ? this.parseDate(data[n][1]) : null;
            var lbl = data[n].length === 4 ? data[n][2] : data[n][1];
            var cat = data[n].length === 4 ? data[n][3] : data[n].length === 3 ? data[n][2] : 'default';

            if (beg.getFullYear() < this.year.min) {
                this.year.min = beg.getFullYear();
            }

            if (end && end.getFullYear() > this.year.max) {
                this.year.max = end.getFullYear();
            } else if (beg.getFullYear() > this.year.max) {
                this.year.max = beg.getFullYear();
            }

            this.data.push({ start: beg, end: end, label: lbl, type: cat });
        }
    };

    /**
     * Wrapper for adding bubbles
     */
    Timesheet.prototype.createBubble = function (wMonth, min, start, end) {
        return new Bubble(wMonth, min, start, end);
    };

    /**
     * Timesheet Bubble
     */
    var Bubble = function (wMonth, min, start, end) {
        this.min = min;
        this.start = start;
        this.end = end;
        this.widthMonth = wMonth;
    };

    /**
     * Format month number
     */
    Bubble.prototype.formatMonth = function (num) {
        num = parseInt(num, 10);

        return num >= 10 ? num : '0' + num;
    };

    /**
     * Calculate starting offset for bubble
     */
    Bubble.prototype.getStartOffset = function () {
        return (this.widthMonth / 12) * (12 * (this.start.getFullYear() - this.min) + this.start.getMonth());
    };

    /**
     * Get count of full years from start to end
     */
    Bubble.prototype.getFullYears = function () {
        return ((this.end && this.end.getFullYear()) || this.start.getFullYear()) - this.start.getFullYear();
    };

    /**
     * Get count of all months in Timesheet Bubble
     */
    Bubble.prototype.getMonths = function () {
        var fullYears = this.getFullYears();
        var months = 0;

        if (!this.end) {
            months += !this.start.hasMonth ? 12 : 1;
        } else {
            if (!this.end.hasMonth) {
                months += 12 - (this.start.hasMonth ? this.start.getMonth() : 0);
                months += 12 * (fullYears - 1 > 0 ? fullYears - 1 : 0);
            } else {
                months += this.end.getMonth() + 1;
                months += 12 - (this.start.hasMonth ? this.start.getMonth() : 0);
                months += 12 * (fullYears - 1);
            }
        }

        return months;
    };

    /**
     * Get bubble's width in pixel
     */
    Bubble.prototype.getWidth = function () {
        return (this.widthMonth / 12) * this.getMonths();
    };

    /**
     * Get the bubble's label
     */
    Bubble.prototype.getDateLabel = function () {
        return [
          (this.start.hasMonth ? this.formatMonth(this.start.getMonth() + 1) + '/' : '') + this.start.getFullYear(),
          (this.end ? '-' + ((this.end.hasMonth ? this.formatMonth(this.end.getMonth() + 1) + '/' : '') + this.end.getFullYear()) : '')
        ].join('');
    };

    window.Timesheet = Timesheet;
})();


//https://github.com/sbstjn/timesheet.js
//https://codepen.io/team/amcharts/pen/ExjbjbJ
//https://codepen.io/guldskog/pen/ojZeYZ

w0w.tabglobalJS['JS_JS_nhapxuat'] = (function () { // scoping


    "use strict";

    function O(opts) { // constructor

        var _tabId, $mainO, hasUA = opts.ua > 1 ? 'UA' : 'noU',
            elUI = { sexMNU: 1/*default*/ },

            destroy = [],

            thamnien = [[0, 5], [5, 10], [10, 15], [15, 20], [20, 30], [30, 40]],

            tuoi = [{
                maxBarThickness: 50,
                label: "l1",
                backgroundColor: "rgba(211 ,211 ,211,@O)",//lightgray
                //borderColor: "rgba(140, 140, 140, 0.0)",
                borderWidth: 0,
                data: [[10, 22]]
            }
                    ,
                    {
                        maxBarThickness: 50,
                        label: "l1",
                        backgroundColor: "rgba(121, 200, 121,@O)",
                        //borderColor: "rgba(140, 140, 140, 0.0)",
                        borderWidth: 0,
                        data: [[22, 30]]
                    },
                    {
                        maxBarThickness: 50,
                        label: "l2",
                        backgroundColor: "rgba(75, 192, 192,@O)",
                        //borderColor: "rgba(140, 140, 140, 0.0)",
                        borderWidth: 0,
                        data: [[30, 40]]
                    }
                    ,
                    {
                        maxBarThickness: 50,
                        label: "l3",
                        backgroundColor: "rgba(255, 206, 86,@O)",
                        //borderColor: "rgba(140, 140, 140, 0.0)",
                        borderWidth: 0,
                        data: [[40, 50]]
                    }
                    ,
                    {
                        maxBarThickness: 50,
                        label: "l4",
                        backgroundColor: "rgba(240, 140, 121,@O)",
                        //borderColor: "rgba(140, 140, 140, 0.0)",
                        borderWidth: 0,
                        data: [[50, 60]]
                    }
                    ,
                    {
                        hidden:true,
                        backgroundColor: "rgba(255, 0, 0,@O)",
                        borderWidth: 0,
                        data: [[60, 100]]
                    }
            ]
            ,
                                   
            chart_table
            ,

            maxLE = tuoi.length//max length serri bar chart
            ,

            draw_chart_table = function () {//draw chart_table
                //
                //
                elUI.vaDOUG = [];
                elUI.bgDOUG = [];
                elUI.lblDOUG = [];
                //
                for (var dg = 0; dg < maxLE * 2; dg++) {
                    elUI.vaDOUG[dg] = 0;
                    elUI.bgDOUG[dg] = "";
                };
                //
                chart_table.empty().html(tuoi.reduce(function (re, ax, zm) {
                    //
                    var rng = ax.data[0], fie = elUI.sexMNU == 1 ? 'age' : 'ser';
                    //
                    //
                    elUI.bgDOUG[zm] = ax.backgroundColor.replace('@O', "1");
                    elUI.bgDOUG[maxLE + zm] = elUI.bgDOUG[zm];
                    //
                    elUI.lblDOUG[zm] = zm == 0 ? '<= ' + rng[1] : (zm == tuoi.length - 1 ? '> ' + rng[0] : rng.join(' - '));
                    elUI.lblDOUG[maxLE  + zm] = elUI.lblDOUG[zm];
                    //
                    //
                    //opacity 1;
                    ax.backgroundColor = ax.backgroundColor.replace('@O', "1");
                    //
                    //
                    ax.emps = [[], []];
                    ax.emps.tong = 0;
                    //
                    for (var x = 0; x < 2; x++) {

                        if (elUI.pie_gender.hasOwnProperty(x)) {

                            //each range age
                            ax.emps[x] = elUI.pie_gender[x].filter(function (em) {

                                return (
                                    (zm == 0 &&  em[fie]<=rng[0])//can duoi 10 tuoi 

                                    || rng[0] < em[fie]) && (em[fie] <= rng[1] ||

                                    (zm == tuoi.length - 1 && em[fie] > rng[1]) //cantren 80tuoi
                                    
                                    );
                            });
                            //
                            ax.emps.tong += ax.emps[x].length;
                            //
                            //
                            //doughnut chart data value
                            elUI.vaDOUG[x * maxLE + zm] += ax.emps[x].length;
                            //
                            //
                        };

                    };

                    fie = zm == tuoi.length - 1 && ax.emps.tong > 0;

                    if (zm < tuoi.length - 1 || fie) {
                        //
                        //over max chi hien thi khi du lieu >0
                        //
                        re.unshift(
                            '<tr>' +
                                '<td scope="row" class="dogchartbar text-nowrap">' +
                                    '<span class="dotuoi">' + elUI.lblDOUG[zm] + '</span>' +
                                '    <span class="ml-2 chart_square" style="background:' + ax.backgroundColor + ';"></span>' +
                                '</td>' +

                                '<td>' + (ax.emps[1].length == 0 ? '-' : ax.emps[1].length) + '</td>' +
                                '<td>' + (ax.emps[0].length == 0 ? '-' : ax.emps[0].length) + '</td>' +
                                '<td>' + ax.emps.tong + '</td>' +
                            '</tr>');
                        //
                        //
                    };
                    //
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

                                '<td>' + ( elUI.pie_gender[1] && elUI.pie_gender[1].length ||0) + '</td>' +
                                '<td>' + (elUI.pie_gender[0] && elUI.pie_gender[0].length ||0) + '</td>' +
                                '<td>' + elUI.dbLOD.cnt + '</td>' +
                            '</tr>');


                //debugger;

                //for (var ix= elUI.vaDOUG.length-1; ix > -1 ; ix--) {

                //    if (elUI.vaDOUG[ix] == 0) {
                //        elUI.vaDOUG.splice(ix, 1);
                //        elUI.lblDOUG.splice(ix, 1);
                //        elUI.bgDOUG.splice(ix, 1);
                //    }

                //};


                $.extend(elUI.dbLOD.pie.datasets[0], {
                    labels: elUI.lblDOUG,
                    data: elUI.vaDOUG,
                    backgroundColor: elUI.bgDOUG
                });
                //
                //
                //if ( elUI.isBK[]
                chart_table.closest('#tabBODY_JS_nhapxuat')[(elUI.isBK>0 ? 'add' : 'remove') + 'Class']('canbackup');
                //
            }

            ,
            dbLOD_RST = function (v1) {
                var gender = ["Nu", 'Nam']
                    ,
                    pie_ARR = [[0, 0]]
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
                        //tinh tham nien...
                        tm = d.hireday;
                        if (tm) {
                            tm = new Date(tm);
                            if (tm instanceof Date && !isNaN(tm)) {
                                tm = Math.floor((new Date() - tm.getTime()) / 3.15576e+10);
                            };
                        };
                        //
                        d.ser = tm || 0;//seniority-experience
                        //
                        //
                        return rst;
                        //
                    }, {});
                //
                elUI.dbLOD = {
                    cnt: v1.length
                    ,
                    pie: {
                        labels: [],
                        datasets: [
                            {
                                //hoverBorderColor: [
                                //    "#eee", "#eee"
                                //],
                                borderWidth: 0,
                                weight: 1,
                            }
                            ,
                            {//space between pie & doughnut
                                //https://stackoverflow.com/questions/43202276/chart-js-v2-space-between-doughnut-inside-doughnut
                                weight: 0.2
                            }
                            ,
                            {
                                labels: gender
                                ,
                                data: pie_ARR[0],//[1, 1],//40, 60

                                backgroundColor: [
                                    "rgba(255,105,180,1)",//hotpink
                                    "#36A2EB"
                                ],
                                //hoverBorderColor: [
                                //    "#eee", "#eee"
                                //],
                                borderWidth: 0
                            }

                        ]
                    }
                };
                //
                //draw table xong moi toi chart label
                draw_chart_table();
                //
            }
            ,

            dbLOD = function () {

                if (elUI.dbLOD) {
                    //
                    return elUI.dbLOD;
                    //
                } else {

                    var def = $.Deferred();

                    $mainO.svrDAT({ uri: '/api/empprofile', "act": 'SEL', "qry": ["acno", "birthday", "hireday", "gender", "offdate","secid","posid"] }).then(function (v1) {
                        //
                        //xac dinh tinh trang nut backup ...
                        elUI.isBK = JSON.parse(v1[1]).KY || v1[0].length;
                        //
                        //
                        dbLOD_RST(v1[0]);
                        //
                        def.resolve(elUI.dbLOD);
                        //
                    }, function (error) {
                        //
                        dbLOD_RST([]);
                        //
                        def.resolve(elUI.dbLOD);
                        //
                    });
                    //
                    return def.promise();
                    //
                };
            }

            ,

            bkSYS = function () {
                //
                $mainO.svrDAT({

                    uri: '/api/headermaster', "act": 'GET', 'qry': 'backup'

                }).done(function (v1) {
                    //
                    //debugger;
                    //
                    var filename = "apphrm.dat";

                    var contentType = 'application/octet-stream';

                    var blob = new Blob([v1.utoa()], { 'type': contentType });


                    ////
                    //document.body.removeChild(a);
                    //
                    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                        window.navigator.msSaveOrOpenBlob(blob, filename);
                    } else {
                        var a = document.createElement('a');
                        a.href = window.URL.createObjectURL(blob);
                        a.download = filename;
                        a.click();
                    };
                    //
                    srclocked(false);
                    //
                }).fail(function (err) {

                });
                //
            }
            ,

            resSYS = function (fi) {
                //
                var reader = new FileReader();
                reader.readAsText(fi);
                reader.onload = function () {
                    //
                    srclocked(true);
                    //
                    devDlg(1, _La$N('js_001_27', aLAN), null, {
                        cb: function (a) {
                            //
                            srclocked(false);
                            //
                        }
                    }).show().done(function (rst) {

                        if (rst == 1) {

                            $mainO.svrDAT({

                                uri: '/api/headermaster', "act": 'GET', 'qry': 'restore', 'dat': reader.result.atou()

                            }).done(reLOA);

                        };

                    });
                    //
                };
                //
                reader.onerror = function () {
                    console.log(reader.error);
                };
                //
            }

            ,

            laZY = {

                job: function () {

                    var heightOffset = 10,
                        lazyLOD = laZY.lazyLOD,
                        frmEL = laZY.frmEL;


                    //console.log(lazyLOD.length);

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
                                        $.when(laZY[p[0]](frmEL, p[2])).done(next);
                                        //
                                    }.bind([fnZY, ei, el]));
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
                    var tree_cakip = frmEL.find('.tree_cakip').removeClass('d-none'),
                        show_hlp = function (e) {

                            //e.preventDefault(); // Now link won't go anywhere
                            // e.stopPropagation(); // Now the event won't bubble up

                            var puhwnd = admin$.popup({ a: 'd', t: 'SHIFT - HC', cBu:1, fw: 0 })


                                , btndone = puhwnd.find('#popupdone')
                                        , btndonefn = function (state) {
                                            btndone[(state ? 'add' : 'remove') + 'Class']('btn-primary').prop('disabled', !state);
                                        };


                            puhwnd.find('.modal-dialog').addClass('modal-dialog-centered modal-dialog-zoom pu_fullW my-0')
                                    .css({ 'max-width': '800px' });


                            var fuckScroll = puhwnd.find('.modal-body').addClass('pefectS_R'),
                                goSample = $('<div style="background-color:rgb(255, 255, 255);position:absolute;top:0;bottom:0;left:0;right:0">' +
                                            '<div class="mobile_mode" style="position:absolute;top:0;bottom:0;left:0;right:0"></div></div>');

                            var noidung = function () {
                                //
                                fuckScroll.append(goSample);

                                _gsC(srcpf$ + '/media/vendor/GoJS/release/gojstrial.js', 'js', function () {

                                    _gsC(srcpf$ + '/media/js/tikestep_s1_gojs.js' + src$id, 'js', function () {
                                        //
                                        goSample = goSample.find(".mobile_mode");
                                        //
                                        var _LAN = JSON.parse ('eyJqc18wMDRfMjUiOiJNw6MiLCJqc18wMDRfMjYiOiJUw6puIiwianNfMDA0XzI3IjoiVGjhu51pIGdpYW4iLCJqc18wMDRfMzIiOiJU4buVbmcgdGjhursiLCJqc18wMDRfMzMiOiJOaMOibiB2acOqbiIsImpzXzAwNF8xIjoiVOG6oW8gTeG7m2kgQ2EgS8OtcCIsImpzXzAwNF8yIjoiQ2jhu41uIENhIEvDrXAgVOG7qyBEYW5oIFPDoWNoIiwianNfMDA0XzMiOiLEkOG7k25nIMO9IiwianNfMDA0XzQiOiJMxrB1IGzhuqFpIiwianNfMDA0XzUiOiI8YnIvPjxhIGhyZWY9amF2YXNjcmlwdDp2b2lkKCYjMzk7MCYjMzk7KT48c3Ryb25nPlBoacOqbiBi4bqjbiBjw6BpIMSR4bq3dCBXaW5kb3dzIC88L3N0cm9uZz48L2E+IDxhIGhyZWY9amF2YXNjcmlwdDp2b2lkKCYjMzk7MCYjMzk7KT5UaGnhur90IGvhur8gZ2nhuqNpIHBow6FwICZhbXA7IFBo4bqnbiBt4buBbSAvPC9hPiA8YSBocmVmPWphdmFzY3JpcHQ6dm9pZCgmIzM5OzAmIzM5Oyk+VGhp4bq/dCBi4buLIGNo4bqlbSBjw7RuZzwvYT4iLCJqc18wMDRfNiI6IljDs2EgdOG6pXQgY+G6oyBjYSBrw61wIHRyb25nIGRhbmggc8OhY2guIiwianNfMDA0XzciOiJYw7NhIGNhIGvDrXAuIiwianNfMDA0XzgiOiJUaeG6v3AgdOG7pWMiLCJqc18wMDRfOSI6IlRy4bufIGzhuqFpIiwianNfMDA0XzEwIjoiU8ahIMSQ4buTIENhIEvDrXAiLCJqc18wMDRfMTEiOlsiVHLGsOG7nW5nIG7DoHkgbMOgIGLhuq90IGJ14buZYy4iLCJIw6N5IG5o4bqtcCDDrXQgbmjhuqV0IDAyIGvDvSB04buxLiIsIktow7RuZyBo4bujcCBs4buHLiIsIlRyw7luZyBtw6MhIl0sImpzXzAwNF8xMiI6WyJUaOG6oyB04bqtcCB0aW4gY2jhu6lhIGThu68gbGnhu4d1IGfhuqF0IHRo4bq7IGNo4bqlbSBjw7RuZyB2w6BvIMSRw6J5LCBob+G6t2MgbmjhuqVwIGNodeG7mXQgdsOgbyDEkeG7gyBjaOG7jW4gdOG6rXAgdGluIHThuqNpIGzDqm4gKC5kYXQsIC54bHN4LCAueGxzLCAuY3N2LCAudHh0KSJdLCJqc18wMDRfMTMiOlsiVOG7qyBuZ8OgeTogIiwixJDhur9uIG5nw6B5OiAiLCJOaOG7jyBuaOG6pXQiLCJM4bubbiBuaOG6pXQiXSwianNfMDA0XzE0IjpbIkNo4buNbiBraG/huqNuZyB0aOG7nWkgZ2lhbiAuLi4iLCJEw7luZyDEkeG7gyBnaeG7m2kgaOG6oW4gbOG6oWkgZOG7ryBsaeG7h3UgdGjhursgdHJvbmcga2hv4bqjbmcgdGjhu51pIGdpYW4gVOG7qyBuZ8OgeSAtIMSQ4bq/biBuZ8OgeS4iLCJDaOG7jW4gbmjDom4gdmnDqm4gLi4uIiwiTOG7sWEgY2jhu41uIG5ow6JuIHZpw6puIGPhuqduIHTDrW5oIGPDtG5nICht4bq3YyDEkeG7i25oIGtow7RuZyBjaOG7jW4gbMOgIHTDrW5oIHThuqV0IGPhuqMgZGFuaCBzw6FjaCkiXSwianNfMDA0XzE1IjpbIkNo4buNbiB04burIGzGsHUgdHLhu68iLCJEYW5oIHPDoWNoIGzGsHUgdHLhu68iLCJUw6puIHThu4dwIiwiVGjhu51pIGdpYW4iLCJU4buVbmcgY+G7mW5nOiIsIkThu68gbGnhu4d1IGNo4bqlbSBjw7RuZyDEkcOjIGPDsyB0aGF5IMSR4buVaSBzbyB24bubaSBsxrB1IHRy4buvIGfhu5FjPGJyLz5OaOG6pW4gPGkgY2xhc3M9J2NvbnRleHQtaGVscCB0aS1tb3VzZS1hbHQnPjwvaT4gT0sgxJHhu4MgbMawdSB0cuG7ryB2w6AgdGjhu7FjIGhp4buHbiB0w61uaCBs4bqhaS4iXSwianNfMDA0XzE2IjpbIlZ1aSBsw7JuZyB4w6FjIG5o4bqtbiBsw6A6IiwiQuG6oW4gdGjhuq10IHPhu7EgbXXhu5FuIGLhu48gcXVhIGtow7RuZyBsxrB1IHRy4buvIFThu4dwIGhp4buHbiB04bqhaT8iLCJC4bqhbiBjw7MgdGjhuq10IHPhu7EgbXXhu5FuIHjDs2EgbMawdSB0cuG7ryDEkWFuZyBjaOG7jW4/IiwiQuG6oW4gdGjhuq10IHPhu7EgbXXhu5FuIGLhu48gcmEgKGtow7RuZyB4w7NhIGto4buPaSBsxrB1IHRy4buvKSIsIkLhuqFuIHRo4bqtdCBz4buxIG114buRbiBi4buPIHThuqV0IGPhuqMgKGtow7RuZyB4w7NhIGto4buPaSBsxrB1IHRy4buvKSIsIkLhuqFuIHRo4bqtdCBz4buxIG114buRbiBi4buPIHF1YSBz4buxIHRoYXkgxJHhu5VpIHbDoCB0cuG7nyB24buBICBi4bqjbiBn4buRYz8iXSwianNfMDA0XzE3IjpbIlThu4dwIG7DoHkgxJHDoyDEkcaw4bujYyBsxrB1IC4uLiA8YnIvPlZ1aSBsw7JuZyB4w6FjIG5o4bqtbiBu4bq/dSBi4bqhbiBtdeG7kW4gY+G6rXAgbmjhuq10IG3hu5tpIiwiROG7ryBsaeG7h3UgY8OzIHRoYXkgxJHhu5VpIiwiQuG6oW4gY8OzIHRo4buDIEzGsHUgbOG6oWkgaG/hurdjIEjhu6d5IGLhu48gc+G7sSB0aGF5IMSR4buVaSBuw6B5IGLhurFuZyBjw6FjaCBuaOG6pW4gPGkgY2xhc3M9J2NvbnRleHQtaGVscCB0aS1tb3VzZS1hbHQnPjwvaT4gdsOgbyBt4buZdCB0cm9uZyAwMiBuw7p0IGzhu4duaCBiw6puIHRyw6puIC4uLiIsIkLhuqFuIGPDsyB0aOG7gyBI4buneSBi4buPIHPhu7EgdGhheSDEkeG7lWkgbsOgeSBi4bqxbmcgY8OhY2ggbmjhuqVuIDxpIGNsYXNzPSdjb250ZXh0LWhlbHAgdGktbW91c2UtYWx0Jz48L2k+IHbDoG8gbsO6dCBs4buHbmggYsOqbiB0csOqbiAuLi4iXSwianNfMDA0XzE4IjpbIkPhuqduIHF1eeG6v3QgxJHhu4tuaCBj4bunYSBC4bqhbiEiLCI8ZGl2IGNsYXNzPSd0ZXh0LWNlbnRlcic+PHA+ROG7ryBsaeG7h3UgxJHDoyBjw7MgdGhheSDEkeG7lWkgc28gduG7m2kgYuG6o24gZ+G7kWMuPC9wPkLhuqFuIHZ1aSBsw7JuZyBuaOG6pW4gPGkgY2xhc3M9J2NvbnRleHQtaGVscCB0aS1tb3VzZS1hbHQnPjwvaT4gdsOgbyBt4buZdCB0cm9uZyBjw6FjIG7DunQgbOG7h25oIGLDqm4gZMaw4bubaSAuLi48L2Rpdj4iLCJYZW0ga+G6v3QgcXXhuqMgY8WpIiwiQ+G6rXAgbmjhuq10ICYgVMOtbmgiXSwianNfMDA0XzE5IjpbIsSQYW5nIHTDrW5oIGPDtG5nIiwiQuG6oW4gY8OzIHRo4buDIGThu6tuZyBs4bqhaSBi4bqxbmcgY8OhY2ggbmjhuqVuIG7DunQg4oCcIFN0b3Ag4oCdIC4uLiIsIlF1eSDGsOG7m2MgdMOtbmgiLCJC4bqhbiBjw7MgdGjhu4MgdGhheSDEkeG7lWkgcXV5IMaw4bubYyB2w6AgbmjhuqVuIG7DunQg4oCcIFTDrW5oIGzhuqFpIOKAnSIsIlTDrW5oIGzhuqFpIiwiVnVpIGzDsm5nIHjDoWMgbmjhuq1uIHRyxrDhu5tjIGtoaSBUw61uaCBs4bqhaS4iLCJYdeG6pXQga+G6v3QgcXXhuqMiLCJU4bqjaSBs4bqhaSBr4bq/dCBxdeG6oyJdLCJqc19nb2pzIjpbIkzhu4pDSCBDw5RORyBUw4FDIFRV4bqmTiIsIlRo4bupIDIiLCJUaOG7qSAzIiwiVGjhu6kgNCIsIlRo4bupIDUiLCJUaOG7qSA2IiwiVGjhu6kgNyIsIkMuTmjhuq10IiwiVOG7sSDEkeG7mW5nIHTDrW5oIE9UIG7hur91IHbDoG8gc+G7m20gaMahbjogIiwiVOG7sSDEkeG7mW5nIHTDrW5oIE9UIG7hur91IHJhIHbhu4EgdHLhu4UgaMahbjogIiwiR2nhu50gdsOgbzogIiwiR2nhu50gcmE6ICIsIlPhu5EgR2nhu50gY8O0bmcgbMOgbSB2aeG7h2M6ICIsInF1eSDEkeG7lWkgcmEgTmfDoHkgY8O0bmc6ICIsIkPDsyBwaMOibiBjw7RuZyBnaeG7nSBsw6BtIHZp4buHYzogIiwiTMOgIG5nw6B5IG5naOG7iSB0deG6p246ICIsIk7hur91IGPDsyBuaGnhu4F1IHRo4bq7IHJhIHRow6wgdMOtbmggdGjhurs6IiwiTuG6v3UgY8OzIG5oaeG7gXUgdGjhursgdsOgbyB0aMOsIHTDrW5oIHRo4bq7OiIsIlRI4bucSSBHSUFOIE5HSOG7iCBHSeG7rkEgQ0EiLCJTYXUgZ2nhu50gdsOgbyAocGjDunQpOiAiLCJU4buVbmcgc+G7kSBwaMO6dCBuZ2jhu4k6ICIsIkLhu48gcXVhIHRoYW0gc+G7kSBuw6B5IG7hur91IGdpw6EgdHLhu4sgPS0xXG5DaOG7iSB0w61uaCBraGkgZ2nDoSB0cuG7iyA+PTAgcGjDunQiLCJLaeG7g20gdsOgbz8iLCJLaeG7g20gcmE/IiwiR2nhu50gYuG6r3QgxJHhuqd1IG5naOG7iSIsIkjhur90IGdp4budIG5naOG7iSJdLCJqc19nb2pzXzEiOiJEaSBjaHV54buDbiBzxqEgxJHhu5MiLCJqc19nb2pzXzIiOiJN4buRYyAwIGdp4budIiwianNfZ29qc18zIjpbeyJpZCI6IjAiLCJkZXMiOiJz4bubbSBuaOG6pXQifSx7ImlkIjoiMSIsImRlcyI6InRy4buFIG5o4bqldCJ9XSwianNfZ29qc180IjpbIlThu5VuZyB0aOG7nWkgZ2lhbiIsIktob+G6o25nIHRo4budaSBnaWFuIHTDrW5oIFRo4bq7LVbDoG8gaOG7o3AgbOG7hyIsIktob+G6o25nIHRo4budaSBnaWFuIHTDrW5oIFRo4bq7LVbDoG8tVHLhu4UiLCJLaG/huqNuZyB0aOG7nWkgZ2lhbiB0w61uaCBUaOG6uy1W4buBLVPhu5ttIiwiS2hv4bqjbmcgdGjhu51pIGdpYW4gdMOtbmggVGjhurstUmEgIGjhu6NwIGzhu4ciLCJwaMO6dCJdLCJqc19nb2pzXzUiOlsiVsOgbyIsIlRy4buFIiwiU+G7m20iLCJSYSJdLCJqc19nb2pzXzYiOlsiWMOhYyBOaOG6rW4gVHLGsOG7m2MgS2hpIFjDs2E/IiwiQuG6oW4gY8OzIGNo4bqvYyBjaOG6r24gbMOgIG114buRbiB4w7NhIENhIGvDrXAgxJFhbmcgY2jhu41uPyIsIkLhuqFuIGPDsyBjaOG6r2MgY2jhuq9uIGzDoCBtdeG7kW4geMOzYSB04bqldCBj4bqjIENhIGvDrXAiXSwianNfZ29qc183IjpbIljDoWMgTmjhuq1uIEzGsHUgVGhheSDEkOG7lWkgVGhhbSBT4buRIENhIEvDrXA/IiwiVOG7sSDEkeG7mW5nIEzGsHUga2jDtG5nIGPhuqduIGjhu49pIiwiKELhuq90IMSR4bqndSB0w61uaCB0aOG7nWkgZ2lhbiB2w6BvKSIsIihHaeG7nSB2w6BvIHF1eSDEkeG7i25oKSIsIihC4bqvdCDEkeG6p3UgdMOtbmggdsOgbyB0cuG7hSkiLCIoS+G6v3QgdGjDumMgdMOtbmggZ2nhu50gdsOgbykiLCIoQuG6r3QgxJHhuqd1IHTDrW5oIHRo4budaSBnaWFuIHJhKSIsIihN4buRYyB0aOG7nWkgZ2lhbiB0w61uaCB24buBIHPhu5ttKSIsIihHaeG7nSByYSBxdXkgxJHhu4tuaCkiLCIoS+G6v3QgdGjDumMgdMOtbmggZ2nhu50gcmEpIl0sImpzXzAwM18xIjoixJDDs25nIiwianNfMDAzX29rIjoiVGhhbyB0w6FjIGhvw6BuIHThuqV0LiIsImpzXzAwM19lcnIiOiLEkMOjIGPDsyBs4buXaSwgdnVpIGzDsm5nIHRo4butIGzhuqFpICEiLCJqc18wMDNfaGVscCI6IlRy4bujIGdpw7pwIiwianNfMDAzX2MiOlt7ImlkIjo0LCJkaXMiOiJUxINuZyBjYSJ9LHsiaWQiOjMxLCJkaXMiOiJDYSBrw61wIn0seyJpZCI6MzQsImRpcyI6IkjhuqFuIG3hu6VjIEPDtG5nIGjhu4cgdGjhu5FuZyJ9XSwianNfMDAxXzE1IjoiPGJyLz48YSBocmVmPWphdmFzY3JpcHQ6dm9pZCgmIzM5OzAmIzM5Oyk+PHN0cm9uZz5QaGnDqm4gYuG6o24gY8OgaSDEkeG6t3QgV2luZG93cyAvPC9zdHJvbmc+PC9hPiA8YSBocmVmPWphdmFzY3JpcHQ6dm9pZCgmIzM5OzAmIzM5Oyk+VGhp4bq/dCBr4bq/IGdp4bqjaSBwaMOhcCAmYW1wOyBQaOG6p24gbeG7gW0gLzwvYT4gPGEgaHJlZj1qYXZhc2NyaXB0OnZvaWQoJiMzOTswJiMzOTspPlRoaeG6v3QgYuG7iyBjaOG6pW0gY8O0bmc8L2E+IiwianNfMDAxXzE2IjoiVMOqbiBuaMOibiB2acOqbiIsImpzXzAwMV8xNyI6Ik3hu58gcmEgaOG6v3QiLCJqc18wMDFfMTgiOiJUaHUgZ+G7jW4gbOG6oWkiLCJqc18wMDFfMTkiOiJU4buVbmcgc+G7kSIsImpzXzAwMV8yMCI6IsSQYW5nIHThuqNpIiwianNfMDAxXzIxIjpbIk7hu68iLCJOYW0iXSwianNfMDAxXzIyIjoiTsSDbSIsImpzXzAwMV8yMyI6IsSQxINuZyBLw70gQ2jhuqVtIEPDtG5nIiwianNfMDAxXzI0IjoiTmjDs20gdGhlbyIsImpzXzAwMV8yNSI6IlZ1aSBsw7JuZyB4w6FjIG5o4bqtbiBi4bqhbiB0aOG6rXQgc+G7sSBtdeG7kW4geMOzYSA/IiwianNfMDAxXzI2IjoiVOG6o2kgbOG6oWkiLCJqc18wMDFfMjciOiJWdWkgbMOybmcgeMOhYyBuaOG6rW4gdHLGsOG7m2Mga2hpIHRp4bq/cCB04bulYyB0aOG7sWMgaGnhu4duLiIsImpzXzAwMV8yOCI6IuG7kiAhIMSQ4buLbmggZOG6oW5nIOG6o25oIGtow7RuZyBo4bujcCBs4buHLiIsImpzXzAwMV8yOSI6IljDs2EgdOG6pXQgY+G6oyDEkWFuZyBjaOG7jW4iLCJqc18wMDFfMzAiOiJRdeG6o24gbMO9IMSQxINuZyBuaOG6rXAiLCJqc18wMDdfMSI6Ik3DoyBBQyIsImpzXzAwN18yIjoiQ+G6p24gbmjhuq1wIG3DoyBBQyIsImpzXzAwN19hY25vIjoiVHLDuW5nIG3DoyBBQyIsImpzXzAwN18zIjoiTcOjIE4udmnDqm4iLCJqc18wMDdfNCI6IkPhuqduIG5o4bqtcCBtw6MgTmjDom4gdmnDqm4iLCJqc18wMDdfZW1wY29kZSI6IlRyw7luZyBtw6MgTmjDom4gdmnDqm4iLCJqc18wMDdfNSI6Ikjhu40gJiBsw7N0IiwianNfMDA3XzYiOiJD4bqnbiBuaOG6rXAgSOG7jSAmIGzDs3QiLCJqc18wMDdfNyI6IlTDqm4gTi52acOqbiIsImpzXzAwN184IjoiQ+G6p24gbmjhuq1wIFTDqm4gbmjDom4gdmnDqm4iLCJqc18wMDdfOSI6Ik5nw6B5IHNpbmgiLCJqc18wMDdfMTAiOiJOZ8OgeSB2w6BvIiwianNfMDA3XzExIjoixJDDoyBjw7MgbOG7l2ksIHZ1aSBsw7JuZyBraeG7g20gdHJhIGzhuqFpICEiLCJqc18wMDdfMTIiOiJHaeG7m2kgdMOtbmgiLCJqc18wMDdfMTMiOiJI4buTIFPGoSBOaMOibiBWacOqbiIsImpzXzAwN18xNCI6IlBow7JuZyBiYW4iLCJqc18wMDdfMTUiOiJDaOG7qWMgduG7pSIsImpzXzAwN18xNiI6IkLhurFuZyBj4bqlcCIsImpzXzAwN18xNyI6IkjDtG4gbmjDom4iLCJqc18wMDdfMTgiOiJUaMO0aSB2aeG7h2MiLCJqc18wMDdfMTkiOiLEkGnhu4duIHRob+G6oWkiLCJqc18wMDdfMjAiOiJT4buRIENNTkQiLCJqc18wMDdfMjEiOiJOZ8OgeSBj4bqlcCIsImpzXzAwN18yMiI6Ik7GoWkgY+G6pXAiLCJqc18wMDdfMjMiOiLEkOG7i2EgY2jhu4kiLCJqc18wMDdfMjQiOiJHaGkgY2jDuiIsImpzXzAwN18yNSI6IlThuqFvIG3hu5tpIiwianNfMDA3XzI2IjoiU+G7rWEiLCJqc18wMDdfMjciOiJYw7NhIiwianNfMDA3XzI4IjoiSMOsbmgg4bqjbmgiLCJqc18wMDdfMjkiOiJMxrB1IHRy4buvIiwianNfMDA3XzMwIjoiQuG7jyBxdWEiLCJqc18wMDdfMzEiOiJYw6FjIG5o4bqtbiB4w7NhIE5ow6JuIHZpw6puIiwianNfMDA3XzAzMSI6IkzGsHUgw70gbMOgIGLhuqFuIGtow7RuZyB0aOG7gyBwaOG7pWMgaOG7k2kgbmjDom4gdmnDqm4gYuG7iyB4w7NhICEiLCJqc18wMDdfMzIiOiJIb8OgbiB04bqldCB4w7NhIG5ow6JuIHZpw6puICEiLCJqc18wMDdfMzMiOiJC4bqhbiBjaOG6r2MgY2jhuq9uIGzDoCBtdeG7kW4geMOzYSBow6xuaCBOaMOibiB2acOqbj8iLCJqc18wMDdfMzQiOiJUaGFvIHTDoWMgaG/DoG4gdOG6pXQuIiwianNfMDA3XzM1IjoiVnVpIGzDsm5nIMSRaeG7gW4gxJHhuqd5IMSR4bunIHRyxrDhu51uZyBj4bqnbiB0aGnhur90LiIsImpzXzAwN18zNiI6IkNo4buNbiBuaMOibiB2acOqbiIsImpzXzAwN18zNyI6IsSQw7NuZyIsImpzX3Ukcl9pbmZvIjoiIn0='.atou())
                                        ,
                                        GOJS = apisvr.goSHIFT(_LAN, btndonefn, true, hasUA, goSample[0]),
                                            nD = JSON.parse(atob('eyJpZCI6Ik9IIiwiaSI6W3sidCI6Ik9IIn0sW10seyJ0IjoiSOBuaCBjaOFuaCJ9LHsidCI6IjA4OjAwIn0seyJ0IjoiMTc6MDAifV0sIl90IjoiZl8wMDRfMTAifQ==')),
                                            __id;
                                        //
                                        GOJS.show(nD, __id);
                                        //
                                        if (!Main.isMobile() ){
                                            new PerfectScrollbar(goSample.find('>div:last-child')[0], { });
                                        };
                                        //
                                        //
                                    }, 'tikestep_s1_gojs.js');

                                }, 'gojs.js');
                                //
                                return fuckScroll[0];
                                //
                            };
                            //
                            btndone.remove();
                            //
                            //
                            puhwnd.one('shown.bs.modal', function () {

                                noidung();
                            });

                            //}).one('hide.bs.modal', function () {
                            //    //fuckScroll.destroy();
                            //});
                            setTimeout(function () {
                                puhwnd.modal('show');
                            }, 1);
                            //
                        };

                    //tree_cakip.empty();

  //                  new Timesheet(

  //                      $('<div></div>').insertBefore(tree_cakip)[0]

  //                      , 2002, 2013, [
  //['2002', '09/2002', 'A freaking awesome time', 'lorem'],
  //['06/2002', '09/2003', 'Some great memories', 'ipsum'],
  //['2003', 'Had very bad luck'],
  //['10/2003', '2006', 'At least had fun', 'dolor'],
  //['02/2005', '05/2006', 'Enjoyed those times as well', 'ipsum'],
  //['07/2005', '09/2005', 'Bad luck again', 'default'],
  //['10/2005', '2008', 'For a long time nothing happened', 'dolor'],
  //['01/2008', '05/2009', 'LOST Season #4', 'lorem'],
  //['01/2009', '05/2009', 'LOST Season #4', 'lorem'],
  //['02/2010', '05/2010', 'LOST Season #5', 'lorem'],
  //['09/2008', '06/2010', 'FRINGE #1 & #2', 'ipsum']
  //                  ]);



                  
                    tree_cakip.find('li:has(ul)').addClass('parent_li')
                    .off('click').on('click', 'div.btn', function (e) {

                        e.stopPropagation();

                        if ($(e.currentTarget).attr('mnu') == "mnu_edit_shift") {

                            const p = e.currentTarget.getBoundingClientRect(),
                                pnl = tree_cakip.closest('.row').prev()
                                , n = pnl

                                .off('shown.bs.dropdown')
                                .on('shown.bs.dropdown', function (a) {
                                    //debugger;
                                    //divfrm.off('shown.bs.dropdown');
                                    var ul = $(a.relatedTarget),
                                        dogDropDw = ul.data()['bs.dropdown']._popper;
                                    //
                                    //
                                    dogDropDw.options.onUpdate = function () {
                                        pnl.trigger('click.bs.dropdown.data-api');
                                        dogDropDw.destroy();
                                    };

                                }).parent()[0].getBoundingClientRect();
                            //
                            pnl.find('>div:first-child').css({
                                left: p.left - n.left
                                , top: p.top - n.top - 10
                                , height: p.height + 10
                            })
                            .off('click').on('click', 'a', function (x) {
                                if ($(x.currentTarget).attr('mnu') == "sua_shift") {
                                    show_hlp(x);
                                }
                            })
                           .trigger('click.bs.dropdown.data-api');

                            

                        };
   
                    }).find(' > span').attr('title', 'Collapse this branch');
                    //
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
                        if (!laZY.tree_scrollPerfect) {
                            //scroll prefect tree ca kip
                            laZY.tree_scrollPerfect = new PerfectScrollbar(tree_cakip.parent()[0], {
                                suppressScrollX: true
                            });
                        };
                    };
                    //
                    //
                    tree_cakip.closest('.csspinner').removeClass('csspinner');
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

                    //debugger;

                    var set = 1, clW = 400, clH = 400, ofsclH = -20,
                        clX = function () {
                            return clW / 2;
                        }
                        ,
                        clY = function () {
                            return ofsclH + clH / 2;
                        };



                    clY._shiftARC = frmEL.find(".dog_clock");
                    clY._shiftARC.parent().removeClass('invisible').closest('.csspinner').removeClass('csspinner');


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


                    const fuk_shift_clock = frmEL.find(".shift_clock b");

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

                        //debugger;

                        /*$("div b:nth-child(1)")*/ fuk_shift_clock.eq(0).text(hrs);
                        /*$("div b:nth-child(2)")*/ fuk_shift_clock.eq(1).text(min);
                        /*$("div b:nth-child(3)")*/ fuk_shift_clock.eq(2).text(sec);
                        /*$("div b:nth-child(4)")*/ fuk_shift_clock.eq(3).text(tz);
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

                        var numbers = run_clock.find('.shift_numbers')[0];
                        var ticks = run_clock.find('.shift_ticks')[0];

                        var mark;
                        var rotation;
                        var number;
                        var angle;

                        hands.second = (dtg.getSeconds() + dtg.getMilliseconds() / 1000) / 60;
                        hands.minute = (dtg.getMinutes() + hands.second) / 60;
                        hands.hour = (dtg.getHours() % 12 + hands.minute) / 12;

                        for (var key in hands) {
                            run_clock.find('.shift_' + key).attr('transform', "rotate(" + (hands[key] * 360) + ")");
                        };


                        function cE(type) {
                            return document.createElementNS("http://www.w3.org/2000/svg", type);
                        };

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

                            _gsC('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js', 'js', function () {// ,

                                //_gsC('https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/0.7.0/chartjs-plugin-datalabels.js', 'js', function () {
                                    //
                                    //
                                    def.resolve();
                                    //
                                    //
                                //}, '');

                            }, 'chart.min.js');

                        } else {
                            _gsC(deV.chartjs, 'js', function () {// https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.8.2/chart.min.js

                                //_gsC('https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-datalabels/2.2.0/chartjs-plugin-datalabels.min.js', 'js', function () {// ,
                                    //
                                    //Chart.register(ChartDataLabels);
                                    //
                                    def.resolve();
                                    //
                                }, '');

                            //}, 'chart.min.js');
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
                                radius:140,
                                layout: {
                                    padding: {
                                        left: 40,
                                    //    right: 0,
                                    //    top: 30,
                                    //    bottom: 0
                                    }
                                    //padding:40
                                }
                                ,
                                responsive: true,
                                maintainAspectRatio: false,

                                showAllTooltips: true,
                                //animation: false,
                                animation: {
                                    duration: 300,
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
                                    tooltip:{
                                        enabled:false
                                    }
                                    ,
                                    datalabels: {
                                        //anchor: 'end',
                                        //align: 'end',

                                        //color: 'white',
                                        textAlign: 'center',
                                        formatter: function (value, ctx) {
                                            //if (context.datasetIndex == 0 && context.dataIndex == 0) {
                                            //    return value[1]>value[0]?'< ' + value[1]:'';
                                            //} else {
                                            //    return value.join(' - ');
                                            //}
                                            if (ctx.datasetIndex != 1) {//space doughnut & pie
                                                var index = ctx.dataIndex;
                                                var label = ctx.chart.data.datasets[ctx.datasetIndex].labels[index];
                                                //
                                                //if (ctx.datasetIndex == 2) {
                                                //    //return 'Nam 4/100%\nNam 4/100%';//context.chart.data.labels[context.dataIndex];
                                                    return value == 0 ? '' : label + '\n(' + value + ')';
                                                //} else {
                                                //    return value == 0 ? '' : label;
                                                //};
                                            };
                                        }
                                        , labels: {
                                            position: 'outside'
                                        }
                                    }

                                    ,
                                    legend: {
                                        display: true,
                                        position: "right", align: "start", // position: "top", /align: "end", nam ben phai, xep horizon
                                       
                                        //position: "bottom",
                                        //align: "center",
                                        fontFamily: "Arial",
                                        //fontColor: "red",
                                        labels: {

                                            //padding: 30,

                                            usePointStyle: false,
                                            //fontColor: "red",
                                            generateLabels: function (chart) {
                                                //debugger;

                                                const data = chart.data.datasets;

                                                if (data.length > 1 && data[2].labels) {

                                                    //const {labels: {pointStyle}} = chart.legend.options;
                                                    var re = [];
                                                    //
                                                    for (var i = data[2].labels.length - 1; i > -1; i--) {

                                                        var label = data[2].labels[i],
                                                            meta = chart.getDatasetMeta(2),
                                                            style = meta.controller.getStyle(i);

                                                        //debugger;
                                                        //console.log('style', Chart.defaults.global.defaultFont);

                                                        re.push( {

                                                            text: label + ' - ' + data[2].data[i],

                                                            fontColor: cS$.c0lor=='dark'?'#ddd': undefined,

                                                            fillStyle: style.backgroundColor,

                                                            strokeStyle: style.borderColor,

                                                            lineWidth: style.borderWidth,

                                                            //pointStyle: chart.legend.options.pointStyle,

                                                            hidden: !chart.getDataVisibility(i),

                                                            //index:i==0?1:0,// (data[2].labels.length-1-i)//de nu truoc nam
                                                            //datasetIndex: i==0?1:0//(data[2].labels.length - 1 - chart.index)

                                                        });
                                                        //
                                                    };
                                                    //
                                                    return re;
                                                    //
                                                    //return data[2].labels.map(function (label, i) {
                                                    //    debugger;
                                                    //});
                                                }
                                                return [];
                                            }
                                        }
                                    }
                                }
                            }

                            ,

                            plugins: [

                               $.extend( {
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
                                    ,
                                    beforeDraw: function (chart, a, b, c) {
                                        //
                                        //https://github.com/chartjs/Chart.js/issues/6195
                                        var s = this;
                                        //debugger;
                                        const datasetMeta = chart.getDatasetMeta(0),
                                            innerRadius = datasetMeta.controller.innerRadius,
                                            outerRadius = datasetMeta.controller.outerRadius,
                                            heightOfItem = outerRadius - innerRadius,
                                            countOfData = chart.getDatasetMeta(0).data.length,
                                            additionalRadius = Math.floor(heightOfItem / countOfData);
                                        //
                                        datasetMeta.data.forEach(function (dataItem,i) {
                                            //
                                            //me kiep ie11
                                            var d = (dataItem._view || dataItem);
                                            //
                                            if (i >= maxLE) {//bop nho doughnut Nam(male)
                                                d.outerRadius = innerRadius + additionalRadius * 10;
                                                d.innerRadius = innerRadius + 10;//manual set value 10
                                            };
                                        });
                                        //
                                    }
                               },Main._plugCHRT.PLUG('pie_outside'))

                            ]

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

                                piectx.closest('.csspinner').removeClass('csspinner');
                                //
                            });
                            //
                            return def.promise();
                        };
                        //
                        piectx.removeClass(rCla.join(' ')).addClass(rCla[b.cnt == 0 ? 1 : 0]);
                        piectx.next().removeClass(rCla.join(' ')).addClass(rCla[b.cnt == 0 ? 0 : 1]);
                        piectx.closest('.csspinner').removeClass('csspinner');
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
                            }
                            ,

                            config = {

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

                                    //title: {
                                    //    display: true,
                                    //    text: "Chart.js stackable with Min/Avg/Max"
                                    //}
                                    //,

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

                                plugins: [Main._plugCHRT.PLUG('pluginBAR_LBL'), {

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


                            }

                            ,

                            tovic_RNG = function (rect) {

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
                                    };

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

                                    target.RZval = function (va,offs) {

                                        clearTimeout(resizeHWND);

                                        if (va !== undefined) {
                                            //
                                            cacheValue = offs ? offsV(va) : va;//neu chua offset thi lam vi ben ngoai call
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
                                            //
                                            //update 2 cai chart
                                            if ($tha.chartLIB.bar) $tha.chartLIB.bar.update();
                                            if ($tha.chartLIB.pie) $tha.chartLIB.pie.update();
                                            //
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
                                        //
                                        drag = false;
                                        //
                                        //dieu chinh lai vi tri chinh xac 
                                        dragger.style[css] = ((cacheValue / (yMAX - yMIN) * rangerSize) - (draggerSize / 2)) + 'px';
                                        //
                                        //
                                        off("touchmove", dragRECT, dragMove);
                                        off("mousemove", dragRECT, dragMove);

                                        off("touchend", doc, dragStop);
                                        off("mouseup", doc, dragStop);
                                        //
                                        //
                                        if (isFunc(EVTs.stop)) EVTs.stop(cacheValue, target, e);
                                        //return preventDefault(e);
                                        //console.log('fuck');
                                        //
                                    };

                                    function dragUpdate(e) {

                                        e = e || win.EVTs;
                                        var pos = e.touches ? e.touches[0][page] : e[page],

                                            move = edge(pos - rangerDistance, 0, rangerSize),

                                            value = parseInt(edge(((pos - rangerDistance) / rangerSize) * (yMAX - yMIN), 0, yMAX - yMIN));


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
                                            //
                                            dragger.style[css] =(move - (draggerSize / 2)) + 'px';
                                            //
                                            //
                                            cacheValue = Math.round(value);
                                            //
                                            if (isFunc(EVTs.drag)) EVTs.drag(cacheValue, target, e);
                                            //
                                            //
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
                                            //
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
                                            config.data.datasets[0].data = [[yMIN, config.data.datasets[1].data[0][0]]];
                                            //
                                            //adjust over max serri
                                            config.data.datasets[byVAL.length].data[0][0] = byVAL[byVAL.length-1]._val;
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

                                tovic_RNG = [p];

                            };
                        //
                        //
                        //
                        $tha.chartLIB.bar = new Chart(bar_ctx, config);
                        //
                        tovic_RNG($tha.chartLIB.bar.chartArea);
                        //
                        //
                        ctx.parent().closest('.csspinner').removeClass('csspinner');
                        //
                        $tha.chrt_gender_age_bar = function () {
                            //
                            //debugger;
                            def = $.Deferred();
                            //
                            $.when(dbLOD()).done(function (a, b) {
                                //
                                //update lai MinMax - yAxis
                                yMIN =  elUI.sexMNU==1?10:0;
                                yMAX = elUI.sexMNU == 1 ? 80 : 40;
                                //
                                //
                                var conf = $tha.chartLIB.bar.config;
                                conf.options.scales = _scale();
                                $tha.chartLIB.bar.update();
                                //
                                tovic_RNG[0].each(function (p) {
                                    this.RZval(conf.data.datasets[p].data[0][1], 1);
                                });
                                //
                                ctx.parent().closest('.csspinner').removeClass('csspinner');
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

                activity_log: function (frmEL, el) {
                    //
                    //debugger;
                    //
                    const lodLI = $(el).scrollTop( 0 ).removeClass('csspinner').find('li.timeline-item:last-child').removeClass('d-none'),

                        logSIZE = 10,//max block size

                        $tha = this,

                        def = $.Deferred(),

                        doIt = function () {

                            $mainO.svrDAT({

                                uri: '/api/headermaster', "act": 'GET', 'qry': 'acts'

                            }).done(function (v1) {
                                //
                                v1 = JSON.parse(v1);//tranh bi update object ben engine
                                //
                                //chi can append len first la ok
                                var newHIS = [],
                                    hisBTN = ['info', 'success', 'warning', 'danger','','','','primary'
                                    , '<a class="text-info">' + (_La$N('js_013_13|4', elUI.lan) || 'Import') + '</a> ' + (_La$N('js_013_13|5', elUI.lan) || ' employees profile from Excel')
                                    , '<i><a class="text-success">' + _La$N('js_007_25', aLAN) + '</a> ' + (_La$N('js_013_13|3', elUI.lan) || 'employee') + '</i>'
                                    , '<i><a class="text-warning">' + _La$N('js_007_26', aLAN) + '</a> ' + (_La$N('js_013_13|3', elUI.lan) || 'employee') + '</i>'
                                    , '<i><a class="text-danger">' + _La$N('js_007_27', aLAN) + '</a> ' + (_La$N('js_013_13|3', elUI.lan) || 'employee') + '</i>'
                                    ,'','',''
                                    , '<i><a class="text-primary">' + (_La$N('js_013_13|7', elUI.lan) || 'Import') + '</a> ' + (_La$N('js_013_13|8', elUI.lan) || ' data from backup file') + '</i>'
                                    , '<a class="text-info">' + (_La$N('js_013_13|4', elUI.lan) || 'Import') + '</a> ' + (_La$N('js_013_13|9', elUI.lan) || ' employees profile from Excel')
                                    ]


                                    ,

                                    newLI = function (vk) {
                                        var li = 0, inf = '';
                                        //
                                        switch (vk.KY) {//KY viet tat cua KEY
                                            case 1: {//import
                                                break;
                                            }
                                            case 2: {//employees changed
                                                li = vk.ki;//kind modify

                                                //debugger;

                                                inf = '<small>' + vk[0].acno + ' / ' + vk[0].empcode + ' / ' + vk[0].ho + ' ' + vk[0].ten + '</small>';
                                                break;
                                            }
                                            case 3: {
                                                li = 7;//kind restore
                                                break;
                                            }
                                            case 4: {
                                                li = 8;//import hsnv from mcc
                                                break;
                                            }
                                        };

                                        return $('<li class="timeline-item ' + hisBTN[li > 7 ?3 : li] + '">' +
                                               '      <div class="margin-left-15"> ' +
                                               '          <div class="text-muted text-small">' + nga_sDt24(new Date(vk._t), false) + '</div>' +
                                               '          <p>' + hisBTN[li + 8] + ' ' + inf + '</p>' +
                                               '      </div>' +
                                               '</li>');
                                    }
                                    ,
                                    moreTXT = function (v,isTOL) {
                                        if (isTOL) {
                                            return '(' + (v.length - $tha.activity_log.xemTiep[0]) + '/' + v.length + ') ' + (_La$N('js_013_13|6', elUI.lan) || 'view more') + ' ...';
                                        } else {
                                            return (_La$N('js_013_13|2', elUI.lan) || 'Total') + ': ' + v.length;
                                        };
                                    }
                                    ,
                                    viewMORE = function () {
                                        //
                                        v1 = $tha.activity_log.newHIS;
                                        newHIS = [];
                                        //
                                        for (var k = 0; k < v1.length; k++) {
                                            if (v1[k]._t < $tha.activity_log.xemTiep[1]._t) {
                                                //
                                                //khi load lan dau moi tinh vu maxsize
                                                if (newHIS.length == logSIZE) {
                                                    break;
                                                };
                                                //
                                                //
                                                $tha.activity_log.xemTiep = [v1.length - k - 1, v1[k]];//khac tren ko -1 
                                                //
                                                newHIS.push(newLI(v1[k]));
                                                //
                                            };
                                        };
                                        //
                                        if (newHIS.length > 0) {
                                            //
                                            //bo loading ...
                                            lodLI.appendTo(lodLI.closest('ul'));
                                            //
                                            viewBTN.html(moreTXT(v1, $tha.activity_log.xemTiep[0] > 0));
                                            //
                                            //
                                            //append not appendTo ...
                                            lodLI.closest('ul').append(newHIS);
                                            //
                                            //scroll to bottom div
                                            $(el).scrollTop(el.scrollHeight);
                                            //
                                        };
                                        //
                                        viewBTN.removeClass('d-none');
                                        lodLI.addClass('d-none');
                                        //
                                    };
                                //
                                //
                                //debugger;
                                //
                                for (var k = 0; k < v1.length; k++) {
                                    //
                                    //detect log load before ...
                                    if ($tha.activity_log.newHIS) {
                                        if (v1[k]._t <= $tha.activity_log.newHIS[0]._t) break;
                                    } else {
                                        //khi load lan dau moi tinh vu maxsize
                                        if (newHIS.length == logSIZE) {
                                            $tha.activity_log.xemTiep = [v1.length-k, v1[k-1]];
                                            break;
                                        };
                                    };
                                    //
                                    newHIS.push(newLI(v1[k]));
                                    //
                                };
                                //
                                //
                                //
                                var isXem = false,
                                    viewBTN = lodLI.closest('ul').prepend(newHIS).next().off('click'); //nut xem tiep
                                //
                                if (v1.length == 0) {

                                    isXem = true;
                                    newHIS = (_La$N('js_013_13|1', elUI.lan) || 'No log') + '...<i class="ml-2 fa fa-refresh"></i>';

                                } else {
                                    //
                                    //v1 là full log from db ...
                                    $tha.activity_log.newHIS = v1  //backup lai his raw
                                    //
                                    isXem = true;
                                    //
                                    newHIS = moreTXT(v1,$tha.activity_log.xemTiep && $tha.activity_log.xemTiep[0] > 0);
                                    //
                                };
                                //
                                //con log can xem ...
                                viewBTN[(isXem ? 'remove' : 'add') + 'Class']('d-none')
                                .html(newHIS).on('click', function (e) {

                                    if ($tha.activity_log.newHIS) {
                                        //
                                        if ($tha.activity_log.xemTiep) {
                                            //move to bottom ..
                                            lodLI.appendTo(lodLI.closest('ul')).removeClass('d-none');
                                            viewBTN.addClass('d-none');
                                            //
                                            setTimeout(viewMORE, 500);
                                            //
                                        };
                                    } else {
                                        //dang no log ...
                                        //$tha.activity_log
                                        lodLI.removeClass('d-none');
                                        $(this).addClass('d-none');
                                        //lam lai them lan nua....
                                        setTimeout(doIt, 500);
                                        //
                                    };
                                });
                                //
                                //hide li loading ...
                                lodLI.addClass('d-none');
                                //
                                def.resolve('OK');
                                //
                            }).fail(function (v1) {

                                def.resolve('OK');

                            });
                        };
                    //
                    //move loading to Top ...
                    lodLI.prependTo(lodLI.closest('ul'));
                    //
                    setTimeout(doIt(), 1500);
                    //
                    if (i$Desk) {
                        if (!laZY.log_scrollPerfect) {
                            //scroll prefect tree ca kip
                            laZY.log_scrollPerfect = new PerfectScrollbar(el, {
                                suppressScrollX: true
                            });
                        };
                    };
                    //
                    return def.promise();
                    //
                }

                ,

                pb_cv: function (frmEL, el) {
                    //
                    //debugger;

                    var $tha = this
                        ,
                        render = function (e) {
                            //
                            var z = 0,fi=['secid','posid'], arr = {};
                            //
                            for (z; z < tabs.length; z++) {
                                if ($(tabs[z]).hasClass('active')) break;
                            };
                            //
                            pb_cv_body.empty();
                            //
                            //
                            const dat = JSON.parse(tabs[z]._dat);
                            //
                            //
                            for (var d = 0 ; d < dat.length; d++) {
                                //
                                dat[d].sl = 0;
                                //
                                //debugger;
                                //
                                for (var k in elUI.pie_gender) {
                                    //
                                    if (elUI.pie_gender.hasOwnProperty(k)) {
                                        //
                                        const emp = elUI.pie_gender[k],

                                            fnd = emp.filter(function (w) {

                                                if (!arr[w.acno]) arr[w.acno] = 1;

                                                if (w[fi[z]] == dat[d].id) {
                                                    //
                                                    arr[w.acno] = 2;
                                                    //
                                                    return true;
                                                    //
                                                };
                                                //
                                                return false;
                                                //
                                            });
                                        //
                                        dat[d].sl+= fnd.length;
                                        //
                                    };
                                };
                                //
                            };
                            //
                            //
                            //tim nhan vien ko co pb-or chuc vu...
                            z = [];
                            //
                            for (var k in arr) {
                                if (arr.hasOwnProperty(k)) {
                                    if (arr[k] == 1) {//no 
                                        z.push(k);
                                    };
                                };
                            };
                            //
                            //
                            if (z.length > 0) {//phai them vao 1 phong roi ...
                                dat.push({
                                    dis: '( ' + (_La$N('js_013_14|2', elUI.lan) || 'Blank status') + ' )',
                                    id: -1,
                                    sl: z.length
                                });
                            };
                            //
                            z = elUI.dbLOD.cnt;
                            //
                            for (var k = 0; k < dat.length; k++) {
                                pb_cv_body.append(
                                                    '<tr>' +
                                                        '<td class="center">' + (k + 1) + '</td>' +
                                                        '<td>' + dat[k].dis + '</td>' +
                                                        '<td>' + dat[k].sl + '</td>' +
                                                        '<td>' + (z > 0 ?

                                                        fmtNB(parseFloat((dat[k].sl / z).toFixed(2)))

                                                        : 0) + ' %</td>' +

                                                    '</tr>'
                                                    );
                            };
                            //
                            //
                            $(el).removeClass('csspinner');
                            //
                            if (e) srclocked(false);
                            //
                        }
                        ,
                        tabs = $(el).find('a.nav-link').on('show.bs.tab', function (e) {
                            //
                            srclocked(true);
                            //
                            setTimeout(function () {
                                render(e);
                            }, 10);
                            //
                        })
                        ,
                        pb_cv_body = $(el).find('.pb_cv_body');
                        
                    //
                    //
                    $tha.pb_cv = function () {
                        //
                        var def = $.Deferred();
                        //
                        $mainO.svrDAT({

                            uri: '/api/headermaster', "act": 'GET', 'qry': 'jdat'//dung chung voi employees

                        }).done(function (v1) {
                            //
                            //clone
                            tabs[0]._dat = JSON.stringify(v1.secs ||[]);
                            tabs[1]._dat = JSON.stringify(v1.poss || []);
                            //
                            render();
                            //
                            def.resolve();
                            //
                        });
                        //
                        //
                        return def.promise();
                    };
                    //
                    //
                    if (i$Desk) {
                        if (!laZY.pb_cv_scrollPerfect) {
                            //scroll prefect tree ca kip
                            laZY.pb_cv_scrollPerfect = new PerfectScrollbar($(el).find('.dog_table_fixed_head')[0], {
                                suppressScrollX: true
                            });
                        };
                    };
                    //
                    //debugger;
                    //
                    return $tha.pb_cv();
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
                                        $(e.target).closest('.panel-body').removeClass('csspinner');
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
                            //debugger;
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


        const reLOA = function () {

            debugger;

            setTimeout(function () {

                //schedule load lai tabpage
                admin$.semiLOD.push(_tabId);
                //
                //
                elTAB.find('.chrome-tab-close').each(function (x, dume) {
                    dume.click();
                });
                //
            }, 100)
        };

        //var calcSession = new Date().getTime();

        //function ifr000(puBODY, fi, cb) {
        //    //
        //    var evtWK,

        //        defe = $.Deferred(),

        //        hwnHOLE = -1,

        //        downURL = [0,1,2, 3, 4,5],//index break down

        //        lstSTO = ['192.168.1.91:10996' //0
        //            , 'https://apphrm.000webhostapp.com'//1
        //            , 'https://hris.gq'//2
        //            , 'apphrm.mywebcommunity.org'//3
        //            , 'hoathai.onlinewebshop.net'//4
        //            , 'https://zkteco.ga' //5 infinityfree.com / logthaiduongnam@gmail.com
        //            , 'hellohrm2020.ddns.net:10996'//6
        //        ]

        //        ,

        //        dumeLOD = 0
        //        ,

        //        frmWIN = function (whe) {
        //            //
        //            dumeLOD--;
        //            //
        //            //console.log(whe,new Date().getTime());
        //            //
        //            if (dumeLOD < 1) {
        //                //
        //                taiLing('Target clouding ...');
        //                //aha... co tinh hieu
        //                //end detect.
        //                clearTimeout(hwnHOLE);
        //                //console.log(' clearTimeout(hwnHOLE)');
        //                //
        //                //
        //                //https://gist.github.com/wuchengwei/b7e1820d39445f431aeaa9c786753d8e
        //                //https://gist.github.com/jcable/25d4c86d96d810a5498d
        //                //
        //                //debugger;
        //                //
        //                var isURL = (typeof fi === "string") ? 10 : 1,

        //                    blob = isURL == 10 ? fi : fi.slice(0, fi.size, fi.type),

        //                    liveHOST = function () {
        //                        //
        //                        console.log('save file to host: ', this);

        //                        //formData.append(form[i].name, blob, files[0].name);
        //                        evtWK.contentWindow.postMessage({ k: this, dat: { na: 'fi_name.xlsx', bl: blob, 'cat': fi.type } }, "*");
        //                        //
        //                    };

        //                liveHOST.bind(isURL)();
        //                //
        //            };
        //        }

        //        ,

        //        subHOLE = function () {
        //            //
        //            //end detect.
        //            clearTimeout(hwnHOLE);
        //            //
        //            evtWK = document.createElement('iframe');
        //            evtWK.setAttribute("style", "height:100%;width:100%;border:none");
        //            evtWK.setAttribute("frameborder", "0");
        //            //
        //            dumeLOD = 2;
        //            evtWK.onload = function (e) {
        //                //
        //                taiLing('Cloud preparing ...');
        //                frmWIN('onload');
        //                //
        //            };
        //            //
        //            //
        //            if (downURL.length < lstSTO.length) {//valid collection
        //                //
        //                var url = -1;//srcpf$.length > 0 ? '/apphrm.' : '';//https://apphrm.000webhostapp.com/
        //                //
        //                do {
        //                    //lay index random
        //                    url = Math.floor(Math.random() * lstSTO.length);
        //                } while (downURL.indexOf(url) > -1);
        //                //
        //                //push vao de tranh ra lan sau
        //                downURL.push(url);
        //                //
        //                url = lstSTO[url].indexOf('://') > -1 ? lstSTO[url] : '//' + lstSTO[url];

        //                //
        //                ///media/utils/jsc/upemp.js
        //                evtWK.setAttribute('src', url + '/000webhostapp.tep/upexcel.html?seson=' + btoa(calcSession + '|' + w0w.location.origin

        //                    + '|' + (!w0w.Worker || true)

        //                    + '|' + (/*'https://hellohrm.github.io/utils*/'/media/utils/jsc/upemp.js?' + new Date().getTime())


        //                    ));


        //                //
        //                $(evtWK).appendTo(puBODY.addClass('overflow-hidden'));//append vao body popup
        //                //
        //                //dtect after 1 second
        //                //hwnHOLE = setTimeout(function () {
        //                //    subHOLE();
        //                //}, 5000);
        //                //
        //            };
        //        };
        //    //
        //    //remove handle truoc..
        //    delete apisvr.a$.sessions[calcSession];
        //    //
        //    calcSession = new Date().getTime();
        //    apisvr.a$.sessions[calcSession] = {
        //        id: calcSession,
        //        fn: function (a, b, c) {
        //            if (a == 'job') {

        //                //console.log(new Date().getTime(), b.evtData.messageType);

        //                switch (b.evtData.messageType) {
        //                    case 0: {//calc ready !
        //                        //
        //                        //
        //                        frmWIN('receive msg');
        //                        //
        //                        break;
        //                        //
        //                    } case 1: {
        //                        //
        //                        taiLing('View upload file ...');
        //                        //debugger;
        //                        //
        //                        break;
        //                    } case 2: {
        //                        //
        //                        taiLing('Live service ...');
        //                        //
        //                        break;
        //                    } case 3: {
        //                        //
        //                        //
        //                        clearTimeout(hwnHOLE);
        //                        console.log('live view ready');
        //                        //
        //                        defe.resolve('hosttmp');
        //                        //
        //                        break;

        //                    } case 4: {
        //                        //
        //                        //
        //                        clearTimeout(hwnHOLE);
        //                        console.log('embbed fail');
        //                        //
        //                        alert('embbed fail');
        //                        defe.resolve('hosttmp');
        //                        //
        //                        break;
        //                    }

        //                };
        //            };
        //        }
        //    };
        //    //
        //    //
        //    //
        //    if (evtWK) {
        //        //
        //        //tutu release roi moi tao lai.
        //        //
        //        try { evtWK.contentWindow.postMessage({ k: 2 }, "*"); }
        //        catch (err) { };
        //        //
        //        //
        //        setTimeout(function () {
        //            //
        //            $(evtWK).remove();
        //            //
        //            subHOLE();
        //            //
        //        }, 500);
        //        //
        //    } else {
        //        subHOLE();
        //    };
        //    //
        //    //
        //    return defe.promise();
        //    //
        //    //
        //}


        //function ifrmExcel_new(fi) {
        //    //
        //    debugger;

        //    taiLing('Loading ...');
        //    helloguy.css('display', '');
        //    //
        //    //
        //    var puhwnd = admin$.popup({ a: 'd', fw: 0, cBu: 1, t: 'btn.text()' }),
        //        puBODY = puhwnd.find('.modal-body').addClass('pefectS_R p-0'),
        //        ss,
        //        men = $('<div mnu="tuychon" class="btn ti-download btn-sm mr-2" style="font-size:18px;"></div>').prependTo(puBODY.prev())
        //            .on('click', function (e) {
        //                //
        //                var json = ss.data('workbook').toJSON();
        //                //
        //                //
        //                // here is excel IO API
        //                excelIo.save(json, function (blob) {

        //                    saveAs(blob, '1234.xlsx');
        //                    debugger;


        //                }, function (e) {


        //                    debugger;
        //                }, { password: '' });


        //            });


        //    puhwnd.find('.modal-dialog').addClass('modal-dialog-centered modal-dialog-zoom pu_fullW my-0')
        //            .css({ 'max-width': '100%' });


        //    //
        //    puBODY.next().remove();//footer
        //    //
        //    //
        //    puhwnd.one('shown.bs.modal', function () {
        //        //
        //        puhwnd.off('shown.bs.modal');
        //        //

        //        // myBlob is now the blob that the object URL pointed to.
        //        /*
        //        ifr000(puBODY, fi, function () {

        //        }).done(function (m) {
        //            taiLing('');
        //            helloguy.css('display', 'none');
        //        });
        //        */


        //        ////////helloguy.css('display', '');
        //        //////////
        //        ////////$that.ctrl = [helloguy.find('.dx-loadindicator-wrapper').addClass('taii').attr('taiing', 'Loading ...'), $(this)];

        //        //////////https://www.grapecity.com/spreadjs/spreadsheet/

        //        ////////$.when($that.excel_lib(),

        //        ////////    $that.excel_tmp('https://hellohrm.github.io/utils/media/utils/tmplexcel/misa_baocao_chamcong.xlsx'),

        //        ////////    $that.excel_io()

        //        ////////   ).done(function (lib, tmpl, io) {
        //        ////////       //
        //        ////////       ss = $('<div class="h-100 overflow-hidden"></div>').appendTo(fuckScroll);
        //        ////////       //
        //        ////////       exp_typ1(tmpl, [0, 'test_pivot', ss[0]], function (id, m) {
        //        ////////           //
        //        ////////           debugger;
        //        ////////           //unLOK(id, m);
        //        ////////           //
        //        ////////           $that.ctrl[0].removeClass('taii').removeAttr('taiing');
        //        ////////           helloguy.css('display', 'none');
        //        ////////           //
        //        ////////       });
        //        ////////       //
        //        ////////       //
        //        ////////       debugger;
        //        ////////       //
        //        ////////   }).fail(function (err, msg) {
        //        ////////       //
        //        ////////       debugger;
        //        ////////       //
        //        ////////   });




        //        const evtWK = document.createElement('iframe');
        //        evtWK.setAttribute("style", "height:100%;width:100%;border:none");
        //        evtWK.setAttribute("frameborder", "0");
        //        //
        //        evtWK.src = '../../000webhostapp.tep/spreadjs_excel/cloudinary.html';//"../../000webhostapp.tep/spreadjs_excel/index.html";
        //        //
        //        evtWK.onload = function (e) {
        //            //
        //            //taiLing('Cloud preparing ...');
        //            //frmWIN('onload');
        //            taiLing('');
        //            helloguy.css('display', 'none');
                 
        //        };

        //        $(evtWK).appendTo(puBODY.addClass('overflow-hidden'));//append vao body popup


        //    }).one('hide.bs.modal', function () {

        //        puhwnd.off('hide.bs.modal');

        //    });


        //    //$that.excel_tmp('https://hellohrm.github.io/utils/media/utils/tmplexcel/misa_baocao_chamcong.xlsx')
        //    //.done(function (fi) {
        //    //    //
        //    //    debugger;
        //    //    //
        //    //    puhwnd.fi = fi;
        //    //    //
        //    //    puhwnd.modal('show');
        //    //    //
        //    //});
        //    //
        //    puhwnd.fi = 'https://hellohrm.github.io/utils/media/utils/tmplexcel/misa_baocao_chamcong.xlsx';
        //    puhwnd.modal('show');

        //};


        function render_excel_js(temljob,tmpl) {
            //
            const defe = $.Deferred();

            taiLing('Loading ...');
            helloguy.css('display', '');
            //
            //
            var puhwnd = admin$.popup({ a: 'd', fw: 0, cBu: 1, t: 'btn.text()' }),
                puBODY = puhwnd.find('.modal-body').addClass('pefectS_R p-0'),
                ss,
                men = $('<div mnu="tuychon" class="btn ti-download btn-sm mr-2" style="font-size:18px;"></div>').prependTo(puBODY.prev())
                    .on('click', function (e) {
                        //
                        //var json = puBODY.data('workbook').toJSON();
                        //
                        const fileType = GC.Spread.Sheets.FileType.excel;
                        const fileName = "dume.xlsm";

                        puBODY.data('workbook').export(function (blob) {

                            debugger;

                            saveAs(blob, fileName);

                        }, function () {
                        }, {
                            fileType: fileType,
                            excelFileType: 'XLSM'
                        });
                        //
                        // here is excel IO API
                        //excelIo.save(json, function (blob) {

                        //    saveAs(blob, '1234.xlsx');
                        //    debugger;


                        //}, function (e) {


                        //    debugger;
                        //}, { password: '' });


                    });


            puhwnd.find('.modal-dialog').addClass('modal-dialog-centered modal-dialog-zoom pu_fullW my-0')
                    .css({ 'max-width': '100%' });

            //
            puBODY.next().remove();//footer
            //
            //
            puhwnd.one('shown.bs.modal', function () {
                //
                puhwnd.off('shown.bs.modal');
                //
                debugger;

                if (puhwnd.fi) {
                    //using spreadjs
                    mnupp_download_hsnv(puhwnd.fi, '', puBODY[0], tmpl);
                } else {

                    //using office.live excel viewer


                };
                //
                //
                defe.resolve([puhwnd, puBODY]);
                //
                //
                //
            }).one('hide.bs.modal', function () {
                //
                puhwnd.off('hide.bs.modal');
                //
                debugger;
                //remove handle truoc..
                delete apisvr.a$.sessions[calcSession];
                //
            });


            debugger;
            const qryC0d = gQRY(tmpl);//fn nay ben pm.js
            const calcSession = 'preview_vendor_xlsx';

            if (qryC0d.hasOwnProperty('c0d') && qryC0d['c0d'] == 'vendor') {
                //se build office.live viewer excel file full demo with vendor data...
                const evtWK = document.createElement('iframe');
                evtWK.setAttribute("style", "height:100%;width:100%;border:none");
                evtWK.setAttribute("frameborder", "0");
                //
                //
                //remove handle truoc..
                delete apisvr.a$.sessions[calcSession];
                //
                apisvr.a$.sessions[calcSession] = {
                    id: calcSession,
                    fn: function (a, b, c) {

                        debugger;

                        if (a == 'job') {
                            //
                            switch (b.evtData.messageType) {
                                case 0: {//calc ready !
                                    //
                                    //
                                    //frmWIN('receive msg');
                                    evtWK.contentWindow.postMessage({ k: 10, dat: { bl: tmpl } }, "*");
                                    //
                                    break;
                                    //
                                } case 1: {
                                    //
                                    taiLing('View demo ...');
                                    //debugger;
                                    //
                                    break;
                                } case 2: {
                                    //
                                    taiLing('Live service ...');
                                    //
                                    break;
                                } case 3: {
                                    //
                                    //
                                    //clearTimeout(hwnHOLE);
                                    //console.log('live view ready');
                                    //
                                    //defe.resolve('hosttmp');
                                    taiLing('');
                                    helloguy.removeClass('taii').removeAttr('taiing');
                                    srclocked(false);
                                    //
                                    break;
                                }
                            };
                        };
                    }
                };

                //
                evtWK.onload = function (e) {
                    //
                    taiLing('Cloud preparing ...');
                    //frmWIN('onload');
                    //
                    //helloguy.css('display', 'none');
                };

                evtWK.setAttribute('src', srcp$f + '/000webhostapp.tep/upexcel.html?seson=' + btoa(calcSession + '|' + w0w.location.origin

                        + '|' + (!w0w.Worker || true)

                        + '|' + (srcp$f + /*'https://hellohrm.github.io/utils*/'/media/utils/jsc/upemp.js?' + new Date().getTime())


                        ));

                puBODY.append( evtWK).css('overflow','hidden');//append vao step 3 main div

            } else {
                puhwnd.fi = temljob;
            };
            //
            puhwnd.modal('show');
            //
            //
            return defe.promise();

        };


        function mnupp_download_hsnv(job, fileName, renderEL,tmpl) {

            init_excel_engi().done(function () {
                //code in main.js

                //cmd_EXL[opts.job].apply(opts.args);

                debugger;

                Main.exelEngine({

                    job: job,

                    //https://www.lostmypass.com/file-types/ms-excel/ remove password excel

                    tmpl: tmpl || (job == 'hr_dashboard_excel' ? '/media/utils/tmplexcel/fuk/HR DATA_Excel.xlsx' : '/media/utils/tmplexcel/fuk/att_logs.xlsm'), //'https://hellohrm.github.io/utils/media/utils/tmplexcel/misa_baocao_chamcong.xlsx',// 

                    args: [[], [], []],

                    fileName: fileName,

                    renderEL: renderEL,

                    cb: function (rst, mg, type) {
                        //
                        //debugger;

                        if (rst === '$mainO') {

                            return $mainO;

                        } else if (rst === 'save_2_file') {
                            //debugger;
                            mg.export(function (blob) {

                                //debugger;

                                saveAs(blob, fileName);

                            }, function () {

                                //debugger;

                            }, {
                                fileType: GC.Spread.Sheets.FileType.excel,
                                excelFileType: 'XLSX'
                            });



                        };

                        srclocked(false);
                        //
                    }

                });
            });


        };

        this.init = function (frmEL, cb, tabId, clickArgs, tabProps) {
            //
            _tabId = tabId;
            $mainO = cb('dbEngine');
            //
            const fuck_ste2 = function () {

                srclocked(true);

                const def = $.Deferred();

                if (!window['xls_vid_tml']) {

                    frmEL.trigger('get', [srcp$f + '/media/utils/realtime_xemmau_lst.html' + src$id, function (data) {//get co ky tu \x03 giua chu e va chu t
                        //  
                        var ecU = this;

                        frmEL.trigger('',//trigger event "\x1C\x1D\x1E\x1F"

                        [data,

                            false,//option add script when load , no worry, vi link jquery se emty string.

                            $.Deferred().done(function () {
                                //
                                //const rawHTML = $(adCS(arguments[0], ecU));
                                //
                                //debugger;
                                //add code vao 
                                //debugger;
                                //add code xu ly form vao.
                                apisvr.a$.scod(arguments[3].join(''));

                                //du me doan code bz2 ... worker


                                //
                                //
                                window['xls_vid_tml'].ini($(adCS(arguments[0], ecU)), elUI, def);
                                //
                                //debugger;
                                //
                            })]);
                        //
                    }]);

                } else {

                    def.resolve();//sure script already .

                };

                return def;
            }
            ,

            frm_lienhe = function () {

                srclocked(true);

                const def = $.Deferred();

                if (!window['lienhe_me']) {

                    frmEL.trigger('get', [srcp$f + '/media/utils/lienhe.html' + src$id, function (data) {//get co ky tu \x03 giua chu e va chu t
                        //  
                        var ecU = this;

                        frmEL.trigger('',//trigger event "\x1C\x1D\x1E\x1F"

                        [data,

                            false,//option add script when load , no worry, vi link jquery se emty string.

                            $.Deferred().done(function () {
                                //
                                //const rawHTML = $(adCS(arguments[0], ecU));
                                //
                                //debugger;
                                //add code vao 
                                //debugger;
                                //add code xu ly form vao.

                                apisvr.a$.scod(arguments[3].join(''));

                                //du me doan code bz2 ... worker

                                window['lienhe_me'].ini($(adCS(arguments[0], ecU)), elUI, def);

                                //debugger;
                                //def.resolve();//sure script already .
                                //
                                //
                            })]);
                        //
                    }]);
                } else {
                    def.resolve();//sure script already 
                };
                return def;
            }
            ,

            lienhe_dichvu = function () {
                //debugger;
                const puhwnd = admin$.popup({ a: 'd' });
                //
                puhwnd.find('.modal-dialog').addClass('modal-dialog-centered modal-dialog-zoom pu_fullW my-0') // 
                        .css({ 'max-width': '800px' });


                frm_lienhe().done(function () {

                    debugger;
                    const rawHTML = window['lienhe_me'].tml({ pu: puhwnd, typ: 'typ_3' }),
                        lienhe_rst = function () {
                            puhwnd.modal('hide');
                        };

                    puhwnd.find('.modal-body').html(

                        rawHTML
                        .on('lienhe_rst', lienhe_rst)
                        .on('click', 'button', lienhe_rst)

                        ).next().remove();


                    srclocked(false);

                });


                puhwnd.modal('show');
            }
            ,
            winRZ = function () {
                var event = document.createEvent('Event');
                event.initEvent('resize', true, true); // type, bubbles, cancelable
                window.dispatchEvent(event);
            };
            //
            var sWIX;
            //
            const srcSwitch = function (e) {
                //
                e.stopPropagation();
                e.preventDefault();
                //
                //
                //if (key.indexOf('js_013_1')) elUI.title = [$(el), key];

                upload_hsnv_excel.fadeOut('fast', function () {

                    elUI.title[0].closest('.long-title').toggleClass('d-flex d-none');

                    upload_hsnv_excel.next().fadeIn('slow', reload_lazy);//(***)

                    //debugger;

                    elUI.title[0]//.html(_La$N('js_013_1', elUI.lan))
                    .parent()
                    .prev().find('lo[mnu="hed-imp-xls"]').removeClass('d-none').addClass('d-flex')
                        .next().removeClass('d-flex').addClass('d-none');

                    //
                });



            }
            ,

            reload_lazy = function (lydo) {
                //
                if (!lydo) {//(***)//tu fadein call
                    //
                    //debugger;
                    winRZ();
                    //
                    if (srcSwitch.uptep === 1) {
                        //
                        srcSwitch.uptep = 0;
                        //
                        //
                        if (lazyLOD.length > 0) {
                            laZY.job();
                            $('#app').off('scroll', laZY.job).on('scroll', laZY.job);
                        };
                        //
                        //
                        //open lai jvertermap
                        if (!appEVT.changed) {
                            laZY.jvectormap_visitor(frmEL);
                            return;
                        };
                        //neu ko bi return thi xuong duoi laZY trac lai
                        //
                    };
                };
                //
                //
                //
                //clear flage
                delete appEVT.changed;
                //lazy="chrt_gender_age_bar" class="col-md-12 col-lg-4 d-flex csspinner load1"

                laZY.lazyLOD = frmEL.find('[lazy]').addClass('csspinner');

                laZY.track();
                //
            }
            ,

            lazyLOD = frmEL.find('.csspinner'),// [].slice.call(frmEL.find('.csspinner'), 0),

            init_dataDIV = frmEL.find('.init_data'),

            upload_hsnv_excel = frmEL.find('.upload_hsnv_excel').on('click', '.sample_xls', function (ex) { downEXLS(ex); }),

            CLEAN_HSNV = function (msg,ki, dat) {

         
                devDlg(1,
                    _La$N('js_001_27', aLAN) + '.. -> ' + msg + '?'
                    , null
                    , {
                        cb: function (a) {
                       }
                    }).show().done(function (rst, usrINPUT) {

                        if (rst == '1') {

                            const dburl = '/api/empprofile';
                            //
                            $mainO.svrDAT({

                                "act": 'CLEAN_HSNV', "tabId": _tabId, 'tokin': tabglobalJS['tokin'], uri: dburl
                                , dat: [{
                                    acno: elUI.dbLOD.cnt, empcode: '(CLEAN', ho: ' ALL)', ten: ''
                                }], 'ki': ki

                            }).done(reLOA).fail(function (err) {
                                //
                                //d.resolve();
                                //
                            });


                        };

                    });

            }

            ,

            //
            switchCHRT = function (e,manualCALL) {
                //
                if (e.type !== 'theme') {
                    //
                    var el=$(e.currentTarget),
                        chg = el.attr('mnu');
                    //
                    //debugger;

                    if (chg == elUI.sexMNU) {

                        return;

                    } else if (chg === 'xlstmp') {

                        fuck_ste2().done(function (a) {

                            window['xls_vid_tml']['vid']([frmEL.find('.form_container')]);

                            srclocked(false);

                        });

                        return;

                    } else {

                        var mmnp = el.attr('mnup');

                        if (typeof mmnp !== 'undefined' && mmnp !== false) {

                            debugger;

                            $('#' + mmnp).trigger('click', { 'demo': btoa(JSON.stringify({})) });
                            return;
                        };

 
                        mmnp = el.attr('mnupp');
                        if (typeof mmnp !== 'undefined' && mmnp !== false) {

                            if (mmnp == 'hr_dashboard_excel') {

                                const MNUU = manualCALL || el.attr('mnu')/* mnu="rpt_timekeeper"*/ || mmnp;

                                frmEL.off(MNUU);

                                //debugger;
                                //1. when show top layer display xls, => off scroll prevented lazy render ,
                                //if hide this top layer , in realtime_xemmau_lst.html will trigger event onActived
                                //
                                $('#app').off('scroll', laZY.job);

                                fuck_ste2().done(function (a) {
                                    //
                                    frmEL.on(MNUU, function (a, b, c) {
                                        //debugger;
                                        switch (b) {
                                            case 'download': {

                                                taiLing('Loading ...');
                                                helloguy.show();

                                                mnupp_download_hsnv(MNUU, "usr_" + new Date().getTime() + ".xlsx");

                                                break;
                                            }
                                            case 'preview': {

                                                taiLing('Loading ...');
                                                helloguy.show();

                                                debugger;

                                                render_excel_js(MNUU, c).done(function (xel) {

                                                    //debugger;

                                                });

                                                break;
                                            }
                                            case 'video': {

                                                //xemmau_lst.trigger(jobACT, [mnu]);

                                                break;
                                            }
                                            case 'roadmap_contact': {

                                                return lienhe_dichvu();
                                                break;
                                            }

                                            default: {

                                            }
                                        }

                                        //alert('herre hr_dashboard');
                                    });

                                    debugger;

                                    window['xls_vid_tml']['xls']([frmEL.find('.form_container'), MNUU, el]);

                                    srclocked(false);

                                });

                                return;

                            } else if (mmnp == 'empty_hsnv') {

                                return CLEAN_HSNV(el.text(), 3);//delete hsnv

                            } else if (mmnp == 'sample_xls') {

                                debugger;

                                return downEXLS(e);

                            } else if (mmnp == 'lienhe_dichvu') {

                                return lienhe_dichvu();

                            };

                            //srclocked(false);

                            return;
                        };


                        elUI.sexMNU = chg;//new

                        el.find('i:last-child').addClass('ti-check')
                            .closest('.lang-lst')
                            .find('a[mnu="' + (chg == "1" ? "2" : "1") + '"] i:last-child').removeClass('ti-check');

                        //
                        var bk = [];
                        for (var ix = 0; ix < maxLE; ix++) {
                            bk.push(tuoi[ix].data[0]);
                            tuoi[ix].data[0] = thamnien[ix];
                        };
                        //
                        thamnien = bk;
                        //
                        draw_chart_table();
                        //
                    };
                };
                //
                if (laZY.chartLIB.pie) laZY.chrt_gender_age_pie();

                if (laZY.chartLIB.bar) laZY.chrt_gender_age_bar();

                //debugger;
            };
            //
            frmEL.find('.lang-lst').on('click', 'a', switchCHRT);
            //
            //
            elUI.lan = JSON.parse(JSON.parse(atob(init_dataDIV.text())).lan);
            init_dataDIV.remove();
            //
            //
            frmEL.on('shown.bs.tab', function (e) {
                //debugger;
                //iframeWin.postMessage('myMessage.value', "*");

            }).on('click', '.wrap-content .links > a', function (e, a) {
                //
                debugger;

                if (e.currentTarget.getAttribute('mnu') === 'backup') {
                    srclocked(true);
                    setTimeout(function () {
                        bkSYS();
                    }, 100);
                    return;
                } else if (e.currentTarget.getAttribute('mnu') === 'restore') {
                    $(e.currentTarget).prev().off('change').on("change", function (e) {
                        if (e.currentTarget.files.length > 0) {
                            resSYS(e.currentTarget.files[0]);
                            e.currentTarget.value = '';
                        };
                    });
                    return;
                } else if (e.currentTarget.getAttribute('mnu') === 'xlstmp') {

                    //fuck_ste2().done(function (a) {
                    //    window['xls_vid_tml']['xls']([frmEL.find('.form_container')]);
                    //});

                    //ifrmExcel_new();
                    //
                    //
                    //
                    //
                    //
                    //
                    //

                    helloguy.show();



                    render_excel_js('time_io').done(function (xel) {

                        //debugger;

                    });



  

                    return;

                    //
                    //__mnu.get_fp_tmpl_job(usrINPUT && usrINPUT.val(), isBS, lstT, hedU, bkVER);
                    //cmd_EXL.doEXP(usrINPUT && usrINPUT.val());
                    //
                    init_excel_engi().done(function () {
                        //code in main.js

                        //cmd_EXL[opts.job].apply(opts.args);

                        //debugger;

                        const fileName =  "usr_" + new Date().getTime() + ".xlsx";

                        Main.exelEngine({

                            job: 'nhap_xuat',

                            //https://www.lostmypass.com/file-types/ms-excel/ remove password excel

                            tmpl: '/media/utils/tmplexcel/fuk/att_logs.xlsx', //'https://hellohrm.github.io/utils/media/utils/tmplexcel/misa_baocao_chamcong.xlsx',// 

                            args: [[], [], []],

                            fileName: fileName,

                            getBLOB:1,

                            cb: function (rst, mg, type) {
                                //
                                debugger;

                                //ifrmExcel_new(mg);

                                //return;
                                //

                                const formData = new FormData();
                                formData.append('file', mg, fileName); // Include filename

                                $.ajax({
                                    url: "https://tmpfiles.org/api/v1/upload", // Replace with your endpoint
                                    type: 'POST',
                                    data: formData,
                                    processData: false, // Important for FormData
                                    contentType: false, // Let browser set it
                                    success: function (res) {
                                        debugger;
                                        console.log('Upload success:', res);
                                        ifrmExcel_new(res.data.url.replace('tmpfiles.org','tmpfiles.org/dl/'));
                                    },
                                    error: function (err) {
                                        debugger;
                                        console.error('Upload error:', err);
                                    }
                                });


                                //formData.append("upload_preset", "xem_excel_file");

                                //$.ajax({
                                //    url: "https://api.cloudinary.com/v1_1/dr0wc1xga/upload", // Replace with your endpoint
                                //    type: 'POST',
                                //    data: formData,
                                //    processData: false, // Important for FormData
                                //    contentType: false, // Let browser set it
                                //    success: function (response) {
                                //        debugger;
                                //        console.log('Upload success:', response);
                                //        ifrmExcel_new(response.url);
                                //        //ifrmExcel_new('https://res.cloudinary.com/dr0wc1xga/raw/upload/v1754964087/usr_1754964082135.xlsx');
                                //    },
                                //    error: function (err) {
                                //        debugger;
                                //        console.error('Upload error:', err);
                                //    }
                                //});

                                srclocked(false);
                                //
                            }
                        });
                    });


                    return;

                } else if (e.currentTarget.getAttribute('mnu') === 'more_import') {

                    //alert('here');

                    return;

                } else if (e.currentTarget.getAttribute('mnu') === 'rpt_timekeeper') {

                    //link nay co 2 attribute mnu && mnupp='hr_dashboard_excel'
                    switchCHRT(e, 'rpt_timekeeper');

                    return;
                };
                //
                //
                //
                //
                //
                srclocked(true);
                var isLOAD = 1;
                //
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
                    //debugger; off luon lazy render
                    $('#app').off('scroll', laZY.job);
                    //
                    //clear jvertermap
                    var dogJ = frmEL.find('.jvectormap_visitor');
                    dogJ.find('*').off(/*all event*/).unbind().removeData();
                    //
                    dogJ.empty();
                    //
                    //debugger;
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
                        srcSwitch.uptep = upload_hsnv_excel.is(":visible") ? 1 : 0;
                        //
                        //debugger;
                        elUI.title[0].parent()
                            .prev().find('lo[mnu="hed-imp-xls"]').removeClass('d-flex').addClass('d-none')
                        .next().removeClass('d-none').addClass('d-flex');
                        //
                        elUI.title[0].closest('.long-title').toggleClass('d-none d-flex');
                        //
                    });
                    //
                }, 'JS_JS_nhapxuat_up.js');
                //
                //
            }).find('[data-lang]').each(function (idx, el) {
                var key = el.getAttribute('data-lang');

                $(el).html(_La$N(key, elUI.lan));
                //
                if (key=='js_013_1') {
                    //
                    elUI.title = [$(el)];
                    //
                    //
                };
                //
            });
            //
            //
            frmEL.on('theme', switchCHRT).on('onActived', function (a, b) {
                

                if (b.state == 'hide_xls_list') {
                    //
                    //debugger;
                    //3. receive event onActived trigger from  realtime_xemmau_list.html, continue lazy render
                    //
                    //
                    //const dogJ = frmEL.find('.jvectormap_visitor');
                    //if (!dogJ.hasClass('csspinner')) {
                    //    laZY.jvectormap_visitor(frmEL);
                    //};
                    //
                    //
                    if (lazyLOD.length > 0) {
                        laZY.job();
                        $('#app').off('scroll', laZY.job).on('scroll', laZY.job);
                    };
                    //
                    winRZ();//send event to update drag handle charge.
                    //
                }else if( b.state === 1 && appEVT.changed && srcSwitch.uptep !== 1) {
                    //
                    reload_lazy(1);
                    //
  
                };



            }).find('.sample_xls').on('click', function (ex) {

                downEXLS(ex);

            }).parent().on('click', 'lo[mnu]', function (cl) {
                //
                cl.stopPropagation();
                cl.preventDefault();
                //
                switch ($(cl.currentTarget).attr('mnu')) {
                    case 'hed-imp-xls': {
                        //debugger;
                        requestAnimationFrame(function () {
                              frmEL.find('a[mnu="form_import_excel"]').trigger('click');
                        });
                        break;
                    }
                    case 'hed-exit-imp': {
                        requestAnimationFrame(function () {
                            frmEL.find('.system_monitor').trigger('click');
                        });
                        break;
                    }
                }
            });






    

            const appEVT = function (e,d) {
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
            }
            ,
            downEXLS=function (ex) {
                //du me download
                ex.preventDefault();
                //window.location.href = "https://hellohrm.github.io/utils/media/utils/tmplexcel/import_sample.xlsx";
                //
                const link = document.createElement('a');
                link.setAttribute('download', '');
                //
                link.href = "https://hellohrm.github.io/utils/media/utils/tmplexcel/import_sample.xlsx";
                link.download = "import_sample.xlsx";
                link.click();
                link.remove();
                //
            };

            $('#app').on(shaEVT_NAN[0]/*emp_changed*/, appEVT);


            destroy.push(function () {
                //
                $('#app').off(shaEVT_NAN[0]/*emp_changed*/, appEVT);
                $('#app').off('scroll', laZY.job);
                //
                if (laZY.tree_scrollPerfect) {
                    //scroll prefect tree ca kip
                    laZY.tree_scrollPerfect.destroy();
                };
                //
                if (laZY.log_scrollPerfect) {
                    //scroll prefect tree log activity
                    laZY.log_scrollPerfect.destroy();
                };
                //
                if (laZY.pb_cv_scrollPerfect) {
                    //scroll prefect phong ban-chuc vu list
                    laZY.pb_cv_scrollPerfect.destroy();
                };
                //
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
                //debugger;

                laZY.track();
                //
                srclocked(false);
                //
            });
            //
        };
        //
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



