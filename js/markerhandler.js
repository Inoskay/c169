AFRAME.registerComponent("markerhandler", {
  init: async function() {
    this.el.addEventListner("markerFound", ()=> {
      console.log("marker is found")
      this.handleMarkerFound()
  })
  this.el.addEventListner("markerLost", ()=> {
      console.log("marker is lost")
      this.handleMarkerLost()
  })
  },
  handleMarkerFound: function() {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div")
    buttonDiv.style.display="flex" 
//call the required buttons 
var ratingButton = document.getElementById("rating-button")
var orderButton = document.getElementById("order-button")

    // Handling Click Events
    ratingButton.addEventListner("click", function(){
      swal({
  
          icon: "warning",
          title: "rate-dish",
          text: "work in progress"
      })
  })
  orderButton.addEventListner("click", function(){
    swal({

        icon: "https://i.imgur.com/4NZ6uLY.jpg",
        title: "thanks for your order",
        text: "your order will be served soon"
    })
})
  
  },

  handleMarkerLost: function() {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div")
    buttonDiv.style.display="none"
  }
});
