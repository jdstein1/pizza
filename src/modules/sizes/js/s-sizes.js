// s-toppings.js

(function() {
		'use strict';

		angular
				.module('pizza')
				.service('sSizes', sSizes)

		function sSizes() {
				// var title = "sSizes";
				// console.log('START',title);

				this.fSizesArr = function () {
					var sizesArr = [{
						"label":10,
						"baseprice":9.50
					},{
						"label":12,
						"baseprice":12.50
					},{
						"label":14,
						"baseprice":15.50
					},{
						"label":16,
						"baseprice":19.50
					}];
					return sizesArr;
				}

				this.fSizesObj = function () {
					var sizesObj = {
						10:{
						"label":10,
						"baseprice":9.50
					},12:{
						"label":12,
						"baseprice":12.50
					},14:{
						"label":14,
						"baseprice":15.50
					},16:{
						"label":16,
						"baseprice":19.50
					}};
					return sizesObj;
				}

		}

})();
