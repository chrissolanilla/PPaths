<script>
    // If you have any script-specific functionality for the "About Us" section, you can add it here.
</script>

<section id="about-us" class="flex flex-wrap items-center py-10 hiddenChris">
    <div class="w-full md:w-1/4">
        <figure>
            <img src="gracelogo.png" alt="About Us" class="w-full h-auto rounded-lg shadow-lg bg-slate-500">
            <figcaption>Pregnancy Paths is associated with Grace Women's care center</figcaption>
        </figure>
    </div>
    <div class="w-full md:w-1/2 pl-0 md:pl-10">
        <h2 class="text-4xl text-purple-600 font-bold mb-6">Who We Are</h2>
        <p class="text-lg mb-4">
            At Pregnancy Paths, affiliated with Grace Women's Care Center, we understand the myriad of emotions and questions that come with an unexpected pregnancy. Our mission is to provide a sanctuary of hope and support, where individuals and families can find compassionate care and practical assistance. 
        </p>
        <p class="text-lg">
            We offer a range of free and confidential services designed to empower you with knowledge and options. From pregnancy testing and ultrasounds to educational resources on all pregnancy choices, our dedicated team is here to guide you every step of the way. Our commitment is to ensure that no one has to navigate this journey alone. Reach out to us and discover how we can assist you in moving forward with confidence and grace.
        </p>
    </div>
</section>

<style>
    #about-us {
        background-color: #f9f9f9; /* Light background to contrast with the main content area */
        padding: 2rem; /* Spacing around the content */
    }

    #about-us img {
        max-width: 100%; /* Ensure the image is responsive and fits within its container */
        border-radius: 0.5rem; /* Slightly rounded corners for the image */
        box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Subtle shadow for depth */
    }

    #about-us h2 {
        color: #4a3f55; /* Dark purple for the heading for contrast and readability */
    }

    #about-us p {
        color: #666; /* Darker text for better readability */
        line-height: 1.6; /* Improved line spacing for readability */
    }

    @media (max-width: 768px) {
        #about-us {
            flex-direction: column; /* Stack the image and text on smaller screens */
        }

        #about-us div {
            padding: 1rem 0; /* Spacing around each section on smaller screens */
        }
    }
</style>
