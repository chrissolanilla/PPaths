require('dotenv').config(); // This should be at the very top
const stripe = require('stripe')(process.env.STRIPE_SECRETE);
const express = require('express');
const app = express();
app.use(express.static('public'));

const cors = require('cors');
app.use(cors({ origin: process.env.CORS_ORIGIN })); // Adjust the port if needed


const PORT = process.env.PORT;
const YOUR_DOMAIN = process.env.YOUR_DOMAIN;

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

app.listen(PORT, () => console.log('Running on port,', PORT));