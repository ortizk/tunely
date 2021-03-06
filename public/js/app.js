/* CLIENT-SIDE JS
 *
 * You will need this file for doing PUT or DELETE requests.
 * As an example, here is how one might implement a delete button
 * 1. Create a big red button that says delete. Give it an id.
 * 2. Listen for the click event on the button (using the id you made for it).
 * 3. In the function that executes on that click event, make an AJAX request to the server to
 *    delete the album. (Note: you will need the album id as part of the url)
 * 4. Make the route on the server side that accepts this request. Make sure it is getting there.
 * 5. Perform the deletion in the database
 *
 */

$(document).ready(function () {
	console.log('app.js loaded!');


  $('#newAlbumForm').on('submit', function (e) {
    e.preventDefault()
    
    $.ajax({
      type: 'POST',
      url: '/api/albums',
      data: $(this).serialize(),
      success: console.log($(this).serialize()),
      error: handleError
      
    })
  })

});



<% albums.forEach(function(album) {%>


function getAlbumHtml(album) { 	
    // <!-- one album -->	
    return	
	
    `<div class="row album">	
	
      <div class="col-md-10 col-md-offset-1">	
       <div class="panel panel-default">	
          <div class="panel-body">	
	
	
          <!-- begin album internal row -->	
            <div class='row'>	
              <div class="col-md-3 col-xs-12 thumbnail album-art">	
                <img src="http://placehold.it/800x800" alt="album image">	
              </div>	
	
              <div class="col-md-9 col-xs-12">	
                <ul class="list-group">	
                  <li class="list-group-item">	
                    <h4 class='inline-header'>Album Name:</h4>	
                    <span class='album-name'>${album.albumName}</span>	
                  </li>	
	
                  <li class="list-group-item">	
                    <h4 class='inline-header'>Artist Name:</h4>	
                    <span class='artist-name'>${album.artistName}</span>	
                  </li>	
	
                  <li class="list-group-item">	
                    <h4 class='inline-header'>Released date:</h4>	
                    <span class='album-releaseDate'>${album.releaseDate}</span>	
                  </li>	
                </ul>	
              </div>	
	
            </div>	
            <!-- end of album internal row -->	
	
            <div class='panel-footer'>	
            </div>	
	
          </div>	
        </div>	
      </div>	
   </div>	
    <!-- end one album -->	
	
  <% }); %>`;	
}	 
	
function render () {	
	$albumList.empty();	
	$albumList.append(getAlbumHtml);	
}	
function handleError() {
  console.log('************WHY IS THIS SHOWING UP?**********')
}

