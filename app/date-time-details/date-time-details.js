'use strict';

angular.module('myApp.dateTimeDetails', ['rzSlider', 'ui.bootstrap', 'ngRoute']).component('dateTimeDetails', {
    templateUrl: 'date-time-details/date-time-details.html',
    controller: function FreightDetailsController() {
        this.leadZero = function (time) {
            return time < 10 ? '0' + time : time;
        };
        this.getRange = function () {
            var arr = [];
            var d = new Date(2017, 1, 1);
            for (var i = 0; i < (6 * 24); i++) {
                d.setMinutes(d.getMinutes() + 10);
                arr.push(this.leadZero(d.getHours()) + '.' + this.leadZero(d.getMinutes()));
            }
            return arr;
        };
        var arr = this.getRange().map(n => {
            return {
                value: n,
                legend: n
            };
        });

        this.sliderPickup = {
            minValue: '10.50',
            maxValue: '14.20',
            options: {
                showTicks: true,
                stepsArray: arr
            }
        };
        this.sliderDelivery = {
            minValue: '10.50',
            maxValue: '14.20',
            options: {
                showTicks: true,
                stepsArray: arr
            }
        };
    },


});