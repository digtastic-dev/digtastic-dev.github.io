<div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Home</a></li>
          <li>
            <a>Wiki</a>
            <ul class="p-2">
              <li><a>Home</a></li>
              <li><a>Items</a></li>
              <li><a>Progression</a></li>
            </ul>
          </li>
          <li><a>Resources</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-xl">Digtastic</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <li tabindex="0">
          <details>
            <summary>Wiki</summary>
            <ul class="p-2">
              <li><a>Home</a></li>
              <li><a>Items</a></li>
              <li><a>Progression</a></li>
            </ul>
          </details>
        </li>
        <li><a>Resources</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn">Status</a>
    </div>
  </div>