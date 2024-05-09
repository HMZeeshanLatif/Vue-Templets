<script setup></script>
<template>
  <nav>
    <div className="logo"><h2>Logo</h2></div>
    <input type="checkBox" id="check" />
    <label className="manuBar" htmlFor="check">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <ul>
      <li><a className="active" href="/">Home</a></li>
      <li><a href="/">About</a></li>
      <li><a href="/">Contact</a></li>
      <li><a href="/">Blog</a></li>
      <li><a href="/">Gallery</a></li>
    </ul>
  </nav>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
}

nav {
  background-color: #1f1f1f;
  align-items: center;
  color: white;
  padding: 20px 100px 20px 100px;
  display: flex;
  justify-content: space-between;
}

nav ul {
  list-style: none;
  display: flex;
}

nav ul li {
  margin-left: 30px;
}

nav ul li a {
  text-decoration: none;
  letter-spacing: 2px;
  color: white;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.5s ease;
  font-size: 18px;
  font-weight: 600;
}

nav ul li a:hover,
nav ul li a.active {
  background-color: white;
  color: #020202;
}
.manuBar span {
  display: none;
}
#check {
  display: none;
}

@media (max-width: 940px) {
  nav {
    padding: 10px 30px;
  }

  nav ul {
    position: fixed;
    top: 48px;
    left: -100%;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: #2a2929;
    text-align: center;
    transition: all 0.5s ease-out;
  }
  .manuBar span {
    border-radius: 5px;
    height: 4px;
    width: 25px;
    margin: 4px 0px;
    background-color: #ffffff;
    display: block;
  }
  #check:checked ~ .manuBar span:nth-child(2) {
    transition: opacity 1s ease-out;
    opacity: 0;
  }

  #check:checked ~ .manuBar span:nth-child(1) {
    transform: rotate(45deg) translateX(10px) translateY(2px);
    transition: transform 1s ease;
  }

  #check:checked ~ .manuBar span:nth-child(3) {
    transform: rotate(-45deg) translateX(9px) translateY(-1px);
    transition: transform 1s ease;
  }

  /* Transition for all spans */
  #check ~ .manuBar span {
    transition: transform 1s ease, visibility 0.5s ease; /* Smooth transition for all transformations */
  }

  #check:not(:checked) ~ .manuBar span:nth-child(2) {
    opacity: 1; /* Show the second span */
    transition: opacity 1s ease-out; /* Smooth transition for opacity */
  }

  #check:checked ~ ul {
    transition: all 0.5s ease-in;
    left: 0%;
  }

  nav ul li {
    margin: 20px 0;
  }

  nav ul li a {
    padding: 0px;
    color: #a1a1a1;
  }

  nav ul li a.active,
  nav ul li a:hover {
    background-color: transparent;
    color: #ffffff;
  }

  .logo {
    text-align: center;
  }

  .manuBar {
    font-size: 22px;
    cursor: pointer;
    display: block;
  }
}
</style>
