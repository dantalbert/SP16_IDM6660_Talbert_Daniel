"use strict";

	var tabHeader = document.getElementsByClassName('tab');

	for(var i = 0; i < tabHeader.length; i++){
		tabHeader[i].addEventListener('click', activateTab);
	};		

	function activateTab(event) {
		var myID = this.id;
		var contentID = myID.replace('tab','step');

		deactivateAllTabs();

		document.getElementById(myID).className = "tab_active";
		document.getElementById(contentID).className = "step_active";

		console.log(myID);
		console.log(contentID);
	}

	function deactivateAllTabs() {
		
		document.getElementById('tab_1').className = "tab";
		document.getElementById('tab_2').className = "tab";
		document.getElementById('tab_3').className = "tab";
		document.getElementById('tab_4').className = "tab";
		document.getElementById('tab_5').className = "tab";
		document.getElementById('tab_6').className = "tab";
		
		document.getElementById('step_1').className="step";
		document.getElementById('step_2').className="step";
		document.getElementById('step_3').className="step";
		document.getElementById('step_4').className="step";
		document.getElementById('step_5').className="step";
		document.getElementById('step_6').className="step";

	};

