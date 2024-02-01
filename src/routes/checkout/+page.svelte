<script>
    let amount = 20; // Default amount or minimum amount
  
    async function handleCheckout() {
      const response = await fetch('api/create-checkout-session', {
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
  
