/** 
 * Function to Convert URLs to English and Chinese and hide headers based on Location
 * 
 * */
jQuery(document).ready(function () {
    var currentUrl = window.location.href;
    var pathArray = currentUrl.split('/');
    var langLocation = pathArray[3];
    var chinesePath = "zh";
    var destinationPath = window.location.pathname;
    var englishPath = destinationPath.replace('/' + chinesePath + '/', "/");
    var updatedChineseURL = window.location.protocol + '//' + window.location.hostname + '/' + chinesePath + destinationPath;
    var updatedEnglishURL = window.location.protocol + '//' + window.location.hostname + englishPath; // Convert English URLs to Chinese
    if (langLocation == chinesePath) {
        document.getElementById('global-header-nav-zh').style.display = "block";
        document.getElementById('global-header-nav-en').style.display = "none";
        selectNavsAndUpdate(chinesePath, updatedEnglishURL)
    } else {
        document.getElementById('global-header-nav-zh').style.display = "none";
        document.getElementById('global-header-nav-en').style.display = "block";
        selectNavsAndUpdate('en', updatedChineseURL)
    }

    function selectNavsAndUpdate(lang, url) {
        if (lang == 'en') {
            document.querySelectorAll('.nav-chinese').forEach((el) => {
                el.querySelector('a').href = url
            }) 
            document.querySelectorAll('.nav-english').forEach((el) => {
                el.querySelector('a').href = '#'
            })
        } else {
            document.querySelectorAll('.nav-chinese').forEach((el) => {
                el.querySelector('a').href = '#'
            }) 
            document.querySelectorAll('.nav-english').forEach((el) => {
                el.querySelector('a').href = url
            })
        }
    }
});
