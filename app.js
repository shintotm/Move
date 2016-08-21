var main = function() {
  var cities = [
    "San Francisco",
    "Mountain View",
    "San Jose",
    "Palo Alto"
  ];

  //$('#city').autocomplete({source: cities});
  $('#city').autocomplete({source: cities});
};
 
$(document).ready(main);