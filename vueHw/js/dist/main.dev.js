"use strict";

var API_KEY = "294b52ec";
var app = Vue.createApp({
  data: function data() {
    return {
      search_query: "Batman",
      search_year: '',
      search_type: '',
      movies_list: [],
      movie_info: {},
      showModal: false,
      favorites: [],
      blocksView: true,
      openFav: false,
      ratings: '',
      page: 1
    };
  },
  created: function created() {
    window.goToPage = this.goToPage.bind(this);
    var fav_list = localStorage.getItem('favorites');

    if (fav_list != null) {
      this.favorites = JSON.parse(fav_list);
    }

    var view = this.getCookie('view');

    if (typeof view != 'undefined') {
      if (view == 'blocks') {
        this.blocksView = true;
      } else {
        this.blocksView = false;
      }
    }
  },
  methods: {
    searchMovie: function searchMovie(reset_page) {
      var _this = this;

      if (this.searchMovie != '') {
        if (reset_page) {
          this.page = 1;
        }

        var url = "http://www.omdbapi.com/?apikey=" + API_KEY + '&s=' + this.search_query + '&page=' + this.page;

        if (this.search_query !== "") {
          axios.get(url).then(function (resp) {
            if (resp.data.Response == "True") {
              _this.movies_list = resp.data.Search;

              _this.pagination(resp.data.totalResults);
            } else {
              vanillaToast.error(resp.data.Error);
            }
          })["catch"](function (err) {
            vanillaToast.error(err);
          });
        }
      }
    },
    pagination: function pagination(total) {
      var per_page = 12;
      var pages = Math.floor(total / per_page);
      var list = '';

      if (this.page > 1) {
        list += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\" onclick=\"goToPage(".concat(this.page - 1, ")\">Previous</a></li>");
      }

      for (var i = 1; i < pages; i++) {
        if (i == this.page) {
          list += "<li class=\"page-item active\"><span class=\"page-link\">".concat(i, "</span></li>");
        } else {
          list += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\" onclick=\"goToPage(".concat(i, ")\">").concat(i, "</a></li>");
        }
      }

      if (this.page != pages) {
        list += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\" onclick=\"goToPage(".concat(this.page + 1, ")\">Next</a></li>");
      }

      document.getElementById('pagination').innerHTML = list;
    },
    goToPage: function goToPage(p) {
      this.page = p;
      this.searchMovie(false);
    },
    getDetail: function getDetail(id) {
      var _this2 = this;

      axios.get("http://www.omdbapi.com/?apikey=" + API_KEY + '&i=' + id).then(function (resp) {
        if (resp.data.Response == "True") {
          _this2.movie_info = resp.data;

          _this2.getRatingsHTML();

          _this2.toggleModalDetail(true);
        } else {
          alert(resp.data.Error);
        }
      })["catch"](function (err) {
        vanillaToast.error(err);
      });
    },
    getRatingsHTML: function getRatingsHTML() {
      var html = '';

      for (var i = 0; i < this.movie_info.Ratings.length; i++) {
        var rating = this.movie_info.Ratings[i];
        html += "\n                <div class=\"row\">\n                    <div class=\"col-6 kind\">\n                        ".concat(rating.Source, "\n                    </div>\n                    <div class=\"col-6 percent text-right\">\n                        ").concat(rating.Value, "\n                    </div>\n                </div>\n                ");
        var width = 0;

        switch (rating.Source) {
          case 'Internet Movie Database':
            width = 100 - parseFloat(rating.Value.split("/")[0]) * 10;
            break;

          case 'Rotten Tomatoes':
            width = 100 - parseInt(rating.Value);
            break;

          case 'Metacritic':
            width = 100 - parseInt(rating.Value.split("/")[0]);
            break;
        }

        html += "\n                <div class=\"rating_wrap\">\n                    <div class=\"scale\" style=\"width:".concat(width, "%\"></div>\n                </div>\n                ");
      }

      this.ratings = html;
    },
    toggleModalDetail: function toggleModalDetail(show) {
      this.showModal = show;

      if (show) {
        document.getElementById('exampleModal').style.display = 'block';
      } else {
        document.getElementById('exampleModal').style.display = 'none';
      }
    },
    toggleFavorites: function toggleFavorites(item) {
      var a = this.favorites.findIndex(function (el) {
        return el.imdbID == item.imdbID;
      });

      if (a === -1) {
        this.favorites.push(item);
        vanillaToast.info('Added to favorites', {
          duration: 1000,
          fadeDuration: 300
        });
      } else {
        this.favorites.splice(a, 1);
        vanillaToast.error('Removed from favorites', {
          duration: 1000,
          fadeDuration: 300
        });
      }

      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
    showFavorites: function showFavorites() {
      if (this.openFav == false) {
        this.openFav = true;
      } else {
        this.openFav = false;
      }
    },
    toggleView: function toggleView(is_blocks) {
      if (this.blocksView != is_blocks) {
        this.blocksView = is_blocks;
        var view = is_blocks ? 'blocks' : 'rows';
        this.setCookie('view', view, {
          expires: 60 * 60 * 24 * 365
        });
      }
    },
    setCookie: function setCookie(name, value, props) {
      props = props || {};
      var exp = props.expires;

      if (typeof exp == "number" && exp) {
        var d = new Date();
        d.setTime(d.getTime() + exp * 1000);
        exp = props.expires = d;
      }

      if (exp && exp.toUTCString) {
        props.expires = exp.toUTCString();
      }

      value = encodeURIComponent(value);
      var updatedCookie = name + "=" + value;

      for (var propName in props) {
        updatedCookie += "; " + propName;
        var propValue = props[propName];

        if (propValue !== true) {
          updatedCookie += "=" + propValue;
        }
      }

      document.cookie = updatedCookie;
    },
    getCookie: function getCookie(name) {
      var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }
  }
});
app.component('movie-item', {
  props: ['item'],
  methods: {
    getDetail: function getDetail(id) {
      this.$parent.getDetail(id);
    },
    toggleFavorites: function toggleFavorites(item) {
      this.$parent.toggleFavorites(item);
    }
  },
  template: '#movie_item'
});
app.component('movie-detail', {
  props: ['item', 'ratings'],
  methods: {
    getDetail: function getDetail(id) {
      this.$parent.getDetail(id);
    },
    toggleFavorites: function toggleFavorites(item) {
      this.$parent.toggleFavorites(item);
    }
  },
  template: '#movie_detail'
});
app.mount("#app");
$(document).ready(function () {
  $('.like').on('click', function () {
    $(this).toggleClass('clicked');
  });
});
/*

document.getElementsByClassName('like').addEventListener('click', function() {
    let like = document.getElementsByClassName('like');
    if (!like.classList.contains('clicked')) {
        like.classList.add('clicked')
    } else {
        like.classList.remove('clicked');
    }
});

*/