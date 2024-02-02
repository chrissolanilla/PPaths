<script>
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/autoplay';
    import Navbar from "$lib/Navbar.svelte";
    import Testimonials from "$lib/Testimonials.svelte";
    import Statistics from '$lib/Statistics.svelte'

    function scrollToContent() {
        const contentElement = document.querySelector('#statistics');
        if(contentElement)
            contentElement.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<Navbar />

<div class="heroChris min-h-screen flex items-center justify-center">
    <div class="text-center">
        <h1 class="text-5xl font-bold heroTextColor">Welcome to Pregnancy Paths</h1>
        <p class="py-6 text-xl font-bold heroText2">Helping families make informed decisions.</p>
        <button on:click={scrollToContent} class="btn btn-primary">Get Started</button>
    </div>
</div>

<Statistics />
<!-- Testimonials Section -->
<Testimonials />

<footer>
    <p>Contact us: support@ppaths.com +1 305-632-4860</p>
    <!-- Additional footer content -->
</footer>

<style lang="postcss">
    .heroChris {
        background-image: url("/hero.png");
    }
    .heroTextColor {
        color: rgb(133, 57, 156)
    }
    .heroText2 {
        color:rgb(38, 68, 88); 
    }
    
</style>
