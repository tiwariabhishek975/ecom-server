

$('.plus-cart').click(function(){
    var id = $(this).attr("pid").toString();
    var eml = this.parentNode.children[2]
    console.log("pid =", id)
    $.ajax({
        type:"GET",
        url:"/pluscart",
        data: {
            prod_id:id // send the product id as data
        },
        success:function (data){
            console.log("data = ",data);
            eml.innerText=data.quantity
            document.getElementById("amount").innerText=data.amount
            document.getElementById("totalamount").innerText=data.totalamount// set the text of <em>
        }
    })
})


$('.minus-cart').click(function(){
    var id=$(this).attr("pid").toString();
    var eml=this.parentNode.children[2]
    $.ajax({
        type:"GET",
        url:"/minuscart",
        data:{
            prod_id:id // send the product id as data
        },
        success:function (data){           
            eml.innerText=data.quantity
            document.getElementById("amount").innerText=data.amount
            document.getElementById("totalamount").innerText=data.totalamount // set the text of <em>
        }
    })
})

$('.remove-cart').click(function(){
    var id=$(this).attr("pid").toString();
    var eml=this
    $.ajax({
        type:"GET",
        url:"/removecart",
        data:{
            prod_id:id // send the product id as data
        },
        success:function (data){                       
            document.getElementById("amount").innerText=data.amount
            document.getElementById("totalamount").innerText=data.totalamount
            eml.parentNode.parentNode.parentNode.parentNode.remove(); // set the text of <em>
        }
    })
})


$('.plus-wishlist').click(function () {
$.ajax({
    type: "GET",
    url: "/pluswishlist",
    data: {
        prod_id: id
    },
    success: function(data) {
        // Redirect to the product detail page using the received ID
        window.location.href = '{% url "product-detail" %}' + id;
    },
    error: function(xhr, status, error) {
        // Handle error
    }
});
});
   

$('.minus-wishlist').click(function () {
$.ajax({
    type: "GET",
    url: "/minuswishlist",
    data: {
        prod_id: id
    },
    success: function(data) {
        // Redirect to the product detail page using the received ID
        window.location.href = '{% url "product-detail" %}' + id;
    },
    error: function(xhr, status, error) {
        // Handle error
    }
});
});
