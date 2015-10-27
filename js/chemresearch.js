  var nextURL="";

    $(document).ready(function() {
        $("#researchInput").keydown(function(event){
            if(event.which == 13) {
                chemExec($('#researchInput').val());
            }
        });
    });


        function chemExec(chemName) {
            var gdata = "";
            var chemConvention = "";

            var query = {
                url: 'https://search.yahoo.com/search?p=' + chemName + " sds flinnsci safety pdf",
                type: 'html',
                selector: 'span.fz-15px',
                extract: 'text'
            },
            uriQuery = encodeURIComponent(JSON.stringify(query)),
            request  = 'http://example.noodlejs.com/?q=' +
                     uriQuery + '&callback=?';

//            window.open(query.url);
            console.log("uriQuery:" + uriQuery);
            // Make Ajax request to Noodle server
            jQuery.getJSON(request, function (data) {
                gdata = data[0].results + 'JAKUNDO';
                //confirm(data[0].results[0]);
                window.open("http://" + data[0].results[0]);                
            }); 


        }