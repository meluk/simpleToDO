$(document).ready(function(){
    var counter = 0;


    getTodaysDate();

    function getTodaysDate(){
    var days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    var month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    var today = new Date();

    var date = today.getDate();
    var year = today.getFullYear();

    
    $('#date').html(date);
    $('#month').html(month[today.getMonth()]);
    $('#year').html(year);
    $('#day').html(days[today.getDay()]);
   
}

  
    $('.add-button').click( function(){
        var toAdd = $('input[name=ListItem]').val();

         $('ul').append('<li><label id="label-' + counter +'">'+ toAdd +'</label>' + ' <div class="checkboxFour" onclick="crossOut(\'label-' + counter + '\', \'item-' + counter +'\')"> <input type="checkbox" value="1" id="item-' + counter + '"><label for="item-' + counter + '"></label></div></li>');

         counter++;
    });

    $("input[name=ListItem]").keyup(function(event){
          if(event.keyCode == 13){
            $(".add-button").click();
          }         
      });

    function crossOut(labelid, clickid){
        var check = $("#clickid").checked;

        if(check){
            $("#labelid").style.color = '#ddd';
        }

        if(!check){
            $("#labelid").style.color = '#777';
        }
    }
});


