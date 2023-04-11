window.onload=function(){
    let workYear = document.getElementById('work-year');
    let language = workYear.getAttribute("language");
    console.log(language);
    workYear.innerHTML = dateSubMonth("2010-03", language);
    // 
    // let projectID = document.getElementsByClassName('projectID')
    // let projectIDlength = projectID.length
    // console.log(projectIDlength)

}
function dateSubMonth(date, language = 'zh') {
    var date1 = new Date(date);
    var date2 = new Date();
    var monthCount = parseInt(date2.getFullYear() - date1.getFullYear()) * 12 - date1.getMonth() + date2.getMonth();
    var resM = monthCount % 12;
    var resY = parseInt(monthCount / 12);
    var resStr = "";
    if(language == 'en'){
        if (resY != 0) {
            resStr += resY + " years "
        }
        if (resM != 0) {
            resStr += "and " + resM + " months"
        }
    }else{
        if (resY != 0) {
            resStr += resY + "年"
        }
        if (resM != 0) {
            resStr += resM + "个月"
        }
    }
    if (resStr == "") {
        resStr = "0";
    }
    return resStr;
}

