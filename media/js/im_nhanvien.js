"use strict";

(function () {

    debugger;
    //




    var isAdvancedUpload = function () {
        var div = document.createElement('div');
        return ('draggable' in div || 'ondragstart' in div && 'ondrop' in div) && 'FormData' in window && 'FileReader' in window;
    }();

    var draggableFileArea = document.querySelector(".drag-file-area")
    , browseFileText = document.querySelector(".browse-files")
    , uploadIcon = document.querySelector(".upload-icon")
    , dragDropText = document.querySelector(".dynamic-message")
    , fileInput = document.querySelector(".default-file-input")
    , cannotUploadMessage = document.querySelector(".cannot-upload-message")
    , cancelAlertButton = document.querySelector(".cancel-alert-button")
    , uploadedFile = document.querySelector(".file-block")
    , fileName = document.querySelector(".file-name")
    , fileSize = document.querySelector(".file-size")
    , progressBar = document.querySelector(".progress-bar")
    , removeFileButton = document.querySelector(".remove-file-icon")
    , uploadButton = document.querySelector(".upload-button:not(#test_msg)")
    , uploadForm = document.querySelector('.form-container')
    , fileFlag = 0;

    fileInput.addEventListener("click", function () {
        fileInput.value = '';
        console.log(fileInput.value);
    });

    fileInput.addEventListener("change", function (e) {
        console.log(" > " + fileInput.value);
        uploadIcon.innerHTML = 'check_circle';
        dragDropText.innerHTML = 'File Dropped Successfully!';
        document.querySelector(".label").innerHTML = 'drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: 0;"> browse file</span></span>';
        uploadButton.innerHTML = 'Upload';
        fileName.innerHTML = fileInput.files[0].name;
        fileSize.innerHTML = (fileInput.files[0].size / 1024).toFixed(1) + " KB";
        uploadedFile.style.cssText = "display: flex;";
        progressBar.style.width = 0;
        fileFlag = 0;
    });

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
                        uploadButton.innerHTML = '<span class="material-icons-outlined upload-button-icon"> check_circle </span> Uploaded';
                    } else {
                        width += 5;
                        progressBar.style.width = width + "px";
                    }
                };

                // Create formData object
                var formData = new FormData();
                formData.append("file", fileInput.files[0]);
                //
                //
                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", "upemp.php", true);
                //
                //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhttp.send(formData);
                //
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        //
                        //
                        //
                        //
                        //alert(this.responseText)
                        //
                        //
                        debugger;
                        //var data = JSON.parse(this.responseText);
                        //
                        //
                        ///
                        //
                        //**************************** LOAD IF *********************************************//
                        function my_code() {
                            console.log(" working");
                            uploadForm.style.display = 'none';
                            frm.style.display = '';
                        };
                        //
                        var frm = document.createElement("iframe");
                        frm.setAttribute("style", "height:565px;width:100%;border:none;display:none");
                        frm.setAttribute("frameborder", "0");
                        //
                        frm.src = "https://view.officeapps.live.com/op/embed.aspx?src=https://apphrm.000webhostapp.com/" + this.responseText;
                        document.body.appendChild(frm);
                        frm.onload = my_code;

                    };
                };
                event.preventDefault();
                //
            }
        } else {
            cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
        }
    });


    cancelAlertButton.addEventListener("click", function () {
        cannotUploadMessage.style.cssText = "display: none;";
    });

    if (isAdvancedUpload) {
        ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach(function (evt) {
            draggableFileArea.addEventListener(evt, function (e) {
                e.preventDefault();
                e.stopPropagation();
            })
        });


        ["dragover", "dragenter"].forEach(function (evt) {
            draggableFileArea.addEventListener(evt, function (e) {
                e.preventDefault();
                e.stopPropagation();
                uploadIcon.innerHTML = 'file_download';
                dragDropText.innerHTML = 'Drop your file here!';
            });
        });

        draggableFileArea.addEventListener("drop", function (e) {
            uploadIcon.innerHTML = 'check_circle';
            dragDropText.innerHTML = 'File Dropped Successfully!';
            document.querySelector(".label").innerHTML = 'drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: -23px; left: -20px;"> browse file</span> </span>';
            uploadButton.innerHTML = 'Upload';

            let files = e.dataTransfer.files;
            fileInput.files = files;
            console.log(files[0].name + " " + files[0].size);
            console.log(document.querySelector(".default-file-input").value);
            fileName.innerHTML = files[0].name;
            fileSize.innerHTML = (files[0].size / 1024).toFixed(1) + " KB";
            uploadedFile.style.cssText = "display: flex;";
            progressBar.style.width = 0;
            fileFlag = 0;
        });
    }

    removeFileButton.addEventListener("click", function () {
        uploadedFile.style.cssText = "display: none;";
        fileInput.value = '';
        uploadIcon.innerHTML = 'file_upload';
        dragDropText.innerHTML = 'Drag & drop any file here';
        document.querySelector(".label").innerHTML = 'or <span class="browse-files"> <input type="file" class="default-file-input"/> <span class="browse-files-text">browse file</span> <span>from device</span> </span>';
        uploadButton.innerHTML = 'Upload';
    });






    //var snd_msg = document.getElementById("test_msg");
    //snd_msg.addEventListener("click", function () {
    //    debugger;
    //    //window.parent.postMessage('Hello', '*');
    //    window.parent.postMessage({ 'msgtype': 'session', 'msgkind': session, 'evtData': { messageType: 0 } }, orgMsg);
    //})




    //debugger;
    ////**************************** post load *********************************************//
    //window.parent.postMessage({ 'msgtype': 'session', 'msgkind': session, 'evtData': { messageType: 0 } }, orgMsg);



})();
