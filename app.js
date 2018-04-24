$(document).ready(function() {
// constructs the suggestion engine
var engine = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'https://raw.githubusercontent.com/twitter/typeahead.js/gh-pages/data/countries.json',
  remote: {
    url: 'https://raw.githubusercontent.com/twitter/typeahead.js/gh-pages/data/countries.json'
  }
});

$('#bloodhound .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  source: engine
});
});