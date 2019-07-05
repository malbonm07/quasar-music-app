const indexTrack = {};

function index(i) {
  return i + 1
}

indexTrack.install = function(Vue) {
  Vue.filter("indexTrack", val => {
    return index(val);
  });
};

export default indexTrack;