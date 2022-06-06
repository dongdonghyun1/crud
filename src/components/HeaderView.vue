<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/board/free">자유게시판</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "HeaderView",
  data() {
    return {};
  },
};
</script>
