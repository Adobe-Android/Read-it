$('#search-button').click(function(){
  // console.log("Got clicked")
  let search = $('#search').val();
  let queryString = `/search-books?title=${search}`;
  window.location.href = queryString;
})

$('.add-button').click(function(){
  console.log("Got clicked")
  let book_id = $(this).attr('id');
  console.log(book_id);
  $.ajax({
    type: "POST",
    url: `/add-book/${book_id}`,
  })
});

$('.remove-button').click(function(){
  console.log("Got clicked")
  let book_id = $(this).attr('id');
  console.log(book_id);
  $.ajax({
    type: "DELETE",
    url: `/remove-book/${book_id}`,
  })
});

$('.up_vote').click(function(){
  console.log("Got clicked")
  let api_id = $(this).attr('id');
  console.log(api_id);
  $('.up_vote').toggleClass('white-arrow');
  $.ajax({
    type: "PUT",
    url: `/add-upvote-true/${api_id}`,
  })
});

$('.down_vote').click(function(){
  console.log("Got clicked")
  let api_id = $(this).attr('id');
  console.log(api_id);
  $('.down_vote').toggleClass('white-arrow');
  $.ajax({
    type: "PUT",
    url: `/add-upvote-false/${api_id}`,
  })
});

$('.submit-review').click(function(){
  console.log("Got clicked")
  let api_id = $(this).attr('id');
  let review_text = $(`#review-text${api_id}`).val();
  console.log(api_id);
  console.log(review_text);
  $.ajax({
    type: "PUT",
    data: {review_text},
    url: `/add-review/${api_id}`,
  })
});

$('.show-reviews').click(function(element){
  console.log("Got clicked")
  let api_id = $(this).attr('id');
  $(`.hide`).hide();
  $(`.hide`).toggleClass('show');
  $('.show').show();
  element.preventDefault();
});
