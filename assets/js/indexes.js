$(document).on('click', '.skill-item', function(event) {
    event.preventDefault()
    $('.skill-item').removeClass('bg-success')
    $('.skill-item').removeClass('text-white')
    $(this).addClass('bg-success')
    $(this).addClass('text-white')
    var id = "#" + $(this).attr('target')
    $('.tab-pane').removeClass('active')
    $(id).addClass('active')
})

$(document).ready(function(){
    const start = new Date("2022-10-01");
    const start2 = new Date("2025-03-01");
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    if (months < 0) {
        years--;
        months += 13;
    }
    $('#job-duration').text(years+'yr '+months+'mo');
    years = now.getFullYear() - start2.getFullYear();
    months = now.getMonth() - start2.getMonth();
    if (months < 0) {
        years--;
        months += 13;
    }else{
        months = 1;
    }
    $('#job-duration2').text(years>0?(years+'yr '):''+months+'mo');
});
