<script>
    let amount = 20; // Default amount or minimum amount
    let backendURL = import.meta.env.VITE_BACKEND_URL; // Ensure this doesn't end with a slash
    backendURL += '/create-checkout-session'; // Correctly append the endpoint

    console.log(backendURL);
    async function handleCheckout() {
      const response = await fetch(backendURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });
      const session = await response.json();
      window.location.href = session.url;
    }
  </script>
  
  <h1>You are checking out now</h1>
  
  <input type="number" bind:value={amount} min="1" class="input input-bordered input-primary w-full max-w-xs" />
  <button class='btn btn-primary' on:click={handleCheckout}> Donate ${amount} Now</button>
  
