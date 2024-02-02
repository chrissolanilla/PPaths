<script>
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/autoplay';
    import Navbar from "$lib/Navbar.svelte";
    import Testimonials from "$lib/Testimonials.svelte";
    import Statistics from '$lib/Statistics.svelte'
    import WhoWeAre from '$lib/WhoWeAre.svelte'
    let babyImageUrl = './baby.png'
    

    function scrollToContent() {
        const contentElement = document.querySelector('#testimonials');
        if(contentElement)
            contentElement.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<Navbar />
<!--He wants a baby picture on the right and text on the left with a big button in between to donate and a smaller button below to learn more-->
<div class="heroContainerChris">


    <div class="heroChris min-h-screen flex items-center justify-center">
        <div class="flex-1 text-left pl-10">
            <h1 class="text-8xl font-bold heroTextColor">Save A Child's Life TODAY</h1>
            <button on:click={scrollToContent} class="btn btn-secondary">Learn more</button> <!-- Secondary button -->
        </div>
        
        <!-- Centered Buttons Container -->
        <div class="buttons-container flex flex-col items-center justify-center">
            <a target="_blank" href="/checkout"><button class="btn btn-primary mr-5">Donate</button></a> <!-- Primary button -->
        </div>

        <div class="flex-1 flex justify-end pr-10">
            <img src={babyImageUrl} alt="Baby" class="w-1/" /> <!-- Adjust width as needed -->
        </div>

    </div>
    <!--center this pls chatgpt 👉👈 -->
    <button id="down" on:click={scrollToContent} class="centerArrow">
        <svg width="140" height="70" version="1.1" viewBox="-2 -2 196 100" xmlns="http://www.w3.org/2000/svg">
            <path d="m12 12 84 72 84-72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" style="paint-order:stroke fill markers"></path>
        </svg>
    </button>

</div>

<!-- Testimonials Section -->
<Testimonials />

<WhoWeAre />

<Statistics />

<footer>
    <p>Contact us: support@ppaths.com +1 305-632-4860</p>
    <!-- Additional footer content -->
</footer>

<style lang="postcss">
    .heroContainerChris{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgb(212, 209, 196); /* Your existing background color */
    }

    .centerArrow {
        margin-top: -170px;
        padding-top: 0%;
        margin-bottom: 1.5rem;
        cursor: pointer;
    }
    .heroChris {
        display: flex; /* Ensures flexbox layout */
        justify-content: space-between; /* Spaces out the child elements */
        align-items: center; /* Centers the child elements vertically */
        
    }

    .buttons-container {
        display: flex; /* Use flexbox for centering */
        flex-direction: column; /* Stack buttons vertically */
        align-items: center; /* Center buttons horizontally */
        justify-content: center; /* Center buttons vertically if there's extra space */
        z-index: 2; /* Ensure buttons are clickable and above the background */
        
    }

    /* Your existing styles */
    .heroTextColor {
        color: rgb(133, 57, 156);
    }

    .btn-primary {
        font-size: 3.25rem; /* Larger font size */
        padding: 1rem 2rem; /* Increased padding for a larger button */
        box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.25); /* Add depth with a shadow */
        position: relative; /* Required for the absolute positioning of the pseudo-element */
        overflow: hidden; /* Ensures the pseudo-element is contained within the button's boundaries */
        transition: background-color 0.3s, transform 0.3s; /* Smooth transition for hover effects */
        height:auto;

        animation: 2s 10s infinite;
        
    }

    .btn-primary::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.2);
        z-index: 1;
        transition: opacity 0.3s;
        opacity: 0; /* Hidden by default */
    }

    .btn-primary:hover::before {
        opacity: 1; /* Visible on hover */
    }

    .btn-primary:hover {
        background-color: darken(your-primary-color, 10%); /* Darken the button color on hover */
        transform: scale(1.05); /* Slightly enlarge the button on hover */
    }

    /* Keyframes for the pulse animation */
    /* Keyframes for the pulse animation with a pause */
    @keyframes pulse {
        0%, 20% { /* 2s active, since 20% of 10s is 2s */
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
        }
        14%, 20% { /* Start the transformation a bit before 2s to make it smooth */
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        }
        100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
    }

    .btn-primary {
        /* Other styles remain unchanged */
        animation: pulse 10s infinite; /* 10s for the full cycle including the pause */
    }

</style>
