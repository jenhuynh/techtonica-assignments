//creating helper function to show notification
export function showNotification(setter) {
    //initially set to true
    setter(true);
    //after 2 seconds, will set it to false
    setTimeout(() => {
        setter(false);
    }, 2000);
}