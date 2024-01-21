<script>
    import { onMount } from "svelte";
    import Swiper from 'swiper';
    import { Navigation, Pagination, Autoplay } from "swiper/modules"
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/autoplay';
    import Navbar from "$lib/Navbar.svelte";

    onMount(() => {
        const swiper = new Swiper('.mySwiper', {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        });
    });

    function scrollToContent() {
        const contentElement = document.querySelector('#statistics');
        if(contentElement)
            contentElement.scrollIntoView({ behavior: 'smooth' });
    }

    function scrollToTestimonials() {
        const testElement = document.querySelector('#testimonials');
        if(testElement)
            testElement.scrollIntoView({ behavior: 'smooth'});
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


<section id="statistics" class="text-center py-10">
    <h1 class="text-8xl mb-10 UnderstandingNumbersTextColor font-bold">Understanding the Numbers</h1>
    <div class="stat-container mx-auto">

        <div class="stat-block bg-yellow-100 p-6 rounded-lg shadow-lg mb-6">
            <div class="stat-title text-3xl text-gray-700">Successful Pregnancies Supported</div>
            <div class="stat-value text-6xl text-purple-600">89,400</div>
            <div class="stat-desc text-xl text-gray-500">Supported by our comprehensive care programs</div>
        </div>
        
        <div class="stat-block bg-pink-100 p-6 rounded-lg shadow-lg mb-6">
            <div class="stat-title text-3xl text-gray-700">Adoptions Facilitated</div>
            <div class="stat-value text-6xl text-purple-600">5,230</div>
            <div class="stat-desc text-xl text-gray-500">Finding loving homes for children</div>
        </div>

        <div class="stat-block bg-green-100 p-6 rounded-lg shadow-lg">
            <div class="stat-title text-3xl text-gray-700">Families Receiving Financial Aid</div>
            <div class="stat-value text-6xl text-purple-600">12,300</div>
            <div class="stat-desc text-xl text-gray-500">Easing the journey for new parents</div>
        </div>
        <button on:click={scrollToTestimonials} class="btn btn-primary mt-9">See Impact</button>
    </div>
</section>


<!-- Testimonials Section -->
<section id="testimonials" class="bg-gray-50 text-center py-10">
    <h1 class="text-8xl mb-10 UnderstandingNumbersTextColor font-bold">Stories of Impact</h1>
    
    <!-- Swiper -->
    <div class="mySwiper">
        <div class="swiper-wrapper">
            
            <!-- Testimonial Slide 1 -->
            <div class="swiper-slide">
            <blockquote class="max-w-screen-md mx-auto">
                <p class="text-2xl font-medium">
                "Pregnancy Paths was a pillar of support during my journey. Their compassionate guidance helped me make an informed decision with confidence and peace."
                </p>
                <figure>

                    <figcaption class="mt-4 p-10">— Emma S., Grateful Mother</figcaption>
                </figure>
            </blockquote>
            </div>
            <!-- Testimonial Slide 2 -->
            <div class="swiper-slide">
            <blockquote class="max-w-screen-md mx-auto">
                <p class="text-2xl font-medium">
                "The resources and community support I found here were life-changing. I'm thankful for the care and dedication of everyone involved."
                </p>
                <figure>

                    <figcaption class="mt-4">— Aiden J., Proud Parent</figcaption>
                </figure>
            </blockquote>
            </div>
            <!-- Testimonial Slide 3 -->
            <div class="swiper-slide">
                <blockquote class="max-w-screen-md mx-auto">
                    <p class="text-2xl font-medium">
                    "As someone facing difficult choices, the unbiased information and personal stories I found on Pregnancy Paths were invaluable."
                    </p>
                    <figure>

                        <figcaption class="mt-4">— Riley K., Empowered Visitor</figcaption>
                    </figure>
                </blockquote>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-pagination"></div>
            <!-- Add Navigation -->
        </div>
        
    </div>

    <a target="_blank" href="https://mcdonalds.com"><button class="btn btn-primary"> Get Help Now</button> </a> <a href="https://patreon.com" target="_blank"> <button class="btn btn-primary">Support Our Cause</button> </a>
</section>
<!-- <section id="baby-pictures">
    <h2>Gallery of Joy</h2>
    Baby pictures content goes here -->
<!-- </section> -->

<!-- <section id="donation">
    <h2>Support Our Cause</h2>
    Donation content goes here -->
<!-- </section> -->

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
    .UnderstandingNumbersTextColor {
        color: rgb(90, 90, 223);
    }

    .swiper-button-prev, .swiper-button-next {
        color: #333;
        width: 50px;
        height: 50px;
        background: rgba(92, 217, 233, 0.8);
        border-radius: 50%;
        z-index: 10;

    }

    .swiper-button-prev {
        left: 10px;
    }

    .swiper-button-next {
        right: 10px;
    }
    .swiper-pagination{
    
    }

    @media (max-width: 768px){
        .heroChris img {
            background-image: url("/hero.png");
            max-width: 5000px;
        }
        .UnderstandingNumbersTextColor{
            font-size: 34px;
        }
        .stat-title {
            font-size: 16px;
        }
        .stat-desc {
            font-size: 12px;
        }

        .swiper-button-prev, .swiper-button-next {
            color: #333;
            width: 50px !important;
            height: 50px !important;
            background: rgba(92, 217, 233, 0.8);
            border-radius: 50%;
            z-index: 10;
            bottom: 1px;
            

        }
        .swiper-slide {
            padding: 10px;
        }
    }
</style>
