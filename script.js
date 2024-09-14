function openApp(appName) {
    let url = '';
    switch(appName) {
        case 'Borneo Airways Pomodoro':
            url = 'https://pomodoro-gamma-sand.vercel.app/';
            break;
        case 'Matrix Pomodoro':
            url = 'https://pomodoromatrix.vercel.app/';
            break;
        case 'Take the Money':
            url = 'https://takethemoney.vercel.app/';
            break;
        default:
            alert('Coming soon...');
            return;
    }
    window.open(url, '_blank');  // Opens the app in a new tab
}
