
function UpTep(E$L, PS) {
    //
    // if this constructor is used without `new`, it adds `new` before itself:
    if (!(this instanceof UpTep)) {
        return new UpTep(E$L,PS);
    };
    //
    //
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
    , validF = fileInput.getAttribute('accept')||''

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

        if (!f) f = fileInput.files;

        if (f.length == 0) return;

        uploadButton.innerHTML = 'Upload';
        fileName.innerHTML = f[0].name;
        fileSize.innerHTML = (f[0].size / 1024).toFixed(1) + " KB";
        uploadedFile.style.cssText = "display: flex;";
        progressBar.style.width = 0;
        fileFlag = 0;
        //
        frmSTA.drop();
        //
    };

  

    frmSTA = {
        'normal': function () {
            uploadIcon.setAttribute('class', 'fa fa-cloud-upload upload-icon');
            dragDropText.innerHTML = 'Drag & drop any file here';
            //
            draggableFileArea.classList.remove('dropok');
            uploadButton.innerHTML = 'Upload';
            cannotUploadMessage.style.cssText = "display: none;";
            uploadedFile.style.cssText = "display: none;";
            fileInput.value = '';
        }
        ,
        'dragin': function () {
            uploadIcon.setAttribute('class', 'fa fa-clone upload-icon');
            if (fileFlag == 1) {
                dragDropText.innerHTML = 'Drop your file here!';
            };
        }
        ,
        'drop': function () {
            //
            draggableFileArea.classList.add('dropok');
            uploadIcon.setAttribute('class', 'fa fa-check-circle upload-icon');
            dragDropText.innerHTML = 'File Dropped Successfully!';

            var nhan = dragDropText.nextElementSibling.children;
            //nhan=[].slice.call(nhan.getElementsByTagName('span'));
            nhan[0].innerHTML = 'drag & drop or';
            nhan[1].querySelector("span:last-child").innerHTML = '';
            //
            cannotUploadMessage.style.cssText = "display: none;";
        }
    };



    fileInput.addEventListener("click", function () {
        fileInput.value = '';
        //console.log(fileInput.value);
    });

    fileInput.addEventListener("change", tepSEL);

    uploadButton.addEventListener("click", function () {
        let isFileUploaded = fileInput.value;
        if (isFileUploaded != '') {
            if (fileFlag == 0) {
                fileFlag = 1;
                var width = 0;
                var id = setInterval(frame, 50);
                function frame() {
                    if (width >= 390) {
                        clearInterval(id);
                        uploadButton.innerHTML = '<span class="material-icons-outlined upload-button-icon"></span> Uploaded';
                    } else {
                        width += 5;
                        progressBar.style.width = width + "px";
                    }
                };


       



                //// Create formData object
                //var formData = new FormData();
                //formData.append("file", fileInput.files[0]);
                ////
        
                PS.upclk && PS.upclk(fileInput.files[0]);




                //var xhttp = new XMLHttpRequest();
                //xhttp.open("POST", "upemp.php", true);
                ////
                ////xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                //xhttp.send(formData);
                ////
                //xhttp.onreadystatechange = function () {
                //    if (this.readyState == 4 && this.status == 200) {
                //        //
                //        //
                //        //
                //        //
                //        //alert(this.responseText)
                //        //
                //        //
                //        debugger;
                //        //var data = JSON.parse(this.responseText);
                //        //
                //        //
                //        ///
                //        //
                //        //**************************** LOAD IF *********************************************//
                //        function my_code() {
                //            console.log(" working");
                //            uploadForm.style.display = 'none';
                //            frm.style.display = '';
                //        };
                //        //
                //        var frm = document.createElement("iframe");
                //        frm.setAttribute("style", "height:565px;width:100%;border:none;display:none");
                //        frm.setAttribute("frameborder", "0");
                //        //
                //        frm.src = "https://view.officeapps.live.com/op/embed.aspx?src=https://apphrm.000webhostapp.com/" + this.responseText;
                //        document.body.appendChild(frm);
                //        frm.onload = my_code;

                //    };
                //};
                //event.preventDefault();
                //
            }
        } else {
            cannotUploadMessage.querySelector('.cannot-text').innerHTML = 'Please select a file first!';
            cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
        }
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
            var isOK=0;
            if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                if (validF.indexOf(e.dataTransfer.files[0].type) > -1) {
                    isOK = 1;
                };
            };
            //
            if (isOK == 1) {
                if (GetIEVersion() != 11) {//phai cho no load truoc.
                    fileInput.files = e.dataTransfer.files;
                };
                tepSEL(null, e.dataTransfer.files);
            } else {
                frmSTA.normal();
                cannotUploadMessage.querySelector('.cannot-text').innerHTML = 'Invalid file type !';
                cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
                fileFlag = 1;
            };
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



w0w.tabglobalJS['JS_JS_nhapxuat'] = (function () { // scoping


    "use strict";

    function O(opts) { // constructor


        var _tabId, $mainO,
            evtWK,
            calcSession,
            elUI = {},

            ifr000 = function (frmEL, fi) {
                //
                var defe = $.Deferred(),
                    hwnHOLE = -1,

                    downURL = [0],

                    lstSTO = ['hellohrm2020.ddns.net:10996/000webhostapp.com', 'apphrm.000webhostapp.com'],

                    subHOLE = function () {
                        //
                        if (evtWK) {
                            $(evtWK).remove();
                        };
                        //
                        //end detect.
                        clearTimeout(hwnHOLE);
                        //
                        evtWK = document.createElement('iframe');
                        evtWK.setAttribute("style", "height:565px;width:100%;border:none");
                        evtWK.setAttribute("frameborder", "0");
                        //
                        evtWK.onload = function (e) {
                            //
                        };
                        //
                        //
                        if (downURL.length < lstSTO.length) {//valid collection
                            //
                            var url = -1;//srcpf$.length > 0 ? '/apphrm.' : '';//https://apphrm.000webhostapp.com/
                            //
                            do {
                                //lay index random
                                url = Math.floor(Math.random() * lstSTO.length);
                            } while (downURL.indexOf(url)>-1);
                            //
                            //push vao de tranh ra lan sau
                            downURL.push(url);



                            ///media/utils/jsc/upemp.js
                            evtWK.setAttribute('src','//' + lstSTO[url] + '/upexcel.html?seson=' + btoa(calcSession + '|' + w0w.location.origin

                                + '|' + (!w0w.Worker || true)

                                + '|' + ('https://hellohrm.github.io/utils/media/utils/jsc/upemp.js?' + new Date().getTime())


                                ));


                            //
                            frmEL.find('.im_exfile').prepend(evtWK);//append vao step 3 main div
                            //
                            //dtect after 1 second
                            hwnHOLE = setTimeout(function () {
                                subHOLE();
                            }, 5000);
                            //
                        };
                    };
                //
                calcSession = new Date().getTime();
                apisvr.a$.sessions[calcSession] = {
                    id: calcSession,
                    fn: function (a, b, c) {
                        if (a == 'job') {
                            switch (b.evtData.messageType) {
                                case 0: {//calc ready !
                                    //
                                    //
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
                                    var blob = fi.slice(0, fi.size, fi.type);
                                    //formData.append(form[i].name, blob, files[0].name);
                                    evtWK.contentWindow.postMessage({ k: 1, dat: { na: fi.name, bl: blob, 'cat': fi.type } }, "*");
                                    //
                                    break;
                                    //
                                } case 1: {

                                    debugger;

                                    break;
                                }
                            };
                        };
                    }
                };

                //
                subHOLE();
                //
                //
                return defe.promise();
                //
                //
            };




        this.init = function (frmEL, cb, tabId, clickArgs, tabProps) {
            //
            _tabId = tabId;
            $mainO = cb('dbEngine');
            //
            var init_dataDIV = frmEL.find('.init_data');
            elUI.lan = JSON.parse(JSON.parse(atob(init_dataDIV.text())).lan);
            init_dataDIV.remove();



            //var iframeWin = frmEL.find("#da-iframe")[0].contentWindow;

            //debugger;
            //frmEL.find("#da-iframe").load(function () {
            //    debugger;
            //    $(this).contents().find("#m_excelEmbedRenderer_m_ewaEmbedViewerBar").css("height", "550px");
            //});

            frmEL.on('shown.bs.tab', function (e) {
                //debugger;
                //iframeWin.postMessage('myMessage.value', "*");

            }).find('[data-lang]').each(function (idx, el) {
                var key = el.getAttribute('data-lang');
                $(el).html(elUI.lan[key]);
            });
            //
            //
            UpTep(frmEL.find('.upload-form-container')[0], {
                upclk: function (fi) {
                    //
                    //debugger;
                    //
                    $.when(ifr000(frmEL, fi)).done(function (va) {
                        alert(va);
                    });
                    //
                    //
                }
            });
            //
            //
            _gsC(srcpf$ + '/media/js/form-wizard.js', 'js', function () {
                //
                // Smart Wizard
                frmEL.find('#smartwizard').smartWizard({
                    selected: 0,
                    onShowStep: function (e) {
                        console.log('onShowStep');
                        return true;
                    }
                    ,
                    onLeaveStep: function (e) {
                        console.log('onLeaveStep');
                        return true;
                    }
                });
                //
                srclocked(false);
                //
            }, 'form-wizard.js');










            frmEL.find('.sw-toolbar-elm').on('click', '.btn', function (e) {

                debugger;

                frmEL[0].style.setProperty('--sw-progress-width', '40%');


                var wiz = frmEL.find('#smartwizard').data('smartWizard');

                wiz.goForward();


            });




            return;
            //
            //
            //

          










            //admin$.DEV(function () {
            //    //

            //    srclocked(false);
            //    //
            //});


        };



        this.dispose = function () {
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