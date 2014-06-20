$(function(){
    $("a.accordion-toggle").each(function(index) {
        $(this).attr("data-target", "#" + $(this).parent().next().attr("id"));
    });

    // accoridon code
});
