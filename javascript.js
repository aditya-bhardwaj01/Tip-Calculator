$(function(){
    $(".tipPercentage").click(function(){
        if($(".bill-amount").val() != ""){
            $("#tipPercentageCustom").val("");
            let bill = $(".bill-amount").val();
            const people = $(".people-count").val();

            if(people){
                bill = parseFloat(bill/parseInt(people));
            }
            else{
                $(".people-count").val(1);
            }

            const button = this.id;

            const percent = parseInt($("#" + button).html());
            const tip = parseFloat((bill*percent)/100).toFixed(2);
        
            $(".tip-amount span").html(tip);
            $(".total span").html(parseFloat(parseFloat(tip) + parseFloat(bill)).toFixed(2));
        }
    });

    $(".reset-btn").click(function(){
        $(".bill-amount").val("");
        $(".people-count").val("");
        $(".tip-amount span").html("0.00");
        $(".total span").html("0.00");
        $("#tipPercentageCustom").val("");
    });

    $("#tipPercentageCustom").focusout(function(){
        if($(".bill-amount").val()){
            let bill = $(".bill-amount").val();
            const people = $(".people-count").val();

            if(people){
                bill = parseFloat(bill/parseInt(people));
            }
            else{
                $(".people-count").val(1);
            }

            const percent = parseInt($("#tipPercentageCustom").val());
            const tip = parseFloat((bill*percent)/100).toFixed(2);

            $(".tip-amount span").html(tip);
            $(".total span").html(parseFloat(parseFloat(tip) + parseFloat(bill)).toFixed(2));
        }
        else{
            window.alert("Please enter the Bill amount");
            $("#tipPercentageCustom").val("");
        }
    })
})