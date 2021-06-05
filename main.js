window.REQUIRED_CODE_ERROR_MESSAGE = "Please choose a country code";
window.LOCALE = "en";
window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";

window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";

window.GENERIC_INVALID_MESSAGE =
  "The information provided is invalid. Please review the field format and try again.";

window.translation = {
  common: {
    selectedList: "{quantity} list selected",
    selectedLists: "{quantity} lists selected",
  },
};

var AUTOHIDE = Boolean(0);


(function() {
    window.sib = { 
        equeue: [], 
        client_key: "" 
    };
    /* OPTIONAL: email for identify request*/
    // window.sib.email_id = 'example@domain.com';
    window.sendinblue = {}; 
    for (var j = ['track', 'identify', 'trackLink', 'page'], i = 0; i < j.length; i++) {
    (function(k) { 
        window.sendinblue[k] = function() { 
            var arg = Array.prototype.slice.call(arguments); 
            (window.sib[k] || function() { 
                    var t = {}; 
                    t[k] = arg; 
                    window.sib.equeue.push(t);
                })(arg[0], arg[1], arg[2]);
            };
        })(j[i]);
    }
    var n = document.createElement("script"),
        i = document.getElementsByTagName("script")[0]; 
    n.type = "text/javascript", n.id = "sendinblue-js", n.async = !0, n.src = "https://sibautomation.com/sa.js?key=" + window.sib.client_key, i.parentNode.insertBefore(n, i), window.sendinblue.page();
})();