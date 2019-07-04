var house1 = new Array(20); 
                            var house2=new Array(20);
                            var tvalue;
                            var hourse3=new Array(20);
         
          $(document).ready(function(){


            $("#bttn1").focus(function(){
                
                $.ajax({
                    type:"GET",
                    url:"https://api.themoviedb.org/3/discover/movie?api_key=d4c0f75bad62057f0b4577bb8e6824d7`&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",

                   data:{
                      
                        },
                    dataType: "json",

                    success:function(result){
                        console.log(result);
                       
                          result.results.forEach(myFunction);
                          function  myFunction(item,index){
                              house1[index]=item;

                             house2[index]=house1[index].original_title;
                          
                             
                    $("#bttn1").autocomplete({
                                        source:house2
                                                },{
                                        autoFocus:true,
                                        delay:500,
                                        minLength:1
                                    });
                          }
                            
                         
                         },
                    error:function(){
                        
                    }
                   
            });
          
            });

            /*$( "input" )
            .keyup(function() {
                tvalue = $( this ).val();
                console.log(tvalue);
            })
            .keyup();
            console.log(tvalue);*/
           
            
           $("#bttn").click(function(){
            $(location).attr('href','B:/3rd 2sem/b2d2/second page/index.html');
           
            var text_value = $("#checkthis").val();
          
                if(text_value==house3[i]) {
                   
                }else{
                
                }
            
           
          
           
           



            });

           

          });
         
