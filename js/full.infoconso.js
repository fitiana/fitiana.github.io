

$( document ).ready(function() {
    $('.bundle-circlebar').each(function(){
        initBundleProgressBar(this);
    });
});

function initBundleProgressBar(bundleElement){
    var progressBar;
    const strokeWidth = bundleElement.dataset.strokeWidth != null ? bundleElement.dataset.strokeWidth : 8;
    const duration = 1400;
    const animation = 'easeInOut';
    const barTrailColor = '#EEEEEE';
    const trailWidth = 0;
    const svgStyle = null;
    var barColor;
//    const iconsDir = 'http://localhost:8080/assets/img/icons/';
    const iconsDir = '/assets/img/icons/';
    var icon;


    switch(bundleElement.dataset.bundleType){
        case "credit":
            barColor = '#FEC611';
            icon = 'Donation.svg';
            break;
        case "data":
            barColor = '#49B5E6';
            icon = 'Internet.svg';
            break;
        case "voice":
            barColor = '#4FC088';
            icon = 'Call_forward.svg';
            break;
        case "sms":
            barColor = '#A784D8';
            icon = 'SMS_Message.svg';
            break;
    }

    //create icon related to bundle type
    var img = document.createElement("img");
    img.src = iconsDir + icon;
    img.classList.add('bundle-icon');
    bundleElement.append(img);

    //init circle progress bar
    progressBar = new ProgressBar.Circle(bundleElement, {
        strokeWidth: strokeWidth,
        easing: animation,
        duration: duration,
        color: barColor,
        trailColor: barTrailColor,
        trailWidth: trailWidth,
        svgStyle: svgStyle
    });
    progressBar.animate(bundleElement.dataset.bundlePcvalue);
}