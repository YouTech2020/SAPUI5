sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("ns.HTML5Module.controller.Home", {
			onInit: function () {

            },
            
            onClick: function(){
                alert("Hello! Welcome to sapui5 control");
            }
		});
	});
