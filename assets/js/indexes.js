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
    function calculateDuration(startDate, endDate) {
        let start = new Date(startDate);
        let end = new Date(endDate);

        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();
        let days = end.getDate() - start.getDate();

        if (days < 0) {
            months--;
            let prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
            days += prevMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months, days };
    }

    const now = new Date();
    
    const duration1 = calculateDuration("2022-10-01", now);
    $('#job-duration').text(
        `${duration1.years}y-${duration1.months}m-${duration1.days}d`
    );

    const duration2 = calculateDuration("2025-03-01", now);
    const duration2Text = 
        (duration2.years > 0 ? duration2.years + 'y-' : '') +
        (duration2.months > 0 ? duration2.months + 'm-' : '') +
        duration2.days + 'd';
    $('#job-duration2').text(duration2Text.trim());
});