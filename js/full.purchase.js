$( document ).ready(function() {

    $(".custom-btn-other").click(function(){
        let refillid = $(this).attr('aria-label');
        $("#input-form-"+refillid).show();
        $("#for-"+refillid).attr("value","other");
        let a = $(".no-by-solde-"+refillid).val();
        if(a == 1){
            $("#button-purchase-1-"+refillid).hide();
            $("#button-purchase-2-"+refillid).show();
        }
    });

    $(".custom-btn-me").click(function(){
         let refillid = $(this).attr('aria-label');
         $("#input-form-"+refillid).hide()
         $("#for-"+refillid).attr("value","me");
         $("#button-purchase-2-"+refillid).hide();
         $("#button-purchase-1-"+refillid).show();
    });



    $('.show-recipient-msisdn').unbind('click').bind('click', function(){
        let inputID = $(this).attr('id');
        let id = inputID.split('other-')[1];
        inputID = "#form" + inputID.split('other-')[1];
        if($(this).is(':checked')){
            $(inputID).show();
            $("#for-"+id).attr("value","other");
        } else {
            $(inputID).hide();
            $("#for-"+id).attr("value","me");
        }
    });

    $('.via-om').unbind('click').bind('click', function(){
        let inputID = $(this).attr('id');
        inputID = inputID.split('om-')[1];
        if($(this).is(':checked')){
            $("#via-om-"+inputID).attr("value","1");
        } else {
            $("#via-om-"+inputID).attr("value","0");
        }
    });

});