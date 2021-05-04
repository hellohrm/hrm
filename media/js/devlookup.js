//https://trial.edubit.vn/?fbclid=IwAR2-EIwXafvSGlL0H5TNNUcOZ2J0GYzNynwGBlFio7RWFOtzNn-1Yov46lw
(function (factory) {
    "use strict";
    DevExpress.myLK = factory();
})(function () {
    "use strict";
    var lkurl = '/api/lkdata', cmds = { searchVAL: null, searchHWND: -1, $frmTIT: $('<div/>') }, readyEMP = null, readySEC = null;

    function puS(k) {
        var fs = false, H = $(window).height(), W = $(window).width();
        if (apisvr.a$.mobsrc || H <= 400 || W <= 500) {
            fs = true;
        }
        switch (k) {
            case 'refresh':
                if (!fs) return { text: 'Refresh' };
                break;
            case 'pu':
                if (fs) {
                    debugger;
                    if (H > 600) {
                        return { width: '100%' }
                    } else {
                        return { fullScreen: true }
                    }
                }
                break;
            case 'drawer':
                return fs ? 'push' : 'shrink';
                break;
            case 'title': {
                if (fs) {
                    if (W > 567) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return true;
                }
                break;
            }
        }
        return {};
    }

    function fnMain(opts) { // constructor
        var lan, secFn = function (e) {
            srclocked(true);
            var filter = {
                filterType: "=",
                filterValues: [-1]
            };
            if (e) {
                if (!e.parent) {
                    filter.filterValues = null;
                } else {
                    filter.filterValues = e.items.map(function (a) { return a.key });
                    filter.filterValues.push(e.itemData.id);
                }
            }
            readyEMP = function (e) {
                readyEMP = null;
                srclocked(false);
            };
            var keys = cmds['emps'].getSelectedRowKeys();
            cmds['emps'].deselectRows(keys);
            cmds['emps'].columnOption("secid", filter);
        }, searchByText = function (e) {
            var txt = (e.event.currentTarget || e.event.target).value;
            if (cmds.searchVAL != txt) {
                doSEARCH(txt);
            };
        }, doSEARCH = function (txt) {
            clearTimeout(cmds.searchHWND);
            cmds.searchHWND = setTimeout(function () {
                srclocked(true);
                readyEMP = function (e) {
                    readyEMP = null;
                    //
                    var dogval = new Date().getTime().toString(), lstS = _uniARR(cmds['emps']._controllers.data._dataSource._cachedPagingData.map(function (a) { return a.secid }));
                    cmds['dbsecs'].forEach(function (n, i) {
                        if (lstS.indexOf(n.id) > -1) n.vis = dogval;
                    });
                    readySEC = function (e) {
                        var currSEL = e.component.getSelectedNodeKeys();
                        if (lstS.length > 0 && (currSEL.length == 0 || lstS.indexOf(currSEL[0]) == -1)) {
                            e.component.selectItem(e.component._dataAdapter.getRootNodes()[0]);
                        }
                        srclocked(false);
                    };
                    cmds['sec'].option('searchValue', dogval);
                }
                cmds['emps'].clearFilter();
                cmds['emps'].searchByText(cmds.searchVAL);
            }, 1000);
            cmds.searchVAL = txt;
        },
        btnclick = function (el, e) {
            if ($(el).hasClass('nutcancel')) {
                popup.hide();
            }
        }

        if (!DevExpress.data.AspNet && typeof window.aspnetdata === "function") aspnetdata(opts.mainO);
        var pOpts = {
            shading: true,
            contentTemplate: function (El) {

                //https://github.com/DevExpress-Examples/getting-started-with-drawer

                El.parent().addClass('frameworkpopupsel');

                var sections = [{
                    id: 1,
                    fullName: "John Heart",
                    prefix: "Dr.",
                    position: "CEO",
                    expanded: true,
                    items: [{
                        id: 2,
                        fullName: "Samantha Bright",
                        prefix: "Dr.",
                        position: "COO",
                        expanded: true,
                        items: [{
                            id: 3,
                            fullName: "Kevin Carter",
                            prefix: "Mr.",
                            position: "Shipping Manager",
                        }, {
                            id: 14,
                            fullName: "Victor Norris",
                            prefix: "Mr.",
                            //selected: true,
                            position: "Shipping Assistant"
                        }]
                    }, {
                        id: 4,
                        fullName: "Brett Wade",
                        prefix: "Mr.",
                        position: "IT Manager",
                        expanded: true,
                        items: [{
                            id: 5,
                            fullName: "Amelia Harper",
                            prefix: "Mrs.",
                            position: "Network Admin"
                        }, {
                            id: 6,
                            fullName: "Wally Hobbs",
                            prefix: "Mr.",
                            position: "Programmer"
                        }, {
                            id: 7,
                            fullName: "Brad Jameson",
                            prefix: "Mr.",
                            position: "Programmer"
                        }, {
                            id: 8,
                            fullName: "Violet Bailey",
                            prefix: "Ms.",
                            position: "Jr Graphic Designer",
                        }]
                    }, {
                        id: 9,
                        fullName: "Barb Banks",
                        prefix: "Mrs.",
                        position: "Support Manager",
                        expanded: true,
                        items: [{
                            id: 10,
                            fullName: "Kelly Rodriguez",
                            prefix: "Ms.",
                            position: "Support Assistant"
                        }, {
                            id: 11,
                            fullName: "James Anderson",
                            prefix: "Mr.",
                            position: "Support Assistant"
                        }]
                    }]
                }];


                var lk = $('<div class="lkdrawer">' +
                           '<div class="boxOptions1">' +
                               '<div  data-options="dxItem:{ratio: 1}" class="dx-theme-background-color"><div class="filterE lkcontent"></div></div>' +
                               '<div data-options="dxItem: {baseSize: 50}"><div class="lktoolbar d-flex align-items-center" style="height:50px"></div></div>' +
                            '</div>' +
                        '</div>');
                var btn = $('<div class="selempbtn box" style="padding-left:10px"><div class="nutsave"></div><div style="width:20px;display:inline-block"></div><button type="button" class="btn btn-secondary btn-o nutcancel"></button></div>');

                El.append(lk);
                lk.find(".boxOptions1").dxBox({
                    direction: "col",
                    width: "100%",
                    height: "100%",
                }).on('click', 'button', function (e) {
                    btnclick(this, e);
                });

                btn.find('.nutsave').dxButton({
                    text: '...',
                    stylingMode: "outlined",
                    type: "success",
                    icon: 'check',
                    disabled: true,
                    onContentReady: function (e) {
                        cmds.btnSEL = e.component;
                    }, onClick: function (e) {
                        if (opts.selcb) {
                            opts.selcb(cmds['emps'].getSelectedRowsData().map(function (a) { return a.id }));
                        };
                        popup.hide();
                    }
                });

                cmds['emps'] = lk.find(".lkcontent");

                lk.find(".lktoolbar").append(btn);

                this._$drawer = El.find(".lkdrawer").dxDrawer({
                    opened: true,
                    height: '100%',
                    openedStateMode: puS('drawer'),
                    template: function (EL) {

                        var tree = $("<div>").width(300);
                        EL.append(tree);

                        cmds['sec'] = tree.dxTreeView({
                            //dataSource: data,
                            parentIdExpr: "pid",
                            keyExpr: "id",
                            displayExpr: "dis",
                            expandedExpr: "expa",
                            dataStructure: "plain",
                            focusStateEnabled: true,
                            rootValue: 0,
                            width: 340,
                            height: '100%',
                            selectionMode: 'single',
                            searchMode: "equals",
                            searchExpr: ["vis"],
                            onItemClick: function (e) {
                                e.component.selectItem(e.itemData);
                                secFn(e.node);
                            },
                            onContentReady: function (e) {
                                if (readySEC && typeof readySEC === "function") readySEC(e);
                            },
                            itemTemplate: function (item) {
                                return "<div>" + item.dis + " (" + item.id + ")</div>";
                            }
                        }).dxTreeView('instance');
                    }
                }).dxDrawer("instance");




            },
            //showTitle: true,
            //title: "Information",
            visible: false,
            dragEnabled: false,
            closeOnOutsideClick: false,
            showCloseButton: true,
            toolbarItems: [{
                html: cmds.$frmTIT,
                location: "center",
                visible: puS('title')
            }, {
                widget: "dxButton",
                location: "before",
                options: {
                    icon: "hierarchy",
                    onClick: function (e) {
                        popup._$drawer.toggle();
                    }
                }
            }, {
                widget: "dxButton",
                location: "before",
                options: $.extend({
                    icon: "refresh",
                    //text: "Refresh",
                    onClick: function (e) {
                        srclocked(true);
                        loaddb(1);
                    }
                }, puS('refresh'))
            }, {
                widget: "dxTextBox",
                location: "after",
                options: {
                    mode: "search",
                    showClearButton: true,
                    placeholder: DevExpress.localization.message.getDictionary()["dxDataGrid-searchPanelPlaceholder"],
                    onKeyUp: searchByText,
                    onContentReady: function (e) {
                        cmds.searchBOX = e.component;
                        e.component.element().find(".dx-icon-clear").click(function () {
                            if (cmds.searchVAL != '') {
                                doSEARCH(e.value);
                            };
                        });
                    },
                    onValueChanged: function (e) {
                        if (cmds.searchVAL != e.value) {
                            doSEARCH(e.value);
                        };
                    }
                }
            }],
            onContentReady: function (e) {
                setTimeout(function () {
                    //e.component._$popupContent.find('iframe').attr('src', 'filebrowser.php?hostkind=' + encodeURIComponent(JSON.stringify(gridintance.hostkind)) + '&atfolder=' + fileManager.getCurrentDirectory().key + '&act=' + popup.cpACT);
                }, 100);
            },
            onHidden: function (e) {
                $("#popup .lkemp-hwnd").remove();
            }
        }, popup = $("<div class='lkemp-hwnd'/>").appendTo($("#popup")).dxPopup($.extend(pOpts, puS('pu'))).dxPopup("instance")
        , listEmp = function (db, eopt) {
            //
            cmds['emps'] = cmds['emps'].dxDataGrid($.extend({
                keyExpr: 'id',
                dataSource: db,
                focusedRowEnabled: true,
                pager: {
                    showPageSizeSelector: true,
                    allowedPageSizes: [1, 20, 50, 100, 200]
                },
                loadPanel: {
                    showPane: false
                },
                height: '100%',
                showBorders: true,
                selection: {
                    mode: "multiple"
                },
                columns: [{
                    caption: '#',
                    width: 50,
                    cellTemplate: function (cellElement, cellInfo) {
                        var pI = cmds['emps'].pageIndex(); if (pI < 0) pI = 0;
                        cellElement.text(pI * cmds['emps'].pageSize() + cellInfo.row.rowIndex + 1)
                    }
                }, {
                    caption: lan.js_007_1,
                    dataField: "acno",
                    dataType: "number",
                    width: 60
                }, {
                    caption: lan.js_007_3,
                    dataField: "empcode",
                    dataType: "string",
                    width: 80
                }, {
                    caption: lan.js_007_5,
                    dataField: "ho",
                    dataType: "string",
                    width: 100
                }, {
                    caption: lan.js_007_7,
                    dataField: "ten",
                    dataType: "string",
                    width: 100
                }, {
                    caption: lan.js_007_14,
                    dataField: "secid",
                    lookup: {
                        dataSource: cmds.dbsecs,
                        displayExpr: "dis",
                        valueExpr: "id"
                    },
                    //hidingPriority: 4,
                }, {
                    caption: lan.js_007_10,
                    dataField: "hireday",
                    dataType: "date",
                    allowFiltering: false,
                    //hidingPriority: 2,
                    width: 100
                }
                //, {
                //    caption: lan.js_007_15,
                //    dataField: "posid",
                //    lookup: {
                //        //dataSource: jdat.poss,
                //        displayExpr: "dis",
                //        valueExpr: "id"
                //    },
                //    hidingPriority: 3
                //}
                ]
                , onContentReady: function (e) {
                    if (readyEMP && typeof readyEMP === "function") readyEMP(e);
                }
                , onSelectionChanged: function (e) {
                    cmds.btnSEL.option('disabled', e.selectedRowKeys.length == 0);
                }
            }, eopt)).dxDataGrid("instance");
            cmds['emps'].columnOption("command:select", "visibleIndex", 0);
            cmds['emps'].columnOption("command:select", "width", 50);
        }, loaddb = function (i) {
            $.when(opts.mainO.svrDAT({ uri: lkurl })).then(function (v1) {
                try {
                    lookupem = JSON.parse(v1);
                    if (lookupem.masterdat) {
                        masterdat = JSON.parse(lookupem.masterdat);
                        delete lookupem['masterdat'];
                    };
                    renderLK(i);
                }
                catch (err) {
                    //setTimeout(function () {
                    //    srclocked(false);
                    //}, 35000);
                }
            }, function (error) {

            });
        },
         renderLK = function (mode) {
             debugger;
             if (opts.e && typeof opts.e === 'object' && typeof opts.e.then === "function") {
                 opts.e.then(function (v) {
                     debugger;
                     if (v == 'err') {
                         opts.em = -1;
                         opts.e = [];
                     } else {
                         opts.e = JSON.parse(v);
                         opts.ef = 'id';
                     };
                     _render(mode);
                 });
             } else {
                 _render(mode);
             };
         },
        _render = function (i) {
            //
            lan = JSON.parse(lookupem.lan);
            //
            cmds.$frmTIT.html(lan.js_007_13.toUpperCase());
            cmds.btnSEL.option('text', lan.js_007_36);
            cmds.btnSEL._$element.closest('.selempbtn').find('button').html('<i class="dx-icon dx-icon-close"></i> ' + lan.js_007_37);
            //
            var empdb = lookupem.data, filterSEC = new Date().getTime().toString()
            if (opts.e) {
                debugger;
                if (opts.em == 0) {//loai tru
                    empdb = $.grep(empdb, function (e, i) {
                        return opts.e.indexOf(e[opts.ef]) == -1;
                    });
                } else if (opts.em == -1) {//empty
                    empdb =[];
                }
            };
            var validsecs = _uniARR($.map(empdb, function (e, i) {
                return e.secid;
            }));
            masterdat.secs.forEach(function (n, i) {
                if (validsecs.indexOf(n.id) > -1) n.vis = filterSEC;
            });
            //
            readySEC = function (e) {
                var RR = e.component._dataAdapter.getRootNodes();
                if (RR.length > 0) {
                    cmds['sec'].selectItem(RR[0]);
                    //secFn(cmds['sec'].getSelectedNodes()[0]);
                };
            };
            cmds['sec'].option('searchValue', filterSEC);
            cmds['dbsecs'] = masterdat.secs;
            cmds['sec'].option('dataSource', cmds['dbsecs']);
            //
            if (!i) {

                listEmp(empdb, lookupem.eopt);

                var fuck = cmds['emps'].getDataSource(), myAwesomeLoop = function () {
                    var deferred = $.Deferred();
                    setTimeout(function () {
                        deferred.resolve('test load more emps from server');
                    }, 1);
                    return deferred.promise();
                };
                fuck.load = function () {
                    var $_tha = this;
                    return myAwesomeLoop().then(function (data) {
                        fuck.constructor.prototype.load.call($_tha);
                    });
                };

            } else {
                cmds.searchVAL = null; cmds.searchBOX.option('value', null); cmds['emps'].searchByText(null);
                cmds['emps'].clearFilter();
                cmds['emps'].deselectRows(cmds['emps'].getSelectedRowKeys());
                cmds['emps'].option('dataSource', empdb);
            };
            //
            readyEMP = function (e) {
                readySEC = null;
                readyEMP = null;
                if (!opts.loadcb || i) {
                    srclocked(false);
                } else {
                    opts.loadcb();
                }
            };
        }


        popup.show();

        debugger;
        if (!lookupem) {
            setTimeout(function () { loaddb(); }, 50);
        } else {
            renderLK();
        };

    }
    fnMain.prototype.publicSharedVar = 'quux';

    return fnMain;
});