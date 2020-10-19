jQuery.extend(jQuery.validator.messages, {
    required: "This field is required. xxx",
    remote: "Please fix this field.",
    email: "Please enter a valid email address.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

var Login = function () {
	"use strict";
	
	var runSetDefaultValidation = function() {
		$.validator.setDefaults({
			errorElement : "span", // contain the error msg in a small tag
			errorClass : 'help-block',
			errorPlacement : function(error, element) {// render error placement for each input type
				if (element.attr("type") == "radio" || element.attr("type") == "checkbox") {// for chosen elements, need to insert the error after the chosen container
					error.insertAfter($(element).closest('.form-group').children('div').children().last());
				} else if (element.attr("name") == "card_expiry_mm" || element.attr("name") == "card_expiry_yyyy") {
					error.appendTo($(element).closest('.form-group').children('div'));
				} else {
					error.insertAfter(element);
					// for other inputs, just perform default behavior
				}
			},
			ignore : [], //':hidden',// DON'T IGNORE PLUGIN HIDDEN SELECTS, CHECKBOXES AND RADIOS!!!
			success : function(label, element) {
				label.addClass('help-block valid');
				// mark the current input as valid and display OK icon
				$(element).closest('.form-group').removeClass('has-error');
			},
			highlight : function(element) {
				$(element).closest('.help-block').removeClass('valid');
				// display OK icon
				$(element).closest('.form-group').addClass('has-error');
				// add the Bootstrap error class to the control group
			},
			unhighlight : function(element) {// revert the change done by hightlight
				$(element).closest('.form-group').removeClass('has-error');
				// set error class to the control group
			}
		});
	};
	var runLoginValidator = function() {
		var form = $('.form-login');
		var errorHandler = $('.errorHandler', form);
		form.validate({
			rules : {
			    email : {
			        required: true,
                    maxlength:30
			    },
				password : {
					minlength : 6,
					required: true,
                    maxlength:30
				}
			},
			submitHandler : function(form) {
				errorHandler.hide();
				form.submit();
			},
			invalidHandler : function(event, validator) {//display error alert on form submit
				errorHandler.show();
			}
		});
	};
	var runForgotValidator = function() {
		var form2 = $('.form-forgot');
		var errorHandler2 = $('.errorHandler', form2);
		form2.validate({
			rules : {
				email : {
				    required: true,
                    maxlength:30
				}
			},
			submitHandler : function(form) {
				errorHandler2.hide();
				form2.submit();
			},
			invalidHandler : function(event, validator) {//display error alert on form submit
				errorHandler2.show();
			}
		});
	};
	var runRegisterValidator = function() {
		var form3 = $('.form-register');
		var errorHandler3 = $('.errorHandler', form3);
		form3.validate({
			rules : {
				//full_name : {
				//	minlength : 2,
				//	required : true
				//},
				//address : {
				//	minlength : 2,
				//	required : true
				//},
				//city : {
				//	minlength : 2,
				//	required : true
				//},
				//gender : {
				//	required : true
				//},
				email : {
				    required: true,
                    maxlength:30
				},
				password : {
					minlength : 6,
					required: true,
                    maxlength:30
				},
				password_again : {
					required : true,
					minlength : 6,
					equalTo: "#password",
                    maxlength:30
				},
				captcha: {
					minlength : 5,
					required: true,
                    maxlength:30
				}
			},
			submitHandler : function(form) {
				errorHandler3.hide();
				form3.submit();
			},
			invalidHandler: function (event, validator) {//display error alert on form submit
				errorHandler3.show();
			}
		});
	};
	return {
		//main function to initiate template pages
		init : function() {
			runSetDefaultValidation();
			runLoginValidator();
			runForgotValidator();
			runRegisterValidator();
		}
	};
}();