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
      <a class="btn btn-ghost normal-case text-xl font-bold">Pregnancy Paths</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li class="font-bold"><a on:click={() => scrollToSection('#statistics')}>Statistics</a></li>
        <li class="font-bold"><a on:click={() => scrollToSection('#testimonials')}>Testimonials</a></li>
        <!-- Add more menu items here -->
      </ul>
    </div>
  </nav>
  