$(document).ready(function() {
// constructs the suggestion engine
var engine = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'all',
  remote: {
    url: 'all'
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