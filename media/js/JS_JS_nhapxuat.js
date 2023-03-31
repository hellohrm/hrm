
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

        //uploadIcon.removeClass().addClass('fa fa-check-circle upload-icon');

        //dragDropText.innerHTML = 'File Dropped Successfully!';

        //E$L.querySelector(".nhan").innerHTML = 'drag & drop or <span class="browse-files"> <span class="browse-files-text"> <input type="file" class="default-file-input"/> browse file</span></span>';

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

            ifr000 = function (frmEL,fi) {

                calcSession = new Date().getTime();
                evtWK = document.createElement('iframe');
                evtWK.setAttribute("style", "height:565px;width:100%;border:none");
                evtWK.setAttribute("frameborder", "0");
                //
                //evtWK.setAttribute('seson', btoa(calcSession + '|' + w0w.location.origin + '|' + (!w0w.Worker || true)));
                //

                //debugger;
                //var iDoc = evtWK.contentWindow.document
                //    , attcalc = iDoc.createElement('script');

                apisvr.a$.sessions[calcSession] = {
                    id: calcSession,
                    fn: function (a, b, c) {
                        if (a == 'job') {
                            switch (b.evtData.messageType) {
                                case 0: {//calc ready !

                                    debugger;

                                    evtWK.contentWindow.postMessage({ k: 1, dat: fi }, "*");

                                    break;
                                } case 1: {

                                    debugger;

                                    break;
                                }
                            };
                        };
                    }
                };
                //
                //

                //'/media/js/attcalc.js'
                //attcalc.setAttribute('src', srcpf$ + "\x2F\x6D\x65\x64\x69\x61\x2F\x6A\x73\x2Fim_nhanvien.js" + src$id);//'https://hrm.dnd.vn'
                //iDoc.head.appendChild(attcalc);
                //
                //



                evtWK.onload = function () {
                    //

                };
                //



                debugger;
                //var c=frmEL.find("#da-iframe").contents();
                //var d=c.find("#m_excelEmbedRenderer_m_ewaEmbedViewerBar");
                //
                // div tag in which iframe will be added should have id attribute with value myDIV


                var url = srcpf$.length > 0 ? '/apphrm.' : '';//https://apphrm.000webhostapp.com/


                evtWK.setAttribute('src', '/' + url + '000webhostapp.com/upexcel.html?seson=' + btoa(calcSession + '|' + w0w.location.origin

                    + '|' + (!w0w.Worker || true)

                    + '|' + (srcpf$ + "\x2F\x6D\x65\x64\x69\x61\x2F\x6A\x73\x2Fim_nhanvien.js" + src$id)


                    ));


                frmEL.find('.im_exfile').prepend(evtWK);//append vao step 3 main div
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
                    debugger;
                    //
                    ifr000(frmEL, fi);
                    //
                }
            });



            srclocked(false);
            return;
            //
            //
            //

          










            admin$.DEV(function () {
                //

                srclocked(false);
                //
            });


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