<!-- Navbar.svelte in the lib directory -->
<script lang='ts'>
    // Function to handle scrolling to a specific section
    function scrollToSection(sectionId:any) {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  </script>
  
  <nav class="navbar bg-yellow-100 flex items-center">
    <div class="flex items-center justify-center">
      <a class="btn btn-ghost normal-case text-xl font-bold chrisClass">Pregnancy Paths</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li class="chrisTest font-bold"> <a on:click={() => scrollToSection('#about-us')}> About Us</a></li>
        <li class="chrisTest font-bold"><a on:click={() => scrollToSection('#statistics')}>Statistics</a></li>
        <li class="chrisTest font-bold"><a on:click={() => scrollToSection('#testimonials')}>Testimonials</a></li>
        <!-- Add more menu items here -->
      </ul>
    </div>
  </nav>
  <style lang="postcss">
    @media (max-width: 768px){
        .chrisClass {
            margin-left: 10px;
            font-size: 15px;
            
        }
        .chrisTest {
            font-size: 9.5px;
            margin-right: 0;
        }
    }
  </style>
  