function launchBrowser(browserName)
{

    if(browserName == "Chrome")
    {
        console.log(browserName);
    }
    else{
        console.log("OtherBrowsers")
    }
}

function runTests(testType)
{
    switch(testType)
    {
        case 'smoke':
            console.log("Smoke");
            break;
        case 'sanity':
            console.log("Sanity")
            break;
        case 'regression':
            console.log("Regression")
            break;
        default:
            console.log("Smoke")
    }
}

launchBrowser("Chrome");
runTests("regression");
