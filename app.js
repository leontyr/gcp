$(document).ready(function () {
  var engine, remoteHost;
  remoteHost = 'http://localhost:5000/api/values';
  engine = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // prefetch: 'all.json',
    remote: {
      url: remoteHost + '/%QUERY',
      wildcard: '%QUERY'
    }
  });

  $('#bloodhound .typeahead').typeahead(null, {
    name: 'states',
    source: engine
  });
});