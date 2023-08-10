function _dog(dogx) {

    var dume_validationSYNC = function (params) {
        //
        //
        //var shared = dogx.shared(),
        //uaa = shared.uaa,//lay theo url cua form
        //op = {
        //    uri: uaa.length > 0 ? (uaa + "/chk_ot_time") : '/api/lkdata' /*co tinh de undefined de khi vao merge no se bo qua*/
        //};
        ////
        //return shared.$mainO.svrDAT(op);
        //
        const d = $.Deferred(),
            tha = this;
        //
        setTimeout(function () {
            //$.ajax('https://jsonplaceholder.typicode.com/posts?_limit=20').done(function (res) {
            //    // res.message contains validation error message
            //    //res.isValid ? d.resolve() : d.reject(res.message);

            //    // ===== or if "res" is { isValid: Boolean, message: String } =====
            //    d.resolve({ isValid: true, message: 'du me' });
            //    //
            //    console.log('dume ');
            //    //
            //}).fail(function (error) {
            //    console.error("Server-side validation error", error);

            //    d.reject("Cannot contact validation server");
            //})


            d.resolve({ isValid: true, message: 'du me' });
            //
            //console.log('dume ' + new Date().getTime());
            //tha._$element.find('input.dx-texteditor-input').trigger('change');
        }, 1);

        return d.promise();

        //
    }, dume_validationCUS = function (e) {
        //
        if (!e.validator.dume_validationHWND) {
            e.validator.option('validationRules[1]', { 'type': 'async' });
            e.validator.dume_validationHWND = dume_validationSYNC;
            return true;
        } else {
            return e.validator.dume_validationHWND();
        };
    }, tong_SEL = {

        lookup: {
            dataSource: [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15],
        }
        , editorOptions: {

            searchEnabled: false,
            //acceptCustomValue: false,
            //openOnFieldClick: true,

            //rtlEnabled: true,
            noDataText: '0',
            placeholder: '',
            //mask: "Hh:Mm",
            //maskRules: {
            //    H: char => char >= 0 && char <= 2,
            //    h: (char, index, fullStr) => {
            //        if (fullStr[0] == '2')
            //            return [0,1,2,3].includes(parseInt(char));
            //        else
            //            return [0,1,2,3,4,5,6,7,8,9].includes(parseInt(char));
            //    },
            //    M: char => char >= 0 && char <= 5,
            //    m: char => char >= 0 && char <= 9
            //},

            dropDownOptions: {
                onContentReady: function (e) {
                    e.component._$popupContent.addClass('text-right');
                }
            },
            onContentReady: function (e) {
                //var btn = e.element.find('.dx-texteditor-buttons-container'),
                //    txt = btn.prev();
                //btn.insertBefore(txt);
            }

        }
    }

    /*
    , tong_NUM = {

        editorOptions: {

            //showSpinButtons: true,
            onContentReady: function (e) {

                //var focusedElement,
                //.on('focus', 'input', function () {
                //    if (focusedElement == this) return; //already focused, return so user can now place cursor at specific point in input.
                //    focusedElement = this;
                //    setTimeout(function () {
                //        //focusedElement.select();
                //        inputEl.selectionStart = 0;
                //        inputEl.selectionEnd = inputEl.value.length;
                //    }, 100); //select all text in any field on focus for easy re-entry. Delay sightly to allow focus to "stick" before selecting.
                //});
                //
                //
                e.element.addClass('dx-dropdowneditor');//and vao de khi mouse hover background
                //
                var inp = e.element.find('.dx-texteditor-input-container'),
                    dogNUM = e.component,
                    refDIV;
                //
                $('<div></div>').insertBefore(inp).dxDropDownButton({

                    items: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5],
                    //stylingMode: 'contained',
                    //useSelectMode: true,
                    showArrowIcon: false,
                    dropDownOptions: {
                        onShowing: function (e) {
                            //e.component._$wrapper.css('width', inp.parent().width());
                            e.component.option({ 'width': inp.parent().width() });
                            e.component._$popupContent.addClass('text-right');
                            refDIV.parent().addClass('dx-dropdowneditor-active');
                            //
                            var lst = e.component.content().find('.dx-list').dxList('instance');
                            lst.option({ 'selectedItemKeys': [dogNUM.option('value')] });
                            //
                        }
                        ,
                        onHidden: function (e) {
                            refDIV.parent().removeClass('dx-dropdowneditor-active');
                        }
                    },
                    onContentReady: function (e) {
                        refDIV = e.element.find('.dx-button-content').html('<div class="dx-dropdowneditor-icon"></div>');
                        refDIV.parent().removeClass().addClass('dx-button-normal dx-button-mode-contained dx-widget dx-dropdowneditor dx-buttongroup-item');
                    }
                    ,
                    onItemClick: function (e) {
                        dogNUM.option('value', e.itemData);
                    }
                });

                setTimeout(function () {
                    //
                    inp.find('input')
                    //detect valid value
                   .on('change', function (e) {
                       //var c = e;
                       //e.currentTarget.value=15;
                       var td = inp.closest('td'),
                           vtor = td.data().dxValidator,
                           rst = vtor._validationInfo.result;

                       if (rst && rst.isValid === true && rst.status === 'valid') {

                           //console.log('du me tao kho cuc qua nhieu')

                           //vtor.option("validationRules[1]", {
                           //    'type': 'async', validationCallback: 
                           //});
                           //
                           //var cusAC = vtor._validationRules[1].validator;
                           //cusAC.validate();

                           //cusAC.isValid = false;
                           //cusAC.message = "console.log('onValueChanged trigger');";
                           //cusAC.validator.validate();
                           ////
                           //$.ajax('https://jsonplaceholder.typicode.com/posts?_limit=2').done(function (res) {
                           //    cusAC.isValid = true;
                           //    cusAC.message = "";
                           //    cusAC.validator.validate();
                           //}).fail(function (error) {
                           //    console.error("Server-side validation error", error);
                           //});


                           var op = td.parent().data().options,
                               col = op.component._controllers.editing._getEditColumn();
                           //
                           var num = DevExpress.localization.number.parse(e.currentTarget.value, 'decimal');
                           nguye = parseInt(num),
                           le = num - nguye,
                           isMOD = false;
                           if (le > 0.5) {
                               le = 1;
                               isMOD = true;
                           } else if (le > 0) {
                               le = 0.5
                               isMOD = true;
                           };
                           //
                           if (isMOD) {
                               op.data.tong = nguye + le;
                               //console.log(' op.data.tong: ' + op.data.tong);
                           };
                           //console.log(".on('change', function (e) {");
                           //
                       };

                       //console.log(inp.closest('td').data().dxValidator._validationInfo.result.status);
                   })
                   .on('keydown', function (e) {

                       var str = e.key,//String.fromCharCode(event.keyCode),
                            sp = DevExpress.localization.number._getSeparators(),
                            pV = e.currentTarget.value,
                            isOK = true;
                       //
                       if (['.', ','].indexOf(str) > -1) {
                           //
                           if (str === sp.decimalSeparator) {
                               if (pV.indexOf(str) > -1) {
                                   isOK = false;//co ky tu phan cach so le nam trong chuoi roi!
                               };
                           } else {
                               isOK = false;
                           };
                       };
                       //else {//check va lam tron so
                       //    if (/[0-9]/.test(str)) {
                       //        //
                       //        var wV = DevExpress.localization.number.parse(pV + str, 'decimal');
                       //        if (wV < 0.5 || wV > 24) {
                       //            isOK = false;
                       //        };
                       //    };
                       //};
                       //
                       //
                       if (!isOK) {
                           e.preventDefault();
                       } else {

                       };
                       //
                   })
                    //select all text
                    .focus();
                }, 50);



                //inp.on('keyup', 'input', function (e) {
                //    console.log(e.currentTarget.value);
                //    e.preventDefault();
                //});

            }

            , onFocusIn: function (e) {
                var inputEl = e.element.find(".dx-texteditor-input")[0];
                inputEl.selectionStart = 0;
                inputEl.selectionEnd = inputEl.value.length;
            }

            //, valueChangeEvent: "keyup"

            , onKeyDown: function (e) {//this function name is not with the right casing "onKeyPress"var event = e.event.jQueryEvent,
                //    var str = e.event.key,//String.fromCharCode(event.keyCode),
                //                sp = DevExpress.localization.number.default._getSeparators(),
                //                nV = e.event.currentTarget.value,
                //                isOK = true;
                //    //
                //    if (/[0-9]/.test(str)) {
                //        //
                //        isOK = false;
                //        //
                //    } else if (str === sp.decimalSeparator) {
                //        //
                //        if (str === sp.decimalSeparator) {
                //            if (nV.indexOf(str) > -1) {
                //                isOK = false;//co ky tu phan cach so le nam trong chuoi roi!
                //            };
                //        };
                //    };
                //    //
                //    if (isOK) {
                //        //check va lam tron so
                //    } else {
                //        e.event.preventDefault();
                //        e.event.stopPropagation();
                //    }
            }

        }
    , "validationRules": [
        {
            type: 'range',
            min: 0.5,
            max: 24,
            message: 'Sorry, we submit only the age from 0.5 to 24.',
        }
        ,
        //{ 
        //    type: "async", 
        //    validationCallback: 

        {
            type: "custom",
            reevaluate: false,
            validationCallback: dume_validationCUS
        }

    ]

    }
    */

    , RZ_HWND = -1;

    function checkEmail(email) {
        //return $.ajax({
        //    // The url returns { errorText: "The Email address you entered already exists.", isValid: false }
        //    url: "https://www.mywebsite.com/api/checkEmail",
        //    dataType: "json",
        //    data: { email: email }
        //});

        const d = $.Deferred(), tha = this;
        //
        $.ajax('https://jsonplaceholder.typicode.com/posts?_limit=20').done(function (res) {
            // res.message contains validation error message
            //res.isValid ? d.resolve() : d.reject(res.message);

            // ===== or if "res" is { isValid: Boolean, message: String } =====
            d.resolve({ isValid: true, message: 'du me' });
            //
            //console.log('dume ');
            //
        }).fail(function (error) {
            console.error("Server-side validation error", error);

            d.reject("Cannot contact validation server");
        })


        return d.promise();
    }

    var __columns = function (lagu,othed) {
        //
        othed = othed || [];
        //
        var masOT = JSON.parse(lagu.rawD.ma$ter).filter(function (v) {
            return othed.indexOf( v.id) == -1 && v.typ == 4;
        }),

            chkOverlapOT = function (its, dogV) {
                //debugger;
                var nV = dogV.newData, oV = dogV.oldData;
                //
                if (oV) {
                    if (!nV.tugio) {
                        nV.tugio = oV.tugio;
                    }
                    if (!nV.dengio) {
                        nV.dengio = oV.dengio;
                    }
                };
                //
                //
                //gia tri moi, ko bao gom tu gio va den gio
                if (!nV.tugio || !nV.tugio) return true;
                //
                for (var i = its.length - 1; i > -1; i--) {
                    if (its[i].isEditing === false) {
                        var r = its[i].data,
                            otu = new Date(r.tugio).setMilliseconds(0),
                            ode = new Date(r.dengio).setMilliseconds(0),
                            ntu = new Date(nV.tugio).setMilliseconds(0),
                            nde = new Date(nV.dengio).setMilliseconds(0);
                        if (nde <= otu || ode <= ntu) {
                            //ok
                        } else {
                            return false;
                        };
                        //if (otu <= ntu && ntu < ode && (nde < ode || nde >= ode)) {// 
                        //    return false;
                        //} else if (ntu < otu && nde > otu) {
                        //    return false;
                        //};
                    };
                };
                return true;
            }
            ,
            isCHK_SVR = 1;//phai di check overlaps server

        //
        return {
            editing: {

                confirmDelete: false,

                allowUpdating: true,
                mode: "form",

                container: '.luoi_head',
                getEditFormTemplate: function (e) {
                    var c = 3;
                },
                form: {
                    //labelMode: 'floating',
                    elementAttr: {
                        class: "text-right"
                    },
                    colCount: 1,
                    //colCountByScreen: {
                    //    xs: 2,
                    //    sm:4
                    //},
                    screenByWidth: function (width) {
                        //clearTimeout(RZ_HWND);
                        var dg = width < 500 ? 'xs' : (width < 650 ? 'sm' : 'md');
                        //
                        //RZ_HWND = setTimeout(function () {
                        //    if (window._fuckingEditing) {
                        //        window._fuckingEditing.trigger('fuckingEditing_COL', [dg,width]);
                        //    };
                        //}, 300);
                        //
                        return dg;
                    },
                    items: [{
                        itemType: 'group',
                        colCount: 4,
                        colCountByScreen: {
                            xs: 1,
                            sm: 2,
                            md: 3
                        },
                        items: [{
                            colSpan: 2,
                            dataField: "id"
                        },
                           {
                               colSpan: 2,
                               dataField: "EachDate"
                           }
                           ,
                           {
                               colSpan: 1,
                               dataField: "tugio"
                           }

                           ,
                           {
                               colSpan: 1,
                               dataField: "tong"
                           }
                           ,
                           {
                               colSpan: 1,
                               dataField: "dengio",
                               readOnly: true
                           }
                        ]
                    }
                        ,
                        {
                            itemType: 'group',
                            items: [{
                                dataField: "notes",
                                editorType: "dxTextArea",
                                editorOptions: {
                                    maxLength: 200
                                }
                            }]
                        }
                    ],
                    onContentReady: function (e) {
                        //console.log('  onContentReady: function (e) {');
                        //
                        if (!e.component._fuckCLK) {
                            //
                            e.component._fuckCLK = 1;
                            //
                            setTimeout(function () {
                                var form = e.element, bk = form.parent().find('.dx-button').data().dxButton._clickAction;
                                form.parent().find('.dx-button').data().dxButton._clickAction = function () {
                                    srclocked(true);
                                    // debugger;
                                    //var dog= e.component.validate();
                                    e.component.validate().brokenRules.forEach(function (it) {
                                        if (it.type == 'custom') {
                                            it.isValid = true;
                                        };
                                    });
                                    //    .every(function (it) {
                                    //    it.validator.validate();
                                    //    var c = 0;
                                    //});

                                    //e.component.itemOption("EachDate", "colSpan", 2);
                                    //e.component.itemOption("Notes", "colSpan", 2);
                                    setTimeout(bk, 100);
                                };
                                //let btnSave = form.parentElement.parentElement.querySelector("[aria-label='Save']");
                                //let btnCancel = form.parentElement.parentElement.querySelector("[aria-label='Cancel']");
                                //btnCancel.parentNode.insertBefore(btnCancel, btnSave);
                                //let saveButton = Button.getInstance(btnSave);
                                //let cancelButton = Button.getInstance(btnCancel);
                                //saveButton.option("icon", "save");
                                //saveButton.option("type", "danger");
                                //cancelButton.option("icon", "undo");



                            }, 100);
                        };
                        srclocked(false);
                    },
                    onInitialized: function (e) {
                        //
                        var dogEdt = e.element.closest('tr'),

                            bk_DAT = JSON.stringify(dogEdt.data().options.data),

                             dog_edit_frm = dogEdt.closest('.luoi_head'),

                             fnFRM = function (ex, bc, de) {
                                 //
                                 window._fuckingEditing = null;
                                 dog_edit_frm.css('display', '').prev().empty();
                                 //
                                 //
                                 if (this == 0 && ex.changes.length > 0 && ex.changes[0].type == 'update') {

                                     bk_DAT = JSON.parse(bk_DAT);


                                     grd.getDataSource()._items.some(function (fD) {
                                         //debugger;
                                         if (fD.aid == bk_DAT.aid) { //phuc hoi lai
                                             //
                                             for (var f in ex.changes[0].data) {
                                                 // check if the property/key is defined in the object itself, not in parent
                                                 if (ex.changes[0].data.hasOwnProperty(f)) {

                                                     fD[f] = bk_DAT[f];

                                                 };
                                             };
                                             //
                                             return true;//exit some
                                             //
                                         }
                                     });
                                     //
                                     grd.refresh();
                                     //
                                 };
                                 //off all event
                                 grd._controllers.editing.off('editCanceled');
                                 grd._controllers.editing.off('saved');
                                 grd._controllers.editing.off('rowValidating');
                                 //
                                 e.component.dispose();
                                 //
                                 srclocked(false);
                                 //
                             };
                        //
                        var grd = dogEdt.data().options.component,
                            dumeFRM = e.component,
                            dumaEDT = {};
                        //
                        isCHK_SVR = isCHK_SVR == -2 ? 2 : 1;//reset
                        //
                        grd._controllers.editing
                            .off('editCanceled').on('editCanceled', fnFRM.bind(0))
                            .off('saved').on('saved', fnFRM.bind(1))
                            .off('rowValidating').on('rowValidating', function (v) {
                                if (v.brokenRules.length == 0) {
                                    //
                                    const defe = $.Deferred(),
                                        isVA= chkOverlapOT(grd._controllers.data._items, v);
                                    //
                                    if (isVA === false) {
                                        //
                                        v.errorText = 'result.errorText';
                                        //
                                        var dog = e.component.validate();
                                        dog.validators.forEach(function (it) {
                                            //it._validationRules[0].isValid = false;
                                            if (it._validationRules[0].type == 'custom') {
                                                var cusAC = it._validationRules[0];
                                                cusAC.isValid = false;
                                                cusAC.message = lagu.js_011_35 || "Overtime overlapping";
                                                //cusAC.validate();
                                                cusAC.validator.validate();
                                                cusAC.validator._getEditor().focus();
                                            } else {
                                                return false;
                                            }
                                        });
                                        //
                                        v.isValid = false;
                                        defe.resolve(false);
                                        //
                                    } else {
                                        //
                                        dume_validationSYNC().done(function (result) {
                                            //
                                            v.isValid = isVA;
                                            defe.resolve(true);
                                            //
                                        });
                                        //
                                    };
                                    //
                                    v.promise = defe.promise();
                                    //
                                } else {
                                    srclocked(false);
                                };
                            })
                            .off('editorPrepared').on('editorPrepared', function (v) {
                                //
                                if (v.dataField) {//datafield moi listen
                                    var nx = v.editorElement.data();
                                    //
                                    nx[nx.dxComponents[0]].off('valueChanged').on('valueChanged', function (x) {
                                        var fiNa = this.__x.fi;
                                        if (['EachDate', 'tugio', 'tong'].indexOf(fiNa) > -1) {
                                            //
                                            grd._fieldChg(dumaEDT, fiNa, x.value, dogEdt.data().options.data);
                                            //
                                            isCHK_SVR = 2;//phai di check overlaps server
                                            //
                                        };
                                        //
                                    }).__x = {
                                        fi: v.dataField
                                    };
                                    if (['tugio', 'dengio'].indexOf(v.dataField) > -1) {
                                        dumaEDT[v.dataField] = nx[nx.dxComponents[0]];
                                    };
                                };
                            });

                        //grd.off('initNewRow').on('initNewRow', function (e) {
                        //        debugger;
                        //    });


                        //
                        //append nguyen cai td vao tren
                        const duma2=e.element.parent().css({
                                "display": 'block',
                                'margin': '0 -15px',
                                'box-shadow': 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                                'padding': '10px 20px',
                                'background-color': 'rgba(191, 191, 191, 0.10)'
                        }),
                        dume1 = dog_edit_frm.prev();
                        //
                        dog_edit_frm.css('display', 'none');
                        //
                        //du ma iphone 6 liway loi
                        //setTimeout(function(){
                            dume1.prepend(duma2);
                        //},100);
                        //
                    }
                }
            }

            , onInitNewRow: function (e) {
                e.data = {
                    id: masOT.length > 0 ? masOT[0].id : null,
                    EachDate: new Date().setHours(0, 0, 0,0),
                    tugio: new Date().setHours(17, 0, 0, 0),
                    tong: 1,
                    dengio: new Date().setHours(18, 0, 0, 0),
                    notes: ''
                };

                isCHK_SVR = -2;//phai di check overlaps server

                //e.data.hireDate = new Date();
                //e.promise = getDefaultData().done(function (data) {
                //    e.data.ID = data.ID;
                //    e.data.position = data.Position;
                //});

            }
            ,

            columns: [
                        {
                            type: "selection",//https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#type
                            width: 40
                            //minWidth: 30,
                        }
                        ,
                        {
                            caption: lagu.js_011_16 || 'Overtime type',
                            cssClass: 'wrapfuck dog-placeholder',
                            dataField: 'id',
                            minWidth: 150,
                            lookup: {
                                dataSource: masOT,
                                displayExpr: 'ten',
                                valueExpr: 'id',
                            },
                            editorOptions: {

                                searchEnabled: false,
                                acceptCustomValue: false,
                                //openOnFieldClick: true,

                            }
                            , validationRules: [{ type: 'required' }]
                        }

                        ,


                        {
                            widget: 'dxDateBox',
                            caption: lagu.js_011_17 || "Date",
                            dataField: 'EachDate',
                            dataType: 'date',
                            format: function (e) {
                                return new Intl.DateTimeFormat(apisvr.a$.selected_language, {//
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit'
                                }).format(e);
                            },
                            //cssClass:'small',
                            minWidth: 100,
                            //minWidth: 75,
                            editorOptions: {

                                acceptCustomValue: false,
                                openOnFieldClick: true,

                                pickerType: DevExpress.devices._realDevice.deviceType == 'phone' ? 'rollers' : undefined,
                                //pickerType:'native',
                                //adaptivityEnabled: true,
                                //onFocusIn: function (e) {
                                //    e.element.find('.dx-texteditor-input').attr('type', 'datetime-local');
                                //}
                            }
                            , validationRules: [
                                { type: 'required', message: "My custom message" },
                            ]
                        }
                        ,

                         $.extend({
                             widget: 'dxNumberBox',
                             caption: lagu.js_011_18 || "Hour(s)",
                             dataField: 'tong',
                             dataType: 'number',
                             minWidth: 75,
                             format: "#.#"
                             , validationRules: [
                                 {
                                     type: "custom",
                                     validationCallback: function (e) {
                                         return true;
                                     },
                                     message: "An even number is expected"
                                 }
                             ]
                         }, tong_SEL)
                        ,

                        {
                            widget: 'dxDateBox',
                            caption: lagu.js_011_19 || "From time",
                            dataField: 'tugio',
                            dataType: 'datetime',
                            format: "HH:mm",
                            minWidth: 75,
                            editorOptions: {
                                displayFormat: "HH:mm",
                                useMaskBehavior: true,
                                "type": "time",
                                pickerType: 'list'
                                ,
                                dropDownOptions: {//bo chu chon tren ios.
                                    showTitle: false
                                },

                                acceptCustomValue: false,
                                openOnFieldClick: true,


                                onOpened: function (e) {
                                    //
                                    var list = e.component.content().find('.dx-list').dxList('instance'),
                                        colon = e.component._regExpInfo.patterns[1];
                                    //
                                    list._timeout = -1;
                                    list._sync = function (t0, prt) {
                                        //
                                        clearTimeout(list._timeout);
                                        //
                                        list._timeout = setTimeout(function () {
                                            //
                                            var DXTOR = e.component, pou = DXTOR._popup;
                                            if (pou && pou.option('visible') === true) {
                                                var atV = prt || (e.element.find('input')[1].value || '00' + colon + '00').split(colon),

                                                idx = parseInt(atV[0]) * 2 + (parseInt(atV[1]) === 0 ? 0 : 1),
                                                lit = list._$element.find('.dx-list-item:eq(' + idx + ')');

                                                if (lit.length > 0) {
                                                    list.selectItem(lit);
                                                    list.scrollToItem(lit);
                                                };
                                            };
                                            //
                                        }, t0);
                                    };
                                    //
                                    list._sync(0);
                                    e.component._lst = list;
                                    //
                                }

                                ,

                                onInput: function (e) {
                                    var DXTOR = e.component;
                                    if (DXTOR._activePartIndex == 2) {

                                        setTimeout(function () {
                                            var ipt = e.element.find(".dx-texteditor-input"),
                                                prt = ipt.val().split(DXTOR._regExpInfo.patterns[1]);//colon
                                            //
                                            if (prt.length == 2) {
                                                //
                                                var lastK = parseInt(prt[1].slice(-1));
                                                if (lastK > 0 && lastK < 4) {
                                                    //
                                                    prt[1] = '30';
                                                    lastK = 30;
                                                    //
                                                } else {
                                                    prt[1] = '00';
                                                    lastK = 0;
                                                };
                                                //
                                                DXTOR._setActivePartValue(lastK);
                                                DXTOR._selectNextPart(1);
                                                //
                                                if (DXTOR._lst) DXTOR._lst._sync(100, prt);
                                            };

                                        }, 10);
                                        //
                                    };

                                }
                                //adaptivityEnabled: true,

                                ,

                                onContentReady: function (ep) {
                                    ep.component._onMouseWheel = function (e) {
                                        if (this._useMaskBehavior()) {
                                            var ofs = 1;
                                            if (ep.component._activePartIndex == 2) {
                                                ofs = 30;
                                            };
                                            this._partIncrease(e.delta > 0 ? ofs : -1 * ofs, e);
                                            //
                                            if (this._lst) this._lst._sync(300);
                                            //
                                        }
                                    };

                                    //ep.component.option('value', new Date().setHours(0, 0, 0));
                                    // ep.element.find('input').val("00:00");
                                }

                            }
                            , validationRules: [{ type: 'required', message: "My custom message" }]
                        }

                        ,

                        {

                            //hidingPriority: 1,

                            widget: 'dxDateBox',
                            caption: "(" + (lagu.js_011_20 || 'To time') + ")",
                            dataField: 'dengio',
                            dataType: 'datetime',
                            format: "HH:mm",
                            minWidth: 75,
                            cssClass: 'text-secondary',
                            editorOptions: {
                                elementAttr: { "class": 'text-secondary' },
                                displayFormat: "HH:mm",
                                useMaskBehavior: true,
                                "type": "time",
                                pickerType: 'list'
                                ,
                                readOnly: true,
                                acceptCustomValue: false,
                                openOnFieldClick: true,
                                placeholder: '--:--'


                                //onOpened: function (e) {
                                //    //
                                //    var list = e.component.content().find('.dx-list').dxList('instance'),
                                //        colon = e.component._regExpInfo.patterns[1];
                                //    //
                                //    list._timeout = -1;
                                //    list._sync = function (t0, prt) {
                                //        //
                                //        clearTimeout(list._timeout);
                                //        //
                                //        list._timeout = setTimeout(function () {
                                //            //
                                //            var DXTOR = e.component, pou = DXTOR._popup;
                                //            if (pou && pou.option('visible') === true) {
                                //                var atV = prt || (e.element.find('input')[1].value || '00' + colon + '00').split(colon),

                                //                idx = parseInt(atV[0]) * 2 + (parseInt(atV[1]) === 0 ? 0 : 1),
                                //                lit = list._$element.find('.dx-list-item:eq(' + idx + ')');

                                //                if (lit.length > 0) {
                                //                    list.selectItem(lit);
                                //                    list.scrollToItem(lit);
                                //                };
                                //            };
                                //            //
                                //        }, t0);
                                //    };
                                //    //
                                //    list._sync(0);
                                //    e.component._lst = list;
                                //    //
                                //}

                                //,

                                //onInput: function (e) {
                                //    var DXTOR = e.component;
                                //    if (DXTOR._activePartIndex == 2) {

                                //        setTimeout(function () {
                                //            var ipt = e.element.find(".dx-texteditor-input"),
                                //                prt = ipt.val().split(DXTOR._regExpInfo.patterns[1]);//colon
                                //            //
                                //            if (prt.length == 2) {
                                //                //
                                //                var lastK = parseInt(prt[1].slice(-1));
                                //                if (lastK > 0 && lastK < 4) {
                                //                    //
                                //                    prt[1] = '30';
                                //                    lastK = 30;
                                //                    //
                                //                } else {
                                //                    prt[1] = '00';
                                //                    lastK = 0;
                                //                };
                                //                //
                                //                DXTOR._setActivePartValue(lastK);
                                //                DXTOR._selectNextPart(1);
                                //                //
                                //                if (DXTOR._lst) DXTOR._lst._sync(100, prt);
                                //            };

                                //        }, 10);
                                //        //
                                //    };

                                //}
                                ////adaptivityEnabled: true,

                                //,

                                //onContentReady: function (ep) {
                                //    ep.component._onMouseWheel = function (e) {
                                //        if (this._useMaskBehavior()) {
                                //            var ofs = 1;
                                //            if (ep.component._activePartIndex == 2) {
                                //                ofs = 30;
                                //            };
                                //            this._partIncrease(e.delta > 0 ? ofs : -1 * ofs, e);
                                //            //
                                //            if (this._lst) this._lst._sync(300);
                                //            //
                                //        }
                                //    };

                                //    //ep.component.option('value', new Date().setHours(0, 0, 0));
                                //    // ep.element.find('input').val("00:00");
                                //}
                            }
                        }

                        ,

                        {
                            caption: lagu.js_011_21 || 'Notes',
                            //width:500,
                            minWidth: 150,
                            //hidingPriority: 0,
                            dataField: 'notes',
                            //cssClass: 'dog-max-width',
                            //editorType: "dxTextArea",
                        }

                        ,


                        {
                            type: "buttons",
                            visible: false,
                        }

            ]
        }

    }

    ,
    __regisFRM = function (elUI, masLV, LV_NGA, fO, _gLA, isP, isView) {

        var dume = __columns(elUI.lan, elUI.quy_imp_excel ? [] : [2767]).columns[3],
                dumeO = {
                    cssClass: 'dog_tong',
                    dataField: 'tong',
                    editorType: 'dxNumberBox',

                    label: {
                        text: dume.caption + ' (0' + dau_phay() + '5 ' + (_gLA(31, 3) || 'to') + ' 11' + dau_phay() + '5 ' + (_gLA(34, 5) || 'hour') + ')'//'5 đến 11'
                    }

                    //colSpan: 2,

                    , editorOptions: {

                        //value: elUI.minTong,//default value

                        min: elUI.minTong,
                        max: 11.5,
                    }

                }
        , lngL = $('<div class="text-info d-none"><i class="ti-light-bulb"></i><span></span></div>')
        , msgD = function (v, od) {

            od = difDa(v, od);

            if (od > 0) {
                od++;//du me cong len 1 ngay ....
                lngL.find('span').text(

   (_gLA(18) || 'Total') + ' ' + od + ' ' + (_gLA(34, 4) || 'day' + (od > 1 ? '(s)' : ''))

                    );
            };

            lngL[(od > 0 ? 'remove' : 'add') + 'Class']('d-none');


        };


        //, apple_ios = DevExpress.devices._realDevice.ios


        return [{
            dataField: 'id',
            editorType: 'dxSelectBox',

            editorOptions: {
                items: masLV,
                valueExpr: 'id',
                displayExpr: 'ten',
                searchEnabled: true,

                //value: fO && fO.id || (masLV.length > 0 ? masLV[0].id : null),
            },
            label: {
                text: elUI.lan.js_011_22 || 'Leaving kind choosing'
            },
            validationRules: [{
                type: 'required',
                message: 'Position is required',
            }]
        }
                ,
                {
                    dataField: 'EachDate',
                    editorType: 'dxDateBox',

                    editorOptions: {


                        //value:  new Date(fO && new Date(fO.EachDate) || new Date().setHours(0, 0, 0, 0)),
                        //value: new Date(),

                        width: '100%',

                        acceptCustomValue: !isP,

                        openOnFieldClick: isP,//isP chi open khi phone

                        pickerType: isP ? 'rollers' : undefined,

                        onContentReady: function (ez) {
                            LV_NGA[0] = ez.component;

                            //debugger;
                            //alert('tu ngay:' + LV_NGA[0].option('value') + '- den ngay:' + LV_NGA[1].option('value'));

                            if (LV_NGA[1]) {
                                msgD(new Date(LV_NGA[0].option('value')), new Date(LV_NGA[1].option('value')))
                            };
                        }
                        , onValueChanged: function (v) {

                            var od = new Date(LV_NGA[1].option('value'));
                            if (new Date(v.value).getTime() > od.getTime()) {
                                LV_NGA[1].option('value', v.value);//set den ngay bang tu ngay
                            } else {
                                msgD(v.value, od);
                            };
                        }
                    }
                    , label: {
                        text: elUI.lan.js_011_17 || 'Date'//share with OT
                    }
                }
                ,
                {
                    itemType: 'group',
                    colSpan: 2,
                    items: [{

                        itemType: 'tabbed',

                        cssClass: 'dog_tab',

                        tabPanelOptions: {

                            //repaintChangesOnly: true,

                            height: 120,
                            deferRendering: false,

                            //selectedIndex: fO && fO.selo || 0,// fO.tong  - modify

                            //
                            //
                            disabled: !isView
                            //
                            ,
                            onContentReady: function (b) {
                                //debugger;
                                const d = b.element.closest('.lv_regis_frm.dx-form').data('dxForm').option("formData");
                                if (d && d.hasOwnProperty('selo')) {
                                    b.component.option('selectedIndex', d.selo);
                                };
                            }
                            ,
                            onSelectionChanged: function (e, a) {
                                //debugger;
                                const d = e.element.closest('.lv_regis_frm.dx-form').data('dxForm').option("formData");
                                if (d) {
                                    d.selo = e.component.option('selectedIndex');
                                };
                            }
                        },
                        tabs: [{
                            title: elUI.lan.js_011_23 || 'Full-date off',
                            colCount: 2,
                            tabTemplate: function (itemData, itemIndex, itemElement) {
                                itemElement.addClass('d-flex').append("<span class='fa fa-check-circle tab_sel'></span>" + itemData.title);
                            },
                            items: [
                                {
                                    dataField: 'todate',
                                    editorType: 'dxDateBox',
                                    editorOptions: {

                                        //value: //new Date(fO && new Date(fO.todate) || new Date().setHours(0, 0, 0, 0)),

                                        width: '100%',

                                        acceptCustomValue: !isP,
                                        openOnFieldClick: isP,//chi open khi phone

                                        pickerType: DevExpress.devices._realDevice.deviceType == 'phone' ? 'rollers' : undefined,

                                        onContentReady: function (ez) {
                                            LV_NGA[1] = ez.component;
                                            //debugger;

                                            //alert('tu ngay: ' + LV_NGA[0].option('value') + 'den ngay: ' + LV_NGA[1].option('value'))
                                            if (LV_NGA[0]) {
                                                msgD(new Date(LV_NGA[0].option('value')), new Date(LV_NGA[1].option('value')))
                                            };
                                        }
                                        , onValueChanged: function (v) {
                                            var od = new Date(LV_NGA[0].option('value'));
                                            if (new Date(v.value).getTime() < od.getTime()) {
                                                LV_NGA[0].option('value', v.value);//set den ngay bang tu ngay
                                            } else {
                                                msgD(od, v.value);
                                            };
                                        }
                                    }
                                    , label: {
                                        text: elUI.lan.js_011_25 || 'To date'
                                    }
                                }
                                ,
                                {
                                    template: function (e, a) {
                                        //
                                        const p1 = a.closest('.dx-item-content'),
                                            cls = 'dx-single-column-item-content',
                                            css = { 'align-items': 'center' }

                                        if (p1.hasClass(cls)) {//mobile screen
                                            p1.removeClass(cls);
                                            //
                                            p1.closest('.dx-multiview-item-content').css('padding-right', '0');
                                        };
                                        //
                                        p1.parent().css(css).closest('.dx-box-flex').css("flex-direction", "row");
                                        //
                                        return lngL;
                                        //
                                    }
                                }
                            ],
                        }, {

                            title: elUI.lan.js_011_24 || 'Or apply Late / Early',
                            colCount: 2,


                            colCountByScreen: {
                                xs: 2
                            },

                            tabTemplate: function (itemData, itemIndex, itemElement) {
                                itemElement.addClass('d-flex').append("<span class='fa fa-check-circle tab_sel'></span>" + itemData.title);

                            },
                            items: [
                                //{
                                //    dataField: 'HireDate',
                                //    editorType: 'dxDateBox',
                                //    editorOptions: {
                                //        value: null,
                                //        width: '100%'
                                //    }
                                //    , label: {
                                //        text: 'tu gio'
                                //    }
                                //}
                                //,
                                //{
                                //    dataField: 'HireDate',
                                //    editorType: 'dxDateBox',
                                //    editorOptions: {
                                //        value: null,
                                //        width: '100%'
                                //    }
                                //    , label: {
                                //        text: 'den ngio'
                                //    }
                                //}
                                //,
                                {
                                    cssClass: 'dog_rdio',
                                    dataField: 'tresom',
                                    editorType: 'dxRadioGroup',

                                    //colSpan: 2,
                                    editorOptions: {
                                        layout: "horizontal",
                                        valueExpr: 'id',
                                        displayExpr: 'text',

                                        //value: fO && fO.tresom || 1,

                                        items: [
                                            { id: 1, text: _gLA(26) || 'Late' },
                                            { id: 2, text: _gLA(27) || 'Early' }]
                                    }
                                    , label: {
                                        text: '',
                                        visible: false
                                    }

                                    //editorType: 'dxSelectBox',
                                    //colSpan: 2,
                                    //editorOptions: {
                                    //    items: [
                                    //      'Xin vao tre',
                                    //      'Xin ve som'
                                    //    ],
                                    //    searchEnabled: true,
                                    //    value: '',
                                    //    label: {
                                    //        text: 'Chon loai tre som',
                                    //        visible: false
                                    //    },
                                    //},
                                    //label: {
                                    //    text: 'Chon loai tre som',
                                    //    visible:false
                                    //},
                                    //validationRules: [{
                                    //    type: 'required',
                                    //    message: 'Position is required',
                                    //}

                                    //]
                                }
                                ,
                                dumeO
                            ],
                        }]

                    }]
                }
                ,
                {
                    colSpan: 2,
                    dataField: 'notes',
                    label: {
                        text: _gLA(21) || 'Notes'
                    },
                    editorType: 'dxTextArea',
                    editorOptions: {
                        height: 50,
                        maxLength: 200
                    }
                }
        ]
    }

    ,

    __ERR_BLOCK = ['<div class="col-12 col-sm-6 d-flex flex-column dx-validationsummary-item mb-3">' +
                                                    '<div class="dx-fieldset-header reg-step-no mb-0" style="font-weight: 100;"><span class="bl-no">1</span><span class="bl-txt"></span></div>' +
                                                '</div>'
                ,
                //index[1] la nut luu tam
                ,
                '<div class="viewmode mx-auto"></div>',




    ]

    ,

    __CTY = function (elUI, pigIE) {
        return (__ERR_BLOCK[1] = '<span class="font-italic text-right mr-2" style="flex:1">' + (elUI.lan.js_011_7 || 'Draft current registration by clicking Save button') + '</span>' +
                                            '<button mnu="sav_tmp" type="button" class="btn btn-secondary btn-sm ml-auto"><i class="ti-save mr-1"></i>' + aLAN.js_007_29 + '</button>'

                        ,

                    $('<div class="d-none valid_msg  reg_action row">' +


                        //'<div class="col-12 col-sm-6 d-flex flex-column dx-validationsummary-item  mb-3">' +
                        //    '<div class=" dx-fieldset-header reg-step-no mb-0" style="font-weight: 100;"><span class="bl-no">3</span><span class=" bl-txt">Thông Tin Đăng Ký</span></div>' +
                        //    '<div class="mr-auto ml-5 dx-validationsummary-item-content">Email is required</div>' +
                        //'</div>' +

                        '<div class="col-12 mx-auto mt-3 text-center" ' + (pigIE.length > 0 ? 'style=' + pigIE : '') + '>' +

                                '<span class="font-italic">' + (elUI.lan.js_011_15 || 'Please complete the above errors and try again...') + '</span>' +

                        '</div>' +
                    '</div>' +

                    '<ul class="send_frm list-group reg_action">' +

                        '<li class="list-group-item"  style="max-width:300px;' + pigIE + 'margin:auto">' +

                            (elUI.downline != 2 ?
                                __ERR_BLOCK[1]//nut luu tam

                            : (__ERR_BLOCK[1] = '', '')) +

                        '</li>' +

                        '<li class="list-group-item' + (elUI.downline != 2 ? ' mt-3' : '') + '">' +

                            '<div class="sendnotes w-100 m-auto" style="box-shadow:rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"></div>' +
                        '</li>' +

                        '<li class="list-group-item mx-auto mt-3 flex-nowrap" ' + (pigIE.length > 0 ? 'style=' + pigIE : '') + '>' +

                                '<span class="font-italic text-right">' + (elUI.lan.js_011_10 || 'Input content then press button') + '</span>' +
                                '<button mnu="send_reg" type="button" class="ml-2 btn btn-sm btn-"></button>' +

                        '</li>' +

                    '</ul>'

            ));
    }

    ,

    _kdog = 'lstmnu_' + glbK.regVEL()

    , __regEMP_LST = function () {
        return (lstmnu_ctxM.mnuINIT_CLICK).closest('.lstregemp').dxList('instance');
    }

    ,

    exlLOD = function (dat) {

        try {

            const wb = XLSX.read(dat, { type: 'binary', cellText: false, cellDates: true }),

            sht = wb.Sheets[wb.SheetNames[0]],

            range = XLSX.utils.decode_range(sht['!ref'] || "A1:B1"),

            regEMP_LST = __regEMP_LST(),

            pb = sht.G7 && sht.G7.v,

            VAL = [],
            acno = [];

            range.s.r = 12;//bat dau tu row 13

           

            XLSX.utils.sheet_to_json(sht, { header: "A", range: range, raw: false, dateNF: 'yyyy-mm-dd' }).map(function (it, i) {
                
                if ($.isNumeric(it.B)) {

                    const acn = parseInt(it.B);

                    if (acno.indexOf(acn) == -1) {
                        acno.push(acn);//tranh trung

                        VAL.push({
                            "acno": it.B,
                            "empname": it.C,
                            "empcode": it.D,
                            "secid": -1,
                            "ff_pb": pb,
                            'rmv': -1
                        });

                    };



                };//hieu luc ma nhan vien

            });
            //
            //
            regEMP_LST.option('dataSource', VAL);
            //
            if (regEMP_LST._emps_fromEXCEL) regEMP_LST._emps_fromEXCEL(VAL);
            //
        } catch (err) {

        };

        srclocked(false);
    }

    ,

    imp_emps_excel = function (fi) {
        //
        var reader = new FileReader();
        reader.readAsArrayBuffer(fi);
        //
        reader.onload = function (ef) {
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

                    srclocked(true);

                    if (GetIEVersion() == 11) {

                        _gsC('https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.10.1/polyfill.min.js', 'js', function () {

                            _gsC('https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js', 'js', function () {


                                exlLOD(ef.target.result);


                            }, 'xlsx.mini.min.js');

                        }, 'polyfill.min.js');

                    } else {

                        _gsC('https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js', 'js', function () {

                            exlLOD(ef.target.result);

                        }, 'xlsx.mini.min.js');

                    };


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

    , lstmnu_ctxM = {
        _k: _kdog,//coi chung no khoi tao 2 lan.
        op: {

            hideOnOutsideClick: true
            ,
            position: {
                my: "left top",
                at: "left bottom",
            },
            onShowing: function (e) {
                //debugger;

                var mnu = lstmnu_ctxM.el,
                    movSEL = mnu.find('.selectAll'),
                    ck = lstmnu_ctxM.mnuINIT_CLICK.parent().find('.dx-list-select-all'),
                    nutDEL = function (xe) {
                        //
                        if (!xe) {
                            xe = ck.find('.dx-checkbox').data().dxCheckBox;
                        };
                        //nut delete all
                        mnu.find('.delALL').css('display', xe.option('value') === false ? 'none' : '');
                    };
                //
                if (ck.length == 0) {

                    ck = __regEMP_LST().element().find('.dx-list-select-all');

                    movSEL.append(ck);

                    ck = ck.find('.dx-checkbox').css('margin-left', '0px').data().dxCheckBox;
                    ck.on('valueChanged', function (e) {
                        nutDEL(e.component);
                    });

                    nutDEL(ck);

                } else {
                    nutDEL();
                };

            }
        }
        ,
        el: $('<div class="_k-' + _kdog + ' hedROW_CLK ctx_onlybtn">' +
                '<div class="selectAll"></div>' +
                '<div class="delALL my-1">' +

                    '<div mnu="delALL" class="btn btn-sm" style="padding: 2px 3px 2px 1px;" type="button"><i class="fa fa-trash-o text-danger"></i>' +
                    '<span class="pl-1 font-italic text-danger">' + (aLAN.js_001_29 || 'Delete all selection') + '</span></div>' +

                '</div>' +

                //'<div>' +
                //    '<span class="pl-1 font-italic text-small text-success">muc tieu dem nay.</span>' +
                //    '<button  class="btn btn-sm btn-success ti-user p-1" type="button"></button>' +
                //'</div>' +
                //'<div>' +
                //    '<button  class="btn btn-sm btn-secondary ti-search p-1" type="button"></button>' +
                //    '<span class="pl-1 font-italic text-small">Chon lua dai dien cho bac nay.</span>' +
                //'</div>' +

                //'<div class="text-center">' +
                //    '<hr class="hrx  m-2">' +
                //    '<span class="pl-1 font-italic text-small">Chen dong len tren hoac xuong duoi.</span>' +
                //    '<div>' +
                //        '<button  class="btn btn-sm btn-secondary ti-shift-left p-1 rotated" type="button"></button>' +
                //        '<button  class="btn btn-sm btn-secondary ti-shift-right p-1 rotated" type="button"></button>' +
                //    '</div>' +
                //'</div>' +

                //'<div class="text-center">' +
                //    '<hr class="hrx m-2">' +
                //    '<span class="pl-1 font-italic text-small">Doi dong hien tai xuong duoi.</span>' +
                //    '<div>' +
                //        '<button  class="btn btn-sm btn-warning ti-arrow-left p-1 rotated" type="button"></button>' +
                //        '<button  class="btn btn-sm btn-warning ti-arrow-right p-1 rotated" type="button"></button>' +
                //    '</div>' +
                //'</div>' +

            '</div>')
    }
    , lstmnu_ctxM_CLK = function (e) {
        //
        //console.log('dele click');
        devDlg.ctx[0].hide();
        //
        var btn = $(e.currentTarget);
        switch (btn.attr('mnu')) {
            case 'delALL': {

                var regEMP_LST = __regEMP_LST(),

                dels = regEMP_LST.option('selectedItems').map(function (it) {
                    return it.___;
                }),

                olDS = regEMP_LST.option('dataSource').filter(function (it) {
                    return dels.indexOf(it.___) == -1;
                });
                //
                regEMP_LST._hoantat = function (e) {
                    regEMP_LST._hoantat = null;
                    srclocked(false);
                };
                //
                setTimeout(function () {
                    regEMP_LST.option({ 'searchValue': '', 'dataSource': olDS });
                }, 100);
                //
                break;
            }
            default: {
                srclocked(false); //menu button start click
                break;
            }
        };
    }
    , ___lstE_mnu = function (elUI, e,renWhat) {

        if (elUI.quy_imp_excel) {

            const dyk = new Date().getTime(),
                exl = '<div class="impEXEL my-1">' +
                    '<input id="import_ot_emps_excel_"' + dyk + ' type="file" class="d-none" accept=".xls,.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />' +
                    '<label mnu="impEXEL"  for="import_ot_emps_excel_"' + dyk + ' class="btn btn-sm mb-0" style="padding: 2px 3px 2px 1px;" type="button"><i class="fa fa-file-excel-o"></i>' +
                    '<span class="pl-1 font-italic">' + (elUI.lan.js_011_37 || 'Import Excel file') + '</span></label>' +
                '</div>'
            , _exl = lstmnu_ctxM.el.find('.delALL');
            //
            //
            if (!_exl.next().hasClass('impEXEL')) {
                if (renWhat == 2) {//ot
                    $(exl).insertAfter(_exl).find('input').off('change').on("change", function (e) {
                        if (e.currentTarget.files.length > 0) {

                            imp_emps_excel(e.currentTarget.files[0]);

                            e.currentTarget.value = '';

                        };
                    });
                };
            }else{
                if (renWhat == 1) {//leave
                    _exl.next().remove();
                };
            };
            //
        };

        devCTXmnu(e.currentTarget, lstmnu_ctxM, function () {
            //
            //luu giu lai de khi dispose thi se huy
            if (!elUI.ctxMNU_K[_kdog]) elUI.ctxMNU_K.push(_kdog);
            //
            //
            lstmnu_ctxM.mnuINIT_CLICK = $(e.currentTarget);
            var mnu = lstmnu_ctxM.el.on('click', '.btn', function (e) {

                srclocked(true);
                setTimeout(function () {
                    lstmnu_ctxM_CLK(e);
                }, 10);

            });
        });

    };



    __columns.otTOOLB = function (luoi) {

        return [
            {
                location: 'after',
                widget: 'dxButton',
                options: {
                    text: aLAN.js_007_25,//Add
                    icon: 'plus',
                    //disabled: true,
                    onClick: function () {
                        srclocked(true);
                        setTimeout(function () {
                            luoi.addRow();
                        }, 10);
                    },
                }
            }
            ,
            {
                location: 'after',
                widget: 'dxButton',
                options: {
                    text: aLAN.js_007_26,//Edit
                    icon: 'edit',
                    disabled: true,
                    onClick: function (e) {
                        //
                        srclocked(true);
                        setTimeout(function () {
                            var r = luoi.getRowIndexByKey(e.component.option('r'));
                            luoi.editRow(r);
                        }, 10);
                        //
                    },
                }
            }

            , {
                location: 'after',
                widget: 'dxButton',
                options: {
                    text: aLAN.js_007_27,//Remove
                    stylingMode: 'outlined',
                    icon: 'trash',
                    type: 'danger',
                    disabled: true,

                    onClick: function (e) {
                        //
                        var sel = luoi.getSelectedRowKeys(), dogL;
                        //
                        if (sel.length > 0) {
                            dogL = luoi.option('dataSource')._array;
                            devDlg(1, aLAN.js_001_25).show().done(function (rst) {
                                if (rst == 1) {
                                    for (var ix = dogL.length - 1; ix > -1; ix--) {

                                        if (sel.indexOf(dogL[ix].aid) > -1) {

                                            dogL.splice(ix, 1);

                                        };
                                    };
                                    //
                                    luoi.refresh();
                                    //
                                };
                            });
                        };
                    }
                },
            },
        ]
    };

    __CTY.err_panel = function (pnl, _gLA, syncSEL, wha, byPass_Chk_LV, _masREG) {
        //
        //wha[0]=req_frm.renWhat;
        //wha[1]=regEMP_LST;
        //wha[2]=luoi || form;
        //wha[3]=DROP_Z.getQueuedFiles().length
        //
        //
        var emptyE = false
            , er_BL
            , no = 0;//OK
        //
        pnl.find('>div:not(:last-child)').remove();
        //
        //
        if (wha[0] == 2) {//renWhat OT check editform show
            //
            er_BL = $(__ERR_BLOCK[0]);//reset
            //
            emptyE = !wha[2]//luoi
                    ._$element.parent().is(':visible');
            //
            if (emptyE === true) {

                er_BL.find('.bl-txt').text(_gLA(11) || 'Regis Information').prev().text((no++, no));
                er_BL.append('<div class="mr-auto ml-5 dx-validationsummary-item-content">' + (_gLA(33, 6) || "Registration not completed") + '</div>');

            } else if (aLAN.js_usr_info[0] == 2) {//employess login moi check valid 3 ngay

                //
                emptyE = wha[2]//luoi
                    .option('dataSource')._array;
                //
                if (emptyE.length == 0 || (syncSEL.lst_ == 2 && emptyE.length == wha[2]//luoi
                                                                        .option('selectedRowKeys').length)
                    ) {
                    er_BL.find('.bl-txt').text(_gLA(11) || 'Regis Information').prev().text((no++, no));
                    er_BL.append('<div class="mr-auto ml-5 dx-validationsummary-item-content">' + (_gLA(33, 8) || "Empty overtime info") + '</div>');
                    emptyE = true;

                } else {

                    er_BL.find('.bl-txt').text(_gLA(11) || 'Regis Information').prev().text((no++, no));

                    var zz = 0, isSTE2 = 0, isERR = 0;

                    for (zz; zz < emptyE.length; zz++) {

                        const nga = difDa(new Date(emptyE[zz].EachDate).setHours(0, 0, 0, 0), new Date().setHours(0, 0, 0, 0));

                        if (nga > 3 && emptyE[zz].id != 2767) {
                            isERR ++;
                            er_BL.append('<div class="mr-auto ml-5 dx-validationsummary-item-content">' + ((_gLA(33, 11) || "Regis date late over 03 days (") + fmtSD.format(new Date(emptyE[zz].EachDate))) + ')</div>');
                            if (isERR > 4) break;
                        };
                    };
                    er_BL.insertBefore(pnl.find('>div:last-child'));
                    //
                    if (zz < emptyE.length ) {
                        //
                        for (zz; zz < emptyE.length ; zz++) {
                            //
                            const nga = difDa(new Date(emptyE[zz].EachDate).setHours(0, 0, 0, 0), new Date().setHours(0, 0, 0, 0));
                            //
                            if (nga > 3) {

                                if (isSTE2 == 0) {
                                    er_BL = $(__ERR_BLOCK[0]);//reset
                                    er_BL.find('.bl-txt').text('...').prev().remove();
                                    er_BL.insertBefore(pnl.find('>div:last-child'));
                                    isSTE2 = 1; //prevent flag
                                };
                                //
                                isERR++;
                                //
                                er_BL.append('<div class="mr-auto ml-5 dx-validationsummary-item-content">' + ((_gLA(33, 11) || "Regis date late over 03 days (") + fmtSD.format(new Date(emptyE[zz].EachDate))) + ')</div>');
                                //chi support 10 cai
                                if (isERR > 9) break;
                                //
                            };
                            //
                        };
                        //
                    };
                    //
                    emptyE = isERR>0;
                    //
                };
            };
            //
            if (emptyE) er_BL.insertBefore(pnl.find('>div:last-child'));
            //
        } else if (

            aLAN.js_usr_info[0] == 2//employess login moi check valid 3 ngay

            &&

            byPass_Chk_LV == 0) {//buoc phai check
            //
            const selo = wha[2]._$element.find('.dx-tabpanel').data().dxTabPanel.option('selectedIndex');
            //
            er_BL = $(__ERR_BLOCK[0]);//reset
            //check reg lv rule
            //1. bd in pass
            //tan dung lai variable
            wha[2] = wha[2].option('formData');
            //
            //1. bd in pass
            wha[0] = difDa(new Date(selo == 0 ? wha[2].todate : wha[2].EachDate).setHours(0, 0, 0, 0), new Date().setHours(0, 0, 0, 0));
            //
            //
            if (wha[0] > -1 && wha[2].id == 1051) {
                //phep thuong nien buoc phai dang ky truoc it nhat 1 ngay ...
                //
                er_BL.find('.bl-txt').text(_masREG(wha[2].id)).prev().text('#');
                er_BL.append('<div class="mr-auto ml-5 dx-validationsummary-item-content">' + (_gLA(33, 12) || "Must register before at least 01 day") + '</div>');
                //
                er_BL.insertBefore(pnl.find('>div:last-child'));
                //
                emptyE = true;
                //
            } else if (wha[0] > 3) {//qua 3 ngay ko xin duoc
                //
                er_BL.find('.bl-txt').text(_gLA(11) || 'Regis Information').prev().text((no++, no));
                er_BL.append('<div class="mr-auto ml-5 dx-validationsummary-item-content">' + (_gLA(33, 11) || "Regis date late over 03 days") + '</div>');
                //
                er_BL.insertBefore(pnl.find('>div:last-child'));
                //
                //
                emptyE = true;
                //
            } else if (wha[0] > 0 && wha[3] == 0) {//qua 1 ngay thi phai co tap tin dinh kem
                //
                er_BL.find('.bl-txt').text(_gLA(11) || 'Regis Information').prev().text((no++, no));
                er_BL.append('<div class="mr-auto ml-5 dx-validationsummary-item-content">' + (_gLA(33, 9) || "Regis date in past") + '</div>');
                //
                er_BL.insertBefore(pnl.find('>div:last-child'));
                //
                //
                //
                er_BL = $(__ERR_BLOCK[0]);//reset
                er_BL.find('.bl-txt').text(_gLA(12) || 'Attach Files').prev().text((no++, no));
                er_BL.append('<div class="mr-auto ml-5 dx-validationsummary-item-content">' + (_gLA(33, 10) || "Attachment require") + '</div>');
                //
                er_BL.insertBefore(pnl.find('>div:last-child'));
                //
                emptyE = true;
            };
            //
        };
        //
        //
        if (wha[1]//regEMP_LST
            .option('dataSource').length == 0 ||

                (syncSEL.lst_ == 2 && wha[1]._$element && wha[1].option('dataSource').length == wha[1].option('selectedItemKeys').length)

            ) {
            //
            er_BL = $(__ERR_BLOCK[0]);//reset
            //
            er_BL.insertBefore(pnl.find('>div:last-child'));
            er_BL.find('.bl-txt').text(_gLA(13) || 'Apply To Employees').prev().text((no++, no));
            er_BL.append('<div class="mr-auto ml-5 dx-validationsummary-item-content">' + (_gLA(33, 7) || "Empty valid employee") + '</div>');
            emptyE = true;

        };
        //
        if (emptyE === true) pnl.removeClass('d-none');
        //
        return emptyE;
        //
    };

    __CTY.dupERR = function (pnl, D, r, regtable, _masREG, regEMP_LST,lan) {
        //
        //debugger;
        //
        const er_BL = $(__ERR_BLOCK[0]).removeClass('col-sm-6');//reset
        //
        pnl = pnl.find('.dx-actionsheet-item-content').children();
        r = JSON.parse(r);
        D = JSON.parse(D);
        //
        er_BL.find('.bl-txt').text(_La$N('js_011_36', lan) || 'Registration time overlapping').prev().text('#');
        //
        //
        //
        var it = $(regtable).appendTo(er_BL).css({ 'overflow-y': 'auto', 'max-height': '200px' }).addClass('py-0 mt-3').removeClass('pb-3')//find('.tickets-container')
            , d1, d2, li = it.find('li.ticket-item').addClass('d-block')[0].outerHTML
            , emps = regEMP_LST.option('dataSource');
        //
        //dxScroll se dispose khi popup cua dxSheet onHiding event
        it.dxScrollView({
            // ...
            //elementAttr: {
            //    id: "elementId",
            //    class: "class-name"
            //}
        });
        //
        //start job
        it = it.find('.row >div:first');
        //
        for (var z = 0; z < D.length; z++) {
            //
            //
            if (z > 0) {
                it = $(li).appendTo(er_BL.find('ul')).find('.row >div:first');
            };
            //
            //
            d1 = new Date(D[z].EachDate);
            d2 = new Date(D[z].todate);
            //
            //
            var ico = 'fa fa-pencil',
                colr = 'text-secondary';
            //
            if (D[z].regsta == 100) {

            } else if (D[z].regsta == 105) {
                ico = "fa fa-reply";
                colr = '';
            } else if (D[z].regsta == 101) {
                ico = "fa fa-paper-plane";
                colr = 'text-primary';
            } else if (D[z].regsta < 103) {
                ico = 'fa fa-hourglass-o';
                colr = 'text-warning';
            } else if (D[z].regsta == 103) {
                ico = 'fa fa-check-circle';
                colr = 'text-success';
            } else if (D[z].regsta == 104) {
                ico = 'fa fa-times-circle';
            };
            //
            //
            it.closest('.row').addClass(colr);
            //
            it.empty().html('<div class="m-1 text-large">' +
                '<i class="' + ico + ' mr-1"></i>' +
                _masREG(D[z].id) + '</div>');
            //
            //

            if (D[z].tresom == -1) {//OT

                //tang md 1
                it = it.next().toggleClass('col-md-2 col-md-3');
                //
                it.append($('<span class="elipx">' + fmtSD.format(d1) + '</span><b> ' + ' -' + D[z].tong + 'h</b>'));
                //
                it = it.next();
                it.find('i').next().text(nga_sDt24(d1, 1) + ' - ' + nga_sDt24(d2, 1));
                //
                //bop lai md -1
                it = it.next().toggleClass('col-md-4 col-md-3');
                //
            } else {

                it = it.next().addClass('my-2');//khi margin bottom khi x-small width
                //
                it.append($('<span class="elipx">' + fmtSD.format(d1) + '</span>'));

                it = it.next().addClass('my-2 justify-content-start');
                if (D[z].selo == 0) {//nguyen ngay //fO.tong  - modify
                    //
                    it.find('i').toggleClass('fa-clock-o fa-calendar').next().text(fmtSD.format(d2));
                    //
                } else {//vao tre / ra som

                    it.find('i')//.removeClass('fa-clock-o')
                    .next().text(


                    (D[z].tresom == 1 ? (_La$N('js_011_26', lan) || 'Late') : _La$N('js_011_27', lan) || 'Early')


                    );
                };
                it = it.next();
            }
            //

            //
            for (var fe = 0; fe < emps.length; fe++) {
                if (emps[fe].acno == D[z].eid) {
                    //ghi ten phia sau
                    it.html('<span  class="d-inline-block text-truncate">' + emps[fe].acno + '&emsp;' + emps[fe].empcode + '&emsp;' + emps[fe].empname + '</span>');//tab space
                    //
                    break;
                };
            };
            //
        };
        //
        //
        pnl.eq(0).find('>div:not(:last-child)').remove();
        er_BL.insertBefore(pnl.eq(0).removeClass('d-none').find('>div:last-child'));
        //
        //
        pnl.eq(1).addClass('d-none');
        //
    };

    return {
        //products: products,
        col: {
            widget: 'dxDateBox',
            caption: "Ngay",
            dataField: 'EachDate',
            dataType: 'date',
            format: function (e) {
                return new Intl.DateTimeFormat(apisvr.a$.selected_language, {//
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                }).format(e);
            },
            //cssClass:'small',
            width: 75,
            minWidth: 75,
            editorOptions: {
                //pickerType:'rollers',// DevExpress.devices._realDevice.deviceType == 'phone'? 'rollers':'calendar',
                //pickerType:'native',
                //adaptivityEnabled: true,
                //onFocusIn: function (e) {
                //    e.element.find('.dx-texteditor-input').attr('type', 'datetime-local');
                //}
            }
        }
        , columns: __columns

        , regisFRM: __regisFRM

        , err_block: __ERR_BLOCK

        , cty: __CTY

        , lstE_mnu: ___lstE_mnu

        , myselfSVG: '<svg  version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"><path  d="M2290 5099 c-247 -37 -394 -81 -596 -179 -500 -243 -845 -671 -954 -1185 -29 -140 -37 -369 -16 -495 31 -191 95 -367 206 -565 113 -201 136 -232 855 -1160 191 -247 399 -516 483 -625 115 -151 246 -320 260 -338 12 -16 15 -15 33 8 11 14 31 38 45 54 13 15 24 32 24 37 0 4 6 12 13 16 7 4 20 20 29 34 9 14 23 32 30 40 8 8 63 79 123 158 61 79 144 187 185 241 41 53 97 126 124 161 27 35 218 282 425 548 427 552 457 593 545 740 253 421 323 765 236 1164 -152 696 -753 1227 -1517 1342 -111 16 -435 19 -533 4z m570 -164 c126 -23 338 -93 456 -151 458 -224 777 -628 870 -1104 23 -117 23 -377 0 -479 -55 -246 -202 -534 -412 -807 -37 -49 -190 -246 -339 -439 -149 -192 -325 -420 -391 -505 -66 -85 -140 -182 -166 -215 -26 -33 -112 -144 -191 -248 l-145 -187 -29 37 c-17 21 -52 67 -79 103 -28 36 -144 187 -259 335 -114 149 -269 349 -343 445 -75 96 -165 213 -202 260 -415 532 -486 633 -589 837 -72 141 -103 224 -137 363 -29 114 -26 420 4 548 33 137 57 204 123 337 139 284 372 520 675 685 185 101 371 163 584 196 119 18 446 12 570 -11z"/><path d="M3218 1053 c-10 -11 -18 -34 -18 -51 0 -45 35 -68 117 -76 187 -19 497 -98 614 -157 117 -59 144 -102 92 -151 -102 -96 -423 -182 -868 -235 -218 -26 -972 -26 -1190 0 -443 52 -766 140 -867 235 -52 49 -26 93 87 150 111 55 365 124 544 147 91 12 125 66 77 121 l-23 28 -114 -17 c-146 -22 -361 -76 -464 -117 -191 -76 -275 -157 -275 -266 0 -201 353 -343 1040 -420 197 -21 764 -30 986 -15 781 55 1234 215 1234 436 0 167 -227 289 -696 375 -58 11 -141 23 -183 26 -67 6 -78 4 -93 -13z"/></g></svg>'

    };
};


w0w.tabglobalJS['JS_JS_reglv'] = (function () { // scoping
    "use strict";

    function O(opts) { // constructor
        //
        var dume = this, staOfs = 100,
            

            myDiagram,

            $mainO,

            elUI = {

                holCHK:true//check holiday
                ,
                WDM: {},
                __: [
                    //'d2Rtc19jb25u',//wdms_conn
                    ////'X2NtZGRldg',//_cmddev
                    'SlNfZGV2aWNlX3NldHRpbmc'//JS_device_setting
                ],
                dbNa: 'ZGFuZ2t5',//dangky
                ___: [
                    //'\x52\x54\x45\x56\x54', //RTEVT
                    //'\x57\x44\x4D\x53\x5F\x43\x4D\x44',//WDMS_CMD
                    //'\x44\x45\x56\x5F\x4A\x4F\x49\x4E\x5F\x52\x4D\x56'//DEV_JOIN_RMV
                        //, '\x55\x53\x52\x5f\x4d\x4f\x54\x45\x52'//USR_MOTER
                ]
                , lan: {},
                EVTs: {

                }
                , ctxMNU_K: []
                , downline: 0
                , vwtyp: 1 //default view events pil tab
                , fpa: '\x3B\x72\x65\x74\x75\x72\x6E\x20\x7B\x64\x6F\x67\x3A\x5F\x64\x6F\x67\x7D'//";return {dog:_dog}" dung trong function s_exp
                , ignore_upt_cmm: '\x64\x04\x61\x05\x62\x06\x63'
                , ePic: {}
                , bosI: 'https://bootdey.com/img/Content/user_1.jpg'
                , empI: "https://hrm.dnd.vn/media/images/user-icon.jpg"
                , minTong: 0.5
                , cmm_W: 0
                , cmm_Wi: 0
                , onevt: 'ontouchend' in document ? 'touchend' : 'click'

                , chkNo1: function () {
                    if (aLAN.js_usr_info[1] == 1) return 111111111;
                    return aLAN.js_usr_info[1];
                }
                , quy_imp_excel: false
            }
            ,
            fnBtnSta = function () { }
            ,
             _gLA = function ( na, ix,ax) {
                 var L = elUI.lan;//.elUI.lan.js_011_;
                 na = 'js_011_' + na;


                 //console.log(na);

                 if (ix===undefined) return L[na];
                 if (ax === undefined) return L[na] && L[na][ix];
                 return L[na] && L[na][ix][ax];
             }
            ,

            s_exp = function (c) {
                return Function("'use strict';" + c + elUI.fpa)();
            }

            ,

            CALC_REGSTA = function (_r) {
                //
                var regsta;

                if (_r.regsta < 102) {
                    regsta = _r.regsta + 1
                } else if (_r.regsta = 105) {//tra ve
                    if (aLAN.js_usr_info[1] == _r.usrid) {//user login bang voi dang ky
                        regsta = 101;//trang thai goi dau tien
                    } else {
                        regsta = 102;//trang thai chueyn tiep
                    };
                } else {
                    regsta = _r.regsta;
                };
                //
                return regsta;
            }
            ,

            mn_EDIT = function (mnu, lanID, lanIX, defLAN, colr, ico) {
                //
                var lan = _gLA(lanID, lanIX) || defLAN;
                //
                if (this[0] == 1) {
                    return '<lo mnu="' + mnu + '" class="btn dropdown-item d-flex align-items-center ' + colr + '"><i class="' + ico + '" style="font-size: 17px;margin: 0 10px 0 -5px;"></i>' + lan + '</lo>';
                } else if ([2, 3].indexOf(this[0]) > -1) {
                    return '<button mnu="' + mnu + '" type="button" class="btn btn-' + colr.replace('text-', '') + ' btn-sm ml-auto"><i class="' + ico + ' mr-1"></i>' + lan + '</button>';
                };
                //
            }
            ,

            mn_QUYE = $.extend( {

                "1": ['1', 32, 0, 'Modify', 'text-secondary', 'ti-pencil'],
                "2": ['2', 32, 1, 'Delete', 'text-danger', 'ti-trash'],
                "3": ['3', 29, 3, 'Send back', '', 'ti-check-box'],
                "4": ['4', 29, 4, 'Send back', 'text-danger', 'ti-close'],
                "5": ['5', 29, 5, 'Send back', 'text-secondary', 'fa fa-reply'],
                "adchk": ['106', 29, 15, 'Admin checked', '', 'ti-search'],


                d0: function (que, r, nhap_cmm,mod) {
                    //
                    //
                    //
                    //
                    var ax;;//co holiday
                    //
                    //
                    //
                    //
                    if (que && que.quyen[1]) {
                        if (elUI.holCHK && r.hol && r.hol != '') {//ko co le + quyen highess 
                            //
                            if (que.quyen[1].indexOf('highest') > -1) {
                                ax = mn_QUYE['highest'](r, 'regid', que, mod);
                            };
                            //
                        } else { //can quuyen highness
                            //
                            que.quyen[1].split(',').some(function (yn) {
                                ax = mn_QUYE[yn](r, 'regid', que, mod);
                                //
                                //return tai cho nay la exit some
                                return !!ax;
                            });
                            //
                        };
                    };
                    //
                    //
                    //
                    //
                    var nut = nhap_cmm.find('[mnu=send_reg]');
                    //
                    if (ax && ax == "3" //quyen duyet


                       || mod[0] == 3//admin view and button 
                        
                        
                        ) {
                        //
                        nut.toggleClass('btn-primary btn-info').data('__', 3);//duyet
                        nut.html('<i class="fa fa-check-circle mr-2"></i>' + elUI.lan.js_011_29[13]);
                        //
                        //
                    } else if (aLAN.js_usr_info[1] != r.usrid) {//chuyen

                        nut.text(_gLA(29, 12));//text of button

                    };

                    return ax;
                }
                ,
                r0: function (r, prop, que, mod) {
                    return mn_EDIT.apply(mod, this["1"]) + mn_EDIT.apply(mod, this["2"]);
                }
                ,
                lv_rule: function (regid) {
                    var D = _deDATNO(regid),
                        nga= D && (D = D[0]) && difDa(D.EachDate, D.todate) +1;

                    return [nga, D];
                }
                ,
                lv_r1: function (r,prop,que,mod) {
                    
                    if ([100, 105].indexOf(r.regsta) > -1) return;

                    var D = _deDATNO(r[prop]),
                        nga,
                        duyet = D && (D=D[0]) &&
                            (D.selo == 1//vang khoang thoi gian //fO.tong  - modify
                            || (nga = difDa(D.EachDate, D.todate), nga == 0)

                                )? "3":undefined;
                    //vang <=1 ngay thi duyet (ko chuyen) Hoac xin tre som

                    if (prop == 'regid') {
                        return duyet;
                    };
                    //

                    //
                    prop = mn_EDIT.apply(mod, this["5"]);
                    if (duyet=="3"){
                        prop =/* mn_EDIT.apply(null, this["3"]) + */ mn_EDIT.apply(mod, this["4"]) + prop;
                    };
                    //
                    return prop;
                    //
                }
                ,

                lv_comp_ngay : function (r, prop, que, mod,max_Nga) {
                    //
                    var isBOS = elUI.regDAT.usrMAP[r.usrid] && elUI.regDAT.usrMAP[r.usrid][r.regtyp],
                        RE;
                    //
                    if (isBOS) {//neu la boss thi chi chuyen ko duoc duyet
                        //








                        //ngay 2023/06/23, chi Hang la boss, chu Kinh cung la Boss, 
                        //--> chu Kinh la boss truc tiep cua chi Hang,
                        //-- do ko co thoi gian  + gian viec cham thanh toan , ne tam thoi viet code tam chi 
                        //===>Chu kinh duyet cho chi Hang
                        if (r.usrid == 99997 && 99998 == que.EmpID) {
                            RE = "3";//quyen duyet
                        };








                        //de tu nhien no se return undefined trong truong hop default nut chuyen
                        //
                    } else {//leaf downline


                        if ([100,105].indexOf(r.regsta) > -1) return;

                        var chR = this.lv_rule(r[prop]),
                            Ng = chR[0],
                            D = chR[1];


                        if (max_Nga == -1 //ko chi dinh compare rule lv_noNga
                            || D.selo == 1 //vang koang thoi gian //fO.tong  - modify
                            || Ng < max_Nga //vang nho hon 1 ngay thi duyet luon
                            ) {
                            RE = "3";//quyen duyet
                        };


                    };
                    //
                    if (prop == 'id') {//popup menu
                        isBOS = mn_EDIT.apply(mod, this["5"]);//default nut tra lai.
                        if (RE == "3") {
                            isBOS = /*mn_EDIT.apply(null, this["3"]) +*/ mn_EDIT.apply(mod, this["4"]) + isBOS;
                        };
                        return isBOS;
                    } else {
                        return RE;//only "3" or undefined
                    };
                    //
                }
                ,

                highest: function (r, prop, que, mod) {
                    if (prop == 'regid') {
                        return "3";
                    };
                    return /*mn_EDIT.apply(null, this["3"]) +*/ mn_EDIT.apply(mod, this["4"]) + mn_EDIT.apply(mod, this["5"]);
                }
                ,

                ot_r1: function (r, prop, que, mod) {
                    if (prop == 'id') {//popup menu
                        return mn_EDIT.apply(mod, this["5"]);//default nut tra lai.
                    };
                }
            }, opts.exfn)

            ,

            reg_MNU = function (d, mod) {

                var re = [];

                if (d.regsta == staOfs /*100*/ || aLAN.js_usr_info[1] == d.usrid) {


                    re[0] = mn_EDIT.apply(mod, mn_QUYE['1']) + mn_EDIT.apply(mod, mn_QUYE['2']);



                    //viet o day hoi bi PHEN !!!! nhung ko co thoi gian vi ban lam app toi phan send realtime FCM...
                    if (elUI.downline == 2) { //(****)
                        if (aLAN.js_usr_info[0] == 1 && d.regsta == 103) {//chi duy nhat user login + status da duyet ...
                            re[0] = mn_EDIT.apply(mod, mn_QUYE['adchk']) + re[0];
                        };
                    };




                } else {
                    //
                    if (elUI.downline == 2) {
                        //
                        //khi bi tra lai den soan thao , thi admin tra lai cai quay gi????
                        re[0] = !d.dume_own_regis  ? mn_EDIT.apply(mod, mn_QUYE['5']) : '';
                        //
                        if ([3, 4].indexOf(d.regsta - staOfs) <0) {//tranh 103 && 104
                            re[0] =

                                (mod[0] == 1 ? mn_EDIT.apply(mod, mn_QUYE['3']) : '')//neu call tu nut nop thi ko co nut phe duyet, vi no nam o phia duoi comment


                                + mn_EDIT.apply(mod, mn_QUYE['4']) + re[0];
                        };
                        //
                        if (aLAN.js_usr_info[0] == 1 && d.regsta == 103) {//chi duy nhat user login + status da duyet ...
                            //(****)
                            re[0] = mn_EDIT.apply(mod, mn_QUYE['adchk']) + re[0];
                        };
                        //
                    } else {

                        var q = elUI.lan.rawD._fl0wself,

                            que =d.ToiLaAi_In_This_Regis

                            || q && q[d.regtyp];

                        q = [];//quyen xet duyet nam o index 1


                        if (que && que.quyen[1]) {

                            if (elUI.holCHK && d.hol && d.hol != '') {//ko co le + quyen highess 
                                //
                                if (que.quyen[1].indexOf('highest') > -1) {
                                    q.push(mn_QUYE['highest'](d, 'id', que, mod));
                                } else {
                                    q.push(mn_EDIT.apply(mod, mn_QUYE["5"]));
                                };
                                //
                            } else { //can quuyen highness
                                //
                                que.quyen[1].split(',').forEach(function (yn) {

                                    q.push(mn_QUYE[yn](d, 'id', que, mod));

                                });
                                //
                            };
                        };

                        //

                        re = [q.join(''), que];
                        //
                    };
                    //
                };
                return re;
            }

            ,

            _masREG =function(it,fi){
                var _M = elUI.regDAT.masREG, M;
                if (!_M) return;
                M = _M._ca || (_M._ca = {});
                if (!M[it]){//build
                    _M.some(function (a) {
                        if (a.id==it){
                            M[it]=a;
                            return true;
                        };
                    });
                };
                return M[it] && M[it][!fi ? 'ten' : fi];
            }

            ,

            ref_REGIS = function (dat, pnl) {
                //
                if (mobi_raw.deskGRID === 1) {//co grid visible
                    var GID = mobi_raw.__regGID[1];
                    //GID.refresh();
                    GID.repaintRows([GID.option('focusedRowIndex')]);
                };
                //
                var newPOST = mobi_raw['mobi_cmmraw'].rebuild(dat),
                    cls = newPOST.attr('class'),
                    dat = newPOST.data();

                //pnl.attr('class', newPOST.attr('class')); //thay the class moi 

                //pnl.removeData(); //remove old data

                //pnl.html(newPOST.html());//replace new html
                ////
                //pnl.data(newPOST.data());//update new data
                ////
                ////pnl.empty().append(newPOST.children());
                //


                pnl.replaceWith(newPOST);// ko ok data
                pnl.attr('class', newPOST.attr('class')); //thay the class moi 
                pnl.data(dat);//update new data


            }

            ,

            _deDATNO = function (dID, na) {
                //
                na = na || 'D';
                //
                
                return elUI.regDAT._cache[na + '__' + dID] || (elUI.regDAT._cache[na + '__' + dID] = elUI.regDAT[na].filter(function (d) {
                    return d.pid == dID
                }));
                //
            }
            ,
            lv_From_To = function (v) {

                var d1 = new Date(v.EachDate),
                    d2 = new Date(v.todate),
                    t7 = [],
                    cn = [],
                    rst = difDa(d1, d2) + 1,

   
                    covtxt = function (a,col) {
                        if (a.length > 0) {

                            a.unshift(a[0].toLocaleString(apisvr.a$.selected_language, { weekday: "long" }) + ': ' + a.length + ' '  +
                                (_gLA(34, 4) || 'day' + (a.length > 1 ? '(s)' : '')) + ' ');

                            for (var z = 1; z < a.length; z++) {
                                a[z] = fmtSD.format(a[z]);
                            };
                            //
                            rst+= '<br/>' +  a.join(', ');
                            //
                        };
                    };
                
                
                rst = ' (' + (_gLA(18) || 'Total') + ' ' + rst + ' ' + ( _gLA(34, 4) || 'day' + (rst > 1 ? '(s)' : ''));

                while (d1 < d2) {
                    //
                    var dayNo = d1.getDay();
                    //
                    if (dayNo == 0) {
                        cn.push(new Date(d1));
                    } else if (dayNo == 6) {
                        t7.push(new Date(d1));
                    };
                    //
                    d1.setDate(d1.getDate() + 1);
                    //
                };
                //
                covtxt(t7, 'primary');
                covtxt(cn, 'primary');
                //
                return rst + ')';

            }
            ,
            _lst_REG = function (lst, D, r, reO) {
                if (D === 1) {//mobil UI click plus button to view registration data
                    var pnl, dID = parseInt(lst.attr('data-target').split("#datno_")[1]);
                    //
                    reO = lst.hasClass('chi__doc');
                    //
                    //create variable same desktop UI
                    D = _deDATNO(dID);
                    //
                    lst=lst.parent().next();
                    //
                    r = fillMASTER.atK(dID);
                    if (r[1] == -1 || !D) return;
                    r = r[0];
                };
                //
                var it = lst.find('.row >div:first'),
                    d1, d2;
                //
                if (r.regtyp == 1) {//nghi vang
                    d1 = new Date(D[0].EachDate);
                    d2 = new Date(D[0].todate);

                    it.empty().html('<div class="m-1 text-large">' + _masREG(D[0].id) + '</div>');
                    it = it.next().addClass('my-2');//khi margin bottom khi x-small width
                    //
                    it.append($('<span class="elipx">' + fmtSD.format(d1) + '</span>'));
                    it = it.next().addClass('my-2');//khi margin bottom khi x-small width
                    //+ ' ' + (Math.abs(d2 - d1) + 1) + ' '  + (_gLA(34, 4) || 'day(s)') 
                    if (D[0].selo == 0) {//nguyen ngay //fO.tong  - modify

                        it.find('i').toggleClass('fa-clock-o fa-calendar').next().text(fmtSD.format(d2));
                        it = it.next();


                        it.html(



             apisvr.a$.trim(D[0].notes) + lv_From_To(D[0])




                           );


                    } else {//vao tre / ra som

                        it.addClass('text-danger').find('i')//.removeClass('fa-clock-o')
                        .next().text(
                        
                        
                        (D[0].tresom==1?(_gLA(26) || 'Late'):_gLA(27) || 'Early' )
                        
                        
                        );//.remove();

                        //

                        it.next().text(


                         apisvr.a$.trim(D[0].notes) + ' (' + (_gLA(18) || 'Total') + ' ' + fmtSO(D[0].tong) + ' ' + (_gLA(34, 5) || 'hour') + ')'



                        );

                    };
                } else {//tang ca
                    var lst = it.closest('.tickets-list'),
                        org0 = lst.children()[0].outerHTML;
                    //
                    for (var zi = 0; zi < D.length ; zi++) {
                        d1 = new Date(D[zi].EachDate);
                        d2 = new Date(D[zi].todate);

                        if (zi === 0) {
                            it = $(lst.children()[0]);
                        } else {
                            it = $(org0);
                            lst.append(it);
                        };
                        //lay div dau tien cua row
                        var c_h_k = 'it_' + D[zi].pid + '_' + D[zi].aid,
                            hedREG = _masREG(D[zi].id),
                            dIv = it.find('.row >div:first'),
                            ipt = dIv.find('input').attr('id', c_h_k),
                            rmcls = '',
                            me_RMV = D[zi].tresom < -1 && ('-' + elUI.chkNo1() != D[zi].tresom);
                        //
                        //
                        //////if (r.regsta == staOfs ||//soan thao
                        //////    (r.regsta == staOfs+5 //105: tra ve
                        //////     && aLAN.js_usr_info[1] == r.usrid)) {//user login bang voi dang ky) {//co chk
                        //////    //
                        //////    dIv.empty().html('<div class="m-1 text-large">' + hedREG + '</div>');
                        //////} else {
                        //////    if (reO) {//disable check box
                        //////        dIv.find('input').prop("disabled", true).next().attr('for', c_h_k).text(hedREG);
                        //////    } else {
                        //////        dIv.find('input').attr('id', c_h_k).next().attr('for', c_h_k).text(hedREG);
                        //////    };
                        //////};

                        if (reO || me_RMV) {//disable check box

                            ipt.prop("disabled", true);

                            if (me_RMV) {//disable do downline
                                ipt.parent().toggleClass('check-danger check-secondary');
                                rmcls = ' chksedary';
                            };

                        };
                        //
                        if (D[zi].tresom !== -1) {//tresom is boss reject ot
                            ipt.attr('checked', 'checked');//.prop('checked', true);
                            dIv.closest('li').addClass('rmv-reg-it' + rmcls);
                        };
                        //
                        ipt.next().attr('for', c_h_k).html('<span>' + hedREG + '</span>' );
                        //
                        //tang md 1
                        dIv = dIv.next().toggleClass('col-md-2 col-md-3');
                        //
                        dIv.append($('<span class="elipx">' + fmtSD.format(d1) + '</span><b> ' + ' -' + D[zi].tong + 'h</b>'));
                        //
                        dIv = dIv.next();
                        dIv.find('i').next().text(nga_sDt24(d1, 1) + ' - ' + nga_sDt24(d2, 1));
                        //
                        //bop lai md -1
                        dIv.next().toggleClass('col-md-4 col-md-3').text(D[zi].notes);
                        //
                    };
                };
            }
            ,
            _lst_EMPS = function (lst, D, r, reO) {
                if (D === 1) {//mobil UI click plus button to view registration data
                    var dID = parseInt(lst.attr('data-target').split("#empsno_")[1]);
                    //
                    //create variable same desktop UI
                    D = _deDATNO(dID,'E');
                    //
                    lst = lst.parent().next();
                    //
                    r = fillMASTER.atK(dID);
                    if (r[1] == -1 || !D) return;
                    r = r[0];
                };
                var it = lst.find('.row >div:first'),
                    lst = it.closest('.tickets-list'),
                    org0 = lst.children()[0].outerHTML;
                //
                for (var zi = 0; zi < D.length ; zi++) {

                    if (zi === 0) {
                        it = $(lst.children()[0]);
                    } else {
                        it = $(org0);
                        lst.append(it);
                    };


                    var dIv = it.find('.row >div:first'),
                        emI = fillMASTER.getE({ usrid: D[zi].eid, utyp: 2 }) || {},
                        gt = '<span class="ml-auto">(' + (aLAN.js_001_21 && aLAN.js_001_21[emI.gt]) + ')</span>' || '',

                        c_h_k = 'n.v_' + D[zi].eid,
                            ipt = dIv.find('input').attr('id', c_h_k),
                            rmcls = '',

                            me_RMV=(D[zi].rmv > -1 && (aLAN.js_usr_info[1] != D[zi].rmv));


                    if (reO || me_RMV) {

                        ipt.prop("disabled", true);

                        if (me_RMV) {//disable do downline

                            ipt.parent().toggleClass('check-danger check-secondary');
                            rmcls = ' chksedary';

                        };

                    };
                    //
                    if (D[zi].rmv !== -1) {//tresom is boss reject ot
                        ipt.attr('checked', 'checked');//.prop('checked', true);
                        dIv.closest('li').addClass('rmv-reg-it' + rmcls);
                    };
                    //
                    ipt.next().attr('for', c_h_k).html('<span class="text-large"> ' + (zi + 1) + '. ' + emI.ten + '</span>');
                    dIv.append(gt)
                    //
                    //
                    dIv.toggleClass('col-md-4 col-md-6');
                    //
                    //.empty()
                    //dIv.append('<div class="m-1 text-large">' + (zi + 1) + '. ' + emI.ten + '</div>' + gt).toggleClass('col-md-4 col-md-6');
                    dIv = dIv.next();

                    dIv.empty().html('<div class="m-1 text-large">' + emI.ma + '</div>');
                    dIv = dIv.next();

                    dIv.empty().html('<div class="m-1 text-large">' + D[zi].eid + '</div>');
                    dIv = dIv.next().remove();
                    //
                };
            }
            ,
            frmW = 0
            ,
            frmW_Chg = function () {
                //console.log(frmW);
            }
            ,
            formatCurrency = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }).format
            ,
            duma_hwnd
            ,

            mobi_raw = {
                'eye':'<button mnu="send_reg" type="button" class="btn btn-warning btn-o" style="font-size:20px;border-radius: 300px;">' +
                            '<i class="ti-eye"></i> Xem chi tiet' +
                        '</button>'
            }
            ,
            _this = {}

            ,
            start_mnu,

            ctxMNU = function (target, cont, buildCB) {

                //alert("are you here?");
                //debugger;

                if (!_this.ctx) {
                    //
                    var tmpl = $('<div class="pov_PBA_MNU"></div>').append(cont.el);
                    //
                    _this.ctx = [$('<div></div>').appendTo($(target).closest('#tabBODY_' + _tabId)).dxPopover($.extend({}, {
                        contentTemplate: function (e) {
                            return tmpl;
                        },
                        target: target,
                        showEvent: 'dxclick',
                        //position: 'bottom',
                        maxWidth: 400,
                        hideOnOutsideClick: true,
                        shading: false,
                        shadingColor: 'rgba(0, 0, 0, 0.5)',
                        onDisposing: function (e) {
                            //console.log('onDisposing: function (e)');
                        },
                        onContentReady: function (e) {
                            e.component._$popupContent.css('padding', '10px');
                            if (buildCB && typeof buildCB === 'function') buildCB();
                        },
                    }, cont.op)).dxPopover("instance"),
                    [cont], tmpl];
                    //
                } else {
                    //
                    var old_po = _this.ctx[2].closest('.pov_PBA_MNU').find("div[class*='_k-']"), isOld = 0;
                    //
                    old_po.map(function (a, o) {
                        var O = $(o);
                        if (O.hasClass('_k-' + cont._k)) {
                            isOld = 1;
                            O.removeClass("d-none");
                        } else {
                            O.addClass("d-none");
                        };
                    });
                    //
                    if (isOld == 0) {
                        _this.ctx[2].append(cont.el);
                        if (buildCB && typeof buildCB === 'function') buildCB();
                    };
                    //
                    _this.ctx[0].option($.extend({}, {
                        'onHidden': null,
                        'onHiding': null,
                        'onShown': null,
                        'onShowing': null,
                        //'closeOnOutsideClick':null,
                        'hideOnOutsideClick': null,
                        'maxWidth': 400,
                        'target': target
                    }, cont.op || {}));
                    //
                };

                _this.ctx[0].show();

                srclocked(false);
            }

            ,

            ctxMEFN = function (mnu, eltarg, lan) {
                //
                srclocked(true);
                //
                if (ctxMEFN._forMNU != mnu) devDlg.atMNU = {};//reset
                //
                ctxMEFN._forMNU = mnu;
                //
                setTimeout(function () {

                    if (!ctxMEFN.hwn) {//chua co menu danh cho context nay .
                        //
                        ctxMEFN._k = glbK.regDYN('frm_regis');
                        ctxMEFN.el = $('<div class="_k-' + ctxMEFN._k + '">' +

                                    mn_QUYE.desk_gid_mnu(lan) +

                                '</div>');


                    }

                    //fuction nay nam on sockjo.js
                    devCTXmnu(eltarg, ctxMEFN, function (r) {

                        if (!ctxMEFN.hwn) {
                            ctxMEFN.hwn = ctxMEFN.el.on('click', '.btn', function (e) {
                                //
                                srclocked(true);
                                devDlg.ctx[0].hide();
                                //
                                setTimeout(function () {
                                    var mnu = e.currentTarget.getAttribute('mnu');
                                    switch (mnu) {
                                        case '_expa_lktree': {

                                            //cmds['sec']._$element.on(dogTRAS, hwndExpColl);
                                            //cmds['sec'].expandAll();
                                            //hwndExpColl();
                                            mobi_raw.__regGID[1].expandAll();
                                            break;
                                        }
                                        case '_cola_lktree': {
                                            //
                                            //cmds['sec']._$element.on(dogTRAS, hwndExpColl);
                                            //cmds['sec'].collapseAll();
                                            //hwndExpColl();
                                            //
                                            mobi_raw.__regGID[1].collapseAll();
                                            break;
                                        }
                                    }

                                    srclocked(false);

                                }, 10);
                                //
                                //srclocked(true);
                                //
                                //
                            });
                        };

                    });
                },10);

            }
            ,

            isPU_tuychon = false,

            _mnuJOB = {

                Reg_Req_LV: function (el,uptDAT) {
                    req_frm.LOA_req_frm.mnu_CLK(1, uptDAT);//change label full text, abbreviation display
                }
                ,
                Reg_Req_OT: function (el, uptDAT) {
                    req_frm.LOA_req_frm.mnu_CLK(2, uptDAT);//change label full text, abbreviation display
                }
                ,
                hed_vis: function (el) {
                    regis_hed_fot(el, 'hed',true);
                }
                ,
                fot_vis: function (el) {
                    regis_hed_fot(el, 'fot',true);
                }
                ,

                noDZ_SAVE: function (dat, cmd, rmvF) {
                    var defe = $.Deferred(),
                        uaa = UaA(elUI.lan[''] || '');

                    $.when(RFVfTElFVQ.SAVE({

                        uri: uaa.length > 0 ? (uaa + "/hinh") : undefined /*co tinh de undefined de khi vao merge no se bo qua*/
                        ,

                        'dat': dat,

                        'vwtyp': elUI.vwtyp,

                        'tep': '',

                        'rmvfile': rmvF

                    })).done(function (v1) {
                        //
                        v1 = JSON.parse(v1);
                        //
                        if (v1 && v1.hasOwnProperty('valid')) {
                            //da bi server validate fail
                            defe.resolve([0, v1]);
                            //
                        } else {
                            //
                            if (cmd == 0) {//add new
                                toastMsg(elUI.lan.js_011_5 || 'Registration successful.', 'success');
                            } else {
                                toastMsg(aLAN.js_003_ok || 'Operation is complete.', 'success');
                            };
                            //
                            defe.resolve([1, v1]);
                        };
                        //
                    }).fail(function (er) {
                        //if (er && er.length > 0) {
                        //    try {
                        //        var loi = JSON.parse(er);
                        //        er = loi.status == 0 ? 'js_003_err' : loi.statusText;
                        //    } catch (e) { };
                        //    toastMsg(elUI.lan[er] || apisvr.a$.trim(loi.response), 'error', null, 'top center');
                        //};
                        devToasERR(er, elUI.lan);//function o sockjo.js
                        defe.reject(er);
                    });
                    //
                    return defe.promise();
                    //
                }
                ,
                _deleted: function (rst) {
                    //
                    var r = rst[1];
                    //elUI.regDAT.R.push(r);
                    //
                    var atK = fillMASTER.RMV(r.regid);//se tra ve [0]:data at index; [1]:index of data
                    //
                    //
                    ///
                    if (mobi_raw.deskGRID === 1) { // co grid, va grid dang open 
                        //mobi_raw.__regGID[1].option({ 'focusedRowKey': r.regid });
                        //
                        mobi_raw.__regGID[1].refresh();
                        if (atK[1] == -1) {
                            mobi_raw.__regGID[1].option({ 'focusedRowIndex':-1});//hack cho add row 0 next
                            //mobi_raw.__regGID[1]._manualRowFocused(atK);
                        };
                        //
                        //mobi_raw.__regGID[1].deleteRow( r.regid );
                        //
                    } else {
                        if (mobi_raw['mobiui'] == 0) {//desktop
                            regFRM.dataNV_SEK.at(atK[1], true/* refresh dataSource form card*/);
                        } else {
                            //
                            rst[0] = 2;//danh dau khi callback se remove html registration
                            //
                        };
                    };
                    //
                    if (atK[1] == -1) empty_msg_show();
                    //
                    return atK;
                    //
                }
            },

            _HWND_tuychon = function (ex, frmEL,__id,__cb,_pnl) {
                if (ex ==1) {//edit / modify
                    var it = fillMASTER.atK(__id.id);
                    if (it[0]) {
                        //
                        if (!req_frm.LOA_req_frm) {
                            req_frm.LOA_req_frm = req_frm(frmEL);
                        };
                        //HIEU
                        if (elUI.downline == 2 ){
                            if (it[0].utyp == 1) {
                                //login bang admin, xem record regis by admin
                                if (__id.view && __id.view[2].text) {
                                    __id.view[2] = __id.view[2].text();
                                };
                            } else if (__id.view[0] == -1) { //dieu kien (adminDone 65535)
                                //day index 0 tu -1 len         (elUI.downline==2?65535:_req_tools._me)
                                __id.view[0] = 65535; 
                            };
                        };
                        //
                        _mnuJOB['Reg_Req_' + (it[0].regtyp == 1 ? 'LV' : 'OT')](ex, [it[0], _pnl, __id.view]);
                        //
                    } else {
                        srclocked(false);
                    };

                } else if ([2,3,4,30,5,106].indexOf(ex)>-1) {//delete current record
                    var it = fillMASTER.atK(__id.id),
                        defM = "Please confirm before proceeding ...",
                        confi = {
                            2: aLAN.js_001_25 || "Please confirm that you want to delete ?",
                            3: aLAN.js_001_27 || defM,
                            4: aLAN.js_001_27 || defM,
                            30: aLAN.js_001_27 || defM,
                            5: aLAN.js_001_27 || defM,
                            106: _gLA(29, 16) || "Are you sure you have finished checked ?",
                        };
                    if (it[1] > -1) {//bao mat theo data() cua registration post
                        //ngan ngua hacker copy html vao cac vi tri khac roi nhan nut send
                        devDlg(1, confi[ex]).show().done(function (rst) {
                            if (rst == 1) {
                                //
                                srclocked(true);
                                //
                                var dat = $.extend({ 'act': ex, regid: it[0].regid, tepcnt: it[0].tepcnt }, __id),////0:new ,1:edit , 2:delete , 30:send , 5:tra lai
                                    tgMAX = elUI.regDAT.GOI[it[0].regid];
                                //
                                if (tgMAX && tgMAX.length > 0) {//co lich su se lay row 0 vi no da desc
                                    dat.tg = tgMAX[0].tg;//key kiem tra hieu luc cua registration
                                } else {
                                    dat.tg = it[0].tg;//key kiem tra hieu luc cua registration
                                };
                                //
                                $.when(_mnuJOB.noDZ_SAVE(JSON.stringify(dat), 1/*cmd for toast message*/)).done(function (rst) {
                                    //
                                    var isBubble = rst[0];
                                    //
                                    if ([2, 3, 4, 5].indexOf(ex) > -1) {//delete action,duyet,ko duyet ,tra lai action
                                        //
                                        //buoc phai de 2 cho, ko the doi xuong duoi sau __cb duoc . !!!!
                                        if (isBubble == 1) {
                                            app_bubble(rst[1].toka, dat, ex);
                                            isBubble = -9999;
                                        };
                                        //
                                        _mnuJOB._deleted(rst);
                                        //
                                    };
                                    //
                                    __cb(rst);
                                    //
                                    //
                                    //ok moi buble
                                    if (isBubble == 1) {
                                        app_bubble(rst[1].toka, dat, ex);
                                        isBubble = -9999;
                                    };
                                    //
                                    //sau khi goi bubble message roi , neu co chat content + phone thi update UI
                                    //ko dem bo chung vao app_bubble.
                                    isBubble == -9999 && chat_ui([rst,dat, ex]);
                                    //
                                    srclocked(false);
                                    //
                                    //debugger;
                                    //
                                }).fail(function (er) {
                                    //
                                    __cb(er);
                                    srclocked(false);
                                    //
                                    //debugger;
                                    //
                                });
                            };
                        });
                    };
                    //
                    srclocked(false);
                    //
                } else {
                    var _mnu = ex.currentTarget.getAttribute('mnu');
                    if (_mnu && _mnuJOB.hasOwnProperty(_mnu)) {
                        _mnuJOB[_mnu](ex);
                    } else {
                        srclocked(false);
                    };

                }
            }

            ,


            ctxM_O

            ,

            tuychon = function (frmEL, e, fuckO) {
                //
                e.preventDefault();
                e.stopPropagation();
                //

                if (!req_frm.LOA_req_frm) {
                    req_frm.LOA_req_frm = req_frm(frmEL);
                };
                //
                var mnu = e.currentTarget.getAttribute('mnu');
                if (isPU_tuychon && ctxM_O._forMNU === mnu) {
                    _this.ctx[0].hide();
                    srclocked(false);
                    return;
                };
                //
                //
                ctxM_O._forMNU = mnu;
                //
                //
                ctxM_O.op.position = {
                    my: "top center",
                    at: "center bottom",
                };
                //
                if (fuckO && fuckO.op) $.extend(ctxM_O.op, fuckO.op);

                //check giong nhau
                //
                ctxM_O._fnUI = function (a, b, c) {
                    //khi popup showing will call back
                    if (fuckO && fuckO.cb) {
                        fuckO.cb(a, b, c);
                    } else {
                        srclocked(false);
                    };
                };
                //
                ctxMNU(e.currentTarget, ctxM_O, function (r) {
                    if (!ctxM_O.hwn) {
                        ctxM_O.hwn = ctxM_O.el.on('click', '.btn', function (ex) {
                            if (_HWND_tuychon && typeof _HWND_tuychon === 'function') {
                                srclocked(true); //menu button start click
                                setTimeout(function () {
                                    _HWND_tuychon(ex);
                                    _this.ctx[0].hide();
                                }, 10);
                            };
                        });
                    };
                });

            }
            
            ,

            hedTEX = function (idx, lanARR) {
                if (!lanARR) lanARR = elUI.lan.js_011_30;
                return lanARR && lanARR[idx];
            }

            ,

            navig, fuckdrawer

            ,

            regFRM = function (divFRM, frmEL, loadOPT) {
                //
                //navig = frmEL.find(".reg_navigator");
                //
                //replace all tab_pill modible
                //mobi_raw['tabs'] = navig.html();
                //navig.html();

                var grpI1 = function () {

                    return {

                        itemType: 'group',

                        colSpan: 3,

                        items: [
                        {
                            editorOptions: {
                                labelMode: 'floating',

                            },
                            label: {
                                text: hedTEX(7) || 'AC.no',
                                visible: false
                            },
                            dataField: 'usrid',
                        }
                        ,
                        {
                            editorOptions: {
                                labelMode: 'floating',

                            },
                            label: {
                                text: hedTEX(8) || 'Code',
                                visible: false
                            },
                            dataField: 'EmpCode',
                        }
                        ,
                        {
                            editorOptions: {
                                labelMode: 'floating',

                            },
                            label: {
                                text: hedTEX(12) || 'Join date',
                                visible: false,
                                //width: '100%',
                            },
                            dataField: 'jd',//joinday ngay gia nhap
                            editorType: 'dxDateBox'
                        }
                        ]
                    };
                }

                , cardNAV = mobi_raw.dumeSVG.find('.cssprofile').clone()

                //$('<div class="cssprofile my-3 mt-xxl d-none dx-widget"><div style="text-align:center">' +
                //            '<ul class="pagination modal-5">' +
                //                '<lo class="">' +
                //                    '<a href="javascript:void(0)" mnu="prev" class="btn disabled prev fa fa-arrow-left"></a>' +
                //                '</lo>' +
                //                '<lo class="textonly">' +
                //                    '<a href="javascript:void(0)" class="mx-2 text-info">Record</a>' +
                //                '</lo>' +
                //                '<lo>' +
                //                    '<a href="javascript:void(0)" class="recordidx active">0 / 0</a>' +
                //                '</lo>' +
                //                '<lo class="textonly">' +
                //                    '<a href="javascript:void(0)" class="mx-2 text-info">' +
                //                        'Total</a>' +
                //                '</lo>' +
                //                '<lo class="">' +
                //                    '<a href="javascript:void(0)"  mnu="next" class="btn disabled next fa fa-arrow-right"></a>' +
                //                '</lo>' +
                //            '</ul>' +
                //        '</div></div>')

                , gDrawer

                , reg_GRID_DS = function (e) {
                    //console.log(e)
                    if (e.name == 'opened') {
                        //
                        mobi_raw.deskGRID = e.value === true ? 1 : 2;//luu giu bien nay de khi addnew/update/delete biet ma control navigator
                        empty_msg_show(e.value);
                        //
                        var frmD = regFRM.option('formData');
                        //
                        if (e.value === true) {
                            //
                            if (reg_GRID.obj.option("focusedRowKey") !== frmD.regid) {
                                //chan lai
                                reg_GRID.obj._prevent_onFocusedRowChanged = true; //bien nay dung de prevent onFocusedRowChanged lan dau load
                                //
                                reg_GRID.obj.option({ 'disabled': false, 'focusedRowKey': frmD.regid });
                                reg_GRID.obj.refresh();
                                reg_GRID.obj._prevent_onFocusedRowChanged = false;//nha ra;
                                //
                            } else {
                                reg_GRID.obj.option({ 'disabled': false });
                            };
                            //
                            srclocked(false);
                        } else {
                            //
                            reg_GRID.obj.option('disabled', true);//chi lam cho nhe browser
                            //
                            if (!$.isEmptyObject(frmD)) {
                                var atK = fillMASTER.atK(frmD.regid);//se tra ve [0]:data at index; [1]:index of data
                                RegFRM.dataNV_SEK.at(atK[1]);
                            };
                            srclocked(false);
                        };
                        //
                    };
                }
                    
                , reg_GRID = function (gPos) {
                    //
                    if (!reg_GRID.gDrawer) {
                        //
                        var drawO = {
                            opened: false,
                            height: '100%',
                            closeOnOutsideClick: false
                        },
                        gridO = {
                            width: '800px',
                            height: '300px'
                        };

                        //
                        if (gPos == 2) {//horizontal top
                            drawO.revealMode = 'expand';
                            drawO.position = 'top';
                            drawO.width = '100%';
                            //
                            gridO = {
                                height: aLAN.js_usr_info[0] == 1 ? '700px' : '550px',
                                width:'100%'
                            }
                        };
                        //
                        reg_GRID.gDrawer = fuckdrawer.find('.fuckdrawer').dxDrawer($.extend({

                            //openedStateMode:'push',

                            template: function (pl) {
                                //
                                
                                var dbE = new DevExpress.data.ArrayStore({
                                    key: 'regid',
                                    data: fillMASTER.GET()
                                }),

                                GRD
                                ,

                                getGroupCount = function (groupField) {
                                    //console.log('getGroupCount');
                                    return DevExpress.data.query(elUI.regDAT)
                                        .groupBy(groupField)
                                        .toArray().length;
                                }

                                var dogDIV = $('<div></div>').appendTo(pl);

                                    //isDUME = 1,

                                    //dumeHWND = -1,

                                    fnBtnSta/*dumeFN */= function (d) {
                                        //
                                        var sta = d === 'nut_dume' && false

                                        || (!d || d.regsta == 100 || (


                                                d.regsta == 105 && aLAN.js_usr_info[1] == d.usrid && mobi_raw['mobi_cmm'].find('.act_cmm_tmpl .nhap_cmm').length > 0

                                            )
                                        );
                                        //
                                        reg_GRID.$tolBa.option('items[4].options', { 'disabled': !sta });
                                        reg_GRID.$tolBa.option('items[5].options.disabled', !sta);
                                        //
                                    };


                                //reg_GRID.fnBtnSta = function (d) {
                                //        clearTimeout(dumeHWND);
                                //        dumeHWND = setTimeout(function () {
                                //            dumeFN(d);
                                //        }, 200);
                                //    };

                                //frmEL.on('nut_dume', function (a, b) {
                                //    //isDUME = 2;//du me ko tim kiem nua.
                                //    fnBtnSta('nut_dume');
                                //});

                                reg_GRID.$tolBa = $('<div style="box-shadow: inset 0 8px 10px -6px rgba(191, 191, 191, 0.15);"></div>').appendTo(dogDIV).dxToolbar({
                                    items: [
                                        {
                                            widget: 'dxButton',
                                            location: 'before',
                                            options: {
                                                icon: 'menu',
                                                stylingMode: 'text',
                                                onClick: function (e) {
                                                    ctxMEFN.op = {
                                                        position: {
                                                            my: "left top",
                                                            at: "left bottom",
                                                        }
                                                        ,
                                                        onShowing: function (e) {
                                                            ctxMEFN.el.children().addClass('d-none');
                                                            var acDIV = ctxMEFN.el.find('.' + ctxMEFN._forMNU);
                                                            acDIV.removeClass('d-none');
                                                            //if (ctxM._fnUI) ctxM._fnUI(1, acDIV);
                                                            srclocked(false);
                                                        }
                                                    };
                                                    //function nay nam o sockjo.js
                                                    dogOutCLK(ctxMEFN.op, true);
                                                    //
                                                    ctxMEFN('mnu_desk_reg_lst', e.element, elUI.lan);
                                                },
                                            },
                                        }
                                        ,
                                        {
                                            location: 'before',
                                            template: function () {
                                                return $('<div>')
                                                .addClass('informer')
                                                .append(
                                                    $('<div>')
                                                    .addClass('count')
                                                    .text(aLAN.js_001_24 || "Group by")
                                                    //$('<span>')
                                                    //.addClass('name')
                                                    //.text('Total Count')
                                                )
                                            },
                                        }, {
                                            location: 'before',
                                            widget: 'dxSelectBox',
                                            options: {
                                                width: 225,
                                                items: [{
                                                    value: "",
                                                    text: '(none)',
                                                }, {
                                                    value: 'ff_regtyp',
                                                    text: hedTEX(1) || 'Type of registration',
                                                }, {
                                                    value: 'ff_regsta',
                                                    text: hedTEX(2) || 'Status',
                                                }],
                                                displayExpr: 'text',
                                                valueExpr: 'value',
                                                value: '',
                                                onValueChanged: function (e) {
                                                    //
                                                    srclocked(true);
                                                    setTimeout(function () {
                                                        reg_GRID.obj.clearGrouping();
                                                        //
                                                        if (e.value !== "") {
                                                            reg_GRID.obj.columnOption(e.value, 'groupIndex', 0);
                                                        };
                                                        //$('.informer .count').text(getGroupCount(e.value));
                                                    }, 10);
                                                },
                                            },
                                        }, {
                                            location: 'before',
                                            widget: 'dxButton',
                                            options: {
                                                text: 'Collapse All',
                                                width: 136,
                                                visible: false,
                                                onClick: function (e) {
                                                    const expanding = e.component.option('text') === 'Expand All';
                                                    reg_GRID.obj.option('grouping.autoExpandAll', expanding);
                                                    e.component.option('text', expanding ? 'Collapse All' : 'Expand All');
                                                },
                                            },
                                        }
                                        ,

                                        {
                                            location: 'before',
                                            widget: 'dxButton',
                                            options: {
                                                icon: 'edit',
                                                text: aLAN.js_007_26,
                                                stylingMode: 'text',
                                                disabled: true,
                                                onClick: function () {
                                                    srclocked(true);
                                                    setTimeout(function () {
                                                        _HWND_tuychon(1, frmEL, { id: gridO.option('focusedRowKey') }, function (rst) {

                                                            //debugger;

                                                        }, mobi_raw['mobi_cmm'].find('.act_cmm_tmpl'));
                                                    }, 10);
                                                },
                                            },
                                        }

                                        ,

                                        {
                                            location: 'before',
                                            widget: 'dxButton',
                                            options: {
                                                icon: 'trash',
                                                type: 'danger',
                                                stylingMode: 'text',
                                                disabled: true,
                                                text: aLAN.js_007_27,
                                                onClick: function () {
                                                    srclocked(true);
                                                    setTimeout(function () {


                                                        var rIx = gridO.option('focusedRowIndex');
                                                        //gridO.deleteRow(rIx);//.option('focusedRowKey'));
                                                        _HWND_tuychon(2, null, { id: gridO.option('focusedRowKey') }, function (rst) {

                                                            //debugger;

                                                        });


                                                    }, 10);
                                                }
                                            },
                                        }

                                        ,

                                        {
                                            location: 'after',
                                            widget: 'dxButton',
                                            options: {
                                                icon: 'ti ti-close',
                                                stylingMode: 'text',
                                                type: 'danger',
                                                onClick: function () {
                                                    reg_GRID.gDrawer.toggle();
                                                },
                                            },
                                        }

                                    ]

                                }).dxToolbar('instance');
                                //
                                var gidLOCK = -1,
                                    gidLOCK_fn = function () {
                                        clearTimeout(gidLOCK);
                                        srclocked(false);
                                        console.log(' gidLOCK_fn ',new Date().getTime());
                                    };
                                //
                                gridO = $('<div class="luoi_head bo_line_top gid_lineh_1">').appendTo(dogDIV)
                                        .dxDataGrid($.extend({

                                            dataSource: {
                                                store: dbE,
                                                reshapeOnPush: true,
                                            }



                                            ,filterPanel: {
                                                visible: true
                                            }
                                            , headerFilter: {
                                                visible: true
                                            }
                                            ,
                                            filterRow: {
                                                visible: true
                                            }



                                            ,autoNavigateToFocusedRow: true


                                            //option nay lam nhe grid nhung co khuyet diem khi insert new row thi no con giu focus o grid row cu !!!
                                            ,repaintChangesOnly: true

                                            ,
                                      
                                            noDataText: function (e) {
                                                this.innerHTML = mobi_raw['empty_msg'].html();
                                            }
                                            ,

                                            editing: {
                                                confirmDelete:false
                                            },

                                            //keyExpr: 'regid',
                                            showBorders: true,

                                            columnAutoWidth: false,

                                            allowColumnReordering: false,

                                            focusedRowEnabled: true,

                                            paging: {
                                                pageSize: 20,
                                            },
                                            pager: {
                                                visible: true,
                                                allowedPageSizes: [20, 50,100, 'all'],
                                                showPageSizeSelector: true,
                                                showInfo: true,
                                                showNavigationButtons: true,
                                            },
                                            columns: [{
                                                dataField: 'oid',
                                                caption: hedTEX(0) || '#',
                                                width: 50,
                                                cssClass: 'text-wrap text-center',

                                                allowFiltering: false

                                            }

                                            ,

                                            {
                                                caption: hedTEX(1) || 'Type of registration',
                                                dataField: 'ff_regtyp',
                                                minWidth: 150,


                                                allowHeaderFiltering: true,
                                                allowFiltering: false

                                            }
                                            ,

                                            {
                                                widget: 'dxDateBox',
                                                caption: _gLA(17) || "Date",
                                                dataField: 'EachDate',
                                                dataType: 'date',
                                                format: function (e) {
                                                    return new Intl.DateTimeFormat(apisvr.a$.selected_language, {//
                                                        year: 'numeric',
                                                        month: '2-digit',
                                                        day: '2-digit'
                                                    }).format(e);
                                                },
                                                width: 100,

                                                allowHeaderFiltering: false
                                            }

                                            ,

                                            {
                                                dataField: 'ff_regsta',
                                                caption: hedTEX(2) || 'Status',
                                                minWidth: 100,

                                                allowHeaderFiltering: true,
                                                allowFiltering: false

                                                //alignment: 'right',
                                                //format: function (e) {
                                                //    return formatCurrency(e);
                                                //}
                                            }

                                            ,

                                            {
                                                caption: hedTEX(3) || 'Attachments',
                                                dataField: 'tepcnt',
                                                width: 70,
                                                cssClass: 'w_1',//class white space wrap header

                                                allowHeaderFiltering: false

                                            }

                                            ,

                                            {
                                                caption: hedTEX(4) || 'Valid employee(s)',
                                                dataField: 'empcnt',
                                                width: 70,
                                                cssClass: 'w_1',//class white space wrap header

                                                allowHeaderFiltering: false
                                            }
                                            ,


                                            {

                                                caption: hedTEX(5) || 'Registration by',
                                                columns: [
                                                {
                                                    caption: hedTEX(7) || 'AC.no',
                                                    dataField: 'ff_usrid',
                                                    width: 75,
                                                    allowHeaderFiltering: false
                                                }
                                                ,
                                                {
                                                    caption: hedTEX(8) || 'Code',
                                                    dataField: 'ff_EmpCode',
                                                    width: 100,
                                                    allowHeaderFiltering: false
                                                }

                                                , {
                                                    caption: hedTEX(9) || 'Full name',
                                                    dataField: 'ff_EmpName',
                                                    minWidth: 150,
                                                    allowHeaderFiltering: false
                                                }]
                                            }

                                            ,

                                            {

                                                caption: hedTEX(6) || 'Registration time',
                                                dataField: 'tg',
                                                dataType: 'datetime',
                                                format: nga_sDt24,
                                                cssClass: 'w_1 _1_',
                                                width: 100,
                                                allowHeaderFiltering: false

                                            }].concat((aLAN.js_usr_info[0] == 1) ? [{
                                                    caption: hedTEX(13) || 'Admin Checked',
                                                    dataField: 'adchk',
                                                    width: 100,
                                                    cssClass: 'w_1',//class white space wrap header
                                                    
                                                    lookup: {
                                                        dataSource: [

                                                            { ma: 1, des: "" },
                                                            { ma: 2, des:hedTEX(14) ||  "passed" }],

                                                        valueExpr: "ma",
                                                        displayExpr: "des"

                                                    }
                                                    ,
                                                    allowHeaderFiltering: true,
                                                    allowFiltering: false
                                                }] : [])

                                            ,

                                            onContentReady: function (e) {
                                                //
                                                //console.log('onContentReady: ',new Date().getTime());
                                                //
                                                if (!reg_GRID.obj) {//may phuoc la da sure chi catch 1 lan duy nhat !!!
                                                    //
                                                    reg_GRID.obj = e.component;
                                                    //--------set focus row lan dau tien cho grid
                                                    //chiu thiet thoi chut , vao form lay ...
                                                    //
                                                    e.component._prevent_onFocusedRowChanged = true; //bien nay dung de prevent onFocusedRowChanged lan dau load
                                                    //sau khi load xong roi thi release khi drawer open mode,.
                                                    //

                                                    var frmD = regFRM.option('formData');
                                                    e.component.option('focusedRowKey', frmD.regid);
                                                    //
                                                    fnBtnSta(frmD);
                                                    //
                                                    mobi_raw.deskGRID = 1;//dang open
                                                    //
                                                    setTimeout(function () {
                                                        reg_GRID.gDrawer.option({
                                                            'opened': true, onOptionChanged: reg_GRID_DS
                                                        });
                                                        //lan dau tien ....
                                                        empty_msg_show(true);
                                                        //
                                                        reg_GRID.obj._prevent_onFocusedRowChanged = false; //release
                                                        //
                                                    }, 1);
                                                };
                                                //
                                                clearTimeout(gidLOCK);
                                                gidLOCK = setTimeout(function () { gidLOCK_fn(); },300);
                                                //
                                            }
                                            ,

                                            onFocusedRowChanged: function (e) {
                                                //
                                                if (gridO._prevent_onFocusedRowChanged === true) {
                                                    //console.log('Prevent onFocusedRowChanged: function (e) {');
                                                    return;
                                                } else {
                                                    //console.log('Allow onFocusedRowChanged: function (e) {');
                                                };
                                                //
                                                gridO._manualRowFocused(e);
                                                //
                                                //reg_GRID.fnBtnSta(e.row && e.row.data);
                                                //
                                            }

                                            ,

                                            onCellPrepared: function (e) {

                                                if (e.rowType === "data" && e.column.dataField === "ff_regsta") {
                                                    //
                                                    var ico = 'fa fa-pencil';
                                                    //
                                                    if (e.data.regsta == 100) {

                                                    } else if (e.data.regsta == 105) {
                                                        ico = "fa fa-reply";
                                                    } else if (e.data.regsta == 101) {
                                                        ico = "fa fa-paper-plane";
                                                    } else if (e.data.regsta < 103) {
                                                        ico = 'fa fa-hourglass-o';
                                                    } else if (e.data.regsta == 103) {
                                                        ico = 'fa fa-check-circle';
                                                    } else if (e.data.regsta == 104) {
                                                        ico = 'fa fa-times-circle';
                                                    };
                                                    //
                                                    e.cellElement.html('<i class="' + ico + '"></i> ' + e.displayValue);
                                                    //
                                                };

                                            }

                                            ,
                                            onRowPrepared: function (e) {
                                                if (e.rowType == 'data') {
                                                    //
                                                    var tcol = '';
                                                    //
                                                    if (e.data.regsta == 100) {
                                                        tcol = 'font-italic';
                                                    } else if (e.data.regsta == 101) {

                                                    } else if (e.data.regsta < 103) {
                                                        tcol = 'text-warning';
                                                    } else if (e.data.regsta == 103) {
                                                        tcol = 'text-success';
                                                    } else if ([104, 105].indexOf(e.data.regsta) > -1) {
                                                        tcol = 'text-danger';
                                                    };
                                                    //
                                                    e.rowElement.addClass(tcol);
                                                };
                                            }

                                            , onOptionChanged: function (e) {
                                                if (e && ['filterValue'].indexOf(e.name) > -1) {
                                                    //
                                                    srclocked(true);
                                                    //
                                                    //du phong, nhung neu heavy task thi no ko end after 300 !!!
                                                    //
                                                    clearTimeout(gidLOCK);
                                                    gidLOCK = setTimeout(function () { gidLOCK_fn(); }, 300);
                                                    //
                                                };
                                            }


                                        }, gridO)).dxDataGrid('instance');

                                //
                                mobi_raw.__regGID = [dbE, gridO];
                                //
                                //khi changed pagerSize , hoac page index thi lock cho tao
                                var fuck = gridO._$element.find('.dx-datagrid-pager.dx-pager').data().dxPager;
                                    //, fuckD = gridO.getDataSource();

                                fuck._optionChanged = function (args) {

                                    if (args && ['pageSize', 'pageIndex'].indexOf(args.name) > -1) {
                                        //console.log('fuck._optionChanged    srclocked(true)', new Date().getTime());
                                        srclocked(true);
                                        //
                                        //
                                        //du phong, nhung neu heavy task thi no ko end after 300 !!!
                                        clearTimeout(gidLOCK);
                                        gidLOCK = setTimeout(function () {gidLOCK_fn(); }, 300);
                                    };

                                    var $_tha = this;

                                    fuck.constructor.prototype._optionChanged.call($_tha, args);
                                };
                                //
                                //fuckD.load = function () {
                                //    srclocked(true);
                                //    var $_tha = this;

                                //    console.log('fuckD.load: ', new Date().getTime());

                                //    return fuckD.constructor.prototype.load.call($_tha);
                                //};
                                //
                                //
                                gridO._manualRowFocused = function (e) {
                                    //
                                    //************** co 2 cho change form card 1.click navigator next,prev, 2. grid focus row changed
                                    srclocked(true);
                                    setTimeout(function () {
                                        duma_hwnd = function (e) {
                                            duma_hwnd = null;//reset
                                            srclocked(false);
                                        };
                                        var dat;
                                        if (!e.row) {
                                            //
                                        } else if (e.row.rowType == 'group') {
                                            if (e.row.data.items) {
                                                dat = e.row.data.items[0];
                                            } else if (e.row.data.collapsedItems) {
                                                dat = e.row.data.collapsedItems[0];
                                            };
                                        } else if (e.row.rowType == 'data') {
                                            dat = e.row && e.row.data || null;
                                        };
                                        //
                                        regFRM.option({ disabled: !dat, formData: dat });
                                        //
                                    }, 10);
                                    //
                                };
                                //
                            }
                            
                        },drawO)).dxDrawer('instance');
                        //
                    } else {
                        reg_GRID.gDrawer.toggle();
                    };
                }

                , reg_filter = divFRM.prev().on('click', '.btn', function (e) {
                    var btn = $(e.currentTarget),
                        mnu = btn.attr('mnu');

                    switch (mnu) {
                        case 'gview': {
                            srclocked(true);
                            setTimeout(function () {
                                reg_GRID(2);// reg_GRID(1);
                            }, 10);
                            break;
                        }
                        case 'gfilter': {
                            srclocked(true);
                            setTimeout(function () {
                                //mod:1 reload datasource
                                LOD_REG_DAT(
                                    elUI.__loadOPT = { 'mod': 1, 'frm': lk_tungay.option('value'), 'too': lk_dengay.option('value'), 'mobiui': mobi_raw['mobiui'] }
                                    , new $.Deferred().resolve(RegFRM)
                                    );
                                //$(e.currentTarget).prop({ disabled: true });
                            }, 10);
                            break;
                        }
                        case "tuychon": {

                            //alert("are you here?");

                            srclocked(true);

                            setTimeout(function () {
                                tuychon(frmEL, e, {
                                    cb: function (a, b, c) {
                                        if (a == 0) return;//hide
                                        regis_hed_fot(b, '-1', '_vis');
                                    }
                                });
                            }, 10);
                            //
                            break;
                        }
                    };
                })
                .on('evtUI', function (a, b, c) {
                    reg_filter.find('[mnu="gfilter"').prop({ disabled: false });
                    //debugger;
                })


                , lk_tungay = reg_filter.find('.lk_tungay').dxDateBox({
                    //acceptCustomValue:false,
                    placeholder: hedTEX(1, elUI.lan.js_011_31 || []) || 'From date',
                    value:new Date(loadOPT.frm.setHours(0,0,0,0)),
                    onValueChanged: function (data) {
                        if (data.value && data.value instanceof Date && !isNaN(data.value)) {
                            var od = new Date(lk_dengay.option('value'));
                            if (new Date(data.value).getTime() > od.getTime()) {
                                lk_dengay.option('value', data.value);//set den ngay bang tu ngay
                            } else {
                                reg_filter.trigger('evtUI', [data]);
                            };
                        } else {
                            data.component.option('value', data.previousValue || new Date(new Date().setHours(0, 0, 0, 0)));
                        };
                    },
                }).dxDateBox('instance')

                , lk_dengay = reg_filter.find('.lk_dengay').dxDateBox({
                    //acceptCustomValue: false,
                    placeholder: hedTEX(2, elUI.lan.js_011_31 || []) || 'To date',
                    value: new Date(loadOPT.too.setHours(0, 0, 0,0)),
                    onValueChanged: function (data) {
                        if (data.value && data.value instanceof Date && !isNaN(data.value)) {
                            var od = new Date(lk_tungay.option('value'));
                            if (new Date(data.value).getTime() < od.getTime()) {
                                lk_tungay.option('value', data.value);//set den ngay bang tu ngay
                            } else {
                                reg_filter.trigger('evtUI', [data]);
                            };
                        } else {
                            data.component.option('value', data.previousValue || new Date(new Date().setHours(0, 0, 0, 0)));
                        };  
                    },
                }).dxDateBox('instance')

                //, dumeSVG = 
                    
                , RegFRM = function () {
                    //  

                    $('<div style="flex:0.3;text-align:right"><a mnu="start_mnu" style="padding: 10px;border-radius: 50%;font-size:large" type="button" class="btn btn-primary ti-plus start_mnu _close"></a><div>')
                    .insertBefore(divFRM.prev().find('.frm_tieude') ).on('click', 'a', function (e) {
                        //
                        srclocked(true);
                        setTimeout(function () {
                            tuychon(frmEL, e, {
                                cb: function (a) {
                                    $(e.currentTarget).toggleClass("_close _open");
                                }
                            });
                        }, 10);
                    });

                    fuckdrawer = $(mn_QUYE.fuckdrawer).appendTo(divFRM);


                    var reg_card = fuckdrawer.find('.reg_card')
                    ,

                    ulDU_ME = $('<ul class="list-group ulDU_ME mx-3"></ul>').append($('<li class="list-group-item"></li>').append(cardNAV))//.append(reg_card))

                    .appendTo(fuckdrawer.find('.fuckdrawer').append(mobi_raw['empty_msg']));
                    //
                    //
                    //doi parent comment cho giong voi mobil
                    mobi_raw['mobi_cmm'].insertBefore(reg_card);

                    //var self_SND=$(dumeSVG + mobi_raw['compose_comm']);
                    //self_SND.find('.ticket-state').remove();
                    //self_SND.find('.ticket-user').remove();
                        
                    //self_SND = self_SND.insertBefore(reg_card).parent().css('margin-top', '65px');

                    //var lev1 = $('<li class="list-group-item fill-success">' + dumeSVG + mobi_raw['compose_comm'] + '</li>').css('margin-top', '65px').insertBefore(self_SND);

                    //$(dumeLI('', '<img src="https://bootdey.com/img/Content/user_1.jpg" class="commenter-pic" style="margin-left:-15px" />')).insertBefore(lev1);

                    //nhet navigator va comment vao sau empinfor card
                    ulDU_ME.parent().parent().prepend(navig.find('.card-footer'));//.toggleClass('mt-3 mt-0')
                    //
                    return reg_card;
                    //
                }().dxForm({
                    readOnly:true,
                    disabled:true,
                    screenByWidth: function (w) {
                        if (w < 550) return 'xs';
                        //return 'sm';
                        //return w < 500 ? 'sm' : 'md';
                    },
                    items: [{
                        itemType: 'group',
                        cssClass: 'first-group px-0 mx-auto',
                        colCount: 8,//col1:5 col2:3
                        colCountByScreen: {
                            xs: 1,
                        },
                        items: [
                            {
                                itemType: 'group',
                                colSpan: 5,
                                colCount: 4,
                                colCountByScreen: {
                                    xs: 4,
                                },
                                items: [

                                    {
                                        cssClass: 'position-relative',
                                        template: function (e, b) {
                                            //
                                            //mobi_raw.desPIC = $('<div class="dumeARROW" style="margin-top: -50px;right: 0;left: auto;">' +
                                            //            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M318 177.5c3.8-8.8 2-19-4.6-26l-136-144C172.9 2.7 166.6 0 160 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S14.4 192 24 192h88l0 288c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32l0-288h88c9.6 0 18.2-5.7 22-14.5z" /></svg>' +
                                            //        '</div>' +
                                            //        '<div class="form-avatar mx-auto"></div>');
                                            //
                                            mobi_raw.desPIC = mobi_raw.dumeSVG.find('.dumeARROW').clone().attr('style', 'margin-top: -50px;right: 0;left: auto;');
                                            b.append([mobi_raw.desPIC, '<div class="form-avatar mx-auto"></div>']);
                                            //
                                            mobi_raw.desPIC.empid = -1;
                                        },
                                    }
                                    ,

                                    grpI1()
                                ]
                            }
                        ,
                        {
                            itemType: 'group',
                            colSpan: 3,
                            items: [

                                {
                                    editorOptions: {
                                        labelMode: 'floating',

                                    },
                                    label: {
                                        text: hedTEX(9) || 'Full name',
                                        visible: false
                                    },
                                    dataField: 'EmpName',
                                }
                                ,

                                {
                                    editorOptions: {
                                        labelMode: 'floating',

                                    },
                                    label: {
                                        text: hedTEX(10) || 'Gender',
                                        visible: false
                                    },
                                    dataField: 'ff_gt',//gioi tinh
                                }
                                ,
                                {
                                    editorOptions: {
                                        labelMode: 'floating',

                                    },
                                    label: {
                                        text: hedTEX(11) || 'Birthday',
                                        visible: false,
                                    },
                                    dataField: 'bd',//bithday
                                    editorType: 'dxDateBox'
                                }

                            ],
                        }

                        ],



                    }


                    ],

                    onOptionChanged: function (e) {
                        if (e.name === "formData") {
                            //
                            if (JSON.stringify(e.previousValue) !== JSON.stringify(e.value)) {
                                //debugger;
                                //chi refresh comment khi khac nhau ...
                                //
                                var emptyC='add';
                                if ($.isEmptyObject(e.value)) {//empty
                                    //
                                    mobi_raw['mobi_cmm'].html('');
                                    //
                                    mobi_raw.desPIC.next().css('background-image', '');
                                    //
                                    //
                                } else {
                                    //
                                    mobi_raw['mobi_cmm'].html(mobi_raw['mobi_cmmraw'].rebuild(e.value));
                                    emptyC = 'remove';
                                    //
                                    //
                                    if (mobi_raw.desPIC.empid != e.value.usrid) {
                                        //
                                        //
                                        (function (acno) {
                                            //
                                            var src = apisvr._src/*'https://timegold.liwayway.com.vn:3004/aap/epic/'*/ + acno + '.jpg';
                                            $('<img>').attr('src', src + '?t=' + new Date().getTime()).on('load', function (e) {
                                                //
                                                mobi_raw.desPIC.next().css('background-image', 'url(' + src + src$id + ')');
                                                //
                                            }).on('error', function (e) {
                                                //
                                                mobi_raw.desPIC.next().css('background-image', '');
                                                //
                                            });
                                            //
                                            mobi_raw.desPIC.empid = acno;
                                            //
                                        })(e.value.usrid);
                                        //
                                    };
                                    //
                                };
                                //
                                fnBtnSta(emptyC == 'add' ? 'nut_dume' : e.value);
                                //
                                e.element[emptyC + 'Class']('empcard_empty');
                                //
                            };
                            //
                            //console.log(' onOptionChanged: function (e) {');
                            var _$_ = duma_hwnd;
                            if (_$_ && typeof _$_ === 'function') _$_(e);
                            //
                            //
                        }
                    }

                }).dxForm('instance');


                RegFRM.dataNAVI = cardNAV.on('click', 'a.btn', function (e) {
                    //************** co 2 cho change form card 1.click navigator next,prev, 2. grid focus row changed
                    srclocked(true);
                    setTimeout(function () {
                        //
                        duma_hwnd = function (ex) {//cho su kien form change option data
                            duma_hwnd = null;//reset
                            srclocked(false);
                        };
                        //
                        RegFRM.dataNV_SEK[e.currentTarget.getAttribute('mnu')]();
                        //
                    }, 10);
                });
                //
                RegFRM.dataNV_SEK = frmDataNavigator(cardNAV);//khoi tao
                //
                return RegFRM;
                //
            }

            ,

            req_frm = function (frmEL) {

                var popup = null
                     
                    ,

                    c0d

                    ,

                    //products
                    //,
                    ini_popup = function (dropLOD) {


                        //jQuery.support.cors = true;


                        var regEMP_LST,


                            divTotal,

                            form,

                            luoi,

                            ref_regfrm,

                            scroll_FRM,

                            tieude,

                            DROP_Z

                            ,

                            frmTitle = function () {

                                popup._$content.removeClass('lkload');
                                popup._$popupContent.removeClass('invisible');


                                srclocked(false);


                                if (tieude.hasClass('long-title')) return;
                                //var fuk = divTotal.children('div.long-title').html('Registration');
                                //fuk.insertBefore(tieude);
                                //tieude.remove();
                                //tieude = fuk;
                            }
                            ,

                            PU_TIT_PARA = function () {

                                if (req_frm.uptKEY == -1) {

                                    tieude.text(_gLA(32, 12) || "Registration New");

                                } else {
                                    var tiit = req_frm.datUPT[2];
                                    if (tiit) {
                                        tiit = tiit[2];//item 2
                                        if (!tiit.text) {//co fn text nghia la jquery object
                                            //xem nhu la 1 edit
                                            req_frm.datUPT[2] = undefined;//bo cho no undefined khi vao fn tinh xuat hien cua nut Nop
                                            //
                                        } else {
                                            tiit = tiit.text().toUpperCase();
                                        };
                                    };
                                    tieude.text(tiit || (_gLA(32, 13) || "Edit Registration"));

                                    //tieude.text(req_frm.datUPT[2] ?
                                    //    //
                                    //    //admin xem dang ky cua admin thi dong nghia voi edit
                                    //    //
                                    //    (req_frm.datUPT[2][2].text ?
                                    //            req_frm.datUPT[2][2].text().toUpperCase()
                                    //    : req_frm.datUPT[2][2])



                                    //    : (_gLA(32, 13) || "Edit Registration"));
                                };
                                //
                                //
                                //
                                syncSEL.lst_ = regEMP_LST_ReadOnly();
                                //
                                return syncSEL.lst_;
                            }

                            ,

                            regEMP_LST_ReadOnly = function (mod) {
                                //
                                //review nop duyet registration
                                //
                                if (req_frm.uptKEY != -1 && req_frm.datUPT[2]) {
                                    //
                                    var r = req_frm.datUPT[2];
                                    //
                                    if (r[0] != '-1') {//day chinh la _req_tools._me

                                        if (r[1].indexOf('|canticksel') > 0) {//quyen tick select valid emp
                                        
                                            return 2;//can tick checkbox

                                        } else {

                                            return 1;//disable all

                                        }
                                    } else {

                                        return 1;//disable all

                                    };
                                };
                                //
                                //new, edit registration
                                return 0;
                                //
                            }
                            ,
                            fuck_lst_chk = function () {
                                var th = this[0], chk = this[1];
                                //
                                //th.data().dxListItemData.rmv = chk.hasClass('dx-checkbox-checked')?  parseInt(aLAN.js_usr_info[1] ) :-1 ;
                                //
                                regEMP_LST.option('selectedItems').some(function (dg) {
                                    if (dg.acno == th.data().dxListItemData.acno) {

                                        dg.rmv = chk.hasClass('dx-checkbox-checked') ? parseInt(aLAN.js_usr_info[1]) : -1;

                                        return true;

                                    }
                                });

                            }
                            ,
                            fuck_SELST=function(it){
                                var th = $(this),
                                    chk = th.find('.dx-checkbox');
                                //
                                if (chk.length > 0) {
                                    //
                                    clearTimeout(fuck_SELST.fuck_lst_chk);
                                    //
                                    fuck_SELST.fuck_lst_chk = setTimeout(fuck_lst_chk.bind([th, chk]), 300);
                                    //
                                };
                            }
                            ,
                            syncSEL = function (_D) {
                                //
                                var lst_m = syncSEL.lst_;//moi lan tinh lai thi no se luu tru vao variable lst_
                                //
                                //chi co truong hop ko cho select thi cam tuyet doi.
                                regEMP_LST._$container[(lst_m==1?'add':'remove') + 'Class']('prevent_point');
                                //
                                if (lst_m == 0) return;
                                //
                                regEMP_LST.unselectAll();
                                //
                                _D.map(function (v) {
                                    if (v.rmv > -1) {
                                        //
                                        var isDIS = aLAN.js_usr_info[1] != v.rmv,
                                            it = regEMP_LST._findItemElementByKey(v.acno);
                                        //
                                        if (it.length > 0) {
                                            it.addClass(isDIS ? 'prevent_point' : '')
                                            .find('.dx-checkbox').data().dxCheckBox.option({ 'value': true, disabled: isDIS });
                                        };
                                        //
                                    };
                                });
                                //
                                //
                                regEMP_LST._$container.off('mouseup').on('mouseup', ".dx-list-item", fuck_SELST);
                                //
                            }

                            ,

                            a_dogSEL = function (m0d) {
                                //
                                var dogWh = req_frm.uptKEY != -1 && req_frm.datUPT[1].data('ToiLaAi_In_This_Regis')

                                    || elUI.lan.rawD._fl0wself && elUI.lan.rawD._fl0wself[req_frm.renWhat];
                                //
                                if (m0d == 1) {

                                    return (elUI.downline == 2 || ( elUI.quy_imp_excel && req_frm.renWhat==2))
                                        
                                        && syncSEL.lst_ == 0 ? '' :
                                    (
                                        syncSEL.lst_ == 1 ? 'only_read' :

                                        (syncSEL.lst_ == 2 ? 'duyet_rmv' :

                                            (!dogWh ? 'only_me' : '')

                                        )

                                    );

                                } else if (m0d == 2) {
                                    //nut chon nhan vien visible
                                    //allowItemDeleting
                                    return elUI.downline == 2 && syncSEL.lst_ == 0 || !!(dogWh);
                                };
                            }

                            //,

                            //ini_frm_val = function (fm, fi, v) {
                            //    fm.getEditor(fi).option('value', v);
                            //}
                            ,
                            render_frm = function (snd) {
                                //
                                var _gR = req_frm.uptKEY != -1 ? _deDATNO(req_frm.uptKEY) : []
                                    , fO = _gR[0]//co ko co gi cung ko anh huong den tao
                                    , isView = _gR.length > 0 ? !req_frm.datUPT[2] : true //chi co boss moi review va xet duyet
                                    , isP = DevExpress.devices._realDevice.deviceType == 'phone'
                                    , LV_NGA = [, ]
                                    , masLV = form._masLV;


                                if (!snd) {//open edit again
                                    masLV = JSON.parse(elUI.lan.rawD.ma$ter).filter(function (v) {
                                        return v.typ == 3;
                                    });
                                };
                                //
                                //
                                if (!fO) fO = {
                                    id: masLV.length > 0 ? masLV[0].id : null,
                                    EachDate: new Date(new Date().setHours(0, 0, 0, 0)),
                                    todate: new Date(new Date().setHours(0, 0, 0, 0)),
                                    tresom: 1,
                                    selo: 0,//default value
                                    tong: elUI.minTong//default value
                                };


                                if (snd == 1) {//open edit again
                                    return [fO,!isView];// && fO.tong || 0;//tra ve selected index form
                                };
                                //   
                

                                form = form.dxForm({
                                    labelMode: 'floating',
                                    formData: fO,
                                    readOnly: !isView,
                                    showColonAfterLabel: true,
                                    labelLocation: 'left',
                                    minColWidth: 300,
                                    colCount: 2,

                                    items: c0d.regisFRM(elUI, masLV, LV_NGA, fO, _gLA, isP, isView)

                                    ,
                                    onContentReady: function (e) {
                                        //
                                        frmTitle();
                                        //
                                        //if (!elUI.frmInstace) {
                                        //    //
                                        //    ini_frm_val(e.component,'EachDate',new Date(fO && new Date(fO.EachDate) || new Date().setHours(0, 0, 0, 0)));
                                        //    ini_frm_val(e.component, 'todate', new Date(fO && new Date(fO.todate) || new Date().setHours(0, 0, 0, 0)));
                                        //    //
                                        //    ini_frm_val(e.component, 'id', fO && fO.id || (masLV.length > 0 ? masLV[0].id : null));
                                        //    //
                                        //    ini_frm_val(e.component, 'tresom', fO && fO.tresom || 1);
                                        //    //
                                        //    ini_frm_val(e.component, 'tong',elUI.minTong);
                                        //    //
                                        //};
                                        ////
                                        //elUI.frmInstace = 1;//flag
                                        //
                                    }
                                }).dxForm('instance');
                                //
                                //
                                form._masLV = masLV;
                                //
                            }

                            ,

                            hwndSELALL = -1

                            ,

                            render_gid = function (snd) {
                                
                                var _gR = req_frm.uptKEY != -1 ? _deDATNO(req_frm.uptKEY) : [],

                                    rOT_DS = new DevExpress.data.ArrayStore({
                                        key: 'aid',
                                        data: _gR.map(function (v, i) {
                                            var tugio = new Date(v.EachDate),
                                                dengio = new Date(v.todate),
                                                EachDate = new Date(new Date(v.EachDate).setHours(0, 0, 0,0));
                                            //
                                            return {
                                                id: v.id, EachDate: EachDate, tugio: tugio, dengio: dengio, tong: v.tong, notes: v.notes, aid: v.aid, tresom: v.tresom
                                            };
                                        })
                                    })
                                    ,

                                    lst_m =syncSEL.lst_= regEMP_LST_ReadOnly()

                                    ,

                                    lockSELALL = function () {
                                        //console.log('lockSELALL:' + new Date());
                                        //
                                        if (rOT_DS._array.filter(function (v) {
                                            return v.tresom != -1 && ('-' + elUI.chkNo1() != v.tresom);
                                        }).length > 0) {
                                            //
                                            var chk = luoi._$element.find('.dx-datagrid-headers .dx-select-checkbox');//.data().dxCheckBox;
                                            chk.data().dxCheckBox.option({ 'disabled': lst_m == 2 });
                                            //
                                        };
                                    }
                                    ,

                                    gid_edt = function (e) {

                                        if (lst_m == 0) return;

                                        if (e.type != 'selection') return;
                                        //
                                        var isCHK = false, isDIS = false;
                                        //
                                        if (e.parentType == 'dataRow') {
                                            isCHK = e.row.data.tresom != '-1';
                                            if (isCHK) {
                                                //
                                                isDIS = '-' + elUI.chkNo1() != e.row.data.tresom;
                                                //
                                                e.editorElement.closest('tr').addClass('dx-selection' + (isDIS ? ' prevent_point' : ''));
                                                //
                                            };
                                            //
                                            e.editorElement.data().dxCheckBox.option({ 'disabled': isDIS, value: isCHK });
                                            //
                                        } else if (e.parentType == 'headerRow') {
                                            e.editorElement.data().dxCheckBox.option({ 'disabled': false });
                                        };
                                    }

                                    ,
                                    isView = _gR.length > 0? !req_frm.datUPT[2] : true;//chi co boss moi review va xet duyet



                                //
                                if (snd === 1) {//show again
                                    //
                                    luoi._$element[(isView ? 'remove' : 'add') + 'Class']('only_read');
                                    //
                                    luoi.deselectAll();
                                    //
                                    //lay tam bien nay lam option
                                    snd = { 'onEditorPrepared': gid_edt, 'dataSource': rOT_DS, 'selection': { mode: lst_m == 1 ? "none" : 'multiple', allowSelectAll: lst_m == 0 } }
                                    if (lst_m == 2) {
                                        //set selection
                                        snd.selectedRowKeys = rOT_DS._array.filter(function (v) {
                                            return v.tresom != -1;
                                        }).map(function (x) {
                                            return x.aid;
                                        });
                                    };
                                    //
                                    luoi.option(snd);
                                    //
                                    //show / hide cot selection check oh! se ko phat sinh event editor repare
                                    //luoi.columnOption(0, 'visible', lst_m != 1);
                                    luoi._$element[(lst_m == 1 ? 'add' : 'remove') + 'Class']('hideselectchk');
                                    //
                                    //
                                    luoi._dxToolBar.option('visible', isView);
                                    //
                                    return;
                                };
                                //
                                //

                                
                                

                                var dxToolBar = $('<div class="p-2"></div>').appendTo(luoi)

                                ,

                                oGID = {

                                    readOnly:lst_m==1,

                                    dataSource: rOT_DS,
                                    //noDataText: function (e) {
                                    //    //$(this).html('<div>du me cai gi cung can thiep</div>');
                                    //},
                                    columnAutoWidth: false,
                                    //columnHidingEnabled: false,

                                    showBorders: true,
                                    paging: {
                                        enabled: false,
                                    },
                                    sorting: {
                                        mode: 'none'
                                    },
                                    editing: {
                                        mode: 'form',
                                        allowUpdating: true,
                                        allowAdding: true,
                                        allowDeleting: true,
                                    }
                                    ,
                                    //columnHidingEnabled: true,

                                    selection: {
                                        mode: lst_m == 1 ? "none" : 'multiple',
                                        allowSelectAll: lst_m == 0
                                    },

                                    onContentReady: function (e) {

                                        frmTitle();

                                        if (lst_m == 2) {
                                            clearTimeout(hwndSELALL);
                                            hwndSELALL = setTimeout(function () {
                                                lockSELALL();
                                            }, 300);
                                        };

                                        //setTimeout(function () {
                                        //    luoi.updateDimensions();
                                        //}, 1000);
                                        //var bk= e.component._controllers.editing.getEditFormTemplate;
                                        //e.component._controllers.editing.getEditFormTemplate = function () {
                                        //    return '<div></div>';
                                        //}


                                        //e.component._controllers.editing.getEditFormTemplate= function() {
                                        //    var _this6 = this;
                                        //    return function($container, detailOptions, renderFormOnly) {
                                        //        var editFormOptions = _this6.option('editing.form');
                                        //        var baseEditFormOptions = _this6.getEditFormOptions(detailOptions);
                                        //        _this6._firstFormItem = void 0;
                                        //        _this6._editForm = _this6._createComponent((0, _renderer.default)("<div>").appendTo($container), _form.default, (0, _extend.extend)({}, editFormOptions, baseEditFormOptions));
                                        //        if (!renderFormOnly) {
                                        //            var $buttonsContainer = (0, _renderer.default)("<div>").addClass(_this6.addWidgetPrefix("form-buttons-container")).appendTo($container);
                                        //            _this6._createComponent((0, _renderer.default)("<div>").appendTo($buttonsContainer), _button.default, _this6._getSaveButtonConfig());
                                        //            _this6._createComponent((0, _renderer.default)("<div>").appendTo($buttonsContainer), _button.default, _this6._getCancelButtonConfig())
                                        //        }
                                        //        _this6._editForm.on("contentReady", (function() {
                                        //            var _this6$_editPopup;
                                        //            null === (_this6$_editPopup = _this6._editPopup) || void 0 === _this6$_editPopup ? void 0 : _this6$_editPopup.repaint()
                                        //        }))
                                        //    }
                                        //}


                                    },

                                    onSelectionChanged: function (data) {

                                        dxToolBar.option('items[1].options', { 'disabled': !data.selectedRowsData.length, r: data.selectedRowKeys[0] });
                                        dxToolBar.option('items[2].options.disabled', !data.selectedRowsData.length);

                                    },

                                    onEditorPrepared: gid_edt

                                };

                                $.extend(oGID, c0d.columns(elUI.lan, elUI.quy_imp_excel ? [] : [2767]));//c0d.columns,/__columns
                                //
                                //
                                if (lst_m == 2) {
                                    //set selection
                                    oGID.selectedRowKeys = rOT_DS._array.filter(function (v) {
                                        return v.tresom != -1;
                                    }).map(function (x) {
                                        return x.aid;
                                    });
                                };
                                //
                                //if (lst_m == 1) {
                                //    oGID.columns[0].visible = false;
                                //};

                                $('<div class="dog_edit_frm"></div>').insertBefore(luoi);

                                luoi = $('<div></div>').addClass(isView ? '' : 'only_read')

                                    [(lst_m == 1 ? 'add' : 'remove') + 'Class']('hideselectchk')

                                    .appendTo(luoi).dxDataGrid(oGID).dxDataGrid('instance');


                                luoi._fieldChg = function (eDit, F, V, D) {
                                    //
                                    //khi onInitialized dxDataGrid thi listen su kien editor value changed.
                                    D[F] = V;//update field value
                                    //
                                    var Nga = new Date(D.EachDate);
                                    //
                                    var tugio = new Date( new Date(D.tugio).setFullYear(Nga.getFullYear(), Nga.getMonth(), Nga.getDate())),
                                        d = new Date(tugio.getTime() + 1000 * 60 * 60 * D.tong);
                                    //
                                    eDit.dengio.option('value', new Date(d));
                                    //
                                    if (F == 'EachDate') eDit.tugio.option('value', tugio);
                                };
                                //
                                //
                                luoi._dxToolBar =dxToolBar= dxToolBar.dxToolbar({

                                    visible: isView,

                                    items: c0d.columns.otTOOLB(luoi)

                                }).dxToolbar('instance');
                                //
                            }

                            ,

                            reg_PopU = function () {

                                form = $('<div class="lv_regis_frm"></div>').appendTo(divTotal);

                                luoi = $('<div class="luoi_head bo_line_top"></div>').appendTo($('<div class="ot_thoigian"></div>').appendTo(divTotal));
                                //dang ky nhieu dong ...

                                var zomI = $('<span class="ml-2"></span>');

                                divTotal.append(
                                    $('<div class="dx-fieldset-header my-3 reg-step-no" style="font-weight: 100;"><span class="bl-no">2</span><span class="bl-txt">' + ((elUI.lan.js_011_12 || 'Attach Files')) + '</span></div>')

                                    .append(

                                        $('<span class="small d-flex align-items-center no-wrap mr-2" style="max-width:200px;flex:1' + (GetIEVersion() == 11 ? '' : ';margin-left:auto') + '"><span>100px</span></span>').append(zomI)

                                     )

                                ).append(req_frm.tmpl.tmpl_attach);

                                zomI=zomI.css('width', '100%').dxSlider({
                                    min: 100,
                                    max: 500,
                                    value: 100,
                                    valueChangeMode: 'onHandleRelease',
                                    onValueChanged:function(v){
                                        //onHandleMoveSlider.option('value', value);
                                        //sliderValue.option('value', value);
                                        zomI._$element.prev().text(v.value + 'px');
                                        mySwiper2.css('height', (v.value));

                                        dog_swiper.iniH = v.value;

                                    }
                                }).dxSlider('instance');


                                ref_regfrm = divTotal.parent();
                                //
                                //
                                var thumbnail_container = divTotal.find(".thumbnail-container").on('click', '.noDZ .remove-thumbnail', function (e) {
                                    //debugger;
                                    var file = $(this);
                                    dog_SWIPER({ name: file.prev().attr('file-name') });
                                    file.closest('.noDZ').remove();
                                })
                                ,

                                zdropOPT = {

                                    resizeWidth: 1000,
                                    dictResponseError: 'js_011_3',

                                    headers: {
                                        "Accept": null,
                                        "Cache-Control": null,
                                        "X-Requested-With": null
                                    },

                                    transformFile: function (file, done) {
                                        if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {
                                            return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
                                        } else {
                                            return done(file);
                                        }
                                    }
                                    ,


                                    //withCredentials: true,  //cross domain property

                                    url: 'https://timegold.liwayway.com.vn:3004/aap/api/HelloHRM/hinh',//'http://hellohrm2020.ddns.net:2432/api/HelloHRM/hinh',//  'http://timegold.liwayway.com.vn:3003/aap/api/HelloHRM/hinh',// ,//,//  '/dropzone_upload.php',
                                    method: "POST",
                                    paramName: "file",
                                    //

                                    maxFilesize: 50, // MB
                                    //uploadMultiple: true,
                                    parallelUploads: 100, // use it with uploadMultiple

                                    //acceptedFiles: 'image/*',
                                    //accept: function(file, done) {
                                    //    if (file.name == "weeklyhow.png") {
                                    //        done("It is the file.");
                                    //    }
                                    //    else { 
                                    //        done("It is not the file"); 
                                    //    }
                                    //},
                                    autoProcessQueue: false,

                                    uploadMultiple: true,
                                    //maxFilesize: 30,

                                }
                                ,
                                mySwiper2
                                ,
                                upload_label
                                ,
                                tmpSlide = function (tmp) {
                                    mySwiper2.find('.swiper-wrapper').append(tmp.addClass('invisible'));
                                }
                                ,
                                dog_SWIPER = function (file, img) {
                                    if (img) {//add
                                        //
                                        var newI = $('<div class="swiper-slide" idx="' + file.name + '"></div>').append($('<div class="swiper-zoom-container"></div>').append($(img).css('width', 'auto')));
                                        //
                                        if (!swiper2 && !dog_swiper.hasOwnProperty('init')) {
                                            //
                                            //tim nut click upload trong vung mySwiper2

                                            var clkA = mySwiper2.find(".dropzone-init");
                                            tmpSlide(newI);//swiper-wrapper

                                            mySwiper2.addClass('dogswiper');
                                            //
                                            //change icon
                                            clkA.find('.btn_attach i').toggleClass("ti-plus ti-clip");
                                            //change parent
                                            upload_label.removeClass('d-none').prepend(clkA);
                                            //
                                            dog_swiper.init = 0;
                                            dog_swiper();
                                            //
                                        } else {
                                            if (dog_swiper.init === 1) {
                                                if (swiper2.initialized === true) {
                                                    swiper2.appendSlide(newI);
                                                } else {
                                                    tmpSlide(newI);//swiper-wrapper
                                                };
                                            } else {
                                                tmpSlide(newI);//swiper-wrapper
                                            };
                                        };
                                    } else if (swiper2) {//remove
                                        //
                                        var id = mySwiper2.find('[idx="' + file.name + '"]').index(),
                                            cssN = "swiper-min-css";
                                        //

                                        if (id > -1) {
                                            swiper2.removeSlide(id);
                                        };
                                        //
                                        if ( swiper2.slides.length == 0) {
                                            //
                                            swiper2.destroy(true, true);
                                            swiper2 = null;
                                            //
                                            var clkA = upload_label.addClass('d-none').find(".dropzone-init");
                                            mySwiper2.removeClass('dogswiper');
                                            mySwiper2.empty().height(zomI.option('value'));
                                            //
                                            //change icon
                                            clkA.find('.btn_attach i').toggleClass("ti-plus ti-clip");
                                            //change parent
                                            mySwiper2.append($('<div class="swiper-wrapper"></div>').append(clkA));
                                            //
                                            $("head").find("#" + cssN).remove();
                                            var dogcss = window.dynload.indexOf(cssN);
                                            if (dogcss > 0) window.dynload.splice(dogcss, 1);
                                            //
                                            delete dog_swiper.init;
                                            //
                                        };
                                    };
                                }

                                ,

                                dumeQUEUE = 0
                                ,

                                releaseDUME = function () {
                                    dumeQUEUE--;
                                    //
                                    if (dumeQUEUE == 0) {
                                        if (releaseDUME._cbEv) {
                                            releaseDUME._cbEv();
                                        } else {
                                            srclocked(false);
                                        };
                                    };
                                }

                                ,

                                initFileUploader = function () {

                                    if (!zdropOPT.previewTemplate) {
                                        //
                                        var previewNode = thumbnail_container.find('.upload-thumbnail'),
                                            previewTemplate = '<div class="upload-thumbnail" id="">' + previewNode.html() + '</div>';
                                        //
                                        zdropOPT.previewTemplate = previewTemplate;
                                        zdropOPT.previewsContainer = thumbnail_container[0];
                                        zdropOPT.clickable = mySwiper2.find('.btn_attach')[0];
                                        //
                                        upload_label = previewNode.next();// $(DROP_Z.previewsContainer).find('.upload-label');
                                        previewNode.remove();
                                        //
                                        thumbnail_container.on('click', '.image-name', function (e) {
                                            e.preventDefault();
                                            var id = mySwiper2.find('[idx="' + e.currentTarget.innerText + '"]').index()
                                            swiper2.slideTo(id);
                                        });
                                        //
                                    };

                                    Dropzone.autoDiscover = false;
                                    DROP_Z = new Dropzone(mySwiper2[0], zdropOPT);
                                    //
                                    DROP_Z._enqueueThumbnail = function (file) {
                                        //
                                        var isDUP = file.hasOwnProperty('isDUP');
                                        if (isDUP===true) return;
                                        //
                                        var _this9 = this;
                                        _this9.createThumbnail(file, 1000, null, this.options.thumbnailMethod, true, function (dataUrl) {
                                            //_this9.emit("thumbnail", file, dataUrl);
                                            //
                                            if (typeof dataUrl === 'string') {//OK
                                                //
                                                var img = document.createElement('img');
                                                img.src = dataUrl;
                                                //
                                                dog_SWIPER(file, img);
                                                //
                                            };
                                            //  
                                            releaseDUME();
                                        });
                                    };


                                    DROP_Z.subHWND = {};


                                    //
                                    DROP_Z.on("addedfile", function (file) {
                                        //
                                        var chkDupF = upload_label.parent().find('[file-name="' + file.name + '"]')
                                        //
                                        if (chkDupF.length > 0) {//bi trung
                                            //
                                            if (chkDupF.closest('.upload-thumbnail').hasClass('noDZ')) {//ko phai cua Dropzone
                                                chkDupF.next().trigger('click');//click nut remove de remove
                                                //
                                            } else {
                                                file.isDUP = true;
                                                DROP_Z.removeFile(file);
                                                return;//DROP_Z.removeFile(file) co tac dung
                                            };
                                            //
                                        };
                                        //
                                        if (dumeQUEUE == 0) {
                                            srclocked(true);
                                        };
                                        dumeQUEUE++;
                                        //
                                        var prev = $(file.previewElement);
                                        //
                                        prev.find('.image-name').attr('file-name', file.name);
                                        prev.insertBefore(upload_label);
                                        //
                                        //call sub event neu no co quan tam
                                        if (DROP_Z.subHWND.addedfile && typeof DROP_Z.subHWND.addedfile === 'function') DROP_Z.subHWND.addedfile(file);
                                        //
                                    });

                                    DROP_Z.on('error', function (file, msg) {
                                        //dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                                        if ((file.size / 1024 / 1024) > this.options.maxFilesize) {
                                            this.removeFile(file);
                                        };
                                        //
                                        //call sub event neu no co quan tam
                                        if (DROP_Z.subHWND.error && typeof DROP_Z.subHWND.error === 'function') DROP_Z.subHWND.error(file, msg);
                                        //
                                        toastMsg(elUI.lan[msg] || msg, 'error', null, 'top center');
                                        //
                                    });

                                    DROP_Z.on('success', function (file, response) {
                                        //alert('success: ' + JSON.stringify(response));
                                        //console.log('success:' + new Date().getTime());
                                        //
                                        (function (el) {
                                            setTimeout(function () {
                                                el.find('a[data-dz-remove]').toggleClass('text-danger text-success').toggleClass('fa-times-circle fa-check').removeClass('remove-thumbnail');
                                                el.find('.dz-progress').remove();
                                                el.removeClass('upding');
                                            }, 500);
                                        })($(file.previewElement));
                                        //
                                        //
                                        setTimeout(function () {
                                            //
                                            //call sub event neu no co quan tam
                                            if (DROP_Z.subHWND.success && typeof DROP_Z.subHWND.success === 'function') DROP_Z.subHWND.success(file, response);
                                            //
                                        }, 500);
                                        //
                                        releaseDUME();
                                        //
                                    });

                                    DROP_Z.on("removedfile", function (file) {
                                        //
                                        var isDUP = file.hasOwnProperty('isDUP');
                                        //
                                        if (!isDUP) dog_SWIPER(file);
                                        //
                                        //call sub event neu no co quan tam
                                        if (DROP_Z.subHWND.removedfile && typeof DROP_Z.subHWND.removedfile === 'function') DROP_Z.subHWND.removedfile(file);
                                        //
                                    });

                                    DROP_Z.on("sendingmultiple", function (file, xhr, formData) {
                                        if (DROP_Z.subHWND.sendingmultiple && typeof DROP_Z.subHWND.sendingmultiple === 'function') DROP_Z.subHWND.sendingmultiple(file, xhr, formData);
                                    });

                                    DROP_Z.on("totaluploadprogress", function (progress) {
                                        //console.log(progress);
                                        //var progr = document.querySelector(".progress .determinate");
                                        //if (progr === undefined || progr === null)
                                        //    return;

                                        //progr.style.width = progress + "%";

                                        if (DROP_Z.subHWND.totaluploadprogress && typeof DROP_Z.subHWND.totaluploadprogress === 'function') DROP_Z.subHWND.totaluploadprogress(progress);

                                    });

                                    //DROP_Z.on('dragenter', function () {
                                    //    $('.fileuploader').addClass("active");
                                    //});

                                    //DROP_Z.on('dragleave', function () {
                                    //    $('.fileuploader').removeClass("active");
                                    //});

                                    //DROP_Z.on('drop', function (e) {
                                    //});
                                    //
                                    //
                                    //

                

                                    var hasDZ_SAVE = function (dat, cmd, rmvF) {

                                        var defe = $.Deferred(),

                                            uaa = UaA(elUI.lan[''] || ''),

                                            thum = $(DROP_Z.previewsContainer).find('.upload-thumbnail').addClass('upding')
                                                    .find('.image-name').append('<div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress="" style="width:0%;"></span></div>')
                                                    .next().addClass('remove-thumbnail'),

                                            rstREGIS = function (sta, res) {
                                                if (sta === 1) {
                                                    //
                                                    if (cmd == 0) {//add new
                                                        toastMsg(elUI.lan.js_011_5 || 'Registration successful.', 'success');
                                                    } else {
                                                        toastMsg(aLAN.js_003_ok || 'Operation is complete.', 'success');
                                                    };
                                                    //
                                                    defe.resolve([1, res]);
                                                    //remove file sau cung
                                                    DROP_Z.removeAllFiles(true);//cancelIfNecessary
                                                    //
                                                    //************** FINAL !!***********************************!!
                                                    DROP_Z.disable();
                                                    //
                                                } else {
                                                    defe.reject(res);
                                                    thum.find('.dz-progress').remove();
                                                    thum.closest('.upding').removeClass('upding');
                                                };
                                            },

                                            reup = function () {
                                                //upload again
                                                for (var z = 0 ; z < DROP_Z.files.length; z++) {
                                                    DROP_Z.files[z].status = Dropzone.QUEUED;// Dropzone.ADDED; DROP_Z.enqueueFile(file);
                                                    DROP_Z.files[z].upload.bytesSent = 0;//reset
                                                    //
                                                    $(DROP_Z.files[z].previewTemplate).find('a[data-dz-remove]').toggleClass('text-success text-danger').toggleClass('fa-check fa-times-circle').addClass('remove-thumbnail');
                                                    //
                                                };
                                            };


                                        //
                                        releaseDUME._cbEv = function (ev) {
                                            delete releaseDUME._cbEv;
                                        };
                                        //

                                        //
                                        if (uaa.length > 0) { // use dropzone way 
                                            //case liwayway
                                            DROP_Z.options.url = uaa + "/hinh";
                                            //
                                            DROP_Z.subHWND.success = function (file, res) {
                                                //
                                                if (res && res.hasOwnProperty('valid')) {
                                                    //da bi server validate fail
                                                    delete DROP_Z.subHWND.success;
                                                    //
                                                    defe.resolve([0, res]); // chu y khac voi error vat ly
                                                    //
                                                    //upload again
                                                    reup();
                                                    //
                                                } else {
                                                    delete DROP_Z.subHWND.success;
                                                    setTimeout(function () {
                                                        //chi cho dep thoi
                                                        rstREGIS(1, res);
                                                    }, 500);
                                                };
                                            };
                                            DROP_Z.subHWND.error = function (file, res) {
                                                delete DROP_Z.subHWND.error;
                                                rstREGIS(0, res);
                                                //
                                                //upload again
                                                reup();
                                                //
                                                //for (var z = 0 ; z < DROP_Z.files.length; z++) {
                                                //    DROP_Z.files[z].status = Dropzone.QUEUED;// Dropzone.ADDED; DROP_Z.enqueueFile(file);
                                                //    DROP_Z.files[z].upload.bytesSent = 0;//reset
                                                //    //
                                                //    $(DROP_Z.files[z].previewTemplate).find('a[data-dz-remove]').toggleClass('text-success text-danger').toggleClass('fa-check fa-times-circle').addClass('remove-thumbnail');
                                                //    //
                                                //};

                                                //file.status = Dropzone.QUEUED;// Dropzone.ADDED; DROP_Z.enqueueFile(file);
                                                //DROP_Z.files[z].upload.bytesSent = 0;//reset
                                                //
                                            };

                                            DROP_Z.subHWND.sendingmultiple = function (file, xhr, formData) {
                                                delete DROP_Z.subHWND.sendingmultiple;
                                                //append registratrion to formData
                                                formData.append("dat", dat);
                                                formData.append("lan", aLAN['']);//'\x04\x05\x06\x03\x08\x02', password decrypt user login
                                                //
                                                formData.append('iwkfhtbz', w0w.apisvr.a$.iwkfhtbz);
                                                formData.append('vwtyp', elUI.vwtyp);
                                                //
                                                formData.append('tep', file.map(function (fi) {
                                                    //valid again rmvF , (truong hop load len tu db file location.jpg, but user dropzone the same file name.....
                                                    var delRMV = rmvF.indexOf(fi.name);
                                                    if (delRMV > -1) {
                                                        rmvF.splice(delRMV, 1);
                                                    };
                                                    return fi.name;
                                                }).join());

                                                formData.append('rmvfile', rmvF);
                                            };
                                            //
                                            Dropzone.prototype.submitRequest = function (xhr, formData, files) {
                                                //
                                                xhr.send(formData);

                                                //xhr.onreadystatechange = null;
                                                //DROP_Z.removeAllFiles(true);
                                                //return xhr.abort();
                                                //DROP_Z.cancelUpload(files[0]);
                                                //return xhr.send(formData);

                                                //https://stackoverflow.com/questions/28178092/uploading-blob-arraybuffer-with-dropzone-js
                                                //getArrayBuffer(files[0]).then(function (buffer) {
                                                //    return xhr.send(buffer);
                                                //});
                                            };
                                            //
                                            DROP_Z.processQueue();
                                            //
                                        } else {
                                            //choi toi zip file
                                            _gsC('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js', 'js', function (data) {
                                                var zip = new JSZip(), zip64 = '', bkEL = [];
                                                //
                                                //ko co processQueue nen khi that bai ko can file.status = Dropzone.QUEUED
                                                //https://stackoverflow.com/questions/55471678/persist-dropzone-files-in-session-storage
                                                DROP_Z.getQueuedFiles().forEach(function (file) {
                                                    //var temp = files[0];
                                                    zip.file(file.name, file);
                                                    //
                                                    bkEL.push($(file.previewElement));
                                                    //
                                                    releaseDUME();
                                                });
                                                //
                                                zip.generateAsync({ type: "base64"/*type: "blob"*/ }).then(function (fz64) {
                                                    //
                                                    $.when(RFVfTElFVQ.SAVE({ fz64: fz64 })).done(function (v1) {
                                                        //
                                                        bkEL.forEach(function (el) {
                                                            //var el = $(file.previewElement);
                                                            el.find('.dz-progress').remove();
                                                            el.removeClass('upding');
                                                            //    //
                                                            el.find('a[data-dz-remove]').toggleClass('text-danger text-success').toggleClass('fa-times-circle fa-check').removeClass('remove-thumbnail');
                                                        });
                                                        //
                                                        setTimeout(function () {
                                                            //chi cho dep thoi
                                                            rstREGIS(1, v1);
                                                        }, 500);
                                                        //
                                                    }).fail(function (er) {
                                                        if (er && er.length > 0) {
                                                            try {
                                                                er = JSON.parse(er);
                                                                er = er.status == 0 ? 'js_011_3' : er.statusText;
                                                            } catch (e) { };
                                                            toastMsg(elUI.lan[er] || er, 'error', null, 'top center');
                                                        };
                                                        rstREGIS(0, er);
                                                    });
                                                    //
                                                });
                                                //
                                            }, 'jszip.min.js');
                                        };
                                        //
                                        return defe.promise();
                                        //
                                    };


                                    DROP_Z.send_REQ = function (dat, act, cb) {
                                        //
                                        dumeQUEUE = DROP_Z.getQueuedFiles().length;
                                        //
                                        //
                                        var jobRST
                                            , orgFi = send_REG.noDZfile || []
                                            , rmvF = [];
                                        //
                                        if (act == 1 && orgFi.length > 0) {//update
                                            //
                                            thumbnail_container.find('.noDZ .image-name').map(function (_i, vi) {
                                                rmvF.push($(vi).text());
                                            });
                                            //
                                            rmvF = orgFi.filter(function (i) {
                                                return this.indexOf(i) < 0;
                                            }, rmvF)
                                            //
                                        };
                                        //
                                        //
                                        if (dumeQUEUE > 0) {//co upload file  DROP_Z.getUploadingFiles().length

                                            jobRST = hasDZ_SAVE(dat, act, rmvF);

                                        } else {//ko co attach file

                                            jobRST = _mnuJOB.noDZ_SAVE(dat, act, rmvF);//act:0 addnew 1:modify

                                        };
                                        //
                                        //
                                        $.when(jobRST).done(function (rst) {
                                            //
                                            //ko xu ly neu
                                            if (rst && rst[1] && rst[1].hasOwnProperty('valid')) {
                                                //
                                                c0d.cty.dupERR(defO['action']._$itemContainer, rst[1]['valid'], dat, elUI['regtable'], _masREG, regEMP_LST, elUI.lan);
                                                //
                                                srclocked(false);
                                                //
                                            } else {
                                                //
                                                //hide actionSheet truoc
                                                //debugger;
                                                defO['action'].hide();
                                                //
                                                setTimeout(function () {
                                                    //cho 1 chut de nhin thay dau tick
                                                    cb(rst[0], rst[1]);
                                                    //
                                                }, 50);
                                            };
                                            //
                                        }).fail(function (er) {
                                            //
                                            cb(0);
                                            //
                                        });
                                    };

                                };

                                //
                                //
                                mySwiper2 = divTotal.find('.mySwiper2');
                                if (elUI.lan.js_011_14) mySwiper2.find('.click-txt').text(elUI.lan.js_011_14);//Click the Button or Drop Files Here
                                //
                                //



                                function __(args) {
                                    //
                                    //************** START !!***********************************!!
                                    //remove file sau cung
                                    DROP_Z.removeAllFiles(true);//cancelIfNecessary
                                    //
                                    if (swiper2) {
                                        swiper2.removeAllSlides();
                                        dog_SWIPER({});
                                        //
                                        //if (dog_swiper.iniH) mySwiper2.css('height', dog_swiper.iniH);
                                        zomI.option('value', 100);
                                        //
                                        thumbnail_container.find('.upload-thumbnail').remove();
                                    };
                                    //
                                    send_REG.noDZfile = [];//backup 
                                    //
                                    //
                                    var isView = 1, r = 'remove',
                                        cmd_ = popup._$bottom.find('.reg-step-no');
                                    //
                                    //
                                    if (req_frm.uptKEY == -1) isView = 0;
                                    //
                                    //
                                    if (isView === 1) {
                                        if (req_frm.datUPT[2]) {//review mode
                                            //
                                            isView = parseInt(req_frm.datUPT[2][0]);//-1, ko co nut nop, 
                                            //
                                            r = 'add';
                                        };
                                    };
                                    //
                                    upload_label[r + 'Class']('invisible');

                                    cmd_[//chi khi nao co tool nhap_cmm thi popup se tinh lai nut hien thi
                                        (isView > 1 ? 'remove' : r)

                                        + 'Class']('invisible');
                                    //
                                    //
                                    send_REG.nutNOP = isView;//de khi click vao se xac dinh duoc co phai view mode co quyen nop duyet
                                    //
                                    //
                                    var chonE = cmd_.closest('.dx-toolbar-items-container')[r + 'Class']('xemdangky').
                                        find('.chon_valid_e .dx-button');
                                    //
                                    if (chonE.length > 0) {//nut chon nhan vien

                                        chonE.data().dxButton.option('visible', r == 'add' ? true : a_dogSEL(2));// !!elUI.lan.rawD._fl0wself[req_frm.renWhat]

                                    };
                                    //
                                    //
                                    DROP_Z[r == 'remove' ? 'enable' : 'disable']();
                                    //
                                    //
                                    thumbnail_container.find('.upload-thumbnail').remove();
                                    //
                                    //
                                    if (isView === 0) {
                                        mySwiper2.height(zomI.option('value'));
                                        return;
                                    };
                                    //
                                    //
                                    r = req_frm.datUPT[0];
                                    ///
                                    //
                                    //
                                    if (!r.tep || r.tep.trim() == "") return;
                                    //
                                    //
                                    //
                                    setTimeout(function () {
                                        //
                                        var uaa = UaA(elUI.lan[''] || ''),//lay theo url cua form
                                            uri = (uaa.length > 0 ? (uaa.split('/api/')[0] + '/imgs/') : '/imgs/') + r.regid, /*co tinh de undefined de khi vao merge no se bo qua*/
                                            tep = r.tep.split(',').map(function (item) {
                                                return item.trim();
                                            }) || [];
                                        //
                                        //
                                        for (var zi = 0; zi < tep.length; zi++) {
                                            //
                                            var n$ = apisvr.a$.trim(tep[zi]);
                                            //
                                            (function (na) {
                                                var file = { name: na },
                                                img = document.createElement('img');
                                                img.onload = function (im) {
                                                    dog_SWIPER(file, img);
                                                };
                                                img.onerror = function (im) {
                                                    //debugger;
                                                };
                                                //


                                                //test convert file .heic
                                                //convertHEIC(uri + "/" + na);
                                                //
                                                //
                                                img.src = uri + "/" + na;


                                                //
                                            })(n$);
                                            //
                                            //
                                            ////
                                            var prev = $(DROP_Z.options.previewTemplate).addClass('noDZ');
                                            prev.find('.image-name').attr('file-name', n$).html('<span data-dz-name="">' + n$ + '</span>');
                                            prev.insertBefore(upload_label);
                                            //
                                        };
                                        //
                                        send_REG.noDZfile = tep;//backup 
                                        //
                                        //
                                        if (isView == -1 || isView > 1) {//review mode
                                            thumbnail_container.find('.remove-thumbnail').remove();
                                        };
                                        //
                                        //
                                    }, 100);
                                    // 
                                };



                                //
                                var isPhone = DevExpress.devices._realDevice.deviceType == 'phone' ? '' : ' pl-2',
                                        isDESK = DevExpress.devices._realDevice.deviceType == 'desktop',
                                        validNV = function (data, myself) {
                                            var result = $('<div class="reg_emps' + isPhone + (myself ? ' justify-content-center' : '') + '"></div>'),
                                                acno = '',
                                                ihi = apisvr._src/*'https://timegold.liwayway.com.vn:3004/aap/epic/'*/ + data.acno + '.jpg';

                                            if (myself) {
                                                $('<div class="myself">' +

                                                    c0d.myselfSVG +

                                                    '<img onerror="_ierr(this,' + "'" + elUI.bosI + "'" + ')" src="' + ihi + '"/>' +

                                                '</div>').appendTo(result);
                                                acno = '<div><i>' + elUI.lan.js_007_1 + ' :</i>' + data.acno + '</div>';
                                            } else {

                                                $('<img onerror="_ierr(this,' + "'" + elUI.empI + "'" + ')" src="' + ihi + '"/>').appendTo(result);

                                            };

                                            $(acno +
                                                '<div><i>' + elUI.lan.js_007_3 +
                                                ' :</i> ' + data.empcode + '</div><div><i>' + elUI.lan.js_007_7 +
                                                ' :</i> ' + data.empname + '</div><div><i>' + elUI.lan.js_007_14 +
                                                ' :</i> ' + data.ff_pb + '</div>')

                                                .appendTo($('<div>').addClass('info pl-sm-2').appendTo(result));

                                            if (!myself) {
                                                $('<div>').addClass('accode').html('<i>' + elUI.lan.js_007_1 + '</i>' + data.acno).appendTo(result);
                                            };
                                            return result;
                                        }
                                        ,
                                         _D = lod_validE()
                                        ,
                                        totalVLE = $('<span class="text-bold">(' + _D.length + ')</span>').appendTo($('<div class="dx-fieldset-header my-3 reg-step-no" style="font-weight: 100;"><span class="bl-no">3</span><span class="bl-txt">' + ((elUI.lan.js_011_13 || 'Apply To Employees')) + '</span><i class="ti-user small" style="margin: 0 5px 0 -5px;"></i></div>').appendTo(divTotal))



                                        , swiper
                                        , swiper2
                                        , dog_swiper = function () {
                                            //
                                            $('<div class="swiper-button-next"></div><div class="swiper-button-prev"></div><div class="swiper-pagination"></div>').appendTo(mySwiper2);
                                            //
 
                                                   
                                            _gsC('https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css', 'css', function (data) {
                                                _gsC('https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/js/swiper.min.js', 'js', function (data) {
                                                    //swiper = new Swiper(".mySwiper", {
                                                    //    spaceBetween: 10,
                                                    //    slidesPerView: 4,
                                                    //    freeMode: true,
                                                    //    watchSlidesProgress: true,
                                                    //});
                                                    dog_swiper.init = 1;//false se huy khi remove empty

                                                    swiper2 = new Swiper(mySwiper2, {
                                                        //slidesPerView: 3,
                                                        //centeredSlides: true,

                                                        zoom: true,
                                                        slidesPerView: "auto",
                                                        spaceBetween: 30,
                                                        pagination: {
                                                            el: '.swiper-pagination',
                                                            type: 'fraction',
                                                        },
                                                        navigation: {
                                                            nextEl: '.swiper-button-next',
                                                            prevEl: '.swiper-button-prev',
                                                        }
                                                        //,
                                                        //on: {
                                                        //    init: function () {
                                                        //        debugger;
                                                        //        swiper2 = this;
                                                        //        console.log('init');
                                                        //    }
                                                        //}
                                                        //,thumbs: {
                                                        //    swiper: swiper,
                                                        //}
                                                        //, zoom: {
                                                        //    enabled: true,
                                                        //    zoomChange: function (e) {
                                                        //        debugger;
                                                        //    }
                                                        //}
                                                    });
                                                 


                                                    //
                                                    //co the khi add temp co san class invisible
                                                    mySwiper2.find('.swiper-slide').removeClass('invisible');
                                                    //

                                                    //document.querySelector('.prepend-2-slides')
                                                    //  .addEventListener('click', function (e) {
                                                    //      e.preventDefault();
                                                    //      swiper.prependSlide([
                                                    //        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
                                                    //        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
                                                    //      ]);
                                                    //  });
                                                    //document.querySelector('.prepend-slide')
                                                    //  .addEventListener('click', function (e) {
                                                    //      e.preventDefault();
                                                    //      swiper.prependSlide(
                                                    //        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
                                                    //      );
                                                    //  });
                                                    //document.querySelector('.append-slide')
                                                    //  .addEventListener('click', function (e) {
                                                    //      e.preventDefault();
                                                    //      swiper.appendSlide(
                                                    //        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
                                                    //      );
                                                    //  });
                                                    //document.querySelector('.append-2-slides')
                                                    //  .addEventListener('click', function (e) {
                                                    //      e.preventDefault();
                                                    //      swiper.appendSlide([
                                                    //        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
                                                    //        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
                                                    //      ]);
                                                    //  });

                                                    //document.querySelector('.movetoend')
                                                    // .addEventListener('click', function (e) {
                                                    //     e.preventDefault();
                                                    //     swiper.slideTo(swiper.slides.length - 1);
                                                    // });


                             

                                                }, 'swiper.min.js');
                                            }, 'swiper-min-css');

                                        };




                                //dog_swiper();

                                //$.ajax({
                                //    url: "http://timegold.liwayway.com.vn:3003/aap/api/HelloHRM/dume",
                                //    type: 'GET',
                                //    success: function (res) {
                                //        console.log(res);
                                //        alert(res);
                                //    }
                                //});

                                //var dataString = "flag=fetchmediaaudio&id=" ;
                                //$.ajax
                                //({
                                //    type: "POST",
                                //    url: "http://timegold.liwayway.com.vn:3003/aap/api/HelloHRM/hinh",
                                //    data: dataString,
                                //    success: function (html) {
                                //        alert(JSON.stringify(html));
                                //    }
                                //    ,error: function (xhr, ajaxOptions, thrownError) {
                                //        alert(xhr.status);
                                //        alert(thrownError);
                                //    }
                                //});

                                $.when(dropLOD).done(function () {
                                    initFileUploader();//"#DROP_Z"
                                    __();
                                });









                                if (elUI.downline > 0  || elUI.quy_imp_excel) {

                                    var isDOG = true

                                        , lst_m = syncSEL.lst_ = regEMP_LST_ReadOnly()

                                        , regEMP_LST_height = function (e, typ) {
                                            //console.log('e.type  ; ' + new Date().getTime());
                                            var setH = function () {
                                                if (isDESK) e.element[(e.element.find('.dx-scrollview-content').height() < 300 ? 'add' : 'remove') + 'Class']('shoter600px');
                                            };
                                            //
                                            if (typ == "selA") {

                                                var lstUI = e.element.children(":first"),
                                                        selA = function (pN) {
                                                            //if (DevExpress.devices._realDevice.deviceType !== 'phone') {
                                                            e.element.find('.dx-list-select-all').css({ 'padding': '0px', 'margin': '0px' }).prependTo(pN);

                                                            //};
                                                        };
                                                //
                                                if (isDOG) {

                                                    isDOG = false;

                                                    var serC = e.element.find('.dx-list-search'),
                                                    //isINP = serC.hasClass('dx-state-focused'),
                                                    newDIV = $('<div class="dumeSELSEAR"></div>').insertBefore(lstUI);
                                                    //
                                                    newDIV.append($('<div mnu="reglk_emps" class="btn ti-menu-alt"></div>').on('click', function (ez) {

                                                        if (elUI.quy_imp_excel || (syncSEL.lst_ == 0 && regEMP_LST.option('selectedItemKeys').length > 0)) {//edit

                                                            srclocked(true); //menu button start click
                                                            setTimeout(function () {

                                                                c0d.lstE_mnu(elUI,ez,req_frm.renWhat);

                                                            }, 10);

                                                        };

                                                        
                                                    }));
                                                    //
                                                    newDIV.append(serC.css("flex", "1"));
                                                    selA(newDIV);
                                                    //
                                                } else {
                                                    selA(lstUI);
                                                };
                                                //
                                                if (regEMP_LST._hoantat && typeof regEMP_LST._hoantat === 'function') {
                                                    regEMP_LST._hoantat(e);
                                                };
                                                //
                                                setH();
                                                //
                                                syncSEL(e.component.option('dataSource'));
                                                //
                                                //
                                            } else if (typ == "ds") {
                                                totalVLE.text('(' + e.value.length + ')');
                                                setH();
                                            };

                                        }

                                        , regEMP_LST_heightHWND = function (e, typ) {
                                            //
                                            var na = 'timO' + typ;
                                            //
                                            clearTimeout(regEMP_LST_height[na]);

                                            regEMP_LST_height[na] = setTimeout(function () {

                                                clearTimeout(regEMP_LST_height[na]);

                                                regEMP_LST_height(e, typ);

                                            }, 100);

                                        };
                                  


                                    //
                                    regEMP_LST = $(isDESK ? '<div class="lstregemp  mx-3 shoter600px" style="max-height:600px;position: absolute;left: 0;right:0;padding-bottom:20px"></div>' : '<div class="lstregemp"></div>')

                                        .addClass( a_dogSEL (1)   )

                                        .appendTo(divTotal)
                                        
                                        .dxList({

                                            dataSource: _D,

                                            //selectedItemKeys: syncSEL(_D, lst_m),

                                            repaintChangesOnly: true,
                                            showNextButton: true,

                                            keyExpr: "acno",

                                            height: '100%',
                                            searchEnabled: true,
                                            searchExpr: ['acno', 'empcode', 'empname'],
                                            //
                                            showSelectionControls: true,
                                            selectionMode: 'all',
                                            selectAllMode: 'allPages',

                                            allowItemDeleting: ((elUI.quy_imp_excel   && req_frm.renWhat==2 ) || lst_m === 0 && a_dogSEL(2)) ? true : false,

                                            itemDeleteMode: 'toggle',

                                            itemTemplate: function (data, b, c) {

                                                return validNV(data);

                                            }

                                            ,

                                            onContentReady: function (e) {
                                                //
                                                regEMP_LST_heightHWND(e, 'selA');
                                                //
                                            }
                                            ,
                                            //onSelectionChanged: function (e) {

                                            //    e.addedItems.forEach(function (it) {
                                            //        //e.component._findItemElementByKey(it.ID).find('.dx-list-toggle-delete-switch').data().dxButton.element().trigger("dxclick");
                                            //        //it.rmv = parseInt(aLAN.js_usr_info[1]);
                                            //    });
                                            //    e.removedItems.forEach(function (it) {
                                            //        //e.component._findItemElementByKey(it.ID).find('.dx-list-toggle-delete-switch').data().dxButton.element().trigger("dxclick");
                                            //        //it.rmv = -1;
                                            //    });

                                            //}
                                            //,
                                            onOptionChanged: function (e) {
                                                if (e.name == 'dataSource') {//dieu chinh height auto , or 100%
                                                    //
                                                    regEMP_LST_heightHWND(e, 'ds');
                                                    //
                                                };
                                            }
                                        }).dxList('instance');
                                    //
                                    //
                                } else {
   
                                    //
                                    validNV(_D[0], 'myself').appendTo(divTotal)
                                    //
                                    totalVLE.text('(' + _D.length + ')');
                                    regEMP_LST = {
                                        option: function (p) {
                                            if (p == 'dataSource') {//dataSource
                                                return _D;
                                            };
                                            return [_D[0], aLAN.js_usr_info];
                                        }
                                    }
                                };
                                //
                                //
                                regEMP_LST._emps_fromEXCEL = function (lst) {
                                    //update source elUI.regDAT.emp
                                    //debugger;
                                    for (var g = 0; g < lst.length; g++) {
                                        var isADD = 0;
                                        for (var b = 0; b < elUI.regDAT.emp.length; b++) {
                                            if (elUI.regDAT.emp[b].id == lst[g].acno) {
                                                isADD = 1;
                                                break;
                                            };
                                        };
                                        //
                                        if (isADD === 0) {
                                            elUI.regDAT.emp.push({
                                                bd:null,
                                                ff_pb:lst[g].ff_pb,
		                                        gt:1,//tam chap nhan sai
                                                id:parseInt(lst[g].acno),
		                                        jd	:null,
                                                ma	: lst[g].empcode,
		                                        pb:-1,
                                                ten	:lst[g].empname,
		                                        typ	:2
                                            });
                                        };
                                    };
                                };
                                //
                                return __;
                            }
                            ,

                            lod_validE = function () {
                                //thong tin login cua nhan vien / hoac user chua trong nay
                               var __I = aLAN.js_usr_info,//window[st0('2')](atob(aLAN.js_usr_info)).split('\x04'),
                                        _D = [];
                                //
                                //
                                //reset luon send_REG.cmmTXT = elUI.ignore_upt_cmm
                                 send_REG.cmmTXT = '';
                                //
                                if (req_frm.uptKEY != -1) {
                                    _deDATNO(req_frm.uptKEY, "E").forEach(function(ee){
                                        var fe = fillMASTER.getE({ usrid: ee.eid, utyp: 2 }) || {};
                                        //
                                        _D.push({
                                            "acno": fe.id,
                                            "empcode": fe.ma,
                                            "empname": fe.ten,
                                            "secid": fe.pb,
                                            "ff_pb": fe.ff_pb,
                                            'rmv':ee.rmv
                                        });
                                    });

                                    send_REG.cmmTXT = req_frm.datUPT[0].regsta == staOfs ? req_frm.datUPT[0].notes : req_frm.datUPT[1].find('textarea.re_ca_bo').val();

                                } else if (aLAN.js_usr_info[0]==2) {//user login
                                    _D.push({
                                        "acno": __I[1],
                                        "empcode": __I[2],
                                        "empname": __I[3],
                                        "secid": __I[4],
                                        "ff_pb": __I[5],
                                        'rmv':-1
                                    });
                                };
                                return _D;
                            }

                            ,

                            defO = {

                                contentTemplate: function (c) {
                                    //console.log('contentTemplate');

                                    c.parent().addClass('lkload').attr('data-content', aLAN.js_001_20.toUpperCase() + " ...");

                                    tieude = $('<div class="text-center long-title" style="font-size:25px;font-weight: 100">...</div>').appendTo(c);

                                    divTotal = $('<div class="p-3 pb-0">' +
                                                    '<div class="dx-fieldset-header reg-step-no mb-2" style="font-weight: 100;"><span class="bl-no">1</span><span class=" bl-txt">' + ((elUI.lan.js_011_11 || 'Regis Information')) + '</span></div>' +

                                                    //'<div class="text-center long-title" style="font-size:25px;font-weight: 100"><div style="line-height:150px">LOADING ...</div></div>' +


                                                '</div>').appendTo(c);


                                    //
                                    //
                                    c.addClass('invisible m-0 p-0');
                                    //
                                },
                                onContentReady: function (e) {
                                    e.component._$content.addClass('dume_registration')
                                        .css({ 'border-top': 'none', 'border-bottom': 'none;' });

                                    e.component._$popupContent.addClass('duma_registration');

                                },
                                showTitle: false,

                                hideOnOutsideClick: false,
                                showCloseButton: false,

                                toolbarItems: [
                                    {
                                        toolbar: 'bottom',
                                        location: 'before',
                                        template: function (e,a,b) {

                                            popup.d0gClose = $('<div class="dogclose">' +
                                                      //'<span class="font-italic  mr-2"  style="flex:1">huy bo hanh dong</span>' +
                                                      '<button type="button" class="btn btn-danger btn-sm ti-close" style="padding: 10px;border-radius: 50%;font-size: large;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"></button>' +
                                                  '</div>');


                                            $('<div class="btn p-0 dx-fieldset-header mb-0 reg-step-no invisible" style="font-weight: 100;"><span class="bl-no mr-1 dx-icon dx-icon-fieldchooser"></span>' + (elUI.lan.js_011_6 || 'Apply') + '</div>')

                                                 .on('click', function (e) {
                                                     //
                                                     srclocked(true);
                                                     setTimeout(function () {
                                                         send_REG();
                                                     }, 10);
                                                     //
                                                 }).appendTo(b);
                                        }

                                    }

                                    ////////////,
                                    ////////////{
                                    ////////////    widget: 'dxButton',
                                    ////////////    toolbar: 'bottom',
                                    ////////////    location: 'before',
                                    ////////////    options: {
                                    ////////////        icon: 'find',
                                    ////////////        text: 'lk mobile',
                                    ////////////        onClick: function (e) {
                                    ////////////            //
                                    ////////////            srclocked(true);
                                    ////////////            //
                                    ////////////            if (!DevExpress.$mainO) DevExpress.$mainO = $mainO;
                                    ////////////            //
                                    ////////////            _gsC(srcp$f + '/media/utils/jsc/lku_emps.js' + src$id, 'js', function (d) {
                                    ////////////                DevExpress.lku_emps.show(ref_regfrm.parent(), e.element, {
                                    ////////////                    onShown: function (e) {
                                    ////////////                        srclocked(false);
                                    ////////////                    }
                                    ////////////                });

                                    ////////////            }, 'lku_emps.js');
                                    ////////////        },
                                    ////////////    },
                                    ////////////}


                                    ,

                                    (elUI.downline > 0 ?
                                        {
                                            widget: 'dxButton',
                                            toolbar: 'bottom',
                                            location: DevExpress.devices._realDevice.deviceType == 'phone' ? 'after' : 'center',
                                            cssClass: "overflow-hidden chon_valid_e",
                                            options: {
                                                icon: 'find',
                                                text: aLAN.js_007_36,
                                                onClick: function (e) {
                                                    //
                                                    var preFX = 'lk_for_regis_';
                                                    //
                                                    if (admin$.devpu.lkWhat) {//da co lookup 1 lan
                                                        if (admin$.devpu.lkWhat != preFX + req_frm.renWhat) {//lookup voi state khac thi remove
                                                            st1.lkE = null;//reset
                                                        };
                                                    };
                                                    //
                                                    //
                                                    admin$.devpu.lkWhat = preFX + req_frm.renWhat;
                                                    //
                                                    //
                                                    //
                                                    var empDAT = { ds: [], secs: [], poss: [], gender: [], toso: 0, rows: 0 },
                                                        opts = {
                                                            ge: {
                                                                chkRemote: 25,
                                                                paging: {
                                                                    pageSize: 10
                                                                }
                                                            }
                                                        };


                                                    admin$.devpu({

                                                        lkwhat: req_frm.renWhat,//phan biet lookup emp for regis LV or OT

                                                        e: function () {
                                                            //debugger;
                                                            if (empDAT.toso > Math.max(opts.ge.chkRemote, opts.ge.paging.pageSize)) {
                                                                var deferred = $.Deferred();
                                                                $.when($mainO.svrDAT({ uri: dburl, 'act': 'QRY', dat: JSON.stringify({ 'values': { 'proc': 'LK_EXIST_EMPS'/*, pid: gNGAY._cpFocusKey */} }) })).done(function (v1) {
                                                                    deferred.resolve(v1);
                                                                }).fail(function (err) {
                                                                    deferred.resolve('err');
                                                                });
                                                                return deferred.promise();
                                                            } else {
                                                                return $.map(empDAT.ds, function (a) { return a.acno });
                                                            };
                                                        }()

                                                        , em: 0, ef: 'acno'

                                                        , fullRST: function (rst, sec) {
                                                            //
                                                            var olDS = regEMP_LST.option('dataSource');

                                                            //reset
                                                            regEMP_LST.option({ 'searchValue': '', 'dataSource': [] });
                                                            //
                                                            rst.forEach(function (it) {
                                                                //
                                                                var emp = {
                                                                    ___: it.___,
                                                                    acno: it.acno,
                                                                    empcode: it.empcode,
                                                                    empname: it.empname || it.ho + ' ' + it.ten,
                                                                    secid: it.secid,
                                                                }, ff_pb = sec.filter(function (s) {
                                                                    return s.id === it.secid;
                                                                }), emM = fillMASTER.getE({ usrid: it.acno, utyp: 2 });
                                                                //
                                                                emp.ff_pb = ff_pb.length > 0 ? ff_pb[0].dis : 'Invalid section name of ID(' + it.secid + ' )';//(***)
                                                                //
                                                                //tim nhan vien nay co trong master E chua?
                                                                if (!emM.id) {//chua co
                                                                    elUI.regDAT.emp.push({
                                                                        id: it.acno,
                                                                        ma: it.empcode,
                                                                        ten: it.empname || it.ho + ' ' + it.ten,
                                                                        gt: it.gt,
                                                                        jd: it.hireday,
                                                                        pb: it.posid,
                                                                        ff_pb: emp.ff_pb,//(***)sau nay se lay o day !!! lam doi cho nay, vi khach hang ko OK
                                                                        typ:2
                                                                        //(Case  GioiTinh when 1 then 0 else 1 end ) as gt,BirthDay as bd,NgayGiaNhap as jd,2 As typ,SectionID as pb
                                                                    });
                                                                };
                                                                //
                                                                olDS.push(emp);
                                                            });
                                                            //
                                                            regEMP_LST._hoantat = function (e) {
                                                                regEMP_LST._hoantat = null;
                                                                srclocked(false);
                                                            };
                                                            //
                                                            setTimeout(function () {
                                                                regEMP_LST.option({ 'dataSource': olDS });
                                                                regEMP_LST.reload();
                                                            }, 100);
                                                            //

                                                        }, acnoFILTER: regEMP_LST.option('dataSource').map(function (a) {
                                                            return [a.___, parseInt( a.acno)];
                                                        })

                                                    });
                                                    //
                                                },
                                            },
                                        } : { toolbar: 'bottom'})

                                    ,
                                    {
                                        widget: 'dxButton',
                                        toolbar: 'bottom',
                                        location: 'after',
                                        options: {
                                            elementAttr: {
                                                'style': 'min-width:auto',
                                                'id':'close_regis_lv_ot_edit_frm_popup'
                                            },
                                            text: aLAN.js_003_1,
                                            onClick: function () {
                                                
                                                if (defO['action']) defO['action'].act = 0;
                                                srclocked(true);
                                                setTimeout(function () { popup.hide(); }, 10);

                                            },
                                        },
                                    }],
                            }

                            ,
                                                         
                            admin_btn = function () {

                                send_REG.send_regBTN.closest('li').css({
                                    'display':


                                        elUI.downline == 2 && req_frm.uptKEY != -1 &&

                                        [103, 104].indexOf(req_frm.datUPT[0].regsta) > -1 && req_frm.datUPT[0].utyp==2


                                        ? 'none' : ''
                                });
                                //
                            }

                            ,

                            send_REG = function () {

                                if (!defO.hasOwnProperty('action')) {

                                    var pigIE = GetIEVersion() == 11 ? 'width:300px;' : ''

                                        ,

                                        _clkBTN = function (e) {
                                            //
                                            e.preventDefault();
                                            e.stopPropagation();
                                            //
                                            var mnu = e.currentTarget.getAttribute('mnu'),
                                                $ta = ['sav_tmp', 'send_reg'].indexOf(mnu);
                                            //
                                            if ($ta > -1) {
                                                //
                                                //
                                                srclocked(true);
                                                setTimeout(function () {
                                                    //
                                                    var regINF = {
                                                        'act': 0,//0:new ,1:edit , 2:delete, 30:send
                                                        'sta': (staOfs + $ta),//status tam thoi
                                                        'typ': req_frm.renWhat,
                                                        'emp': regEMP_LST.option('dataSource').map(function (ei) { return ei.acno }),
                                                        'n0t': apisvr.a$.trim(send_REG.cmmt.option('value')) || '',
                                                    };
                                                    //
                                                    //lay du lieu reg info && valid emp
                                                    if (req_frm.renWhat == 1) {//reg leaving

                                                        regINF.dat = [form.option('formData')];

                                                        //regINF.dat.EachDate = DevExpress.localization.formatDate(regINF.dat.EachDate, "yyyy/MM/dd");
                                                        //regINF.dat.todate = DevExpress.localization.formatDate(regINF.dat.todate, "yyyy/MM/dd");

                                                        regINF.dat[0].selo = form._$element.find('.dx-tabpanel').data().dxTabPanel.option("selectedIndex"); //fO.tong  - modify
                                                        regINF.dat[0].aid = 0;//default 0 for regis leaving
                                                        if (regINF.dat[0].selo == 0) {//nguyen ngay
                                                            regINF.dat[0].tong = elUI.minTong;
                                                        } else {
                                                            //truong hop tre/som thi keo todate lai =eachdate
                                                            regINF.dat[0].todate = regINF.dat[0].EachDate;
                                                        };
                                                    } else {//2: OT
                                                        regINF.dat = luoi.option('dataSource')._array.map(function (v, I) {
                                                            var mili = 1000 * 60 * 60,
                                                                tugio = new Date(v.tugio),
                                                                dengio = new Date(v.dengio),
                                                                ngay = new Date(v.EachDate);
                                                            //
                                                            ngay = ngay.getTime() + (tugio.getHours() + tugio.getMinutes()/60) * mili;
                                                            dengio = ngay + mili * v.tong;
                                                            //
                                                            return {
                                                                id: v.id, EachDate: new Date(ngay), todate: new Date(dengio), tong: v.tong, notes: v.notes, tresom: -1,
                                                                aid: I
                                                            };
                                                        });
                                                    };
                                                    //
                                                    //
                                                    if (req_frm.uptKEY != -1) {//update action
                                                        //
                                                        regINF.act = 1;
                                                        regINF.regid = req_frm.uptKEY;
                                                        //
                                                        //
                                                        if ($ta == 1) {//same send action
                                                            //
                                                            if (elUI.regDAT.GOI[regINF.regid]) {//da co goi 1 lan roi
                                                                var _r = req_frm.datUPT[0],
                                                                     oldsta = _r.regsta,
                                                                     regsta = CALC_REGSTA(_r);
                                                                //
                                                                regINF.snddat = { regid: _r.id, regsta: regsta, oldsta: oldsta, notes: regINF.n0t };
                                                            };
                                                            //
                                                        } else {//khi tra lai edit ser error
                                                            //
                                                            regINF.sta = req_frm.datUPT[0].regsta;
                                                            //
                                                            if (regINF.sta == 105) {
                                                                regINF.n0t += '\x04\x05\x06';
                                                            };
                                                            //
                                                        };
                                                        //
                                                    };
                                                    //
                                                    //chi Hang cao nhat send dong nghia voi duyet luon
                                                    if ($ta == 1 && highestFN()[0] == 13) {
                                                        regINF.sta = staOfs + 3;
                                                    };
                                                    //
                                                    DROP_Z.send_REQ(JSON.stringify(regINF), regINF.act, function (rst, res) {
                                                        //
                                                        defO['action'].act = rst;
                                                        //
                                                        var iR = elUI.regDAT.R.length,
                                                             r;
                                                        //
                                                        if (rst == 1) {
                                                            //
                                                            if (regINF.act == 0) {//addnew result

                                                                var oid = iR > 0 && Math.max.apply(Math, elUI.regDAT.R.map(function (o) { return o.oid; })) || 0;
                                                                //
                                                                r = {
                                                                    oid: oid + 1,//Math.max(iR, oid) + 1,
                                                                    utyp: parseInt(aLAN.js_usr_info[0]),
                                                                    usrid: parseInt(aLAN.js_usr_info[1]),
                                                                    regid: res.regid,

                                                                    tg: res.tg, //****Very importan **** chinh xac theo server database

                                                                    regsta: regINF.sta,
                                                                    regtyp: regINF.typ,//ot, hay nghi vang
                                                                    notes: regINF.n0t,
                                                                    tep: res.tep,
                                                                    tepcnt: res.tepcnt,
                                                                    empcnt: regINF.emp.length,
                                                                };
                                                                //
                                                                //
                                                                //elUI.regDAT.R.splice(1, 0, r);//insert
                                                                elUI.regDAT.R.push(r);
                                                                //
                                                                //
                                                                var tabSig = -1;
                                                                if (r.regsta == 103 && elUI.vwtyp == 1) {//da duyet, nhung tab hien tai la event
                                                                    tabSig = 2;
                                                                } else if (elUI.vwtyp > 1 && r.regsta < 103) { //soan, hoac goi, nhung tab o history
                                                                    tabSig = 1;
                                                                } else if (elUI.vwtyp == 3 && elUI.downline == 2) {
                                                                    //admin dang ky moi , current tab his all
                                                                    tabSig = 3;
                                                                };

                                                                if (tabSig > -1) {//hien thi dau hieu refresh cho current active TAB
                                                                    var atab = mobi_raw['piltab'].find('li a.active >div');
                                                                    atab.children().not(':first').remove();
                                                                    atab.append('<span class="badge text-success small sig_refresh"><i class="ti-reload"></i></span>');
                                                                    atab.closest('a').addClass('need_refs');
                                                                };
                                                                //
                                                            } else {//update result
                                                                //
                                                                r = req_frm.datUPT[0];
                                                                r.tg = res.tg;//****Very importan **** chinh xac theo server database
                                                                //
                                                                //
                                                                r.notes = regINF.n0t;
                                                                //
                                                                //
                                                                r.regsta = regINF.sta;
                                                                //
                                                                //
                                                                r.tep = res.tep,
                                                                r.tepcnt = res.tepcnt;
                                                                r.empcnt = regINF.emp.length;
                                                                //
                                                                //
                                                                delete r.fillok;//reset
                                                                //
                                                                //
                                                                //tu tu tinh !!!
                                                                for (var dz = elUI.regDAT.D.length - 1; dz > -1; dz--) {
                                                                    if (elUI.regDAT.D[dz].pid == res.regid) {
                                                                        elUI.regDAT.D.splice(dz, 1);
                                                                    };
                                                                };
                                                                delete elUI.regDAT._cache['D__' + res.regid];
                                                                //
                                                                //
                                                                for (var dz = elUI.regDAT.E.length - 1; dz > -1; dz--) {
                                                                    if (elUI.regDAT.E[dz].pid == res.regid) {
                                                                        elUI.regDAT.E.splice(dz, 1);
                                                                    };
                                                                };
                                                                //
                                                                delete elUI.regDAT._cache['E__' + res.regid];
                                                                //
                                                                //
                                                            };
                                                            //
                                                            //
                                                            if (r.regsta == 101) {//de add vao send-GOI collection
                                                                regINF.snddat = { regid: r.regid, regsta: r.regsta, oldsta: 100, notes: r.notes };
                                                            };
                                                            //
                                                            //
                                                            //vua update vua goi....
                                                            if (regINF.snddat) {
                                                                var SEN = elUI.regDAT.GOI[res.regid] || (elUI.regDAT.GOI[res.regid] = []);
                                                                SEN.unshift($.extend({
                                                                    __expa: r.__expa,
                                                                    byuser: -1,
                                                                    EmpName: r.EmpName,
                                                                    tg: r.tg,
                                                                    pid: r.regid,
                                                                    regtyp: r.regtyp,
                                                                    usrid: r.usrid
                                                                }, regINF.snddat));//vao cuoi cung cua collection vao nop duyet history...
                                                            };
                                                            //
                                                            //
                                                            //cap nhat noi dung dang ky ....
                                                            regINF.dat.forEach(function (zk) {
                                                                zk.pid = res.regid;
                                                                elUI.regDAT.D.push(zk);
                                                            });
                                                            //
                                                            regINF.emp.forEach(function (zk) {
                                                                elUI.regDAT.E.push({ pid: res.regid, eid: parseInt(zk), rmv: -1 });
                                                            });
                                                            //
                                                            //
                                                            fillMASTER.FIL(r);//flow field ....
                                                            r.__expa = mobi_raw['mobiui'];//neu 1 thi bat buoc show khi edit hoac addnew mobil mode
                                                            //
                                                            //
                                                            //cap nhat flag reload popup edit form
                                                            req_frm.__uptKEY = res.regid;
                                                            //
                                                            //
                                                            if (regINF.act == 0) {//addnew result
                                                                if (mobi_raw.deskGRID === 1) { // co grid, va grid dang open 
                                                                    mobi_raw.__regGID[1].option({ 'focusedRowKey': r.regid });
                                                                    mobi_raw.__regGID[1].refresh();
                                                                    //
                                                                } else {
                                                                    if (mobi_raw['mobiui'] == 1) {//mobile
                                                                        mobi_raw['mobi_cmm'].prepend(
                                                                                mobi_raw['mobi_cmmraw'].rebuild(r)
                                                                        );
                                                                        //                          
                                                                    } else {// desktop mode, 
                                                                        regFRM.dataNV_SEK.at(iR, true/* dataSource form card*/);
                                                                    };
                                                                };
                                                            } else {
                                                                //
                                                                ref_REGIS(req_frm.datUPT[0], req_frm.datUPT[1]);
                                                                //
                                                            };
                                                            //
                                                            popup.hide();
                                                            //
                                                            //
                                                            if (r.regsta == 101) {
                                                                //gio la luc ra tay bong bong chat android !!!
                                                                setTimeout(function () {
                                                                    //
                                                                    app_bubble(res.toka, r, r.regsta);
                                                                    //
                                                                    //sau khi goi bubble message roi , neu co chat content + phone thi update UI
                                                                    //ko dem bo chung vao app_bubble.
                                                                    chat_ui([[rst,res]/*tai hien co giong voi mnuJOB_RST*/ , r, 30]);
                                                                    //
                                                                }, 1);
                                                                //
                                                            };
                                                            //
                                                            //
                                                            if (iR == 0) empty_msg_show();

                                                            srclocked(false);

                                                        } else {

                                                            srclocked(false);
                                                        };
                                                        //
                                                    });
                                                }, 10);
                                                //
                                            } else {
                                                srclocked(false);
                                            };
                                            //
                                        }
                                        ,

                                        snd_reg_btn = function (highest) {
                                            //
                                            var a = send_REG.send_regBTN, cls = a[0].classList;
                                            //
                                            a.html('<i class="fa fa-' + (highest[0] == 11 ? 'paper-plane' : 'check-circle') + ' mr-1"></i>' + (_gLA(29, highest[0]) || highest[1]));
                                            //
                                            //
                                            cls.remove(cls[3]);
                                            //
                                            //
                                            //
                                            if (send_REG.nutNOP > 1) {
                                                //view regis, has quyen
                                                //
                                                a.addClass('btn-primary');//neu ko thi no se loan class btn
                                                //
                                                //
                                                var r = req_frm.datUPT[0],


                                                    _mod = send_REG.nutNOP == 65535 ? 3 : 2,



                                                    queMEN = reg_MNU($.extend({ 'id': r.regid }, req_frm.datUPT[1].data()), [_mod]);


                                                //
                                                mn_QUYE.d0(queMEN[1]/*que*/, r, a.parent()/*nhap_cmm*/, [_mod]);
                                                //
                                                a.closest('ul').find('li:first').html(

                                                    $(err_block[2]).html(queMEN[0]).addClass(_mod == 3 ? 'mb-3' : '')

                                                );//cac nut quyen thao tac duy lieu
                                                //
                                                //
                                            } else {//old
                                                //
                                                a.closest('ul').find('li:first').html(err_block[1]);//nut luu temp
                                                //
                                                cls.add('btn-' + (highest[0] == 11 ? 'primary' : 'info'));
                                                //
                                            };
                                            //
                                        }
                                        ,

                                        highestFN = function (ix) {
                                            //
                                            if (!ix) ix = req_frm.renWhat;
                                            //
                                            var que = req_frm.uptKEY != -1 && req_frm.datUPT[1].data('ToiLaAi_In_This_Regis')
                                                || elUI.lan.rawD._fl0wself && elUI.lan.rawD._fl0wself[ix] && elUI.lan.rawD._fl0wself[ix];
                                            //
                                            return elUI.downline == 2 || (que && (que.myBos.length == 0 && (!que.bos_OnlyMe ||  que.bos_OnlyMe.length == 0))) ?
                                                [13, 'Approved'] :
                                                [11, 'Send'];
                                        }

                                        ,

                                        err_block = c0d.err_block
                                                //'<div class="col-12 col-sm-6 d-flex flex-column dx-validationsummary-item mb-3">' +
                                                //        '<div class="dx-fieldset-header reg-step-no mb-0" style="font-weight: 100;"><span class="bl-no">1</span><span class="bl-txt"></span></div>' +
                                                //    '</div>' 

                                        ,
                                        cty = c0d.cty(elUI, pigIE)
                                        ,

                                        actionSheetItems = [
                                            {
                                                template: function (e, a, b) {
                                                    //
                                                    send_REG.send_regBTN = cty.find('[mnu=send_reg]');
                                                    //
                                                    admin_btn();
                                                    //
                                                    send_REG.cmmt = cty.find('.sendnotes').dxTextArea({
                                                        placeholder: elUI.lan.js_011_8 || 'Registration notes here ...',
                                                        height: 80,
                                                        maxLength: 195,
                                                        value: send_REG.cmmTXT
                                                    }).dxTextArea('instance');
                                                    //
                                                    return cty;
                                                }
                                            }
                                        ]

                                       , luu_tru = function (e) {
                                           //
                                           if (send_REG.nutNOP > 1) {//combo button user for flow-nop-duyet

                                               var sel = !regEMP_LST._$element.hasClass('only_read') && regEMP_LST.option('selectedItemKeys') || [],
                                                   rmvs = {
                                                       'emrmv': [],
                                                       'otrmv': [],//default
                                                       'notes': apisvr.a$.trim(send_REG.cmmt.option('value'))
                                                   }
                                                   ,
                                                   mnu = e.currentTarget.getAttribute('mnu');
                                                   
                                               //
                                               if (mnu != 106) {//admin check
                                                   //
                                                   sel && sel.length > 0 && regEMP_LST.option('dataSource').map(function (v) {
                                                       //chi cai nao duoc select bang user hien tai.
                                                       if (v.rmv == parseInt(aLAN.js_usr_info[1])) {
                                                           rmvs.emrmv.push([sel.indexOf(v.acno) > -1, v.acno]);
                                                       };
                                                       //
                                                   });
                                                   //
                                                   if (req_frm.renWhat == 2) {//OT check editform show
                                                       if (luoi._$element.hasClass('only_read')) {

                                                           sel = luoi.getSelectedRowKeys();

                                                           sel && sel.length > 0 && luoi.option('dataSource')._array.map(function (v) {
                                                               //
                                                               if (sel.indexOf(v.aid) > -1) {
                                                                   if (v.tresom == -1 || ('-' + elUI.chkNo1() == v.tresom)) {
                                                                       rmvs.otrmv.push([true, req_frm.uptKEY, v.aid]);
                                                                   };
                                                               } else {
                                                                   //reset giao dien
                                                                   if ('-' + elUI.chkNo1() == v.tresom) {
                                                                       v.tresom = -1;
                                                                       rmvs.otrmv.push([false, req_frm.uptKEY, v.aid]);
                                                                   };
                                                               };
                                                               //
                                                           });

                                                       };
                                                   };
                                               };
                                               //
          
                                               req_frm.datUPT[2][2].closest('.row').find("button[mnu='send_reg']")

                                                   .trigger(elUI.onevt, [


                                                        $.isNumeric(mnu) ? parseInt(mnu) : ($(e.currentTarget).data().__ == 3 ? 3 : 30)


                                                       , function () {
                                                       //
                                                       defO['action'].act = 0;
                                                       defO['action'].hide();
                                                       setTimeout(function () { popup.hide(); }, 10);
                                                       //
                                                   }, rmvs]);
                                               //
                                           } else {
                                               _clkBTN(e);
                                           };
                                       };
                                      

                                    defO['action'] = $('<div></div>').appendTo(ref_regfrm.parent()).dxActionSheet({

                                        dataSource: actionSheetItems,

                                        showCancelButton: false,
                                        showTitle: false,
                                        //title: 'Choose action',

                                        visible: true,

                                        container: ref_regfrm.parent(),

                                        onContentReady: function (e) {
                                            //
                                            popup.d0gClose.insertBefore(
                                                e.component._popup._$wrapper.addClass('dume_overflow').children(":first").css('border-bottom', 'none')
                                                .find('.dx-popup-content').addClass('pb-1')
                                            ).off('click').on('click', '.btn', function (ex) {
                                                //
                                                send_REG.cmmTXT = elUI.ignore_upt_cmm;//'\x64\x04\x61\x05\x62\x06\x63';//tin hieu bo qua ko update comment
                                                popup.d0gClose.css('display', 'none');
                                                //
                                                setTimeout(function () {
                                                    defO['action'].act = 0;
                                                    e.component.hide();
                                                }, 10);
                                                //
                                            });
                                            //
                                            e.component._popup.option('onHiding', function (e) {

                                                popup.d0gClose.css('display', 'none');
                                                //setTimeout(function () {
                                                //    if (defO['action'].act === 1) {//click send
                                                //        srclocked(true);
                                                //        setTimeout(function () { popup.hide(); }, 10);
                                                //    };
                                                //}, 100);

                                                //debugger;
                                                //dispose scroll view tao ra khi check duplicate
                                                const dxSCROLL = cty.find('.tickets-container');
                                                if (dxSCROLL.length > 0 && dxSCROLL.data().dxScrollView) {
                                                    dxSCROLL.data().dxScrollView.dispose();
                                                };
                                                //
                                                cty.find('*').unbind().removeData();
                                                //
                                            });
                                            //
                                            e.component._popup.option('onShowing', function (e) {
                                                //
                                                //validate form here !!!
                                                //
                                                snd_reg_btn(highestFN());
                                                //
                                                var byPass_Chk_LV = 0,
                                                    snd_pnl = cty.off('click', '.btn').parent().children().addClass('d-none'),
                                                    wha = [req_frm.renWhat,regEMP_LST,luoi];
                                                //
                                                //
                                                if (req_frm.renWhat == 1) {
                                                    //
                                                    //
                                                    var dumeQUEUE = DROP_Z.getQueuedFiles().length,
                                                        orgFi = send_REG.noDZfile || [];
                                                    //
                                                    //
                                                    if (dumeQUEUE == 0 //ko co file nao duoc chon
                                                        && orgFi.length > 0 //qua khu load len co file
                                                        && req_frm.uptKEY != -1//action la update

                                                        ) {
                                                        //
                                                        dumeQUEUE = $(DROP_Z.previewsContainer)//thumbnail_container
                                                                        .find('.noDZ .image-name').length;//co file la duoc....
                                                        //
                                                    };
                                                    //
                                                    wha[3] = dumeQUEUE;
                                                    //
                                                    //
                                                    wha[2] = form;
                                                    //chi check valid ngay dang ky cho truong goi soan -> goi hoac edit ->goi
                                                    byPass_Chk_LV = (req_frm.uptKEY == -1 || req_frm.datUPT[0].regsta == 100) ? 0 : 1;
                                                };
                                                //
                                                //
                                                const newByPass = req_frm.uptKEY != -1 && req_frm.datUPT[0].hasOwnProperty('isAMIN_BACK');
                                                //
                                                //
                                                if (newByPass===true || !c0d.cty.err_panel(snd_pnl.eq(0), _gLA, syncSEL, wha, byPass_Chk_LV, _masREG)) {//ok
                                                    //    
                                                    snd_pnl.eq(1).removeClass('d-none');
                                                    if (send_REG.cmmt) send_REG.cmmt.repaint();
                                                    //
                                                    cty.on('click', '.btn', function (e) {
                                                        //
                                                        srclocked(true);
                                                        clearTimeout(luu_tru._hwnd_save);
                                                        //
                                                        luu_tru._hwnd_save = setTimeout(function () {

                                                            luu_tru(e);

                                                        }, 100);
                                                        //
                                                    });
                                                    //
                                                };
                                                //
                                                srclocked(false);
                                            });
                                        }
                                        ,
                                        onInitialized: function (e) {
                                            //
                                            //custom action sheet nam trong popup registration
                                            var dogSHE = e.component,
                                                pigHIDE = function (ex, args, config) {
                                                    dogSHE._itemDXEventHandler(ex, "onItemClick", args, config)

                                                    //this.callBase(e);  
                                                    if (!$(ex.target).is(".dx-state-disabled, .dx-state-disabled *")) {
                                                        //this.hide();  
                                                    }
                                                };

                                            dogSHE._mapPopupOption = function (optionName) {

                                                if (optionName == 'visible' && this.option(optionName) === true) {
                                                    this._popup && this._popup.option('container', ref_regfrm.parent());
                                                };
                                                this._popup && this._popup.option(optionName, this.option(optionName))
                                            };
                                            //
                                            dogSHE._itemClickHandler = pigHIDE;
                                            dogSHE._itemHoldHandler = pigHIDE;
                                            //
                                        }
                                    
                                    }).dxActionSheet('instance');
                                    //
                                    //
                                } else {
                                    //
                                    if (send_REG.cmmTXT != elUI.ignore_upt_cmm) {
                                        send_REG.cmmt.repaint();
                                        send_REG.cmmt.option('value', send_REG.cmmTXT);
                                    };
                                    //
                                    admin_btn();
                                    defO['action'].option('visible', true);
                                    //
                                    popup.d0gClose.css('display', '');
                                    //
                                };
                            };


                        //
                        if (DevExpress.devices._realDevice.deviceType == 'phone') {
                            defO.fullScreen = true,//DevExpress.devices._realDevice.deviceType == 'phone',
                            defO.dragEnabled = false// DevExpress.devices._realDevice.deviceType == 'desktop',
                        } else {
                            defO.maxWidth = 800;
                            defO.height = '100%';
                            defO.width = '100%';
                        };

                        defO.onShowing = function (e) {
                            //
                            //console.log('onShowing');
                            $('body').addClass('part_fullscreen');
                            //
                            if (!form && !luoi) {
                                //
                                //LAN DAU TIEN 2 CAI NAY KO CO
                                PU_TIT_PARA()
                                //
                                e.component._$bottom.css('padding', '5px 20px 10px 15px').addClass('duma_registration');

                                reg_PopU=reg_PopU();

                            } else {
                                //
                                if (req_frm.renWhat == 1) {//reg leaving
                                    if (render_frm.grid === 1) {
                                        luoi.option({ 'visible': false, 'disabled': true });
                                        luoi._$element.closest('.ot_thoigian').addClass('d-none');
                                    };
                                    if (render_frm.form === 1) {
                                        var frmO={ 'visible': true, 'disabled': false };
                                        if (req_frm.__renWhat != req_frm.renWhat && req_frm.__uptKEY != req_frm.uptKEY) {
                                            //
                                            var fO  = render_frm(1);
                                            frmO.formData = fO[0];
                                            frmO.readOnly = fO[1];
                                            //
                                            setTimeout(function(){
                                                var tabs=form._$element.find('.dx-tabpanel').data().dxTabPanel;
                                                tabs.option({
                                                    "selectedIndex": (fO && fO[0].selo //fO.tong  - modify
                                                        || 0), 'disabled': fO[1]
                                                });
                                                //
                                                //
                                                tabs._$itemContainer.find('.dx-radiogroup').data().dxRadioGroup.option('value', fO[0] && fO[0].tresom || 1)
                                                //
                                            },10);
                                        };
                                        //
                                        form.option(frmO);
                                        //
                                    };
                                } else {//2 reg OT
                                    if (render_frm.form === 1) form.option({ 'visible': false, 'disabled': true });
                                    if (render_frm.grid === 1) {
                                        luoi.option({ 'visible': true, 'disabled': false });
                                        if (req_frm.__renWhat != req_frm.renWhat && req_frm.__uptKEY != req_frm.uptKEY) {
                                            luoi.cancelEditData();
                                            render_gid(1);
                                        };
                                        luoi._$element.closest('.ot_thoigian').removeClass('d-none');
                                    };
                                };
                                //
                                //srclocked(false);

                                //toi day thi reg_PopU da bi gan lai thanh variable --> call giao tiep...
                                reg_PopU(1);
                                //
                            };
                            //
                            //
                            //
                            //backup lai lan truoc load len de reset form
                            req_frm.__renWhat = req_frm.renWhat;
                            req_frm.__uptKEY = req_frm.uptKEY;
                            //
                            //
                        };

                        defO.onShown = function (e) {
                            //
                            //render_frm.W=tieude.width();
                            //
                            var manualFRM_TITLE = true;//co call function frmTitle
                            //
                            if (req_frm.renWhat == 1) {//reg leaving

                                if (!render_frm.hasOwnProperty('form')) {

                                    manualFRM_TITLE = false;

                                    render_frm.form = 1;
                                    render_frm();

                                    //if (render_frm.grid === 1) luoi.option({ 'visible': false, 'disabled': true });
                                    //srclocked(false);
                                };
                            } else {

                                if (!render_frm.hasOwnProperty('grid')) {
                                    //
                                    manualFRM_TITLE = false;

                                    render_frm.grid = 1;
                                    render_gid();

                                    //if (render_frm.form === 1) form.option({ 'visible': false, 'disabled': true });
                                    //srclocked(false);
                                };
                            };
                            //
                            //
                            if (manualFRM_TITLE) frmTitle();//goi cho no hien thi form
                            //
                            //
                            setTimeout(function () {
                                if (!scroll_FRM) {
                                    scroll_FRM = ref_regfrm.dxScrollView({
                                        scrollByContent: true,
                                        scrollByThumb: true,
                                        showScrollbar: 'onScroll',
                                        //onReachBottom: updateBottomContent,
                                        reachBottomText: 'Updating...',
                                        onDisposing: function (e) {

                                            //console.log('totalDIV.dxScrollView onDisposing;' + new Date().getTime());
                                            //$(window).off("resize", NEW_FLOW_OPT.windowRZ);

                                        }
                                    }).dxScrollView('instance');
                                } else {
                                    scroll_FRM.scrollTo({ left: 0, top: 0 });
                                };
                            }, 1);


                        };


                        defO.onHiding = function (e) {

                            //srclocked(true);//lock o day , se nha o hdden


                            $('body').removeClass('part_fullscreen');
                            //var edf = e.component._$wrapper;
                            //frmEL.append(edf);

                            if (!defO['action'] || defO['action'].act == 0) {
                            };


                            srclocked(false);

                        };
                        defO.onHidden = function (e) {
                            //scroll_FRM.option('disabled', true);
                            //e.component._$popupContent.removeAttr('style');
                            //var edf = e.component._$wrapper;
                            //edf.removeClass('dx-state-invisible');
                            //scroll_FRM.update();
                            //

                        };
                        //
                        //
                        var poCLS = ' class="popup_home"',
                            poPA =apisvr.review_regis?document.body:  start_mnu;// fuckdrawer && fuckdrawer.find('.reg_pop_home').empty()//neu desktop thi vao day
                            //|| (poCLS='',start_mnu);

                        popup = $('<div' + poCLS + '></div>').appendTo(poPA).dxPopup(defO).dxPopup('instance');

                        popup.reset_popup = function () {

                            if (!render_frm.hasOwnProperty('form') || !render_frm.hasOwnProperty('form')) {
                         
                            };

                            var lst_m =PU_TIT_PARA()// syncSEL.lst_ = regEMP_LST_ReadOnly()
                                , _D = lod_validE();
                            //
                            regEMP_LST.option({ 'dataSource': _D, 'searchValue': '', allowItemDeleting: ((elUI.quy_imp_excel   && req_frm.renWhat==2 ) ||  lst_m === 0 &&  a_dogSEL(2))  ? true : false });
                            popup._$content.addClass('lkload');
                            popup._$popupContent.addClass('invisible');
                            //
                            //
                            if (regEMP_LST._$element) {
                                //
                                regEMP_LST.unselectAll();
                                //
                                regEMP_LST._$element.removeClass('only_read  duyet_rmv only_me')
                                              .addClass(a_dogSEL(1));
                                //
                                regEMP_LST.repaint();
                                //
                            };
                            //
                        };

                    }
                    ,

                    mnu_CLK = function (e,uptDAT) {
                        //
                        req_frm.renWhat = e;
                        delete req_frm.datUPT;//reset
                        req_frm.uptKEY = uptDAT ? (req_frm.datUPT = uptDAT, uptDAT[0].regid) : -1;
                        req_frm.__uptKEY = -2;//reset
                        req_frm.__renWhat = -2;//reset
                        //
                        if (!popup) {
                            //
                            var defe = $.Deferred();
                            //
                            if (!req_frm.tmpl) {

                                start_mnu.trigger('get', [srcp$f + '/media/utils/regis_tmpl.html' + src$id, function (data) {//get co ky tu \x03 giua chu e va chu t
                                    //  
                                    var ecU = this;
                                    start_mnu.trigger('',//trigger event "\x1C\x1D\x1E\x1F"
                                    [data, false, $.Deferred().done(function () {
                                        //
                                        var rawHTML = $(adCS(arguments[0], ecU));
                                        req_frm.tmpl = { 'tmpl_attach': rawHTML.find('.tmpl_attach').html() };
                                        //
                                        ini_popup(defe);
                                        //
                                        //function string_exp(sCmd) {
                                        //    return Function("'use strict'; " + sCmd + ";return {dog:_dog}")();
                                        //};
                                        //
                                        //
                                        c0d = w0w['_dog'] && _dog(dume) || s_exp(arguments[3].join('')).dog(dume);
                                        //
                                        //products = c0d.products;
                                        //
                                        setTimeout(function () {

                                            popup.show();

                                        }, 100);
                                       
                                        //
                                    })]);
                                    //
                                }]);
                            };
                            //
                            //
                            _gsC('https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.3/min/dropzone.min.js', 'js', function (data) {
                                //
                                defe.resolve();
                                //
                            }, 'dropzone.min.js');
                            ////
                        } else {
                            popup.reset_popup();
                            popup.show();
                        };
                    }

                    ,

                    tuychon_k = 'tuychon_' + new Date().getTime();

                ctxM_O = {

                    _k: tuychon_k,

                    op: {
                        onShowing: function (e) {
                            isPU_tuychon = true;
                            ctxM_O.el.children().addClass('d-none');
                            var acDIV = ctxM_O.el.find('.' + ctxM_O._forMNU);
                            acDIV.removeClass('d-none');
                            if (ctxM_O._fnUI) ctxM_O._fnUI(1, acDIV);
                        },
                        onHiding: function (e) {
                            isPU_tuychon = false;
                            _this.ctx[0].option('target', null);
                            if (ctxM_O._fnUI) ctxM_O._fnUI(0);
                        },
                        hideOnOutsideClick: function (e) {//closeOnOutsideClick
                            //debugger;
                            //khi click outside co the click lai cung 1 object gojs, nen menu se nhap nhay,
                            //clearTimeout(clkSAME_HWND);
                            ////
                            //console.log('hideOnOutsideClick: function (e) ');
                            ////
                            //if (e.target === flow_gojs.find("canvas").get()[0]) {
                            //    clkSAME_HWND = setTimeout(delayHIDE_PO, 200);
                            //    return false;
                            //} else {
                            //    return true;
                            //};
                            return true;
                        },
                        width: 'auto',
                        maxWidth: 400,
                        //hideOnOutsideClick :true,
                        position: {
                            my: "bottom center",
                            at: "center top",
                        },
                    },

                    _forMNU: null,

                    _fnUI: null,

                    el: $('<div class="_k-' + tuychon_k + '">' + mobi_raw.ctx_mnu_tmpl + '</div>')
                };
                //
                //
                //loai bo quyen dang ky
                tuychon_k = [];
                var mnuLNK = elUI.lan.rawD && elUI.lan.rawD._fl0wself;
                mnuLNK && mnuLNK.forEach(function (rno, idx) {
                    if (rno && rno.quyen[0] == 'rno') {
                        tuychon_k.push(idx);
                    };
                });
                //
                if (tuychon_k.length > 0) {
                    //
                    mnuLNK = ctxM_O.el.find('.start_mnu [mnu^="Reg_Req_"]');
                    //
                    for (var rno = tuychon_k.length - 1 ; rno > -1; rno--) {
                        var re=$(mnuLNK[tuychon_k[rno]-1]);
                        if (re.next().hasClass('hrx')) re.next().remove();
                        if (re.prev().hasClass('hrx')) re.prev().remove();
                        re.remove();
                    };
                };
                //
                return {
                    mnu_CLK: mnu_CLK
                };
            };

        var hasUA = opts.ua > 1 ? 'UA' : 'noU',
            _tabId
            ,
            empty_msg_show = function (forceHide) {
                var hasReg = elUI.regDAT.R.length,
                    forceHide = mobi_raw.deskGRID === 1 || forceHide === true;
                //
                mobi_raw['empty_msg'][(hasReg > 0 || forceHide ? 'add' : 'remove') + 'Class']('d-none');
                //
                if (regFRM.dataNAVI) {
                    regFRM.dataNAVI[(hasReg == 0 || forceHide ? 'add' : 'remove') + 'Class']('d-none');
                };
            }
            ,
            frmDataNavigator = function (cardNAV) {
                //
                var reco = cardNAV.find('.recordidx'),
                    prev = cardNAV.find('.btn.prev'),
                    next = cardNAV.find('.btn.next'),
                    AT = 0;

                var _at = function (ix, init) {
                    //
                    var TOTA = elUI.regDAT.R.length;
                    //
                    AT = ix;//cap nhat lai index
                    //
                    reco.text((ix + 1) + " / " + TOTA);
                    prev[(ix > 0 && TOTA > 0 ? 'remove' : 'add') + 'Class']('disabled');
                    next[(ix < TOTA - 1 && TOTA > 0 ? 'remove' : 'add') + 'Class']('disabled');
                    //
                    if (init === true) {//luc khoi tao thi se call _move()
                        //0 y nghia refresh form card thoi ko dich chuyen cursor cua db
                        _move(0);//ko call lai _at
                    };
                }
                , _move = function (ste) {
                    //
                    //draw data navigator ....
                    if (ste !== 0) _at(AT + ste);//khi ste=0 thi init
                    //
                    //get record at AT
                    var formDAT = fillMASTER.AT(AT);
                    //
                    //update form display
                    regFRM.option({ disabled: !formDAT, formData: formDAT });
                }
                , _prev = function () {
                    _move(-1);
                }
                , _next = function () {
                    _move(1);
                };
                return {
                    at: _at,
                    prev: _prev,
                    next: _next
                }
            }
            ,
            gen_ID = function () {
                //return new Date().getTime();

                return elUI.regDAT.reduce(function (_p, _c) {
                    if (+_c.id > +_p) {
                        return _c.id;
                    } else {
                        return _p;
                    }
                }, 0) + 1;
            },

            RFVfTElFVQ = function () {//base 64 DU_LIEU

                var hisFromDB = [],

                    hed = elUI.dbNa + '_hed',
                    lin = elUI.dbNa + '_lin',

                    fn = {

                        'S_noU': function (dat, act) {

                            var d3 = $.Deferred();

                            lo$DB(function (db) {

                                //debugger;

                                if (db.kq == 0) {//create new
                                    //
                                    var D$b = db.e.target.result;//var Db = e.target.result;

                                    //uncomment if we want to start clean
                                    if (D$b.objectStoreNames.contains(hed)) D$b.deleteObjectStore(hed);
                                    //if (D$b.objectStoreNames.contains(lin)) D$b.deleteObjectStore(lin);
                                    //
                                    //var his = D$b.createObjectStore(lin, { keyPath: "id" });
                                    //his.createIndex("HisIndex", "uptime");
                                    //
                                    var tc = D$b.createObjectStore(hed, { keyPath: "aid", autoIncrement: true });
                                    //tc.createIndex("LogIndex", "logid");
                                    //
                                } else if (db.kq == 1) { //ok
                                    //
                                    //debugger;

                                    var saveRST = 0,
                                        //, hisTime = new Date()
                                        //, hisID = hisTime.getTime(),

                                        ts = db.rst.transaction([/*lin,*/ hed], "readwrite"),
                                            //hisStore = ts.objectStore(lin),
                                                    tcStore = ts.objectStore(hed),
                                                    countHIS = 0,
                                                    log_1 = {},
                                                    req;

                                    if (act == 'delete') {
                                        //
                                        req = tcStore[act](dat.aid);
                                        //
                                    } else {
                                        //
                                        if (dat['aid'] && dat['aid'] == -1) delete dat['aid']
                                        //delete dat['oid'];//xoa luon orderid
                                        //
                                        act = dat['aid'] ? 'put' : (dat.id = gen_ID(), 'add')//co field aid nghia la duoc load len tu db, -> put =udpate
                                        //
                                        //debugger;
                                        req = tcStore[act](dat);
                                    };

                                    //
                                    //
                                    req.onsuccess = function (e) {
                                        //
                                        saveRST = 1;
                                        dat['aid'] = e.target.result;//auto ID vua tao ra
                                        //
                                    };
                                    //
                                    //
                                    ts.oncomplete = function () {
                                        //
                                        db.rst.close();
                                        //
                                        d3.resolve(saveRST);
                                        //
                                    };
                                }
                            });

                            return d3.promise();
                        }

                        ,

                        'S_UA': function (jdata) {

                            var op = $.extend({}, {
                                uri: '/api/lkdata'//default la data hole cua pm, => se bi update uri trong jdata
                                , 'act': 'req_regis'// 'http://hellohrm2020.ddns.net:2432/api/HelloHRM/hinh'
                            }, jdata);
                            return $mainO.svrDAT(op);
                        }

                        ,

                        'L_noU': function () {
                            var defe = $.Deferred();
                            //
                            lo$DB(function (db) {
                                //
                                //debugger;
                                if (db.kq == 0) {//create new
                                    //
                                    db.cb('cancel');
                                    //khong tao moi
                                    defe.resolve(null);
                                    //
                                } else if (db.kq == 1) { //ok
                                    // dbTBname: ['loghis', 'tc3'],
                                    var req
                                    , rst = []
                                    , ts = db.rst.transaction([hed], "readonly")
                                    , tc3Store = ts.objectStore(hed);
                                    //
                                    ts.oncomplete = function () {
                                        db.rst.close();
                                        defe.resolve(rst);
                                    };
                                    //
                                    tc3Store.openCursor().onsuccess = function (e) {
                                        var cursor = e.target.result;
                                        if (cursor) {
                                            //if (logIDs.indexOf(cursor.value.logid) > -1) {
                                            rst.push(cursor.value);
                                            //};
                                            cursor.continue();
                                        } else {
                                            //End
                                        }
                                    };
                                };
                                //
                            });
                            //
                            return defe.promise();
                        }
                        ,
                        'L_UA': function (dat) {

                            var defe = $.Deferred(),
                                uaa = UaA(elUI.lan[''] || ''),//lay theo url cua form
                                op = {

                                    uri: uaa.length > 0 ? (uaa + "/lodregis") : '/api/lkdata' /*co tinh de undefined de khi vao merge no se bo qua*/
                                    ,

                                    'dat': JSON.stringify(dat)

                                }

                            return $mainO.svrDAT(op);
                        }

                        ,
                        'TMP': function (m, d) {

                            var na = elUI.dbNa + (hasUA == 'noU' ? '' : ('_' + btoa(opts.__u)));
                            m += 'Item';
                            if (d) {
                                st(m, na, btoa(window[st0('1')](JSON.stringify(d))));
                            } else {
                                return st(m, na);
                            };
                        }

                    };

                return {

                    LOAD: fn['L_' + hasUA],
                    SAVE: fn['S_' + hasUA],

                    TMP: fn['TMP']
                    //UaA: function () {// aLAN[''] || ''
                    //    var url = atob(elUI.lan[''] || ''),
                    //            chk = ['http://', 'https:/'].indexOf(url.substring(0, 7))>-1;
                    //    //
                    //    return chk ? url : '';
                    //}
                };

            }()
            ,

            regis_hed_fot = function (el, mnu, isRELOAD) {
                //
                if (mnu == '-1') {//prepare show menu 
                    for (var chk in elUI.REG_COF) {
                        if (elUI.REG_COF.hasOwnProperty(chk)) {
                            var ti = elUI.REG_COF[chk], tI = "[mnu=" + chk + isRELOAD + "] i";
                            el.find(tI)[(ti == 1 ? 'add' : 'remove') + 'Class']('ti-check');
                        };
                    };
                    return;
                };
                //
                //
                //
                var isCHK = $(el.currentTarget).find('i');
                //
                isCHK.toggleClass('ti-check');
                elUI.REG_COF[mnu] = isCHK.hasClass('ti-check') ? 1 : 0;
                //
                st('setItem', elUI.dbNa + "__" + aLAN.js_usr_info[1], btoa(window[st0('1')](JSON.stringify(elUI.REG_COF))));//dangky
                //
                //
                if (isRELOAD == true) {
                    //var loadOPT = { 'mod': 1, 'frm': lk_tungay.option('value'), 'too': lk_dengay.option('value'), 'mobiui': mobi_raw['mobiui'] };
                    LOD_REG_DAT(elUI.__loadOPT, new $.Deferred().resolve(regFRM));
                };
                //debugger;
            }

            ,
            subtractMonths = function (v, d) {

                d = new Date(d);

                d = new Date(d.setMonth(d.getMonth() + v));

                if (v < 0) d.setTime(d.getTime() - (24 * 60 * 60 * 1000) * 1);

                return new Date(d);
            }

            ,

            timeAgo = function (input) {
                //https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site

                var fnLAN = function (v, ix) {
                    if (elUI.lan.js_011_3_4) {
                        return elUI.lan.js_011_3_4 + " " + v + " " + elUI.lan.js_011_34[ix];
                    }
                }
                    ,
                    date = (input instanceof Date) ? input : new Date(input),
                    ranges = {
                        year: 3600 * 24 * 365,
                        month: 3600 * 24 * 30,
                        week: 3600 * 24 * 7,
                        day: 3600 * 24,
                        hour: 3600,
                        minute: 60,
                        second: 1
                    }
                    ,
                    secondsElapsed = Math.abs(date.getTime() - Date.now()) / 1000,
                    ix = 1;

                for (var key in ranges) {
                    if (ranges[key] < secondsElapsed) {
                        var delta = Math.round(secondsElapsed / ranges[key]);
                        return fnLAN(delta, ix) || delta + " " + key + (parseInt(delta) > 1 ? 's' : '') + " Ago";
                    }
                    ix++;
                };

                return elUI.lan.js_011_34 && elUI.lan.js_011_34[0] || 'Just now';
            }

            ,

            _fillMASTER = function () {
                //
                if (!(this instanceof _fillMASTER)) {
                    return new _fillMASTER();
                };
                //
                //if (!(this instanceof fillMASTER)) {
                //    return new fillMASTER();
                //}

                //var masE = elUI.regDAT.E,//master employees
                var infO = elUI.regDAT.D, // thong tin dang ky
                    ma$ter = elUI.lan.rawD && JSON.parse(elUI.lan.rawD.ma$ter),
                    lstE = { 'E': {}, 'U': {} },//cache employees master de giam filer
                    lstH = {},//cache master OT/LV  de giam filer
                    oid = 1
                //
                ,
                _getE = function (r, dic) {
                    //
                    if (!dic) dic = aLAN.js_usr_info[0] == 2 ? 'E' : 'U';//2: type employee, 1:type user
                    return lstE[dic][r.usrid] || _getEE(r, dic);
                }
                ,
                _getEE = function (r, dic) {
                    //
                    var eachE = {};
                    elUI.regDAT.emp.some(function (em) {
                        if (em.id == r.usrid /*user dang ky*/ && em.typ == r.utyp/*type  dang ky employees hay user*/) {
                            eachE = em;
                            lstE[dic][r.usrid] = em;
                            return true;
                        };
                    });
                    return eachE;
                }
                ,
                fillR = function (r) {
                    //
                    var dic = aLAN.js_usr_info[0] == 2 ? 'E' : 'U',//2: type employee, 1:type user
                        masE = lstE[dic][r.usrid] || _getEE(r, dic),
                        ff_ac = [],
                        ff_ec = [],
                        ff_en = [];
                    //
                    //ff_regtyp
                    //if (r.regid == 23) {

                    if (masE) {
                        //
                        r.EmpCode = masE.ma;//note no se modify luon source ...
                        r.EmpName = masE.ten;
                        r.bd = masE.bd;//birthday
                        r.jd = masE.jd;//Join day ngay gia nhap
                        r.ff_gt = aLAN.js_001_21[masE.gt]; //gioi tinh
                        //
                        r.flowMark = -1 * masE.pb;//dung de tim flow cua nhung normal nhan vien ko phai la boss theo phong ban cua ho
                        //
                        //
                    };
                    //
                    //
                    if (mobi_raw['mobiui'] == 0) {
                        //
                        for (var dz = elUI.regDAT.E.length - 1; dz > -1; dz--) {
                            var atE = elUI.regDAT.E[dz];
                            if (atE.pid == r.regid) {
                                //
                                atE = lstE[dic][atE.eid] || _getEE({ usrid: atE.eid, utyp: 2 }, dic);
                                //
                                if (atE) {
                                    ff_ac.unshift(atE.id);
                                    ff_ec.unshift(atE.ma);
                                    ff_en.unshift(atE.ten);
                                };
                                //
                            };
                        };
                        //
                        r.ff_usrid = ff_ac.join();//note no se modify luon source ...
                        r.ff_EmpCode = ff_ec.join();
                        r.ff_EmpName = ff_en.join();
                        //
                    };
                    //
                    //
                    r.ff_regtyp = _gLA(28, r.regtyp);
                    r.ff_regsta = _gLA(29, r.regsta - staOfs);
                    //

                    elUI.regDAT.D.some(function (v) {
                        if (v.pid == r.regid) {
                            if (r.regtyp == 1 && v.selo == 1) {
                                r.ff_regtyp = _La$N('js_011_38|' + v.tresom, elUI.lan);
                            };
                            r.EachDate = v.EachDate;
                            return true;
                        }
                    });


                    r.fillok = 1;//danh dau la da fill roi
                    //
                }
                ,
                _AT = function (ix) {
                    if (ix > -1 && elUI.regDAT.R.length > ix) {
                        var r = elUI.regDAT.R[ix];
                        if (r.fillok !== 1) fillR(r);//chua fill
                        return r;
                    };
                }
                ,
                _atKey = function (k, olyV) {
                    var dat, i = 0;
                    elUI.regDAT.R.some(function (r) {
                        //
                        if (r.regid === k) {
                            if (r.fillok !== 1) fillR(r);//chua fill
                            dat = r;
                            return true;
                        };
                        //
                        i++;
                        //
                    });
                    if (!olyV) {
                        return [dat, dat ? i : -1];
                    } else {
                        return dat;
                    };
                }
                ,
                _RMV = function (k) {
                    var rmI = _atKey(k),
                        idx = rmI[1];
                    //
                    if (idx > -1) {
                        //
                        //
                        elUI.regDAT.R.splice(idx, 1);

                        if (elUI.regDAT.R.length == 0) {
                            idx = -1;
                        } else if (elUI.regDAT.R.length == idx) {
                            idx--;//giam xuong 1 index
                        };

                    }

                    return [rmI[0], idx];
                }
                ,
                _GET = function () {
                    //
                    elUI.regDAT.R.forEach(function (r, i) {
                        //
                        if (r.fillok !== 1) fillR(r);//chua fill
                        //
                        //
                        r.oid = oid;
                        oid++;
                    });
                    //
                    return elUI.regDAT.R;//grid co the dieu khien toan bo data add,uppdate, delete...
                    //

                    //chinh xac la ko dung filter, vi no se tra ve 1 clone, nen khi add vao grid thi no se ko add vao  elUI.regDAT.R
                    ////////return elUI.regDAT.R.filter(function (r) {
                    ////////    //
                    ////////    //
                    ////////    if (r.fillok !== 1) fillR(r);//chua fill
                    ////////    //
                    ////////    //
                    ////////    r.oid = oid;
                    ////////    oid++;
                    ////////    return r;
                    ////////    //}
                    ////////});
                };
                //
                return {
                    GET: _GET,
                    AT: _AT,
                    atK: _atKey,
                    FIL: fillR,
                    RMV: _RMV,
                    getE: _getE
                }
            }

            , fillMASTER

            , LOD_REG_DAT = function (loadOPT, renderUI) {

                loadOPT.vwtyp = elUI.vwtyp;



                if (apisvr.review_regis !== undefined && apisvr.review_regis != null) loadOPT['review_regis'] = encodeURIComponent(apisvr.review_regis);//moi them vao encodeURIComponent

                $.when(RFVfTElFVQ.LOAD(loadOPT), renderUI,

                    // neu main app se set dia chi lay img + regis NOTE!  chi goi 1 lan khi load
                    loadOPT.mod === 0 && w0w['_cordovaNative'] ? w0w._cordovaNative.__.regis_chat(

                                mobi_raw['mobi_cmm'] //neu mode bubble se load chat container,

                            ,  ['ImG', UaA(elUI.lan[''] || '')]  


                    ) : "2").done(function (da, frm, _androidChat) {

                        //
                        elUI.regDAT = { R: [], GOI: [], masREG: [], _cache: {} };

                        elUI.ePic = {};//reset
                        //
                        if (da) {
                            var d = JSON.parse(da),
                                regDAT = JSON.parse(d.u$rdat);
                            //
                            //nhung thong tin co ban tu server ve se merge vao trong elUI
                            $.extend(elUI, d.flow);
                            elUI.lan.rawD = d;
                            //
                            var dumeTAB = mobi_raw['piltab'].find('li.rmv_self').next();
                            //
                            elUI.downline = aLAN.js_usr_info[0] == 1 ? 2 :
                                d._fl0wself ? 1 :
                                (dumeTAB.remove(), dumeTAB = null, 0);
                            //
                            if (dumeTAB) dumeTAB.removeClass('d-none');
                            //
                            //
                            elUI.regDAT = regDAT;//
                            elUI.regDAT.usrMAP = {};
                            elUI.regDAT._cache = {};

                            if (mobi_raw.desPIC) mobi_raw.desPIC.empid = -1;//reset hinh
                            //
                            //---------- group data nop duyet vao GOI ------------------------
                            elUI.regDAT.GOI = elUI.regDAT.sen.reduce(function (rs, it) {
                                var eV = rs[it.pid] || (rs[it.pid] = []);
                                //
                                eV.push(it);
                                //
                                return rs;
                            }, {});
                            //
                            elUI.regDAT.masREG = JSON.parse(elUI.lan.rawD.ma$ter);
                            //
                            if (elUI.regDAT.D.length == 0 && apisvr.review_regis) {
                                //debugger;
                                //thong bao ko tim thay registration
                                window.sweetalert2_DLG = function () {
                                    //debugger;
                                    window.dupHELLO(
                                        apisvr._khachhang ? {
                                            showConfirmButton: false,
                                            showCancelButton: false,
                                            txt: 'js_regis'
                                        } : null
                                    , function (rst) {/*callback fn here*/
                                        //debugger;
                                    });
                                };

                                $.get(srcpf$ + "/dupbrowsertab_lanjs.php?k=1&XDEBUG_SESSION_START=154A5348", function (data) {
                                    apisvr.a$.scod(data);
                                });
                            };
                        };
                        //
                        fillMASTER = _fillMASTER();//khoi tao
                        //
                        if (frm) {//loai nay la desktop
                            //
                            if (mobi_raw.deskGRID) {
                                var dbE = new DevExpress.data.ArrayStore({ key: 'regid', data: fillMASTER.GET() }),
                                    GID = mobi_raw.__regGID[1],
                                    newGidO = { 'dataSource.store': dbE };
                                //
                                //
                                if (mobi_raw.deskGRID === 1) {//visible
                                    //
                                    var old = GID.option("focusedRowKey"),
                                        nwid = fillMASTER.atK(old);
                                    if (nwid[1] == -1) {
                                        nwid = elUI.regDAT.R.length > 0 && elUI.regDAT.R[0].regid || -1;
                                    } else {
                                        nwid = old;//giu nguyen focus key
                                    };
                                    //
                                    if (old == nwid || nwid) {
                                        newGidO.focusedRowIndex = -1; //hack focuse
                                    };
                                    newGidO.focusedRowKey = nwid;
                                };
                                //
                                GID.option(newGidO);
                                mobi_raw.__regGID[0] = dbE;//cap nhat lai dbE moi
                                //
                            };
                            //
                            //
                            if (mobi_raw.deskGRID !== 1) {//co grid thi de gird care
                                //
                                if (loadOPT.mod === 1) {//refresh
                                    regFRM.option({ formData: null });//hack
                                };
                                //
                                duma_hwnd = function (e) {
                                    duma_hwnd = null;//reset
                                };
                                //seek ve first row ...
                                regFRM.dataNV_SEK.at(0, true);//init
                            };
                            //
                        } else {//loai nay la mobile
                            var postHT = [],
                                allD = fillMASTER.GET();
                            //
                            start_mnu.prev().find('span.total-comments').text(allD.length);
                            //
                            allD.forEach(function (r, i) {
                                r.oid = i + 1;
                                postHT.push(mobi_raw['mobi_cmmraw'].rebuild(r));
                            });
                            //
                            //move comment ra root .
                            if (apisvr.review_regis ) {
                                //
                                //doi luon empty message sau .container , nhung chua hoan tat hien thi, tinh sau ...
                                if (loadOPT.mod === 0) {
                                    mobi_raw['empty_msg'].insertAfter(

                                        mobi_raw['mobi_cmm'].closest('.container').appendTo(w0w['_cordovaNative'] ? w0w['_cordovaNative'].__.chat_home(elUI, flowIMG).on('listenCMD', function () {

                                            switch (arguments[1]) {
                                                case 'emppic': {
                                                    arguments[2].forEach(function (im) {
                                                        flowIMG.bind(im)();
                                                    });
                                                    break;
                                                };
                                            }

                                        }) : document.body)

                                    );
                                } else {
                                    //khi load lai thi cung can call chat ui de rebuild chat container.
                                    chat_ui();
                                };
                                //
                            };
                            //
                            //
                            mobi_raw['mobi_cmm'].empty().append(postHT);
                            //
                        };
                        //
                        empty_msg_show();
                        //
                        //se di render mobile nop duyet post
                        if (mobi_raw.deskGRID !== 1) { // co grid, va grid dang open 


                            srclocked(false);


                        };
                        //
                        loadOPT.mod = 1;//tu day ve sau la reload
                        //
                    }).fail(function (e) {
                        devToasERR(e, elUI.lan);//function o sockjo.js
                        srclocked(false);
                    });
                //
            }

            , postREGIS = function (tmpl) {

                var prt = {
                    'me': '<h2 class="ti-location-pin text-info m-0"></h2>',
                    'si$': [['text-success', 'fa-check-circle  mr-2'], ['text-danger', 'fa-times-circle  mr-2'], ['tralai', 'fa-reply']]
                },

                __req_tool_cmm = function (na, cmm, e$l, r) {

                    cmm.text(nga_sDt24(new Date(_req_tools_USR.tg)));//timeAgo

                    var ten = cmm.prev().text(na);

                    if (mobi_raw['mobiui'] == 1) {//mobil UI
                        //
                        var sta = r.regsta - staOfs,
                            ico = 'fa-hourglass-start',
                            col = '';

                        if (_req_tools._me > -1) {
                            ico = 'fa-hourglass-o';
                            if (sta > 0) col = ' text-warning';
                        }

                        if (sta == 0) {
                            ico = 'fa-pencil';
                        } else if (sta == 5) {
                            ico = 'fa-reply';
                            col = ' text-danger';
                        };



                        //
                        $('<a class="colap_hed pt-2' + col + '">' + _gLA(28, r.regtyp).toUpperCase() + '</a>').insertBefore(ten);
                        //
                        $('<h5 class="m-0 colap_hed' + col + '"><i class="fa ' + ico + '  mr-2"></i></h5>').prependTo(e$l);
                        //

                    };
                }
                ,
                    _req_tools = function (r, rEg) {

                        var e$l = $(prt['hed']),
                            cmm = e$l.find('[data-target="#reg_no_0000001"]').attr('data-target', '#reg_no_' + r.regid),
                            pnl_refresh = cmm.next();
                        //
                        //
                        if (mobi_raw['mobiui'] === 1) {
                            if (r.__expa === 1) {//mobil UI, expand regis post
                                cmm.addClass('xongroi');//se ko load lai imge
                            };
                        } else {
                            cmm.parent().addClass('d-flex');//prevent button break line
                        };
                        //
                        cmm = e$l.find('.commenter-name .comment-time');
                        //
                        if (!_req_tools_USR.newLI) {//header tool cua registrator
                            //
                            var isOK = [3, 4].indexOf(r.regsta - staOfs);
                            if (isOK > -1) {//3: duyet, 4:ko duyet
                                //
                                cmm.parent().prev().remove();
                                //
                                cmm.parent().replaceWith('<h5 class="' + prt.si$[isOK][0] + ' m-0"><i class="fa ' + prt.si$[isOK][1] + '" aria-hidden="true"></i>' +
                                    _gLA(28, r.regtyp) +

                                  (mobi_raw['mobiui'] === 1 ? '<span class="commenter-name colap_hed mt-2">' +
                                        '<span class="text-primary">' + r.EmpName + '</span> / ' + r.EmpCode + ' / ' + r.usrid +
                                        '<span class="comment-time">' + nga_sDt24(new Date(r.tg)) + '</span>' +
                                    '</span>' : '') +

                                    '</h5>');
                                //
                                rEg.addClass('ok_flow_usr');
                                //
                            } else {
                                //
                                __req_tool_cmm(_req_tools_USR.EmpName, cmm, e$l, r);
                                //
                                rEg.data('dume_own_regis', [r.regsta]);
                                //
                                if (_req_tools._me > -1) {
                                    $(prt.me).insertBefore(cmm.parent()).addClass('dog1');
                                };
                                //
                                //
                                const ima = e$l.find('.commenter-pic img');
                                if (ima.length > 0) {
                                    if (r.__expa === 1) {//khi expand thi moi load image
                                        flowIMG.bind([ima[0], btoa(r.usrid), elUI.empI])();
                                    } else {
                                        ima.attr('data-lazy', btoa(r.usrid));
                                    };
                                };
                            };
                            //
                        } else {//header bay gio la cua boss incharge flow
                            //
                            var usr_li = _req_tools_USR.newLI.find('.ticket-user').clone(),
                                isMORE = usr_li.length > elUI.cmm_W + 1,
                                tmplHER = cmm.parent();//default comment user panel
                            //
                            tmplHER.prev().remove(); //img of panel
                            //
                            //
                            if (isMORE) {
                                $('<div class="btn btn-transparent btn-sm panel-cmd more_flow_usr"><i class="ti-more-alt d-block"></i></div>').insertBefore(pnl_refresh);
                                //
                                if (r.__expa === 1) {//mobil UI, expand regis post
                                    pnl_refresh.remove();//bo nut refresh
                                } else {
                                    pnl_refresh.prev().addClass('d-none');//hide nut more_flow_usr  -> click nut +
                                };
                            };
                            //
                            if (mobi_raw['mobiui'] == 0) {//desktop 

                                tmplHER.replaceWith(usr_li);

                                //if (isMORE) pnl_refresh.remove();//bo nut refresh

                            } else {

                                //if (isMORE) pnl_refresh.prev().addClass('d-none');//hide nut more_flow_usr  -> click nut +

                                __req_tool_cmm(r.EmpName, cmm, e$l, r)

                                usr_li.insertBefore(tmplHER.addClass('colap_hed'));
                            };
                            //
                            if (_req_tools_USR.lastLEV == 0 || elUI.REG_COF.hed === 0) {//highest level
                                rEg.addClass('highest_flow_usr');
                            };
                            //
                        };
                        //
                        return e$l;
                    }
                    ,
                    _req_tools_USR = {}
                    ,
                    _flow_usr_txt = function (refEL, b, ifPlan) {//ifPlan=0:  boss plan se ko co clock
                        //
                        var uN = b.bosNa.split('\x09'),//tab key
                            leV = b.levNa.split('\x04'),
                            i_has_req_tools = _req_tools._me;//cache lai hien trang
                        //
                        if (aLAN.js_usr_info[1] == b.EmpID && aLAN.js_usr_info[0] == 2) {
                            $(prt.me).insertBefore(refEL.parent());
                            i_has_req_tools = b.EmpID;//cho no khoi
                        };
                        //
                        //
                        refEL.text(uN[0]);
                        refEL = refEL.next().text(uN[1]);
                        refEL = refEL.next().text(uN[2]);
                        //remove cai dong ho + time mesurement.
                        //
                        refEL = refEL.next();//keep br 
                        //
                        if (ifPlan === 0) {//remove cai dong ho dem thoi gian ra
                            while (refEL.next().length > 0) {
                                refEL.next().remove();
                            };
                            refEL.parent().append('<small>' + leV[0] + '</small>');//ten level
                        } else {//tool header danh cho boss dung xet duyet .
                            refEL = refEL.next();//cai dong ho
                            $('<div>' + leV[0] + '</div>').insertBefore(refEL);//ten level
                        };
                        //
                        return i_has_req_tools;
                        //
                    }
                    ,

                    flow_usr_info_find = function (usrid, fl1) {
                        if (fl1.EmpID == usrid) {
                            return fl1;
                        };
                        var doggy;
                        for (var zk = 0 ; zk < fl1.myBos.length; zk++) {
                            if (fl1.myBos[zk].EmpID == usrid) {
                                doggy = fl1.myBos[zk];
                                //
                                var chids = doggy.clientchids || (doggy.clientchids = []);
                                chids.push(fl1);
                                break;
                            } else {
                                doggy = flow_usr_info_find(usrid, fl1.myBos[zk]);
                            }
                        };
                        return doggy;
                    }
                    ,
                    flow_usr_info = function (usrid, fl1, regTYP) {

                        elUI.regDAT.usrMAP = elUI.regDAT.usrMAP || {};

                        if (elUI.regDAT.usrMAP[usrid]) {

                            if (elUI.regDAT.usrMAP[usrid].hasOwnProperty(regTYP)) {

                                return elUI.regDAT.usrMAP[usrid][regTYP];

                            };

                        } else {
                            elUI.regDAT.usrMAP[usrid] = {};
                        };
                        //
                        var it = flow_usr_info_find(usrid, fl1);
                        //
                        //quyen shared L0
                        //if (it) it.queL0 = fl1.quyen;
                        //
                        elUI.regDAT.usrMAP[usrid][regTYP] = it;
                        //
                        //if (it) {
                        //    elUI.regDAT.usrMAP[usrid] = it;
                        //};
                        //
                        return it;
                        //
                    }
                    ,
                    FILL_REPLY_CMM = function (r, fl1) {
                        //
                        //
                        //********* sau do la tat ca cac send trong lich su DESC
                        var SEN = elUI.regDAT.GOI[r.regid] || [],
                            hisLIN = [];
                        //
                        if (SEN.length == 0 && [103, 104].indexOf(r.regsta) > -1) {
                            var cmm = _REP_CMM(r);
                            if (aLAN.js_usr_info[1] == r.usrid) {
                                $(prt.me).insertBefore(cmm.parent());
                            };
                        };
                        //if (r.regsta > staOfs) {//no draf
                        //    //*********  reply comment main registration if it state >  staOfs
                        //    var cmm = _REP_CMM(r);
                        //    if (aLAN.js_usr_info[1] == r.usrid) {
                        //        $(prt.me).insertBefore(cmm.parent());
                        //    };
                        //    hisLIN.unshift(r);
                        //};
                        //

                        var isAMIN_BACK = SEN.length - 1;
                        //
                        for (var _s = SEN.length - 1; _s > -1; _s--) {
                            var senR = SEN[_s], findE;
                            if (!senR.EmpName) {
                                if (senR.usrid == r.usrid) {
                                    senR.EmpName = r.EmpName
                                } else {

                                    findE = flow_usr_info(senR.usrid, fl1, r.regtyp);

                                    senR.EmpName = !findE ?

                                        senR.byuser != -1 ? 'Admin' : senR.usrid :

                                        findE.bosNa;

                                };
                                //
                            };
                            //




                            if (senR.regsta == 105 && senR.byuser > -1) {
                                isAMIN_BACK = _s /*detect index 0 is addmin return*/
                            };




                            //
                            senR.__expa = r.__expa;//regis expand status ...
                            //
                            var cmm = _REP_CMM(senR, senR.regsta);
                            if (aLAN.js_usr_info[1] == senR.usrid) {
                                $(prt.me).insertBefore(cmm.parent());
                            };
                            //
                            //if (senR.regsta != 105) {//khong phai tra lai
                            //    activeI = [senR, _s, SEN.length - 1];
                            //};
                            //
                            hisLIN[senR.regsta == 105 ? 'shift' : 'unshift'](senR);
                            //
                        };
                        //
                        delete r.isAMIN_BACK;
                        //
                        if (r.regsta==105 && isAMIN_BACK == 0) {
                            //
                            r.isAMIN_BACK = SEN[0].byuser;
                            //case nay moi them vao admin tra lai thi se cho soan va goi ai
                            //
                        } else if (hisLIN.length > 0 && (fl1.bosNa == "0" || //co send his
                            (r.regsta != 105 && fl1.bosNa == "1"))) {//hien tai state tra lai, mode tra lai ve cuoi
                            return [hisLIN[0]];
                        };
                    }
                    ,

                    DIS_USR = function (fl1, e$l, r, rEg) {
                        //ola la den day tim duoc luong-nop-duyet cua registration nay
                        //tim dang ky nay thuoc flow nao?
                        var pers0n = fl1,
                            flow_usr = prt['flow_usr'].clone(),
                            li_usr = flow_usr.html(),
                            LIs = [],
                            LIhis = [],
                            SEN = elUI.regDAT.GOI[r.regid] || [],
                            //
                            atUSR = fl1 && FILL_REPLY_CMM(r, fl1)
                            ,

                            nopDuyet = function (b) {
                                var isNEWLI = 0, cmm, iSEN;
                                if (r.regsta > staOfs) {//cho duyet 
                                    //
                                    if (LIhis.length == 0 //hang thanh van thay duoc all downline la do dieu kien nay

                                        || r.usrid == b.EmpID) {// (node dau tien hoac dnag ky = at boss flow)
                                        //
                                        //
                                        if (atUSR || r.regsta === 101) {
                                            if (_req_tools._me > -1) {
                                                //
                                                //$(prt.me).insertBefore(cmm.parent());
                                                //
                                                if (_req_tools._me != b.EmpID) {
                                                    //debugger;
                                                    _req_tools._me = -1;//reset de cho hide nut goi + comment
                                                };
                                                //
                                            };
                                            //
                                            //
                                            isNEWLI = 1;//prevent class
                                            iSEN = !iSEN || iSEN.usrid == b.EmpID;//neu dung la cua boss nay access hoac la level -1
                                        };
                                    };
                                };
                                return [isNEWLI, [iSEN, cmm]];
                            }
                            ,
                            bossLI = function (upLIN, atLEVEL, mme) {
                                //


                                if (aLAN.js_usr_info[1] == mme.EmpID) {
                                    if (r.flowMark != fl1.EmpID ||

                                        mme.levNa.split('\x04')[2] == r.flowMark//chua phong ban multiboss minus*section 

                                        ) {

                                        rEg.data('ToiLaAi_In_This_Regis', mme);

                                    };
                                };




                                //
                                //move user login to index 0
                                if (!upLIN._reIndex0 && upLIN.length > 0) {
                                    for (var zz = upLIN.length - 1; zz > 0; zz--) {
                                        if (aLAN.js_usr_info[1] == upLIN[zz].EmpID) {
                                            upLIN.unshift(upLIN.splice(zz, 1)[0]);//doi ra dau
                                            break;
                                        };
                                    };
                                    //
                                    //neu validE -1*SectionID
                                    //chu y, ************* hien tai chua su dung code nay vi heavy search index *************************************
                                    //////////upLIN.forEach(function (b, irm) {
                                    //////////    if (b.validE.indexOf(fl1.EmpID) > -1) {
                                    //////////        b.validE.splice(irm, 1);
                                    //////////        b.validE = b.validE.concat(fl1.validE);//lay valid emp toan he thong vao thay the section
                                    //////////    };
                                    //////////});
                                    //
                                    //
                                    upLIN._reIndex0 = 1;//danh dau la level boss nay da duoc sap xep lai index 0 cho user login
                                    //
                                };




                                //

                                //
                                //upLIN= upLine /myBos
                                for (var i = 0 ; i < upLIN.length ; i++) {

                                    var b = upLIN[i];
                                    if (LIhis.indexOf(b.EmpID) > -1) {//booss nay da co roi
                                        //
                                        continue;
                                    };
                                    ////
                                    //
                                    //delete b.__tempREP;
                                    //
                                    if (i == 0) {//chi index 0 moi co LI moi
                                        //
                                        if (LIhis.indexOf(b.EmpID) == -1) {
                                            //
                                            var newLI = $(li_usr),
                                                planORpass = nopDuyet(b);
                                            //
                                            //
                                            //
                                            met_lazy(btoa(b.EmpID), newLI);
                                            //
                                            //
                                            //
                                            atLEVEL = newLI;//update atLevel
                                            //
                                            if (planORpass[0] === 1) {//comment reply
                                                //
                                                //mme.__tempREP = planORpass[1];//boss reply
                                                //
                                                _req_tools_USR = {
                                                    lastLEV: b.myBos.length,
                                                    usrid: r.usrid, tg: r.tg, EmpName: b.bosNa, newLI: atLEVEL
                                                };//(***)
                                                _req_tools._me = _flow_usr_txt(atLEVEL.find('.user-name'), b, 0);//.text(b.bosNa);
                                                //
                                            } else {//new li user agent plan flow 
                                                //
                                                //du me da gap van de nay 1 lan nao roi, nhung ko nho !!!
                                                LIs.unshift(newLI);
                                                _flow_usr_txt(LIs[0].find('.user-name'), b, 0);// .text(b.bosNa);
                                                //
                                            };
                                        };

                                    } else {
                                        //la dong duyet !!!
                                        if (atLEVEL) {//neu plan nopduyet thi se hien thi, khong se duoc replaceWith body Head Tool
                                            //
                                            var prevBOS_REP = null;
                                            //if (r.regsta > staOfs) {//cho duyet 
                                            //    for (var zm = 0 ; zm < i; zm++) {//nhung flow boss previous
                                            //        var __temp = upLIN[zm].__tempREP;
                                            //        if (__temp) {//co cache temp comment reply
                                            //            //_req_tools_USR.REP.prev().text(b.bosNa)
                                            //            if (__temp[0] === true) {
                                            //                //prevBOS_REP van bang null; va no se ignore (***)
                                            //                break;
                                            //            } else {
                                            //                prevBOS_REP = __temp[1];
                                            //            }
                                            //        };
                                            //    };
                                            //    //neu chua co boss nao direct
                                            //    if (prevBOS_REP) {//(***)
                                            //        SEN.some(function (gs) {
                                            //            if (gs.usrid===b.EmpID) {
                                            //                prevBOS_REP//at comment before add
                                            //                    .prev().text(b.bosNa)
                                            //                return true;
                                            //            };
                                            //        });
                                            //    };
                                            //};
                                            //
                                            //
                                            if (prevBOS_REP === null) {
                                                //
                                                var U0 = atLEVEL.find('.ticket-user'),
                                                    morU = $(li_usr).find('.ticket-user').clone();

                                                if (U0.length > elUI.cmm_W) {
                                                    //
                                                    morU.toggleClass('d-flex d-none has_more_boss');
                                                    //
                                                };

                                                //
                                                met_lazy(btoa(b.EmpID), morU);
                                                //
                                                _req_tools._me = _flow_usr_txt(morU.find('.user-name'), b, 0);//.text(b.bosNa);
                                                //chi con insertAfter vi co code move index of login user to [0]


                                                morU.addClass(elUI.cmm_Wi < 400 ? '' : 'ml-4').insertBefore(atLEVEL.find('.ticket-type'));


                                                //
                                                //morU.addClass('ml-4').appendTo(atLEVEL); //;.insertAfter(U0);
                                                //
                                                //console.log(atLEVEL.html() + new Date().getTime());
                                                //
                                                //if (elUI.lan.rawD._fl0wself && elUI.lan.rawD._fl0wself.EmpID === b.EmpID) {
                                                //    //boss dong cap nhung dang login thi uu tien o phia ngoai
                                                //    morU.insertBefore(U0.addClass('ml-4'));
                                                //} else {
                                                //morU.addClass('ml-4').insertAfter(U0);
                                                //};
                                            };
                                        };
                                    };
                                    //
                                    LIhis.unshift(b.EmpID);//luu dau la boss nay da add roi
                                    //
                                    bossLI(b.myBos, LIs[0], b);// 
                                    //
                                };
                            }
                            ,
                            filterSUB = false
                            ,
                            regisEmp_Start_Flow = function (__pers) {
                                //
                                //
                                if (filterSUB) return;
                                //
                                //
                                for (var k = 0; k < __pers.length; k++) {
                                    //
                                    if (filterSUB) break;
                                    //
                                    //----- lay map no dung cho menu phe duyet ............
                                    flow_usr_info(__pers[k].EmpID, fl1, r.regtyp);
                                    //
                                    //
                                    //
                                    //if (filterSUB) break;
                                    //
                                    //neu co lich su comment reply thi uu tien no !!!
                                    var dogID = atUSR && atUSR[0].usrid || r.usrid;
                                    //
                                    if (__pers[k].EmpID == dogID) {//flow boss = usr registration
                                        //
                                        //bat dau flow tu cho nay 
                                        //
                                        if (__pers[k].bos_OnlyMe && __pers[k].EmpID == r.usrid) {
                                            pers0n = __pers[k].bos_OnlyMe;//Mr.Vu di flow khac
                                        } else {
                                            pers0n = __pers[k].myBos;
                                        };
                                        ME = __pers[k];
                                        //
                                        //co Van nam trong ban xet duyet nhung anh Vu dang login
                                        filterSUB = true;
                                        break;
                                    };
                                    //
                                    //tim them cap nua ...
                                    //__pers = __pers[k].myBos;
                                    //
                                    //if (!filterSUB && __pers.length > 0) regisEmp_Start_Flow(__pers);
                                    //
                                    if (!filterSUB && __pers[k].myBos.length > 0) regisEmp_Start_Flow(__pers[k].myBos);
                                    //
                                    //
                                };
                                //
                                //if (!filterSUB && __pers.length > 0) regisEmp_Start_Flow(__pers);
                                //
                            };
                        //
                        //lam sach list-group ulDU_ME flow_usr
                        flow_usr.empty();//xoa bo het LI cua UL
                        //




                        if (!fl1 || [3, 4].indexOf(r.regsta - staOfs) > -1) {//3: duyet, 4:ko duyet
                            return;
                        };











                        //tan dung variable pers0n de tim boss that su cua employees registratrion
                        var pigUSR = atUSR && atUSR[0].usrid || null,
                            ME = pers0n;

                        //
                        pers0n = pers0n.myBos;
                        //
                        if (elUI.lan.rawD._fl0wself &&
                            elUI.lan.rawD._fl0wself[r.regtyp] && [r.usrid, pigUSR].indexOf(elUI.lan.rawD._fl0wself[r.regtyp].EmpID) > -1) {//user registration == user at flow
                            //
                            ME = _getME(r, pigUSR);
                            //
                            //
                            //chi Hang duyet cho 1 downline khac flow, nen phai reset and recalc flow
                            //chi hang dang ky cho Van
                            if (ME.levNa.split('\x04')[2] != r.flowMark && r.regsta != 100) {
                                //
                                delete elUI.regDAT.usrMAP[pigUSR];
                                flow_usr_info(ME.EmpID, fl1, r.regtyp);
                                //
                                //
                                ME = _getME(r, pigUSR);
                                //
                            };
                            //
                            //
                            //
                            _req_tools._me = ME.EmpID;//flag danh dau se add location icon vao header tool
                            //
                            //
                            if (ME.bos_OnlyMe && ME.EmpID == r.usrid) {
                                //mr.Vu level2, nen nhung dang ky cua ong se qua Mss.Trang
                                pers0n = ME.bos_OnlyMe;
                            } else {
                                pers0n = ME.myBos;
                            };
                            //
                        } else if (r.usrid == fl1.EmpID) {

                            //nguoi dang ky dau quy trinh ...

                        } else {
                            //phai tinh xuat phat diem cua employees registration
                            if (pers0n.length > 0) {
                                //
                                //
                                //----- lay map no dung cho menu phe duyet ............
                                if (ME.EmpID > 0) flow_usr_info(ME.EmpID, fl1, r.regtyp);//chi co boss mo detect
                                //
                                //
                                //
                                regisEmp_Start_Flow(pers0n);
                                //
                            };
                            //
                            //
                        };
                        if (aLAN.js_usr_info[1] == r.usrid) {// user login == user registration
                            _req_tools._me = r.usrid;//flag danh dau se add location icon vao header tool
                        };
                        //
                        bossLI(pers0n, LIs[0], ME);
                        //
                        if (elUI.REG_COF.hed === 1) {
                            //
                            e$l.append(flow_usr.append(LIs));//chi add khi config 
                            //
                            flow_usr.find('.has_more_boss').parent().find('.ticket-state').toggleClass('bg-success bg-primary').addClass('more_flow_usr').html('<i class="fa fa-ellipsis-h"></i>');
                            //
                        };
                        //
                    }
                    ,
                    _getME = function (r, pigUSR) {
                        //do cat ra nen ko quan tam null
                        return elUI.regDAT.usrMAP && elUI.regDAT.usrMAP[pigUSR]//me gio la cua history nop duyet

                                && elUI.regDAT.usrMAP[pigUSR][r.regtyp]

                                || elUI.lan.rawD._fl0wself[r.regtyp];
                    }
                    ,
                    _flow_usr = function (e$l, r, rEg) {
                        var isN = 1, fl0 = elUI.lan.rawD.fl0w;
                        //
                        if (fl0) {//co flow cho user login
                            //
                            for (var z = 0; z < fl0.length; z += 2) {
                                if (fl0[z].indexOf(r.usrid) > -1 || fl0[z].indexOf(r.flowMark) > -1) {//regis user contain in array
                                    //
                                    var fl1 = fl0[z + 1];
                                    DIS_USR(
                                        fl1.flowPERSON[r.regtyp] /*index 1: LV flow, index:2:OT*/
                                        , e$l, r, rEg);
                                    //
                                    isN = 0;//reset flag
                                    break;//thoi ko loop nua.
                                };
                            };
                            //
                        };

                        if (isN === 1) {
                            //truong hop ko co flow ...
                            rEg.addClass('none_flow_usr');
                        };
                    }
                    ,
                    _plan$ = function (e$l, r, rEg) {
                        //se xu ly number recore o phia tren
                        //e$l.find('.reco-no').text(r.oid)
                        //    .addClass([4].indexOf(r.regsta-staOfs) > -1 ? 'red' : (r.regsta == 103 ? 'green' : 'grey'));

                        $('<h3><span class="reco-no ' +
                            ([4].indexOf(r.regsta - staOfs) > -1 ? 'red' : (r.regsta == 103 ? 'green' : 'grey')) +
                            '">' + r.oid + '</span></h3>')//<span class="reco-no grey greater999">1000</span><span class="reco-no grey greater99">100</span>
.prependTo(rEg);

                        //
                        e$l.attr('id', 'reg_no_' + r.regid);
                        //
                        if (r.__expa === 1) {
                            //khi addnew or edit regis , mobi ui thi se show 
                            e$l.addClass('show');
                        };
                        //   
                        //
                        _flow_usr(e$l, r, rEg);
                        return e$l;
                    }
                    ,
                    _plan = function (e$l, r, rEg) {

                        e$l.attr('id', 'reg_no_' + r.regid)
                        //teml mac dinh la hide
                        .addClass('show');//desktop default show


                        _flow_usr(e$l, r, rEg);

                        return e$l;
                    }
                    ,
                    _passed = function (r) {
                        //
                        var passed = $(prt['passed']),
                            isExpa = r.__expa === 1; //khi addnew or edit regis , mobi ui thi se show

                        //
                        if (mobi_raw['mobiui'] == 0) {//desktop 
                            passed.addClass('mb-0');
                            isExpa = true;
                            //
                            r.__expa = 1;//du me update lai
                            //
                        };
                        //
                        if (isExpa) {
                            //teml mac dinh la collapses
                            passed.removeClass('collapses');//expand state
                        };
                        //
                        //
                        return passed;
                    }
                    ,
                    _BODY = function (r) {
                        var bod = $(prt['bod']);
                        return bod;
                    }
                    ,
                    _bod_dat = function (r, rEg) {
                        //
                        var bod_dat = $(prt['bod_dat']),
                            nhap_cmm = bod_dat.find('.nhap_cmm'),
                            dat_reg = $('<div>' + prt['bod_dat_reg'] + '</div>'),
                            dat_emps = $(prt['bod_dat_reg']).first().toggleClass('reg_dat valid_emp').addClass('mb-3'),
                            dat_D = _deDATNO(r.regid),
                            dat_E = _deDATNO(r.regid, 'E'),
                            quye = [],
                            regTit = '',//noi dung dang ky
                            ME,
                            reO;

                        //
                        //
                        //load registration data
                        if (dat_D.length > 0) {
                            //
                            if (r.regtyp == 1) {//nghi vang
                                //
                                if (dat_D[0].selo == 0) {//nguyen ngay //fO.tong  - modify
                                    regTit = _gLA(28, 1);
                                } else {
                                    regTit = _gLA(25 + dat_D[0].tresom);//=26:vao tre ; 27:vesom
                                };
                            } else {//tang ca
                                regTit = _gLA(28, 2);
                            };
                            //

                            //
                            var isView = r.regsta == staOfs ||//soan thao
                                       (r.regsta == staOfs + 5 //105: tra ve
                                                && aLAN.js_usr_info[1] == r.usrid
                                                && _req_tools._me !== -1); //user login bang voi dang ky) {//co chk

                            reO = _req_tools._me === -1 || isView ? 'chi__doc' : '';//prevent user click checkbox
                            //
                            //
                            var tarID = 'datno_' + r.regid,

                            lstTic = dat_reg.find('.widget-caption').text(regTit && regTit.toUpperCase())
                            .next().attr('data-target', '#' + tarID)//set button plus/minus
                            .addClass(reO);
                            //
                            //*******den day het vai tro cua regTit nen gan cho no 1 nhiem vu khac
                            regTit = lstTic.parent().next().attr('id', tarID);//panel registration content
                            //
                            regTit.addClass(reO);//prevent user click checkbox
                            //
                            if (mobi_raw['mobiui'] == 0 || r.__expa === 1) {//desktop UI
                                //mobil US build when click plus button
                                _lst_REG(regTit, dat_D, r, reO != '');
                                regTit.addClass('show');
                                lstTic.removeClass('collapsed');
                                //
                                //dung cho ch do mobile
                                regTit.addClass('xongroi');
                                //
                            };
                            //
                            regTit = dat_reg.children().last().children();
                            $(regTit[0]).append('&nbsp;' + r.tepcnt);// count file dinh kem
                            $(regTit[1]).append('&nbsp;' + r.empcnt); // count nhan vien dinh kiem
                            //
                            //
                            //lay tam variable  $(regTit[2])
                            tarID = $(regTit[2]);
                            if (isView === true) {
                                tarID.remove();// bo nut xem dang ky, vi dung edit
                            } else {
                                //doi set tarID.attr xuong duoi (***)
                                //
                                //du me ma nhan vien nhieu khi so 1, rat nguy hiem !!!
                                quye = [tarID, [1, 2, 3].indexOf(_req_tools._me) > -1 ? 111111111 + _req_tools._me : _req_tools._me, r.regid, -1];
                                //
                            };
                            //
                            //
                            dat_reg.insertBefore(nhap_cmm);
                            //
                        };
                        //
                        //
                        if (_req_tools._me === -1 && aLAN.js_usr_info[0] == 2) {

                            nhap_cmm.remove();

                            //if (mobi_raw['mobiui'] == 0) {//desktop )
                            //    mobi_raw['mobi_cmm'].trigger('nut_dume');//du me cai nut ben grid ...
                            //};


                        } else {
                            //
                            if (elUI.downline == 2) {//login bang user va dang ky bang user
                                //
                                if (r.utyp == 1) {
                                    nhap_cmm.find('textarea.re_ca_bo').text(r.notes)
                                    .prop("readonly", true);
                                    //
                                    //
                                    quye[3] = mn_QUYE.d0(null, r, nhap_cmm, [1]);
                                    //
                                } else {
                                    var SEN = elUI.regDAT.GOI[r.regid];
                                    if (SEN && SEN.length > 0 && SEN[0].byuser > -1) {
                                        //
                                        //do admin handler
                                        //**** ngay 2023/07/20 cho show de co nut admin duyet (1) & (2)
                                        //nhap_cmm.remove();(1)
                                        //
                                        //
                                        quye[3] = 'adminDone';//khi xem lai thi se lock nut nop
                                        //quye[1] = 0; (2)//triet tieu dieu kien (adminDone 65535)
                                        //
                                    };
                                };
                                //
                            } else {
                                //
                                ME = rEg.data('ToiLaAi_In_This_Regis') || elUI.lan.rawD._fl0wself && elUI.lan.rawD._fl0wself[r.regtyp];
                                //
                                if (ME && ME.EmpID == _req_tools._me) {//user registration == user at flow
                                    //
                                    quye[3] = mn_QUYE.d0(ME, r, nhap_cmm, [1]);
                                    //
                                    //
                                    if (quye[3] == '3' //quyen duyet

                                        || ME.myBos.length == 0 && (!ME.bos_OnlyMe || ME.bos_OnlyMe.length == 0)) {//highest

                                        rEg.addClass('highest_flow_usr');
                                    };
                                    //
                                    //
                                };
                            };
                            //
                            //
                            var isN0T = '';
                            if (r.regsta === staOfs ||//chi moi luu tam

                                //regis bi tra lai, editor co quyen modify regis data ... + comment
                                        r.regsta == 105 && r.notes && (isN0T = r.notes.split('\x04\x05'), isN0T[1] == '\x06')

                                    ) {

                                nhap_cmm.find('textarea.re_ca_bo').text(isN0T.length > 0 ? isN0T[0] : r.notes);

                            };
                            //
                        };
                        //
                        //
                        if (dat_E.length > 0) {
                            //
                            var eID = 'empsno_' + r.regid, ulE;
                            //
                            //
                            if (ME) {
                                //bind coi nhu 1 fn moi ...
                                ulE = mn_QUYE.allow_valid_e.bind([mn_QUYE, ME, r, 'regid', quye[3]])();
                                if (ulE) {
                                    reO = ulE[0];
                                    quye[3] = ulE[1];//modify lai quyen [3] = 'allow select'
                                };
                            };
                            //
                            //
                            //if (r.regtyp == 1) {//nghi vang
                            //    //nghiep vu nghi vang chi cap duyet moi duoc thay doi emp
                            //    reO = quye[3] != 3 ? 'chi__doc' : '';//prevent user click checkbox
                            //};
                            //
                            //
                            ulE = dat_emps.find('.widget-caption').empty();
                            ulE.prev().toggleClass('ti-ink-pen fa').addClass('fa-users');
                            ulE.next().attr('data-target', '#' + eID)//set button plus/minus
                            .addClass(reO);
                            //
                            //*******den day het vai tro cua regTit nen gan cho no 1 nhiem vu khac
                            regTit = ulE.parent().next().attr('id', eID);//panel registration content
                            //
                            if (mobi_raw['mobiui'] == 0 || r.__expa === 1) {//desktop UI
                                //mobil US build when click plus button
                                _lst_EMPS(regTit, dat_E, r, reO != '');
                                regTit.addClass('show');
                                ulE.next().removeClass('collapsed');

                                //dung cho ch do mobile
                                regTit.addClass('xongroi');
                                //
                            };
                            //
                            ulE.append($('<span class="m-0 d-inline-block  pr-2" style="font-size:1.1rem">(' + dat_E.length + ')</span><span>' + (elUI.lan.js_011_13 || 'Apply To Employees').toLocaleUpperCase() + '</span>'));
                            dat_emps.appendTo(dat_reg);
                        };
                        //
                        //(***)
                        quye[0] && quye[0/*tarID*/].attr('xem', btoa(quye[1] + '_' + quye[2] + '|' + quye[3]));
                        //
                        return bod_dat;
                    }
                    ,
                    _bod_rep = function (r) {
                        //
                        var rep = _bod_rep._apply[0];
                        for (var i = 1; i < _bod_rep._apply.length; i++) {
                            rep = _bod_rep._apply[i].append(rep);
                        };
                        return rep;
                    }
                    ,
                    _REP_CMM = function (r, sta) {

                        var rep = $(prt['bod_rep']),

                            cmm = rep.find('.commenter-name .comment-time').text(/*timeAgo*/nga_sDt24(new Date(r.tg))),

                            lzy = btoa(r.acno || r.usrid),

                            uImg = cmm.prev().text(r.EmpName).parent().prev().find("img").attr('data-lazy', lzy);

                        //
                        if (r.__expa === 1) {//khi expand thi moi load image
                            //
                            if (!elUI.ePic.hasOwnProperty(lzy)) {
                                //
                                flowIMG.bind([uImg[0], lzy, elUI.empI])();
                                //
                            } else {
                                uImg.attr('src', elUI.ePic[lzy]);
                            };
                            //
                        };
                        //
                        rep.find('.comment-txt.more').text(r.notes);
                        //
                        var isOK = [3, 4, 5].indexOf(sta - staOfs);
                        if (isOK > -1) {
                            cmm.parent().parent().addClass(prt.si$[isOK][0]).prepend('<h3 class="m-0"><i class="fa ' + prt.si$[isOK][1] + '"></i></h3>')
                            .next().addClass(prt.si$[isOK][0]);
                        };
                        //
                        if (elUI.REG_COF.fot === 1) _bod_rep._apply.push(rep); // ga do vao day thay the khi build pass-body
                        //
                        rep.find('.comment-meta').html('<div class="comment-like"><i class="fa fa-clock-o" aria-hidden="true"></i> ' + timeAgo(new Date(r.tg)) + '</div>');
                        //
                        return cmm;
                    }
                    ,
                    _rebuild = function (r) {
                        //
                        var id = r.regid, rEg = tmpl.clone();
                        //
                        elUI.cmm_W = mobi_raw['mobi_cmm'].width() > 600 ? 2 : 1;
                        elUI.cmm_Wi = mobi_raw['mobi_cmm'].width();
                        //
                        if (mobi_raw['mobiui'] == 0 || apisvr.review_regis) r.__expa = 1;//default expand post regis
                        //
                        //
                        _req_tools._me = -1;//reset at me location icon
                        _bod_rep._apply = [];//reset , _flow_usr se tinh toan user apply xet duyet va store tam this variable
                        _req_tools_USR = { usrid: r.usrid, tg: r.tg, EmpName: r.EmpName };
                        //
                        //[0] plan nop duyet
                        rEg.append(_plan($(prt['plan']), r, rEg));
                        //
                        //[1] passed= header + body
                        rEg.append(_passed(r).append(

                                _req_tools(r, rEg),//[0] header co button expand collapse, image ...

                                _BODY(r).append// [1] panel-body 
                                    (
                                        _bod_dat(r, rEg), // [0] hien thi thong tin dang ky + comment + nut goi
                                        _bod_rep(r) //[1] nhung ai da duyet
                                    )
                            )
                        )//bao mat cac nut lenh quy trinh theo data cua registration
                        .data(_req_tools._me !== -1 || elUI.downline == 2 ? { 'id': id, 'regsta': r.regsta, 'usrid': r.usrid, 'regtyp': r.regtyp, 'utyp': r.utyp, 'hol': r.hol } : {});
                        //
                        //
                        //desktop bo class mb-4 cho no sat voi emp card
                        if (mobi_raw['mobiui'] == 0) {
                            //
                            rEg.removeClass('mb-4');
                            //
                        };
                        //
                        //
                        if (r.__expa === 1) {//khi expand thi moi load image
                            //
                            rEg.find('img.plan_agent:not([src]').each(function (idx, im) {
                                //
                                flowIMG.bind([im, this.getAttribute('data-lazy'), elUI.bosI])();
                                //
                            });
                            //
                        };
                        //
                        return rEg;
                    };

                tmpl.children().each(function (ix, ht) {
                    if (ix == 0) {
                        //
                        //
                        var flow_usr = $(ht).find('ul.ulDU_ME');
                        //
                        if (mobi_raw['mobiui'] == 1) {//Mobile
                            //$('<h3><span class="reco-no">1</span></h3>')//<span class="reco-no grey greater999">1000</span><span class="reco-no grey greater99">100</span>
                            //.insertBefore(flow_usr);
                            _plan = _plan$;//ham xu ly rieng
                        };
                        prt['flow_usr'] = flow_usr.clone();//li user
                        flow_usr.remove();
                        //
                        prt['plan'] = ht.outerHTML;//act_cmm_tmpl/collapse show - plan flow nop duyet

                    } else {
                        //act_cmm_tmpl/cre_ca_bo
                        prt['hed'] = ht.children[0].outerHTML;//header;
                        //
                        //act_cmm_tmpl/cre_ca_bo/panel-body
                        var bod = ht.children[1],
                            cmdSEN = $(bod.children[0]).find('textarea.re_ca_bo').val('');
                        //
                        if (_gLA(32)) {
                            cmdSEN.attr("placeholder", _gLA(32, 11));//text input
                        };
                        //
                        var nut = $(cmdSEN.next().children()[0]);
                        if (aLAN.js_usr_info[0] == 1) {//user login
                            nut.next().text("")
                                .next().find('button').html('<i class="fa fa-key" aria-hidden="true"></i> ' + (_gLA(29, 14) || 'Admin'));
                            //
                            //nut dung bat su kien click nut duyet-ko duyet tu form view
                            nut.addClass('d-none');
                            //
                        } else {
                            nut.append(_gLA(29, 11) || "Send")
                            .next().text(_gLA(29, 9) || 'or action')
                            .next().find('.more_flow_act').text(_gLA(29, 8) || 'more ...');
                        };
                        //
                        //more_flow_act
                        cmdSEN.parent().prev().find('.widget-caption').html(_gLA(29, 10));
                        //
                        //
                        //bod chia lam 2, [0]: chua thong tin dang ky [1] chua comment reply
                        //$(bod.children[0]).find('.widget-box.reg_dat').remove();//nhap_cmm
                        var bod_dat_reg = cmdSEN.closest('.nhap_cmm').prev();
                        bod_dat_reg.find('.comment-reply').addClass('view_regis').first().text(_gLA(32, 14));
                        //
                        //
                        //dung de hien thi error trung thoi gian dang ky
                        elUI['regtable'] = bod_dat_reg.find('.widget-main').html();
                        //
                        //
                        prt['bod_dat_reg'] = bod_dat_reg.html();//sau nay cho de xu ly
                        bod_dat_reg.remove();
                        //
                        prt['bod_dat'] = bod.children[0].outerHTML;//thong tin dang ky
                        //
                        prt['bod_rep'] = bod.children[1].outerHTML;//template reply
                        //
                        bod.innerHTML = "";//remove all child
                        prt['bod'] = bod.outerHTML;
                        //
                        ht.innerHTML = "";//remove all child
                        prt['passed'] = ht.outerHTML;//plan flow nop duyet
                    };
                });
                //
                tmpl.empty();
                //                
                return {
                    rebuild: _rebuild
                };
            }

            ,

            met_lazy = function (lzy, li) {
                if (!elUI.ePic.hasOwnProperty(lzy)) {
                    li.find('img.plan_agent').attr('data-lazy', lzy);
                } else {
                    li.find('img.plan_agent').attr('src', elUI.ePic[lzy])
                    .attr('data-lazy', lzy);//dung de post app_bubble.
                };
            }

            ,

            flowIMG = function () {
                //
                var tha = this,
                    im = tha[0],
                    lzy = tha[1],

                    defI = tha[2],

                    ig = apisvr._src/*'https://timegold.liwayway.com.vn:3004/aap/epic/'*/ + atob(lzy) + '.jpg' + src$id;
                //
                //
                if (elUI.ePic.hasOwnProperty(lzy)) {
                    //
                    //chinh xac la real img
                    ig = elUI.ePic[lzy];
                    //
                } else {
                    $(im).on('error', function () {
                        //
                        $(im).off('load error');
                        //
                        im.setAttribute('src', defI);
                        elUI.ePic[lzy] = defI;
                        //
                    }).on('load', function () {
                        elUI.ePic[lzy] = im.getAttribute('src');
                    });
                };
                //
                im.setAttribute('src', ig);
                //
                //$('<img>').attr('src', ig + '?t=' + new Date().getTime()).on('load', function (e) {
                //    elUI.ePic[lzy] = this.getAttribute('src');
                //    im.setAttribute('src', elUI.ePic[lzy]);
                //}).on('error', function (e) {
                //    elUI.ePic[lzy] = defI;
                //    im.setAttribute('src', defI);
                //});
            }

            ,

            app_bubble = function (_toka, _r, act) {
                //
                //chan code that liway
                //return;

                //
                //console.log('app_bubble: ',.length, ' toka: ', _toka);
                //
                //debugger;

                var bos = [], cate = [], _topic = aLAN.js_usr_info[14] || '';

                if (_topic == '') return;

                if (act == '101'
                    || act == '30' //user goi lai sau khi bi tra
                    || act == '5' //tra lai
                    || act == '3' //duyet
                    || act == '4' //k.duyet

                    ) {//chu y array khi encode se loi array
                    //
                    //debugger;
                    //
                    const rg = mobi_raw['mobi_cmm'].find('#reg_no_' + _r.regid).next().find('img.plan_agent');

                    bos = [].slice.call(rg, 0).reduce(function (a, b) {
                        a.push($(b).attr('data-lazy'));
                        cate.push(0);//goi category 0 new bubble
                        return a;
                    }, []);
                    //
                    //
                    //
                    if (act == '3' || act == '4' || act == '5') { //tra lai
                        //
                        //equal level = boss except me
                        cate = Array.apply(null, Array(bos.length)).map(function () {
                            return 1; //category cancel bubble if exists
                        });
                        //
                        if (_r.oldsta == 101) {
                            //add to bos nguoi bi tra lai ...
                            if (_r.utyp == 2) {//ko tra bubble cho admin !
                                bos.push(btoa(_r.usrid));//base64 cho dong bo voi array bos
                                cate.push(2);//category new bubble nguoi bi tra lai
                            }
                        } else {
                            //tra lai cho nguoi chuyen tiep ...
                            const reTO = elUI.regDAT.GOI[_r.regid];
                            if (reTO && reTO.length > 0) {//ko tra bubble cho admin !
                                if (reTO[0].byuser == '-1') {
                                    bos.push(btoa(reTO[0].usrid));//base64 cho dong bo voi array bos
                                    cate.push(2);//category new bubble nguoi bi tra lai
                                }
                            }
                        }
                    };
                };
                //
                //
                //### RULE 1: ko goi buble cho ban than toi.
                const zd = bos.indexOf(btoa(aLAN.js_usr_info[1]));
                //
                //
                //access bang app thi bo ra, neu web thi ko bo de thu hoi app cua chinh ban than toi.
                if (zd !== -1 && apisvr.review_regis) {
                    bos.splice(zd, 1);//bo nguoi nhan nay ra
                    cate.splice(zd, 1);//bo category index tuong ung
                };
                //####



                const demi = String.fromCharCode(29)
                , cate0 = ["txt hiển thị cho send"].join(demi) //[0] new bubble NEXT join voi nhau bang chr(29)
                , cate1 = ["txt hiển thị cancel"].join(demi)//[1]  cancel bubble if exists
                , cate2 = ["txt hiển thị return"].join(demi)//[1]  new bubble  BACK

                // lay thong tin nhan vien de lay ma gioi tinh
                , empINFO = fillMASTER.getE({ usrid: _r.usrid, utyp: 2 })

                , fbaseI = aLAN.js_usr_info.slice(0, 14);




                //debugger;

                $.ajax({

                    type: 'POST',
                    url: "https://fcm.googleapis.com/fcm/send?t=" + new Date().getTime(),
                    headers: {
                        Authorization: 'key=AAAASE_dgkE:APA91bEkaAYfzNQ-YOsHEa9HgHfcNE03N4N_UOVDrfurAONv913EGsJEwsZ0I19BA91SoFFFL4hAlLfIVbdbynPR4YgCP7X9TD-_RAlF9Mj0LQp4Y1fJiV7GQpdwqubmlUCsvy02doI-'
                    },
                    contentType: 'application/json',
                    dataType: 'json',
                    data: JSON.stringify({

                        "to": "/topics/" + _topic,

                        "collapse_key": "type_a",
                        "data": {
                            //"body": "Body of eew Your Notification in Data",

                            "tit": "Title of ee Your Notification in Title",

                            "toka": _toka,

                            "bos": JSON.stringify(bos),//sep tren truc tiep cua toi (direct boss)

                            "cate": JSON.stringify(cate), // category cua tung bos tuong ung.

                            //"usr": JSON.stringify(aLAN.js_usr_info), //nguoi dang handle action registration (login user)

                            "msg": [cate0, cate1, cate2],

                            "inf": [act, _r.regid, _r.regtyp,

                                _r.usrid,//[3]se la ma nhan thong tin bubble tra ve hoa duyet ko duyet (apply person)

                                _r.utyp,

                                "",//du phong
                                "",//du phong
                                "",//du phong

                                 (empINFO ? empINFO.gt : '1')//index 8 - default Nam

                            ].concat(fbaseI)


                        },
                        "priority": "high",
                        "delay_while_idle": false,
                        "time_to_live": 0
                    }),
                    success: function (responseData) {
                        //debugger;
                        //alert("Success");
                    },
                    error: function (jqXhr, textStatus, errorThrown) {
                        //debugger;
                        /*alert("Fail");*/   // alerting "Fail" isn't useful in case of an error...
                        //alert("Status: " + textStatus + "\nError: " + errorThrown);
                    }
                });
                //
            }
            ,
            chat_ui = function (regis_dat) {
                try {
                    //function nay duoc append vao liway_android_index.js khi load template buble_msg_demo.html.
                    const NA__VE=w0w['_cordovaNative'] && w0w._cordovaNative.__;
                    if (NA__VE) {
                        //
                        //
                        NA__VE && NA__VE.chat_ui && w0w._cordovaNative.__.chat_ui(elUI, flowIMG, regis_dat);
                        //
                        //
                        //debugger;
                        //console.log(req_frm);

                        if (regis_dat) {
                            //goi hanh dong nop / duyet sang native app dong bo main app & bubble.
                            //
                            regis_dat[0] = [];//tam thoi index 0 chua dung nen cho no = []
                            //
                            NA__VE.hieu_comjs.apply(null, ['APPR_ACT', encodeURIComponent(JSON.stringify(regis_dat))]);
                            //
                        }
                    };
                    //
                } catch (e) {
                };
            };


        this.init = function (frmEL, cb, tabId, clickArgs, tabProps) {
            _tabId = tabId;
            //
            $mainO = cb('dbEngine');
            //
            aLAN.js_usr_info = window[st0('2')](atob(aLAN.js_u$r_info)).split('\x04');
            //
            //nhung nhan vien ns co quyen import excel danh sach nhan vien hieu luc khi dang ky.
            elUI.quy_imp_excel = [5417, 5418, 5419, 5420, 5843, 5876, 6823].indexOf(parseInt(aLAN.js_usr_info[1])) > -1;
            //
            //
            var REG_COF = st('getItem', window[st0('1')](elUI.dbNa + "__" +  aLAN.js_usr_info[1])), //default ko nhin thay , vi LIWAY muon simple
                renderUI = $.Deferred(),
                loadOPT = {},
                init_dataDIV = frmEL.find('.init_data'),
                init_data = JSON.parse(atob(init_dataDIV.text())),

                divfrm = frmEL.find('.divfrm'),

                scrB = frmEL[0].getBoundingClientRect(),

                floatBTN_CLK = function (e) {
                    var btn = $(e.currentTarget);
                    admin$.DEV(function () {
                        var myOP = {
                            cb: function (a) {
                                btn.toggleClass("_close _open");
                            }
                        };
                        //
                        tuychon(frmEL, e, myOP);
                        //
                    });
                },

                arr_lang = function (el) {
                    el.find('[arr-lang]').each(function (idx, el) {
                        var key = el.getAttribute('arr-lang'),
                            laz = elUI.lan[key];
                        if (laz) {
                            $(el).html(laz[el.getAttribute('lanidx')]);
                        };
                    });
                    return el;
                }
                ,
                reLOAD = function (e,mnu) {
                    srclocked(true);
                    //
                    if (mnu) {
                        regis_hed_fot(e, mnu, false);
                    };
                    //
                    setTimeout(function () {
                        //
                        //mod:1 reload datasource
                        if (mobi_raw['mobiui'] == 1) {//tam thoi tinh la mobile
                            loadOPT.frm = new Date(divfrm.find('.reg_mobile_filter').text(), 0, 1);
                            loadOPT.too = new Date(loadOPT.frm.getFullYear(), 11, 31);
                        };
                        //
                        LOD_REG_DAT(loadOPT, renderUI);

                        //$(e.currentTarget).prop({ disabled: true });

                    }, 10);
                    //
                };
            //
            elUI.REG_COF = REG_COF && JSON.parse(window[st0('2')](atob(REG_COF))) || { hed: 0, fot: 1 };
            //
            elUI.lan = $.extend(JSON.parse(init_data.lan), aLAN);
            init_dataDIV.remove();
            //
            //add them language javascript local
            elUI.lan.js_reglv_1 = new Date().getFullYear();
            //
            //
            frmEL.find('[data-lang]').each(function (idx, el) {
                var key = el.getAttribute('data-lang');
                $(el).html(elUI.lan[key]);
            });
            //
            //alert(atob(elUI.lan[''])); //cho nay chua server cua khach hang liwayway
            //
            start_mnu = divfrm.next();
            arr_lang(start_mnu);//language co index
            //
            //
            mobi_raw['ctx_mnu_tmpl'] = start_mnu.html();
            start_mnu.empty();//de chua popup menu se build sau nay
            //
            //
            var compose_comm = start_mnu.next().find(".compose_comm");
            mobi_raw['compose_comm'] = compose_comm.html();
            //
            mobi_raw['mobi_cmm'] = compose_comm.parent().next();
            //
            //

            //alert(apisvr.review_regis);
            //timegold review link 
            //
            mobi_raw['mobiui'] = /*1;/*/ (apisvr.review_regis || scrB.width < 800) ? 1 : 0;
            //
            //
            //
            mobi_raw['mobi_cmmraw'] =postREGIS( mobi_raw['mobi_cmm'].find('.act_cmm_tmpl').clone());
            //
            mobi_raw['mobi_cmm'] = mobi_raw['mobi_cmm'].removeClass('d-none').find('.comments').empty();
            //
            //
            mobi_raw['empty_msg'] = compose_comm.parent().find('.empty_msg');
            arr_lang(mobi_raw['empty_msg']);//language co index
            //
            //
            //
            navig = compose_comm.prev();// frmEL.find(".reg_navigator");
            mobi_raw['piltab'] = navig.find('ul.nav');
            arr_lang(mobi_raw['piltab']).on('click', '.nav-link:not(.active),.nav-link.need_refs', function (e) {
                //
                var pilT = $(e.currentTarget), refsig = function (ali) {
                    ali.removeClass('active need_refs').find('span.sig_refresh').remove();
                    return ali;
                };
                elUI.vwtyp = parseInt(pilT.attr('mnu'));
                reLOAD(e);
                //
                refsig(pilT.parent().siblings().find('.nav-link'));
                refsig(pilT).addClass('active');
            });
            //
            //
            //
            //
            compose_comm.remove();
            //
            //
            if (mobi_raw['mobiui']==1) {//tam thoi tinh la mobile
                //
                //doi voi mobile , chu yeu la ca nhan nen load nguyen 1 nam
                loadOPT = { 'frm': new Date(elUI.lan.js_reglv_1, 0, 1), 'too': new Date(elUI.lan.js_reglv_1,11, 31) };
                //
                divfrm.find('span.total-comments').text(0);
                divfrm.prev().remove();//remove desktop UI
                //req_frm.LOA_req_frm = req_frm(frmEL);
                //
                divfrm.find('.kytich').append(
                    (function () {
                        var droit = '';
                        for (var y = 0; y < 3; y++) {
                            droit += '<a href="#" class="dropdown-item">' + (elUI.lan.js_reglv_1 - y) + '</a>'
                        };
                        return droit;
                    }()))

                .on('click', 'a', function (e) {
                    var me = $(e.currentTarget),
                        dro = me.closest('.dropdown'),
                        curY=dro.find('.reg_mobile_filter');
                    if (curY.text() != me.text()) {
                        reLOAD(e);
                        curY.text(me.text());
                    };
                });


                divfrm.on('shown.bs.dropdown', function (a) {
                    //debugger;
                    //divfrm.off('shown.bs.dropdown');
                    var ul = $(a.relatedTarget),
                        dogDropDw = ul.data()['bs.dropdown']._popper;
                    //
                    regis_hed_fot(ul.find('ul'), -1, '');
                    //
                    dogDropDw.options.onUpdate = function () {
                        divfrm.trigger('click.bs.dropdown.data-api');
                        dogDropDw.destroy();
                    };

                }).find('.btn_collapzion').on('click', 'a', function (e) {
                    srclocked(true);
                    setTimeout(function () {
                        floatBTN_CLK(e);
                    }, 10);
                }).next() // cai nay la menu grear cua mobile UI
                    .append(

                        mn_QUYE.mobi_gear(_gLA)
                        //'<ul class="dropdown-menu dropdown-light font_helo" style="margin-top:10px;margin-left:-5px;">' +
                        //    '<lo mnu="refresh" class="dropdown-item d-flex align-items-center"><i class="ti-reload" style="font-size: 17px;margin: 0 10px 0 -5px;"></i>' + (aLAN.js_001_26 || 'Reload') + '  ...</lo>' +
                        //    '<lo mnu="hed" class="dropdown-item d-flex align-items-center"><i class="ti-check" style="width:17px;font-size: 17px;margin: 0 10px 0 -5px;"></i>' + (_gLA(28,3) || 'Show Flow Mapping') + '</lo>' +
                        //    '<lo mnu="fot" class="dropdown-item d-flex align-items-center"><i class="" style="width:17px;font-size: 17px;margin: 0 10px 0 -5px;"></i>' + (_gLA(28, 4) || 'Show Approved history') + '</lo>' +
                        //'</ul>'

                    ).on('click', 'lo', function (e) {
                        //
                        e.preventDefault();
                        //
                        var e$l = $(e.currentTarget),
                            mnu=e$l.attr('mnu') ;
                        if (mnu == 'refresh') {
                            reLOAD(e);
                        } else if (mnu=='hed' ||mnu=='fot' ) {
                            reLOAD(e, mnu);
                        };
                    });
                //
                //
                divfrm.closest('.form_container').fadeIn(1000);
                //
                mobi_raw['empty_msg'].removeClass('d-none');
                //
                mobi_raw['empty_msg'];//.addClass('d-none');


                //$("html").animate({ scrollTop: $(document).height() }, 1000);
                renderUI.resolve();
                //
                mobi_raw['mobi_cmm']//click on button expand / collape registration content
                .addClass('mobi_cmm')
                .on('click touchstart', '.reg_dat .nut_collapse.collapsed:not(.xongroi)', function (ek) {
                    //plan, se dung nut nay display registration data,
                    //---> co khuyet diem la khi nop duyet, thi replace new , lost $.data()
                    _lst_REG($(ek.currentTarget).addClass('xongroi'), 1);
                })
                .on('click touchstart', '.valid_emp .nut_collapse.collapsed:not(.xongroi)', function (ek) {
                    //plan, se dung nut nay display registration data,
                    //---> co khuyet diem la khi nop duyet, thi replace new , lost $.data()
                    var nut = $(ek.currentTarget);
                    _lst_EMPS(nut.addClass('xongroi'), 1, null, nut.hasClass('chi__doc'));
                })
                .on('click touchstart', '.dume_collapse:not(.xongroi)', function (ek) {
                    //
                    //click vao nut expand / collapse cua header tool che do mobile
                    //
                    ek = $(this);
                    //
                    ek.toggleClass('xongroi').promise().done(function () {
                        //call your method here
                        ek.closest('.panel.re_ca_bo').find('button.nut_collapse:not(.xongroi)').trigger('click');
                        //
                        //
                        if (ek.next().hasClass('more_flow_usr')) {
                            ek.next().removeClass('d-none')//show nut more_flow_usr
                                .next().remove();//bo nut refresh
                        };
                        //
                        //
                    });
                    //
                    //
                    ek.closest('.act_cmm_tmpl').find('img[data-lazy]').not('[src]').each(function (idx, di) {
                            //
                            var im = $(di);
                            //
                            flowIMG.bind([

                                    im[0],
                                    im[0].getAttribute('data-lazy'),
                                    elUI[im.hasClass('commenter-pic') ? 'bosI' : 'empI']

                            ])();

                        });

                });
                //
            } else {
                //
                mobi_raw['mobiui'] = 0;
                loadOPT = divfrm.prev().find('.noidung_nhap');
                //
                //
                mobi_raw.dumeSVG =$( loadOPT.html());
                loadOPT.remove();//remove svg
                //
                //
                //
                arr_lang(divfrm.prev());//chi co desktop moi co language nay !!!
                //
                if (aLAN.js_usr_info[0] == 2) {//emp mode user login
                    //doi voi desktop , chu yeu la quan ly nen se load 1 thang ke tu hom nay
                    loadOPT = { 'frm': subtractMonths(-1, new Date().setHours(0, 0, 0, 0)), 'too': subtractMonths(1, new Date().setHours(0, 0, 0, 0)) };
                } else {//admin
                    const d = new Date();
                    loadOPT = { 'frm': new Date(d.getFullYear(), d.getMonth(), 1, 0, 0, 0, 0), 'too': new Date(d.getFullYear(), d.getMonth() +1, 0, 0, 0, 0, 0) };
                };
                //
                setTimeout(function () {
                    admin$.DEV(function () {
                        //divfrm.children(":first").insertBefore(divfrm);
                        mobi_raw['title']=divfrm.html();
                        divfrm.empty();//remove mobile UI
                        //
                        regFRM = regFRM(divfrm, frmEL, loadOPT);
                        //
                        //divfrm.on('change', '.ticket-item input:checkbox', function (evt) {
                        //    $(this).closest('li').toggleClass('rmv-reg-it');
                        //})
                        
                        divfrm.closest('.form_container').fadeIn(500);
                        //
                        renderUI.resolve(regFRM);
                        //
                    });
                }, 10);
            };
            //


            loadOPT['mod'] = 0;//load lan dau tien
            loadOPT['mobiui'] = mobi_raw['mobiui'];//de cho server tinh ??


            //if (apisvr.review_regis !== undefined && apisvr.review_regis!=null) loadOPT['review_regis'] = encodeURIComponent(apisvr.review_regis);//moi them vao encodeURIComponent


            //
            var rmv_CHK = function (_r, k, papa, gchu, RMV) {
                delete _r[k];
                var rmv = [], lst=1;
                //
                if (!RMV) {//lay remove from check bootstrap

                    var lst = gchu.closest('.nhap_cmm').prev();

                    lst.find(papa + ' .clip-check input:not(:disabled)').filter(function (iZ, chk) {
                        var oldI = chk.id.split('_');
                        if (oldI[0] != 'samplecheckbox') {
                            oldI[0] = chk.checked;
                            rmv.push(oldI);
                        };
                    });
                    //
                    lst = lst.find(papa + ' .clip-check input:not(:checked)').length;
                    //
                } else {//remove from popup edit from
                    rmv = RMV;
                };
                //
                //
                if (rmv.length > 0) _r[k] = rmv;
                //
                //
                //
                return lst;
            }

            ,

            nopduyetMNU = function (mnuID, act_cmm_tmpl, c_b,RMV) {
                admin$.DEV(function () {
                    //
                    var chode = act_cmm_tmpl.data(),
                        _r = {},
                        gchu = act_cmm_tmpl.find('textarea.re_ca_bo');

                    for (var kk in chode) {
                        if (chode.hasOwnProperty(kk)) {
                            if (kk != 'ToiLaAi_In_This_Regis') {
                                _r[kk] = chode[kk];
                            };
                        };
                    };
                    //
                    if ([3,4,5].indexOf(mnuID)>-1) {//3:duyet,4:ko duyet, 5:tra lai 

                        _r.oldsta = _r.regsta;
                        _r.regsta = staOfs + mnuID;//105 ->security cho thien ha ko biet la so may !!!
                        _r = $.extend(true, _r, { regid: _r.id, notes: RMV && RMV.notes || gchu.val() });////0:new ,1:edit , 2:delete , 30 :send

                    } else if (mnuID == 30) {//send:goi

                        var regsta, oldsta = _r.regsta;

                        if (_r.regsta < 102) {
                            regsta = _r.regsta + 1
                        } else if (_r.regsta = 105) {//tra ve
                            if (aLAN.js_usr_info[1] == _r.usrid) {//user login bang voi dang ky
                                regsta = 101;//trang thai goi dau tien
                            } else {
                                regsta = 102;//trang thai chueyn tiep
                            };
                        } else {
                            regsta = _r.regsta;
                        };
                        //
                        _r = $.extend(true, _r, { regid: _r.id, regsta: regsta, oldsta: oldsta, notes: RMV && RMV.notes || gchu.val() });////0:new ,1:edit , 2:delete , 30 :send
                        //
                    };
                    //
                    //
                    //tang ca co the uncheck 
                    if (_r.regtyp == 2) {
                        //from comment textarea -> tim nguoc len parent nhap_cmm -> lay div tren no, ->tim checkbox is check
                        //delete _r.otrmv;
                        //var otrmv = [];
                        ////
                        //gchu.closest('.nhap_cmm').prev().find('.reg_dat .clip-check input:not(:disabled)').filter(function (iZ, chk) {
                        //    var oldI = chk.id.split('_');
                        //    oldI[0] = chk.checked;
                        //    otrmv.push(oldI);
                        //});
                        ////
                        ////
                        //if (otrmv.length > 0) _r.otrmv = otrmv;
                        if (rmv_CHK(_r, 'otrmv', '.reg_dat', gchu, RMV && RMV.otrmv) == 0) {
                            mn_QUYE.err_rmvA(_gLA(33,8),1);
                            return;
                        };
                        //
                    };
                    //
                    //
                    //
                    //valid emp co the uncheck ????
                    if (rmv_CHK(_r, 'emrmv', '.valid_emp', gchu, RMV && RMV.emrmv) == 0) {
                        mn_QUYE.err_rmvA(_gLA(33,7),2);
                        return;
                    }
                    //
                    //
                    //
                    //
                    //
                    _HWND_tuychon(mnuID, frmEL, _r, function (rst) {
                        //
                        if (rst[0] == 2) {//tin hieu mobile UI remove this post registration
                            //so 2 nay ko lien quan gi den mnuID
                            act_cmm_tmpl.remove();
                            //
                        };
                        //
                        if (c_b) c_b(rst, _r, mnuID);
                        //
                    }, act_cmm_tmpl);


                });
            }

            ,

            mnuJOB_RST = function (rst, dat, mnuID) {
                //
                //
                if ([2, 3, 4, 5].indexOf(mnuID) > -1) return;
                //
                //
                //
                var pnl = this,
                    __id = dat.regid,
                    senRST = JSON.parse(rst[1]['sendrst']),
                    R = senRST['R'],
                    SEN = rst[1]['sen'],

                    uLogin=parseInt(aLAN.js_usr_info[1]);

                //
                if (mnuID == 106) {//admin checked
                    //
                    dat = fillMASTER.atK(dat.id)[0];
                    dat.adchk = senRST.split('|')[0];//2
                    ref_REGIS(dat, pnl);
                    //
                    return;//neu ko thi se loi SEN hoac R
                    //
                }else if (mnuID===30 && SEN[0] === 1) {//moi viec on, cu theo client ma update registation post and datagrid
                    //
                    dat.tg = R[0].tg;//thoi gian chinh xac voi database
                    dat.usrid = SEN[1];//userid goi
                    //
                    var oldREG = fillMASTER.atK(__id)[0],
                        dumeNOTE = [oldREG.regsta == staOfs, dat.notes];
                    //
                    //
                    //if (oldREG.regsta != staOfs) {//ko push dat khi moi nop lan dau - o server cung vay DESC
                        //v2 push
                        SEN = elUI.regDAT.GOI[__id] || (elUI.regDAT.GOI[__id] = []);
                        SEN.unshift(dat);//vao cuoi cung cua collection vao nop duyet history...
                    //};
                    //
                    //
                    //
                    if (dat.otrmv) {//bi remove
                        var atDD=_deDATNO(__id);
                        if (atDD.length > 0) {
                            dat.otrmv.forEach(function (rmvO) {
                                var oldIx = parseInt(rmvO[2]);
                                //neu check thi danh dau login U, else -1 //reset
                                atDD[oldIx].tresom = -1 * (rmvO[0] === true ? dat.usrid : 1);
                            });
                        };
                    };
                    //
                    //
                    //
                    if (dat.emrmv) {//bi remove

                        var atDD = _deDATNO(__id, "E");

                        if (atDD.length > 0) {
                            atDD.forEach(function (em) {
                                //
                                var isNEW = -1;
                                dat.emrmv.some(function (rmvO,ix) {

                                    if (em.eid == rmvO[1]) {//bang acno

                                        if (em.rmv == uLogin && rmvO[0] === false) {
                                            em.rmv = -1; //clear remove
                                        } else if (em.rmv == -1 && rmvO[0] === true) {
                                            em.rmv = uLogin;//set update
                                        };
                                        //
                                        isNEW = ix;

                                        //remove luon item at index
                                        dat.emrmv.splice(ix, 1);
                                        
                                        return true;//exit some

                                    };

                                });
                                //
                                //
                                if (isNEW == -1 && em.rmv == uLogin) {
                                    //reset 
                                    em.rmv = -1;
                                };
                                //
                            });

                        };
                    };
                    //
                    //
                    //
                    dat = $.extend(oldREG, { regsta: dat.regsta, tg: dat.tg });
                    dat.ff_regsta = elUI.lan.js_011_29[dat.regsta - staOfs];
                    //
                    if (dumeNOTE[0] === true) {
                        dat.notes = dumeNOTE[1];
                    };
                    //
                    ref_REGIS(dat, pnl);
                    //
                } else if (SEN[0] === 2) {//duplicate send
                    var chk = senRST.chkrst, S = senRST.sen;
                    if (chk[0].typ == 0//moi dang ky, chua co his
                        && chk[0].regsta < 102) { //regis nay nam o w_regis, ko phai w_send
                        //
                        var oldREG = fillMASTER.atK(__id)[0]
                        dat = $.extend(oldREG, { regsta: chk[0].regsta, tg: chk[0].regsta.tg });
                        dat.ff_regsta = elUI.lan.js_011_29[dat.regsta - staOfs];
                        dat.notes = chk[0].notes;
                        //
                        ref_REGIS(dat, pnl);
                        //
                    } else if ([3, 4, 5].indexOf(chk[0].regsta - staOfs)) {//regis nay da duyet, ko duyet , hoac tra lai.
                        //neu 2 browser cung focus 1 regis, one of them tralai, thi cai sau follow prev action
                        SEN[0] = 0;// ko update duoc regis thi cung coi nhu DEL



                        //chua xu ly truong hop chuyen tiep chung tu da bi nguoi khac chuyen truoc !!!

                    };
                };
                //
                //
                if (SEN[0] === 0) {//DELETE
                    var delArg = [1, { regid: __id }];
                    _mnuJOB._deleted(delArg);
                    if (delArg[0] == 2) {//tin hieu mobile UI remove this post registration
                        //so 2 nay ko lien quan gi den mnuID
                        pnl.remove();
                    };
                };
                //
            }
            ,
            papa_clean = function (papa, dynDropDw) {
                //
                papa.on('shown.bs.dropdown', function (a) {
                    $(a.relatedTarget).data()['bs.dropdown']._popper.options.onUpdate = function () {
                        papa.trigger('click.bs.dropdown.data-api');
                    };
                }).on('hidden.bs.dropdown', function (a) {
                    var catDropDw = $(a.relatedTarget).data()['bs.dropdown']._popper;
                    catDropDw.options.removeOnDestroy = true;
                    catDropDw.destroy();

                    //
                    dynDropDw.unbind().removeData();
                    papa.unbind().removeData();
                    papa.remove();
                    ////
                    //console.log("da huy dynamic context menu");
                });
            };

            mobi_raw['mobi_cmm']//.html(mobi_raw['mobi_cmmraw'][0].outerHTML)
                .on('change', '.widget-body:not(.chi__doc) .ticket-item input:checkbox', function (ev) {
                    //var targ= $(ev.currentTarget),
                    //    li=targ.closest('li'),
                    //    lst = li.closest("[id^='datno_']"),
                    //    dID = targ.attr('id').split("_"),
                    //    D = _deDATNO(parseInt(dID[1])),
                    //    r = fillMASTER.atK(parseInt(dID[1]));

                    //targ = 'rmv-reg-it';
                    //if (li.hasClass(targ)) {//danh dau la bi user login remove
                    //    D[dID[2]].tresom = -1;
                    //} else {
                    //    D[dID[2]].tresom = -1 * parseInt(aLAN.js_usr_info[1]);
                    //};
                    //li.toggleClass(targ);

                    var li$ = $(this).closest('li'),
                        id$ = this.id.split('_');
                    //
                    li$.toggleClass('rmv-reg-it').promise().done(function () {

                        var dD = li$.closest('.widget-body').attr('id').split('_'),
                            D = _deDATNO(parseInt(dD[1]), dD[0] == 'datno' ? 'D' : 'E'),
                            isCls = li$.hasClass('rmv-reg-it');
                        //
                        //call your method here
                        if (id$[0] == 'it') {
                            if (D && D.length > li$.index()) {
                                //
                                var r = D[li$.index()];
                                //
                                r.tresom = isCls ? -1 * elUI.chkNo1() : -1;
                                //
                            };
                        } else {
                            D && D.some(function (v) {
                                if (id$[1] == v.eid) {
                                    v.rmv = isCls ? parseInt(aLAN.js_usr_info[1]) : -1;
                                    return true;
                                }
                            });
                        };

                    });


                })
                .on(elUI.onevt, "button[mnu='more_flow_act']", function (e, cus) {
                    if (!cus) {
                        //
                        //event.preventDefault();
                        //event.stopPropagation();
                        //
                        var pnl = $(e.currentTarget).parent(),
                            dynDropDw,
                            papa = pnl.find('.dropup'),
                            act_cmm_tmpl = pnl.closest('.act_cmm_tmpl');


                        if (papa.length > 0) {
                            papa.trigger('click.bs.dropdown.data-api');
                            return;
                        };
                        //
                        //
                        papa = $('<div class="dropup" style="position:absolute;top:-4px;right:0px;height:40px;width:1px"></div>').appendTo(pnl),//top:-5px;right:-8px;
                        dynDropDw = $('<div data-toggle="dropdown"></div>').append(
                                        '<ul class="dropdown-menu dropdown-menu-right  dropdown-light font_helo">' +

                                            reg_MNU(act_cmm_tmpl.data(), [1])[0] +

                                        '</ul>'
                                        ).appendTo(papa);

                        papa_clean(papa, dynDropDw);
                        //

                        dynDropDw.on('click touchstart', 'lo', function (ex) {

                            //event.preventDefault();
                            //event.stopPropagation();

                            srclocked(true);
                            var dogMNU = parseInt(ex.currentTarget.getAttribute('mnu'));//ep tat ca menu nay ve integer
                            setTimeout(function () {
                                //
                                //huy dynamic context menu nay
                                papa.trigger('click.bs.dropdown.data-api');
                                //
                                nopduyetMNU(dogMNU, act_cmm_tmpl, function () {
                                    mnuJOB_RST.apply(act_cmm_tmpl, arguments);
                                });
                                //
                            }, 10);
                        })
                        .trigger('click.bs.dropdown.data-api', ['dynamicDROPDW']);
                        //
                    }
                    return false;
                })
            //click nut send from regpost
            .on(elUI.onevt, "button[mnu='send_reg']", function (s, mnu, argCB, RMV) {
                //
                var targ = $(s.currentTarget),
                     pnl = targ.closest('.act_cmm_tmpl'),
                     mnu = mnu ? mnu :
                     targ.data().__ == 3 ? 3 : 30;
                //
                nopduyetMNU(mnu, pnl, function () {
                    mnuJOB_RST.apply(pnl, arguments);
                    if (argCB && typeof argCB === 'function') {
                        argCB();
                    };
                }, RMV);
                //
                targ.trigger('click.bs.dropdown.data-api');
                //
                return false;
            })//
            .on(elUI.onevt, "a.view_regis", function (s) {
                //
                var me = $(this),

                    _da = atob(me.attr('xem')).split('_');
                //
                srclocked(true);
                setTimeout(function () {
                    admin$.DEV(function () {

                        _da.push(me);

                        _HWND_tuychon(1, frmEL, { id: parseInt(_da[1]), view: _da }, function (rst) {
                            //
                        }, me.closest('.act_cmm_tmpl'));
                    });
                }, 10);
            })
            .on(elUI.onevt, '.more_flow_usr', function (e, cus) {

                if (cus) return;
   
                var pnl = $(e.currentTarget),
                    dynDropDw,
                    papa = pnl.find('.dropup'),
                    maxW = 0,
                    clsCOL = '',
                    flexW = mobi_raw['mobi_cmm'].width() -50;


                if (papa.length > 0) {
                    papa.trigger('click.bs.dropdown.data-api');
                    return;
                };
                //
                dynDropDw = '';
                maxW = pnl.closest(pnl.hasClass('ticket-state') ? '.row' : '.req-tools').parent().find('.ticket-user.d-none').each(function (zx, u) {
                    dynDropDw += u.outerHTML;//flex-wrap 
                }).length;
                //
                if (maxW >= elUI.cmm_W + 1) {
                    clsCOL = 'col-' + Math.floor(12 / (elUI.cmm_W + 1));
                    maxW = 'style="min-width:' + flexW + 'px"';
                    flexW = 'flex-wrap';
                } else {
                    maxW = 'style="min-width:' + (maxW * 300) + 'px"';
                    flexW = '';
                };
                //
                papa = $('<div class="dropup" style="position:absolute;top:-4px;right:-10px;height:40px;width:1px"></div>').appendTo(pnl),//top:-5px;right:-8px;
                dynDropDw = $('<div data-toggle="dropdown"></div>').append(
                                '<ul class="dropdown-menu dropdown-menu-right  dropdown-light font_helo p-4" ' + maxW + '>' +

                                    '<li class="d-flex ' + flexW + ' align-items-center">' +

                                        dynDropDw.replace(/d-none/g, 'd-flex').replace(/ml-4/g, '') +

                                    '</li>' +

                                '</ul>'
                                ).appendTo(papa);

                clsCOL += ' dume_drop';
                dynDropDw.find('.ticket-user').addClass(clsCOL);
                //
                //
                papa_clean(papa, dynDropDw);
                //
                dynDropDw.on(elUI.onevt, 'lo', function (ex) {


                }).trigger('click.bs.dropdown.data-api', ['dynamicDROPDW']);
                //
                return false;

            });
            //
            //
            //
            elUI.__loadOPT = loadOPT;
            LOD_REG_DAT(elUI.__loadOPT, renderUI);
            //
            //
            //frmEL.on('handshake', function (a) {
            //    //listen su kien o popup form goi ve
            //    debugger;
            //});
            ////








            const NA__VE=w0w['_cordovaNative'] && w0w._cordovaNative.__;
            if (NA__VE) {

                NA__VE.bubble_sync_main.__ = {

                    'mnuJOB_RST': mnuJOB_RST,

                    'test': function () {
                        //khi nop duyet duoc thuc hien tren bubble, ket qua se update ve main app
                        const rst = JSON.parse( decodeURIComponent( arguments[0]));

                        console.log(rst);

                        const pnl = mobi_raw['mobi_cmm'].find('#reg_no_' + rst[1].regid).closest('.act_cmm_tmpl');

                        console.log(pnl);
                        //
                        if (req_frm.uptKEY != -1 && req_frm.uptKEY == rst[1].regid) {
                            setTimeout(function () {
                                $('#close_regis_lv_ot_edit_frm_popup').trigger('click');
                            }, 300);
                        };
                        //
                        if (['2', '3', '4', '5'].indexOf(rst[2].toString()) > -1) {
                            _mnuJOB._deleted(rst);
                            if (rst[0] == 2) {//tin hieu mobile UI remove this post registration
                                //so 2 nay ko lien quan gi den mnuID
                                pnl.remove();
                            };
                        } else {
                            mnuJOB_RST.apply(pnl, rst);
                        };
                    }
                }
            }

           






        };

        this.dispose = function () {
            //
            if (devDlg.ctxCLEAR) devDlg.ctxCLEAR(elUI.ctxMNU_K);
            //
            $("#tabBODY_" + _tabId).trigger('dispose');
            //
        };
        //
        //chi test thoi
        this.deDATNO = _deDATNO;
        //
        this.shared = function() {
            return {
                '$mainO': $mainO,
                'uaa': UaA(elUI.lan[''] || '')
            }
        };

        

        //
    };


    return O;

})();
