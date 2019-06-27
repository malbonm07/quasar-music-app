const blur = {};

function setBlur(el, binding) {
  el.style.filter = !binding.value ? "blur(1.2px)" : "none";
  el.style.cursor = !binding.value ? "not-allowed" : "inherit";
  el.style.opacity = !binding.value ? "0.3" : "1";
  el.style.border = !binding.value ? "none" : "";

  el.querySelectorAll("button").forEach(b => {
    if (!binding.value) {
      b.setAttribute("disabled", true);
    }
    el.querySelectorAll("a").forEach(a => {
      if (!binding.value) {
        a.style.visibility = "hidden";
      } else {
        a.style.visibility = "visible";
        a.style.cursor = "pointer";
      }
    });
  });
}

blur.install = function(Vue) {
  Vue.directive("blur", {
    bind(el, binding) {
      setBlur(el, binding);
    }
  });
};

export default blur;
