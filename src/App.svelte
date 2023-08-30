<script>
    import { Router, Route } from 'svelte-routing';
    import Navbar from './pages/Navbar.svelte';
    import Intro from './pages/Intro.svelte';
</script>

<main class="bg-base-200 min-h-screen">
    <Router>
        <Navbar />
  
        <Route path="/digtastic-dev/" component={Intro} />
    </Router>
  </main>