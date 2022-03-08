function getDayInfo(date) {
    var DaysfOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятниица', 'Суббота'];
    var MonthOfYear = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    var dataNow = date.substring(6) + '-' + date.substring(3, 5) + '-' + date.substring(0, 2);
    var mappedDate = new Date(dataNow);
    var DayMonth = mappedDate.getDate();
    var DayWeek = mappedDate.getDay();
    var DayMonthF = new Date(dataNow.substring(0, 8) + '01');
    var WeekF = DayMonthF.getDay();
    var WeekConst = 0;
    WeekConst = (DayWeek > 0 && DayWeek < WeekF) ? 1  : false;
    var WeekNow = Math.ceil(DayMonth / 7) + WeekConst;
    var calculation = DaysfOfWeek[DayWeek] + ', ' + WeekNow + ' неделя ' + MonthOfYear[mappedDate.getMonth()] + ' '
        + mappedDate.getFullYear() + ' года';
    return calculation;
    }
  
  console.log(getDayInfo('08.01.2022'));
