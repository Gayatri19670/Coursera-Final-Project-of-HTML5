/*Add the JavaScript here for the function billingFunction(). It is responsible for setting and clearing
the fields in Billing Information */
function billingCopy(sameAsShipping) {
    if (sameAsShipping.checked) {
    var name = document.getElementById('shippingName').value;
    var zip = document.getElementById('shippingZip').value;
    } else {
    name = '';
    zip = '';
    }
    document.getElementById('billingName').value = name;
    document.getElementById('billingZip').value = zip;
    }
    function billingCheck() {
    // Checking the Name fields
    var shipName = document.getElementById('shippingName');
    var billName = document.getElementById('billingName');
    if (shipName.value != billName.value) {
    document.getElementById('name-alert').innerHTML = "Does the billing info not match?";
    } else {
    document.getElementById('name-alert').innerHTML = "The names match.";
    }
    // Checking the Zip Code fields
    var shipZip = document.getElementById('shippingZip');
    var billZip = document.getElementById('billingZip');if (shipZip.value != billZip.value) {
    document.getElementById('zip-alert').innerHTML = "";
    return false;
    } else {
    document.getElementById('zip-alert').innerHTML = "The zip codes match.";
    return true;
    }
    }