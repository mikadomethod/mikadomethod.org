$("#ss-form").submit(
    function(e) {
        e.preventDefault();
        $.ajax({
            url: 'https://docs.google.com/forms/d/1xkm5zs-eE0Uyz6kmXGChBxdcjdNlB2ib-S1CdEbA48o/formResponse',
            type: 'POST',
            dataType: 'jsonp',
            data: {'entry.2024811949' : $('#entry_2024811949').val(),
                   'entry.769681419': $('#entry_769681419').val()},
            jsonp: "mycallback"
        });
        $('#promo-and-form').hide();
        $('#thank-you').show();
        
        return false;
    });
