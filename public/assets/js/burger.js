$(function(){
    $('.devour').on("click",function(event){
        var id = $(this).data("id");
        $.ajax('/api/burgers/'+id,{type:"PUT"}).then(
            function(){
                console.log("ate burger");
                location.reload();
            }
        )
    })
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var burger = {
          name: $("#ca").val().trim(),
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: burger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
})