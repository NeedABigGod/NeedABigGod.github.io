<style lang="stylus">
  nav
    display flex
    flex-direction row
    justify-content center
    background-color red
    &>div
      display flex
      flex-direction row
      width 1000px
  .logo-image
    display block
    width 80px
    height 80px
    background-color blue

  .spacer
    flex 1 1 auto
</style>

<nav>
  <div>
    <img class="logo-image" src="#" alt="Logo" />
    <h1>Beth McGwire</h1>
    <div class="spacer" />
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#services">Services</a>
  </div>
</nav>
<slot />
<h1>Like the virus?</h1>