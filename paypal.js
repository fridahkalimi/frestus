{/* <div id="paypal-button"></div> */}
{/* <script src="https://www.paypalobjects.com/api/checkout.js"></script> */}


paypal.Button.render({
    // Configure environment
    env: 'sandbox',
    client: {
        sandbox: 'AdSGI-_Nw39UCWCq10AiAArvMosiHmTYCj8eqbdPSUEY-y_ZqiVVCAqNsK8JLzJPtOV6mbROTFFb50km',
        production: 'demo_production_client_id'
    },
    // Customize button (optional)
    locale: 'en_US',
    style: {
        size: 'small',
        color: 'gold',
        shape: 'pill',
    },

    // Enable Pay Now checkout flow (optional)
    commit: true,

    // Set up a payment
    payment: function(data, actions) {
        return actions.payment.create({
        transactions: [{
            amount: {
            total: '7.29',
            currency: 'USD'
            }
        }]
        });
    },
    
    // Execute the payment
    onAuthorize: function(data, actions) {
        return actions.payment.execute().then(function() {
        // Show a confirmation message to the buyer
        console.log(data)
        window.alert('Thank you for travelling with us.');
        });
    }
    }, '#paypal-button');


paypal.Button.render({
    // Configure environment
    env: 'sandbox',
    client: {
        sandbox: 'AdSGI-_Nw39UCWCq10AiAArvMosiHmTYCj8eqbdPSUEY-y_ZqiVVCAqNsK8JLzJPtOV6mbROTFFb50km',
        production: 'demo_production_client_id'
    },
    // Customize button (optional)
    locale: 'en_US',
    style: {
        size: 'small',
        color: 'gold',
        shape: 'pill',
    },

    // Enable Pay Now checkout flow (optional)
    commit: true,

    // Set up a payment
    payment: function(data, actions) {
        return actions.payment.create({
        transactions: [{
            amount: {
            total: '7.29',
            currency: 'USD'
            }
        }]
        });
    },
    
    // Execute the payment
    onAuthorize: function(data, actions) {
        return actions.payment.execute().then(function() {
        // Show a confirmation message to the buyer
        console.log(data)
        window.alert('Thank you for travelling with us.');
        });
    }
},  '#paypal-button-1');

paypal.Button.render({
    // Configure environment
    env: 'sandbox',
    client: {
        sandbox: 'AdSGI-_Nw39UCWCq10AiAArvMosiHmTYCj8eqbdPSUEY-y_ZqiVVCAqNsK8JLzJPtOV6mbROTFFb50km',
        production: 'demo_production_client_id'
    },
    // Customize button (optional)
    locale: 'en_US',
    style: {
        size: 'small',
        color: 'gold',
        shape: 'pill',
    },

    // Enable Pay Now checkout flow (optional)
    commit: true,

    // Set up a payment
    payment: function(data, actions) {
        return actions.payment.create({
        transactions: [{
            amount: {
            total: '10.93',
            currency: 'USD'
            }
        }]
        });
    },
    
    // Execute the payment
    onAuthorize: function(data, actions) {
        return actions.payment.execute().then(function() {
        // Show a confirmation message to the buyer
        console.log(data)
        window.alert('Thank you for travelling with us.');
        });
    }
}, '#paypal-button-0');