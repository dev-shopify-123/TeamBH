$(document).ready(function(){
    $(".custom_button").each(function(){
        let link = $(this).data('link');
        var this_ = $(this);
        // fetch(link,{mode: 'no-cors'})
        //     // .then((response) => { return response.json(); })
        //     .then( data => {
        //         console.log(data); 
        //         if(data.status == 200) {
        //             this_.addClass('active');
        //         }
                
        //     })
        //     .catch( error => { console.log(error); })
        // $.ajax({
        //     url: link,
        //     headers: [
        //         { "X-localization": localStorage.getItem("lan") },
        //         { "Access-Control-Allow-Origin": '*' },
        //         { "Access-Control-Allow-Headers": 'Origin, X-Requested-With, Content-Type, Accept '},
        //         { "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE" },
        //         { "Access-Control-Max-Age": 3600 }
        //       ],
        //     dataType: "html",
        //     crossDomain: true,
        //     xhrFields: {
        //         withCredentials: true,
        //     },
        //     success: function(data) {
        //       console.log(data);
        //     }
        // });
        // $.ajax({
        //     url: link,
        //     method: 'POST',
        //     dataType: 'json',
        //     data: "data",
        //     success: function(response) {
        //         console.log(response)
        //     },
        //     error: function(jqXHR, textStatus, errorThrown) {
        //         if (jqXHR.responseJSON.status == 422) {
        //             alert(jqXHR.responseJSON.description);
        //         } else {
        //             console.log(jqXHR);
        //         }
        //     }
        // });
    })
    
})