$(document).ready(function() {
    var searchIndex, recipes;
    var searchIndexUrl = document.getElementById('search-index-url').value;

    // Fetch the search index and store it in the searchIndex variable
    $.getJSON(searchIndexUrl, function(data) {
      searchIndex = lunr(function() {
        this.field('title', { boost: 10 });
        this.field('content');
        this.ref('id');
    
        data.forEach(function(recipe) {
          this.add(recipe);
        }, this);
      });
    
      recipes = data;
    });
  
    $('#search-input').on('input', function() {
      var query = $(this).val();
      var results = searchIndex.search(query);
      displayResults(results);
    });
  
    function displayResults(results) {
      var $resultsContainer = $('#search-results');
      $resultsContainer.empty();
    
      if (results.length === 0) {
        $resultsContainer.append('<p>No results found</p>');
        return;
      }
    
      results.forEach(function(result) {
        var recipe = recipes.find(function(r) {
          return r.id == result.ref;
        });
    
        if (recipe) {
          var $result = $('<div>').addClass('search-result');
          var $title = $('<a>').attr('href', recipe.url).text(recipe.title);
          $result.append($title);
          $resultsContainer.append($result);
        }
      });
    }
  });
  