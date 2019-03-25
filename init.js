/**
  * Initalize system and start harvesting data
  *
  * @author Tom Whitbread <tom@gript.co.uk>
  * @description Start data aquisition based on the configuration Settings
  */

// Configuration
var config = require('config');
var Blackdown = require('blackdown');

// Get API Data
//console.log(typeof(config.Exchanges));
for(var exchange in config.Exchanges){
  if(config.Exchanges[exchange].enabled){
    // Get exchanges API data
    //console.log(exchange +" "+ config.Exchanges[exchange].enabled);
    //Blackdown.loadExchange(exchange);
  }
}

// Run Checks on last data for any conditions and update events
Blackdown.watchVolume('binance');

// Perform house keeping

  // Composite high timeframes

  // Clear Memory

// Save sanitised results to db
