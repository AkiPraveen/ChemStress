 // WORKING VERSION FOR ONLY ONE CHEMICAL AT A TIME

  var nextURL="";

    $(document).ready(function() {
        $("#researchInput").keydown(function(event){
            if(event.which == 13) {
                chemExec($('#researchInput').val());
            }
        });
    });


        function chemExec(chemName) {
            // EXAMPLE CODE BLOCK
            




            
            var query = {
                //url: 'http://google.com/search?q=+' + chemName + '+sds+flinnsci+pdf',
                url: 'https://www.google.com/search?hl=en&as_q=sds&as_epq=' + chemName + '&as_oq=safety+data+sheet&as_eq=&as_nlo=&as_nhi=&lr=&cr=&as_qdr=all&as_sitesearch=flinnsci.com&as_occt=any&safe=images&as_filetype=pdf&as_rights=',
                type: 'html',
                selector: 'cite',
                extract: 'text'
              },
              uriQuery = encodeURIComponent(JSON.stringify(query)),
              request  = 'http://example.noodlejs.com/?q=' +
                         uriQuery + '&callback=?';

            // Make Ajax request to Noodle server
            jQuery.getJSON(request, function (data) {
              alert(data[0].results);

              var dataRaw = data[0].results;

              var getLink = dataRaw[0];

              

              //window.open("http://" + getLink);


              // Find the item with id "flow" and make an <object>
              document.getElementById("flow").innerHTML = 
                '<object data="' + 'http://' +  getLink + '" type="application/pdf" style="height:50vh;width:100%;">';


            });


            /*
            

            */
            




        }