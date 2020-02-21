

$(document).ready(function(){
    let url = "http://newsapi.org/v2/top-headlines?country=cn&apiKey=0122c51fc870469aae09df2824e5dfc2";
    
    $.ajax({
        url:url,
        method:"GET",
        dataType:"Json",

        beforeSend:function(){
            $(".progress").show();
        },
        complete:function(){
            $(".progress").hide();
        },
        success:function(news){
            let output = "";
            let latestNews = news.articles;
            let post_limit = 3;
            let materializeColWidth = 12/post_limit;
 
            for(var i in latestNews){
                output +=`
                <div class="col l${materializeColWidth}  m6  s12">
                <div class="card medium hoverable">
                <div class="card-image">
                <img src="${latestNews[i].urlToImage}" class="responsive-img">
                </div>
                <div class="card-content">
                <span class="card-title activator"><i class="material-icons right">more_vert </i></span>

                <h6> ${latestNews[i].title}</h6></div>
                <div class="card-reveal">
                <span class="card-title"><i class="material-icons right">close </i></span>
                <p> ${latestNews[i].description} </p>
                </div>
                <div class="card-action">
                <a href="${latestNews[i].url}" target="_blank" class="btn">Read More </a>
                </div>
                </div>
                </div>
                </div>
                `;
            }

            if(output !== ""){
                $("#newsResults").html(output);
            }

        },
        error:function(){
            $("#newsResults").html("Ooops...Some error occured");

        }
    })
});