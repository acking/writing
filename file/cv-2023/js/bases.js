window.onload=function(){
    document.getElementById('work-year').innerHTML = dateSubMonth("2010-03");
    // let projectID = document.getElementsByClassName('projectID')
    // let projectIDlength = projectID.length
    // console.log(projectIDlength)

}
function dateSubMonth(date) {
    var date1 = new Date(date);
    var date2 = new Date();
    var monthCount = parseInt(date2.getFullYear() - date1.getFullYear()) * 12 - date1.getMonth() + date2.getMonth();
    var resM = monthCount % 12;
    var resY = parseInt(monthCount / 12);
    var resStr = "";
    if (resY != 0) {
        resStr += resY + "年"
    }
    if (resM != 0) {
        resStr += resM + "个月"
    }
    if (resStr == "") {
        resStr = "0";
    }
    return resStr;
}

