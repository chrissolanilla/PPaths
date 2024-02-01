const stripe = require('stripe')('sk_test_51OeqN5EwXphNG6f7UohuvduSeCr2FrNix8Is5tAlbMp9pOaIwlxQjMwvtmycf6tV6KpEdJPIL574Z0GfkxIPIQTp00Yc2Dn1SW');
const express = require('express');
const app = express();
app.use(express.static('public'));

const cors = require('cors');
app.use(cors({ origin: 'http://localhost:5173' })); // Adjust the port if needed


const YOUR_DOMAIN = 'http://localhost:5173/';

app.use(express.json()); // This needs to be above your route definitions

app.post('/create-checkout-session', async (req, res) => {
    const { amount } = req.body; // Ensure you have body-parsing middleware to extract this
    console.log(amount);
  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Custom Donation',
            // Optionally add a description or images
          },
          unit_amount: amount * 100, // Stripe expects the amount in cents
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}success`,
      cancel_url: `${YOUR_DOMAIN}cancel`,
    });
  
    res.json({ url: session.url });
  });

app.listen(4242, () => console.log('Running on port 4242'));