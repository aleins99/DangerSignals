//flam
var fl_t = document.getElementById("flammable-title");
var fl_ct = document.getElementById("fl-ct");

//rad
var rd_t = document.getElementById("radioactive-title");
var rd_ct = document.getElementById("rd-ct");

//bio
var bh_t = document.getElementById("biohazard-title");
var bh_ct = document.getElementById("bh-ct");

/* active title and active content*/
let active_t = rd_t;
let active_ct = rd_ct;

// flam
fl_t.addEventListener("click", () => {
  /* if flam is active */
  if (active_t === fl_t) return;

  fl_t.classList.add("active");
  fl_ct.classList.remove("hide");
  // hide the current content
  active_ct.classList.add("hide");
  active_t.classList.remove("active");
  // new active
  active_t = fl_t;
  active_ct = fl_ct;
});

// rad
rd_t.addEventListener("click", () => {
  if (active_t === rd_t) return;
  rd_t.classList.add("active");
  rd_ct.classList.remove("hide");
  active_ct.classList.add("hide");
  active_t.classList.remove("active");
  active_t = rd_t;
  active_ct = rd_ct;
});

// bio
bh_t.addEventListener("click", () => {
  if (active_t === bh_t) return;
  bh_t.classList.add("active");
  bh_ct.classList.remove("hide");
  active_ct.classList.add("hide");
  active_t.classList.remove("active");
  active_t = bh_t;
  active_ct = bh_ct;
});
