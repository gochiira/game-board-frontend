<template>
  <div id="top" class="site">
    <header class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column has-text-centered is-8 box">
            <p class="title is-size-3 mt-1">
              ごちイラボード
            </p>
            <p class="subtitle is-size-6 mb-2">
              The clone of "Gochuumon wa bodoge desu ka?"
            </p>
          </div>
        </div>
      </div>
    </header>
    <main class="site-content">
      <nuxt />
    </main>
    <footer>
      <nav class="level mb-3">
        <p class="level-item has-text-centered">
          <a href="https://illust.gochiusa.team" target="_blank" rel="noopener noreferrer nofollow" class="has-text-centered is-size-6 heading"><span>
            Illust
          </span></a>
        </p>
        <p class="level-item has-text-centered">
          <a href="https://forms.gle/uf3gYMfFSTNxqDuW8" target="_blank" rel="noopener noreferrer nofollow" class="has-text-centered is-size-6 heading"><span>
            Contact
          </span></a>
        </p>
        <p class="level-item has-text-centered">
          <a href="https://gochiusa.com" target="_blank" rel="noopener noreferrer nofollow" class="has-text-centered is-size-6 heading">
            <span>Official</span>
          </a>
        </p>
      </nav>
    </footer>
  </div>
</template>

<style>
.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.site-content {
  flex: 1;
}

/* タイトルカラー */
p.title {
  color: #6B3939;
}

/* サブタイトル  */
p.subtitle {
  color: #955E4B;
}

p, span {
  color: #955E4B;
}

body {
  background-image:
    repeating-linear-gradient(90deg,#ffe9dc,#ffe9dc 18px,#ffece0 0,#ffece0 33px);
  background-repeat:
    repeat;
}
</style>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
