$(document).ready(function () {
  // constructs the suggestion engine
  var engine = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: 'all.json',
    remote: {
      url: 'all.json'
    }
  });

  $('#bloodhound .typeahead').typeahead(null, {
    name: 'states',
    source: engine
  });
});