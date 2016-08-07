var template = _.template(
    document.getElementById("user-profile").innerHTML
);
var showProfile = template(profile);
document.write(showProfile);