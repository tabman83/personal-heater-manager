/*
file:           heaterStatus.js
author:         Antonino Parisi
email:          tabman83@gmail.com
date:           28/02/2015 15:43
description:    heating status model
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heaterStatusSchema = new Schema({
    value: Boolean,
	date: {
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model('HeaterStatus', heaterStatusSchema);
