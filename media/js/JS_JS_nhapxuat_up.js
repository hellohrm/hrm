(function (fac) {
    "use strict";
    if (!Main._upl0d) Main._upl0d = fac();

})(function (ajaxUtility, Deferred, extend, CustomStore, dataUtils) {
    "use strict";
    //https://codepen.io/ahmedhrayyan/pen/GLBELM
    //https://codepen.io/pardeep4e/pen/ZWaJqe

    //https://codepen.io/kanhasahu/pen/BKZxwz

    function UpTep(E$L, PS) {
        //
        // if this constructor is used without `new`, it adds `new` before itself:
        if (!(this instanceof UpTep)) {
            return new UpTep(E$L, PS);
        };
        //
        var isAdvancedUpload = function () {
            var div = document.createElement('div');
            return ('draggable' in div || 'ondragstart' in div && 'ondrop' in div) && 'FormData' in window && 'FileReader' in window;
        }();

        var draggableFileArea = E$L.querySelector(".drag-file-area")
        , browseFileText = E$L.querySelector(".browse-files")
        , uploadIcon = E$L.querySelector(".upload-icon")

        , dragDropText = E$L.querySelector(".dynamic-message")

        , fileInput = E$L.querySelector(".default-file-input")
        , validF = fileInput.getAttribute('accept') || ''

        , cannotUploadMessage = E$L.querySelector(".cannot-upload-message")
        , cancelAlertButton = E$L.querySelector(".cancel-alert-button")
        , uploadedFile = E$L.querySelector(".file-block")
        , fileName = E$L.querySelector(".file-name")
        , fileSize = E$L.querySelector(".file-size")
        , progressBar = E$L.querySelector(".progress-upload")
        , removeFileButton = E$L.querySelector(".remove-file-icon")
        , uploadButton = E$L.querySelector(".upload-button:not(#test_msg)")
        , uploadForm = E$L.querySelector('.form-container')
        , fileFlag = 1

        , tepSEL = function (e, f) {


            //console.log('tepSEL', new Date().getTime());



            if (!f) f = fileInput.files;



            if (f.length == 0) return;


            if (f[0].type.trim().length > 0 && validF.indexOf(f[0].type) > -1) {

                uploadButton.innerHTML = PS.lan.uploadButton || 'Upload';

                fileName.innerHTML = f[0].name;
                fileSize.innerHTML = (f[0].size / 1024).toFixed(1) + " KB";
                uploadedFile.style.cssText = "display: flex;";
                progressBar.style.width = 0;
                fileFlag = 0;
                //
                frmSTA.drop();
                //
            } else {
                frmSTA.normal();
                cannotUploadMessage.querySelector('.cannot-text').innerHTML = PS.lan.wrongfile || 'Invalid file type !';
                cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
                fileFlag = 1;
            };
            //
        }
        ,
        frmSTA = {
            'normal': function () {
                //
                uploadIcon.setAttribute('class', 'fa fa-cloud-upload upload-icon');
                dragDropText.innerHTML = PS.lan.dragDropText_normal || 'Drag & drop file .xlsx here';
                //
                draggableFileArea.parentNode.classList.remove('dropok');

                uploadButton.innerHTML = PS.lan.uploadButton || 'Upload';

                cannotUploadMessage.style.cssText = "display: none;";
                uploadedFile.style.cssText = "display: none;";
                fileInput.value = '';
            }
            ,
            'dragin': function () {
                uploadIcon.setAttribute('class', 'fa fa-clone upload-icon');
                if (fileFlag == 1) {
                    dragDropText.innerHTML = PS.lan.dragDropText_dragin || 'Drop your file here!';
                };
            }
            ,
            'drop': function () {
                //
                draggableFileArea.parentNode.classList.add('dropok');
                uploadIcon.setAttribute('class', 'fa fa-check-circle upload-icon');
                dragDropText.innerHTML = PS.lan.dragDropText_drop || 'File Dropped Successfully!';

                var nhan = dragDropText.nextElementSibling.children;
                //nhan=[].slice.call(nhan.getElementsByTagName('span'));

                nhan[0].innerHTML = PS.lan.nhan || 'drag & drop or';

                nhan[1].querySelector("span:last-child").innerHTML = '';
                //
                cannotUploadMessage.style.cssText = "display: none;";
            }
        };



        fileInput.addEventListener("click", function () {
            var bk;
            if (GetIEVersion() != 11 && fileInput.files.length > 0) {
                //https://pqina.nl/blog/how-to-clone-a-javascript-file-object/
                var original = fileInput.files[0];
                bk = new File([original], original.name, {
                    type: original.type,
                    lastModified: original.lastModified,
                });
            };
            //
            //console.log('empty', new Date().getTime());
            //
            fileInput.value = '';
            //console.log(fileInput.value);
            if (GetIEVersion() != 11 && bk) {
                //
                //https://stackoverflow.com/questions/1696877/how-to-set-a-value-to-a-file-input-in-html
                //console.log('bk', new Date().getTime());
                //debugger;

                // Now let's create a DataTransfer to get a FileList
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(bk);
                fileInput.files = dataTransfer.files;
                //
            };
        });

        fileInput.addEventListener("change", tepSEL);

        uploadButton.addEventListener("click", function () {

            var isFileUploaded = fileInput.value;

            if (isFileUploaded != '') {
                //
                //debugger;
                const maxSize = 10 * 1024 * 1024; // Maximum file size: 2MB
                if (fileInput.files[0].size > maxSize) { // Check if file exceeds size limit
                    //alert('File size exceeds 10 MB. Please select a smaller file.');
                    devDlg(0, 'File size exceeds 10 MB.<br/>' + (_La$N('js_007_11', aLAN))).show();
                    return; // Abort if the file is too large
                }

                PS.upclk && PS.upclk(fileInput.files[0], uploadButton, progressBar, fileFlag);
                //
                if (fileFlag == 0) {

                    fileFlag = 1;
                };
                //
            } else {
                cannotUploadMessage.querySelector('.cannot-text').innerHTML = PS.lan.selfirst || 'Please select a file first !';
                cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
            }
        });


        uploadButton.previousElementSibling.addEventListener("click", function () {
            requestAnimationFrame(function () {
                //debugger;
                $(E$L).closest('#tabBODY_JS_nhapxuat').find('.system_monitor').trigger('click');
            });
        });


        cancelAlertButton.addEventListener("click", function () {
            cannotUploadMessage.style.cssText = "display: none;";
        });


        draggableFileArea.addEventListener("click", function (e) {
            fileInput.click();
        });



        if (isAdvancedUpload) {

            ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach(function (evt) {
                draggableFileArea.addEventListener(evt, function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                })
            });


            ["dragover", "dragenter"].forEach(function (evt) {

                console.log("dragover ragenter");

                draggableFileArea.addEventListener(evt, function (e) {
                    //
                    e.preventDefault();
                    e.stopPropagation();
                    //
                    frmSTA.dragin();
                    //
                });
            });

            draggableFileArea.addEventListener("dragleave", function (e) {
                //
                if (fileFlag == 1) {
                    frmSTA.normal();
                } else {
                    uploadIcon.setAttribute('class', 'fa fa-check-circle upload-icon');
                }
                //
            });



            draggableFileArea.addEventListener("drop", function (e) {
                //
                //e.preventDefault();
                //
                if (GetIEVersion() != 11) {//phai cho no load truoc.
                    fileInput.files = e.dataTransfer.files;
                };
                tepSEL(null, e.dataTransfer.files);
                //
                //
                //uploadIcon.removeClass().addClass('fa fa-check-circle upload-icon');

                //dragDropText.innerHTML = 'File Dropped Successfully!';
                //document.querySelector(".nhan").innerHTML = 'drag & drop or <span class="browse-files">  <span class="browse-files-text"> <input type="file" class="default-file-input" style=""/>browse file</span> </span>';
                //uploadButton.innerHTML = 'Upload';


                //console.log(files[0].name + " " + files[0].size);
                //console.log(document.querySelector(".default-file-input").value);

                //fileName.innerHTML = files[0].name;
                //fileSize.innerHTML = (files[0].size / 1024).toFixed(1) + " KB";
                //uploadedFile.style.cssText = "display: flex;";
                //progressBar.style.width = 0;
                //fileFlag = 0;
            });
        }

        removeFileButton.addEventListener("click", function () {
            //
            uploadedFile.style.cssText = "display: none;";
            fileInput.value = '';
            //
            var nhan = dragDropText.nextElementSibling.children;
            //nhan=[].slice.call(nhan.getElementsByTagName('span'));
            nhan[0].innerHTML = 'or';
            nhan[1].querySelector("span:last-child").innerHTML = 'from device';
            //
            frmSTA.normal();
            //
            fileFlag = 1;
            //
        });




    }


    function O(opts) { // constructor

        const t_x = ["Basic salary", "Meal allowance", "Phone allowance", "Fuel allowance", "Toxic allowance", "Longevity allowance", "Responsibility payment"];
        //

        var app_containerW,withCountByDEV = 0,

            evtWK,

            calcSession,

            _tabId = opts._tabId,

            $mainO = opts.$mainO,

            elUI = {

                lan: opts.lan || {}

                ,

                fNUM: function (va) {
                    return va;
                }
                ,
                fNGA: function (va) {
                    //
                    if (va) {
                        va = new Date(va);
                        if (va instanceof Date && !isNaN(va)) {
                            return va;
                        };
                    }
                }
                ,
                fTXT: function (va, fi, mL) {
                    if (va) {
                        if (mL && va.length > mL) {
                            return va.slice(0, mL);
                        } else {
                            return va.trim();
                        }
                    }
                }
                ,
                fDEC: function (va) {
                    if (va && !isNaN(va)) {
                        return Number(va);
                    }
                }
                ,

                eMAIL: function (va, fi, mL) {
                    if (va) {
                        if (mL && va.length > mL) {
                            va = va.slice(0, mL);
                        } else {
                            va = va.trim();
                        };
                        //
                        const regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                        if (!regex.test(va)) {
                            return undefined;
                        } else {
                            return va;
                        };
                    }
                }
            }
            ,

            row_idx = function (e) {
                //
                //debugger;
                //
                if (e.value) {
                    if (!$.isNumeric(e.value)) {
                        //
                        e.value = e.previousValue || null;
                        //
                    };
                    //
                    if ($.isNumeric(e.value)) {
                        e.value = parseInt(e.value);
                    };
                    //
                    e.component.option('value', e.value);
                    //
                };
            }
            ,

            show_popmsg = function (m$e, pnl, ik) {

                var ms = [
                        "This data column must be <code style='font-size:120%'>numeric</code> and will be discarded if it is a <code style='font-size:120%'>duplicate</code>."
                        ,
                        "Will remove if <code style='font-size:120%'>duplicate</code> and maximum length  <code style='font-size:120%'>50 characters</code>."
                ]

                    ,

                    papa = $('<div>' + (_La$N('js_013_11|' + ik, elUI.lan) || ms[ik])

                    + '</div>').appendTo(pnl);//top:-5px;right:-8px;

                papa.dxPopover({
                    target: m$e,
                    showEvent: 'mouseenter',
                    hideEvent: 'mouseleave',
                    position: 'top',
                    width: 300,
                    animation: {
                        show: {
                            type: 'pop',
                            from: { scale: 0 },
                            to: { scale: 1 },
                        },
                        hide: {
                            type: 'fade',
                            from: 1,
                            to: 0,
                        },
                    },
                });
                //
            }
            ,
            show_hlp = function (e) {

                e.preventDefault(); // Now link won't go anywhere
                e.stopPropagation(); // Now the event won't bubble up

                var puhwnd = admin$.popup({ a: 'd', fw: 0 })


                    , btndone = puhwnd.find('#popupdone')
                          , btndonefn = function (state) {
                              btndone[(state ? 'add' : 'remove') + 'Class']('btn-primary').prop('disabled', !state);
                          };


                puhwnd.find('.modal-dialog').addClass('modal-dialog-centered modal-dialog-zoom pu_fullW my-0')
                        .css({ 'max-width': '800px' });


                var fuckScroll = puhwnd.find('.modal-body').addClass('pefectS_R');

                var noidung = function () {
                    //
                    fuckScroll.append($('.test_help').clone().removeClass('d-none'));
                    //
                    return fuckScroll[0];
                    //
                };

                //
                btndone.remove();
                //
                //
                puhwnd.one('shown.bs.modal', function () {
                    /*fuckScroll =*/ new PerfectScrollbar(noidung(), {
                        suppressScrollX: true
                    });
                }).one('hide.bs.modal', function () {
                    //fuckScroll.destroy();
                });
                setTimeout(function () { puhwnd.modal('show'); }, 1);
                //
            };

            const screenByW = function (width) {
                if (withCountByDEV != width) {
                    withCountByDEV = width;
                    app_containerW = (elUI.__refW || app_container).innerWidth();
                };
                return _screenByW(app_containerW);
            }, _screenByW = function (width) {
                if (width < 540) return "xs";
                if (width < 800) return "sm";
                if (width < 1200) return "md";
                return "lg";
            };

            //debugger;

            var dxFRM = {

                screenByWidth: screenByW,

                labelMode: 'floating',

                formData: {

                    acno: 'B',
                    empcode: 'C',
                    ho: 'D',
                    ten: 'E',
                    secid: null,
                    posid: null,
                    hireday: null,
                    offdate: null,
                    birthday: null,

                    gender: null,

                    marital: null,
                    degree: null,


                    email:null,
                    phone:null, 
                    cmnd:null, 
                    address: null,


                    mo1: 0,
                    mo2: 0,
                    mo3: 0,
                    mo4: 0,
                    mo5: 0,
                    mo6: 0,
                    mo7: 0,

                    s_dongdulieu: 3,
                    e_dongdulieu: undefined

                },
                readOnly: false,
                showColonAfterLabel: true,
                labelLocation: 'left',
                minColWidth: 200,
                colCount: 7,
                colCountByScreen: {
                    xs: 2,
                    sm: 4,
                    md:5
                }
                ,

                visible: false//mac dinh la khong hien thi

                ,



                items: [

                    { dataField: "acno", label: { text: _La$N('js_007_1', aLAN) || 'EmpID' }, typ: elUI.fNUM }

                    , { dataField: "empcode", label: { text: _La$N('js_007_3', aLAN) || 'EmpCode' },mLen:50 }

                    , { dataField: "ho", label: { text: _La$N('js_007_5', aLAN) || 'LastName' }, mLen: 150 }

                    , { dataField: "ten", label: { text: _La$N('js_007_7', aLAN) || 'FirstName' }, mLen: 150 }


                    , {
                        dataField: "gender", label: { text: _La$N('js_007_12', aLAN) || 'Gender' }/*, visible: false*/
                    }
                    , {
                        dataField: "birthday", label: { text: _La$N('js_007_9', aLAN) || 'Bithday' }, typ: elUI.fNGA/*, visible: false*/
                    }
                    , {
                        dataField: "secid", label: {
                            text: _La$N('js_007_14', aLAN) || 'Organization'
                        }, mLen: 200
                        /*, visible: false*/
                    }
                    , {
                        dataField: "posid", label: { text: _La$N('js_007_15', aLAN) || 'Postion' }, mLen: 200/*, visible: false*/
                    }

                    , {
                        dataField: "hireday", label: { text: _La$N('js_007_10', aLAN) || 'Hireday' }, typ: elUI.fNGA/*, visible: false*/
                    }
                    , {
                        dataField: "offdate", label: { text: _La$N('js_007_18', aLAN) || 'Farewell' }, typ: elUI.fNGA/*, visible: false*/
                    }
                    , {
                        dataField: "marital", label: { text: _La$N('js_007_17', aLAN) || 'Marital' }/*,  visible: false*/
                    }
                    , {
                        dataField: "email", label: { text:  'Email' },typ: elUI.eMAIL, mLen: 100/*,  visible: false*/
                    }, {
                        dataField: "phone", label: { text: _La$N('js_007_19', aLAN) || 'Phone' }, mLen: 20/*,  visible: false*/
                    }, {
                        dataField: "cmnd", label: { text: _La$N('js_007_20', aLAN) || 'ID Number' }, mLen: 20/*,  visible: false*/
                    }, {
                        dataField: "degree", label: { text: _La$N('js_007_16', aLAN) || 'Degree' }, mLen: 200/*,  visible: false*/
                    
                    }, {
                        dataField: "address", label: { text: _La$N('js_007_23', aLAN) || 'Address' }, mLen: 200/*,  visible: false*/
                    }
                    
                    , {
                        dataField: "mo1", label: { text: _La$N('js_007_38|0', aLAN) || t_x[0] }, typ: elUI.fDEC, visible: false
                    }
                    , {
                        dataField: "mo2", label: { text: _La$N('js_007_38|1', aLAN) || t_x[1] }, typ: elUI.fDEC, visible: false
                    }, {
                        dataField: "mo3", label: { text: _La$N('js_007_38|2', aLAN) || t_x[2] }, typ: elUI.fDEC, visible: false
                    }, {
                        dataField: "mo4", label: { text: _La$N('js_007_38|3', aLAN) || t_x[3] }, typ: elUI.fDEC, visible: false
                    }, {
                        dataField: "mo5", label: { text: _La$N('js_007_38|4', aLAN) || t_x[4] }, typ: elUI.fDEC, visible: false
                    }, {
                        dataField: "mo6", label: { text: _La$N('js_007_38|5', aLAN) || t_x[5] }, typ: elUI.fDEC, visible: false
                    }, {
                        dataField: "mo7", label: { text: _La$N('js_007_38|6', aLAN) || t_x[6] }, typ: elUI.fDEC, visible: false
                    }
                ]
                ,
                onContentReady: function (e) {

                    if (!elUI.frm) return;

                    var isHELP = function (dg, ik) {

                        var dm = $(dg).closest('.dx-' + (ik < 2 ? 'selectbox' : 'texteditor') + '-container').next();

                        if (dm.length > 0) {

                            dm = dm.find('[data-mark]');

                            if (dm.length > 0) {

                                dm.addClass('pr-4');

                                var m$e = $('<i class="' + (ik < 2 ? 'fa fa-question-circle' : 'ti-help-alt') + ' mx-1 position-absolute text-large dumehelp"  style="color:blue;cursor:pointer;pointer-events:initial"></i>')
                                    .on('click', (ik < 2 ? null : show_hlp)).appendTo(dm);
                                //
                                if (ik < 2) {
                                    show_popmsg(m$e, dm, ik);
                                };
                                //
                            };
                        };
                    }
                    ,

                    endW = ['_acno', '_empcode', '_dongdulieu'];

                    e.element.find('input').each(function (i, dg) {//[id$="_dongdulieu"]

                        if (dg.id && dg.id.length > 0) {

                            for (var cxd = 0; cxd < endW.length; cxd++) {
                                if (dg.id.match(endW[cxd] + "$") == endW[cxd]) {
                                    isHELP(dg, cxd);
                                    break;
                                };
                            };
                        };

                    });
                }

            }


            ,
            hedTEX = function (idx, lanARR) {
                if (!lanARR) lanARR = elUI.lan.js_011_30;
                return lanARR && lanARR[idx];
            }
            ,
            ifr000 = function (frmEL, fi) {
                //
                var defe = $.Deferred(),

                    hwnHOLE = -1,

                    downURL = [0,1,2, 3, 4,5],//index break down

                    lstSTO = ['192.168.1.91:10996' //0
                        , 'https://upexcel.dnd.vn' //'https://apphrm.000webhostapp.com'//1
                        , 'https://hris.gq'//2
                        , 'apphrm.mywebcommunity.org'//3
                        , 'hoathai.onlinewebshop.net'//4
                        , 'https://zkteco.ga' //5 infinityfree.com / logthaiduongnam@gmail.com
                        , 'hellohrm2020.ddns.net:10996'//6
                    ]

                    ,

                    dumeLOD = 0
                    ,

                    frmWIN = function (whe) {
                        //
                        dumeLOD--;
                        //
                        //console.log(whe,new Date().getTime());
                        //
                        if (dumeLOD < 1) {
                            //
                            taiLing('Target clouding ...');
                            //aha... co tinh hieu
                            //end detect.
                            clearTimeout(hwnHOLE);
                            //console.log(' clearTimeout(hwnHOLE)');
                            //
                            //
                            //debugger;
                            //https://gist.github.com/wuchengwei/b7e1820d39445f431aeaa9c786753d8e
                            //https://gist.github.com/jcable/25d4c86d96d810a5498d
                            //
                            var blob = fi.slice(0, fi.size, fi.type),

                                liveHOST = function () {
                                    //
                                    console.log('save file to host: ', this);

                                    //formData.append(form[i].name, blob, files[0].name);
                                    evtWK.contentWindow.postMessage({ k: this, dat: { na: fi.name, bl: blob, 'cat': fi.type } }, "*");
                                    //
                                };

                            liveHOST.bind(1)();
                            //
                            //setTimeout(function () { fst(); }, 300);
                            //
                            //
                            //gai lai handle sau 10 second
                            //////hwnHOLE = setTimeout(function () {

                            //////    srclocked(false);
                            //////    srclocked(true);

                            //////}, 10000)
                            //
                        };
                    }

                    ,

                    subHOLE = function () {
                        //
                        //end detect.
                        clearTimeout(hwnHOLE);
                        //
                        evtWK = document.createElement('iframe');
                        evtWK.setAttribute("style", "height:565px;width:100%;border:none");
                        evtWK.setAttribute("frameborder", "0");
                        //
                        dumeLOD = 2;
                        evtWK.onload = function (e) {
                            //
                            taiLing('Cloud preparing ...');
                            frmWIN('onload');
                            //
                        };
                        //
                        //
                        if (downURL.length < lstSTO.length) {//valid collection
                            //
                            var url = -1;//srcpf$.length > 0 ? '/apphrm.' : '';//https://apphrm.000webhostapp.com/
                            //
                            debugger;

                            do {
                                //lay index random
                                url = Math.floor(Math.random() * lstSTO.length);
                            } while (downURL.indexOf(url) > -1);
                            //
                            //push vao de tranh ra lan sau
                            downURL.push(url);
                            //
                            url = lstSTO[url].indexOf('://') > -1 ? lstSTO[url] : '//' + lstSTO[url];
                            //
                            //
                            url = '';// hellodat.pages.dev/ol
                            //
                            //
                            ///media/utils/jsc/upemp.js
                            evtWK.setAttribute('src', url + '/000webhostapp.tep/upexcel.html?seson=' + btoa(calcSession + '|' + w0w.location.origin

                                + '|' + (!w0w.Worker || true)

                                + '|' + (srcp$f + /*'https://hellohrm.github.io/utils*/'/media/utils/jsc/upemp.js?' + new Date().getTime())


                                ));


                            //
                            $(evtWK).insertAfter(elUI.xls);//append vao step 3 main div
                            //
                            //dtect after 1 second
                            //////hwnHOLE = setTimeout(function () {
                            //////    subHOLE();
                            //////}, 5000);
                            //
                        };
                    };
                //
                //remove handle truoc..
                delete apisvr.a$.sessions[calcSession];
                //
                calcSession = new Date().getTime();
                apisvr.a$.sessions[calcSession] = {
                    id: calcSession,
                    fn: function (a, b, c) {
                        if (a == 'job') {
                            //
                            switch (b.evtData.messageType) {
                                case 0: {//calc ready !
                                    //
                                    //
                                    frmWIN('receive msg');
                                    //
                                    break;
                                    //
                                } case 1: {
                                    //
                                    frmEL.trigger('up_prog');
                                    //
                                    taiLing('View upload file ...');
                                    //
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
                                    clearTimeout(hwnHOLE);
                                    taiLing('Live service ...');
                                    frmEL.trigger('up_prog', [[fi.size, fi.size]]);//end up progress
                                    //
                                    console.log('live view ready');
                                    //
                                    defe.resolve('hosttmp');
                                    //
                                    break;
                                } case "progress": {
                                    //console.log(b.evtData.prog);
                                    //frmEL.trigger('up_prog', [b.evtData.prog]);
                                    //
                                    const dat = b.evtData.prog,tile = dat[0] / dat[1];
                                    taiLing('Uploading ...' + Math.round(100 * tile) + '%');
                                    break;
                                }

                            };
                        };
                    }
                };
                //
                //
                //
                if (evtWK) {
                    //
                    //tutu release roi moi tao lai.
                    //
                    try { evtWK.contentWindow.postMessage({ k: 2 }, "*"); }
                    catch (err) { };
                    //
                    //
                    setTimeout(function () {
                        //
                        $(evtWK).remove();
                        //
                        subHOLE();
                        //
                    }, 500);
                    //
                } else {
                    subHOLE();
                };
                //
                //
                return defe.promise();
                //
                //
            }
            ,

            read_Exls = function (fi) {

                var defe = $.Deferred(),

                    stepLOD = 2,

                    exlLOD = function () {

                        stepLOD--;//cho devexpress load

                        if (stepLOD > 0) return;
                        //
                        taiLing('Data verifying ...');
                        //
                        if (fi.bl) {//load from db
                            //
                            ifr000.wb = XLSX.read(fi.bl, { type: 'binary', cellText: false, cellDates: true });
                            defe.resolve();
                            //
                        } else {

                            var reader = new FileReader();
                            reader.readAsArrayBuffer(fi);

                            reader.onload = function (e) {
                                //
                                ifr000.wb = XLSX.read(e.target.result, { type: 'binary', cellText: false, cellDates: true });
                                defe.resolve();
                                //
                            };
                        };

                    };

                //
                //
                if (GetIEVersion() == 11) {

                    _gsC('https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.10.1/polyfill.min.js', 'js', function () {

                        _gsC('https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js', 'js', function () {


                            exlLOD();


                        }, 'xlsx.mini.min.js');

                    }, 'polyfill.min.js');

                } else {

                    _gsC('https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js', 'js', function () {

                        exlLOD();

                    }, 'xlsx.mini.min.js');

                };
                //
                //
                admin$.DEV(function () {
                    //
                    exlLOD();
                    //
                });
                //
                //
                return defe.promise();

            }

            ,

            DU_LIEU = function () {

                var ha$UA = 'noU',
                    dbNa = '\x61\x70\x70\x63\x73\x64\x6C',//appcsdl
                    hed = dbNa + '_hed',
                    lin = dbNa + '_lin',
                    gen_ID = function () {
                        return new Date().getTime();
                        //elUI.db__DAT.dbHED.reduce(function (_p, _c) {
                        //    if (+_c.id > +_p) {
                        //        return _c.id;
                        //    } else {
                        //        return _p;
                        //    }
                        //}, 0) + 1;
                    }

                    ,

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
                                    debugger;

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

                        'L_UA': function () {
                            var defe = $.Deferred();
                            setTimeout(function () {
                                defe.resolve(null);
                            }, 10);
                            return defe.promise();
                        }
                         ,

                        'TMP': function (m, d) {

                            var na = elUI.dbNa + (ha$UA == 'noU' ? '' : ('_' + btoa(opts.__u)));
                            m += 'Item';
                            if (d) {
                                st(m, na, btoa(window[st0('1')](JSON.stringify(d))));
                            } else {
                                return st(m, na);
                            };
                        }
                    };

                return {
                    LOAD: fn['L_' + ha$UA],
                    SAVE: fn['S_' + ha$UA],
                    TMP: fn['TMP']
                };

            }()

            ,

            SAV_LOD_EXLX = function (e) {
                //du me SAV_LOD_EXLX.buf
                switch (e.currentTarget.getAttribute('mnu')) {
                    case 'sav': {

                        var u8 = XLSX.write(ifr000.wb, { type: "buffer", bookType: "xlsx" });

                        var sht = ifr000.wb.Sheets[ifr000.wb.SheetNames[0]];
                        var range = XLSX.utils.decode_range(sht['!ref']);

                        var columnsArray = XLSX.utils.sheet_to_json(sht, { header: 1 });


                        var dog = XLSX.utils.decode_range(sht['!ref']).e.c + 1;

                        var x = Array.from({ length: XLSX.utils.decode_range(sht['!ref']).e.c + 1 }, function (x, i) {
                            return XLSX.utils.encode_col(i);
                        });


                        return;


                        var u8 = XLSX.write(ifr000.wb, { type: "buffer", bookType: "xlsx" });
                        var sht = ifr000.wb.Sheets[ifr000.wb.SheetNames[0]];
                        var range = XLSX.utils.decode_range(sht['!ref']);

                        var columnsArray = XLSX.utils.sheet_to_json(sht, { header: 1 });

                        debugger;


                        $.when(dbXLSX({
                            MED: 'SAVE',
                            aid: -1, 'bl': u8
                        })).done(function (a) {

                            debugger;

                        });



                        ////////var ws = XLSX.utils.json_to_sheet([

                        ////////    { S: 1, h: 2, e: null, e_1: null, t: 5, J: 6, S_1: 7 },
                        ////////        { S: 2, h: 3, e: null, e_1: null, t: 6, J: 7, S_1: 8 },

                        ////////        { S: 3, h: 4, e: null, e_1: null, t: 7, J: 8, S_1: 9 },

                        ////////        { S: 4, h: 5, e: 6, e_1: 7, t: 8, J: 9, S_1: 0 }

                        ////////], { header: ["S", "h", "e", "e_1", "t", "J", "S_1"] });
                        //////////
                        ////////ws = XLSX.utils.json_to_sheet(
                        ////////    '[{"acno":4,"empcode":"HR0004","ho":"Trần văn","ten":"Thời","birthday":"2000-01-01","hireday":"2021-04-15","img":"https://i.imgur.com/htHuqOg.jpg","gender":1,"marital":10,"secid":1002,"posid":2003,"degree":"Cử nhân Anh văn","offdate":null,"email":"tvthoi@hellohrm.com","phone":"0963111222","cmnd":"","ngaycap":"2021-04-19","noicap":"","address":"111 Nguyễn Thái Bình - HCM","notes":"Đây là nhân viên thử nghiệm ….","pid":0,"id":129},{"acno":5,"empcode":"Dhdhdhdh","ho":"Hxhchfh","ten":"xhfjDfjj","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1002,"posid":2003,"degree":"Djdjfjfjf","offdate":"2021-04-26","email":"Jdfjfjfjf","phone":"jfjfjfjcj","cmnd":"fdjdjxhXj","ngaycap":"2021-04-19","noicap":"Fjfjfjfjjfjfdjfj","address":"Duhfufjfjfj","notes":"Djjffjjfjffj","pid":0,"id":130},{"acno":6,"empcode":"Djdhdhdhđ","ho":"Hdhdhdjdjddjxdjdjdjdidididi","ten":"Jcjdjfjd","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1002,"posid":2003,"degree":"Fjfjfjfjfjfh","offdate":"2021-04-26","email":"Hđhhđhdjdjdj","phone":"Jdjdududududdjfjfufidididudud","cmnd":"Djdhdhduuf","ngaycap":"2021-04-26","noicap":"Jfjfjfjfjfhf","address":"Fjfjfjfjfjfu","notes":"Fjfjfjfjfj","pid":0,"id":131},{"acno":8,"empcode":"Nfnffjjffjfffnjfjfjf","ho":"Đìuufu","ten":"Hfjfjfjfjf","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1003,"posid":2003,"degree":"Tjfjfjfjfifu","offdate":"2021-04-30","email":"Ncjccjcjcjcj","phone":"Djdjfjfjfjfjfj","cmnd":"Fjfjfjfifif","ngaycap":"2021-04-12","noicap":"Nfjcjcjcjcjcjftjtjifjfufifi","address":"Fjfjfjfjj","notes":"Hfhffhfufu","pid":0,"id":133},{"acno":9,"empcode":"Dbdbfjdjfjfj","ho":"ffjdjfjfjfjfjfiffiiff","ten":"fiiifjfjfj","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1003,"posid":2003,"degree":"Fufufufufu","offdate":"2021-04-26","email":"Djdjdjdjjf","phone":"Djdifufufifi","cmnd":"Djfjjffjfifi","ngaycap":"2021-04-23","noicap":"Fhfufufuuf","address":"Chfjfjfufifu","notes":"Chcjcjdjhfjfjf","pid":0,"id":134},{"acno":10,"empcode":"Hdhdhdhdhdh","ho":"No","ten":"Name","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1004,"posid":2003,"degree":"Djfjfjfjfjjjf","offdate":"2021-04-26","email":"Djdjfjdjjfdjdjjdfjfjdjfjfj","phone":"Djfjfjfjfj","cmnd":"Djdndjdjfjdjfj","ngaycap":"2021-04-05","noicap":"Hedjdjdjđjdjd","address":"Djfjfjfjfjfhfjfjfjfxjfjfhf","notes":"Dcjfhfjfjcjfcjfjfucjfj","pid":0,"id":135},{"acno":11,"empcode":"11","ho":"Trần hoàng","ten":"Kiếm","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1004,"posid":2003,"degree":"Fffjfjfjfuf","offdate":"2021-04-26","email":"Jdjdjdjdjffj","phone":"Đjdjjdjdjdjf","cmnd":"Ffjfjfjfjjfjf","ngaycap":"2021-04-26","noicap":"Jdjdjdjdjdjddudjdjdiud","address":"Gfvcccff Đ","notes":"Dddddddddddd","pid":0,"id":136},{"acno":12,"empcode":"Djfhcb","ho":"Hồ Hoàng","ten":"Thông","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1004,"posid":2003,"degree":"Jchcfhjffjfjjf","offdate":"2021-04-21","email":"Xnxnjxfnjcjfjfj","phone":"Chxhchchxhhxchhchc","cmnd":"Jfjfjfhdjxhfhf","ngaycap":"2021-04-26","noicap":"ffffjfhhfjfhh","address":"Ffffhfhfhhgh","notes":"Nghfjffjfjf","pid":0,"id":137},{"acno":14,"empcode":"Kxkck","ho":"Trần ","ten":"Khang","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1005,"posid":2003,"degree":"Xjxkxjxkkcjc","offdate":"2021-04-25","email":"Ditncid","phone":"Djdjfjcfjf","cmnd":"Ckcjfoxjcoddkkc","ngaycap":"2021-04-26","noicap":"Xnnxjxkxkxkc","address":"Xkxckkxkx","notes":"Ckxkkxkxkc","pid":0,"id":139},{"acno":17,"empcode":"Hgfjfghg","ho":"Trần","ten":"Kim ","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1007,"posid":2003,"degree":"cfjcjJfjcjcjf","offdate":"2021-04-26","email":"Xbbxxhjxchhxgx","phone":"xdhdudjhFjfjf","cmnd":"jfhfjfffhf","ngaycap":"2021-04-19","noicap":"Nfndndjdfjfjf","address":"hfhfhffhfh","notes":"fhfhfhfjf","pid":0,"id":142},{"acno":18,"empcode":"Dndndjdjfjfjd","ho":"Djdhdhdhdhdhfh","ten":"Hchchchch","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1007,"posid":2003,"degree":"Djfjfjjffjfjfjfjfjfi","offdate":"2021-04-26","email":"Dndnxjxjcjcjf","phone":"djFdhffhfhfhfuf","cmnd":"Uhfhfhdufuduf","ngaycap":"2021-04-26","noicap":"Djdjdjdjfjfhfhfhf","address":"Ffhfjfjfjfuuffiifif","notes":"Djfjfjfjfj","pid":0,"id":143},{"acno":19,"empcode":"NdjdjđjcjfjjCó ","ho":"Trầm","ten":"Thanh","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1008,"posid":2003,"degree":"Dhdhdhdhffj","offdate":"2021-04-26","email":"Dndjfjfjfjfjfjfjfjfjfjfhfhfjfj","phone":"fffhfhFjjdj","cmnd":"fjducfdhj","ngaycap":"2021-04-26","noicap":"Jdjdjdjdjf","address":"Dhdhdhdhfhdh","notes":"Dhdhdhdhfhdhfh","pid":0,"id":144},{"acno":20,"empcode":"Hdhdhdhdhd","ho":"Nguyễn Kim","ten":"Đồng","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1008,"posid":2003,"degree":"Fhfjjffjjf","offdate":"2021-04-12","email":"Djdjdjcjfjd","phone":"Hcjfhcjfjfjf","cmnd":"Djfhfhfjfjf","ngaycap":"2021-04-19","noicap":"Đjfjjffjf","address":"Fjjfdjjfjf","notes":"Chfjfjfjcfjj","pid":0,"id":145},{"acno":21,"empcode":"Fjjfjc","ho":"Bùi","ten":"Thông","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1008,"posid":2003,"degree":"Dhfhfjfjfjf","offdate":"2021-04-26","email":"Jcjfjfjcjfjfjfcjcjcj","phone":"chchchcccj","cmnd":"Chchhcjcjcjc","ngaycap":"2021-04-26","noicap":"Chcjfjfjfjcj","address":"Jffjjfjffjjf","notes":"Djfjfjfjffj","pid":0,"id":146},{"acno":22,"empcode":"Djfjfj","ho":"No ","ten":"Name","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1009,"posid":2003,"degree":"Djfjfjfjfjcjcjfcfjfjfjf","offdate":"2021-04-26","email":"Jcjcjcjfj","phone":"ffjFjjfjfjfjfj","cmnd":"fjfjfjfjcjfj","ngaycap":"2021-04-26","noicap":"Xhxhxnfnfjfjf","address":"Hcchjchfhcjcjcccicufu","notes":"djcJdjcjcjcjf","pid":0,"id":147},{"acno":23,"empcode":"Dndjfnfjjfdj","ho":"No","ten":"Name","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1009,"posid":2003,"degree":"jdfjfjfjfhcjfjfjf","offdate":"2021-04-26","email":"Cjxjfjfjjfjf","phone":"Jfhfjfj","cmnd":"fufjfjjfjfjffu","ngaycap":"2021-04-19","noicap":"Cncnfnfncjjfjd","address":"Idifududud","notes":"fdudjCufuufu","pid":0,"id":148},{"acno":24,"empcode":"Djdjfjf","ho":"No","ten":"Name","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1009,"posid":2003,"degree":"Djdhdjfjhf","offdate":"2021-04-26","email":"Tjfjfjfjfjf","phone":"Chxjxjcjdhfjj","cmnd":"ịcfjjfjdh","ngaycap":"2021-04-19","noicap":"Cbdjdjfjfdjfj","address":"djfdjfjfjf","notes":"jfjfjffjfj","pid":0,"id":149},{"acno":25,"empcode":"Djdjdjf","ho":"No","ten":"Name","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1010,"posid":2003,"degree":"Dfjfjfjuffjfjf","offdate":"2021-04-26","email":"Djdjdjcjfjfjf","phone":"Cù","cmnd":"uhfBfhfjfjfjf","ngaycap":"2021-04-18","noicap":"Djfjfjfjfjffjfjf","address":"Hfhfjfjfjdjfjjffjfdjfjfj","notes":"Hffhj","pid":0,"id":150},{"acno":26,"empcode":"Ndndnfjf","ho":"No","ten":"Name","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1010,"posid":2003,"degree":"fjjfjfjfjfi","offdate":"2021-04-19","email":"Ndjdhfjdjffjfjfjfhdjdjfjf","phone":"Dfjfjfjfjfjcjf","cmnd":"Hfjfjfjcjfjf","ngaycap":"2021-04-19","noicap":"Dnfnjfjffififj","address":"fjfjfjfjf","notes":"fuffjfjfifuFuf","pid":0,"id":151},{"acno":27,"empcode":"Hdhdfhfjfj","ho":"No","ten":"Name","birthday":"2000-01-01","hireday":"2021-04-18","img":"","gender":1,"marital":10,"secid":1010,"posid":2003,"degree":"Hfhfjfjfjfhfjf","offdate":"2021-04-12","email":"Djdjfjfjfjf","phone":"fjfJfjfjfjfjfj","cmnd":"fjffjfjffjFjjf","ngaycap":"2021-04-12","noicap":"Nfnfnfjfjfjfjfif","address":"fjfJfjfjfjfufdhfhfjfjf","notes":"Dùu","pid":0,"id":152}]'
                        ////////    );
                        //////////
                        ////////var workbook = XLSX.utils.book_new();
                        ////////XLSX.utils.book_append_sheet(workbook, ws, "Dates");
                        //////////
                        ////////XLSX.writeFile(workbook, "Presidents.xlsx", { compression: true });
                        //
                        break;
                    }
                    case 'lod': {
                        alert('load');
                        break;
                    }
                };
            }

            ,

            maxC = 100

            ,

            gidCOL_NGA = function (e) {
                return new Intl.DateTimeFormat(apisvr.a$.selected_language, {//
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                }).format(e);
            }

            ,

            gid_HIS = function (dogDIV, dbE, jdat) {

                debugger;
                //
                S3_COMMIT.jdat = jdat;//backup lai ...
                //
                var FIE = dbE[1][1]//chua cac column visible
                       ,


                    gridO = elUI.xemtruoc = $('<div class="luoi_head bo_line_top">').appendTo(dogDIV)

                    .dxDataGrid({

                        dataSource: dbE[0]
                        //{

                        //    store: dbE[0],
                        //    reshapeOnPush: true,

                        //}

                        , width: '100%'

                        , height: '550'

                        , filterPanel: {
                            visible: true
                        }
                        , headerFilter: {
                            visible: true
                        }
                        ,
                        filterRow: {
                            visible: true
                        }



                        , autoNavigateToFocusedRow: true


                        //option nay lam nhe grid nhung co khuyet diem khi insert new row thi no con giu focus o grid row cu !!!
                        , repaintChangesOnly: true

                        ,

                        noDataText: function (e) {
                            //this.innerHTML = mobi_raw['empty_msg'].html();
                        }
                        ,

                        editing: {
                            confirmDelete: false
                        },

                        //keyExpr: 'regid',
                        showBorders: true,

                        columnAutoWidth: true,

                        allowColumnReordering: false,

                        focusedRowEnabled: true,

                        paging: {
                            pageSize: 10,
                        },
                        pager: {
                            visible: true,
                            allowedPageSizes: [5, 10, 'all'],
                            showPageSizeSelector: true,
                            showInfo: true,
                            showNavigationButtons: true,
                        },

                        columns: [{
                            caption: aLAN.js_007_1,
                            dataField: "acno",
                            dataType: "number",
                            width: 75,
                            cssClass: 'w_2',//class white space wrap header
                        }, {
                            caption: aLAN.js_007_3,
                            dataField: "empcode",
                            dataType: "string",
                            width: 100,
                            cssClass: 'w_2',//class white space wrap header
                        }, {
                            caption: aLAN.js_007_5,
                            dataField: "ho",
                            dataType: "string",
                            width: 150,
                            cssClass: 'w_2',//class white space wrap header
                        }, {
                            caption: aLAN.js_007_7,
                            dataField: "ten",
                            dataType: "string",
                            width: 150,
                            cssClass: 'w_2',//class white space wrap header
                        }, {
                            caption: aLAN.js_007_12,
                            dataField: "gender",
                            //lookup: {
                            //    //dataSource: jdat.gender,
                            //    displayExpr: "dis",
                            //    valueExpr: "id"
                            //},
                            //hidingPriority: 19,
                            width: 75,
                            cssClass: 'w_2',//class white space wrap header
                        }, {
                            caption: aLAN.js_007_9,
                            dataField: "birthday",
                            dataType: "date",
                            format: gidCOL_NGA,
                            allowFiltering: false,
                            //hidingPriority: 18,
                            width: 100,
                            cssClass: 'w_2',//class white space wrap header
                        }, {
                            caption: aLAN.js_007_14,
                            dataField: "secid",
                            //lookup: {
                            //    //dataSource: jdat.secs,
                            //    displayExpr: "dis",
                            //    valueExpr: "id"
                            //},
                            //hidingPriority: 17,
                            minWidth:120,
                            cssClass: 'w_2',//class white space wrap header
                        }, {
                            caption: aLAN.js_007_15,
                            dataField: "posid",
                            //lookup: {
                            //    //dataSource: jdat.poss,
                            //    displayExpr: "dis",
                            //    valueExpr: "id"
                            //},
                            //hidingPriority: 16,
                            minWidth: 120,
                            cssClass: 'w_2',//class white space wrap header
                        }, {
                            caption: aLAN.js_007_10,
                            dataField: "hireday",
                            dataType: "date",
                            format: gidCOL_NGA,
                            allowFiltering: false,
                            //hidingPriority: 15,
                            width: 100,
                            cssClass: 'w_2',//class white space wrap header
                        }, {
                            caption: aLAN.js_007_18,
                            dataField: "offdate",
                            dataType: "date",
                            format: gidCOL_NGA,
                            allowFiltering: false,
                            //hidingPriority: 14,
                            width: 100,
                            cssClass: 'w_2',//class white space wrap header
                        }
                        , {
                            caption: aLAN.js_007_17,
                            dataField: "marital",
                            //lookup: {
                            //    //dataSource: jdat.poss,
                            //    displayExpr: "dis",
                            //    valueExpr: "id"
                            //},
                            //hidingPriority: 13,
                            cssClass: 'w_2',//class white space wrap header
                        }

                        , {
                            caption: "Email",
                            dataField: "email",
                            //lookup: {
                            //    //dataSource: jdat.poss,
                            //    displayExpr: "dis",
                            //    valueExpr: "id"
                            //},
                            //hidingPriority: 12,
                            cssClass: 'w_2',//class white space wrap header
                        }

                        , {
                            caption: aLAN.js_007_19,
                            dataField: "phone",
                            //lookup: {
                            //    //dataSource: jdat.poss,
                            //    displayExpr: "dis",
                            //    valueExpr: "id"
                            //},
                            //hidingPriority: 11,
                            cssClass: 'w_2',//class white space wrap header
                        }

                        , {
                            caption: aLAN.js_007_20,
                            dataField: "cmnd",
                            //lookup: {
                            //    //dataSource: jdat.poss,
                            //    displayExpr: "dis",
                            //    valueExpr: "id"
                            //},
                            //hidingPriority: 10,
                            cssClass: 'w_2',//class white space wrap header
                        }

                        , {
                            caption: aLAN.js_007_16,
                            dataField: "degree",
                            //lookup: {
                            //    //dataSource: jdat.poss,
                            //    displayExpr: "dis",
                            //    valueExpr: "id"
                            //},
                            //hidingPriority: 9,
                            cssClass: 'w_2',//class white space wrap header
                        }

                        , {
                            caption: aLAN.js_007_23,
                            dataField: "address",
                            //lookup: {
                            //    //dataSource: jdat.poss,
                            //    displayExpr: "dis",
                            //    valueExpr: "id"
                            //},
                            //hidingPriority: 8,
                            cssClass: 'w_2',//class white space wrap header
                        }


                        ,{
                            caption: _La$N('js_007_38|0', aLAN) || t_x[0],
                            dataField: "mo1",
                            dataType: "number",
                            width: 75,
                            //hidingPriority: 7,
                            allowFiltering: false,
                            cssClass: 'w_2',//class white space wrap header
                        }, {
                            caption: _La$N('js_007_38|1', aLAN) || t_x[1],
                            dataField: "mo2",
                            dataType: "number",
                            width: 75,
                            //hidingPriority: 6,
                            allowFiltering: false,
                            cssClass: 'w_2',//class white space wrap header
                        }, {
                            caption: _La$N('js_007_38|2', aLAN) || t_x[2],
                            dataField: "mo3",
                            dataType: "number",
                            width: 75,
                            //hidingPriority: 5,
                            allowFiltering: false,
                            cssClass: 'w_2',//class white space wrap header
                        }, {
                            caption: _La$N('js_007_38|3', aLAN) || t_x[3],
                            dataField: "mo4",
                            dataType: "number",
                            width: 75,
                            //hidingPriority: 4,
                            allowFiltering: false,
                            cssClass: 'w_2',//class white space wrap header
                        }, {
                            caption: _La$N('js_007_38|4', aLAN) || t_x[4],
                            dataField: "mo5",
                            dataType: "number",
                            width: 75,
                            //hidingPriority: 3,
                            allowFiltering: false,
                            cssClass: 'w_2',//class white space wrap header
                        }, {
                            caption: _La$N('js_007_38|5', aLAN) || t_x[5],
                            dataField: "mo6",
                            dataType: "number",
                            width: 75,
                            //hidingPriority: 2,
                            allowFiltering: false,
                            cssClass: 'w_2',//class white space wrap header
                        },{
                            caption: _La$N('js_007_38|6', aLAN) || t_x[6],
                            dataField: "mo7",
                            dataType: "number",
                            width: 75,
                            //hidingPriority: 1,
                            allowFiltering: false,
                            cssClass: 'w_2',//class white space wrap header
                        }, {
                            //hidingPriority: 0,
                        }].map(function (it, xz) {
                            //

                            it.visible = !it.dataField || FIE.indexOf(it.dataField) > -1;
                            return it;;
                            //
                        }),

                        onContentReady: function (e) {

                            console.log('onContentReady: ', e.name + new Date().getTime())

                            srclocked(false);

                        }

                        ,
                        onOptionChanged: function (e) {
                            //console.log('onOptionChanged: ', e.fullName + new Date().getTime())
                            if (e.name && ['filterValue', 'paging', ].indexOf(e.name) > -1) {
                                srclocked(true);
                            };
                        }


                    }).dxDataGrid('instance');

                //
                //note gioi tinh ..
                var Nu = (_La$N('js_013_12|0', elUI.lan) || 'Female')
                    , Nam = (_La$N('js_013_12|1', elUI.lan) || 'Male');
                //
                dogDIV.append(
                '<div class="m-auto px-3 pt-4 text-center" style="max-width:1200px">' +
                '    <div class="alert gender-note" role="alert">' +
                '        <h4 class="alert-heading"><i class="ti-info-alt text-warning mr-2"></i><span>' + (_La$N('js_013_12|2', elUI.lan) || 'Notes') + '</span></h4>' +

                '        <p class="font-italic">' + (_La$N('js_013_12|4', elUI.lan) || 'The [Gender] column will be handled automatically:') + '</p>' +

                '           <span class="text-primary text-nowrap"><i class="fa fa-mars  mr-1" aria-hidden="true"></i>' + Nam + ' = ' + "'" + Nam + "' - <i>" + (_La$N('js_013_12|5', elUI.lan) || 'not case sensitive') + '</i> | (' + (_La$N('js_013_12|3', elUI.lan) || 'Default') + ')</span>' +
                '           <span class="text-danger text-nowrap"><i class="fa fa-venus mx-1" aria-hidden="true"></i>' + Nu + ' = ' + "'" + Nu + "' - <i>" + (_La$N('js_013_12|5', elUI.lan) || 'not case sensitive') + '</i></span>' +
                '        <hr class="hrx">' +



                '        <p class="font-italic">' + (_La$N('js_013_12|7', elUI.lan) || 'The [Marital] column accepts the following values ​​(case insensitive):') + '</p>' +

                '<span class="text-primary text-nowrap">' + (jdat && jdat.marr || []).reduce(function (pig, v) { pig.push(v.dis); return pig; }, []).join(' / ') + '</span>' +


                '        <hr class="hrx">' +

                '        <p class="font-italic">' + (_La$N('js_013_12|8', elUI.lan) || 'The [Degree] column accepts the following values ​​(case insensitive):') + '</p>' +

                '<span class="text-primary text-nowrap">' + (jdat && jdat.degr || []).reduce(function (pig, v) { pig.push(v.dis); return pig; }, []).join(' / ') + '</span>' +


                '        <hr class="hrx">' +



                '        <p class="mb-0" data-lang="js_013_7|2"><i class="text-small">' + (_La$N('js_013_12|6', elUI.lan) || 'Date type data column will be automatically added if missing or invalid') +
                ': - ' + "[" + aLAN.js_007_9 + "] "  + (_La$N('js_013_12|3', elUI.lan) || 'Default').toLowerCase() + '</i>: 1/1/2000 <i class="text-small"> - ' + "[" + aLAN.js_007_10 + "] " + (_La$N('js_013_12|3', elUI.lan) || 'Default').toLowerCase() + '</i>: ' + fmtSD.format(new Date()) + '</p>' +

                '   </div>' +
                '</div>'
                )
            }
            ,

            gV_DS_OP = {

                "00": function (dat, VAL) {
                    //
                    if (!dat) return this;
                    //
                    const cot = this[0], fe = this[1],
                        acNO = cot[0],
                        empC = cot[1];
                    //
                    var RE = {};
                    //
                    //debugger;
                    //
                    //
                    cot.some(function (col, z) {
                        //
                        const it = dxFRM.items[fe._idx[z]],
                            cel = (it.typ || elUI.fTXT)(dat[col], it.dataField, it.mLen);
                        //
                        RE[it.dataField] = cel;
                        //
                        if (z < 2) {
                            //
                            if ((!cel || cel.toString().trim().length == 0) ||

                                (z == 0 && isNaN(cel)) ||


                                VAL.filter(function (chk) {
                                //check ma AC + empcode

                                    return !chk[it.dataField] || chk[it.dataField].toString().toLowerCase() == cel.toString().toLocaleLowerCase();

                                }).length > 0) {
                                    //
                                    RE = null;
                                    return true;
                                    //
                                };
                        };
                        //
                    });
                    //
                    return RE;
                    //
                }
                ,

                0: function () {
                    var cot = [], fe = [];
                    fe._idx = [];
                    //
                    //debugger;

                    Array.from({ length: dxFRM.items.length-2 /*bo 2 cot from row index va cot limit row*/ }, function (x, i) {

                        cot.push(XLSX.utils.encode_col(i + 1));
                        fe.push(dxFRM.items[i].dataField);
                        fe._idx.push(i);

                    });
                    //
                    return gV_DS_OP["00"].bind([cot, fe]);
                    //
                }
                ,

                1: function (field) {
                    //
                    var cot = [], fe = [];
                    fe._idx = [];
                    //
                    //debugger;

                    Array.from({ length: dxFRM.items.length - 2 /*bo 2 cot from row index va cot limit row*/ }, function (x, i) {
                        //
                        if (!dxFRM.items[i].hasOwnProperty('visible')) {//nhung field ko co thuoc tinh visible la field mac dinh can thiet

                            var dF = field[dxFRM.items[i].dataField];
                            //
                            if (dF && dF.trim().length > 0) {
                                //
                                cot.push(dF.trim());
                                //
                                fe.push(dxFRM.items[i].dataField);
                                //
                                fe._idx.push(i);
                                //
                            };
                        };
                        //
                    });
                    //
                    //
                    return gV_DS_OP["00"].bind([cot, fe]);
                    //
                }
                ,
                2: function (field) {
                    //
                    var cot = [], fe = [];
                    fe._idx = [];
                    //
                    //debugger;

                    Array.from({ length: dxFRM.items.length - 2 /*bo 2 cot from row index va cot limit row*/ }, function (x, i) {
                        //
                        var dF = field[dxFRM.items[i].dataField];
                        //
                        if (dF && dF.trim().length > 0) {
                            //
                            cot.push(dF.trim());
                            //
                            fe.push(dxFRM.items[i].dataField);
                            fe._idx.push(i);
                            //
                        };
                        //
                    });
                    //
                    //
                    return gV_DS_OP["00"].bind([cot, fe]);
                    //
                }
            }

            ,

            gV_DS = function (opFi, sNA, field) {

                var sht = ifr000.wb.Sheets[sNA],

                    ref = sht['!ref'] || "A1:B1",

                    range = XLSX.utils.decode_range(ref);

                if (!isNaN(parseInt(field.s_dongdulieu))) {
                    range.s.r = parseInt(field.s_dongdulieu);
                };
                if (!isNaN(parseInt(field.e_dongdulieu))) {
                    range.e.r = parseInt(field.e_dongdulieu);
                };
                //
                if (range.e.r < range.s.r) {//neu end row < starrow
                    range.s.rr = range.s.r;//start tam
                    range.s.r = range.e.r //start=end
                    range.e.r = range.s.rr;//end = start tam
                    delete range.s.rr;//delete start tam
                };
                //
                //
                var hwnd = gV_DS_OP[opFi](field);
                //
                //debugger;
                //
                var VAL = [];
                //https://stackoverflow.com/questions/53163552/format-date-with-sheetjs
                XLSX.utils.sheet_to_json(sht, { header: "A", range: range, raw: false, dateNF: 'yyyy-mm-dd' }).map(function (it, i) {
                    //
                    i = hwnd(it, VAL);
                    if (i) VAL.push(i);
                    //
                });
                //
                return [

                    new DevExpress.data.ArrayStore({
                        key: 'acno',
                        data: VAL
                    })

                    , hwnd()

                ]
            }

            ,

            buocwiz
            ,

            sWIX
            ,

            S3_COMMIT = function () {
                //
                //debugger;
                //
                var Nu = (_La$N('js_013_12|0', elUI.lan) || 'Female').toLowerCase()
                    , Nam = (_La$N('js_013_12|1', elUI.lan) || 'Male').toLowerCase()
                , defHD = new Date()

                , jdat = S3_COMMIT.jdat


               , marr = (jdat && jdat.marr || []).reduce(function (pig, v) { pig[v.dis.replace(/\s+/g, '').trim().toLowerCase()] = v.id; return pig; }, {})
               , degr = (jdat && jdat.degr || []).reduce(function (pig, v) { pig[v.dis.replace(/\s+/g, '').trim().toLowerCase()] = v.id; return pig; }, {});

                //
                // ✅ Reset a Date's time to midnight
                defHD.setHours(0, 0, 0, 0);
                //
                //
                var reLOA = function () {
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
                }
                ,
                sec = [1], pos =[2]//lot san kind cua master
                ,

                nDB = elUI.xemtruoc.option('dataSource')._array.map(function (d, i) {
                    //
                    var tmp = '';

                    //xu ly phong ban ...
                    if (d.secid) {
                        tmp = d.secid.trim().substring(0, 100);
                        d.secid = sec.indexOf(tmp);
                        //
                        if (d.secid < 1) {//do index start 1
                            d.secid = sec.length ;// i + 1;
                            sec.push(tmp);
                        };
                    } else {
                        d.secid = -1;
                    };
                    //
                    //xu ly chuc vu
                    if (d.posid) {
                        tmp = d.posid.trim().substring(0, 100);
                        d.posid = pos.indexOf(tmp);
                        //
                        if (d.posid == -1) {//do index start 1
                            d.posid = pos.length;// i + 1;
                            pos.push(tmp);
                        };
                    } else {
                        d.posid = -1;
                    };
                    //
                    //
                    //
                    d.id = i + 1;
                    d.pid = 0;
                    //
                    //
                    d.gender = (d.gender && d.gender.toLowerCase() == Nu) ? 0 : 1;

                    d.birthday = elUI.fNGA(d.birthday) || new Date(2000, 0, 1);

                    d.hireday = elUI.fNGA(d.hireday) || new Date(defHD);
                    //
                    const marV = d.marital && d.marital.replace(/\s+/g, '').trim().toLowerCase() || '';
                    d.marital = marr[marV] ? Number(marr[marV]) : 10;//default single
                    //
                    const degrV = d.degree && d.degree.replace(/\s+/g, '').trim().toLowerCase() || '';
                    d.degree = degr[degrV] ? Number(degr[degrV]) : null;//default single
                    //
                    //
                    return d;
                })


                ,
                dburl = '/api/empprofile';
                //
                //debugger;
                //
                $.when($mainO.svrDAT({

                    "act": 'IMPORT', "tabId": _tabId, 'tokin': tabglobalJS['tokin'], uri: dburl, dat: JSON.stringify(nDB),mas:JSON.stringify([sec,pos])

                })).then(function (v1) {
                    //
                    reLOA();
                    //
                }, function (error) {

                    //debugger;
                    reLOA();

                });
                //
            };




        return {

            init: function (pDIV,exO) {
                //
                elUI.__refW = pDIV;
                //
                var dume = this;
                //
                //thang nao trigger cung duoc, va su kien lot o ngoai 
                pDIV.trigger('get', [srcp$f + '/media/utils/naptep_tmpl.html' + src$id, function (data) {//get co ky tu \x03 giua chu e va chu t
                    //  
                    var ecU = this;
                    pDIV.trigger('',//trigger event "\x1C\x1D\x1E\x1F"
                    [data, false, $.Deferred().done(function () {
                        //
                        var rawHTML = $(adCS(arguments[0], ecU));
                        rawHTML = rawHTML.find('.upload_hsnv_excel');
                        //
                        rawHTML.find('[data-lang]').each(function (idx, el) {
                            //
                            var key = el.getAttribute('data-lang');
                            $(el).html(_La$N(key, elUI.lan));
                            //
                        });

                        pDIV.html(rawHTML.html());
                        //
                        if (!exO ) {
                            dume.init_S(pDIV);
                        } else {
                            dume.init_R(pDIV, exO);
                        };
                        //
                    })]);
                    //
                }]);
            }
            ,
            init_S: function (frmEL) {
                //
                dxFRM.items = dxFRM.items.concat([{
                    dataField: "s_dongdulieu",
                    editorOptions: {
                        editorType: 'dxNumberBox',
                        placeholder: 'auto',
                        onValueChanged: row_idx,
                        labelMode: 'static'
                    },
                    label: {
                        text: _La$N('js_013_9|0', elUI.lan) || 'Row start'
                    }
                }
                , {
                    dataField: "e_dongdulieu",
                    editorOptions: {
                        editorType: 'dxNumberBox',
                        placeholder: 'auto',
                        onValueChanged: row_idx,
                        labelMode: 'static'
                    },
                    label: {
                        text: _La$N('js_013_9|1', elUI.lan) || 'Row end'
                    }
                }]);
                //
                //
                //
                buocwiz = frmEL.find('.buocwiz >div')
                sWIX = frmEL.find('.smartwizard')
                //
                //
                var upDIV = buocwiz.eq(0).children('div').first(),

                    nut = '<div class="text-center pb-3">' +
                                '<a mnu="bak" type="button" class="btn btn-primary btn-o"><i class="fa fa-arrow-circle-left mr-2"></i><span>' + (_La$N('js_013_5|2', elUI.lan) || 'Back') + '</span></a>' +
                                '<a  mnu="nxt" type="button" class="btn btn-primary btn-o ml-2"><span>' + (_La$N('js_013_5|1', elUI.lan) || 'Next') + '</span><i class="fa fa-arrow-circle-right ml-2"></i></a>' +
                            '</div>',

                    S3 = function (b) {
                        //
                        var mnu = b.currentTarget.getAttribute('mnu');

                        if (mnu == 'bak') {

                            sWIX.goBackward();

                        } else if (mnu == 'nxt') {
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
                                    //
                                    srclocked(true);

                                    setTimeout(function () {
                                        //
                                        S3_COMMIT();
                                        //
                                    }, 10);

                                    //
                                    //clean database
                                    //var hed = 'appcsdl_emps',
                                    //    tenDB = 'apphrm_localdb';

                                    //lo$DB(function (db) {
                                    //    //
                                    //    if (db.kq == 0) {//create new
                                    //        //
                                    //        S3_COMMIT(tenDB, hed);
                                    //        //
                                    //        db.cb('cancel');
                                    //        //
                                    //    } else if (db.kq == 1) { //ok
                                    //        //
                                    //        //clear table 
                                    //        //
                                    //        var ts = db.rst.transaction([/*lin,*/ hed], "readwrite"),
                                    //            tcStore = ts.objectStore(hed);
                                    //        //
                                    //        tcStore.clear();
                                    //        //
                                    //        S3_COMMIT(tenDB, hed);
                                    //        //
                                    //    };

                                    //}, tenDB);
                                    //
                                    //
                                };
                            });
                        };
                    }

                    ,

                    S2 = function (e) {//at step preview

                        const mnu = e.currentTarget.getAttribute('mnu');
                        if (mnu == 'bak') {
                 
                            sWIX.goBackward();

                        } else if (mnu == 'nxt') {
                            //
                            //debugger;
                            //
                            const opFi = S2.colop.indexOf(S2.ctrl.option('value')),

                                sNA = S2.shet.option('value'), //ifr000.wb.SheetNames[ifr000.wb.Workbook.WBView[0].activeTab],//

                                field = elUI.frm.option('formData');
                            //
                            //
                            if (!S2.src || S2.src[0] != opFi || opFi[1] != sNA || opFi[2] != JSON.stringify(field)) {
                                //
                                srclocked(true);

                                setTimeout(function () {

                                    buocwiz.eq(2).find('.alert:not(.gender-note)').addClass('alert-success')

                                        .empty()

                                        .append(
                                        '<h4 class="alert-heading text-center d-none">Warning !</h4>' +

                                        '<p class="font-italic d-none"></p>' +

                                        '<hr class="hrx d-none" />' +

                                        '<p class="mb-0">' + (_La$N('js_013_10|1', elUI.lan) || 'If the employee information in the list below is complete. Press the Next button to finish.') + '</p>'

                                        );



                                    const DS = gV_DS(opFi, sNA, field);


                                    if (!elUI.xemtruoc) {

                                        //debugger;

                                        $mainO.svrDAT({

                                            uri: '/api/headermaster', "act": 'GET', 'qry': 'jdat'//dung chung voi dashboard

                                        }).done(function (v1) {

                                            //debugger;

                                            gid_HIS(buocwiz.eq(2).append(nut).on('click', '.btn', S3), DS, v1);

                                        });



                                    } else {
                                        //
                                        //test hide column
                                        elUI.xemtruoc._controllers.columns._columns.forEach(function (cl) {
                                            cl.visible = !cl.dataField || DS[1][1].indexOf(cl.dataField) > -1;
                                        });
                                        //
                                        elUI.xemtruoc.option({
                                            'filterValue': '',
                                            'dataSource': DS[0]
                                        });
                                        //
                                        elUI.xemtruoc.repaint();
                                        //
                                    };
                                    //
                                    sWIX.goForward();
                                    //
                                });

                            } else {
                                sWIX.goForward();
                            };
                            //
                            S2.src = [opFi, sNA, JSON.stringify(field)];
                            //
                        };
                    }
                    ,

                    S2_map = function (colop, v) {
                        switch (colop.indexOf(v)) {
                            case 0: {
                                S2.frm.parent().addClass('d-none');
                                elUI.frm.option('visible', false);
                                break;
                            }
                            case 1: {
                                S2.frm.parent().removeClass('d-none');
                                elUI.frm.option('visible', true);
                                //
                                //
                                dxFRM.items.forEach(function (it) {
                                    if (it.hasOwnProperty('visible')) {
                                        it.visible = false;
                                    }
                                });
                                //
                                elUI.frm.option({
                                    'items': dxFRM.items,
                                    'visible': true
                                });
                                //
                                break;
                            }
                            case 2: {

                                S2.frm.parent().removeClass('d-none');
                                //
                                dxFRM.items.forEach(function (it) {
                                    if (it.hasOwnProperty('visible')) {
                                        it.visible = true;
                                    }
                                });
                                //
                                elUI.frm.option({
                                    'items': dxFRM.items,
                                    'visible': true
                                });
                                //
                                break;
                            }
                        }
                    }

                    ,

                    S2_sel = function (sNA, mapO) {
                        //
                        debugger;

                        var sht = ifr000.wb.Sheets[sNA],
                            ref = sht['!ref'] || "A1:B1";
                        //
                        //
                        S2.COL = Array.from({ length: XLSX.utils.decode_range(ref).e.c + 1 }, function (x, i) {

                            return XLSX.utils.encode_col(i);

                        });// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L"],
                        //
                        //doc file excel va tao select box
                        for (var z = 0; z < dxFRM.items.length-2; z++) { //tru 2 fieldd  start row index and maxrow limit
                            //
                            $.extend(dxFRM.items[z], {

                                editorType: 'dxSelectBox',

                                editorOptions: {

                                    items: S2.COL

                                    ,

                                    onValueChanged: function (e) {

                                    }
                                    ,

                                    placeholder: 'Map column'

                                    ,

                                    showClearButton: z>1// (dxFRM.items[z].dataField == 'ten' || dxFRM.items[z].hasOwnProperty('visible')) ? true : false

                                    ,

                                    value:  mapO == 2 ? dxFRM.formData[dxFRM.items[z].dataField]  :(  dxFRM.items[z].hasOwnProperty('visible') ? null : S2.COL[z + 1])//ignore col A

                                }
                            });
                            //
                            //chi tam thoi update value , chua update option cua frm
                            if (mapO != 2) {
                                dxFRM.formData[dxFRM.items[z].dataField] = mapO == 1 && dxFRM.items[z].hasOwnProperty('visible') ? null : S2.COL[z + 1];//ignore col A
                            };
                            //
                        };
                        //
                    }
                    ,

                    S2_RESET = function (va) {
                        //
                        S2_map(S2.colop, va);
                        //
                        elUI.frm.option('formData', dxFRM.formData);
                    }

                    ,
                    S1 = function (dat) {
                        //
                        dxFRM.formData['s_dongdulieu'] = 3;//from row index 3
                        dxFRM.formData['e_dongdulieu'] = undefined;//lay het
                        //
                        //
                        debugger;
                        const realEXL = ifr000.wb.Workbook && ifr000.wb.Workbook.WBView && ifr000.wb.Workbook.WBView.length>0;
                        realEXL && S2_sel(ifr000.wb.SheetNames[ifr000.wb.Workbook.WBView[0].activeTab], 0);
                        //
                        elUI.xls.prev().remove();//remove error display
                        //
                        if (realEXL) {
                            //
                            elUI.xls.removeClass('d-none');

                        } else {

                            elUI.xls.addClass('d-none');

                            $(nut).find("[mnu='bak']").removeClass('btn-primary').addClass('btn-danger text-danger').appendTo(

                            $('<div class="alert mx-auto mb-3 text-center alert-danger" role="alert" style="max-width:1000px;width: fit-content;">' +

                                    '<p class="mb-0">' + (_La$N('js_013_6|2', elUI.lan) || 'OPPS! Has error during render file content.') + '</p>' +
                                     '<hr class="hrx">' +
                             '</div>').insertBefore(elUI.xls)
                            ).removeAttr('mnu').one('click', function () {
                                upDIV.find(".remove-file-icon").trigger('click');
                                elUI.xls.find("[mnu='bak']").trigger('click');
                            });

                        };



                        //
                        S2.preventOPT = true;
                        //
                        if (!elUI.frm) {//lan dau load form
                            //
                            //
                            var btn = $('<div class="m-auto pt-1 text-center" style="max-width:1300px">' +

                                    '<div class="alert mb-0 p-0" role="alert">' +

                                    '<h4 class="alert-heading"><i class="ti-light-bulb text-warning mr-1"></i>' + (_La$N('js_013_8|0', elUI.lan) || 'Specify data column') + '</h4>' +

                                    '<p class="font-italic">' + (_La$N('js_013_8|1', elUI.lan) || "The 'default' option is used for the Excel template we provide. You have another option to customize the compatibility with the employee information column.") + '</p>' +

                                     '<div>' +

                                          '<div class="colmap_tuychon mx-auto d-sm-inline-block"></div>' +

                                      '</div>' +


                                    '<div class="d-none my-4"><div class="second-group sel_buoc2"></div></div>' +

                                        '<hr class="hrx">' +


                                    '</div>' +
                                '</div>' +


                                nut)

                            .appendTo(elUI.xls)

                            .on('click', '.btn', S2)

                            .on('click', '.alert-heading', show_hlp),//chi de test ie11

                            colop = S2.colop = [
                                   _La$N('js_013_8|2', elUI.lan) || 'Default',
                                   _La$N('js_013_8|3', elUI.lan) || 'Basic',
                                   _La$N('js_013_8|4', elUI.lan) || 'Advance'
                            ];
                            //
                            //
                            //
                            S2.frm = elUI.xls.find('.second-group').addClass();
                            //
                            //
                            S2.ctrl = btn.find('.colmap_tuychon').dxRadioGroup({
                                items: colop,
                                //placeholder: 'Choose Product',
                                layout: 'horizontal',
                                value: colop[0],
                                onValueChanged: function (e) {
                                    //
                                    if (S2.preventOPT) return;
                                    //
                                    srclocked(true);
                                    setTimeout(function () {
                                        //
                                        S2_RESET(e.value);
                                        //
                                        srclocked(false);
                                        //
                                    }, 10);
                                }
                            }).dxRadioGroup('instance');
                            //
                            //
                            S2.shet = $('<div class="mx-auto  mb-3" style="max-width:200px"></div>').insertBefore(S2.frm).dxSelectBox({
                                label: "Sheets"
                            }).dxSelectBox('instance');

                            //
                            elUI.frm = $('<div></div>').appendTo(S2.frm)
                                .dxForm(dxFRM).dxForm('instance');
                            //
                        } else {
                            //
                            S2.ctrl.option('value', S2.colop[0]);
                            //
                            S2_RESET(S2.colop[0]);
                            //
                        };
                        //
                        //
                        if (realEXL) {
                            //
                            S2.shet.option({

                                items: ifr000.wb.SheetNames,

                                value: ifr000.wb.Workbook && ifr000.wb.Workbook.WBView ? ifr000.wb.SheetNames[ifr000.wb.Workbook.WBView[0].activeTab] : null,

                                onValueChanged: function (e) {
                                    //
                                    srclocked(true);

                                    setTimeout(function () {
                                        //
                                        var mapO = S2.ctrl.option('value');
                                        //
                                        S2_sel(e.value, S2.colop.indexOf(mapO));
                                        //
                                        S2_map(S2.colop, mapO);

                                        srclocked(false);

                                    }, 10);
                                    //
                                }
                            });
                        };
                        //
                        //
                        S2.shet._$element[(ifr000.wb.SheetNames.length > 1 ? 'remove' : 'add') + 'Class']('d-none');
                        //
                        //active step 2
                        sWIX.goForward();
                        //
                        srclocked(false);
                        //
                        buocwiz.eq(0).removeClass('dangtai');
                        taiLing('');
                        //
                        S2.preventOPT = false;
                        //
                    };

                UpTep(upDIV[0], {

                    lan: {
                        dragDropText_normal: _La$N('js_013_3|0', elUI.lan),
                        dragDropText_dragin: _La$N('js_013_3|1', elUI.lan),
                        dragDropText_drop: _La$N('js_013_3|2', elUI.lan),
                        nhan: _La$N('js_013_4|3', elUI.lan),
                        uploadButton: _La$N('js_013_5|0', elUI.lan),
                        selfirst: _La$N('js_013_6|0', elUI.lan),
                        wrongfile: _La$N('js_013_6|1', elUI.lan)
                    }
                    ,
                    upclk: function (fi, btn, prog, fileFlag) {
                        //
                        if (fileFlag == 1) {
                            sWIX.goForward(2);
                            return;
                        };
                        //
                        //
                        taiLing('Loading ...');
                        //srclocked(true);
                        helloguy.show();
                        //
                        //
                        //tao 1 div chua form sau khi upload file excel se cho user chon
                        if (!elUI.xls) elUI.xls = $('<div class="mx-3"></div>').prependTo(frmEL.find('.im_exfile').css('display', 'none'));
                        //
                        //
                        //lam mo form upload
                        buocwiz.eq(0).addClass('dangtai');
                        //
                        //
                        //
                        //
                        //
                        //
                        //
                        //
                        //************* doan code debug ignore load excel **************
                        //$.when(read_Exls(fi)).done(function (a) {
                        //    S1(a);
                        //});   
                        //return;
                        //**************************************************************
                        //
                        //
                        //
                        //
                        //
                        var defe = $.Deferred()
                            ,
                            width = 0
                            ,

                            frame = function () {

                                //const tile = dat[0] / dat[1];
                                //taiLing('Uploading ...' + Math.round(100 * tile) + '%');

                                //width = Math.round(390 * tile);

                                //console.log(width);
                                //width = 390;
                                // prog.style.width = width + "px";

                                if (width >= 390) {
                                    clearInterval(id);
                                    btn.innerHTML = (_La$N('js_013_5|1', elUI.lan) || "Continue") + ' <span class="ml-2 fa fa-hand-o-right"></span>';
                                    defe.resolve('prog');
                                } else {
                                    width += 5;
                                    prog.style.width = width + "px";
                                }
                            }
                            ,
                            id = new Date().getTime();// setInterval(frame, 50);
                        //
                        frmEL.off('up_prog').on('up_prog', function (e, dat) {
                            //debugger;
                            if (!dat) {
                                const dely = 2 * (new Date().getTime() - id) / 290;
                                //console.log('upload period: ', dely);
                                id = setInterval(frame, dely < 50 ? 50 : dely);
                            } else {
                                clearInterval(id);
                                width = 390;
                                prog.style.width = width + "px";
                                frame();
                                defe.resolve('prog');
                            };
                        });
                        //
                        //srclocked(false);
                        //return;
                        //
                        //debugger;
                        //
                        $.when(ifr000(frmEL, fi), read_Exls(fi), defe).done(function (va, dat, pg) {
                            //
                            S1(dat);
                            //
                        });
                        //
                    }

                });
                //
                //
                _gsC(srcpf$ + '/media/js/form-wizard.js', 'js', function () {
                    //
                    // Smart Wizard
                    sWIX = sWIX.on("mousedown touchstart", function (e) {

                        //debugger;
                        setTimeout(function () {
                            $(document).trigger('click');//hide popup menu
                        }, 100);

                    }).smartWizard({

                        transitionEffect: 'none',

                        selected: 0,

                        onShowStep: function (e, f) {
                            //
                            buocwiz.eq(this.curStepIdx).fadeIn();
                            //
                            frmEL[0].style.setProperty('--sw-progress-width', 100 * ((1 + this.curStepIdx) / this.steps.length) + '%');
                            //
                            this.steps[this.curStepIdx].classList.add('active');
                            //
                            return true;
                        }
                        ,
                        onLeaveStep: function (e, f) {
                            //
                            buocwiz.eq(this.curStepIdx).css('display', 'none');
                            //
                            //
                            return true;
                        }

                    }).data('smartWizard');
                    //




                    srclocked(false);



                    //
                }, 'form-wizard.js');


                $('.sw-toolbar-elm').on('click', '.btn', function (a) {

                    if (a.currentTarget.getAttribute('mnu') == 'SAV') {

                        debugger;
                        //https://docs.sheetjs.com/docs/api/utilities
                        //https://docs.sheetjs.com/xspreadsheet/
                        //https://stackoverflow.com/questions/34813980/getting-an-array-of-column-names-at-sheetjs
                        //https://github.com/SheetJS/sheetjs/issues/214

                        var u8 = XLSX.write(ifr000.wb, { type: "buffer", bookType: "xlsx" });

                        var sht = ifr000.wb.Sheets[ifr000.wb.SheetNames[0]];
                        var range = XLSX.utils.decode_range(sht['!ref']);

                        var columnsArray = XLSX.utils.sheet_to_json(sht, { header: 1 });


                        var dog = XLSX.utils.decode_range(sht['!ref']).e.c + 1

                        //
                        //
                    } else if (a.currentTarget.getAttribute('mnu') == 'LOD') {

                        //$.when(DU_LIEU.LOAD()).done(function (a) {

                        //    debugger;

                        //    if (a.length > 0 && a[0].bl) {//Blob valid

                        //        $.when(read_Exls(a[0])).done(function (a) {
                        //            debugger;
                        //            srclocked(false);
                        //        });
                        //        //
                        //    };
                        //    //
                        //});

                    };

                });
                //
                //
            }
            ,

            init_R: function (frmEL, exO) {

                buocwiz = frmEL.find('.buocwiz >div')
                sWIX = frmEL.find('.smartwizard')
                //
                //
                var upDIV = buocwiz.eq(0).children('div').first(),

                    nut = '<div class="text-center pb-3">' +
                                '<a mnu="bak" type="button" class="btn btn-primary btn-o"><i class="fa fa-arrow-circle-left mr-2"></i><span>' + (_La$N('js_013_5|2', elUI.lan) || 'Back') + '</span></a>' +
                                '<a  mnu="nxt" type="button" class="btn btn-primary btn-o ml-2"><span>' + (_La$N('js_013_5|1', elUI.lan) || 'Next') + '</span><i class="fa fa-arrow-circle-right ml-2"></i></a>' +
                            '</div>';

                //
                _gsC(srcpf$ + '/media/js/form-wizard.js', 'js', function () {
                    //
                    // Smart Wizard
                    sWIX = sWIX.on("mousedown touchstart", function (e) {

                        //debugger;
                        setTimeout(function () {
                            $(document).trigger('click');//hide popup menu
                        }, 100);

                    }).smartWizard({

                        transitionEffect: 'none',

                        selected: 0,

                        onShowStep: function (e, f) {
                            //
                            //
                            var ste = this.curStepIdx;
                            //
                            buocwiz.eq(this.curStepIdx).fadeIn(function () {
                                //if (ste == 1) {
                                //    $(this).html('dume');
                                //};
                            });
                            //
                            //
                            frmEL[0].style.setProperty('--sw-progress-width', 100 * ((1 + this.curStepIdx) / this.steps.length) + '%');
                            //
                            this.steps[this.curStepIdx].classList.add('active');
                            //
                            //
                            if (exO.buoc) {
                                exO.buoc['onShowStep'](this, buocwiz);
                            };
                            //
                            //
                            //
                            return true;
                        }
                        ,
                        onLeaveStep: function (e, f) {
                            //
                            buocwiz.eq(this.curStepIdx).css('display', 'none');
                            //
                            //
                            return true;
                        }

                    }).data('smartWizard');
                    //


                    frmEL.find('.buttonFinish').on('click', function (a) {

                        alert('hree');

                    });


                    srclocked(false);



                    //
                }, 'form-wizard.js');



            }
            ,
            reset_S: function (cb) {
                //
                buocwiz.eq(0).find(".remove-file-icon").trigger('click');
                //
                sWIX.goToStep(1);
                //
                sWIX.target.find('a.nav-link').each(function (i, e) {

                    if (i == 0) {

                    } else {
                        $(e).removeClass('done selected active').addClass('disabled')
                    }
                });
                //
                if (cb) cb();
                //
            }

        };

    };


    return {
        createUPL: function (op) {
            return new O(op);
        }
    };
});