
var sf = new Snowflakes({
    color: '#fff', // Default: "#5ECDEF"
    container: document.querySelector('#snowflakes-container'), // Default: document.body
    count: 20, // 100 snowflakes. Default: 50
    minOpacity: 0.1, // From 0 to 1. Default: 0.6
    maxOpacity: 1, // From 0 to 1. Default: 1
    minSize: 5, // Default: 8
    maxSize: 15, // Default: 18
    rotation: true, // Default: true
    speed: 1, // The property affects the speed of falling. Default: 1
    wind: true, // Without wind. Default: true
    width: 500, // Default: width of container
    height: 1000, // Default: height of container
    zIndex: 100 // Default: 9999
});
